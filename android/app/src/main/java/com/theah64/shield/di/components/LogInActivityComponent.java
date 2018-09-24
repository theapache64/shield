package com.theah64.shield.di.components;

import com.theah64.shield.di.modules.activities.LogInActivityModule;
import com.theah64.shield.models.LogInActivityModel;
import com.theah64.shield.views.activities.LogInActivity;

import javax.inject.Singleton;

import dagger.Component;

@Singleton
@Component(modules = {
        LogInActivityModule.class
})
public interface LogInActivityComponent {
    void inject(LogInActivity logInActivity);
    void inject(LogInActivityModel logInActivity);
}
