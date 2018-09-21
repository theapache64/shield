package com.theah64.shield.pojos;

public class User {
    private final String name, location;

    public User(String name, String location) {
        this.name = name;
        this.location = location;
    }

    public String getName() {
        return name;
    }

    public String getLocation() {
        return location;
    }
}
