package com.theah64.shield.views.activities;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;

import com.theah64.gorilla.utils.ProgressMan;
import com.theah64.shield.R;
import com.theah64.shield.contracts.SplashActivityContract;
import com.theah64.shield.di.components.DaggerProgressManComponent;
import com.theah64.shield.di.modules.ProgressManModule;
import com.theah64.shield.presenters.SplashActivityPresenter;

import javax.inject.Inject;

public class SplashActivity extends AppCompatActivity implements SplashActivityContract.View {

    @Inject
    ProgressMan progressMan;

    SplashActivityContract.Presenter presenter;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_splash);

        this.presenter = new SplashActivityPresenter(this);
        this.presenter.startCounter(1000);

        DaggerProgressManComponent.builder()
                .progressManModule(new ProgressManModule(this))
                .build()
                .inject(this);

        progressMan.inflate();
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
