package com.natfast.spider.config;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.PropertySource;
import org.springframework.stereotype.Component;

@Component
@ConfigurationProperties(prefix="item")
@PropertySource(value="spider.properties")
public class ConfigBeanProp {
    private String name;
    private String xinyu;
    private String zhanguiid;
    private String zizhi;
    private String miaoshuxiangfu;
    private String miaoshuxiangfurate;
    private String fuwutaidu;
    private String fuwutaidurate;
    private String wuliufuwu;
    private String wuliufuwurate;
    private String price;
    private String youhuiquan;
    private String kuaidi;
    private String chima;
    private String kucun;
    private String zhifu;
    private String shoucang;
    private String kanleyoukan;
    private String leijipinlun;
    private String jiaoyichengong;
    private String youtu;
    private String zhuipin;
    private String haopin;
    private String zhonpin;
    private String chapin;
    private String yinxiang;

    public void setName(String name) {
        this.name = name;
    }

    public void setXinyu(String xinyu) {
        this.xinyu = xinyu;
    }

    public void setZhanguiid(String zhanguiid) {
        this.zhanguiid = zhanguiid;
    }

    public void setZizhi(String zizhi) {
        this.zizhi = zizhi;
    }

    public void setMiaoshuxiangfu(String miaoshuxiangfu) {
        this.miaoshuxiangfu = miaoshuxiangfu;
    }

    public void setMiaoshuxiangfurate(String miaoshuxiangfurate) {
        this.miaoshuxiangfurate = miaoshuxiangfurate;
    }

    public void setFuwutaidu(String fuwutaidu) {
        this.fuwutaidu = fuwutaidu;
    }

    public void setFuwutaidurate(String fuwutaidurate) {
        this.fuwutaidurate = fuwutaidurate;
    }

    public void setWuliufuwu(String wuliufuwu) {
        this.wuliufuwu = wuliufuwu;
    }

    public void setWuliufuwurate(String wuliufuwurate) {
        this.wuliufuwurate = wuliufuwurate;
    }

    public void setPrice(String price) {
        this.price = price;
    }

    public void setYouhuiquan(String youhuiquan) {
        this.youhuiquan = youhuiquan;
    }

    public void setKuaidi(String kuaidi) {
        this.kuaidi = kuaidi;
    }

    public void setChima(String chima) {
        this.chima = chima;
    }

    public void setKucun(String kucun) {
        this.kucun = kucun;
    }

    public void setZhifu(String zhifu) {
        this.zhifu = zhifu;
    }

    public void setShoucang(String shoucang) {
        this.shoucang = shoucang;
    }

    public void setKanleyoukan(String kanleyoukan) {
        this.kanleyoukan = kanleyoukan;
    }

    public void setLeijipinlun(String leijipinlun) {
        this.leijipinlun = leijipinlun;
    }

    public void setJiaoyichengong(String jiaoyichengong) {
        this.jiaoyichengong = jiaoyichengong;
    }

    public void setYoutu(String youtu) {
        this.youtu = youtu;
    }

    public void setZhuipin(String zhuipin) {
        this.zhuipin = zhuipin;
    }

    public void setHaopin(String haopin) {
        this.haopin = haopin;
    }

    public void setZhonpin(String zhonpin) {
        this.zhonpin = zhonpin;
    }

    public void setChapin(String chapin) {
        this.chapin = chapin;
    }

    public void setYinxiang(String yinxiang) {
        this.yinxiang = yinxiang;
    }

    public String getName() {
        return name;
    }

    public String getXinyu() {
        return xinyu;
    }

    public String getZhanguiid() {
        return zhanguiid;
    }

    public String getZizhi() {
        return zizhi;
    }

    public String getMiaoshuxiangfu() {
        return miaoshuxiangfu;
    }

    public String getMiaoshuxiangfurate() {
        return miaoshuxiangfurate;
    }

    public String getFuwutaidu() {
        return fuwutaidu;
    }

    public String getFuwutaidurate() {
        return fuwutaidurate;
    }

    public String getWuliufuwu() {
        return wuliufuwu;
    }

    public String getWuliufuwurate() {
        return wuliufuwurate;
    }

    public String getPrice() {
        return price;
    }

    public String getYouhuiquan() {
        return youhuiquan;
    }

    public String getKuaidi() {
        return kuaidi;
    }

    public String getChima() {
        return chima;
    }

    public String getKucun() {
        return kucun;
    }

    public String getZhifu() {
        return zhifu;
    }

    public String getShoucang() {
        return shoucang;
    }

    public String getKanleyoukan() {
        return kanleyoukan;
    }

    public String getLeijipinlun() {
        return leijipinlun;
    }

    public String getJiaoyichengong() {
        return jiaoyichengong;
    }

    public String getYoutu() {
        return youtu;
    }

    public String getZhuipin() {
        return zhuipin;
    }

    public String getHaopin() {
        return haopin;
    }

    public String getZhonpin() {
        return zhonpin;
    }

    public String getChapin() {
        return chapin;
    }

    public String getYinxiang() {
        return yinxiang;
    }
}
