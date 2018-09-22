package com.theah64.shield.models;

import android.content.Context;
import android.content.SharedPreferences;
import android.os.Handler;

import com.theah64.shield.Shield;
import com.theah64.shield.api.responses.LogInResponse;
import com.theah64.shield.contracts.SplashActivityContract;

import javax.inject.Inject;

public class SplashActivityModel extends BaseModel implements SplashActivityContract.Model {

    @Inject
    SharedPreferences sharedPreferences;

    public SplashActivityModel(Context context) {
        ((Shield) context).getApplicationComponent().inject(this);
    }

    @Override
    public void startCounter(long durationInMillis, final SplashActivityContract.Callback callback) {
        new Handler().postDelayed(new Runnable() {
            @Override
            public void run() {
                callback.onSuccess(true);
            }
        }, durationInMillis);
    }
}
