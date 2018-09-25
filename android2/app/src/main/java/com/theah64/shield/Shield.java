package com.theah64.shield;

import android.app.Application;
import android.content.Context;

import com.joanzapata.iconify.Iconify;
import com.joanzapata.iconify.fonts.SimpleLineIconsModule;
import com.theah64.shield.di.components.ApplicationComponent;
import com.theah64.shield.di.components.DaggerApplicationComponent;
import com.theah64.shield.di.modules.ApplicationContextModule;
import com.theah64.shield.di.modules.GsonModule;
import com.theah64.shield.di.modules.NetworkModule;
import com.theah64.shield.di.modules.PreferenceModule;
import com.theah64.shield.gorilla.Gorilla;
import com.theah64.shield.gorilla.GorillaConfig;
import com.wang.avi.indicators.BallBeatIndicator;

public class Shield extends Application {

    static ApplicationComponent applicationComponent;

    @Override
    public void onCreate() {
        super.onCreate();

        final GorillaConfig config = new GorillaConfig.Builder()
                .setBaseURL("http://theapache64.com/mock_api/get_json/shield/")
                .setPrefName("shield")
                .setDefaultProgressIndicator(new BallBeatIndicator())
                .build();

        Gorilla.init(config);
        Iconify.with(new SimpleLineIconsModule());

        Shield.applicationComponent = DaggerApplicationComponent.builder()
                .applicationContextModule(new ApplicationContextModule(this))
                .preferenceModule(new PreferenceModule())
                .networkModule(new NetworkModule())
                .gsonModule(new GsonModule())
                .build();
    }


    public static ApplicationComponent getApplicationComponent() {
        return applicationComponent;
    }
}
