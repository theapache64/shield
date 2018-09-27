package com.theah64.shield.model;

import android.content.SharedPreferences;
import android.os.Handler;
import android.support.annotation.Nullable;

import com.google.gson.Gson;
import com.theah64.shield.Shield;
import com.theah64.shield.api.responses.LogInResponse;
import com.theah64.shield.presenter.SplashActivityPresenter;
import com.theah64.shield.view.SplashActivityView;

import javax.inject.Inject;

public class SplashActivityPresenterImpl implements SplashActivityPresenter {

    @Inject
    Gson gson;

    @Nullable
    @Inject
    LogInResponse.Guard guard;

    private final SplashActivityView view;

    public SplashActivityPresenterImpl(SplashActivityView view) {
        this.view = view;

        Shield.getApplicationComponent()
                .inject(this);
    }

    @Override
    public void startCounting(long duration) {
        new Handler().postDelayed(new Runnable() {
            @Override
            public void run() {
                final boolean isLoggedIn = guard != null;
                view.onTimeOut(isLoggedIn);
            }
        }, duration);
    }
}
