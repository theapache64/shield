package com.theah64.shield.ui.base;

import android.widget.Toast;

import com.theah64.shield.api.responses.BaseAPIResponse;
import com.theah64.shield.utils.SingletonToast;
import com.theah64.shield.view.base.BaseNetworkView;

import io.reactivex.disposables.Disposable;

public abstract class BaseNetworkActivity<R> extends BaseProgressManActivity implements BaseNetworkView<R> {

    protected void load() {
        load("Loading...");
    }

    protected void load(String message) {
        showLoading(message);
        addToCompositeDisposable(getAPICall());
    }

    protected abstract Disposable getAPICall();

    @Override
    public void onLoaded(BaseAPIResponse<R> response) {
        hideLoading();
    }

    @Override
    public void onLoadFailed(String reason) {
        hideLoading();
        SingletonToast.makeText(this, reason, Toast.LENGTH_SHORT).show();
    }

    @Override
    public void onNetworkError(String reason) {
        onLoadFailed(String.format("Network error : %s", reason));
    }
}
