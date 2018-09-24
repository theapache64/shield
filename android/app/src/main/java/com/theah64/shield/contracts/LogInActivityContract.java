package com.theah64.shield.contracts;

import com.theah64.shield.models.BaseModel;
import com.theah64.shield.views.activities.base.BaseView;

public class LogInActivityContract {
    public interface Model extends BaseModel {

    }

    public interface View extends BaseView {
        void onLoggedIn();
    }

    public interface Presenter {

    }
}
