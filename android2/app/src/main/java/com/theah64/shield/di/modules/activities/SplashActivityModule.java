package com.theah64.shield.di.modules.activities;

import com.theah64.shield.di.scopes.PerActivity;
import com.theah64.shield.model.SplashActivityPresenterImpl;
import com.theah64.shield.presenter.SplashActivityPresenter;
import com.theah64.shield.view.SplashActivityView;

import dagger.Module;
import dagger.Provides;

@Module
public class SplashActivityModule {

    private final SplashActivityView view;

    public SplashActivityModule(SplashActivityView view) {
        this.view = view;
    }

    @PerActivity
    @Provides
    SplashActivityPresenter provideSplashActivityPresenter(SplashActivityView view) {
        return new SplashActivityPresenterImpl(view);
    }

    @PerActivity
    @Provides
    SplashActivityView provideSplashActivityView() {
        return this.view;
    }
}
