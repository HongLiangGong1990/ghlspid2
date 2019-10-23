package com.natfast.spider.entity;

public class PageDataWithBLOBs extends PageData {
    private String t1;

    private String t2;

    private String t3;

    private String t4;

    public PageDataWithBLOBs(Integer id, Integer n1, Integer n2, Integer n3, Integer n4, String p1, String p2, String p3, String p4, String p5, String p6, String p7, String p8, String p9, String p10, String p11, String p12, String t1, String t2, String t3, String t4) {
        super(id, n1, n2, n3, n4, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12);
        this.t1 = t1;
        this.t2 = t2;
        this.t3 = t3;
        this.t4 = t4;
    }

    public PageDataWithBLOBs() {
        super();
    }

    public String getT1() {
        return t1;
    }

    public void setT1(String t1) {
        this.t1 = t1 == null ? null : t1.trim();
    }

    public String getT2() {
        return t2;
    }

    public void setT2(String t2) {
        this.t2 = t2 == null ? null : t2.trim();
    }

    public String getT3() {
        return t3;
    }

    public void setT3(String t3) {
        this.t3 = t3 == null ? null : t3.trim();
    }

    public String getT4() {
        return t4;
    }

    public void setT4(String t4) {
        this.t4 = t4 == null ? null : t4.trim();
    }
}