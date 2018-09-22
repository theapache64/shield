package com.theah64.shield.views.activities;

import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.widget.Toast;

import com.theah64.shield.R;
import com.theah64.shield.Shield;

import javax.inject.Inject;

import retrofit2.Retrofit;

public class LogInActivity extends AppCompatActivity {


    @Inject
    Retrofit retrofit;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_log_in);

        Shield.getApplicationComponent().inject(this);
        Toast.makeText(this, retrofit.toString(), Toast.LENGTH_SHORT).show();
    }
}
