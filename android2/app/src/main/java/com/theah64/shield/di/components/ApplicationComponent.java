package com.theah64.shield.di.components;

import com.theah64.shield.Shield;
import com.theah64.shield.di.modules.GsonModule;
import com.theah64.shield.di.modules.NetworkModule;
import com.theah64.shield.di.modules.PreferenceModule;
import com.theah64.shield.model.SplashActivityPresenterImpl;

import javax.inject.Singleton;

import dagger.Component;

@Singleton
@Component(modules = {PreferenceModule.class, NetworkModule.class, GsonModule.class})
public interface ApplicationComponent {
    void inject(SplashActivityPresenterImpl splashActivityPresenterImpl);
}
