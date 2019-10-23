package com.natfast.spider.entity;

public class Product {
    private Integer id;

    private String productId;

    public Product(Integer id, String productId) {
        this.id = id;
        this.productId = productId;
    }

    public Product() {
        super();
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getProductId() {
        return productId;
    }

    public void setProductId(String productId) {
        this.productId = productId == null ? null : productId.trim();
    }
}