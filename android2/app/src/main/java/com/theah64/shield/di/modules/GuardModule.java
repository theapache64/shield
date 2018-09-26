package com.theah64.shield.di.modules;

import android.content.SharedPreferences;
import android.util.Log;

import com.google.gson.Gson;
import com.theah64.shield.api.responses.LogInResponse;

import dagger.Module;
import dagger.Provides;

@Module(includes = {
        PreferenceModule.class,
        GsonModule.class
})
public class GuardModule {
    @Provides
    LogInResponse.Guard provideGuard(SharedPreferences sharedPreferences, Gson gson) {

        Log.d("Shifar", "Getting guard...");

        final String guardJson = sharedPreferences.getString(LogInResponse.Guard.KEY, null);
        if (guardJson != null) {
            System.out.println("Good guard");
            return gson.fromJson(guardJson, LogInResponse.Guard.class);
        }
        System.out.println("Bad guard");
        return null;
    }
}
