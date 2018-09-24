package com.theah64.shield.di.modules;

import com.theah64.shield.contracts.SplashActivityContract;
import com.theah64.shield.presenters.SplashActivityPresenter;

import dagger.Module;
import dagger.Provides;

@Module
public class SplashActivityModule {

    private final SplashActivityContract.View view;

    public SplashActivityModule(SplashActivityContract.View view) {
        this.view = view;
    }

    @Provides
    SplashActivityContract.Presenter providePresenter(SplashActivityContract.View view) {
        return new SplashActivityPresenter(view);
    }

    @Provides
    SplashActivityContract.View provideView() {
        return this.view;
    }

}
