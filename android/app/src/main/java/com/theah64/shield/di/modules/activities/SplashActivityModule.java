package com.theah64.shield.di.modules.activities;

import android.content.Context;

import com.theah64.shield.contracts.SplashActivityContract;
import com.theah64.shield.di.modules.ApplicationContextModule;
import com.theah64.shield.di.qualifiers.ApplicationContext;
import com.theah64.shield.presenters.SplashActivityPresenter;

import javax.inject.Inject;

import dagger.Module;
import dagger.Provides;

@Module(includes = {ApplicationContextModule.class})
public class SplashActivityModule {

    private final SplashActivityContract.View view;

    @Inject
    public SplashActivityModule(SplashActivityContract.View view) {
        this.view = view;
    }

    @Provides
    SplashActivityContract.Presenter providePresenter(SplashActivityContract.View view, @ApplicationContext Context context) {
        return new SplashActivityPresenter(view, context);
    }


    @Provides
    SplashActivityContract.View provideView() {
        return this.view;
    }

}
