package com.theah64.shield.presenters;

import com.theah64.shield.contracts.SplashActivityContract;
import com.theah64.shield.models.SplashActivityModel;

public class SplashActivityPresenter
        extends BasePresenter<SplashActivityContract.View>
        implements SplashActivityContract.Presenter {


    private final SplashActivityContract.Model model;

    public SplashActivityPresenter(SplashActivityContract.View view) {
        super(view);
        this.model = new SplashActivityModel();
    }

    @Override
    public void startCounter(long duration) {
        this.model.startCounter(duration, new SplashActivityContract.Callback() {
            @Override
            public void onSuccess() {
                getView().onTimeout();
            }
        });
    }
}
