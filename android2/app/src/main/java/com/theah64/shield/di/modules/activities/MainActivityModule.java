package com.theah64.shield.di.modules.activities;

import com.theah64.shield.api.responses.LoadHomeResponse;
import com.theah64.shield.model.MainActivityPresenterImpl;
import com.theah64.shield.presenter.MainActivityPresenter;
import com.theah64.shield.view.MainActivityView;
import com.theah64.shield.view.base.BaseNetworkView;

import dagger.Module;
import dagger.Provides;

@Module
public class MainActivityModule {

    private final BaseNetworkView<LoadHomeResponse> view;

    public MainActivityModule(BaseNetworkView<LoadHomeResponse> view) {
        this.view = view;
    }

    @Provides
    MainActivityPresenter provideMainActivityPresenter(BaseNetworkView<LoadHomeResponse> view) {
        return new MainActivityPresenterImpl(view);
    }

    @Provides
    BaseNetworkView<LoadHomeResponse> provideMainActivityView() {
        return this.view;
    }
}
