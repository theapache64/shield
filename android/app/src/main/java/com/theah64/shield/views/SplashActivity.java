package com.theah64.shield.views;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.widget.Toast;

import com.theah64.shield.R;
import com.theah64.shield.contracts.SplashActivityContract;
import com.theah64.shield.presenters.SplashActivityPresenter;

public class SplashActivity extends AppCompatActivity implements SplashActivityContract.View {

    SplashActivityContract.Presenter presenter;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_splash);

        this.presenter = new SplashActivityPresenter(this);
        this.presenter.startCounter(1000);
    }

    @Override
    public void onTimeout() {
        startActivity(new Intent(this, MainActivity.class));
        finish();
    }

    @Override
    public void initView() {
        // No UI items
    }
}
