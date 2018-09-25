package com.theah64.shield.di.modules;

import android.content.Context;

import javax.inject.Named;
import javax.inject.Singleton;

import dagger.Module;
import dagger.Provides;


@Module
public class ApplicationContextModule {
    private final Context context;

    public ApplicationContextModule(Context context) {
        this.context = context;
    }

    @Singleton
    @Provides
    @Named("application_context")
    Context provideApplicationContext() {
        return this.context;
    }
}
