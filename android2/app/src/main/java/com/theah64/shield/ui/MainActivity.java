package com.theah64.shield.ui;

import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
import android.support.v7.widget.LinearLayoutManager;
import android.support.v7.widget.RecyclerView;
import android.support.v7.widget.Toolbar;


import com.theah64.shield.adapters.MainAdapter;
import com.theah64.shield.api.responses.BaseAPIResponse;
import com.theah64.shield.api.responses.LoadHomeResponse;
import com.theah64.shield.di.modules.activities.MainActivityModule;
import com.theah64.shield.pojos.GridMenuItem;
import com.theah64.shield.presenter.MainActivityPresenter;
import com.theah64.shield.ui.base.BaseNetworkActivity;

import java.util.ArrayList;
import java.util.List;

import javax.inject.Inject;

import butterknife.BindView;
import io.reactivex.disposables.Disposable;

public class MainActivity extends BaseNetworkActivity<LoadHomeResponse> {

    @Inject
    MainActivityPresenter presenter;

    @BindView(R.id.rvMain)
    RecyclerView rvMain;

    private static final List<GridMenuItem> menuItems = new ArrayList<>();

    /*static {
        new GridMenuItem(R.id.gmiIssuePass, "ISSUE NEW PASS", "plus"),
                new GridMenuItem(R.id.giIssuedPassed, "VIEW ISSUED PASSES", "eye"),
                new GridMenuItem(GI_MY_PROFILE, "MY PROFILE", "user"),
                new GridMenuItem(GI_GUARDS, "GUARDS", "mustache"),
                new GridMenuItem(GI_OTHER, "OTHER", "tag"),
                new GridMenuItem(GI_LOGOUT, "LOGOUT", "logout"),
    }*/

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

        rvMain.setLayoutManager(new LinearLayoutManager(this));
        // rvMain.setAdapter(new MainAdapter(this, menuItems, ));


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
