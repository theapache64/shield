package com.theah64.shield.views.activities;

import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.widget.Toast;

import com.theah64.guerilla.ui.activities.BaseAppCompatActivity;
import com.theah64.shield.R;
import com.theah64.shield.Shield;

import javax.inject.Inject;

import butterknife.BindView;
import butterknife.OnClick;
import retrofit2.Retrofit;

public class LogInActivity extends BaseAppCompatActivity {


    @Inject
    Retrofit retrofit;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_log_in);

        Shield.getApplicationComponent().inject(this);
    }

    @OnClick(R.id.bLogIn)
    public void onLogInPressed() {

        super.showLoading(R.string.Authenticating);

    }

}
