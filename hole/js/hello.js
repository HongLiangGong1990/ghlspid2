"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var puppeteer = require("puppeteer");
var axios = require('axios');
var qs = require('qs');
function get_debug_url() {
    return __awaiter(this, void 0, void 0, function () {
        var rsp;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios.get('http://127.0.0.1:9222/json/version')];
                case 1:
                    rsp = _a.sent();
                    return [2 /*return*/, rsp.data.webSocketDebuggerUrl];
            }
        });
    });
}
function getIdsFromServer(i) {
    return __awaiter(this, void 0, void 0, function () {
        var rsp;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios.get('http://localhost:8888/get?index=' + i)];
                case 1:
                    rsp = _a.sent();
                    return [2 /*return*/, rsp.data];
            }
        });
    });
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
function sentToServer(key, data) {
    return __awaiter(this, void 0, void 0, function () {
        var res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("sentToServer...");
                    return [4 /*yield*/, axios.post("http://localhost:8888/receiveimg", qs.stringify({
                            key: key,
                            urls: data
                        }))];
                case 1:
                    res = _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function getT(a) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            console.log('getT...');
            alert(a);
            return [2 /*return*/, 'aaa'];
        });
    });
}
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var ws, browser, list, _i, list_1, id, page;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, get_debug_url()];
                case 1:
                    ws = _a.sent();
                    console.log(ws);
                    return [4 /*yield*/, puppeteer.connect({
                            browserWSEndpoint: ws,
                            defaultViewport: {
                                width: 1366,
                                height: 768
                            }
                        })];
                case 2:
                    browser = _a.sent();
                    return [4 /*yield*/, getIdsFromServer(33)];
                case 3:
                    list = _a.sent();
                    _i = 0, list_1 = list;
                    _a.label = 4;
                case 4:
                    if (!(_i < list_1.length)) return [3 /*break*/, 12];
                    id = list_1[_i];
                    console.log(id);
                    return [4 /*yield*/, browser.newPage()];
                case 5:
                    page = _a.sent();
                    page.setDefaultTimeout(500);
                    return [4 /*yield*/, Promise.all([
                            page.setJavaScriptEnabled(true),
                        ])];
                case 6:
                    _a.sent();
                    return [4 /*yield*/, page.addScriptTag({ url: 'https://code.jquery.com/jquery-3.2.1.min.js' })];
                case 7:
                    _a.sent();
                    return [4 /*yield*/, page.goto('https://item.taobao.com/item.htm?id=' + id, { timeout: 5000 })];
                case 8:
                    _a.sent();
                    console.log('evaluate7...');
                    return [4 /*yield*/, page.evaluate("(async() => {\n            \nfunction sentToServer(key,data) {\n\tconsole.log(\"sentToServer...\");\n\t// var text = document.querySelector(\"html\").outerHTML;\n\t// console.log(text);\n\t// var html = \"gsgdsgg\";\n\t$.ajax({\n\t\ttype:\"post\",\n\t\turl:\"http://localhost:8888/receiveimg\",\n\t\tcontentType: \"application/json; charset=utf-8\",\n\t\tdataType: 'json',\n\t\tdata:JSON.stringify({\n\t\t\tkey:key,\n\t\t\turls:data\n\t\t})\n\t});\t\n}\n\n\n\n\nfunction get_random_time(t){\n\tvar time = Math.floor((Math.random()*1000*t)+1000);\n\treturn time;\n}\n\nfunction getTime(text){\n\tvar myDate = new Date();\n\tconsole.log(text,myDate.toLocaleTimeString());\n}\n\n$(function(){\n\tasync function loadPage(t) {\n\t\treturn new Promise(function(resolve, reject){\n\t\t\tconsole.log(\"loadPage...\");\n\t\t    setTimeout(resolve,1000*t);\n\t\t})\n\t}\n\n\tfunction parsePage(){\n\t\tconsole.log(\"parsePage...\");\n\t\tsentToServer();\n\t}\n\n\tasync function waitok() {\n\t\treturn new Promise(function(resolve, reject){\n\t\t\tconsole.log('\u7B49\u5F85\u89E3\u9664\u3002\u3002\u3002')\n\t\t\tsetTimeout(resolve,2000);\n\t\t})\n\t}\n\tasync function loadPage(t) {\n\t\treturn new Promise(function(resolve, reject){\n\t\t\tconsole.log(\"loadPage...\");\n\t\t    setTimeout(resolve,1000*t);\n\t\t})\n\t}\n\n\tasync function click_comments(t){\n\t\tdocument.querySelector(\"#J_TabBar > li:nth-child(2) > a\").click();\n\t\treturn new Promise(function(resolve, reject){\n\t\t    setTimeout(resolve,1000*t);\n\t\t})\n\t}\n\tasync function click_comments_youtu(node,t){\n\t\tnode.click();\n\t\tconsole.log(\"click youtu\")\n\t\treturn new Promise(function(resolve, reject){\n\t\t\tsetTimeout(resolve,1000*t);\n\t\t})\n\t}\n\tasync function click_comments_next(){\n\t\tdocument.querySelector(\"#reviews > div > div > div > div > div > div.tb-revbd > div > ul > li.pg-next\").click();\n\t\treturn new Promise(function(resolve, reject){\n\t\t\tsetTimeout(resolve,get_random_time(4));\n\t\t})\n\t}\n\n\tfunction closePage(){\n\t\twindow.location.href = \"about:blank\";                    //\u5173\u952E\u662F\u8FD9\u53E5\u8BDD\n    \twindow.close();\n    \tgetTime(\"closed..\");\n\t}\n\t\n\tvar huakuai = \"#sufei-dialog-content\";\n\tvar node_map = {};\n\t//\u4F01\u4E1A\n\tnode_map.product=[\n\t\t\t\"#J_UlThumb\"\n\t\t];\n\tnode_map.kanleyoukan=[\n\t\t\"#J_Pine > div > div.tuijian-bd.tb-clearfix > ul\",\n\t\t\"#J_Pinus_Enterprise_Module > div > div > ul\"\n\t];\n\tnode_map.detail=[\n\t\t\"#J_DivItemDesc\"\n\t];\n\tnode_map.comment=[\n\t\t\"#reviews > div > div > div > div > div > div.tb-revbd > ul\"\n\t];\n\n\n\tfunction checkErr() {\n\t\tvar iframe=document.querySelector(\"body > div.sufei-dialog\");\n\t\tif(iframe!=null) {\n\t\t\treturn 1\n\t\t}\n\t}\n\tfunction checkStatus(){\n\t\tvar te=document.querySelector('#error-notice > div.error-notice-text > div.error-notice-hd')\n\t\tif(te!=null){\n\t\t\tconsole.log(\"\u5546\u54C1\u4E0B\u67B6\u3002\u3002\u3002\")\n\t\t\treturn '0';\n\t\t} else{\n\t\t\treturn '1';\n\t\t}\n\t}\n\n\n\tfunction getDate(){\n\t\tvar myd = new Date();\n\t\treturn myd.toLocaleDateString();\n\t}\n\n\tfunction getId(){\n\t\tvar urlstr = window.location.href;\n\t\tvar id= urlstr.substr(urlstr.indexOf('id=')+3,17).replace(/[^0-9]+/g, '');\n\t\tconsole.log('id:',id);\n\t\tvar a = new Array();\n\t\ta[0] = id;\n\t\treturn a;\n\t}\n\n\tfunction change(url){\n\t\tif(url==null ||url=='') return null;\n\t\tif(url.indexOf(\"imgextra\")<0 && url.indexOf(\"uploaded\")<0) return null;\n\t\turl = url.replace('_.webp','');\n\t\tif(url.indexOf('40x40')>=0) {\n\t\t\treturn url.replace('40x40','400x400');\n\t\t}\n\t\tif(url.indexOf('50x50')>=0) {\n\t\t\treturn url.replace('50x50','400x400');\n\t\t}\n\t\tif(url.indexOf('80x80')>=0) {\n\t\t\treturn url.replace('80x80','400x400');\n\t\t}\n\t\treturn url;\n\t}\n\n\tfunction getImg(node){\n\t\tconsole.log(node)\n\t\tvar node0 = document.querySelector(node[0]);\n\t\tif(node0==null) node==node[1]\n\t\tvar imgs = document.querySelector(node).getElementsByTagName(\"img\");\n\t\tvar imgarr = new Array();\n\t\tvar preurl='';\n\t\tvar url = '';\n\t\tvar j=0;\n\t\tfor(i=0;i<imgs.length;i++){\n\t\t\t// console.log(imgs[i].src)\n\t\t\tif(imgs[i].getAttribute('data-ks-lazyload') !=null){\n\t\t\t\tpreurl = imgs[i].getAttribute('data-ks-lazyload');\n\t\t\t}else{\n\t\t\t\tpreurl = imgs[i].src;\n\t\t\t}\n\t\t\turl = change(preurl);\n\t\t\tif(url!=null){\n\t\t\t\timgarr[j++] = url;\n\t\t\t}\n\t\t}\n\t\treturn imgarr;\n\t}\n\n\tvar success = function(value){\n\t\tconsole.log(value);\n\t\treturn value;\n\t}\n\tasync function getComm(node){\n\t\tconsole.log(node);\n\t\tawait click_comments(2)\n\n\t\tvar youtu = document.querySelector(\"#reviews-t-val3\");\n\t\tif(youtu==null) {\n\t\t\tconsole.log(\"\u6CA1\u6709\u4E0B\u4E00\u9875\")\n\t\t\treturn;\n\t\t}\n\t\tawait click_comments_youtu(youtu,1);\n\t\tvar isend=false;\n\t\tvar a=new Array();\n\t\twhile(true){\n\t\t\ta = a.concat(getImg(node));\n\t\t\tvar ne= document.querySelector(\"#reviews > div > div > div > div > div > div.tb-revbd > div > ul > li.pg-next\")\n\t\t\tif(ne ==null){\n\t\t\t\tisend=true;\n\t\t\t} else {\n\t\t\t\tisend = ne.classList.contains(\"pg-disabled\");\n\t\t\t}\n\t\t\tif(isend){\n\t\t\t\tbreak;\n\t\t\t}\n\t\t\tconsole.log(isend);\n\t\t\tawait click_comments_next();\n\t\t}\n\t\t// console.log(a);\n\t\treturn a;\n\t}\n\tasync function parsePage(){\n\t\tconsole.log(\"parsePage...\");\n\t\t// while(true){\n\t\t// \t// await waitok()\n\t\t// \tconsole.log(\"\u63D2\u4EF6\u5FAA\u73AF\u4E2D\u3002\u3002\u3002\")\n\t\t// }\n\t\tvar result_map = {};\n\t\tvar result_key = new Array();\n\t\tvar result_arr = new Array();\n\t\tvar index = 0;\n\t\tvar index2 = 0;\n\t\t// result_arr[index++]=checkStatus();\n\t\t// result_key[index2++]='status';\n\n\t\t// result_arr[index++]=getDate();\n\t\t// result_key[index2++]='riqi'\n\n\t\tif(checkStatus()=='1'){//\u5982\u679C1\uFF0C\u8868\u793A\u6CA1\u4E0B\u67B6\n\t\t\tconsole.log('\u6CA1\u6709\u4E0B\u67B6')\n\t\t\tconsole.log(\"getid\")\n\t\t\tresult_arr[index++] = getId();\n\t\t\tresult_key[index2++] = \"id\";\n\t\t\tconsole.log(\"getproduct\")\n\t\t\tresult_arr[index++] = getImg(node_map.product);\n\t\t\tresult_key[index2++] = \"product\";\n\t\t\tconsole.log(\"getkan\")\n\t\t\tresult_arr[index++] = getImg(node_map.kanleyoukan);\n\t\t\tresult_key[index2++] = \"kanleyoukan\";\n\t\t\tconsole.log(\"getdetail\")\n\t\t\tresult_arr[index++] = getImg(node_map.detail);\n\t\t\tresult_key[index2++] = \"detail\";\n\n\t\t\tawait getComm(node_map.comment).then(value =>{\n\t\t\t\t// console.log(value);\n\t\t\t\tresult_arr[index++] =  value;\n\t\t\t\tresult_key[index2++] = \"comment\";\n\t\t\t\tconsole.log(result_arr);\n\t\t\t\tconsole.log(result_key);\n\t\t\t\tsentToServer(result_key,result_arr);\n\t\t\t});\n\t\t}\n\t}\n\n\tfunction dopre(){\n\t\tvar qiye = document.querySelector(\"#header-content > div.shop-summary.J_TShopSummary\");\n\t\tif(qiye !=null){\n\t\t\tqiye.className += \" hover\";\n\t\t}\n\t}\n\n\tasync function as(){\n\n\t\tawait loadPage(4);\n\t\t// search(search_input, search_button, keywords);\n\t\t// getTime(\"await click pre\");\n\t\t// await product_list(\"#J_ItemList\");\n\t\t// dopre();\n\t\t// await loadPage(2);\n\n\t\tawait parsePage();\n\t\tclosePage();\n\t\tconsole.log(\"done\");\n\t} \n\t\n\tas();\n\n})\n         })()")
                        // `(async() => {})()`
                        // console.log('show ',show)
                    ];
                case 9:
                    _a.sent();
                    // `(async() => {})()`
                    // console.log('show ',show)
                    return [4 /*yield*/, page.waitFor(50000)
                        // while(true){
                        //     console.log("循环中。。。")
                        //     await page.waitFor(2000)
                        // }
                        // break;
                    ];
                case 10:
                    // `(async() => {})()`
                    // console.log('show ',show)
                    _a.sent();
                    _a.label = 11;
                case 11:
                    _i++;
                    return [3 /*break*/, 4];
                case 12: return [2 /*return*/];
            }
        });
    });
}
main();
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
//# sourceMappingURL=hello.js.map