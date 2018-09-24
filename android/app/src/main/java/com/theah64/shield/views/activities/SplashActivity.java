package com.theah64.shield.views.activities;

import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;

import com.theah64.shield.R;
import com.theah64.shield.contracts.SplashActivityContract;
import com.theah64.shield.di.components.DaggerSplashActivityComponent;
import com.theah64.shield.di.modules.ApplicationContextModule;
import com.theah64.shield.di.modules.activities.SplashActivityModule;

import javax.inject.Inject;

public class SplashActivity extends AppCompatActivity implements SplashActivityContract.View {

    @Inject
    SplashActivityContract.Presenter presenter;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_splash);

        DaggerSplashActivityComponent.builder()
                .applicationContextModule(new ApplicationContextModule(this))
                .splashActivityModule(new SplashActivityModule(this))
                .build()
                .inject(this);


        this.presenter.startCounter(1000);
    }


    @Override
    public void initView() {
        // No UI items
    }

    @Override
    public void onTimeout(boolean isLoggedIn) {
        if (isLoggedIn) {
            // Starting MainActivity
            MainActivity.start(this);
        } else {
            // Starting LogInActivity
            LogInActivity.start(this);

        }
        finish();
    }
}
