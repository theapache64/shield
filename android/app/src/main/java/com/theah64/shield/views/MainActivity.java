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
import com.theah64.shield.pojos.User;
import com.theah64.shield.presenters.MainActivityPresenter;

import java.util.ArrayList;
import java.util.List;

import io.reactivex.Observable;
import io.reactivex.ObservableEmitter;
import io.reactivex.ObservableOnSubscribe;
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

        final List<User> users = new ArrayList<>();
        users.add(new User("John", "USA"));
        users.add(new User("Ravi", "India"));
        users.add(new User("Chop", "China"));
        users.add(new User("Chandran", "India"));
        users.add(new User("Oblar", "Mexico"));

        // Checking RxJava
        Observable<User> userObservable = Observable.create(new ObservableOnSubscribe<User>() {
            @Override
            public void subscribe(ObservableEmitter<User> emitter) throws Exception {

                for (User user : users) {
                    if (!emitter.isDisposed()) {
                        emitter.onNext(user);
                    }
                }

                if (!emitter.isDisposed()) {
                    emitter.onComplete();
                }
            }
        });


        DisposableObserver<User> userObserver = new DisposableObserver<User>() {
            @Override
            public void onNext(User user) {
                System.out.println("User is " + user);
            }

            @Override
            public void onError(Throwable e) {

            }

            @Override
            public void onComplete() {

            }
        };

        compositeDisposables.add(
                userObservable
                        .subscribeOn(Schedulers.io())
                        .filter(new Predicate<User>() {
                            @Override
                            public boolean test(User user) throws Exception {
                                return user.getName().toLowerCase().startsWith("c");
                            }
                        })
                        .map(new Function<User, User>() {
                            @Override
                            public User apply(User user) throws Exception {
                                user.setName(user.getName().toUpperCase());
                                return user;
                            }
                        })
                        .observeOn(AndroidSchedulers.mainThread())
                        .subscribeWith(userObserver)
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
