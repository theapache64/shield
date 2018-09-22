package com.theah64.shield.di.modules;

import android.content.SharedPreferences;
import android.support.annotation.Nullable;

import com.google.gson.GsonBuilder;
import com.theah64.shield.api.responses.LogInResponse;

import dagger.Module;
import dagger.Provides;

@Module
public class GuardModule {

    @Nullable
    @Provides
    LogInResponse.Guard provideGuard(SharedPreferences sharedPreferences) {
        final String guardJson = sharedPreferences.getString(LogInResponse.Guard.KEY, null);
        if (guardJson != null) {
            // Has guard
            return new GsonBuilder()
                    .setLenient()
                    .create()
                    .fromJson(guardJson, LogInResponse.Guard.class);
        }
        return null;
    }
}
