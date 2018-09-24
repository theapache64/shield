package com.theah64.shield.di.modules.activities;

import com.theah64.shield.contracts.LogInActivityContract;
import com.theah64.shield.di.modules.NetworkModule;
import com.theah64.shield.presenters.LogInActivityPresenter;

import dagger.Module;
import dagger.Provides;

@Module(includes = {NetworkModule.class})
public class LogInActivityModule {
    private final LogInActivityContract.View view;

    public LogInActivityModule(LogInActivityContract.View view) {
        this.view = view;
    }

    @Provides
    LogInActivityContract.Presenter providePresenter(LogInActivityContract.View view) {
        return new LogInActivityPresenter(view);
    }

    @Provides
    LogInActivityContract.View provideView() {
        return this.view;
    }
}
