package com.theah64.shield.gorilla;

public class GorillaConfig {

    private final String baseUrl;
    private final String prefName;

    private GorillaConfig(String baseUrl, String prefName) {
        this.baseUrl = baseUrl;
        this.prefName = prefName;
    }

    public String getBaseUrl() {
        return baseUrl;
    }

    public String getPrefName() {
        return prefName;
    }

    public static class Builder {

        private String baseURL;
        private String prefName;

        public GorillaConfig build() {
            return new GorillaConfig(this.baseURL, prefName);
        }

        public Builder setBaseURL(String baseURL) {
            this.baseURL = baseURL;
            return this;
        }

        public Builder setPrefName(String prefName) {
            this.prefName = prefName;
            return this;
        }


    }
}
