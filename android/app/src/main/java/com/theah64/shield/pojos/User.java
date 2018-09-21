package com.theah64.shield.pojos;

public class User {
    private String name, location;

    public User(String name, String location) {
        this.name = name;
        this.location = location;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getName() {
        return name;
    }

    public String getLocation() {
        return location;
    }

    @Override
    public String toString() {
        return "User{" +
                "name='" + name + '\'' +
                ", location='" + location + '\'' +
                '}';
    }
}
