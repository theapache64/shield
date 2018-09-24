package com.theah64.shield.views.activities;

import android.os.Bundle;
import android.widget.Toast;

import com.theah64.gorilla.views.activities.BaseProgressManActivity;
import com.theah64.shield.R;
import com.theah64.shield.Shield;
import com.theah64.shield.contracts.LogInActivityContract;
import com.theah64.shield.di.components.DaggerLogInActivityComponent;
import com.theah64.shield.di.modules.LogInActivityModule;
import com.theah64.shield.di.modules.NetworkModule;

import javax.inject.Inject;

import butterknife.OnClick;
import retrofit2.Retrofit;

public class LogInActivity extends BaseProgressManActivity implements LogInActivityContract.View {


    // @Inject
    Retrofit retrofit;

    // @Inject
    LogInActivityContract.Presenter presenter;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_log_in);


//        DaggerLogInActivityComponent.builder()
//                .networkModule(new NetworkModule())
//                .logInActivityModule(new LogInActivityModule(this))
//                .build();

    }

    @OnClick(R.id.bLogIn)
    public void onLogInPressed() {
        Toast.makeText(this, retrofit.toString(), Toast.LENGTH_SHORT).show();
    }


}
