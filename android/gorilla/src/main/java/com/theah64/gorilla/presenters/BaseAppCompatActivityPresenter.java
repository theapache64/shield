package com.theah64.gorilla.presenters;

import com.theah64.gorilla.contracts.BaseAppCompatActivityContract;
import com.theah64.gorilla.views.activities.BaseAppCompatActivity;

public class BaseAppCompatActivityPresenter
        extends BasePresenter<BaseAppCompatActivity>
        implements BaseAppCompatActivityContract.Presenter {

    public BaseAppCompatActivityPresenter(BaseAppCompatActivity view) {
        super(view);
    }

}
