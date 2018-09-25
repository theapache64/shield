package com.theah64.shield.model;

import android.content.SharedPreferences;
import android.os.Handler;

import com.google.gson.Gson;
import com.theah64.shield.Shield;
import com.theah64.shield.api.responses.LogInResponse;
import com.theah64.shield.presenter.SplashActivityPresenter;
import com.theah64.shield.view.SplashActivityView;

import javax.inject.Inject;

public class SplashActivityPresenterImpl implements SplashActivityPresenter {

    @Inject
    SharedPreferences sharedPreferences;

    @Inject
    Gson gson;

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

                final String guardJson = sharedPreferences.getString(LogInResponse.Guard.KEY, null);

                LogInResponse.Guard guard = null;

                if (guardJson != null) {
                    guard = gson.fromJson(guardJson, LogInResponse.Guard.class);
                }

                final boolean isLoggedIn = guard != null;
                view.onTimeOut(false);
            }
        }, duration);
    }
}
