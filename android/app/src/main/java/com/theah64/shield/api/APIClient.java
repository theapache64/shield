package com.theah64.shield.api;

import com.jakewharton.retrofit2.adapter.rxjava2.RxJava2CallAdapterFactory;

import okhttp3.OkHttpClient;
import okhttp3.logging.HttpLoggingInterceptor;
import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;

public class APIClient {

    private static Retrofit client = null;

    public static Retrofit getClient() {

        // Creating client for the first time.
        if (client == null) {

            // Logging interceptor
            final HttpLoggingInterceptor logger = new HttpLoggingInterceptor();
            logger.setLevel(HttpLoggingInterceptor.Level.BODY);


            final OkHttpClient okHttpClient = new OkHttpClient.Builder()
                    .addInterceptor(logger)
                    .build();

            client = new Retrofit.Builder()
                    .baseUrl("http://theapache64.com/mock_api/get_json/shield/")
                    .client(okHttpClient)
                    .addCallAdapterFactory(RxJava2CallAdapterFactory.create())
                    .addConverterFactory(GsonConverterFactory.create())
                    .build();
        }

        return client;
    }
}
