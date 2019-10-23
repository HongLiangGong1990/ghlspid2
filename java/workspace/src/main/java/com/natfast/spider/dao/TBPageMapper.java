package com.natfast.spider.dao;

import com.natfast.spider.entity.TBPage;
import com.natfast.spider.entity.TBPageExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface TBPageMapper {
    long countByExample(TBPageExample example);

    int deleteByExample(TBPageExample example);

    int deleteByPrimaryKey(Integer id);

    int insert(TBPage record);

    int insertSelective(TBPage record);

    List<TBPage> selectByExample(TBPageExample example);

    TBPage selectByPrimaryKey(Integer id);

    int updateByExampleSelective(@Param("record") TBPage record, @Param("example") TBPageExample example);

    int updateByExample(@Param("record") TBPage record, @Param("example") TBPageExample example);

    int updateByPrimaryKeySelective(TBPage record);

    int updateByPrimaryKey(TBPage record);
}