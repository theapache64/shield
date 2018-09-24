package com.theah64.shield.presenters;

import android.content.Context;

import com.theah64.gorilla.presenters.BasePresenter;
import com.theah64.shield.contracts.SplashActivityContract;
import com.theah64.shield.di.qualifiers.ApplicationContext;
import com.theah64.shield.models.SplashActivityModel;

import javax.inject.Inject;

public class SplashActivityPresenter
        extends BasePresenter<SplashActivityContract.View>
        implements SplashActivityContract.Presenter {


    private final SplashActivityContract.Model model;

    @Inject
    public SplashActivityPresenter(SplashActivityContract.View view, @ApplicationContext Context context) {
        super(view);
        this.model = new SplashActivityModel(context);
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
