package com.theah64.shield.di.modules;

import android.content.Context;

import com.theah64.shield.di.qualifiers.ApplicationContext;

import dagger.Module;
import dagger.Provides;


@Module
public class ApplicationContextModule {
    private final Context context;

    public ApplicationContextModule(Context context) {
        this.context = context;
    }

    @ApplicationContext
    @Provides
    Context provideApplicationContext() {
        return this.context;
    }
}
