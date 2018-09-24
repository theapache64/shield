package com.theah64.shield.views.activities;

import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.support.v7.widget.Toolbar;
import android.view.View;
import android.widget.Button;

import com.theah64.shield.R;
import com.theah64.shield.contracts.MainActivityContract;
import com.theah64.shield.di.components.DaggerMainActivityComponent;
import com.theah64.shield.di.modules.activities.MainActivityModule;

import javax.inject.Inject;

import io.reactivex.disposables.CompositeDisposable;

public class MainActivity extends AppCompatActivity implements MainActivityContract.View {

    private static final String TAG = MainActivity.class.getSimpleName();
    Button btnCheck;

    @Inject
    MainActivityContract.Presenter presenter;

    private CompositeDisposable compositeDisposables = new CompositeDisposable();

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
    }

    @Override
    public void initView() {
        this.btnCheck = (Button) findViewById(R.id.bCheck);
        this.btnCheck.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                presenter.onClick();
            }
        });
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();

        this.compositeDisposables.clear();
    }

    @Override
    public void onData(String data) {
        this.btnCheck.setText(data);
    }

    public static void start(Context context) {
        context.startActivity(new Intent(context, MainActivity.class));
    }
}
