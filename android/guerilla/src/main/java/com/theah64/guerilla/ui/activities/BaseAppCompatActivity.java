package com.theah64.guerilla.ui.activities;

import android.support.annotation.StringRes;
import android.support.v7.app.AppCompatActivity;

import com.theah64.guerilla.utils.ProgressMan;

import butterknife.ButterKnife;

/**
 * <b>Features</b> :
 * ButterKnife auto binder
 */
public class BaseAppCompatActivity extends AppCompatActivity {

    private ProgressMan progressMan;

    @Override
    public void setContentView(int layoutResID) {
        super.setContentView(layoutResID);
        ButterKnife.bind(this);
    }

    public void showLoading(@StringRes int authenticating) {
        initProgressMan();
    }

    private void initProgressMan() {
        if (progressMan == null) {
            progressMan = new ProgressMan();
        }
    }
}
