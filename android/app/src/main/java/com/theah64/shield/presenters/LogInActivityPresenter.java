package com.theah64.shield.presenters;

import com.theah64.gorilla.presenters.BasePresenter;
import com.theah64.shield.contracts.LogInActivityContract;

public class LogInActivityPresenter
        extends BasePresenter<LogInActivityContract.View>
        implements LogInActivityContract.Presenter {

    public LogInActivityPresenter(LogInActivityContract.View view) {
        super(view);
    }

}
