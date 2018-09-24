package com.theah64.shield.di.modules;

import android.app.Activity;

import com.theah64.gorilla.utils.ProgressMan;

import dagger.Module;
import dagger.Provides;

@Module
public class ProgressManModule {

    private final Activity activity;

    public ProgressManModule(Activity activity) {
        this.activity = activity;
    }

    @Provides
    ProgressMan provideProgressMan(Activity activity) {
        return new ProgressMan(activity);
    }

    @Provides
    Activity provideActivity() {
        return this.activity;
    }
}
