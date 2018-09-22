package com.theah64.shield.models;

import android.content.Context;
import android.content.SharedPreferences;
import android.os.Handler;
import android.support.annotation.Nullable;
import android.util.Log;

import com.theah64.shield.Shield;
import com.theah64.shield.api.responses.LogInResponse;
import com.theah64.shield.contracts.SplashActivityContract;
import com.theah64.shield.di.qualifiers.ApplicationContext;

import javax.inject.Inject;

public class SplashActivityModel extends BaseModel implements SplashActivityContract.Model {

    @Inject
    SharedPreferences sharedPreferences;

    @Nullable
    @Inject
    LogInResponse.Guard guard;

    @Inject
    @ApplicationContext
    Context context;

    public SplashActivityModel() {
        Shield.getApplicationComponent().inject(this);
    }

    @Override
    public void startCounter(long durationInMillis, final SplashActivityContract.Callback callback) {
        new Handler().postDelayed(new Runnable() {
            @Override
            public void run() {
                Log.d("X", "Context is " + context);
                Log.d("X", "Guard is " + guard);
                callback.onSuccess(true);
            }
        }, durationInMillis);
    }
}
