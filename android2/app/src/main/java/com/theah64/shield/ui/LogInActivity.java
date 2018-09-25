package com.theah64.shield.ui;

import android.content.Context;
import android.content.Intent;
import android.os.Bundle;

import com.theah64.shield.R;
import com.theah64.shield.di.components.DaggerLogInActivityComponent;
import com.theah64.shield.di.modules.ValidatorModule;
import com.theah64.shield.di.modules.activities.LogInActivityModule;
import com.theah64.shield.model.LogInActivityPresenterImpl;
import com.theah64.shield.ui.base.BaseAppCompatActivity;
import com.theah64.shield.utils.Validator;
import com.theah64.shield.view.LogInActivityView;
import com.theah64.shield.widget.ValidTextInputLayout;

import javax.inject.Inject;

import butterknife.BindView;
import butterknife.OnClick;
import io.reactivex.disposables.Disposable;

public class LogInActivity extends BaseAppCompatActivity implements LogInActivityView {

    @Inject
    Validator validator;

    @BindView(R.id.vtilUsername)
    ValidTextInputLayout vtilUsername;

    @BindView(R.id.vtilPassword)
    ValidTextInputLayout vtilPassword;

    @Inject
    LogInActivityPresenterImpl presenter;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_log_in);

        DaggerLogInActivityComponent.builder()
                .logInActivityModule(new LogInActivityModule(this))
                .validatorModule(new ValidatorModule(this))
                .build()
                .inject(this);
    }


    @OnClick(R.id.bLogIn)
    public void onLogInPressed() {
        if (this.validator.isAllValid(true)) {

            final String username = vtilUsername.getTextString();
            final String password = vtilPassword.getTextString();
            final Disposable disposable = presenter.login(username, password);

            addToCompositeDisposable(disposable);
        }
    }


    public static void start(Context context) {
        final Intent loginIntent = new Intent(context, LogInActivity.class);
        context.startActivity(loginIntent);
    }

    @Override
    public void onLogInSuccess() {

    }

    @Override
    public void onLogInFailed() {

    }

    @Override
    public void onNetworkError() {

    }
}
