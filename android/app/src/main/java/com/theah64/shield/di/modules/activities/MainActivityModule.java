package com.theah64.shield.di.modules.activities;

import com.theah64.shield.contracts.MainActivityContract;
import com.theah64.shield.presenters.MainActivityPresenter;

import dagger.Module;
import dagger.Provides;

@Module
public class MainActivityModule {

    private final MainActivityContract.View view;

    public MainActivityModule(MainActivityContract.View view) {
        this.view = view;
    }

    @Provides
    MainActivityContract.Presenter providePresenter(MainActivityContract.View view) {
        return new MainActivityPresenter(view);
    }

    @Provides
    MainActivityContract.View provideView() {
        return this.view;
    }
}
