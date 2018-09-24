package com.theah64.shield.models;

import com.theah64.shield.api.APIInterface;
import com.theah64.shield.api.responses.BaseAPIResponse;
import com.theah64.shield.api.responses.LogInResponse;
import com.theah64.shield.contracts.LogInActivityContract;
import com.theah64.shield.di.components.DaggerLogInActivityComponent;
import com.theah64.shield.di.components.DaggerNetworkComponent;
import com.theah64.shield.di.modules.NetworkModule;
import com.theah64.shield.di.modules.activities.LogInActivityModule;
import com.theah64.shield.presenters.LogInActivityPresenter;

import javax.inject.Inject;

import io.reactivex.android.schedulers.AndroidSchedulers;
import io.reactivex.observers.DisposableSingleObserver;
import io.reactivex.schedulers.Schedulers;

public class LogInActivityModel implements LogInActivityContract.Model {


    private final LogInActivityPresenter presenter;

    @Inject
    APIInterface apiInterface;

    public LogInActivityModel(LogInActivityPresenter presenter) {
        this.presenter = presenter;
        DaggerNetworkComponent
                .builder()
                .networkModule(new NetworkModule())
                .build()
                .inject(this);
    }


    @Override
    public DisposableSingleObserver<BaseAPIResponse<LogInResponse>> login(String username, String password) {

        final DisposableSingleObserver<BaseAPIResponse<LogInResponse>> observer = new DisposableSingleObserver<BaseAPIResponse<LogInResponse>>() {
            @Override
            public void onSuccess(BaseAPIResponse<LogInResponse> logInResponseBaseAPIResponse) {
                LogInActivityModel.this.presenter.onLoggedIn(logInResponseBaseAPIResponse);
            }

            @Override
            public void onError(Throwable e) {
                LogInActivityModel.this.presenter.onLogInFailed(e);
            }
        };


        return apiInterface.login(username, password)
                .observeOn(AndroidSchedulers.mainThread())
                .subscribeOn(Schedulers.io())
                .subscribeWith(observer);
    }

    @Override
    public void saveGuard(LogInResponse.Guard guard) {

    }
}
