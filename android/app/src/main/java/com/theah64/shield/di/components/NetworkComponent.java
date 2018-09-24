package com.theah64.shield.di.components;

import com.theah64.shield.di.modules.NetworkModule;
import com.theah64.shield.models.LogInActivityModel;

import javax.inject.Singleton;

import dagger.Component;

@Singleton
@Component(modules = NetworkModule.class)
public interface NetworkComponent {
    void inject(LogInActivityModel model);
}
