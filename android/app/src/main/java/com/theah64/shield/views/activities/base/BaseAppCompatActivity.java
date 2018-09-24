package com.theah64.shield.views.activities.base;

import android.support.annotation.StringRes;
import android.support.v7.app.AppCompatActivity;
import android.view.ViewGroup;
import android.widget.Toast;

import com.theah64.shield.contracts.BaseAppCompatActivityContract;
import com.theah64.shield.presenters.base.BaseAppCompatActivityPresenter;

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


    /**
     * To show toast with short length
     *
     * @param message Message to be displayed
     */
    protected void showToast(@StringRes int message) {
        this.showToast(getString(message));
    }

    /**
     * To show toast with short length
     *
     * @param message Message to be displayed
     */
    protected void showToast(final String message) {
        Toast.makeText(this, message, Toast.LENGTH_SHORT).show();
    }

    /**
     * To get ViewGroup set using setContentView
     *
     * @return ViewGroup
     */
    public ViewGroup getContentView() {
        ViewGroup content = findViewById(android.R.id.content);
        return (ViewGroup) content.getChildAt(0);
    }
}
