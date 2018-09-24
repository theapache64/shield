package com.theah64.shield.presenters.base;


import com.theah64.shield.contracts.BaseAppCompatActivityContract;
import com.theah64.shield.views.activities.base.BaseAppCompatActivity;

public class BaseAppCompatActivityPresenter
        extends BasePresenter<BaseAppCompatActivity>
        implements BaseAppCompatActivityContract.Presenter {

    public BaseAppCompatActivityPresenter(BaseAppCompatActivity view) {
        super(view);
    }

}
