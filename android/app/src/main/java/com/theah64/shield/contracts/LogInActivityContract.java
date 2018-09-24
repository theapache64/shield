package com.theah64.shield.contracts;

import com.theah64.shield.api.responses.BaseAPIResponse;
import com.theah64.shield.api.responses.LogInResponse;
import com.theah64.shield.models.BaseModel;
import com.theah64.shield.views.activities.base.BaseView;

import io.reactivex.observers.DisposableSingleObserver;

public class LogInActivityContract {
    public interface Model extends BaseModel {
        DisposableSingleObserver<BaseAPIResponse<LogInResponse>> login(String username, String password);
        void saveGuard(LogInResponse.Guard guard);
    }

    public interface View extends BaseView {
        void onLoggedIn();
    }

    public interface Presenter {
        DisposableSingleObserver<BaseAPIResponse<LogInResponse>> login(String username, String password);
        void onLoggedIn(BaseAPIResponse<LogInResponse> logInResponseBaseAPIResponse);
        void onLogInFailed(Throwable e);
    }
}
