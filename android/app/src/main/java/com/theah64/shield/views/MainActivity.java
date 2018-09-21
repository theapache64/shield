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
import io.reactivex.disposables.CompositeDisposable;
import io.reactivex.disposables.Disposable;
import io.reactivex.functions.Function;
import io.reactivex.functions.Predicate;
import io.reactivex.observers.DisposableObserver;
import io.reactivex.schedulers.Schedulers;

public class MainActivity extends AppCompatActivity implements MainActivityContract.View {

    private static final String TAG = MainActivity.class.getSimpleName();
    Button btnCheck;
    MainActivityContract.Presenter presenter;
    private CompositeDisposable compositeDisposables = new CompositeDisposable();

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        Toolbar toolbar = (Toolbar) findViewById(R.id.toolbar);
        setSupportActionBar(toolbar);

        presenter = new MainActivityPresenter(this);

        // Checking RxJava
        Observable<String> marvelObservable = Observable.fromArray("Ironman", "Antman", "Hulk", "Loki", "Loki 2", "Thor", "Black Widow");
        DisposableObserver<String> marvelObserver1 = new DisposableObserver<String>() {

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

        DisposableObserver<String> marvelObserver2 = new DisposableObserver<String>() {

            @Override
            public void onNext(String s) {
                Log.d(TAG, "Marvel CHAR IS " + s);
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

        compositeDisposables.add(
                marvelObservable
                        .subscribeOn(Schedulers.io())
                        .observeOn(AndroidSchedulers.mainThread())
                        .filter(new Predicate<String>() {
                            @Override
                            public boolean test(String s) throws Exception {
                                return s.toLowerCase().startsWith("l");
                            }
                        })
                        .map(new Function<String, String>() {
                            @Override
                            public String apply(String s) throws Exception {
                                return s.toUpperCase();
                            }
                        })
                        .subscribeWith(marvelObserver1)
        );


        compositeDisposables.add(
                marvelObservable
                        .subscribeOn(Schedulers.io())
                        .observeOn(AndroidSchedulers.mainThread())
                        .filter(new Predicate<String>() {
                            @Override
                            public boolean test(String s) throws Exception {
                                return s.toLowerCase().startsWith("l");
                            }
                        })
                        .map(new Function<String, String>() {
                            @Override
                            public String apply(String s) throws Exception {
                                return s.toLowerCase();
                            }
                        })
                        .subscribeWith(marvelObserver2)
        );
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
    protected void onDestroy() {
        super.onDestroy();

        this.compositeDisposables.clear();
    }

    @Override
    public void onData(String data) {
        this.btnCheck.setText(data);
    }
}
