package com.theah64.shield.di.components;

import com.theah64.shield.di.modules.SplashActivityModule;
import com.theah64.shield.di.scopes.PerActivity;
import com.theah64.shield.ui.SplashActivity;

import dagger.Component;

@PerActivity
@Component(modules = SplashActivityModule.class)
public interface SplashActivityComponent {
    void inject(SplashActivity splashActivity);
}
