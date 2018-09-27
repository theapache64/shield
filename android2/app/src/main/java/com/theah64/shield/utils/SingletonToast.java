package com.theah64.shield.utils;

import android.annotation.SuppressLint;
import android.content.Context;
import android.support.annotation.StringRes;
import android.widget.Toast;

public class SingletonToast {

    private SingletonToast() {
    }

    private static Toast toast;

    public static Toast makeText(Context context, @StringRes int text, int duration) {
        return makeText(context, context.getString(text), duration);
    }

    @SuppressLint("ShowToast")
    public static Toast makeText(Context context, CharSequence text, int duration) {
        if (toast == null) {
            toast = Toast.makeText(context, text, duration);
        } else {
            toast.setDuration(duration);
            toast.setText(text);
        }
        return toast;
    }
}
