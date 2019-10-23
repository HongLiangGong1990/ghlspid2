

function sentpage() {
	var num = document.querySelector("#J_relative > div.sort-row > div > div.pager > ul > li:nth-child(2) > span").innerText
	$.ajax({
		type:"POST",
		url:"http://localhost:8080/page",
		contentType: "application/json; charset=utf-8",
		dataType: 'json',
		data:JSON.stringify({
			num:num
		})
	});
}
function sentIdtoServer(idarr) {
	console.log('sentIdtoServer')
	var num = document.querySelector("#J_relative > div.sort-row > div > div.pager > ul > li:nth-child(2) > span").innerText
	$.ajax({
		type:"POST",
		url:"http://localhost:8888/receive/id",
		contentType: "application/json; charset=utf-8",
		dataType: 'json',
		data:JSON.stringify({
			idarr:idarr,
			num:num
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

	async function clickNext(path){

		return new Promise(function(resolve, reject){
			document.querySelector(path).click();
			setTimeout(resolve,500);
		})
	}

	async function loadPage(t) {
		return new Promise(function(resolve, reject){
			console.log("loadPage...");
			setTimeout(resolve,1000*t);
		})
	}

	function checkErr() {
		var iframe=document.querySelector("#J_sufei");
		if(iframe!=null) {
			console.log("出现验证框。。。");
			document.querySelector("body > div.sufei-tb-dialog-mask.sufei-tb-overlay-mask").setAttribute('style','width:0px');
		}
	}

	function parseItem(item){
		var iteminfo=new Array();

		//id
		var atag = item.getElementsByTagName("a")
		var urlstr=atag[0].getAttribute("href");
		console.log('urlstr',urlstr)
		var id=urlstr.substr(urlstr.indexOf('id')+2,15).replace(/[^0-9]+/g, ' ').split(" ")[1];
		console.log('id',id);
		return id;
		//price
		//num
		//name
		//address
		//shopname
		//isgold
		//isnew

	}

	async function product_list(path,next) {
		for(i=0;i<80;i++){
			var root = document.querySelector(path);
			if(root == null){return};
			var list = root.childNodes;
			console.log(list[1]);
			if(list == null){return;}
			checkErr();//如果出现要滑动验证，则停止
			//上传当前页面，出错后从当前页面重新开始
			//将本页所有商品id上传
			var itemlist=new Array();
			for(j=0;j<60;j++){
				var child = root.children[j];
				var id=parseItem(child);
				itemlist[j]=id;
			}
			console.log('itemlist',itemlist);
			sentIdtoServer(itemlist);

			console.log("next...")
			await clickNext(next);
			await loadPage(20);
		}
	}

	var list_root = "#listsrp-itemlist > div > div > div:nth-child(1)";
	var next_node = "#listsrp-pager > div > div > div > ul li:last-child a";
	async function as(){
		await loadPage(3);
		getTime("await click pre");
		await product_list(list_root, next_node);
		console.log("done");
	}
	as();
})