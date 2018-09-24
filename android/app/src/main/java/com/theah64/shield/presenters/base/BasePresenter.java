package com.theah64.shield.presenters.base;


import com.theah64.shield.views.activities.base.BaseView;

public class BasePresenter<View extends BaseView> {
    private final View view;

    public BasePresenter(View view) {
        this.view = view;
        this.view.initView();
    }

    public View getView() {
        return view;
    }
}
