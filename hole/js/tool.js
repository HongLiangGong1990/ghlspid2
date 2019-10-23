function readXPath(element) {
    if (element.id != ""){//判断id属性，如果这个元素有id，则显 示//*[@id="xPath"]  形式内容
        return '//*[@id=\"'+element.id+'\"]';
    }

    //if (element.getAttribute("class") != null){ //判断class属性，如果这个元素有class，则显 示//*[@class="xPath"]  形式内容
    //    return '//*[@class=\"'+element.getAttribute("class")+'\"]';
    //}
    //因为Xpath属性不止id和class，所以还可以更具class形式添加属性

    //这里需要需要主要字符串转译问题


    if (element == document.body){//递归到body处，结束递归
        return '/html/'+element.tagName.toLowerCase();
    }

    var ix= 0,//在nodelist中的位置，且每次点击初始化
          siblings= element.parentNode.childNodes;//同级的子元素

    for (var i= 0,l=siblings.length; i<l; i++) {
        var sibling = siblings[i];
        if (sibling == element){//如果这个元素是siblings数组中的元素，则执行递归操作
            return arguments.callee(element.parentNode)+'/'+element.tagName.toLowerCase()+((ix+1)==1?'':'['+(ix+1)+']');//ix+1是因为xpath是从1开始计数的，element.tagName+((ix+1)==1?'':'['+(ix+1)+']')三元运算符，如果是第一个则不显示，从2开始显示
        }else if(sibling.nodeType == 1 && sibling.tagName == element.tagName){//如果不符合，判断是否是element元素，并且是否是相同元素，如果是相同的就开始累加
            ix++;
        }
    }
};

/**
 * 作者：小小坤
 * 联系：java-script@qq.com
 * 日期：2017-11-11
 * 版本：1.0.0.4
 *     -----------使用说明----------
 * 1、把所有函数【包含异步执行的函数】按照顺序依次 使用lk.push存入
 * 2、带有参数的函数，一定要注意{最一个参数如果是callback}会被认为是 异步执行函数
 * 3、异步执行的函数，需要把最一个参数设置为callback。并在函数执行完毕执行callback();函数保证按照顺序执行
 * 
 * */
! function() {
    var list = [], //存储函数的列表
        isFun = Object.prototype.toString; //用于验证是否是函数
    /**
     * 添加到列表中
     * @fn {Function} 函数体
     * */
    function push(fn) {
    	console.log(arguments[1]);
        isFun.call(fn) === "[object Function]" && list.push(fn);
        console.log(list);
    };
    /**
     * 开始执行列表中的所有函数，
     * 按照先进先出原则
     * 
     * */
    function star() {
        if(list.length) {
            var fn = list.shift(),//截取第一个函数
            arry=getfunarg(fn),//获取这个函数的参数列表

            _length=arry.length;//参数列表的长度
             console.log("arry",arry);
            if(_length && arry[_length-1] === 'callback') {
                if(_length===1){
                    fn(star);
                }else{
                    arry.pop();//删除最后一个参数
                    arry.push(star);//把回调函数存入数组
                    fn.apply(this,arry);
                    console.log("arguments",this.arguments);
                }
            } else {
                fn.apply(this,this.arguments);
                star(); 
            }
        }
    }
    /**
     * 查找函数参数名
     * @fn {Function } 要查找的函数
     * @return []返回参数数组
     * */
    function getfunarg(fn) {
        var f = /^[\s\(]*function[^(]*\(\s*([^)]*?)\s*\)/.exec(fn.toString());
        console.log(f);
        return f && f[1] ? f[1].split(/,\s*/) : [];
    }
    //挂在到Windows上。
    window.lk = {
        push: push,
        start: star
    }
}();


/*$(function() {
	var i = 0;
	for(;i<30;i++){
		var txt = $("<p></p>").text(i);
		$("body").append(txt);
	}
	$("html,body").animate({scrollTop:$(document).xpath("/html/body/p[15]").offset().top},800);
	$("body").append($("<a id='dd'>sgsdg</a>"));
	$(document).xpath("/html/body/p[15]").trigger("click");
})*/

// $(function(){
// 	var xpath = '', o;
//     $('*').click(function (e) {
// 		console.log("click enter");
// 		console.log("e.button");
// 		console.log(e.button);
// 		console.log("e.witch");
// 		console.log(e.which);
// 		e.stopPropagation();//停止冒泡
// 		if(typeof(e.button) == "undefined") {
// 			o = this;
// 			console.log("o:");
// 			console.log(o);
// 			//console.log("readXPath")
// 			//console.log(readXPath(o));
// 			//console.log("click");
// 			console.log("o.click");
// 			o.click();

// 		}
        
//     });
// 	//*[@id="mainBox"]/main/div[2]/a
// 	//*[@id="mainBox"]/main/div[2]/a
// 	$(document).bind("contextmenu",function(e){
// 		return false;
// 	});
// 	// $(document).on("mousedown",function(e){
// 	// 	if(e.which==2 || e.which==3) e.preventDefault();
// 	// });
	
	
// })




// $(function(){
// 	$(document).mousedown(function (e) {
		
// 		console.log(e.button);
// 		console.log(e.which)
// 		console.log("mouse down");
// 		// var list = {};
// 		// var xpath = readXPath(e.target);
// 		// console.log($(document).xpath(xpath));
// 		// $(document).xpath(xpath).css("background", "grey");
// 		// console.log(xpath);
// 		// var html = document.getElementsByTagName('html')[0].outerHTML;
// 		// $.ajax({
// 		// 	type:"POST",
// 		// 	url:"https://ghl.nat300.top:5252/wechat/",
// 		// 	data:{
// 		// 		xpath:xpath,
// 		// 		html:html
// 		// 	}
// 		// });

// 	}).mouseup(function(e){
// 		console.log("mouse up");
// 	}).click(function(e){
// 		console.log("click");
// 		console.log(e);
// 	})
	
// })



//$(function(){

	// $("#detail > div.tab-main.large > ul > li:nth-child(5)").click();
// 	console.log("dianji");
// 	var timer = null;
// 	clearTimeout(timer);
// 	timer = setTimeout(cli(), 10000);
// 	//$(document).xpath("//*[@id='mainBox']/main/div[2]/a").click()
// 	//$("#detail > div.tab-main.large > ul > li:nth-child(5)").click();
// 	console.log("dianji-jieshu");
//})
/*$(document).mouseenter(function (e) {
	$(document).xpath("/html/body/p[2]").css("background-color", "yellow");
})*/


function sleep(delay) {
  var start = (new Date()).getTime();
  while ((new Date()).getTime() - start < delay) {
    continue;
  }
}


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
	console.log("sentToServerJD");
	var html = document.querySelector(list).outerHTML;
	// var html = "gsgdsgg";
	$.ajax({
		type:"POST",
		url:"http://localhost:8080/receive/jd",
		contentType: "application/json; charset=utf-8",
		dataType: 'json',
		data:JSON.stringify({
			text:html,
			tag:tag
		})
	});	
}

function sentToServerAZ(list,tag) {
	console.log("sentToServerAZ");
	var html = document.querySelector(list).outerHTML;
	// var html = "gsgdsgg";
	$.ajax({
		type:"POST",
		url:"http://localhost:8080/receive/amazon",
		contentType: "application/json; charset=utf-8",
		dataType: 'json',
		data:JSON.stringify({
			text:html,
			tag:tag
		})
	});	
}


function click(path) {
	console.log("click");
	console.log("path: "+path);
	if(typeof path == "string"){
		var selector = document.querySelector(path);
		selector.click();
	} else {
		path.click();
	}
	
	
}

function click_next(path){
	var selector = document.querySelector(path);
	var next = selector.lastChild;
	next.click();
}

function get_impress(path) {
	console.log("impress_nodes:"+impress_nodes);
	return document.querySelector(path).childNodes;
}
// function fun2() {
// 	console.log("func2");
// }

// function fun1(){
// 	console.log("fun1");
// 	var t = setTimeout(fun2,5000);
// 	setTimeout(function(){
// 		console.log("clearTimeout");
// 		clearTimeout(t);
// 	},6000);
// }
// #reviews > div > div > div > div > div > div.tb-revbd > ul
// #reviews > div > div > div > div > div > div.tb-revhd > div.kg-rate-wd-filter-bar > ul > li:nth-child(4) > label
// #reviews > div > div > div > div > div > div.tb-revhd > div.kg-rate-wd-filter-bar > ul > li.is-current > label
function schedule_tm(){
	//列表根节点
	var list = "#J_Reviews > div > div.rate-grid";
	//列表元素class,不是页面上的path,后台节点解析用
	var list_tag = "tm-rate-content";
	//评价印象-关键词分类,多个

	var close = "#sufei-dialog-close";

	//评价性质-好评中评差评,天猫没有中差评
	// var opinion = "#reviews > div > div > div > div > div > div.tb-revhd > div.kg-rate-wd-filter-bar > ul > li:nth-child(4) > label";
	
	//评价节点
	var comment = "#J_TabBar > li:nth-child(2)";
	//下一页
	var next = "#J_Reviews > div > div.rate-page > div";
	//*[@id="J_Reviews"]/div/div[7]/div/a[8]
	//*[@id="J_Reviews"]/div/div[7]/div/a[8]
	////*[@id="J_Reviews"]/div/div[7]/div/a[5]
	var time = 2000;
	setTimeout("click('"+comment+"')", time);
	var impress_nodes = get_impress();
	
	//setTimeout("click('"+good+"')", 3000);
	// impress_nodes_arr.forEach((item,index)=>{
 //    	//执行代码
 //    	setTimeout("click('"+item+"')", time+200);
    	
	// 	for(i=0;i<1;i++) {
	// 		setTimeout("sentToServerTM('"+list+"','"+item+"',"+list_tag+"')", time+400);
	// 		setTimeout("click_next('"+next+"')", time+600);
	// 		time = time + 5000;
	// 	}
	// })
	
	
	// setTimeout("sentToServer('"+list+"')", 3500);
	// setTimeout("click('"+next+"')", 4000);
	// setTimeout("sentToServer('"+list+"')", 4500);
	//
	// console.log("pre commons");
	// setTimeout(close, 1000);
	// setTimeout(commons,2000);
	// console.log("post commons");
	// // sleep(100000);
	// //setTimeout(good,1000);
	// setTimeout(good,2000);
	//setTimeout(next,3000);

	//setTimeout(sentToServer, 6000);

}

function schedule_jd(){
	//列表根节点
	var list = "#J_Reviews > div > div.rate-grid";
	//列表元素class
	var list_tag = "tm-rate-fulltxt";
	//评价印象-关键词分类
	var impress_node = "";
	var close = "#sufei-dialog-close";
	//评价节点
	var comment = "#J_TabBar > li:nth-child(2) > a";
	//评价性质-好评中评差评
	var opinion = "#reviews > div > div > div > div > div > div.tb-revhd > div.kg-rate-wd-filter-bar > ul > li:nth-child(4) > label";
	//下一页
	var next = "#J_Reviews > div > div.rate-page > div > a:nth-child(6)";

	setTimeout("click('"+comment+"')", 2000);

	var time = 3500;
	for(i=0;i<3;i++) {
		setTimeout("sentToServer('"+list+"','"+list_tag+"')", time);
		setTimeout("click('"+next+"')", time+200);
		time = time + 500;
	}
}

// var p = new Promise(function(resolve, reject){
//     document.querySelector("#login-info > a.sn-login").click();
//     resolve(325);
// 
// })

// jQuery.fn.simulateKeyPress = function(character) { 
// jQuery(this).trigger({ type: 'keypress', which: character.charCodeAt(0) }); 
// };

// function func(){
// 	console.log("fun")
// 	document.querySelector("#J_Quick2Static").click();
// 	document.querySelector("#TPL_username_1").focus();
// 	var e = jQuery.Event("keydown");
// 	e.keyCode = 65;
// 	$("#TPL_username_1").simulateKeyPress('a');

// 	console.log("click")
// }
// function click(path){
// 	    return new Promise(function(resolve, reject){
// 	        var targetNode = document.querySelector(path);
// 	        function callback(mutationsList, observer) {
// 	        	console.log("click");
// 	            resolve();
// 	        };

// 	        var observer = new MutationObserver(callback);

// 	        observer.observe(targetNode, { attributes: true, characterData: true, childList: true, subtree: true });
// 	    });
// 	}

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

	function sentServer(){
	    console.log("sentServer");
	}

	async function loadPage() {
		return new Promise(function(resolve, reject){
			console.log("loadPage...");
		    setTimeout(resolve,1000);
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
	function search(input, button, keywords){
		var input = document.querySelector(input);
		input.value = keywords;
		document.querySelector(button).click();
	}



	function get(path){
		getTime("get...");
		var a=false;
		$.ajax({  
          type : "post",  
          url : "http://localhost:8080/"+path,  
          data : "",  
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
		var node = document.querySelector("#J_DetailMeta > div > div.tb-property > div > div.tb-detail-hd > h1 > a");
		if(node==null){return;}
		get("subpage");
	}

	async function waitfor(){
		var a = true;
		while(a){
			a = get("closed");
			console.log("wait...");
			await loadPage();
		}
	}

//async 方法中才可以使用await,async如果有return 实际就相当于是普通方法return了一个 new Promise()
//当这个 async 函数返回一个值时，Promise 的 resolve 方法会负责传递这个值

// async function demo(){
// 	return "result";
// }

// //上面等同于
// async function demo(){
// 	return Promise.resolve("result");
// }

// async function demo(){
// 	return "result";
// }
// //如果想获取第一个的返回值“result”
// demo().then(re=>{
// 	console.log(re);
// })

	async function product_list(path) {
	

		var root = document.querySelector(path);
		if(root == null){return};
		var list = root.childNodes;
		if(list == null){return;}
		// var item = document.querySelector("#J_ItemList > div:nth-child(1) > div > div.productImg-wrap > a");
		// getTime("item.click");
		// item.click();
		// sleepPage();
		// // waitfor();
		// getTime("waitfor post...")
		// console.log("closed");

		for(i=0;i<10;i++){
			if(list[i].tagName !="DIV"){continue;}
			console.log("click: ",i);
			// console.log(item);
			list[i].getElementsByTagName("a")[0].click();
			// await sleepPage();
			await waitfor();
			console.log("closed");
		}
		
	}

	function closePage(){
		var tar = document.querySelector("#J_DetailMeta > div > div.tb-property > div > div.tb-detail-hd > h1 > a");
		console.log("tar",tar);
		if(tar != null){
			window.location.href = "about:blank";                    //关键是这句话
	    	window.close();
	    	getTime("closed..");
		}
	}
	// var p = new Promise(function(resolve, reject){
	// 	    setTimeout(resolve,2000);
	// 	})

	var search_input = "#mq";
	var search_button = "#mallSearch > form > fieldset > div > button";
	var keywords = "手机";

	async function as(){

		await loadPage();
		// search(search_input, search_button, keywords);
		getTime("await click pre");

		// await click("#J_ItemList > div:nth-child(1) > div > div.productImg-wrap > a");
		// await sleepPage();
		// getTime("await click post");
		// for(i=0;i<3;i++){
		// 	await next("#J_Reviews > div > div.rate-page > div");
		// 	sentServer();
		// }
		// document.querySelector(#J_ItemList)
		// #J_ItemList > div:nth-child(1)
		// #J_ItemList > div:nth-child(24)
		// #J_ItemList > div:nth-child(60)
		await product_list("#J_ItemList");
		parsePage();
		closePage();
		console.log("done");
	} 
	
	as();

	//chrome.extension.getBackgroundPage();
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