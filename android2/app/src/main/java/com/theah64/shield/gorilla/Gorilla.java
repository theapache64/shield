package com.theah64.shield.gorilla;

import com.wang.avi.Indicator;

public class Gorilla {

    private static Gorilla instance;
    private final String baseUrl;
    private final String prefName;
    private final Indicator defaultProgressIndicator;

    private Gorilla(String baseUrl, String prefName, Indicator defaultProgressIndicator) {
        this.baseUrl = baseUrl;
        this.prefName = prefName;
        this.defaultProgressIndicator = defaultProgressIndicator;
    }

    public String getBaseUrl() {
        return baseUrl;
    }

    public static void init(GorillaConfig config) {
        instance = new Gorilla(
                config.getBaseUrl(),
                config.getPrefName(),
                config.getIndicator()
        );
    }

    public Indicator getDefaultProgressIndicator() {
        return defaultProgressIndicator;
    }

    public static Gorilla getInstance() {
        if (instance == null) {
            throw new IllegalArgumentException("You must call Gorilla.init before Gorilla.getInstance");
        }
        return instance;
    }

    public String getPrefName() {
        return prefName;
    }
}
