package com.theah64.shield.di.components;

import com.theah64.shield.di.modules.LogInActivityModule;
import com.theah64.shield.di.modules.NetworkModule;
import com.theah64.shield.di.qualifiers.ActivityContext;
import com.theah64.shield.views.activities.LogInActivity;

import dagger.Component;

@Component(modules = {
        LogInActivityModule.class
})
public interface LogInActivityComponent {
}
