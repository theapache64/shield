package com.theah64.shield.di.components;

import com.theah64.shield.di.modules.MainActivityModule;
import com.theah64.shield.views.activities.MainActivity;

import dagger.Component;

@Component(modules = MainActivityModule.class)
public interface MainActivityComponent {
    void inject(MainActivity activity);
}
