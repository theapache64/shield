package com.theah64.shield.presenters;

import com.theah64.shield.api.responses.BaseAPIResponse;
import com.theah64.shield.api.responses.LogInResponse;
import com.theah64.shield.models.LogInActivityModel;
import com.theah64.shield.presenters.base.BasePresenter;
import com.theah64.shield.contracts.LogInActivityContract;

import io.reactivex.observers.DisposableSingleObserver;

public class LogInActivityPresenter
        extends BasePresenter<LogInActivityContract.View>
        implements LogInActivityContract.Presenter {

    private final LogInActivityContract.Model model;

    public LogInActivityPresenter(LogInActivityContract.View view) {
        super(view);
        this.model = new LogInActivityModel(this);
    }

    @Override
    public DisposableSingleObserver<BaseAPIResponse<LogInResponse>> login(String username, String password) {
        return this.model.login(username, password);
    }

    @Override
    public void onLoggedIn(BaseAPIResponse<LogInResponse> apiResponse) {
        this.getView().onLoggedIn();
    }



    @Override
    public void onLogInFailed(Throwable e) {
        this.getView().onLogInFailed(e.get);
    }
}
