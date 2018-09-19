package com.theah64.shield.views;

import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.support.v7.widget.Toolbar;
import android.view.View;
import android.widget.Button;
import android.widget.Toast;

import com.theah64.shield.R;
import com.theah64.shield.contracts.MainActivityContract;
import com.theah64.shield.presenters.MainActivityPresenter;

public class MainActivity extends AppCompatActivity implements MainActivityContract.View {

    Button btnCheck;
    MainActivityContract.Presenter presenter;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        Toolbar toolbar = (Toolbar) findViewById(R.id.toolbar);
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
    public void onData(String data) {
        this.btnCheck.setText(data);
    }
}
