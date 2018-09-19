package com.theah64.shield.models;

import com.theah64.shield.contracts.MainActivityContract;

public class MainActivityModel extends BaseModel implements MainActivityContract.Model {
    @Override
    public String getData() {
        return "This is some data";
    }
}
