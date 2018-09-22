package com.theah64.shield.api.responses;

import com.google.gson.annotations.SerializedName;


/**
 * Generated using MockAPI (https://github.com/theapache64/Mock-API) : Fri Sep 21 16:41:06 UTC 2018
 */
public class LogInResponse {

    @SerializedName("guard")
    private final Guard guard;


    public LogInResponse(Guard guard){
        this.guard = guard;
    }

    public Guard getGuard(){
        return guard;
    }

    public static class Guard {

        @SerializedName("name")
        private final String name;

        @SerializedName("api_key")
        private final String apiKey;


        public Guard(String name,String apiKey){
            this.name = name;
            this.apiKey = apiKey;
        }

        public String getName(){
            return name;
        }

        public String getApiKey(){
            return apiKey;
        }

    }



}