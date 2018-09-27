package com.theah64.shield.utils;

import android.util.Log;

public class Logx {

    public static void d(Object currentClass, String message) {
        Log.d(currentClass.getClass().getSimpleName(), message);
    }
}
