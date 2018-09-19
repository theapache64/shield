package com.theah64.shield.contracts;

public interface MainActivityContract {
    interface Model {
        String getData();
    }

    interface View {
        void initView();
        void onData(String data);
    }

    interface Presenter {
        void onClick();
    }
}
