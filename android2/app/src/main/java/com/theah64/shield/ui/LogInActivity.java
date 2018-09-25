package com.theah64.shield.ui;

import android.content.Context;
import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;

import com.theah64.shield.R;

public class LogInActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_log_in);
    }


    public static void start(Context context) {
        final Intent loginIntent = new Intent(context, LogInActivity.class);
        context.startActivity(loginIntent);
    }
}
