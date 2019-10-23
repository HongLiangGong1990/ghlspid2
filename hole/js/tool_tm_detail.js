
function sentToServerTM(list,impress,tag) {
	console.log("sentToServer");
	var html = document.querySelector(list).outerHTML;
	var imp = document.querySelector(impress).text;
	// var html = "gsgdsgg";
	$.ajax({
		type:"POST",
		url:"http://localhost:8080/receive/tmall",
		contentType: "application/json; charset=utf-8",
		dataType: 'json',
		data:JSON.stringify({
			text:html,
			impressTag:imp,
			tagClass:tag
		})
	});	
}

function sentToServerTB(list,impress,tag) {
	console.log("sentToServerTB");
	var html = document.querySelector(list).outerHTML;
	
	// var html = "gsgdsgg";
	$.ajax({
		type:"POST",
		url:"http://localhost:8080/receive/taobao",
		contentType: "application/json; charset=utf-8",
		dataType: 'json',
		data:JSON.stringify({
			text:html,

			tag:tag
		})
	});	
}

function sentToServerJD(list,tag) {
	// console.log("sentToServerJD");
	// var html = document.querySelector(list).outerHTML;
	// var html = "gsgdsgg";
	$.ajax({
		type:"POST",
		url:"http://localhost:8080/receive/jd",
		contentType: "application/json; charset=utf-8",
		dataType: 'json',
		data:JSON.stringify({
			
		})
	});	
}

function sentToServer(key,data) {
	console.log("sentToServer...");
	// var text = document.querySelector("html").outerHTML;
	// console.log(text);
	// var html = "gsgdsgg";
	$.ajax({
		type:"post",
		url:"http://localhost:8888/receive/taobao",
		contentType: "application/json; charset=utf-8",
		dataType: 'json',
		data:JSON.stringify({
			key:key,
			data:data
		})
	});	
}




function get_random_time(){
	var time = Math.floor((Math.random()*2000)+700);
	return time;
}

function getTime(text){
	var myDate = new Date();
	console.log(text,myDate.toLocaleTimeString());
}

$(function(){
	// sleep(10000);
	async function click(path){
		if(document.querySelector(path)==null){return;}
	    return new Promise(function(resolve, reject){
	        document.querySelector(path).click();
	        getTime("438 click...");
	        setTimeout(resolve,get_random_time());
	    });
	}

	async function next(path){
		return new Promise(function(resolve, reject){
			click_next(path);
			setTimeout(resolve,500);
		})
	}



	async function loadPage(t) {
		return new Promise(function(resolve, reject){
			console.log("loadPage...");
		    setTimeout(resolve,1000*t);
		})
	}

	async function sleepPage() {
		var t = document.querySelector("#J_DetailMeta > div > div.tb-property > div > div.tb-detail-hd > h1 > a");
		if(t!=null){return;}
		return new Promise(function(resolve, reject){
			getTime("sleepPage...");
			setTimeout(resolve,20000);
		})
	}

	function get(path,data){
		getTime("get...");
		var a=false;
		$.ajax({  
          type : "post",  
          url : "http://localhost:8080/"+path,  
          data : JSON.stringify({
          	text:data
          }),
          contentType: "application/json; charset=utf-8",
		  dataType: 'json',
          async : false,  
          success : function(data){
          	console.log(data);
            if(data==1){
            	a=false;
            } else {
            	a=true;
            }
          }  
      	});
      	return a;
	}

	function parsePage(){
		console.log("parsePage...");
		sentToServer();
	}

	async function waitfor(){
		var a = true;
		while(a){
			a = get("closed");
			console.log("wait...");
			await loadPage();
		}
	}

	async function loadPage(t) {
		return new Promise(function(resolve, reject){
			console.log("loadPage...");
		    setTimeout(resolve,1000*t);
		})
	}

	async function click_comments(t){
		document.querySelector("#J_TabBar > li:nth-child(2) > a").click();
		return new Promise(function(resolve, reject){
		    setTimeout(resolve,1000*t);
		})
	}

	function closePage(){
		window.location.href = "about:blank";                    //关键是这句话
    	window.close();
    	getTime("closed..");
	}
	
	var huakuai = "#sufei-dialog-content";
	var node_map = {};
	//企业
	node_map.name=[
			"#header-content > div.shop-summary.J_TShopSummary > div.summary-popup.J_TSummaryPopup > div.pop-shop-info > p > span.shop-name-title",
			"#J_ShopInfo > div > div.tb-shop-info-hd > div.tb-shop-name > dl > dd > strong > a"
		];
	node_map.xinyu=[
		"#header-content > div.shop-summary.J_TShopSummary > div.summary-popup.J_TSummaryPopup > div.more-info > div.shop-more-info > p:nth-child(1) > a",
		"#J_ShopInfo > div > div.tb-shop-info-hd > div.tb-shop-rank"
	];
	node_map.zhanguiid=[
		"#header-content > div.shop-summary.J_TShopSummary.hover > div.summary-popup.J_TSummaryPopup > div.more-info > div.shop-more-info > p:nth-child(2)",
		"#J_ShopInfo > div > div.tb-shop-info-hd > div.tb-shop-seller > dl > dd > a"
	];
	node_map.zizhi=[
		"#header-content > div.shop-summary.J_TShopSummary > div.summary-popup.J_TSummaryPopup > div.more-info > div.shop-more-info > p:nth-child(4) > a.xiaobao-v.J_TGoldlog > span",
		"#J_ShopInfo > div > div.tb-shop-info-hd > div.tb-shop-icon > dl > dd > a.tb-seller-bail > span.tb-seller-bail-text"
	];
	node_map.miaoshu=[
		"#header-content > div.shop-summary.J_TShopSummary > div.summary-popup.J_TSummaryPopup > div.more-info > div.shop-dynamic-score > ul > li:nth-child(1) > em",
		"#J_ShopInfo > div > div.tb-shop-info-bd > div > dl:nth-child(1) > dd > a"
	];
	// node_map.miaoshurate="#header-content > div.shop-summary.J_TShopSummary > div.summary-popup.J_TSummaryPopup > div.more-info > div.shop-dynamic-score > ul > li:nth-child(1) > a > span > em";
	node_map.fuwu=[
		"#header-content > div.shop-summary.J_TShopSummary > div.summary-popup.J_TSummaryPopup > div.more-info > div.shop-dynamic-score > ul > li:nth-child(2) > em",
		"#J_ShopInfo > div > div.tb-shop-info-bd > div > dl:nth-child(2) > dd > a"
	];
	// node_map.fuwurate="#header-content > div.shop-summary.J_TShopSummary > div.summary-popup.J_TSummaryPopup > div.more-info > div.shop-dynamic-score > ul > li:nth-child(2) > a > span > em";
	node_map.wuliu=[
		"#header-content > div.shop-summary.J_TShopSummary > div.summary-popup.J_TSummaryPopup > div.more-info > div.shop-dynamic-score > ul > li:nth-child(3) > em",
		"#J_ShopInfo > div > div.tb-shop-info-bd > div > dl:nth-child(3) > dd > a"
	];
	// node_map.wuliurate="#header-content > div.shop-summary.J_TShopSummary > div.summary-popup.J_TSummaryPopup > div.more-info > div.shop-dynamic-score > ul > li:nth-child(3) > a > span > em";
	node_map.kanleyoukan1=[
		"#J_Pinus_Enterprise_Module > div > div.tuijian-bd.clearfix > ul > li:nth-child(1) > div.tuijian-extra > p > span > b.price",
		"#J_Pine > div > div.tuijian-bd.tb-clearfix > ul > li:nth-child(1) > div > p > span > b.price"
	];
	node_map.kanleyoukan2=[
		"#J_Pinus_Enterprise_Module > div > div.tuijian-bd.clearfix > ul > li:nth-child(2) > div.tuijian-extra > p > span > b.price",
		"#J_Pine > div > div.tuijian-bd.tb-clearfix > ul > li:nth-child(2) > div > p > span > b.price"
	];
	node_map.kanleyoukan3=[
		"#J_Pinus_Enterprise_Module > div > div.tuijian-bd.clearfix > ul > li:nth-child(3) > div.tuijian-extra > p > span > b.price",
		"#J_Pine > div > div.tuijian-bd.tb-clearfix > ul > li:nth-child(3) > div > p > span > b.price"
	];
	node_map.kanleyoukan4=["#J_Pine > div > div.tuijian-bd.tb-clearfix > ul > li.tuijian-item.last > div > p > span > b.price"];

	node_map.price=["#J_StrPrice > em.tb-rmb-num","#J_PromoPriceNum"];
	node_map.youhuiquan=["#J_OtherDiscount > div"];
	node_map.kuaidi=["#J_WlServiceTitle"];
	node_map.chima=["#J_isku > div > dl.J_Prop.J_TMySizeProp.tb-prop.tb-clear.J_Prop_measurement > dd > ul"];
	node_map.kucun=["#J_SpanStock"];
	node_map.zhifu=["#J_tbExtra > dl:nth-child(2) > dd"];
	node_map.gongyi=['#J_PublicWelfare'];
	node_map.shoucang=["#J_Social > ul > li > a > em"];
	node_map.picnums=["#J_DivItemDesc"];
	node_map.isvideo=["#J_VideoThumb"];
	node_map.leijipinlun=["#J_RateCounter"];
	node_map.zishu=["#attributes > ul"]
	node_map.jiaoyichengong=["#J_Counter > div > div.tb-sell-counter > a"];

	node_map.youtu=["#reviews > div > div > div > div > div > div.tb-revhd > div.kg-rate-wd-filter-bar > ul > li[data-kg-rate-filter-val$='3'] > label > span > span"];
	node_map.zhuipin=["#reviews > div > div > div > div > div > div.tb-revhd > div.kg-rate-wd-filter-bar > ul > li[data-kg-rate-filter-val$='2'] > label > span > span"];
	node_map.haopin=["#reviews > div > div > div > div > div > div.tb-revhd > div.kg-rate-wd-filter-bar > ul > li[data-kg-rate-filter-val$='1'] > label > span > span"];
	node_map.zhonpin=["#reviews > div > div > div > div > div > div.tb-revhd > div.kg-rate-wd-filter-bar > ul > li[data-kg-rate-filter-val$='0'] > label > span > span"];
	node_map.chapin=["#reviews > div > div > div > div > div > div.tb-revhd > div.kg-rate-wd-filter-bar > ul > li[data-kg-rate-filter-val$='-1'] > label > span > span"];
	node_map.yinxiang=["#reviews > div > div > div > div > div > div.tb-revhd > div.tb-r-box > div > ul"];

	function getText(key, path){
		if(key=="youhuiquan"){
			console.log("dd");
		}
		var node = document.querySelector(path[0]);//企业
		var node1 = document.querySelector(path[1]);//个体
		if(key=="isvideo") {
			return node!=null?"1":"0";
		}
		if(key=='gongyi'){
			if(node!=null){
				return '1'
			}else{
				return '0'
			}
		}
		if(key=='zishu'){
			return node.innerText.length;
		}
		if(node==null && node1==null) return "0";
		if(key=="xinyu"){
			var size = 0;
			if(node !=null && node != undefined){
				size = node.children.length;
				var ranklogo = node.className.split(" ")[1];
			} else if(node1 != null && node1 != undefined) {
				var a=node1.getElementsByTagName("a");
				var b=a[0];
				size = node1.getElementsByTagName("a")[0].children.length;
				var ranklogo = node1.className.split(" ")[1];
			}
			console.log("size",size);
			var rank = "";
			switch (ranklogo){
				case "tb-rank-crown":
					rank=size+"金冠";
					break;
				case "tb-rank-cap":
					rank=size+"蓝冠";
					break;
				case "tb-rank-red":
					rank=size+"红心";
					break;
				case "tb-rank-blue":
					rank=size+"蓝钻";
					break;
			}
			return rank;
		}

		if(key=="jiaoyichengong"){
			var title = node.title;
			//正则提取数字
			var a=title.substring(a.indexOf('已售出')+3,a.indexOf('件，'))
			var b=title.substring(a.indexOf('交易成功')+4,a.length-1)
			var arr=new Array();
			arr[0]=a;
			arr[1]=b;
			return arr;
		}

		if(key=="picnums"){
			var len = node.getElementsByTagName("img").length;
			return len+'';
		}
		if(key=="kuaidi"){
			return node.innerText.indexOf('免')>=0||node.innerText.indexOf('包')>=0?"1":"0";
		}

		if(key=="zhanguiid") {
			if(node !=null && node != undefined){
				var id=node.innerText;
				return id.substr(10);
			} else if(node1 != null && node1 != undefined) {
				var id=node1.innerText;
				return id;
			}
		}
		if(key=="price"){
			if(node1!=null && node1.innerText.trim()!=''){
				return node1.innerText.trim();
			}else if(node!=null){
				return node.innerText.trim();
			}
		}

		//其他节点
		if(node !=null && node != undefined){
			var arr  = ['yinxiang','zizhi','zhifu','youhuiquan','fuwu','miaoshu','wuliu','name','chima','kanleyoukan1','kanleyoukan2','kanleyoukan3','kanleyoukan4'];
			if(arr.indexOf(key)>=0){
				var t1 = node.innerText.trim().replace(/\ +/g, "/").replace(/[\r\n]/g, "/").replace(/,/g,"/").replace(/，/g,"/");
				return t1!=''?t1:'0';
			}
			var t2 = node.innerText.trim().replace(/[^0-9]+/g, '').replace(/\ +/g, "/").replace(/[\r\n]/g, "/").replace(/,/g,"/").replace(/，/g,"/");
			return t2!=''?t2:'0';
		} else if(node1 != null && node1 != undefined) {
			var arr  = ['yinxiang','zizhi','zhifu','youhuiquan','fuwu','miaoshu','wuliu','name','chima','kanleyoukan1','kanleyoukan2','kanleyoukan3','kanleyoukan4'];
			if(arr.indexOf(key)>=0){
				var t1 = node1.innerText.trim().replace(/\ +/g, "/").replace(/[\r\n]/g, "/").replace(/,/g,"/").replace(/，/g,"/");
				return t1!=''?t1:'0';
			}
			var t2 = node1.innerText.trim().replace(/[^0-9]+/g, '').replace(/\ +/g, "/").replace(/[\r\n]/g, "/").replace(/,/g,"/").replace(/，/g,"/");
			return t2!=''?t2:'0';
		}


	}

	function checkErr() {
		var iframe=document.querySelector("body > div.sufei-dialog");
		if(iframe!=null) {
			console.log("出现验证框。。。");
			document.querySelector("body > div.sufei-dialog.sufei-dialog-kissy").setAttribute('style','display:none');
		}
	}

	function checkQiye(path){
		var node = document.querySelector(path[0]);//企业
		var node1 = document.querySelector(path[1]);//个体
		if(node!=null && node1==null) return "1";
		if(node==null && node1!=null) return "0";
	}

	function checkStatus(){
		var te=document.querySelector('#error-notice > div.error-notice-text > div.error-notice-hd')
		if(te!=null){
			console.log("商品下架。。。")
			return '0';
		} else{
			return '1';
		}
	}

	function getDate(){
		var myd = new Date();
		return myd.toLocaleDateString();
	}

	function getId(){
		var urlstr = window.location.href;
		var id= urlstr.substr(urlstr.indexOf('id=')+3,17).replace(/[^0-9]+/g, '');
		console.log('id:',id);
		return id;
	}
	async function parsePage(){
		console.log("parsePage...");
		checkErr()
		var result_map = {};
		var result_key = new Array();
		var result_arr = new Array();
		var index = 0;
		var index2 = 0;
		result_arr[index++]=getId();
		result_key[index2++]='id';

		result_arr[index++]=checkStatus();
		result_key[index2++]='status';

		result_arr[index++]=getDate();
		result_key[index2++]='riqi'

		if(checkStatus()=='1'){//如果1，表示没下架
			console.log('没有下架')
			for(var key in node_map){
				console.log("key: ",key);
				try{
					if(key=="name"){
						result_arr[index++]=checkQiye(node_map[key]);
						result_key[index2++]="qiye";
					}
					if(key=="jiaoyichengong"){
						await click_comments(3);
					}
					var re = getText(key, node_map[key]);
					if(typeof(re)=='object'){
						var i=1;
						for(var n in re){
							result_arr[index++] = re[n];
							result_key[index2++] = key;
						}
					}else{
						result_arr[index++] = re;
						result_key[index2++] = key;
					}
				} catch(e){
					console.log("出错的node是: ",key);
					console.log(e);
					break;
				}
			}
		}

		sentToServer(result_key,result_arr);
		// console.log(result_map);
		console.log(result_key);
		console.log(result_arr);

		
		// sentToServer();
	}

	function dopre(){
		var qiye = document.querySelector("#header-content > div.shop-summary.J_TShopSummary");
		if(qiye !=null){
			qiye.className += " hover";
		}
	}

	async function as(){

		await loadPage(5);
		// search(search_input, search_button, keywords);
		getTime("await click pre");
		// await product_list("#J_ItemList");
		dopre();
		await loadPage(2);
		await parsePage();
		closePage();
		console.log("done");
	} 
	
	as();

	
	// async function start() {
	// 	setTimeout(() =>{}, 2000);
	// 	return "helll";
	// }

	// async function as(){
	// 	await start();
	// 	//await click();
	// 	console.log("done");
	// }
	// as();
})