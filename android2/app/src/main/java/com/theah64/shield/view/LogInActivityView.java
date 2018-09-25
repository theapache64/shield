package com.theah64.shield.view;

import com.theah64.shield.api.responses.BaseAPIResponse;
import com.theah64.shield.api.responses.LogInResponse;

public interface LogInActivityView {
    void onLogInSuccess(BaseAPIResponse<LogInResponse> response);
    void onLogInFailed(final String reason);
    void onNetworkError(final String message);
}
