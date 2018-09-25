package com.theah64.shield.di.modules.activities;

import com.theah64.shield.model.MainActivityPresenterImpl;
import com.theah64.shield.presenter.MainActivityPresenter;
import com.theah64.shield.view.MainActivityView;

import dagger.Module;
import dagger.Provides;

@Module
public class MainActivityModule {

    private final MainActivityView view;

    public MainActivityModule(MainActivityView view) {
        this.view = view;
    }

    @Provides
    MainActivityPresenter provideMainActivityPresenter(MainActivityView view) {
        return new MainActivityPresenterImpl(view);
    }

    @Provides
    MainActivityView provideMainActivityView() {
        return this.view;
    }
}
