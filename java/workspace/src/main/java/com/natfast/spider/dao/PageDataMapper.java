package com.natfast.spider.dao;

import com.natfast.spider.entity.PageData;
import com.natfast.spider.entity.PageDataExample;
import com.natfast.spider.entity.PageDataWithBLOBs;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface PageDataMapper {
    long countByExample(PageDataExample example);

    int deleteByExample(PageDataExample example);

    int deleteByPrimaryKey(Integer id);

    int insert(PageDataWithBLOBs record);

    int insertSelective(PageDataWithBLOBs record);

    List<PageDataWithBLOBs> selectByExampleWithBLOBs(PageDataExample example);

    List<PageData> selectByExample(PageDataExample example);

    PageDataWithBLOBs selectByPrimaryKey(Integer id);

    int updateByExampleSelective(@Param("record") PageDataWithBLOBs record, @Param("example") PageDataExample example);

    int updateByExampleWithBLOBs(@Param("record") PageDataWithBLOBs record, @Param("example") PageDataExample example);

    int updateByExample(@Param("record") PageData record, @Param("example") PageDataExample example);

    int updateByPrimaryKeySelective(PageDataWithBLOBs record);

    int updateByPrimaryKeyWithBLOBs(PageDataWithBLOBs record);

    int updateByPrimaryKey(PageData record);
}