package com.theah64.shield.ui;

import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
import android.support.design.widget.FloatingActionButton;
import android.support.design.widget.Snackbar;
import android.support.v7.app.AppCompatActivity;
import android.support.v7.widget.Toolbar;
import android.view.View;
import android.view.Menu;
import android.view.MenuItem;

import com.theah64.shield.R;
import com.theah64.shield.api.responses.LoadHomeResponse;
import com.theah64.shield.di.components.DaggerMainActivityComponent;
import com.theah64.shield.di.modules.ProgressManModule;
import com.theah64.shield.di.modules.activities.MainActivityModule;
import com.theah64.shield.presenter.MainActivityPresenter;
import com.theah64.shield.ui.base.BaseAppCompatActivity;
import com.theah64.shield.utils.ProgressMan;
import com.theah64.shield.view.MainActivityView;

import javax.inject.Inject;

public class MainActivity extends BaseAppCompatActivity implements MainActivityView {

    @Inject
    MainActivityPresenter presenter;

    @Inject
    ProgressMan progressMan;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        Toolbar toolbar = findViewById(R.id.toolbar);
        setSupportActionBar(toolbar);

        DaggerMainActivityComponent.builder()
                .mainActivityModule(new MainActivityModule(this))
                .progressManModule(new ProgressManModule(this))
                .build()
                .inject(this);

        addToCompositeDisposable(presenter.loadHome());
        progressMan.inflate();
        progressMan.showLoading("Loading home...");
    }

    public static void start(Context context) {
        final Intent mainIntent = new Intent(context, MainActivity.class);
        context.startActivity(mainIntent);
    }

    @Override
    public void onHomeLoaded(LoadHomeResponse response) {
        progressMan.hideLoading();
    }

    @Override
    public void onHomeLoadFailed(String reason) {
        progressMan.hideLoading();
    }

    @Override
    public void onNetworkError(String reason) {
        progressMan.hideLoading();
    }
}
