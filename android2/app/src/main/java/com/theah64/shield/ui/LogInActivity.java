package com.theah64.shield.ui;

import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
import android.widget.Toast;

import com.theah64.shield.R;
import com.theah64.shield.api.responses.BaseAPIResponse;
import com.theah64.shield.api.responses.LogInResponse;
import com.theah64.shield.di.components.DaggerLogInActivityComponent;
import com.theah64.shield.di.modules.ProgressManModule;
import com.theah64.shield.di.modules.ValidatorModule;
import com.theah64.shield.di.modules.activities.LogInActivityModule;
import com.theah64.shield.model.LogInActivityPresenterImpl;
import com.theah64.shield.ui.base.BaseAppCompatActivity;
import com.theah64.shield.ui.base.BaseNetworkActivity;
import com.theah64.shield.ui.base.BaseProgressManActivity;
import com.theah64.shield.utils.ProgressMan;
import com.theah64.shield.utils.SingletonToast;
import com.theah64.shield.utils.Validator;
import com.theah64.shield.view.LogInActivityView;
import com.theah64.shield.view.base.BaseNetworkView;
import com.theah64.shield.widget.ValidTextInputLayout;

import javax.inject.Inject;

import butterknife.BindView;
import butterknife.OnClick;
import io.reactivex.disposables.Disposable;

public class LogInActivity extends BaseNetworkActivity<LogInResponse> implements LogInActivityView {

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
            load("Authenticating...");
        }
    }

    @Override
    public void onLoaded(BaseAPIResponse<LogInResponse> response) {
        super.onLoaded(response);

        final String guardName = response.getData().getGuard().getName();
        final String message = getString(R.string.Logged_in_as_s, guardName);

        SingletonToast.makeText(this, message, Toast.LENGTH_SHORT).show();

        MainActivity.start(this);
        finish();
    }

    @Override
    protected Disposable getAPICall() {
        final String username = vtilUsername.getTextString();
        final String password = vtilPassword.getTextString();

        return presenter.login(username, password);
    }

    public static void start(Context context) {
        final Intent loginIntent = new Intent(context, LogInActivity.class);
        context.startActivity(loginIntent);
    }
}
