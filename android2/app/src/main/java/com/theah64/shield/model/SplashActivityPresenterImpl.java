package com.theah64.shield.model;

import android.os.Handler;

import com.theah64.shield.presenter.SplashActivityPresenter;
import com.theah64.shield.view.SplashActivityView;

public class SplashActivityPresenterImpl implements SplashActivityPresenter {

    private final SplashActivityView view;

    public SplashActivityPresenterImpl(SplashActivityView view) {
        this.view = view;
    }

    @Override
    public void startCounting(long duration) {
        new Handler().postDelayed(new Runnable() {
            @Override
            public void run() {
                view.onTimeOut();
            }
        }, duration);
    }
}
