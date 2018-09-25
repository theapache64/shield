package com.theah64.shield.di.modules;

import android.content.Context;
import android.content.SharedPreferences;

import com.theah64.shield.gorilla.Gorilla;

import javax.inject.Named;
import javax.inject.Singleton;

import dagger.Module;
import dagger.Provides;

@Module(includes = ApplicationContextModule.class)
public class PreferenceModule {

    @Singleton
    @Provides
    SharedPreferences provideSharedPreference(@Named("application_context") Context context, @Named("pref_name") String prefName) {
        return context.getSharedPreferences(prefName, Context.MODE_PRIVATE);
    }

    @Provides
    @Named("pref_name")
    String providePrefName() {
        return Gorilla.getInstance().getPrefName();
    }
}
