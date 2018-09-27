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
import android.widget.Toast;

import com.theah64.shield.R;
import com.theah64.shield.api.responses.BaseAPIResponse;
import com.theah64.shield.api.responses.LoadHomeResponse;
import com.theah64.shield.di.components.DaggerMainActivityComponent;
import com.theah64.shield.di.modules.ProgressManModule;
import com.theah64.shield.di.modules.activities.MainActivityModule;
import com.theah64.shield.presenter.MainActivityPresenter;
import com.theah64.shield.ui.base.BaseAppCompatActivity;
import com.theah64.shield.ui.base.BaseNetworkActivity;
import com.theah64.shield.ui.base.BaseProgressManActivity;
import com.theah64.shield.utils.ProgressMan;
import com.theah64.shield.view.MainActivityView;

import javax.inject.Inject;

import io.reactivex.disposables.Disposable;

public class MainActivity extends BaseNetworkActivity<LoadHomeResponse> {

    @Inject
    MainActivityPresenter presenter;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        Toolbar toolbar = findViewById(R.id.toolbar);
        setSupportActionBar(toolbar);

        DaggerMainActivityComponent.builder()
                .mainActivityModule(new MainActivityModule(this))
                .build()
                .inject(this);

        load();
    }

    @Override
    protected Disposable getAPICall() {
        return presenter.loadHome();
    }

    @Override
    public void onLoaded(BaseAPIResponse<LoadHomeResponse> response) {
        super.onLoaded(response);

    }

    public static void start(Context context) {
        final Intent mainIntent = new Intent(context, MainActivity.class);
        context.startActivity(mainIntent);
    }


}
