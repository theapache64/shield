package com.theah64.shield.presenters;

import android.content.Context;

import com.theah64.guerilla.presenters.BasePresenter;
import com.theah64.shield.contracts.SplashActivityContract;
import com.theah64.shield.models.SplashActivityModel;

public class SplashActivityPresenter
        extends BasePresenter<SplashActivityContract.View>
        implements SplashActivityContract.Presenter {


    private final SplashActivityContract.Model model;

    public SplashActivityPresenter(SplashActivityContract.View view, Context context) {
        super(view);
        this.model = new SplashActivityModel();
    }

    @Override
    public void startCounter(long duration) {
        this.model.startCounter(duration, new SplashActivityContract.Callback() {
            @Override
            public void onSuccess(boolean isLoggedIn) {
                // Getting pref and checking if it's logged in
                getView().onTimeout(isLoggedIn);
            }
        });
    }
}
