package com.theah64.shield.gorilla;

public class Gorilla {

    private static Gorilla instance;
    private final String baseUrl;
    private final String prefName;

    private Gorilla(String baseUrl, String prefName) {
        this.baseUrl = baseUrl;
        this.prefName = prefName;
    }

    public String getBaseUrl() {
        return baseUrl;
    }

    public static void init(GorillaConfig config) {
        instance = new Gorilla(
                config.getBaseUrl(),
                config.getPrefName()
        );
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
