package com.theah64.shield;

import android.app.Application;
import android.content.Context;

import com.joanzapata.iconify.Iconify;
import com.joanzapata.iconify.fonts.SimpleLineIconsModule;
import com.theah64.shield.gorilla.Gorilla;
import com.theah64.shield.gorilla.GorillaConfig;
import com.theah64.shield.di.components.ApplicationComponent;
import com.theah64.shield.di.components.DaggerApplicationComponent;
import com.theah64.shield.di.modules.ApplicationContextModule;
import com.theah64.shield.di.modules.PreferenceModule;

public class Shield extends Application {


    ApplicationComponent applicationComponent;

    @Override
    public void onCreate() {
        super.onCreate();

        Gorilla.init(
                new GorillaConfig.Builder()
                        .build()
        );

        Iconify.with(new SimpleLineIconsModule());

        // All app level configs are stored in Gorilla class
        Gorilla.init(
                new GorillaConfig.Builder()
                        .setBaseURL("http://theapache64.com/mock_api/get_json/shield/")
                        .build()
        );

        this.applicationComponent = DaggerApplicationComponent.builder()
                .preferenceModule(new PreferenceModule("shield"))
                .applicationContextModule(new ApplicationContextModule(this))
                .build();
    }


    public static Shield getInstance(Context context) {
        return (Shield) context.getApplicationContext();
    }

    public ApplicationComponent getApplicationComponent() {
        return applicationComponent;
    }
}
