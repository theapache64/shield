package com.theah64.shield.di.modules;

import com.theah64.shield.di.scopes.PerActivity;
import com.theah64.shield.ui.base.BaseAppCompatActivity;
import com.theah64.shield.utils.Validator;

import dagger.Module;
import dagger.Provides;

@Module
public class ValidatorModule {
    private final BaseAppCompatActivity activity;

    public ValidatorModule(BaseAppCompatActivity activity) {
        this.activity = activity;
    }

    @PerActivity
    @Provides
    Validator provideValidator(BaseAppCompatActivity activity) {
        return Validator.from(activity);
    }

    @Provides
    BaseAppCompatActivity provideActivity() {
        return this.activity;
    }
}
