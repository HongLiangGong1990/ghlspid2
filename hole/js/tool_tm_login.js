

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


function get_random_time(){
	var time = Math.floor((Math.random()*2000)+700);
	return time;
}

function getTime(text){
	var myDate = new Date();
	console.log(text,myDate.toLocaleTimeString());
}

$(function(){
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
		    setTimeout(resolve,200);
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
            	a=true;
            } else {
            	a=false;
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

	async function product_list(path) {
		var root = document.querySelector(path);
		if(root == null){return};
		var list = root.childNodes;
		if(list == null){return;}

		for(i=0;i<10;i++){
			if(list[i].tagName !="DIV"){continue;}
			console.log("click: ",i);
			// console.log(item);
			list[i].getElementsByTagName("a")[0].click();
			// await sleepPage();
			await loadPage();
			console.log("next...");
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

	function fill_in(account_node, pass_node, account, pass){
		document.querySelector(account_node).value = account;
		document.querySelector(pass_node).value = pass;

	}
	var search_input = "#mq";
	var search_button = "#mallSearch > form > fieldset > div > button";
	var keywords = "耳机";

	var switch_account_node = "#J_Quick2Static";
	var account_node = "#TPL_username_1";
	var account = "tooth4";
	var pass_node = "#TPL_password_1";
	var pass = "thinkpad470";
	var login_node = "#J_SubmitStatic";
	async function as(){
		await loadPage();
		await click(switch_account_node);
		fill_in(account_node, pass_node, account, pass);
		await click(login_node);
		console.log("done");
	} 
	
	as();
})