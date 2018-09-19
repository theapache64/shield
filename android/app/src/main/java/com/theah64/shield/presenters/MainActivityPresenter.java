package com.theah64.shield.presenters;

import com.theah64.shield.contracts.MainActivityContract;
import com.theah64.shield.models.MainActivityModel;

public class MainActivityPresenter implements MainActivityContract.Presenter {

    private final MainActivityContract.View view;
    private MainActivityModel model;

    public MainActivityPresenter(MainActivityContract.View view) {
        this.view = view;
        initPresenter();
    }

    private void initPresenter() {
        this.model = new MainActivityModel();
        this.view.initView();
    }

    @Override
    public void onClick() {
        view.onData(this.model.getData());
    }
}
