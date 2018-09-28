package com.theah64.shield.widget;

import android.content.Context;
import android.content.res.TypedArray;
import android.graphics.Color;
import android.support.annotation.Nullable;
import android.util.AttributeSet;
import android.view.Gravity;
import android.widget.LinearLayout;
import android.widget.TextView;

import com.joanzapata.iconify.widget.IconTextView;
import com.theah64.shield.R;

public class MainCounter extends LinearLayout {

    private IconTextView itv;
    private TextView tvCount;
    private TextView tvTitle;

    public MainCounter(Context context, @Nullable AttributeSet attrs) {
        super(context, attrs);
        init(attrs);
    }

    private void init(AttributeSet attrs) {

        final TypedArray ta = getContext().obtainStyledAttributes(attrs, R.styleable.MainCounter);
        final String icon = ta.getString(R.styleable.MainCounter_counter_icon);
        final String title = ta.getString(R.styleable.MainCounter_title);
        final String count = ta.getString(R.styleable.MainCounter_count);
        ta.recycle();

        // Creating icon
        this.itv = new IconTextView(getContext());
        final LayoutParams lpItv = new LayoutParams(LayoutParams.WRAP_CONTENT, LayoutParams.WRAP_CONTENT);
        itv.setLayoutParams(lpItv);
        itv.setText(icon);

        // Creating count
        this.tvCount = new TextView(getContext());
        final LayoutParams lpTvCount = new LayoutParams(LayoutParams.WRAP_CONTENT, LayoutParams.WRAP_CONTENT);
        tvCount.setLayoutParams(lpTvCount);
        tvCount.setText(count);

        // Creating title
        this.tvTitle = new TextView(getContext());
        final LayoutParams lpTvTitle = new LayoutParams(LayoutParams.WRAP_CONTENT, LayoutParams.WRAP_CONTENT);
        tvTitle.setLayoutParams(lpTvTitle);
        tvTitle.setText(title);

        // Setting orientation
        setGravity(Gravity.CENTER);
        setOrientation(LinearLayout.VERTICAL);
        setPadding(100, 100, 100, 100);

        // Adding views to container
        addView(itv);
        addView(tvCount);
        addView(tvTitle);
    }

    public void setCount(final String count) {
        this.tvCount.setText(count);
    }


}
