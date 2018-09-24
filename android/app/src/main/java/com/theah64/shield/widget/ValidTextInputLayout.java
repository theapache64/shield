package com.theah64.shield.widget;

import android.content.Context;
import android.content.res.TypedArray;
import android.support.annotation.NonNull;
import android.support.design.widget.TextInputLayout;
import android.text.Editable;
import android.text.TextWatcher;
import android.util.AttributeSet;
import android.widget.EditText;

import com.theah64.shield.R;

public class ValidTextInputLayout extends TextInputLayout {

    private String regEx;
    private String errorMessage;
    private boolean isWatcherAdded = false;


    public ValidTextInputLayout(Context context, AttributeSet attrs) {
        super(context, attrs);
        init(attrs);
    }

    public void setRegEx(String regEx) {
        this.regEx = regEx;
    }

    public void setErrorMessage(String errorMessage) {
        this.errorMessage = errorMessage;
    }

    /**
     * Initializes member variable from XML
     *
     * @param attrs AttributeSet
     */
    private void init(AttributeSet attrs) {

        final TypedArray ta = getContext().obtainStyledAttributes(attrs, R.styleable.ValidTextInputLayout, 0, 0);

        // Getting xml inputs
        this.regEx = ta.getString(R.styleable.ValidTextInputLayout_regEx);
        this.errorMessage = ta.getString(R.styleable.ValidTextInputLayout_errorMessage);

        if (this.regEx == null) {
            // Setting non empty regEx for default
            this.regEx = ".+";
        }


        ta.recycle();
    }


    @NonNull
    public EditText getNonNullEditText() {
        final EditText et = getEditText();
        if (et == null) {
            throw new IllegalArgumentException("EditText child not found");
        }
        return et;
    }

    /**
     * Checks if the input matches the regEx and sets the error message
     *
     * @return true if matches, false otherwise.
     */
    public boolean isValid(final boolean liveValidation) {

        initVars();

        final String value = getNonNullEditText().getText().toString().trim();
        if (value.matches(this.regEx)) {
            setError(null);
            setErrorEnabled(false);
            return true;
        }

        if (!isWatcherAdded) {
            addLiveWatcher();
        }

        setError(this.errorMessage);
        return false;
    }

    private void initVars() {

        if (this.errorMessage == null) {
            final String hint = getHint() != null ? getHint().toString() : "";
            this.errorMessage = getContext().getString(R.string.s_cant_be_empty, hint);
        }

        if (this.regEx == null) {
            throw new IllegalArgumentException("RegEx can't be null");
        }
    }

    @NonNull
    public String getTextString() {
        return getNonNullEditText().getText().toString();
    }

    private void addLiveWatcher() {
        this.getNonNullEditText().addTextChangedListener(new TextWatcher() {
            @Override
            public void beforeTextChanged(CharSequence charSequence, int i, int i1, int i2) {
                // No use
            }

            @Override
            public void onTextChanged(CharSequence charSequence, int i, int i1, int i2) {
                // No user
            }

            @Override
            public void afterTextChanged(Editable editable) {
                isValid(true);
            }
        });
        this.isWatcherAdded = true;
    }
}
