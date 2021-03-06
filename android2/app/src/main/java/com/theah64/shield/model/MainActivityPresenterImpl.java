package com.theah64.shield.model;

import android.support.annotation.Nullable;
import android.util.Log;

import com.theah64.shield.Shield;
import com.theah64.shield.api.APIInterface;
import com.theah64.shield.api.responses.BaseAPIResponse;
import com.theah64.shield.api.responses.LoadHomeResponse;
import com.theah64.shield.api.responses.LogInResponse;
import com.theah64.shield.presenter.MainActivityPresenter;
import com.theah64.shield.view.base.BaseNetworkView;

import javax.inject.Inject;

import io.reactivex.android.schedulers.AndroidSchedulers;
import io.reactivex.disposables.Disposable;
import io.reactivex.observers.DisposableSingleObserver;
import io.reactivex.schedulers.Schedulers;

public class MainActivityPresenterImpl implements MainActivityPresenter {

    private static final String TAG = MainActivityPresenterImpl.class.getSimpleName();
    @Inject
    APIInterface apiInterface;

    @Nullable
    @Inject
    LogInResponse.Guard guard;


    private final BaseNetworkView<LoadHomeResponse> view;

    public MainActivityPresenterImpl(BaseNetworkView<LoadHomeResponse> view) {
        this.view = view;
        Shield.getApplicationComponent().inject(this);

        Log.d(TAG, "guard is " + guard);
    }

    @Override
    public Disposable loadHome() {
        final DisposableSingleObserver<BaseAPIResponse<LoadHomeResponse>> observer = new DisposableSingleObserver<BaseAPIResponse<LoadHomeResponse>>() {
            @Override
            public void onSuccess(BaseAPIResponse<LoadHomeResponse> resp) {
                if (resp.isError()) {
                    view.onLoadFailed(resp.getMessage());
                } else {
                    view.onLoaded(resp);
                }
            }

            @Override
            public void onError(Throwable e) {
                view.onNetworkError(e.getMessage());
            }
        };
        assert guard != null;
        return apiInterface.loadHome(guard.getApiKey())
                .observeOn(AndroidSchedulers.mainThread())
                .subscribeOn(Schedulers.io())
                .subscribeWith(observer);
    }
}
