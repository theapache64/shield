package com.theah64.shield.api;

import android.support.annotation.NonNull;

import com.theah64.guerilla.api.BaseAPIResponse;
import com.theah64.shield.api.responses.LogInResponse;

import io.reactivex.Single;
import retrofit2.http.Field;
import retrofit2.http.FormUrlEncoded;
import retrofit2.http.POST;

public interface APIInterface {

    /**
     * @param username <p>Username of the guard</p>
     * @param password <p>Password of the guard</p>
     * @return LoginResponse
     */
    @FormUrlEncoded
    @POST("login")
    Single<BaseAPIResponse<LogInResponse>> login(
            @Field("username") @NonNull String username,
            @Field("password") @NonNull String password);
}
