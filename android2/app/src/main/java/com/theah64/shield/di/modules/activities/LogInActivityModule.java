package com.theah64.shield.di.modules.activities;

import com.theah64.shield.model.LogInActivityPresenterImpl;
import com.theah64.shield.presenter.LogInActivityPresenter;
import com.theah64.shield.view.LogInActivityView;

import dagger.Module;
import dagger.Provides;

@Module
public class LogInActivityModule {
    private final LogInActivityView view;

    public LogInActivityModule(LogInActivityView view) {
        this.view = view;
    }

    @Provides
    LogInActivityPresenterImpl provideLogInActivityPresenterImpl(LogInActivityView view) {
        return new LogInActivityPresenterImpl(view);
    }

    @Provides
    LogInActivityView provideLogInActivityView() {
        return this.view;
    }
}
