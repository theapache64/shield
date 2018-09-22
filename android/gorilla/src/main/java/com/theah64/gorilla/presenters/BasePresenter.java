package com.theah64.gorilla.presenters;


import com.theah64.gorilla.views.activities.BaseView;

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
