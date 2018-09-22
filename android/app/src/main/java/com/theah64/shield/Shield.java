package com.theah64.shield;

import android.app.Application;
import android.content.Context;
import android.content.SharedPreferences;

import com.joanzapata.iconify.Iconify;
import com.joanzapata.iconify.fonts.SimpleLineIconsModule;
import com.theah64.shield.di.components.ApplicationComponent;
import com.theah64.shield.di.components.DaggerApplicationComponent;
import com.theah64.shield.di.modules.ApplicationContextModule;
import com.theah64.shield.di.modules.NetworkModule;
import com.theah64.shield.di.modules.PreferenceModule;

import javax.inject.Inject;

import retrofit2.Retrofit;

public class Shield extends Application {


    static ApplicationComponent applicationComponent;

    @Override
    public void onCreate() {
        super.onCreate();

        Iconify.with(new SimpleLineIconsModule());
        initAppComponent(this);
    }

    private static void initAppComponent(Context context) {

        Shield.applicationComponent = DaggerApplicationComponent.builder()
                .networkModule(
                        new NetworkModule("http://theapache64.com/mock_api/get_json/shield/")
                )
                .preferenceModule(new PreferenceModule("shield"))
                .applicationContextModule(new ApplicationContextModule(context))
                .build();

    }

    public static ApplicationComponent getApplicationComponent() {
        return applicationComponent;
    }
}
