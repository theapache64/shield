package com.theah64.shield.presenters;

import com.theah64.shield.contracts.SplashActivityContract;
import com.theah64.shield.models.SplashActivityModel;
import com.theah64.shield.views.SplashActivity;

public class SplashActivityPresenter implements SplashActivityContract.Presenter {

    private final SplashActivityContract.View view;
    private final SplashActivityContract.Model model;

    public SplashActivityPresenter(SplashActivityContract.View view) {
        this.view = view;
        this.model = new SplashActivityModel();
    }


    @Override
    public void startCounter(long duration) {
        this.model.startCounter(duration, new SplashActivityContract.Callback() {
            @Override
            public void onSuccess() {
                SplashActivityPresenter.this.view.onTimeout();
            }
        });
    }
}
