package com.theah64.shield.presenter;

import io.reactivex.disposables.Disposable;

public interface LogInActivityPresenter {
    Disposable login(String username, String password);
}
