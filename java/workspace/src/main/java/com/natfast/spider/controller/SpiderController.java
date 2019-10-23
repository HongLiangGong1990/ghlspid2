package com.natfast.spider.controller;


import com.natfast.spider.commons.Page;
import com.natfast.spider.commons.Result;
import com.natfast.spider.service.SpiderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class SpiderController {
    @Autowired
    private SpiderService service;

    private static int tag = 1;
    //ajax 发送json需要序列化，同时controller必须要用requestbody接收
    @RequestMapping(value = "/receive/tmall", consumes = "application/json")
    public int receiveTmall(@RequestBody Page page) {
        service.resolveTmall(page);
        return 1;
//        System.out.println(html);
    }

    @RequestMapping(value="/receive/id")
    public int receiveId(@RequestBody Page page){
        System.out.println("保存本页所有id");
        System.out.println("当前页是："+page.getNum());
        System.out.println(page.getIdarr());
        service.saveId(page);
        return 1;
    }

    @RequestMapping(value="/get")
    public List<String> receiveId(int index){
        System.out.println("获取第"+index+"页id。。。");
        return service.getId(index);
//        return 1;
    }

    @RequestMapping(value = "/receive/taobao")
    public int receiveTaobao(@RequestBody Page page) {
        service.save(page);
        try {
            System.out.println(page.getData()[4]);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return 1;
//        System.out.println(html);
    }

    @RequestMapping("/closed")
    public int getClosed(@RequestBody Page page) {
//        try {
//            Thread.sleep(20*1000);
//        } catch (InterruptedException e) {
//            e.printStackTrace();
//        }
        System.out.println("request...");
        return 1;
    }

    @RequestMapping("/page")
    public int currentPage(@RequestBody Page page){
        System.out.println("page: "+page.getNum());
        return 1;
    }

    @RequestMapping("/subpage")
    public int subPage(@RequestBody Page page) {
        System.out.println("subpage...");
        System.out.println("data: "+page.getText());
//        try {
//            Thread.sleep(3000);
//        } catch (InterruptedException e) {
//            e.printStackTrace();
//        }
        return 1;
    }

    @RequestMapping("/isrefresh")
    public int isRefresh() {
        System.out.println("isrefresh...");
        int a = tag;
        if(tag==1) tag = 0;
        return a ;
    }

    @RequestMapping("/resetrefresh")
    public void resetRefresh() {
        System.out.println("resetrefresh...");
        if(tag == 0) tag=1;
    }

}
