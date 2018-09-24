package com.theah64.shield.utils;

import android.app.Activity;
import android.graphics.Color;
import android.view.View;
import android.view.ViewGroup;
import android.widget.FrameLayout;
import android.widget.LinearLayout;

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

        ViewGroup content = activity.findViewById(android.R.id.content);
        View rootView = content.getChildAt(0);

        if (rootView instanceof LinearLayout) {

            // Removing root view
            content.removeView(rootView);

            // Building new frame layout
            final FrameLayout frameLayout = new FrameLayout(activity);
            final int width = FrameLayout.LayoutParams.MATCH_PARENT;
            final int height = FrameLayout.LayoutParams.MATCH_PARENT;
            final FrameLayout.LayoutParams layoutParams = new FrameLayout.LayoutParams(width, height);
            frameLayout.setLayoutParams(layoutParams);

            // Adding removed rootView to wrap
            frameLayout.addView(rootView);

            // Setting final layout
            activity.setContentView(frameLayout);
        }


    }


}

