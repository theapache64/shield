package com.theah64.gorilla.views.activities;

import android.support.annotation.StringRes;
import android.support.v7.app.AppCompatActivity;
import android.widget.Toast;

import com.theah64.gorilla.contracts.BaseAppCompatActivityContract;
import com.theah64.gorilla.presenters.BaseAppCompatActivityPresenter;

import butterknife.ButterKnife;

/**
 * <b>Features</b> :
 * ButterKnife auto binder
 */
public class BaseAppCompatActivity
        extends AppCompatActivity
        implements BaseAppCompatActivityContract.View {


    @Override
    public void setContentView(int layoutResID) {
        super.setContentView(layoutResID);
        new BaseAppCompatActivityPresenter(this);
    }

    @Override
    public void initView() {
        ButterKnife.bind(this);
    }

    protected void showToast(@StringRes int message) {
        this.showToast(getString(message));
    }

    protected void showToast(final String message) {
        Toast.makeText(this, message, Toast.LENGTH_SHORT).show();
    }
}
