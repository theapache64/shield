package com.theah64.shield.utils;

import android.view.View;
import android.view.ViewGroup;

import com.theah64.shield.ui.base.BaseAppCompatActivity;
import com.theah64.shield.widget.ValidTextInputLayout;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class Validator {

    private final List<ValidTextInputLayout> vtils;

    public Validator(ValidTextInputLayout[] vtils) {
        this(Arrays.asList(vtils));
    }

    public Validator(List<ValidTextInputLayout> vtils) {
        this.vtils = vtils;
    }

    public static Validator from(BaseAppCompatActivity activity) {
        final List<ValidTextInputLayout> vtils = getVtilsFrom(activity.getContentView());
        return new Validator(vtils);
    }

    /**
     * To get ValidTextInputLayout List from given ViewGroup
     *
     * @param viewGroup ViewGroup to be traversed
     * @return List<ValidTextInputLayout>
     */
    private static List<ValidTextInputLayout> getVtilsFrom(ViewGroup viewGroup) {
        final List<ValidTextInputLayout> vtils = new ArrayList<>();

        // Looping through each child
        for (int i = 0; i < viewGroup.getChildCount(); i++) {
            final View child = viewGroup.getChildAt(i);
            if (child instanceof ValidTextInputLayout) {
                // It's VTIL, so add it to the list
                vtils.add((ValidTextInputLayout) child);
            } else {
                // It's not VTIL
                if (child instanceof ViewGroup) {
                    vtils.addAll(getVtilsFrom((ViewGroup) child));
                }
            }
        }
        return vtils;
    }

    public boolean isAllValid(boolean isLiveWatch) {
        boolean isAllValid = true;
        for (final ValidTextInputLayout vtil : vtils) {
            isAllValid = vtil.isValid(isLiveWatch) && isAllValid;
        }
        return isAllValid;
    }
}
