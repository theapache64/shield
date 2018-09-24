package com.theah64.shield.gorilla;

import android.os.Build;

public class GorillaConfig {

    private final String baseUrl;

    private GorillaConfig(String baseUrl) {
        this.baseUrl = baseUrl;
    }

    public String getBaseUrl() {
        return baseUrl;
    }

    public static class Builder {

        private String baseURL;

        public GorillaConfig build() {
            return new GorillaConfig(this.baseURL);
        }

        public Builder setBaseURL(String baseURL) {
            this.baseURL = baseURL;
            return this;
        }
    }
}
