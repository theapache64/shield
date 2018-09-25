package com.theah64.shield.di.modules;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import javax.inject.Singleton;

import dagger.Module;
import dagger.Provides;

@Module
public class GsonModule {
    @Singleton
    @Provides
    Gson provideGson() {
        return new GsonBuilder().create();
    }
}
