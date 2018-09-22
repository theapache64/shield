package com.theah64.guerilla.ui.activities;

import android.support.v7.app.AppCompatActivity;

import butterknife.ButterKnife;

/**
 * <b>Features</b> :
 * ButterKnife auto binder
 */
public class BaseAppCompatActivity extends AppCompatActivity {
    @Override
    public void setContentView(int layoutResID) {
        super.setContentView(layoutResID);
        ButterKnife.bind(this);
    }
}
