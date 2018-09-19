package com.theah64.shield.contracts;

import com.theah64.shield.views.BaseView;

public interface SplashActivityContract {

    interface Callback {
        void onSuccess();
    }

    interface View extends BaseView {
        void onTimeout();
    }

    interface Model {
        void startCounter(long durationInMillis, Callback callback);
    }

    interface Presenter {
        void startCounter(long durationInMillis);
    }

}
