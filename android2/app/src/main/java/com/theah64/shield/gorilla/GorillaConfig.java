package com.theah64.shield.gorilla;

import com.wang.avi.Indicator;
import com.wang.avi.indicators.BallClipRotateIndicator;

public class GorillaConfig {

    private final String baseUrl;
    private final String prefName;
    private final Indicator indicator;

    private GorillaConfig(String baseUrl, String prefName, Indicator indicator) {
        this.baseUrl = baseUrl;
        this.prefName = prefName;
        this.indicator = indicator;
    }

    public String getBaseUrl() {
        return baseUrl;
    }

    public String getPrefName() {
        return prefName;
    }

    public Indicator getIndicator() {
        return indicator;
    }

    public static class Builder {

        private String baseURL;
        private String prefName;
        private Indicator defaultProgressIndicator = new BallClipRotateIndicator();

        public GorillaConfig build() {
            return new GorillaConfig(this.baseURL, prefName, defaultProgressIndicator);
        }

        public Builder setBaseURL(String baseURL) {
            this.baseURL = baseURL;
            return this;
        }

        public Builder setPrefName(String prefName) {
            this.prefName = prefName;
            return this;
        }

        public Builder setDefaultProgressIndicator(Indicator defaultProgressIndicator) {
            this.defaultProgressIndicator = defaultProgressIndicator;
            return this;
        }
    }
}
