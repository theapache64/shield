package com.theah64.shield.views.activities;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;

import com.theah64.shield.R;
import com.theah64.shield.contracts.SplashActivityContract;
import com.theah64.shield.presenters.SplashActivityPresenter;

public class SplashActivity extends AppCompatActivity implements SplashActivityContract.View {

    SplashActivityContract.Presenter presenter;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_splash);

        this.presenter = new SplashActivityPresenter(this, getApplicationContext());
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
