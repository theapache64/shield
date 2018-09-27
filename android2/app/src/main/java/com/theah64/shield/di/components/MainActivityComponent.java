package com.theah64.shield.di.components;

import com.theah64.shield.di.modules.ProgressManModule;
import com.theah64.shield.di.modules.activities.MainActivityModule;
import com.theah64.shield.ui.MainActivity;

import dagger.Component;

@Component(modules = {MainActivityModule.class, ProgressManModule.class})
public interface MainActivityComponent {
    void inject(MainActivity mainActivity);
}
