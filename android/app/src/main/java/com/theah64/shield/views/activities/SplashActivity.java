package com.theah64.shield.views.activities;

import android.content.Intent;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;

import com.theah64.gorilla.utils.ProgressMan;
import com.theah64.shield.R;
import com.theah64.shield.contracts.SplashActivityContract;
import com.theah64.shield.di.components.DaggerSplashActivityComponent;
import com.theah64.shield.di.modules.SplashActivityModule;

import javax.inject.Inject;

public class SplashActivity extends AppCompatActivity implements SplashActivityContract.View {

    @Inject
    SplashActivityContract.Presenter presenter;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_splash);

        DaggerSplashActivityComponent.builder()
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
            startActivity(new Intent(this, LogInActivity.class));
        } else {
            // Starting LogInActivity

        }
        finish();
    }
}
