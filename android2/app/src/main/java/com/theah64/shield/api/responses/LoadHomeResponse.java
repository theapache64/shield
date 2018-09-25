package com.theah64.shield.api.responses;

import com.google.gson.annotations.SerializedName;


/**
 * Generated using MockAPI (https://github.com/theapache64/Mock-API) : Tue Sep 25 15:18:08 UTC 2018
 */
public class LoadHomeResponse {

    @SerializedName("total_workers_in")
    private final String totalWorkersIn;

    @SerializedName("total_visitors_in")
    private final String totalVisitorsIn;


    public LoadHomeResponse(String totalWorkersIn, String totalVisitorsIn) {
        this.totalWorkersIn = totalWorkersIn;
        this.totalVisitorsIn = totalVisitorsIn;
    }

    public String getTotalWorkersIn() {
        return totalWorkersIn;
    }

    public String getTotalVisitorsIn() {
        return totalVisitorsIn;
    }

}