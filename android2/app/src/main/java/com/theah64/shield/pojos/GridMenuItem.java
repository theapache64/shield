package com.theah64.shield.pojos;

public class GridMenuItem {
    private final int id;
    private final String name, icon;

    public GridMenuItem(int id, String name, String icon) {
        this.id = id;
        this.name = name;
        this.icon = icon;
    }

    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getIcon() {
        return icon;
    }
}
