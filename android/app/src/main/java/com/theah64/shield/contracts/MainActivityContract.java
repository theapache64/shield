package com.theah64.shield.contracts;

import com.theah64.gorilla.views.activities.BaseView;

public interface MainActivityContract {
    interface Model {
        String getData();
    }

    interface View extends BaseView {
        void onData(String data);
    }

    interface Presenter {
        void onClick();
    }
}
