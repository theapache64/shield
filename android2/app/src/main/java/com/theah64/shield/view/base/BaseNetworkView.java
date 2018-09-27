package com.theah64.shield.view.base;

import com.theah64.shield.api.responses.BaseAPIResponse;

public interface BaseNetworkView<R> {
    void onLoaded(BaseAPIResponse<R> response);
    void onLoadFailed(String reason);
    void onNetworkError(String reason);
}
