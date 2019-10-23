
function sentToServer(key,data) {
	console.log("sentToServer...");
	// var text = document.querySelector("html").outerHTML;
	// console.log(text);
	// var html = "gsgdsgg";
	$.ajax({
		type:"post",
		url:"http://localhost:8888/receiveimg",
		contentType: "application/json; charset=utf-8",
		dataType: 'json',
		data:JSON.stringify({
			key:key,
			urls:data
		})
	});	
}




function get_random_time(t){
	var time = Math.floor((Math.random()*1000*t)+1000);
	return time;
}

function getTime(text){
	var myDate = new Date();
	console.log(text,myDate.toLocaleTimeString());
}

$(function(){
	async function loadPage(t) {
		return new Promise(function(resolve, reject){
			console.log("loadPage...");
		    setTimeout(resolve,1000*t);
		})
	}

	function parsePage(){
		console.log("parsePage...");
		sentToServer();
	}

	async function waitok() {
		return new Promise(function(resolve, reject){
			console.log('等待解除。。。')
			setTimeout(resolve,2000);
		})
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
	async function click_comments_youtu(node,t){
		node.click();
		console.log("click youtu")
		return new Promise(function(resolve, reject){
			setTimeout(resolve,1000*t);
		})
	}
	async function click_comments_next(){
		document.querySelector("#reviews > div > div > div > div > div > div.tb-revbd > div > ul > li.pg-next").click();
		return new Promise(function(resolve, reject){
			setTimeout(resolve,get_random_time(4));
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
	node_map.product=[
			"#J_UlThumb"
		];
	node_map.kanleyoukan=[
		"#J_Pine > div > div.tuijian-bd.tb-clearfix > ul",
		"#J_Pinus_Enterprise_Module > div > div > ul"
	];
	node_map.detail=[
		"#J_DivItemDesc"
	];
	node_map.comment=[
		"#reviews > div > div > div > div > div > div.tb-revbd > ul"
	];


	function checkErr() {
		var iframe=document.querySelector("body > div.sufei-dialog");
		if(iframe!=null) {
			return 1
		}
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
		var a = new Array();
		a[0] = id;
		return a;
	}

	function change(url){
		if(url==null ||url=='') return null;
		if(url.indexOf("imgextra")<0 && url.indexOf("uploaded")<0) return null;
		url = url.replace('_.webp','');
		if(url.indexOf('40x40')>=0) {
			return url.replace('40x40','400x400');
		}
		if(url.indexOf('50x50')>=0) {
			return url.replace('50x50','400x400');
		}
		if(url.indexOf('80x80')>=0) {
			return url.replace('80x80','400x400');
		}
		return url;
	}

	function getImg(node){
		console.log(node)
		var node0 = document.querySelector(node[0]);
		if(node0==null) node==node[1]
		var imgs = document.querySelector(node).getElementsByTagName("img");
		var imgarr = new Array();
		var preurl='';
		var url = '';
		var j=0;
		for(i=0;i<imgs.length;i++){
			// console.log(imgs[i].src)
			if(imgs[i].getAttribute('data-ks-lazyload') !=null){
				preurl = imgs[i].getAttribute('data-ks-lazyload');
			}else{
				preurl = imgs[i].src;
			}
			url = change(preurl);
			if(url!=null){
				imgarr[j++] = url;
			}
		}
		return imgarr;
	}

	var success = function(value){
		console.log(value);
		return value;
	}
	async function getComm(node){
		console.log(node);
		await click_comments(2)

		var youtu = document.querySelector("#reviews-t-val3");
		if(youtu==null) {
			console.log("没有下一页")
			return;
		}
		await click_comments_youtu(youtu,1);
		var isend=false;
		var a=new Array();
		while(true){
			a = a.concat(getImg(node));
			var ne= document.querySelector("#reviews > div > div > div > div > div > div.tb-revbd > div > ul > li.pg-next")
			if(ne ==null){
				isend=true;
			} else {
				isend = ne.classList.contains("pg-disabled");
			}
			if(isend){
				break;
			}
			console.log(isend);
			await click_comments_next();
		}
		// console.log(a);
		return a;
	}
	async function parsePage(){
		console.log("parsePage...");
		// while(true){
		// 	// await waitok()
		// 	console.log("插件循环中。。。")
		// }
		var result_map = {};
		var result_key = new Array();
		var result_arr = new Array();
		var index = 0;
		var index2 = 0;
		// result_arr[index++]=checkStatus();
		// result_key[index2++]='status';

		// result_arr[index++]=getDate();
		// result_key[index2++]='riqi'

		if(checkStatus()=='1'){//如果1，表示没下架
			console.log('没有下架')
			console.log("getid")
			result_arr[index++] = getId();
			result_key[index2++] = "id";
			console.log("getproduct")
			result_arr[index++] = getImg(node_map.product);
			result_key[index2++] = "product";
			console.log("getkan")
			result_arr[index++] = getImg(node_map.kanleyoukan);
			result_key[index2++] = "kanleyoukan";
			console.log("getdetail")
			result_arr[index++] = getImg(node_map.detail);
			result_key[index2++] = "detail";

			await getComm(node_map.comment).then(value =>{
				// console.log(value);
				result_arr[index++] =  value;
				result_key[index2++] = "comment";
				console.log(result_arr);
				console.log(result_key);
				sentToServer(result_key,result_arr);
			});
		}
	}

	function dopre(){
		var qiye = document.querySelector("#header-content > div.shop-summary.J_TShopSummary");
		if(qiye !=null){
			qiye.className += " hover";
		}
	}

	async function as(){

		await loadPage(4);
		// search(search_input, search_button, keywords);
		// getTime("await click pre");
		// await product_list("#J_ItemList");
		// dopre();
		// await loadPage(2);

		await parsePage();
		closePage();
		console.log("done");
	} 
	
	as();

})