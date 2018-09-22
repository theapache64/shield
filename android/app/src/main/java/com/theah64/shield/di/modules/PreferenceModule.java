package com.theah64.shield.di.modules;

import android.content.Context;
import android.content.SharedPreferences;

import com.theah64.shield.di.qualifiers.ApplicationContext;

import javax.inject.Singleton;

import dagger.Module;
import dagger.Provides;

@Module(
        includes = ApplicationContextModule.class
)
public class PreferenceModule {

    private final String fileName;

    public PreferenceModule(String fileName) {
        this.fileName = fileName;
    }

    @Singleton
    @Provides
    SharedPreferences provideSharedPreferences(@ApplicationContext Context context) {
        return context.getSharedPreferences(this.fileName, Context.MODE_PRIVATE);
    }
}
