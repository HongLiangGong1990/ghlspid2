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
/*
page：整个页面
iframe:验证框
btn:鼠标点击的按钮
refresh:失败后点击重连的
retries:失败后重试次数，如果超过还未成功就放弃
*/
// async function slider(page:any, ifram:any,btn:any,refresh:any,retries:any){
async function slider(page:any){
    await page.waitFor(3000)
    const start = await page.waitForSelector('#sufei-dialog-content',{timeout:5000})
    const fram = await page.frames().find(f=>f.name()==='sufei-dialog-content');
    await page.waitFor(700)
    let html = await fram.$eval('#nc_1__scale_text',e=>e.innerText)
    console.log(html)
    let but = await fram.$('#nc_1_n1z')
    let loc = await but.boundingBox();
    console.log(loc.x,loc.y)
    await page.waitFor(36)
    await page.mouse.move(loc.x+20,loc.y+15)
    await page.waitFor(20)
    await page.mouse.down()
    await page.mouse.move(loc.x+25,loc.y+12,{steps:10})
    await page.waitFor(13)
    await page.mouse.move(loc.x+22,loc.y+12)
    await page.waitFor(30)
    await page.mouse.move(loc.x+32,loc.y+12,{steps:5})
    await page.waitFor(20)
    await page.mouse.move(loc.x+80,loc.y+20,{ steps: 20 })
    await page.waitFor(33)
    await page.mouse.move(loc.x+230,loc.y+19,{ steps: 16 })
    await page.waitFor(23)
    await page.mouse.move(loc.x+220,loc.y+12,{steps:5})
    await page.waitFor(123)
    await page.mouse.move(loc.x+305,loc.y+32,{steps:35})
    await page.waitFor(23)
    await page.mouse.down()
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

    for (let i = 50; i < 52; i++) {
        let list = await getIdsFromServer(i);
        console.log('size: ',list.length)
        console.log('第 ',i)
        console.log('281')
        for (let id of list) {
            console.log(id,new Date());
            const page = await browser.newPage();
            try {
                await page.goto('https://item.taobao.com/item.htm?id='+id)
                console.log('286')
                while(true){
                    console.log('288')
                    await slider(page);
                    try{
                        console.log('291')
                        const start = await page.waitForSelector('#sufei-dialog-content',{timeout:500})
                        await page.waitFor(200)
                        const fram = await page.frames().find(f=>f.name()==='sufei-dialog-content');
                        await page.waitFor(200)
                        let html = await fram.$eval('body > div > div > p',e=>e.innerText)
                        console.log(html)
                        let shuaxin = await fram.$('#nocaptcha > div > span > a')
                        let loc = await shuaxin.boundingBox();
                        await page.waitFor(36)
                        await page.mouse.move(loc.x+5,loc.y+5)
                        await page.mouse.down()
                        await page.mouse.up()
                    } catch (e) {
                        break
                    }
                }
            } catch (e) {
                console.log('slider err',new Date())
                console.log(e)
            }
            // await page.close()
            await page.waitFor(2000)
        }
    }
}
main()

