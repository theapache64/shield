package com.theah64.shield.views.activities;

import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.support.v7.widget.Toolbar;
import android.view.View;
import android.widget.Button;

import com.theah64.shield.R;
import com.theah64.shield.contracts.MainActivityContract;
import com.theah64.shield.presenters.MainActivityPresenter;

import io.reactivex.disposables.CompositeDisposable;

public class MainActivity extends AppCompatActivity implements MainActivityContract.View {

    private static final String TAG = MainActivity.class.getSimpleName();
    Button btnCheck;
    MainActivityContract.Presenter presenter;
    private CompositeDisposable compositeDisposables = new CompositeDisposable();

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        Toolbar toolbar = findViewById(R.id.toolbar);
        setSupportActionBar(toolbar);

        presenter = new MainActivityPresenter(this);
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
}
