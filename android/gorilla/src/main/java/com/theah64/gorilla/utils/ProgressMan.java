package com.theah64.gorilla.utils;

import android.app.Activity;
import android.util.Log;
import android.view.View;
import android.view.ViewGroup;
import android.widget.FrameLayout;
import android.widget.LinearLayout;
import android.widget.Toast;

public class ProgressMan {
    private final Activity activity;

    public ProgressMan(Activity activity) {
        this.activity = activity;
    }

    public void inflate() {

        /*
        pseudo code
        ===========
        get root layout type
        if(type===LinearLayout){
            Wrap root layout with FrameLayout;
        }
        Inject progressLayout
        */

        View rootView = (ViewGroup) ((ViewGroup) activity
                .findViewById(android.R.id.content)).getChildAt(0);

        if (rootView instanceof LinearLayout) {
            final FrameLayout frameLayout = new FrameLayout(activity);
            final int width = FrameLayout.LayoutParams.MATCH_PARENT;
            final int height = FrameLayout.LayoutParams.WRAP_CONTENT;
            final FrameLayout.LayoutParams layoutParams = new FrameLayout.LayoutParams(width, height);
            frameLayout.setLayoutParams(layoutParams);
            frameLayout.addView(rootView);
            ((ViewGroup) activity.findViewById(android.R.id.content)).removeViewAt(0);

            activity.setContentView(rootView);
        }

        View rootView2 = (ViewGroup) ((ViewGroup) activity
                .findViewById(android.R.id.content)).getChildAt(0);
        Toast.makeText(activity, (rootView2 instanceof FrameLayout) + "", Toast.LENGTH_SHORT).show();

    }


}

