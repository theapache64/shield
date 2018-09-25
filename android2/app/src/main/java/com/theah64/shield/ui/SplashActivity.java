package com.theah64.shield.ui;

import android.content.Context;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.widget.Toast;

import com.theah64.shield.R;
import com.theah64.shield.di.components.DaggerSplashActivityComponent;
import com.theah64.shield.di.modules.activities.SplashActivityModule;
import com.theah64.shield.presenter.SplashActivityPresenter;
import com.theah64.shield.view.SplashActivityView;

import javax.inject.Inject;

public class SplashActivity extends AppCompatActivity implements SplashActivityView {

    @Inject
    SplashActivityPresenter presenter;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_splash);

        DaggerSplashActivityComponent.builder()
                .splashActivityModule(new SplashActivityModule(this))
                .build()
                .inject(this);

        presenter.startCounting(2000);
    }

    @Override
    public void onTimeOut(boolean isLoggedIn) {
        if (isLoggedIn) {
            MainActivity.start(this);
        } else {
            LogInActivity.start(this);
        }
        finish();
    }
}
