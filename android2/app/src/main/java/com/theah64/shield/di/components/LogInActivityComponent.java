package com.theah64.shield.di.components;

import com.theah64.shield.di.modules.ProgressManModule;
import com.theah64.shield.di.modules.ValidatorModule;
import com.theah64.shield.di.modules.activities.LogInActivityModule;
import com.theah64.shield.di.scopes.PerActivity;
import com.theah64.shield.ui.LogInActivity;
import com.theah64.shield.utils.ProgressMan;
import com.theah64.shield.utils.Validator;

import dagger.Component;

@PerActivity
@Component(modules = {LogInActivityModule.class, ValidatorModule.class, ProgressManModule.class})
public interface LogInActivityComponent {
    void inject(LogInActivity logInActivity);
}
