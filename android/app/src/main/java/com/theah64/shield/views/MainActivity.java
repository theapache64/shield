package com.theah64.shield.views;

import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.support.v7.widget.Toolbar;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.Toast;

import com.theah64.shield.R;
import com.theah64.shield.contracts.MainActivityContract;
import com.theah64.shield.presenters.MainActivityPresenter;

import io.reactivex.Observable;
import io.reactivex.Observer;
import io.reactivex.Scheduler;
import io.reactivex.android.schedulers.AndroidSchedulers;
import io.reactivex.disposables.Disposable;
import io.reactivex.schedulers.Schedulers;

public class MainActivity extends AppCompatActivity implements MainActivityContract.View {

    private static final String TAG = MainActivity.class.getSimpleName();
    Button btnCheck;
    MainActivityContract.Presenter presenter;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        Toolbar toolbar = (Toolbar) findViewById(R.id.toolbar);
        setSupportActionBar(toolbar);

        presenter = new MainActivityPresenter(this);

        // Checking RxJava
        Observable<String> marvelObservable = Observable.just("Ironman", "Antman", "Hulk", "Loki", "Thor", "Black Widow");
        Observer<String> marvelObserver = new Observer<String>() {
            @Override
            public void onSubscribe(Disposable d) {
                Log.d(TAG, "Subscribed to marvel chars");
            }

            @Override
            public void onNext(String s) {
                Log.d(TAG, "Marvel char is " + s);
            }

            @Override
            public void onError(Throwable e) {
                Log.e(TAG, "Error : " + e.getMessage());
            }

            @Override
            public void onComplete() {
                Log.i(TAG, "Completed marvel chars");
            }
        };

        marvelObservable
                .subscribeOn(Schedulers.io())
                .observeOn(AndroidSchedulers.mainThread())
                .subscribe(marvelObserver);
    }

    @Override
    public void initView() {
        this.btnCheck = (Button) findViewById(R.id.bCheck);
        this.btnCheck.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                presenter.onClick();
            }
        });
    }

    @Override
    public void onData(String data) {
        this.btnCheck.setText(data);
    }
}
