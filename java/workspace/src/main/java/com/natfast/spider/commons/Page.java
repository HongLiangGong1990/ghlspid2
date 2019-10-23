package com.natfast.spider.commons;

public class Page {
    private String text;
    private String[] idarr;
    private String[] key;
    private String[] data;
    private String path;
    private String num;
    private String tagClass;

    public String[] getIdarr() {
        return idarr;
    }

    public void setIdarr(String[] idarr) {
        this.idarr = idarr;
    }

    public String[] getKey() {
        return key;
    }

    public void setKey(String[] key) {
        this.key = key;
    }

    public String[] getData() {
        return data;
    }

    public void setData(String[] data) {
        this.data = data;
    }

    public String getNum() {
        return num;
    }

    public void setNum(String num) {
        this.num = num;
    }

    public String getTagClass() {
        return tagClass;
    }

    public void setTagClass(String tagClass) {
        this.tagClass = tagClass;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public String getPath() {
        return path;
    }

    public void setPath(String path) {
        this.path = path;
    }
}
