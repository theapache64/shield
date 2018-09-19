package com.theah64.shield.presenters;

import com.theah64.shield.contracts.MainActivityContract;
import com.theah64.shield.models.MainActivityModel;

public class MainActivityPresenter
        extends BasePresenter<MainActivityContract.View>
        implements MainActivityContract.Presenter {

    private MainActivityModel model;

    public MainActivityPresenter(MainActivityContract.View view) {
        super(view);
        this.model = new MainActivityModel();
    }

    @Override
    public void onClick() {
        super.getView().onData(this.model.getData());
    }
}
