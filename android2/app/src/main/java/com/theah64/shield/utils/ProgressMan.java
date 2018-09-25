package com.theah64.shield.utils;

import android.app.Activity;
import android.graphics.Color;
import android.support.v4.content.ContextCompat;
import android.view.Gravity;
import android.view.View;
import android.view.ViewGroup;
import android.widget.FrameLayout;
import android.widget.LinearLayout;
import android.widget.TextView;
import android.widget.Toast;

import com.theah64.shield.R;
import com.theah64.shield.gorilla.Gorilla;
import com.wang.avi.AVLoadingIndicatorView;
import com.wang.avi.Indicator;
import com.wang.avi.indicators.BallBeatIndicator;

public class ProgressMan {
    private final Activity activity;
    private LinearLayout llPv;
    private AVLoadingIndicatorView avl;
    private TextView tv;

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

        // Adding progress view
        final ViewGroup viewGroup = getProgressView();
        frameLayout.addView(viewGroup);

        // Setting final layout
        activity.setContentView(frameLayout);
    }


    private LinearLayout getProgressView() {

        // Building container
        this.llPv = new LinearLayout(activity);
        final int pvWidth = LinearLayout.LayoutParams.MATCH_PARENT;
        final int pvHeight = LinearLayout.LayoutParams.MATCH_PARENT;
        final LinearLayout.LayoutParams pvParams = new LinearLayout.LayoutParams(pvWidth, pvHeight);
        llPv.setLayoutParams(pvParams);
        llPv.setBackgroundColor(ContextCompat.getColor(activity, R.color.transWhite));
        llPv.setGravity(Gravity.CENTER);
        llPv.setOrientation(LinearLayout.VERTICAL);
        llPv.setClickable(true);

        // Building AV
        this.avl = new AVLoadingIndicatorView(activity);
        final int avlWidth = 100;
        final int avlHeight = 100;
        final ViewGroup.LayoutParams avlParams = new ViewGroup.LayoutParams(avlWidth, avlHeight);
        avl.setLayoutParams(avlParams);
        avl.setIndicatorColor(ContextCompat.getColor(activity, R.color.colorAccent));
        avl.setIndicator(Gorilla.getInstance().getDefaultProgressIndicator());

        // Building loading text
        this.tv = new TextView(activity);
        final int tvHeight = LinearLayout.LayoutParams.WRAP_CONTENT;
        final int tvWidth = LinearLayout.LayoutParams.WRAP_CONTENT;
        final LinearLayout.LayoutParams tvParams = new LinearLayout.LayoutParams(tvWidth, tvHeight);
        tvParams.topMargin = 10;
        tv.setLayoutParams(tvParams);


        // Adding AVL to Container
        llPv.addView(avl);
        llPv.addView(tv);

        // By default the visibility set to GONE
        llPv.setVisibility(View.GONE);

        return llPv;
    }

    public void showLoading(String message) {
        llPv.setVisibility(View.VISIBLE);
        tv.setText(message);
    }

    public void hideLoading() {
        llPv.setVisibility(View.GONE);
    }
}

