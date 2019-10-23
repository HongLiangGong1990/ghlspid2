package com.natfast.spider.entity;

import java.util.ArrayList;
import java.util.List;

public class TBPageExample {
    protected String orderByClause;

    protected boolean distinct;

    protected List<Criteria> oredCriteria;

    public TBPageExample() {
        oredCriteria = new ArrayList<Criteria>();
    }

    public void setOrderByClause(String orderByClause) {
        this.orderByClause = orderByClause;
    }

    public String getOrderByClause() {
        return orderByClause;
    }

    public void setDistinct(boolean distinct) {
        this.distinct = distinct;
    }

    public boolean isDistinct() {
        return distinct;
    }

    public List<Criteria> getOredCriteria() {
        return oredCriteria;
    }

    public void or(Criteria criteria) {
        oredCriteria.add(criteria);
    }

    public Criteria or() {
        Criteria criteria = createCriteriaInternal();
        oredCriteria.add(criteria);
        return criteria;
    }

    public Criteria createCriteria() {
        Criteria criteria = createCriteriaInternal();
        if (oredCriteria.size() == 0) {
            oredCriteria.add(criteria);
        }
        return criteria;
    }

    protected Criteria createCriteriaInternal() {
        Criteria criteria = new Criteria();
        return criteria;
    }

    public void clear() {
        oredCriteria.clear();
        orderByClause = null;
        distinct = false;
    }

    protected abstract static class GeneratedCriteria {
        protected List<Criterion> criteria;

        protected GeneratedCriteria() {
            super();
            criteria = new ArrayList<Criterion>();
        }

        public boolean isValid() {
            return criteria.size() > 0;
        }

        public List<Criterion> getAllCriteria() {
            return criteria;
        }

        public List<Criterion> getCriteria() {
            return criteria;
        }

        protected void addCriterion(String condition) {
            if (condition == null) {
                throw new RuntimeException("Value for condition cannot be null");
            }
            criteria.add(new Criterion(condition));
        }

        protected void addCriterion(String condition, Object value, String property) {
            if (value == null) {
                throw new RuntimeException("Value for " + property + " cannot be null");
            }
            criteria.add(new Criterion(condition, value));
        }

        protected void addCriterion(String condition, Object value1, Object value2, String property) {
            if (value1 == null || value2 == null) {
                throw new RuntimeException("Between values for " + property + " cannot be null");
            }
            criteria.add(new Criterion(condition, value1, value2));
        }

        public Criteria andIdIsNull() {
            addCriterion("id is null");
            return (Criteria) this;
        }

        public Criteria andIdIsNotNull() {
            addCriterion("id is not null");
            return (Criteria) this;
        }

        public Criteria andIdEqualTo(Integer value) {
            addCriterion("id =", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdNotEqualTo(Integer value) {
            addCriterion("id <>", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdGreaterThan(Integer value) {
            addCriterion("id >", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdGreaterThanOrEqualTo(Integer value) {
            addCriterion("id >=", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdLessThan(Integer value) {
            addCriterion("id <", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdLessThanOrEqualTo(Integer value) {
            addCriterion("id <=", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdIn(List<Integer> values) {
            addCriterion("id in", values, "id");
            return (Criteria) this;
        }

        public Criteria andIdNotIn(List<Integer> values) {
            addCriterion("id not in", values, "id");
            return (Criteria) this;
        }

        public Criteria andIdBetween(Integer value1, Integer value2) {
            addCriterion("id between", value1, value2, "id");
            return (Criteria) this;
        }

        public Criteria andIdNotBetween(Integer value1, Integer value2) {
            addCriterion("id not between", value1, value2, "id");
            return (Criteria) this;
        }

        public Criteria andQiyeIsNull() {
            addCriterion("qiye is null");
            return (Criteria) this;
        }

        public Criteria andQiyeIsNotNull() {
            addCriterion("qiye is not null");
            return (Criteria) this;
        }

        public Criteria andQiyeEqualTo(String value) {
            addCriterion("qiye =", value, "qiye");
            return (Criteria) this;
        }

        public Criteria andQiyeNotEqualTo(String value) {
            addCriterion("qiye <>", value, "qiye");
            return (Criteria) this;
        }

        public Criteria andQiyeGreaterThan(String value) {
            addCriterion("qiye >", value, "qiye");
            return (Criteria) this;
        }

        public Criteria andQiyeGreaterThanOrEqualTo(String value) {
            addCriterion("qiye >=", value, "qiye");
            return (Criteria) this;
        }

        public Criteria andQiyeLessThan(String value) {
            addCriterion("qiye <", value, "qiye");
            return (Criteria) this;
        }

        public Criteria andQiyeLessThanOrEqualTo(String value) {
            addCriterion("qiye <=", value, "qiye");
            return (Criteria) this;
        }

        public Criteria andQiyeLike(String value) {
            addCriterion("qiye like", value, "qiye");
            return (Criteria) this;
        }

        public Criteria andQiyeNotLike(String value) {
            addCriterion("qiye not like", value, "qiye");
            return (Criteria) this;
        }

        public Criteria andQiyeIn(List<String> values) {
            addCriterion("qiye in", values, "qiye");
            return (Criteria) this;
        }

        public Criteria andQiyeNotIn(List<String> values) {
            addCriterion("qiye not in", values, "qiye");
            return (Criteria) this;
        }

        public Criteria andQiyeBetween(String value1, String value2) {
            addCriterion("qiye between", value1, value2, "qiye");
            return (Criteria) this;
        }

        public Criteria andQiyeNotBetween(String value1, String value2) {
            addCriterion("qiye not between", value1, value2, "qiye");
            return (Criteria) this;
        }

        public Criteria andNameIsNull() {
            addCriterion("name is null");
            return (Criteria) this;
        }

        public Criteria andNameIsNotNull() {
            addCriterion("name is not null");
            return (Criteria) this;
        }

        public Criteria andNameEqualTo(String value) {
            addCriterion("name =", value, "name");
            return (Criteria) this;
        }

        public Criteria andNameNotEqualTo(String value) {
            addCriterion("name <>", value, "name");
            return (Criteria) this;
        }

        public Criteria andNameGreaterThan(String value) {
            addCriterion("name >", value, "name");
            return (Criteria) this;
        }

        public Criteria andNameGreaterThanOrEqualTo(String value) {
            addCriterion("name >=", value, "name");
            return (Criteria) this;
        }

        public Criteria andNameLessThan(String value) {
            addCriterion("name <", value, "name");
            return (Criteria) this;
        }

        public Criteria andNameLessThanOrEqualTo(String value) {
            addCriterion("name <=", value, "name");
            return (Criteria) this;
        }

        public Criteria andNameLike(String value) {
            addCriterion("name like", value, "name");
            return (Criteria) this;
        }

        public Criteria andNameNotLike(String value) {
            addCriterion("name not like", value, "name");
            return (Criteria) this;
        }

        public Criteria andNameIn(List<String> values) {
            addCriterion("name in", values, "name");
            return (Criteria) this;
        }

        public Criteria andNameNotIn(List<String> values) {
            addCriterion("name not in", values, "name");
            return (Criteria) this;
        }

        public Criteria andNameBetween(String value1, String value2) {
            addCriterion("name between", value1, value2, "name");
            return (Criteria) this;
        }

        public Criteria andNameNotBetween(String value1, String value2) {
            addCriterion("name not between", value1, value2, "name");
            return (Criteria) this;
        }

        public Criteria andXinyuIsNull() {
            addCriterion("xinyu is null");
            return (Criteria) this;
        }

        public Criteria andXinyuIsNotNull() {
            addCriterion("xinyu is not null");
            return (Criteria) this;
        }

        public Criteria andXinyuEqualTo(String value) {
            addCriterion("xinyu =", value, "xinyu");
            return (Criteria) this;
        }

        public Criteria andXinyuNotEqualTo(String value) {
            addCriterion("xinyu <>", value, "xinyu");
            return (Criteria) this;
        }

        public Criteria andXinyuGreaterThan(String value) {
            addCriterion("xinyu >", value, "xinyu");
            return (Criteria) this;
        }

        public Criteria andXinyuGreaterThanOrEqualTo(String value) {
            addCriterion("xinyu >=", value, "xinyu");
            return (Criteria) this;
        }

        public Criteria andXinyuLessThan(String value) {
            addCriterion("xinyu <", value, "xinyu");
            return (Criteria) this;
        }

        public Criteria andXinyuLessThanOrEqualTo(String value) {
            addCriterion("xinyu <=", value, "xinyu");
            return (Criteria) this;
        }

        public Criteria andXinyuLike(String value) {
            addCriterion("xinyu like", value, "xinyu");
            return (Criteria) this;
        }

        public Criteria andXinyuNotLike(String value) {
            addCriterion("xinyu not like", value, "xinyu");
            return (Criteria) this;
        }

        public Criteria andXinyuIn(List<String> values) {
            addCriterion("xinyu in", values, "xinyu");
            return (Criteria) this;
        }

        public Criteria andXinyuNotIn(List<String> values) {
            addCriterion("xinyu not in", values, "xinyu");
            return (Criteria) this;
        }

        public Criteria andXinyuBetween(String value1, String value2) {
            addCriterion("xinyu between", value1, value2, "xinyu");
            return (Criteria) this;
        }

        public Criteria andXinyuNotBetween(String value1, String value2) {
            addCriterion("xinyu not between", value1, value2, "xinyu");
            return (Criteria) this;
        }

        public Criteria andZhanguiidIsNull() {
            addCriterion("zhanguiid is null");
            return (Criteria) this;
        }

        public Criteria andZhanguiidIsNotNull() {
            addCriterion("zhanguiid is not null");
            return (Criteria) this;
        }

        public Criteria andZhanguiidEqualTo(String value) {
            addCriterion("zhanguiid =", value, "zhanguiid");
            return (Criteria) this;
        }

        public Criteria andZhanguiidNotEqualTo(String value) {
            addCriterion("zhanguiid <>", value, "zhanguiid");
            return (Criteria) this;
        }

        public Criteria andZhanguiidGreaterThan(String value) {
            addCriterion("zhanguiid >", value, "zhanguiid");
            return (Criteria) this;
        }

        public Criteria andZhanguiidGreaterThanOrEqualTo(String value) {
            addCriterion("zhanguiid >=", value, "zhanguiid");
            return (Criteria) this;
        }

        public Criteria andZhanguiidLessThan(String value) {
            addCriterion("zhanguiid <", value, "zhanguiid");
            return (Criteria) this;
        }

        public Criteria andZhanguiidLessThanOrEqualTo(String value) {
            addCriterion("zhanguiid <=", value, "zhanguiid");
            return (Criteria) this;
        }

        public Criteria andZhanguiidLike(String value) {
            addCriterion("zhanguiid like", value, "zhanguiid");
            return (Criteria) this;
        }

        public Criteria andZhanguiidNotLike(String value) {
            addCriterion("zhanguiid not like", value, "zhanguiid");
            return (Criteria) this;
        }

        public Criteria andZhanguiidIn(List<String> values) {
            addCriterion("zhanguiid in", values, "zhanguiid");
            return (Criteria) this;
        }

        public Criteria andZhanguiidNotIn(List<String> values) {
            addCriterion("zhanguiid not in", values, "zhanguiid");
            return (Criteria) this;
        }

        public Criteria andZhanguiidBetween(String value1, String value2) {
            addCriterion("zhanguiid between", value1, value2, "zhanguiid");
            return (Criteria) this;
        }

        public Criteria andZhanguiidNotBetween(String value1, String value2) {
            addCriterion("zhanguiid not between", value1, value2, "zhanguiid");
            return (Criteria) this;
        }

        public Criteria andZizhiIsNull() {
            addCriterion("zizhi is null");
            return (Criteria) this;
        }

        public Criteria andZizhiIsNotNull() {
            addCriterion("zizhi is not null");
            return (Criteria) this;
        }

        public Criteria andZizhiEqualTo(String value) {
            addCriterion("zizhi =", value, "zizhi");
            return (Criteria) this;
        }

        public Criteria andZizhiNotEqualTo(String value) {
            addCriterion("zizhi <>", value, "zizhi");
            return (Criteria) this;
        }

        public Criteria andZizhiGreaterThan(String value) {
            addCriterion("zizhi >", value, "zizhi");
            return (Criteria) this;
        }

        public Criteria andZizhiGreaterThanOrEqualTo(String value) {
            addCriterion("zizhi >=", value, "zizhi");
            return (Criteria) this;
        }

        public Criteria andZizhiLessThan(String value) {
            addCriterion("zizhi <", value, "zizhi");
            return (Criteria) this;
        }

        public Criteria andZizhiLessThanOrEqualTo(String value) {
            addCriterion("zizhi <=", value, "zizhi");
            return (Criteria) this;
        }

        public Criteria andZizhiLike(String value) {
            addCriterion("zizhi like", value, "zizhi");
            return (Criteria) this;
        }

        public Criteria andZizhiNotLike(String value) {
            addCriterion("zizhi not like", value, "zizhi");
            return (Criteria) this;
        }

        public Criteria andZizhiIn(List<String> values) {
            addCriterion("zizhi in", values, "zizhi");
            return (Criteria) this;
        }

        public Criteria andZizhiNotIn(List<String> values) {
            addCriterion("zizhi not in", values, "zizhi");
            return (Criteria) this;
        }

        public Criteria andZizhiBetween(String value1, String value2) {
            addCriterion("zizhi between", value1, value2, "zizhi");
            return (Criteria) this;
        }

        public Criteria andZizhiNotBetween(String value1, String value2) {
            addCriterion("zizhi not between", value1, value2, "zizhi");
            return (Criteria) this;
        }

        public Criteria andMiaoshuIsNull() {
            addCriterion("miaoshu is null");
            return (Criteria) this;
        }

        public Criteria andMiaoshuIsNotNull() {
            addCriterion("miaoshu is not null");
            return (Criteria) this;
        }

        public Criteria andMiaoshuEqualTo(String value) {
            addCriterion("miaoshu =", value, "miaoshu");
            return (Criteria) this;
        }

        public Criteria andMiaoshuNotEqualTo(String value) {
            addCriterion("miaoshu <>", value, "miaoshu");
            return (Criteria) this;
        }

        public Criteria andMiaoshuGreaterThan(String value) {
            addCriterion("miaoshu >", value, "miaoshu");
            return (Criteria) this;
        }

        public Criteria andMiaoshuGreaterThanOrEqualTo(String value) {
            addCriterion("miaoshu >=", value, "miaoshu");
            return (Criteria) this;
        }

        public Criteria andMiaoshuLessThan(String value) {
            addCriterion("miaoshu <", value, "miaoshu");
            return (Criteria) this;
        }

        public Criteria andMiaoshuLessThanOrEqualTo(String value) {
            addCriterion("miaoshu <=", value, "miaoshu");
            return (Criteria) this;
        }

        public Criteria andMiaoshuLike(String value) {
            addCriterion("miaoshu like", value, "miaoshu");
            return (Criteria) this;
        }

        public Criteria andMiaoshuNotLike(String value) {
            addCriterion("miaoshu not like", value, "miaoshu");
            return (Criteria) this;
        }

        public Criteria andMiaoshuIn(List<String> values) {
            addCriterion("miaoshu in", values, "miaoshu");
            return (Criteria) this;
        }

        public Criteria andMiaoshuNotIn(List<String> values) {
            addCriterion("miaoshu not in", values, "miaoshu");
            return (Criteria) this;
        }

        public Criteria andMiaoshuBetween(String value1, String value2) {
            addCriterion("miaoshu between", value1, value2, "miaoshu");
            return (Criteria) this;
        }

        public Criteria andMiaoshuNotBetween(String value1, String value2) {
            addCriterion("miaoshu not between", value1, value2, "miaoshu");
            return (Criteria) this;
        }

        public Criteria andFuwuIsNull() {
            addCriterion("fuwu is null");
            return (Criteria) this;
        }

        public Criteria andFuwuIsNotNull() {
            addCriterion("fuwu is not null");
            return (Criteria) this;
        }

        public Criteria andFuwuEqualTo(String value) {
            addCriterion("fuwu =", value, "fuwu");
            return (Criteria) this;
        }

        public Criteria andFuwuNotEqualTo(String value) {
            addCriterion("fuwu <>", value, "fuwu");
            return (Criteria) this;
        }

        public Criteria andFuwuGreaterThan(String value) {
            addCriterion("fuwu >", value, "fuwu");
            return (Criteria) this;
        }

        public Criteria andFuwuGreaterThanOrEqualTo(String value) {
            addCriterion("fuwu >=", value, "fuwu");
            return (Criteria) this;
        }

        public Criteria andFuwuLessThan(String value) {
            addCriterion("fuwu <", value, "fuwu");
            return (Criteria) this;
        }

        public Criteria andFuwuLessThanOrEqualTo(String value) {
            addCriterion("fuwu <=", value, "fuwu");
            return (Criteria) this;
        }

        public Criteria andFuwuLike(String value) {
            addCriterion("fuwu like", value, "fuwu");
            return (Criteria) this;
        }

        public Criteria andFuwuNotLike(String value) {
            addCriterion("fuwu not like", value, "fuwu");
            return (Criteria) this;
        }

        public Criteria andFuwuIn(List<String> values) {
            addCriterion("fuwu in", values, "fuwu");
            return (Criteria) this;
        }

        public Criteria andFuwuNotIn(List<String> values) {
            addCriterion("fuwu not in", values, "fuwu");
            return (Criteria) this;
        }

        public Criteria andFuwuBetween(String value1, String value2) {
            addCriterion("fuwu between", value1, value2, "fuwu");
            return (Criteria) this;
        }

        public Criteria andFuwuNotBetween(String value1, String value2) {
            addCriterion("fuwu not between", value1, value2, "fuwu");
            return (Criteria) this;
        }

        public Criteria andWuliuIsNull() {
            addCriterion("wuliu is null");
            return (Criteria) this;
        }

        public Criteria andWuliuIsNotNull() {
            addCriterion("wuliu is not null");
            return (Criteria) this;
        }

        public Criteria andWuliuEqualTo(String value) {
            addCriterion("wuliu =", value, "wuliu");
            return (Criteria) this;
        }

        public Criteria andWuliuNotEqualTo(String value) {
            addCriterion("wuliu <>", value, "wuliu");
            return (Criteria) this;
        }

        public Criteria andWuliuGreaterThan(String value) {
            addCriterion("wuliu >", value, "wuliu");
            return (Criteria) this;
        }

        public Criteria andWuliuGreaterThanOrEqualTo(String value) {
            addCriterion("wuliu >=", value, "wuliu");
            return (Criteria) this;
        }

        public Criteria andWuliuLessThan(String value) {
            addCriterion("wuliu <", value, "wuliu");
            return (Criteria) this;
        }

        public Criteria andWuliuLessThanOrEqualTo(String value) {
            addCriterion("wuliu <=", value, "wuliu");
            return (Criteria) this;
        }

        public Criteria andWuliuLike(String value) {
            addCriterion("wuliu like", value, "wuliu");
            return (Criteria) this;
        }

        public Criteria andWuliuNotLike(String value) {
            addCriterion("wuliu not like", value, "wuliu");
            return (Criteria) this;
        }

        public Criteria andWuliuIn(List<String> values) {
            addCriterion("wuliu in", values, "wuliu");
            return (Criteria) this;
        }

        public Criteria andWuliuNotIn(List<String> values) {
            addCriterion("wuliu not in", values, "wuliu");
            return (Criteria) this;
        }

        public Criteria andWuliuBetween(String value1, String value2) {
            addCriterion("wuliu between", value1, value2, "wuliu");
            return (Criteria) this;
        }

        public Criteria andWuliuNotBetween(String value1, String value2) {
            addCriterion("wuliu not between", value1, value2, "wuliu");
            return (Criteria) this;
        }

        public Criteria andKanleyoukan1IsNull() {
            addCriterion("kanleyoukan1 is null");
            return (Criteria) this;
        }

        public Criteria andKanleyoukan1IsNotNull() {
            addCriterion("kanleyoukan1 is not null");
            return (Criteria) this;
        }

        public Criteria andKanleyoukan1EqualTo(String value) {
            addCriterion("kanleyoukan1 =", value, "kanleyoukan1");
            return (Criteria) this;
        }

        public Criteria andKanleyoukan1NotEqualTo(String value) {
            addCriterion("kanleyoukan1 <>", value, "kanleyoukan1");
            return (Criteria) this;
        }

        public Criteria andKanleyoukan1GreaterThan(String value) {
            addCriterion("kanleyoukan1 >", value, "kanleyoukan1");
            return (Criteria) this;
        }

        public Criteria andKanleyoukan1GreaterThanOrEqualTo(String value) {
            addCriterion("kanleyoukan1 >=", value, "kanleyoukan1");
            return (Criteria) this;
        }

        public Criteria andKanleyoukan1LessThan(String value) {
            addCriterion("kanleyoukan1 <", value, "kanleyoukan1");
            return (Criteria) this;
        }

        public Criteria andKanleyoukan1LessThanOrEqualTo(String value) {
            addCriterion("kanleyoukan1 <=", value, "kanleyoukan1");
            return (Criteria) this;
        }

        public Criteria andKanleyoukan1Like(String value) {
            addCriterion("kanleyoukan1 like", value, "kanleyoukan1");
            return (Criteria) this;
        }

        public Criteria andKanleyoukan1NotLike(String value) {
            addCriterion("kanleyoukan1 not like", value, "kanleyoukan1");
            return (Criteria) this;
        }

        public Criteria andKanleyoukan1In(List<String> values) {
            addCriterion("kanleyoukan1 in", values, "kanleyoukan1");
            return (Criteria) this;
        }

        public Criteria andKanleyoukan1NotIn(List<String> values) {
            addCriterion("kanleyoukan1 not in", values, "kanleyoukan1");
            return (Criteria) this;
        }

        public Criteria andKanleyoukan1Between(String value1, String value2) {
            addCriterion("kanleyoukan1 between", value1, value2, "kanleyoukan1");
            return (Criteria) this;
        }

        public Criteria andKanleyoukan1NotBetween(String value1, String value2) {
            addCriterion("kanleyoukan1 not between", value1, value2, "kanleyoukan1");
            return (Criteria) this;
        }

        public Criteria andKanleyoukan2IsNull() {
            addCriterion("kanleyoukan2 is null");
            return (Criteria) this;
        }

        public Criteria andKanleyoukan2IsNotNull() {
            addCriterion("kanleyoukan2 is not null");
            return (Criteria) this;
        }

        public Criteria andKanleyoukan2EqualTo(String value) {
            addCriterion("kanleyoukan2 =", value, "kanleyoukan2");
            return (Criteria) this;
        }

        public Criteria andKanleyoukan2NotEqualTo(String value) {
            addCriterion("kanleyoukan2 <>", value, "kanleyoukan2");
            return (Criteria) this;
        }

        public Criteria andKanleyoukan2GreaterThan(String value) {
            addCriterion("kanleyoukan2 >", value, "kanleyoukan2");
            return (Criteria) this;
        }

        public Criteria andKanleyoukan2GreaterThanOrEqualTo(String value) {
            addCriterion("kanleyoukan2 >=", value, "kanleyoukan2");
            return (Criteria) this;
        }

        public Criteria andKanleyoukan2LessThan(String value) {
            addCriterion("kanleyoukan2 <", value, "kanleyoukan2");
            return (Criteria) this;
        }

        public Criteria andKanleyoukan2LessThanOrEqualTo(String value) {
            addCriterion("kanleyoukan2 <=", value, "kanleyoukan2");
            return (Criteria) this;
        }

        public Criteria andKanleyoukan2Like(String value) {
            addCriterion("kanleyoukan2 like", value, "kanleyoukan2");
            return (Criteria) this;
        }

        public Criteria andKanleyoukan2NotLike(String value) {
            addCriterion("kanleyoukan2 not like", value, "kanleyoukan2");
            return (Criteria) this;
        }

        public Criteria andKanleyoukan2In(List<String> values) {
            addCriterion("kanleyoukan2 in", values, "kanleyoukan2");
            return (Criteria) this;
        }

        public Criteria andKanleyoukan2NotIn(List<String> values) {
            addCriterion("kanleyoukan2 not in", values, "kanleyoukan2");
            return (Criteria) this;
        }

        public Criteria andKanleyoukan2Between(String value1, String value2) {
            addCriterion("kanleyoukan2 between", value1, value2, "kanleyoukan2");
            return (Criteria) this;
        }

        public Criteria andKanleyoukan2NotBetween(String value1, String value2) {
            addCriterion("kanleyoukan2 not between", value1, value2, "kanleyoukan2");
            return (Criteria) this;
        }

        public Criteria andKanleyoukan3IsNull() {
            addCriterion("kanleyoukan3 is null");
            return (Criteria) this;
        }

        public Criteria andKanleyoukan3IsNotNull() {
            addCriterion("kanleyoukan3 is not null");
            return (Criteria) this;
        }

        public Criteria andKanleyoukan3EqualTo(String value) {
            addCriterion("kanleyoukan3 =", value, "kanleyoukan3");
            return (Criteria) this;
        }

        public Criteria andKanleyoukan3NotEqualTo(String value) {
            addCriterion("kanleyoukan3 <>", value, "kanleyoukan3");
            return (Criteria) this;
        }

        public Criteria andKanleyoukan3GreaterThan(String value) {
            addCriterion("kanleyoukan3 >", value, "kanleyoukan3");
            return (Criteria) this;
        }

        public Criteria andKanleyoukan3GreaterThanOrEqualTo(String value) {
            addCriterion("kanleyoukan3 >=", value, "kanleyoukan3");
            return (Criteria) this;
        }

        public Criteria andKanleyoukan3LessThan(String value) {
            addCriterion("kanleyoukan3 <", value, "kanleyoukan3");
            return (Criteria) this;
        }

        public Criteria andKanleyoukan3LessThanOrEqualTo(String value) {
            addCriterion("kanleyoukan3 <=", value, "kanleyoukan3");
            return (Criteria) this;
        }

        public Criteria andKanleyoukan3Like(String value) {
            addCriterion("kanleyoukan3 like", value, "kanleyoukan3");
            return (Criteria) this;
        }

        public Criteria andKanleyoukan3NotLike(String value) {
            addCriterion("kanleyoukan3 not like", value, "kanleyoukan3");
            return (Criteria) this;
        }

        public Criteria andKanleyoukan3In(List<String> values) {
            addCriterion("kanleyoukan3 in", values, "kanleyoukan3");
            return (Criteria) this;
        }

        public Criteria andKanleyoukan3NotIn(List<String> values) {
            addCriterion("kanleyoukan3 not in", values, "kanleyoukan3");
            return (Criteria) this;
        }

        public Criteria andKanleyoukan3Between(String value1, String value2) {
            addCriterion("kanleyoukan3 between", value1, value2, "kanleyoukan3");
            return (Criteria) this;
        }

        public Criteria andKanleyoukan3NotBetween(String value1, String value2) {
            addCriterion("kanleyoukan3 not between", value1, value2, "kanleyoukan3");
            return (Criteria) this;
        }

        public Criteria andKanleyoukan4IsNull() {
            addCriterion("kanleyoukan4 is null");
            return (Criteria) this;
        }

        public Criteria andKanleyoukan4IsNotNull() {
            addCriterion("kanleyoukan4 is not null");
            return (Criteria) this;
        }

        public Criteria andKanleyoukan4EqualTo(String value) {
            addCriterion("kanleyoukan4 =", value, "kanleyoukan4");
            return (Criteria) this;
        }

        public Criteria andKanleyoukan4NotEqualTo(String value) {
            addCriterion("kanleyoukan4 <>", value, "kanleyoukan4");
            return (Criteria) this;
        }

        public Criteria andKanleyoukan4GreaterThan(String value) {
            addCriterion("kanleyoukan4 >", value, "kanleyoukan4");
            return (Criteria) this;
        }

        public Criteria andKanleyoukan4GreaterThanOrEqualTo(String value) {
            addCriterion("kanleyoukan4 >=", value, "kanleyoukan4");
            return (Criteria) this;
        }

        public Criteria andKanleyoukan4LessThan(String value) {
            addCriterion("kanleyoukan4 <", value, "kanleyoukan4");
            return (Criteria) this;
        }

        public Criteria andKanleyoukan4LessThanOrEqualTo(String value) {
            addCriterion("kanleyoukan4 <=", value, "kanleyoukan4");
            return (Criteria) this;
        }

        public Criteria andKanleyoukan4Like(String value) {
            addCriterion("kanleyoukan4 like", value, "kanleyoukan4");
            return (Criteria) this;
        }

        public Criteria andKanleyoukan4NotLike(String value) {
            addCriterion("kanleyoukan4 not like", value, "kanleyoukan4");
            return (Criteria) this;
        }

        public Criteria andKanleyoukan4In(List<String> values) {
            addCriterion("kanleyoukan4 in", values, "kanleyoukan4");
            return (Criteria) this;
        }

        public Criteria andKanleyoukan4NotIn(List<String> values) {
            addCriterion("kanleyoukan4 not in", values, "kanleyoukan4");
            return (Criteria) this;
        }

        public Criteria andKanleyoukan4Between(String value1, String value2) {
            addCriterion("kanleyoukan4 between", value1, value2, "kanleyoukan4");
            return (Criteria) this;
        }

        public Criteria andKanleyoukan4NotBetween(String value1, String value2) {
            addCriterion("kanleyoukan4 not between", value1, value2, "kanleyoukan4");
            return (Criteria) this;
        }

        public Criteria andPriceIsNull() {
            addCriterion("price is null");
            return (Criteria) this;
        }

        public Criteria andPriceIsNotNull() {
            addCriterion("price is not null");
            return (Criteria) this;
        }

        public Criteria andPriceEqualTo(String value) {
            addCriterion("price =", value, "price");
            return (Criteria) this;
        }

        public Criteria andPriceNotEqualTo(String value) {
            addCriterion("price <>", value, "price");
            return (Criteria) this;
        }

        public Criteria andPriceGreaterThan(String value) {
            addCriterion("price >", value, "price");
            return (Criteria) this;
        }

        public Criteria andPriceGreaterThanOrEqualTo(String value) {
            addCriterion("price >=", value, "price");
            return (Criteria) this;
        }

        public Criteria andPriceLessThan(String value) {
            addCriterion("price <", value, "price");
            return (Criteria) this;
        }

        public Criteria andPriceLessThanOrEqualTo(String value) {
            addCriterion("price <=", value, "price");
            return (Criteria) this;
        }

        public Criteria andPriceLike(String value) {
            addCriterion("price like", value, "price");
            return (Criteria) this;
        }

        public Criteria andPriceNotLike(String value) {
            addCriterion("price not like", value, "price");
            return (Criteria) this;
        }

        public Criteria andPriceIn(List<String> values) {
            addCriterion("price in", values, "price");
            return (Criteria) this;
        }

        public Criteria andPriceNotIn(List<String> values) {
            addCriterion("price not in", values, "price");
            return (Criteria) this;
        }

        public Criteria andPriceBetween(String value1, String value2) {
            addCriterion("price between", value1, value2, "price");
            return (Criteria) this;
        }

        public Criteria andPriceNotBetween(String value1, String value2) {
            addCriterion("price not between", value1, value2, "price");
            return (Criteria) this;
        }

        public Criteria andYouhuiquanIsNull() {
            addCriterion("youhuiquan is null");
            return (Criteria) this;
        }

        public Criteria andYouhuiquanIsNotNull() {
            addCriterion("youhuiquan is not null");
            return (Criteria) this;
        }

        public Criteria andYouhuiquanEqualTo(String value) {
            addCriterion("youhuiquan =", value, "youhuiquan");
            return (Criteria) this;
        }

        public Criteria andYouhuiquanNotEqualTo(String value) {
            addCriterion("youhuiquan <>", value, "youhuiquan");
            return (Criteria) this;
        }

        public Criteria andYouhuiquanGreaterThan(String value) {
            addCriterion("youhuiquan >", value, "youhuiquan");
            return (Criteria) this;
        }

        public Criteria andYouhuiquanGreaterThanOrEqualTo(String value) {
            addCriterion("youhuiquan >=", value, "youhuiquan");
            return (Criteria) this;
        }

        public Criteria andYouhuiquanLessThan(String value) {
            addCriterion("youhuiquan <", value, "youhuiquan");
            return (Criteria) this;
        }

        public Criteria andYouhuiquanLessThanOrEqualTo(String value) {
            addCriterion("youhuiquan <=", value, "youhuiquan");
            return (Criteria) this;
        }

        public Criteria andYouhuiquanLike(String value) {
            addCriterion("youhuiquan like", value, "youhuiquan");
            return (Criteria) this;
        }

        public Criteria andYouhuiquanNotLike(String value) {
            addCriterion("youhuiquan not like", value, "youhuiquan");
            return (Criteria) this;
        }

        public Criteria andYouhuiquanIn(List<String> values) {
            addCriterion("youhuiquan in", values, "youhuiquan");
            return (Criteria) this;
        }

        public Criteria andYouhuiquanNotIn(List<String> values) {
            addCriterion("youhuiquan not in", values, "youhuiquan");
            return (Criteria) this;
        }

        public Criteria andYouhuiquanBetween(String value1, String value2) {
            addCriterion("youhuiquan between", value1, value2, "youhuiquan");
            return (Criteria) this;
        }

        public Criteria andYouhuiquanNotBetween(String value1, String value2) {
            addCriterion("youhuiquan not between", value1, value2, "youhuiquan");
            return (Criteria) this;
        }

        public Criteria andKuaidiIsNull() {
            addCriterion("kuaidi is null");
            return (Criteria) this;
        }

        public Criteria andKuaidiIsNotNull() {
            addCriterion("kuaidi is not null");
            return (Criteria) this;
        }

        public Criteria andKuaidiEqualTo(String value) {
            addCriterion("kuaidi =", value, "kuaidi");
            return (Criteria) this;
        }

        public Criteria andKuaidiNotEqualTo(String value) {
            addCriterion("kuaidi <>", value, "kuaidi");
            return (Criteria) this;
        }

        public Criteria andKuaidiGreaterThan(String value) {
            addCriterion("kuaidi >", value, "kuaidi");
            return (Criteria) this;
        }

        public Criteria andKuaidiGreaterThanOrEqualTo(String value) {
            addCriterion("kuaidi >=", value, "kuaidi");
            return (Criteria) this;
        }

        public Criteria andKuaidiLessThan(String value) {
            addCriterion("kuaidi <", value, "kuaidi");
            return (Criteria) this;
        }

        public Criteria andKuaidiLessThanOrEqualTo(String value) {
            addCriterion("kuaidi <=", value, "kuaidi");
            return (Criteria) this;
        }

        public Criteria andKuaidiLike(String value) {
            addCriterion("kuaidi like", value, "kuaidi");
            return (Criteria) this;
        }

        public Criteria andKuaidiNotLike(String value) {
            addCriterion("kuaidi not like", value, "kuaidi");
            return (Criteria) this;
        }

        public Criteria andKuaidiIn(List<String> values) {
            addCriterion("kuaidi in", values, "kuaidi");
            return (Criteria) this;
        }

        public Criteria andKuaidiNotIn(List<String> values) {
            addCriterion("kuaidi not in", values, "kuaidi");
            return (Criteria) this;
        }

        public Criteria andKuaidiBetween(String value1, String value2) {
            addCriterion("kuaidi between", value1, value2, "kuaidi");
            return (Criteria) this;
        }

        public Criteria andKuaidiNotBetween(String value1, String value2) {
            addCriterion("kuaidi not between", value1, value2, "kuaidi");
            return (Criteria) this;
        }

        public Criteria andChimaIsNull() {
            addCriterion("chima is null");
            return (Criteria) this;
        }

        public Criteria andChimaIsNotNull() {
            addCriterion("chima is not null");
            return (Criteria) this;
        }

        public Criteria andChimaEqualTo(String value) {
            addCriterion("chima =", value, "chima");
            return (Criteria) this;
        }

        public Criteria andChimaNotEqualTo(String value) {
            addCriterion("chima <>", value, "chima");
            return (Criteria) this;
        }

        public Criteria andChimaGreaterThan(String value) {
            addCriterion("chima >", value, "chima");
            return (Criteria) this;
        }

        public Criteria andChimaGreaterThanOrEqualTo(String value) {
            addCriterion("chima >=", value, "chima");
            return (Criteria) this;
        }

        public Criteria andChimaLessThan(String value) {
            addCriterion("chima <", value, "chima");
            return (Criteria) this;
        }

        public Criteria andChimaLessThanOrEqualTo(String value) {
            addCriterion("chima <=", value, "chima");
            return (Criteria) this;
        }

        public Criteria andChimaLike(String value) {
            addCriterion("chima like", value, "chima");
            return (Criteria) this;
        }

        public Criteria andChimaNotLike(String value) {
            addCriterion("chima not like", value, "chima");
            return (Criteria) this;
        }

        public Criteria andChimaIn(List<String> values) {
            addCriterion("chima in", values, "chima");
            return (Criteria) this;
        }

        public Criteria andChimaNotIn(List<String> values) {
            addCriterion("chima not in", values, "chima");
            return (Criteria) this;
        }

        public Criteria andChimaBetween(String value1, String value2) {
            addCriterion("chima between", value1, value2, "chima");
            return (Criteria) this;
        }

        public Criteria andChimaNotBetween(String value1, String value2) {
            addCriterion("chima not between", value1, value2, "chima");
            return (Criteria) this;
        }

        public Criteria andKucunIsNull() {
            addCriterion("kucun is null");
            return (Criteria) this;
        }

        public Criteria andKucunIsNotNull() {
            addCriterion("kucun is not null");
            return (Criteria) this;
        }

        public Criteria andKucunEqualTo(String value) {
            addCriterion("kucun =", value, "kucun");
            return (Criteria) this;
        }

        public Criteria andKucunNotEqualTo(String value) {
            addCriterion("kucun <>", value, "kucun");
            return (Criteria) this;
        }

        public Criteria andKucunGreaterThan(String value) {
            addCriterion("kucun >", value, "kucun");
            return (Criteria) this;
        }

        public Criteria andKucunGreaterThanOrEqualTo(String value) {
            addCriterion("kucun >=", value, "kucun");
            return (Criteria) this;
        }

        public Criteria andKucunLessThan(String value) {
            addCriterion("kucun <", value, "kucun");
            return (Criteria) this;
        }

        public Criteria andKucunLessThanOrEqualTo(String value) {
            addCriterion("kucun <=", value, "kucun");
            return (Criteria) this;
        }

        public Criteria andKucunLike(String value) {
            addCriterion("kucun like", value, "kucun");
            return (Criteria) this;
        }

        public Criteria andKucunNotLike(String value) {
            addCriterion("kucun not like", value, "kucun");
            return (Criteria) this;
        }

        public Criteria andKucunIn(List<String> values) {
            addCriterion("kucun in", values, "kucun");
            return (Criteria) this;
        }

        public Criteria andKucunNotIn(List<String> values) {
            addCriterion("kucun not in", values, "kucun");
            return (Criteria) this;
        }

        public Criteria andKucunBetween(String value1, String value2) {
            addCriterion("kucun between", value1, value2, "kucun");
            return (Criteria) this;
        }

        public Criteria andKucunNotBetween(String value1, String value2) {
            addCriterion("kucun not between", value1, value2, "kucun");
            return (Criteria) this;
        }

        public Criteria andZhifuIsNull() {
            addCriterion("zhifu is null");
            return (Criteria) this;
        }

        public Criteria andZhifuIsNotNull() {
            addCriterion("zhifu is not null");
            return (Criteria) this;
        }

        public Criteria andZhifuEqualTo(String value) {
            addCriterion("zhifu =", value, "zhifu");
            return (Criteria) this;
        }

        public Criteria andZhifuNotEqualTo(String value) {
            addCriterion("zhifu <>", value, "zhifu");
            return (Criteria) this;
        }

        public Criteria andZhifuGreaterThan(String value) {
            addCriterion("zhifu >", value, "zhifu");
            return (Criteria) this;
        }

        public Criteria andZhifuGreaterThanOrEqualTo(String value) {
            addCriterion("zhifu >=", value, "zhifu");
            return (Criteria) this;
        }

        public Criteria andZhifuLessThan(String value) {
            addCriterion("zhifu <", value, "zhifu");
            return (Criteria) this;
        }

        public Criteria andZhifuLessThanOrEqualTo(String value) {
            addCriterion("zhifu <=", value, "zhifu");
            return (Criteria) this;
        }

        public Criteria andZhifuLike(String value) {
            addCriterion("zhifu like", value, "zhifu");
            return (Criteria) this;
        }

        public Criteria andZhifuNotLike(String value) {
            addCriterion("zhifu not like", value, "zhifu");
            return (Criteria) this;
        }

        public Criteria andZhifuIn(List<String> values) {
            addCriterion("zhifu in", values, "zhifu");
            return (Criteria) this;
        }

        public Criteria andZhifuNotIn(List<String> values) {
            addCriterion("zhifu not in", values, "zhifu");
            return (Criteria) this;
        }

        public Criteria andZhifuBetween(String value1, String value2) {
            addCriterion("zhifu between", value1, value2, "zhifu");
            return (Criteria) this;
        }

        public Criteria andZhifuNotBetween(String value1, String value2) {
            addCriterion("zhifu not between", value1, value2, "zhifu");
            return (Criteria) this;
        }

        public Criteria andLeijipinlunIsNull() {
            addCriterion("leijipinlun is null");
            return (Criteria) this;
        }

        public Criteria andLeijipinlunIsNotNull() {
            addCriterion("leijipinlun is not null");
            return (Criteria) this;
        }

        public Criteria andLeijipinlunEqualTo(String value) {
            addCriterion("leijipinlun =", value, "leijipinlun");
            return (Criteria) this;
        }

        public Criteria andLeijipinlunNotEqualTo(String value) {
            addCriterion("leijipinlun <>", value, "leijipinlun");
            return (Criteria) this;
        }

        public Criteria andLeijipinlunGreaterThan(String value) {
            addCriterion("leijipinlun >", value, "leijipinlun");
            return (Criteria) this;
        }

        public Criteria andLeijipinlunGreaterThanOrEqualTo(String value) {
            addCriterion("leijipinlun >=", value, "leijipinlun");
            return (Criteria) this;
        }

        public Criteria andLeijipinlunLessThan(String value) {
            addCriterion("leijipinlun <", value, "leijipinlun");
            return (Criteria) this;
        }

        public Criteria andLeijipinlunLessThanOrEqualTo(String value) {
            addCriterion("leijipinlun <=", value, "leijipinlun");
            return (Criteria) this;
        }

        public Criteria andLeijipinlunLike(String value) {
            addCriterion("leijipinlun like", value, "leijipinlun");
            return (Criteria) this;
        }

        public Criteria andLeijipinlunNotLike(String value) {
            addCriterion("leijipinlun not like", value, "leijipinlun");
            return (Criteria) this;
        }

        public Criteria andLeijipinlunIn(List<String> values) {
            addCriterion("leijipinlun in", values, "leijipinlun");
            return (Criteria) this;
        }

        public Criteria andLeijipinlunNotIn(List<String> values) {
            addCriterion("leijipinlun not in", values, "leijipinlun");
            return (Criteria) this;
        }

        public Criteria andLeijipinlunBetween(String value1, String value2) {
            addCriterion("leijipinlun between", value1, value2, "leijipinlun");
            return (Criteria) this;
        }

        public Criteria andLeijipinlunNotBetween(String value1, String value2) {
            addCriterion("leijipinlun not between", value1, value2, "leijipinlun");
            return (Criteria) this;
        }

        public Criteria andJiaoyichengong1IsNull() {
            addCriterion("jiaoyichengong1 is null");
            return (Criteria) this;
        }

        public Criteria andJiaoyichengong1IsNotNull() {
            addCriterion("jiaoyichengong1 is not null");
            return (Criteria) this;
        }

        public Criteria andJiaoyichengong1EqualTo(String value) {
            addCriterion("jiaoyichengong1 =", value, "jiaoyichengong1");
            return (Criteria) this;
        }

        public Criteria andJiaoyichengong1NotEqualTo(String value) {
            addCriterion("jiaoyichengong1 <>", value, "jiaoyichengong1");
            return (Criteria) this;
        }

        public Criteria andJiaoyichengong1GreaterThan(String value) {
            addCriterion("jiaoyichengong1 >", value, "jiaoyichengong1");
            return (Criteria) this;
        }

        public Criteria andJiaoyichengong1GreaterThanOrEqualTo(String value) {
            addCriterion("jiaoyichengong1 >=", value, "jiaoyichengong1");
            return (Criteria) this;
        }

        public Criteria andJiaoyichengong1LessThan(String value) {
            addCriterion("jiaoyichengong1 <", value, "jiaoyichengong1");
            return (Criteria) this;
        }

        public Criteria andJiaoyichengong1LessThanOrEqualTo(String value) {
            addCriterion("jiaoyichengong1 <=", value, "jiaoyichengong1");
            return (Criteria) this;
        }

        public Criteria andJiaoyichengong1Like(String value) {
            addCriterion("jiaoyichengong1 like", value, "jiaoyichengong1");
            return (Criteria) this;
        }

        public Criteria andJiaoyichengong1NotLike(String value) {
            addCriterion("jiaoyichengong1 not like", value, "jiaoyichengong1");
            return (Criteria) this;
        }

        public Criteria andJiaoyichengong1In(List<String> values) {
            addCriterion("jiaoyichengong1 in", values, "jiaoyichengong1");
            return (Criteria) this;
        }

        public Criteria andJiaoyichengong1NotIn(List<String> values) {
            addCriterion("jiaoyichengong1 not in", values, "jiaoyichengong1");
            return (Criteria) this;
        }

        public Criteria andJiaoyichengong1Between(String value1, String value2) {
            addCriterion("jiaoyichengong1 between", value1, value2, "jiaoyichengong1");
            return (Criteria) this;
        }

        public Criteria andJiaoyichengong1NotBetween(String value1, String value2) {
            addCriterion("jiaoyichengong1 not between", value1, value2, "jiaoyichengong1");
            return (Criteria) this;
        }

        public Criteria andJiaoyichengong2IsNull() {
            addCriterion("jiaoyichengong2 is null");
            return (Criteria) this;
        }

        public Criteria andJiaoyichengong2IsNotNull() {
            addCriterion("jiaoyichengong2 is not null");
            return (Criteria) this;
        }

        public Criteria andJiaoyichengong2EqualTo(String value) {
            addCriterion("jiaoyichengong2 =", value, "jiaoyichengong2");
            return (Criteria) this;
        }

        public Criteria andJiaoyichengong2NotEqualTo(String value) {
            addCriterion("jiaoyichengong2 <>", value, "jiaoyichengong2");
            return (Criteria) this;
        }

        public Criteria andJiaoyichengong2GreaterThan(String value) {
            addCriterion("jiaoyichengong2 >", value, "jiaoyichengong2");
            return (Criteria) this;
        }

        public Criteria andJiaoyichengong2GreaterThanOrEqualTo(String value) {
            addCriterion("jiaoyichengong2 >=", value, "jiaoyichengong2");
            return (Criteria) this;
        }

        public Criteria andJiaoyichengong2LessThan(String value) {
            addCriterion("jiaoyichengong2 <", value, "jiaoyichengong2");
            return (Criteria) this;
        }

        public Criteria andJiaoyichengong2LessThanOrEqualTo(String value) {
            addCriterion("jiaoyichengong2 <=", value, "jiaoyichengong2");
            return (Criteria) this;
        }

        public Criteria andJiaoyichengong2Like(String value) {
            addCriterion("jiaoyichengong2 like", value, "jiaoyichengong2");
            return (Criteria) this;
        }

        public Criteria andJiaoyichengong2NotLike(String value) {
            addCriterion("jiaoyichengong2 not like", value, "jiaoyichengong2");
            return (Criteria) this;
        }

        public Criteria andJiaoyichengong2In(List<String> values) {
            addCriterion("jiaoyichengong2 in", values, "jiaoyichengong2");
            return (Criteria) this;
        }

        public Criteria andJiaoyichengong2NotIn(List<String> values) {
            addCriterion("jiaoyichengong2 not in", values, "jiaoyichengong2");
            return (Criteria) this;
        }

        public Criteria andJiaoyichengong2Between(String value1, String value2) {
            addCriterion("jiaoyichengong2 between", value1, value2, "jiaoyichengong2");
            return (Criteria) this;
        }

        public Criteria andJiaoyichengong2NotBetween(String value1, String value2) {
            addCriterion("jiaoyichengong2 not between", value1, value2, "jiaoyichengong2");
            return (Criteria) this;
        }

        public Criteria andYoutuIsNull() {
            addCriterion("youtu is null");
            return (Criteria) this;
        }

        public Criteria andYoutuIsNotNull() {
            addCriterion("youtu is not null");
            return (Criteria) this;
        }

        public Criteria andYoutuEqualTo(String value) {
            addCriterion("youtu =", value, "youtu");
            return (Criteria) this;
        }

        public Criteria andYoutuNotEqualTo(String value) {
            addCriterion("youtu <>", value, "youtu");
            return (Criteria) this;
        }

        public Criteria andYoutuGreaterThan(String value) {
            addCriterion("youtu >", value, "youtu");
            return (Criteria) this;
        }

        public Criteria andYoutuGreaterThanOrEqualTo(String value) {
            addCriterion("youtu >=", value, "youtu");
            return (Criteria) this;
        }

        public Criteria andYoutuLessThan(String value) {
            addCriterion("youtu <", value, "youtu");
            return (Criteria) this;
        }

        public Criteria andYoutuLessThanOrEqualTo(String value) {
            addCriterion("youtu <=", value, "youtu");
            return (Criteria) this;
        }

        public Criteria andYoutuLike(String value) {
            addCriterion("youtu like", value, "youtu");
            return (Criteria) this;
        }

        public Criteria andYoutuNotLike(String value) {
            addCriterion("youtu not like", value, "youtu");
            return (Criteria) this;
        }

        public Criteria andYoutuIn(List<String> values) {
            addCriterion("youtu in", values, "youtu");
            return (Criteria) this;
        }

        public Criteria andYoutuNotIn(List<String> values) {
            addCriterion("youtu not in", values, "youtu");
            return (Criteria) this;
        }

        public Criteria andYoutuBetween(String value1, String value2) {
            addCriterion("youtu between", value1, value2, "youtu");
            return (Criteria) this;
        }

        public Criteria andYoutuNotBetween(String value1, String value2) {
            addCriterion("youtu not between", value1, value2, "youtu");
            return (Criteria) this;
        }

        public Criteria andZhuipinIsNull() {
            addCriterion("zhuipin is null");
            return (Criteria) this;
        }

        public Criteria andZhuipinIsNotNull() {
            addCriterion("zhuipin is not null");
            return (Criteria) this;
        }

        public Criteria andZhuipinEqualTo(String value) {
            addCriterion("zhuipin =", value, "zhuipin");
            return (Criteria) this;
        }

        public Criteria andZhuipinNotEqualTo(String value) {
            addCriterion("zhuipin <>", value, "zhuipin");
            return (Criteria) this;
        }

        public Criteria andZhuipinGreaterThan(String value) {
            addCriterion("zhuipin >", value, "zhuipin");
            return (Criteria) this;
        }

        public Criteria andZhuipinGreaterThanOrEqualTo(String value) {
            addCriterion("zhuipin >=", value, "zhuipin");
            return (Criteria) this;
        }

        public Criteria andZhuipinLessThan(String value) {
            addCriterion("zhuipin <", value, "zhuipin");
            return (Criteria) this;
        }

        public Criteria andZhuipinLessThanOrEqualTo(String value) {
            addCriterion("zhuipin <=", value, "zhuipin");
            return (Criteria) this;
        }

        public Criteria andZhuipinLike(String value) {
            addCriterion("zhuipin like", value, "zhuipin");
            return (Criteria) this;
        }

        public Criteria andZhuipinNotLike(String value) {
            addCriterion("zhuipin not like", value, "zhuipin");
            return (Criteria) this;
        }

        public Criteria andZhuipinIn(List<String> values) {
            addCriterion("zhuipin in", values, "zhuipin");
            return (Criteria) this;
        }

        public Criteria andZhuipinNotIn(List<String> values) {
            addCriterion("zhuipin not in", values, "zhuipin");
            return (Criteria) this;
        }

        public Criteria andZhuipinBetween(String value1, String value2) {
            addCriterion("zhuipin between", value1, value2, "zhuipin");
            return (Criteria) this;
        }

        public Criteria andZhuipinNotBetween(String value1, String value2) {
            addCriterion("zhuipin not between", value1, value2, "zhuipin");
            return (Criteria) this;
        }

        public Criteria andHaopinIsNull() {
            addCriterion("haopin is null");
            return (Criteria) this;
        }

        public Criteria andHaopinIsNotNull() {
            addCriterion("haopin is not null");
            return (Criteria) this;
        }

        public Criteria andHaopinEqualTo(String value) {
            addCriterion("haopin =", value, "haopin");
            return (Criteria) this;
        }

        public Criteria andHaopinNotEqualTo(String value) {
            addCriterion("haopin <>", value, "haopin");
            return (Criteria) this;
        }

        public Criteria andHaopinGreaterThan(String value) {
            addCriterion("haopin >", value, "haopin");
            return (Criteria) this;
        }

        public Criteria andHaopinGreaterThanOrEqualTo(String value) {
            addCriterion("haopin >=", value, "haopin");
            return (Criteria) this;
        }

        public Criteria andHaopinLessThan(String value) {
            addCriterion("haopin <", value, "haopin");
            return (Criteria) this;
        }

        public Criteria andHaopinLessThanOrEqualTo(String value) {
            addCriterion("haopin <=", value, "haopin");
            return (Criteria) this;
        }

        public Criteria andHaopinLike(String value) {
            addCriterion("haopin like", value, "haopin");
            return (Criteria) this;
        }

        public Criteria andHaopinNotLike(String value) {
            addCriterion("haopin not like", value, "haopin");
            return (Criteria) this;
        }

        public Criteria andHaopinIn(List<String> values) {
            addCriterion("haopin in", values, "haopin");
            return (Criteria) this;
        }

        public Criteria andHaopinNotIn(List<String> values) {
            addCriterion("haopin not in", values, "haopin");
            return (Criteria) this;
        }

        public Criteria andHaopinBetween(String value1, String value2) {
            addCriterion("haopin between", value1, value2, "haopin");
            return (Criteria) this;
        }

        public Criteria andHaopinNotBetween(String value1, String value2) {
            addCriterion("haopin not between", value1, value2, "haopin");
            return (Criteria) this;
        }

        public Criteria andZhonpinIsNull() {
            addCriterion("zhonpin is null");
            return (Criteria) this;
        }

        public Criteria andZhonpinIsNotNull() {
            addCriterion("zhonpin is not null");
            return (Criteria) this;
        }

        public Criteria andZhonpinEqualTo(String value) {
            addCriterion("zhonpin =", value, "zhonpin");
            return (Criteria) this;
        }

        public Criteria andZhonpinNotEqualTo(String value) {
            addCriterion("zhonpin <>", value, "zhonpin");
            return (Criteria) this;
        }

        public Criteria andZhonpinGreaterThan(String value) {
            addCriterion("zhonpin >", value, "zhonpin");
            return (Criteria) this;
        }

        public Criteria andZhonpinGreaterThanOrEqualTo(String value) {
            addCriterion("zhonpin >=", value, "zhonpin");
            return (Criteria) this;
        }

        public Criteria andZhonpinLessThan(String value) {
            addCriterion("zhonpin <", value, "zhonpin");
            return (Criteria) this;
        }

        public Criteria andZhonpinLessThanOrEqualTo(String value) {
            addCriterion("zhonpin <=", value, "zhonpin");
            return (Criteria) this;
        }

        public Criteria andZhonpinLike(String value) {
            addCriterion("zhonpin like", value, "zhonpin");
            return (Criteria) this;
        }

        public Criteria andZhonpinNotLike(String value) {
            addCriterion("zhonpin not like", value, "zhonpin");
            return (Criteria) this;
        }

        public Criteria andZhonpinIn(List<String> values) {
            addCriterion("zhonpin in", values, "zhonpin");
            return (Criteria) this;
        }

        public Criteria andZhonpinNotIn(List<String> values) {
            addCriterion("zhonpin not in", values, "zhonpin");
            return (Criteria) this;
        }

        public Criteria andZhonpinBetween(String value1, String value2) {
            addCriterion("zhonpin between", value1, value2, "zhonpin");
            return (Criteria) this;
        }

        public Criteria andZhonpinNotBetween(String value1, String value2) {
            addCriterion("zhonpin not between", value1, value2, "zhonpin");
            return (Criteria) this;
        }

        public Criteria andChapinIsNull() {
            addCriterion("chapin is null");
            return (Criteria) this;
        }

        public Criteria andChapinIsNotNull() {
            addCriterion("chapin is not null");
            return (Criteria) this;
        }

        public Criteria andChapinEqualTo(String value) {
            addCriterion("chapin =", value, "chapin");
            return (Criteria) this;
        }

        public Criteria andChapinNotEqualTo(String value) {
            addCriterion("chapin <>", value, "chapin");
            return (Criteria) this;
        }

        public Criteria andChapinGreaterThan(String value) {
            addCriterion("chapin >", value, "chapin");
            return (Criteria) this;
        }

        public Criteria andChapinGreaterThanOrEqualTo(String value) {
            addCriterion("chapin >=", value, "chapin");
            return (Criteria) this;
        }

        public Criteria andChapinLessThan(String value) {
            addCriterion("chapin <", value, "chapin");
            return (Criteria) this;
        }

        public Criteria andChapinLessThanOrEqualTo(String value) {
            addCriterion("chapin <=", value, "chapin");
            return (Criteria) this;
        }

        public Criteria andChapinLike(String value) {
            addCriterion("chapin like", value, "chapin");
            return (Criteria) this;
        }

        public Criteria andChapinNotLike(String value) {
            addCriterion("chapin not like", value, "chapin");
            return (Criteria) this;
        }

        public Criteria andChapinIn(List<String> values) {
            addCriterion("chapin in", values, "chapin");
            return (Criteria) this;
        }

        public Criteria andChapinNotIn(List<String> values) {
            addCriterion("chapin not in", values, "chapin");
            return (Criteria) this;
        }

        public Criteria andChapinBetween(String value1, String value2) {
            addCriterion("chapin between", value1, value2, "chapin");
            return (Criteria) this;
        }

        public Criteria andChapinNotBetween(String value1, String value2) {
            addCriterion("chapin not between", value1, value2, "chapin");
            return (Criteria) this;
        }

        public Criteria andYinxiangIsNull() {
            addCriterion("yinxiang is null");
            return (Criteria) this;
        }

        public Criteria andYinxiangIsNotNull() {
            addCriterion("yinxiang is not null");
            return (Criteria) this;
        }

        public Criteria andYinxiangEqualTo(String value) {
            addCriterion("yinxiang =", value, "yinxiang");
            return (Criteria) this;
        }

        public Criteria andYinxiangNotEqualTo(String value) {
            addCriterion("yinxiang <>", value, "yinxiang");
            return (Criteria) this;
        }

        public Criteria andYinxiangGreaterThan(String value) {
            addCriterion("yinxiang >", value, "yinxiang");
            return (Criteria) this;
        }

        public Criteria andYinxiangGreaterThanOrEqualTo(String value) {
            addCriterion("yinxiang >=", value, "yinxiang");
            return (Criteria) this;
        }

        public Criteria andYinxiangLessThan(String value) {
            addCriterion("yinxiang <", value, "yinxiang");
            return (Criteria) this;
        }

        public Criteria andYinxiangLessThanOrEqualTo(String value) {
            addCriterion("yinxiang <=", value, "yinxiang");
            return (Criteria) this;
        }

        public Criteria andYinxiangLike(String value) {
            addCriterion("yinxiang like", value, "yinxiang");
            return (Criteria) this;
        }

        public Criteria andYinxiangNotLike(String value) {
            addCriterion("yinxiang not like", value, "yinxiang");
            return (Criteria) this;
        }

        public Criteria andYinxiangIn(List<String> values) {
            addCriterion("yinxiang in", values, "yinxiang");
            return (Criteria) this;
        }

        public Criteria andYinxiangNotIn(List<String> values) {
            addCriterion("yinxiang not in", values, "yinxiang");
            return (Criteria) this;
        }

        public Criteria andYinxiangBetween(String value1, String value2) {
            addCriterion("yinxiang between", value1, value2, "yinxiang");
            return (Criteria) this;
        }

        public Criteria andYinxiangNotBetween(String value1, String value2) {
            addCriterion("yinxiang not between", value1, value2, "yinxiang");
            return (Criteria) this;
        }

        public Criteria andShoucangIsNull() {
            addCriterion("shoucang is null");
            return (Criteria) this;
        }

        public Criteria andShoucangIsNotNull() {
            addCriterion("shoucang is not null");
            return (Criteria) this;
        }

        public Criteria andShoucangEqualTo(String value) {
            addCriterion("shoucang =", value, "shoucang");
            return (Criteria) this;
        }

        public Criteria andShoucangNotEqualTo(String value) {
            addCriterion("shoucang <>", value, "shoucang");
            return (Criteria) this;
        }

        public Criteria andShoucangGreaterThan(String value) {
            addCriterion("shoucang >", value, "shoucang");
            return (Criteria) this;
        }

        public Criteria andShoucangGreaterThanOrEqualTo(String value) {
            addCriterion("shoucang >=", value, "shoucang");
            return (Criteria) this;
        }

        public Criteria andShoucangLessThan(String value) {
            addCriterion("shoucang <", value, "shoucang");
            return (Criteria) this;
        }

        public Criteria andShoucangLessThanOrEqualTo(String value) {
            addCriterion("shoucang <=", value, "shoucang");
            return (Criteria) this;
        }

        public Criteria andShoucangLike(String value) {
            addCriterion("shoucang like", value, "shoucang");
            return (Criteria) this;
        }

        public Criteria andShoucangNotLike(String value) {
            addCriterion("shoucang not like", value, "shoucang");
            return (Criteria) this;
        }

        public Criteria andShoucangIn(List<String> values) {
            addCriterion("shoucang in", values, "shoucang");
            return (Criteria) this;
        }

        public Criteria andShoucangNotIn(List<String> values) {
            addCriterion("shoucang not in", values, "shoucang");
            return (Criteria) this;
        }

        public Criteria andShoucangBetween(String value1, String value2) {
            addCriterion("shoucang between", value1, value2, "shoucang");
            return (Criteria) this;
        }

        public Criteria andShoucangNotBetween(String value1, String value2) {
            addCriterion("shoucang not between", value1, value2, "shoucang");
            return (Criteria) this;
        }

        public Criteria andPicnumsIsNull() {
            addCriterion("picnums is null");
            return (Criteria) this;
        }

        public Criteria andPicnumsIsNotNull() {
            addCriterion("picnums is not null");
            return (Criteria) this;
        }

        public Criteria andPicnumsEqualTo(String value) {
            addCriterion("picnums =", value, "picnums");
            return (Criteria) this;
        }

        public Criteria andPicnumsNotEqualTo(String value) {
            addCriterion("picnums <>", value, "picnums");
            return (Criteria) this;
        }

        public Criteria andPicnumsGreaterThan(String value) {
            addCriterion("picnums >", value, "picnums");
            return (Criteria) this;
        }

        public Criteria andPicnumsGreaterThanOrEqualTo(String value) {
            addCriterion("picnums >=", value, "picnums");
            return (Criteria) this;
        }

        public Criteria andPicnumsLessThan(String value) {
            addCriterion("picnums <", value, "picnums");
            return (Criteria) this;
        }

        public Criteria andPicnumsLessThanOrEqualTo(String value) {
            addCriterion("picnums <=", value, "picnums");
            return (Criteria) this;
        }

        public Criteria andPicnumsLike(String value) {
            addCriterion("picnums like", value, "picnums");
            return (Criteria) this;
        }

        public Criteria andPicnumsNotLike(String value) {
            addCriterion("picnums not like", value, "picnums");
            return (Criteria) this;
        }

        public Criteria andPicnumsIn(List<String> values) {
            addCriterion("picnums in", values, "picnums");
            return (Criteria) this;
        }

        public Criteria andPicnumsNotIn(List<String> values) {
            addCriterion("picnums not in", values, "picnums");
            return (Criteria) this;
        }

        public Criteria andPicnumsBetween(String value1, String value2) {
            addCriterion("picnums between", value1, value2, "picnums");
            return (Criteria) this;
        }

        public Criteria andPicnumsNotBetween(String value1, String value2) {
            addCriterion("picnums not between", value1, value2, "picnums");
            return (Criteria) this;
        }

        public Criteria andIsvideoIsNull() {
            addCriterion("isvideo is null");
            return (Criteria) this;
        }

        public Criteria andIsvideoIsNotNull() {
            addCriterion("isvideo is not null");
            return (Criteria) this;
        }

        public Criteria andIsvideoEqualTo(String value) {
            addCriterion("isvideo =", value, "isvideo");
            return (Criteria) this;
        }

        public Criteria andIsvideoNotEqualTo(String value) {
            addCriterion("isvideo <>", value, "isvideo");
            return (Criteria) this;
        }

        public Criteria andIsvideoGreaterThan(String value) {
            addCriterion("isvideo >", value, "isvideo");
            return (Criteria) this;
        }

        public Criteria andIsvideoGreaterThanOrEqualTo(String value) {
            addCriterion("isvideo >=", value, "isvideo");
            return (Criteria) this;
        }

        public Criteria andIsvideoLessThan(String value) {
            addCriterion("isvideo <", value, "isvideo");
            return (Criteria) this;
        }

        public Criteria andIsvideoLessThanOrEqualTo(String value) {
            addCriterion("isvideo <=", value, "isvideo");
            return (Criteria) this;
        }

        public Criteria andIsvideoLike(String value) {
            addCriterion("isvideo like", value, "isvideo");
            return (Criteria) this;
        }

        public Criteria andIsvideoNotLike(String value) {
            addCriterion("isvideo not like", value, "isvideo");
            return (Criteria) this;
        }

        public Criteria andIsvideoIn(List<String> values) {
            addCriterion("isvideo in", values, "isvideo");
            return (Criteria) this;
        }

        public Criteria andIsvideoNotIn(List<String> values) {
            addCriterion("isvideo not in", values, "isvideo");
            return (Criteria) this;
        }

        public Criteria andIsvideoBetween(String value1, String value2) {
            addCriterion("isvideo between", value1, value2, "isvideo");
            return (Criteria) this;
        }

        public Criteria andIsvideoNotBetween(String value1, String value2) {
            addCriterion("isvideo not between", value1, value2, "isvideo");
            return (Criteria) this;
        }
    }

    public static class Criteria extends GeneratedCriteria {

        protected Criteria() {
            super();
        }
    }

    public static class Criterion {
        private String condition;

        private Object value;

        private Object secondValue;

        private boolean noValue;

        private boolean singleValue;

        private boolean betweenValue;

        private boolean listValue;

        private String typeHandler;

        public String getCondition() {
            return condition;
        }

        public Object getValue() {
            return value;
        }

        public Object getSecondValue() {
            return secondValue;
        }

        public boolean isNoValue() {
            return noValue;
        }

        public boolean isSingleValue() {
            return singleValue;
        }

        public boolean isBetweenValue() {
            return betweenValue;
        }

        public boolean isListValue() {
            return listValue;
        }

        public String getTypeHandler() {
            return typeHandler;
        }

        protected Criterion(String condition) {
            super();
            this.condition = condition;
            this.typeHandler = null;
            this.noValue = true;
        }

        protected Criterion(String condition, Object value, String typeHandler) {
            super();
            this.condition = condition;
            this.value = value;
            this.typeHandler = typeHandler;
            if (value instanceof List<?>) {
                this.listValue = true;
            } else {
                this.singleValue = true;
            }
        }

        protected Criterion(String condition, Object value) {
            this(condition, value, null);
        }

        protected Criterion(String condition, Object value, Object secondValue, String typeHandler) {
            super();
            this.condition = condition;
            this.value = value;
            this.secondValue = secondValue;
            this.typeHandler = typeHandler;
            this.betweenValue = true;
        }

        protected Criterion(String condition, Object value, Object secondValue) {
            this(condition, value, secondValue, null);
        }
    }
}