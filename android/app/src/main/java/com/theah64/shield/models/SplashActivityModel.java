package com.theah64.shield.models;

import android.os.Handler;

import com.theah64.shield.contracts.SplashActivityContract;

public class SplashActivityModel extends BaseModel implements SplashActivityContract.Model {

    @Override
    public void startCounter(long durationInMillis, final SplashActivityContract.Callback callback) {
        new Handler().postDelayed(new Runnable() {
            @Override
            public void run() {
                callback.onSuccess();
            }
        }, durationInMillis);
    }
}
