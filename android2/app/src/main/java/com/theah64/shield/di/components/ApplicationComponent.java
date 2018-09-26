package com.theah64.shield.di.components;

import com.theah64.shield.Shield;
import com.theah64.shield.di.modules.GsonModule;
import com.theah64.shield.di.modules.GuardModule;
import com.theah64.shield.di.modules.NetworkModule;
import com.theah64.shield.di.modules.PreferenceModule;
import com.theah64.shield.model.LogInActivityPresenterImpl;
import com.theah64.shield.model.MainActivityPresenterImpl;
import com.theah64.shield.model.SplashActivityPresenterImpl;

import javax.inject.Singleton;

import dagger.Component;

@Singleton
@Component(modules = {PreferenceModule.class, NetworkModule.class, GsonModule.class, GuardModule.class})
public interface ApplicationComponent {
    void inject(SplashActivityPresenterImpl splashActivityPresenterImpl);

    void inject(LogInActivityPresenterImpl splashActivityPresenterImpl);

    void inject(MainActivityPresenterImpl mainActivityPresenterImpl);

}
