package com.theah64.shield.di.modules;

import android.content.SharedPreferences;
import android.support.annotation.Nullable;
import android.util.Log;

import com.google.gson.Gson;
import com.theah64.shield.api.responses.LogInResponse;
import com.theah64.shield.utils.Logx;

import dagger.Module;
import dagger.Provides;

@Module(includes = {
        PreferenceModule.class,
        GsonModule.class
})
public class GuardModule {

    @Nullable
    @Provides
    LogInResponse.Guard provideGuard(SharedPreferences sharedPreferences, Gson gson) {

        Log.d("Shifar", "Getting guard...");

        final String guardJson = sharedPreferences.getString(LogInResponse.Guard.KEY, null);
        if (guardJson != null) {
            Logx.d(this, "Good guard");
            return gson.fromJson(guardJson, LogInResponse.Guard.class);
        }
        Logx.d(this, "Bad guard");
        return null;
    }
}
