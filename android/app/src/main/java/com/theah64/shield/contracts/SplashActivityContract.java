package com.theah64.shield.contracts;

public class SplashActivityContract {

    public interface Callback {
        void onSuccess();
    }

    public interface View {
        void onTimeout();
    }

    public interface Model {
        void startCounter(long durationInMillis, Callback callback);
    }

    public interface Presenter {
        void startCounter(long durationInMillis);
    }

}
