package com.theah64.guerilla.presenters;


import com.theah64.guerilla.views.activities.BaseView;

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
