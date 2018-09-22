package com.theah64.shield.di.components;

import com.theah64.shield.di.modules.ApplicationContextModule;
import com.theah64.shield.di.modules.GuardModule;
import com.theah64.shield.di.modules.NetworkModule;
import com.theah64.shield.di.modules.PreferenceModule;
import com.theah64.shield.models.SplashActivityModel;
import com.theah64.shield.views.activities.LogInActivity;

import javax.inject.Singleton;

import dagger.Component;

@Singleton
@Component(
        modules = {
                PreferenceModule.class,
                NetworkModule.class,
                ApplicationContextModule.class,
                GuardModule.class
        }
)
public interface ApplicationComponent {
    void inject(LogInActivity logInActivity);
    void inject(SplashActivityModel model);
}
