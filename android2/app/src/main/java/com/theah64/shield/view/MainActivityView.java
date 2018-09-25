package com.theah64.shield.view;

import com.theah64.shield.api.responses.LoadHomeResponse;

public interface MainActivityView {
    void onHomeLoaded(LoadHomeResponse response);
    void onHomeLoadFailed(String reason);
    void onNetworkError(String reason);
}
