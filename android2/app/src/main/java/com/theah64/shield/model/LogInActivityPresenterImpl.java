package com.theah64.shield.model;

import android.content.SharedPreferences;
import android.util.Log;

import com.google.gson.Gson;
import com.theah64.shield.Shield;
import com.theah64.shield.api.APIInterface;
import com.theah64.shield.api.responses.BaseAPIResponse;
import com.theah64.shield.api.responses.LogInResponse;
import com.theah64.shield.presenter.LogInActivityPresenter;
import com.theah64.shield.view.LogInActivityView;

import javax.inject.Inject;

import io.reactivex.SingleObserver;
import io.reactivex.android.schedulers.AndroidSchedulers;
import io.reactivex.disposables.Disposable;
import io.reactivex.observers.DisposableSingleObserver;
import io.reactivex.schedulers.Schedulers;

public class LogInActivityPresenterImpl implements LogInActivityPresenter {

    private static final String TAG = LogInActivityPresenterImpl.class.getSimpleName();
    @Inject
    APIInterface apiInterface;

    @Inject
    SharedPreferences sharedPreferences;

    @Inject
    Gson gson;

    private final LogInActivityView view;

    public LogInActivityPresenterImpl(LogInActivityView view) {
        this.view = view;

        Shield.getApplicationComponent().inject(this);
    }

    @Override
    public Disposable login(String username, String password) {

        final DisposableSingleObserver<BaseAPIResponse<LogInResponse>> observer = new DisposableSingleObserver<BaseAPIResponse<LogInResponse>>() {
            @Override
            public void onSuccess(BaseAPIResponse<LogInResponse> logInResponse) {


                if (logInResponse.isError()) {
                    view.onLoadFailed(logInResponse.getMessage());
                } else {

                    // Save user
                    final String guardJson = gson.toJson(logInResponse.getData().getGuard());

                    sharedPreferences.edit()
                            .putString(LogInResponse.Guard.KEY, guardJson)
                            .apply();

                    view.onLoaded(logInResponse);
                }
            }

            @Override
            public void onError(Throwable e) {
                Log.d(TAG, "Network error occurred ", e);
                view.onNetworkError(e.getMessage());
            }
        };

        return apiInterface
                .login(username, password)
                .observeOn(AndroidSchedulers.mainThread())
                .subscribeOn(Schedulers.io())
                .subscribeWith(observer);
    }
}
