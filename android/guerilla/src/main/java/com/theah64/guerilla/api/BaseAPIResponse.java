package com.theah64.guerilla.api;

import com.google.gson.annotations.SerializedName;

/**
 * Created by theapache64 on 25/8/17.
 */

public class BaseAPIResponse<D> {

    @SerializedName("error")
    private final boolean error;

    @SerializedName("message")
    private final String message;

    @SerializedName("data")
    private final D data;


    public BaseAPIResponse(boolean error, String message, D data) {
        this.error = error;
        this.message = message;
        this.data = data;
    }

    public D getData() {
        return data;
    }

    public boolean isError() {
        return error;
    }

    public String getMessage() {
        return message;
    }
}
