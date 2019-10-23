package com.natfast.spider.service;

import com.natfast.spider.commons.FileUtil;
import com.natfast.spider.commons.Page;
import com.natfast.spider.commons.Result;
import com.natfast.spider.config.ConfigBeanProp;
import com.natfast.spider.dao.PageDataMapper;
import com.natfast.spider.dao.ProductMapper;
import com.natfast.spider.dao.TBPageMapper;
import com.natfast.spider.entity.Product;
import com.natfast.spider.entity.ProductExample;
import com.natfast.spider.entity.TBPage;
import com.natfast.spider.pojo.PageBean;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
public class SpiderService {

    @Autowired
    private TBPageMapper mapper;
    @Autowired
    private ConfigBeanProp config;
    @Autowired
    private ProductMapper productMapper;


    public Result resolveTmall(Page page) {
        Document doc = Jsoup.parseBodyFragment(page.getText());
        Elements lis = doc.getElementsByClass(page.getTagClass());
        int i=1;
        for (Element e : lis) {
//            System.out.println(e);
            //Elements elementsByClass = e.getElementsByClass(page.getTag());
            String text = e.text();
            if(text.strip().equals("")) continue;

            System.out.print(i+"##");
            System.out.println(text);
            i++;
        }

//        System.out.println(doc.toString());
        return Result.ok();
    }



    public void save(Page page) {
        FileUtil.append(page.getData(),"taobao.csv");
//        System.out.println(data);
    }

    @Transactional
    public void saveId(Page page){
        for(String id:page.getIdarr()){
            try {
                Product product = new Product();
                product.setProductId(id);
                productMapper.insert(product);
            } catch (Exception e) {
                System.out.println("出错product id: "+id);
                e.printStackTrace();
            }
        }
    }

    public List<String> getId(int pageIndex){
        ProductExample example = new ProductExample();
        ProductExample.Criteria criteria = example.createCriteria().andIdBetween((pageIndex-1)*100+1,pageIndex*100);
        List<String> ids= null;
        try {
            List<Product> products = productMapper.selectByExample(example);
            ids = new ArrayList<>();
            for(Product p: products){
                ids.add(p.getProductId());
            }
        } catch (Exception e) {
            //e.printStackTrace();
        }
        return ids;
    }
}
