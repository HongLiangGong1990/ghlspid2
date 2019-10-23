import * as puppeteer from 'puppeteer'
let axios = require('axios');
let qs = require('qs')

async function get_debug_url() {
    let rsp = await axios.get('http://127.0.0.1:9222/json/version');
    return rsp.data.webSocketDebuggerUrl;
}
async function getIdsFromServer(i:number){
    let rsp = await axios.get('http://localhost:8888/get?index='+i);
    return rsp.data;
}

// async function checkStatus(page:any){
//     try {
//         let te=await page.waitForSelector('#error-notice > div.error-notice-text > div.error-notice-hd',500)
//         return '0';
//     } catch (e) {
//         console.log("没找到")
//         return '1';
//     }
//
// }
//
// // async function checkSlid(){
// //
// // }
//
// async function checkErr(page:any) {
//     try {
//         let iframe=await page.waitForSelector("body > div.sufei-dialog",500);
//         console.log("出现验证框。。。");
//         await page.waitForSelector("body > div.sufei-dialog.sufei-dialog-kissy",500).setAttribute('style','display:none');
//     } catch (e) {
//         return
//     }
//
// }
// function getId(page:any){
//     let urlstr = window.location.href;
//     let id= urlstr.substr(urlstr.indexOf('id=')+3,17).replace(/[^0-9]+/g, '');
//     console.log('id:',id);
//     let a = new Array();
//     a[0] = id;
//     return a;
// }
//
// function get_random_time(t){
//     let time = Math.floor((Math.random()*3000*t)+1000);
//     return time;
// }
//
// let node_map:{[index:string]: any} = {};
// //企业
// node_map.product=[
//     "#J_UlThumb"
// ];
// node_map.kanleyoukan=[
//     "#J_Pine > div > div.tuijian-bd.tb-clearfix > ul",
//     "#J_Pinus_Enterprise_Module > div > div > ul"
// ];
// node_map.detail=[
//     "#J_DivItemDesc"
// ];
// node_map.comment=[
//     "#reviews > div > div > div > div > div > div.tb-revbd > ul"
// ];
// function change(url:string){
//     if(url===null ||url==='') {return undefined;}
//     if(url.indexOf("imgextra")<0 && url.indexOf("uploaded")<0) {return undefined;}
//     url = url.replace('_.webp','');
//     if(url.indexOf('40x40')>=0) {
//         return url.replace('40x40','400x400');
//     }
//     if(url.indexOf('50x50')>=0) {
//         return url.replace('50x50','400x400');
//     }
//     if(url.indexOf('80x80')>=0) {
//         return url.replace('80x80','400x400');
//     }
//     return url;
// }
//
//
// async function getImg(page:any,node:string){
//     console.log(node[0])
//     let node0 = await page.$(node[0]);
//     console.log('node0')
//     console.log(node0)
//     // try{
//     //     node0 = await page.$(node[0]);
//     // }catch (e) {
//     //     console.log('没找到node[0]')
//     //     return
//     // }
//
//     if(node0===null) {
//         node=node[1]
//     }
//     console.log(node)
//     let imgs = await page.evaluate(() => document.querySelector(node).getElementsByTagName("img"));
//     console.log('imgs')
//     console.log(imgs)
//     let imgarr = new Array();
//     let preurl='';
//     let url = '';
//     let j=0;
//     for(let im of imgs){
//         // console.log(imgs[i].src)
//         if(im.getAttribute('data-ks-lazyload') !==null){
//             preurl = im.getAttribute('data-ks-lazyload');
//         }else{
//             preurl = im.src;
//         }
//         url = change(preurl);
//         if(url!==undefined){
//             imgarr[j++] = url;
//         }
//     }
//     return imgarr;
// }
//
// async function click_comments(page:any){
//     let commnode = "#J_TabBar > li:nth-child(2) > a";
//
//     let comm =await page.$(commnode);
//     let loc =await comm.boundingBox();
//     await page.mouse.move(loc.x+20,loc.y+15)
//     await page.mouse.down()
//     await page.mouse.up()
//     console.log("click_comments")
// }
//
// async function click_comments_youtu(page:any){
//     let youtu =await page.$(() => document.querySelector("#reviews-t-val3"))
//     let loc =await youtu.boundingBox();
//     await page.mouse.move(loc.x+20,loc.y+15)
//     await page.mouse.down()
//     await page.mouse.up()
//     console.log("click youtu")
// }
// async function click_comments_next(page:any){
//     let nextnode ="#reviews > div > div > div > div > div > div.tb-revbd > div > ul > li.pg-next";
//     let next =await page.evaluate(nextnode => document.querySelector(nextnode), nextnode)
//     let loc =await next.boundingBox();
//     await page.mouse.move(loc.x+20,loc.y+15)
//     await page.mouse.down()
//     await page.mouse.up()
//     console.log("click_comments_next")
// }
//
// async function getComm(page:any,node:any){
//     console.log(node);
//     await click_comments(page)
//
//     let youtu = await page.$("#reviews-t-val3");
//     if(youtu===null) {
//         console.log("没有图")
//         return;
//     }
//     await click_comments_youtu(youtu);
//     let isend=false;
//     let a=new Array();
//     while(!isend){
//         a = a.concat(getImg(page,node));
//         isend = document.querySelector("#reviews > div > div > div > div > div > div.tb-revbd > div > ul > li.pg-next").classList.contains("pg-disabled");
//         console.log(isend);
//         await click_comments_next(page);
//     }
//     // console.log(a);
//     return a;
// }
// async function sentToServer(key,data) {
//     console.log("sentToServer...");
//     let res = await axios.post(
//         "http://localhost:8888/receiveimg",
//         qs.stringify({
//                          key:key,
//                          urls:data
//         }))
// }
// async function parsePage(id:any){
//     console.log("parsePage...");
//     // await checkErr(page)3
//     let result_map = {};
//     let result_key = new Array();
//     let result_arr = new Array();
//     let index = 0;
//     let index2 = 0;
//
//     let status = await checkStatus(page);
//     if(status==='1'){//如果1，表示没下架
//         console.log('没有下架')
//         console.log("getid")
//         result_arr[index++] = id;
//         result_key[index2++] = "id";
//         console.log("getproduct")
//         result_arr[index++] = await getImg(page,node_map.product);
//         result_key[index2++] = "product";
//         console.log(result_arr)
//         // console.log("getkan")
//         // result_arr[index++] = await getImg(page,node_map.kanleyoukan);
//         // result_key[index2++] = "kanleyoukan";
//         // console.log("getdetail")
//         // result_arr[index++] = await getImg(page,node_map.detail);
//         // result_key[index2++] = "detail";
//         //
//         // getComm(page,node_map.comment).then(value =>{
//         //     // console.log(value);
//         //     result_arr[index++] =  value;
//         //     result_key[index2++] = "comment";
//         //     console.log(result_arr);
//         //     console.log(result_key);
//         //     sentToServer(result_key,result_arr);
//         // });
//
//
//     }
// }
async function sentToServer(key:any,data:any) {
    console.log("sentToServer...");
    let res = await axios.post(
        "http://localhost:8888/receiveimg",
        qs.stringify({
                         key:key,
                         urls:data
        }))
}

async function getT(a){
    console.log('getT...')
    alert(a)
    return 'aaa'
}
async function main(){
    let ws = await get_debug_url();
    console.log(ws);
    const browser = await puppeteer.connect({
                                                browserWSEndpoint:ws,
                                                defaultViewport: {
                                                    width: 1366,
                                                    height: 768
                                                }
                                            });

    let list = await getIdsFromServer(33);
    for (let id of list) {
        console.log(id);
        const page = await browser.newPage();
        page.setDefaultTimeout(500)
        await Promise.all ( [
                                page.setJavaScriptEnabled ( true ) ,	//  允许执行 js 脚本
                            ] ) ;
        await page.addScriptTag({url: 'https://code.jquery.com/jquery-3.2.1.min.js'})
        await page.goto('https://item.taobao.com/item.htm?id='+id,{timeout:5000});
        console.log('evaluate7...')
         await page.evaluate(`(async() => {
            
function sentToServer(key,data) {
\tconsole.log("sentToServer...");
\t// var text = document.querySelector("html").outerHTML;
\t// console.log(text);
\t// var html = "gsgdsgg";
\t$.ajax({
\t\ttype:"post",
\t\turl:"http://localhost:8888/receiveimg",
\t\tcontentType: "application/json; charset=utf-8",
\t\tdataType: 'json',
\t\tdata:JSON.stringify({
\t\t\tkey:key,
\t\t\turls:data
\t\t})
\t});\t
}




function get_random_time(t){
\tvar time = Math.floor((Math.random()*1000*t)+1000);
\treturn time;
}

function getTime(text){
\tvar myDate = new Date();
\tconsole.log(text,myDate.toLocaleTimeString());
}

$(function(){
\tasync function loadPage(t) {
\t\treturn new Promise(function(resolve, reject){
\t\t\tconsole.log("loadPage...");
\t\t    setTimeout(resolve,1000*t);
\t\t})
\t}

\tfunction parsePage(){
\t\tconsole.log("parsePage...");
\t\tsentToServer();
\t}

\tasync function waitok() {
\t\treturn new Promise(function(resolve, reject){
\t\t\tconsole.log('等待解除。。。')
\t\t\tsetTimeout(resolve,2000);
\t\t})
\t}
\tasync function loadPage(t) {
\t\treturn new Promise(function(resolve, reject){
\t\t\tconsole.log("loadPage...");
\t\t    setTimeout(resolve,1000*t);
\t\t})
\t}

\tasync function click_comments(t){
\t\tdocument.querySelector("#J_TabBar > li:nth-child(2) > a").click();
\t\treturn new Promise(function(resolve, reject){
\t\t    setTimeout(resolve,1000*t);
\t\t})
\t}
\tasync function click_comments_youtu(node,t){
\t\tnode.click();
\t\tconsole.log("click youtu")
\t\treturn new Promise(function(resolve, reject){
\t\t\tsetTimeout(resolve,1000*t);
\t\t})
\t}
\tasync function click_comments_next(){
\t\tdocument.querySelector("#reviews > div > div > div > div > div > div.tb-revbd > div > ul > li.pg-next").click();
\t\treturn new Promise(function(resolve, reject){
\t\t\tsetTimeout(resolve,get_random_time(4));
\t\t})
\t}

\tfunction closePage(){
\t\twindow.location.href = "about:blank";                    //关键是这句话
    \twindow.close();
    \tgetTime("closed..");
\t}
\t
\tvar huakuai = "#sufei-dialog-content";
\tvar node_map = {};
\t//企业
\tnode_map.product=[
\t\t\t"#J_UlThumb"
\t\t];
\tnode_map.kanleyoukan=[
\t\t"#J_Pine > div > div.tuijian-bd.tb-clearfix > ul",
\t\t"#J_Pinus_Enterprise_Module > div > div > ul"
\t];
\tnode_map.detail=[
\t\t"#J_DivItemDesc"
\t];
\tnode_map.comment=[
\t\t"#reviews > div > div > div > div > div > div.tb-revbd > ul"
\t];


\tfunction checkErr() {
\t\tvar iframe=document.querySelector("body > div.sufei-dialog");
\t\tif(iframe!=null) {
\t\t\treturn 1
\t\t}
\t}
\tfunction checkStatus(){
\t\tvar te=document.querySelector('#error-notice > div.error-notice-text > div.error-notice-hd')
\t\tif(te!=null){
\t\t\tconsole.log("商品下架。。。")
\t\t\treturn '0';
\t\t} else{
\t\t\treturn '1';
\t\t}
\t}


\tfunction getDate(){
\t\tvar myd = new Date();
\t\treturn myd.toLocaleDateString();
\t}

\tfunction getId(){
\t\tvar urlstr = window.location.href;
\t\tvar id= urlstr.substr(urlstr.indexOf('id=')+3,17).replace(/[^0-9]+/g, '');
\t\tconsole.log('id:',id);
\t\tvar a = new Array();
\t\ta[0] = id;
\t\treturn a;
\t}

\tfunction change(url){
\t\tif(url==null ||url=='') return null;
\t\tif(url.indexOf("imgextra")<0 && url.indexOf("uploaded")<0) return null;
\t\turl = url.replace('_.webp','');
\t\tif(url.indexOf('40x40')>=0) {
\t\t\treturn url.replace('40x40','400x400');
\t\t}
\t\tif(url.indexOf('50x50')>=0) {
\t\t\treturn url.replace('50x50','400x400');
\t\t}
\t\tif(url.indexOf('80x80')>=0) {
\t\t\treturn url.replace('80x80','400x400');
\t\t}
\t\treturn url;
\t}

\tfunction getImg(node){
\t\tconsole.log(node)
\t\tvar node0 = document.querySelector(node[0]);
\t\tif(node0==null) node==node[1]
\t\tvar imgs = document.querySelector(node).getElementsByTagName("img");
\t\tvar imgarr = new Array();
\t\tvar preurl='';
\t\tvar url = '';
\t\tvar j=0;
\t\tfor(i=0;i<imgs.length;i++){
\t\t\t// console.log(imgs[i].src)
\t\t\tif(imgs[i].getAttribute('data-ks-lazyload') !=null){
\t\t\t\tpreurl = imgs[i].getAttribute('data-ks-lazyload');
\t\t\t}else{
\t\t\t\tpreurl = imgs[i].src;
\t\t\t}
\t\t\turl = change(preurl);
\t\t\tif(url!=null){
\t\t\t\timgarr[j++] = url;
\t\t\t}
\t\t}
\t\treturn imgarr;
\t}

\tvar success = function(value){
\t\tconsole.log(value);
\t\treturn value;
\t}
\tasync function getComm(node){
\t\tconsole.log(node);
\t\tawait click_comments(2)

\t\tvar youtu = document.querySelector("#reviews-t-val3");
\t\tif(youtu==null) {
\t\t\tconsole.log("没有下一页")
\t\t\treturn;
\t\t}
\t\tawait click_comments_youtu(youtu,1);
\t\tvar isend=false;
\t\tvar a=new Array();
\t\twhile(true){
\t\t\ta = a.concat(getImg(node));
\t\t\tvar ne= document.querySelector("#reviews > div > div > div > div > div > div.tb-revbd > div > ul > li.pg-next")
\t\t\tif(ne ==null){
\t\t\t\tisend=true;
\t\t\t} else {
\t\t\t\tisend = ne.classList.contains("pg-disabled");
\t\t\t}
\t\t\tif(isend){
\t\t\t\tbreak;
\t\t\t}
\t\t\tconsole.log(isend);
\t\t\tawait click_comments_next();
\t\t}
\t\t// console.log(a);
\t\treturn a;
\t}
\tasync function parsePage(){
\t\tconsole.log("parsePage...");
\t\t// while(true){
\t\t// \t// await waitok()
\t\t// \tconsole.log("插件循环中。。。")
\t\t// }
\t\tvar result_map = {};
\t\tvar result_key = new Array();
\t\tvar result_arr = new Array();
\t\tvar index = 0;
\t\tvar index2 = 0;
\t\t// result_arr[index++]=checkStatus();
\t\t// result_key[index2++]='status';

\t\t// result_arr[index++]=getDate();
\t\t// result_key[index2++]='riqi'

\t\tif(checkStatus()=='1'){//如果1，表示没下架
\t\t\tconsole.log('没有下架')
\t\t\tconsole.log("getid")
\t\t\tresult_arr[index++] = getId();
\t\t\tresult_key[index2++] = "id";
\t\t\tconsole.log("getproduct")
\t\t\tresult_arr[index++] = getImg(node_map.product);
\t\t\tresult_key[index2++] = "product";
\t\t\tconsole.log("getkan")
\t\t\tresult_arr[index++] = getImg(node_map.kanleyoukan);
\t\t\tresult_key[index2++] = "kanleyoukan";
\t\t\tconsole.log("getdetail")
\t\t\tresult_arr[index++] = getImg(node_map.detail);
\t\t\tresult_key[index2++] = "detail";

\t\t\tawait getComm(node_map.comment).then(value =>{
\t\t\t\t// console.log(value);
\t\t\t\tresult_arr[index++] =  value;
\t\t\t\tresult_key[index2++] = "comment";
\t\t\t\tconsole.log(result_arr);
\t\t\t\tconsole.log(result_key);
\t\t\t\tsentToServer(result_key,result_arr);
\t\t\t});
\t\t}
\t}

\tfunction dopre(){
\t\tvar qiye = document.querySelector("#header-content > div.shop-summary.J_TShopSummary");
\t\tif(qiye !=null){
\t\t\tqiye.className += " hover";
\t\t}
\t}

\tasync function as(){

\t\tawait loadPage(4);
\t\t// search(search_input, search_button, keywords);
\t\t// getTime("await click pre");
\t\t// await product_list("#J_ItemList");
\t\t// dopre();
\t\t// await loadPage(2);

\t\tawait parsePage();
\t\tclosePage();
\t\tconsole.log("done");
\t} 
\t
\tas();

})
         })()`)
             // `(async() => {})()`
        // console.log('show ',show)
        await page.waitFor(50000)
        // while(true){
        //     console.log("循环中。。。")
        //     await page.waitFor(2000)
        // }
        // break;
    }
}
main()

// (async () => {
//     let ws = await get_debug_url();
//     console.log(ws);
//     const browser = await puppeteer.connect({
//         browserWSEndpoint:ws,
//         defaultViewport: {
//             width: 1366,
//             height: 768
//         }
//     })
//     const page = await browser.newPage();
//     await page.goto('http://dun.163.com/trial/jigsaw',{timeout:5000});
//     await page.addScriptTag({url: 'https://code.jquery.com/jquery-3.2.1.min.js'})
//     console.log('evalu3')
//     await page.evaluate(`(async(x) => {
//        alert(x);
//     })(${55555555})`)
        // `((x) => {x.parseUrl("https://www.example.com:8080/test?q=1&p=2#you_and_me")})(${util})`
    // let list = await getIdsFromServer(20);
    // for (let id of list) {
    //     console.log(id);
    //     const page = await browser.newPage();
    //     page.setDefaultTimeout(500)
    //     await page.goto('https://item.taobao.com/item.htm?id='+id,{timeout:5000});
    //     // await page.waitFor(4000)
    //
    //     let imgs = await page.$("#J_UlThumb");
    //     // await parsePage(page,id)
    //     break;
    // }

    // const start = await page.waitForSelector('body > main > div.g-bd > div > div.g-mn2 > div.m-tcapt > ul > li:nth-child(3)',500)
    // let loc =await start.boundingBox();
    // console.log(loc)
    // await page.waitFor(1245)
    // await page.mouse.move(loc.x+20,loc.y+15)
    // await page.mouse.down()
    // await page.mouse.up()
    // const login = await page.waitForSelector('body > main > div.g-bd > div > div.g-mn2 > div.m-tcapt > div.tcapt-type__container > div.tcapt-type__item.active > div > div > div.tcapt_content > div.u-fitem.u-fitem-capt > button',500)
    // let loc1 =await login.boundingBox();
    // console.log(loc1)
    // await page.mouse.move(loc1.x,loc1.y+5)
    // await page.waitFor(1245)
    // await page.mouse.down()
    // await page.waitFor(467)
    // await page.mouse.up()
    // await page.waitFor(1245)
    //
    // const slid = await page.waitForSelector('body > main > div.g-bd > div > div.g-mn2 > div.m-tcapt > div.tcapt-type__container > div.tcapt-type__item.active > div > div > div.yidun_popup--light.yidun_popup.yidun_popup--appendto > div.yidun_modal__wrap > div > div > div.yidun_modal__body > div > div.yidun_control > div.yidun_slider',500)
    // let loc2 =await slid.boundingBox();
    // console.log(loc2)
    // await page.mouse.move(loc2.x,loc2.y+5)
    // await page.waitFor(467)
    // await page.mouse.down()
    // await page.waitFor(235)
    // await page.mouse.move(loc2.x+3,loc2.y+10)
    // await page.waitFor(235)
    // await page.mouse.move(loc2.x+4,loc2.y+10)
    // await page.waitFor(467)
    // // await page.mouse.down()
    // await page.mouse.move(loc2.x+7,loc2.y+3)
    // await page.waitFor(467)
    // await page.mouse.move(loc.x+3,loc.y+10)
    // await page.waitFor(235)
    // await page.mouse.move(loc.x+7,loc.y+10)
    // await page.waitFor(634)
    // await page.mouse.up()
// })()
