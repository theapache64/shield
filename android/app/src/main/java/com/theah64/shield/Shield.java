package com.theah64.shield;

import android.app.Application;

import com.joanzapata.iconify.Iconify;
import com.joanzapata.iconify.fonts.SimpleLineIconsModule;

public class Shield extends Application {
    @Override
    public void onCreate() {
        super.onCreate();

        Iconify.with(new SimpleLineIconsModule());
    }
}
