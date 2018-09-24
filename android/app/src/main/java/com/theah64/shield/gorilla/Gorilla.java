package com.theah64.shield.gorilla;

public class Gorilla {

    private static Gorilla instance;
    private final String baseUrl;

    private Gorilla(String baseUrl) {
        this.baseUrl = baseUrl;
    }

    public String getBaseUrl() {
        return baseUrl;
    }

    public static void init(GorillaConfig config) {
        instance = new Gorilla(
                config.getBaseUrl()
        );
    }

    public static Gorilla getInstance() {
        if (instance == null) {
            throw new IllegalArgumentException("You must call Gorilla.init before Gorilla.getInstance");
        }
        return instance;
    }
}
