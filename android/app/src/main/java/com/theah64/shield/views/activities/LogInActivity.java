package com.theah64.shield.views.activities;

import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
import android.support.design.widget.TextInputLayout;

import com.theah64.shield.R;
import com.theah64.shield.contracts.LogInActivityContract;
import com.theah64.shield.di.components.DaggerLogInActivityComponent;
import com.theah64.shield.di.modules.NetworkModule;
import com.theah64.shield.di.modules.ValidatorModule;
import com.theah64.shield.di.modules.activities.LogInActivityModule;
import com.theah64.shield.utils.Validator;
import com.theah64.shield.views.activities.base.BaseProgressManActivity;

import javax.inject.Inject;

import butterknife.BindView;
import butterknife.OnClick;
import retrofit2.Retrofit;

public class LogInActivity extends BaseProgressManActivity implements LogInActivityContract.View {

    @Inject
    Retrofit retrofit;

    @Inject
    LogInActivityContract.Presenter presenter;

    @Inject
    Validator validator;

    @BindView(R.id.tilUsername)
    TextInputLayout tilUsername;

    @BindView(R.id.tilPassword)
    TextInputLayout tilPassword;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_log_in);


        DaggerLogInActivityComponent.builder()
                .networkModule(new NetworkModule())
                .logInActivityModule(new LogInActivityModule(this))
                .validatorModule(new ValidatorModule(this))
                .build()
                .inject(this);
    }

    @OnClick(R.id.bLogIn)
    public void onLogInPressed() {
        if (this.validator.isAllValid(true)) {

        }
    }


    @Override
    public void onLoggedIn() {

    }

    public static void start(Context context) {
        context.startActivity(new Intent(context, LogInActivity.class));
    }
}
