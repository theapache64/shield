package com.theah64.shield.model;

import com.theah64.shield.Shield;
import com.theah64.shield.api.APIInterface;
import com.theah64.shield.api.responses.BaseAPIResponse;
import com.theah64.shield.api.responses.LoadHomeResponse;
import com.theah64.shield.presenter.MainActivityPresenter;
import com.theah64.shield.view.MainActivityView;

import javax.inject.Inject;

import io.reactivex.disposables.Disposable;
import io.reactivex.observers.DisposableSingleObserver;

public class MainActivityPresenterImpl implements MainActivityPresenter {

    @Inject
    APIInterface apiInterface;

    @Inject


    private final MainActivityView view;

    public MainActivityPresenterImpl(MainActivityView view) {
        this.view = view;
        Shield.getApplicationComponent().inject(this);
    }

    @Override
    public Disposable loadHome() {
        final DisposableSingleObserver<BaseAPIResponse<LoadHomeResponse>> observer = new DisposableSingleObserver<BaseAPIResponse<LoadHomeResponse>>() {
            @Override
            public void onSuccess(BaseAPIResponse<LoadHomeResponse> loadHomeResponseBaseAPIResponse) {

            }

            @Override
            public void onError(Throwable e) {

            }
        };
        return apiInterface.loadHome();
    }
}
