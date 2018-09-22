package com.theah64.guerilla.presenters;

import com.theah64.guerilla.contracts.BaseAppCompatActivityContract;
import com.theah64.guerilla.views.activities.BaseAppCompatActivity;

public class BaseAppCompatActivityPresenter
        extends BasePresenter<BaseAppCompatActivity>
        implements BaseAppCompatActivityContract.Presenter {

    public BaseAppCompatActivityPresenter(BaseAppCompatActivity view) {
        super(view);
    }

}
