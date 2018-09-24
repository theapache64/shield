package com.theah64.shield.di.components;

import com.theah64.shield.di.modules.ProgressManModule;
import com.theah64.shield.di.modules.SplashActivityModule;
import com.theah64.shield.views.activities.SplashActivity;

import dagger.Component;

@Component(modules = {
        SplashActivityModule.class
})
public interface SplashActivityComponent {
    void inject(SplashActivity activity);
}
