package com.theah64.shield.di.modules;

import android.util.Log;

import com.theah64.shield.utils.Validator;
import com.theah64.shield.views.activities.base.BaseAppCompatActivity;

import dagger.Module;
import dagger.Provides;

@Module
public class ValidatorModule {
    private final BaseAppCompatActivity baseAppCompatActivity;

    public ValidatorModule(BaseAppCompatActivity baseAppCompatActivity) {
        this.baseAppCompatActivity = baseAppCompatActivity;
    }

    @Provides
    Validator provideValidator(BaseAppCompatActivity activity) {
        return Validator.from(activity);
    }

    @Provides
    BaseAppCompatActivity provideBaseAppCompatActivity() {
        return this.baseAppCompatActivity;
    }
}
