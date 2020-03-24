import * as puppeteer from 'puppeteer'
import * as fs from "fs";
let axios = require('axios');
let qs = require('qs')

async function get_debug_url() {
    let rsp = await axios.get('http://127.0.0.1:9223/json/version');
    return rsp.data.webSocketDebuggerUrl;
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
    //const frame = ( await page.frames() )[3];//通过索引得到我的iframe 没有name属性用索引，有name属性用name更好
    const fram = await page.frames().find(f=>f.name()==='sufei-dialog-content');
    if(fram == null) return;
    await page.waitFor(700)
    //fram.$$eval两个$表示console.log(Array.from([1, 2, 3], x => x + x));
    //Array [2, 4, 6]
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
    // let args = process.argv.splice(2);
    // console.log('传递的参数是： ', args);
    //chrome.exe --remote-debugging-port=9223
    let ws = await get_debug_url();
    console.log(ws);
    //良种启动方式，launch是直接启动新的chrome
    //connect是连接之前已启动的chrome
    // const browser = await puppeteer.launch({
    //     executablePath: 'C:\\Users\\Administrator\\AppData\\Local\\Google\\Chrome\\Application\\chrome.exe',
    //     ignoreDefaultArgs: ["--enable-automation"]
    // });
    const browser = await puppeteer
        .connect({
            browserWSEndpoint:ws,
            defaultViewport: {
                width: 1366,
                height: 768
            }
        });
    //console.log('browser ',browser);
    const page = await browser.newPage();
    //要窒息的脚本放在preload中
    const preloadFile = fs.readFileSync('./preload.js', 'utf8');
    //在页面打开之前执行一段脚本
    await page.evaluateOnNewDocument(preloadFile);
    // let key1 = args[0];
    // let key2 = args[1];
    // let url = encodeURI('https://s.taobao.com/search?ie=utf8&stats_click=search_radio_all%3A1&js=1&imgfile=&_input_charset=utf-8&wq=&suggest_query=&source=suggest&q='+key1+'+'+key2);
    await page.goto("https://login.taobao.com/member/login.jhtml");
    //newPage是打开新tab页
    // const page2 = await browser.newPage();
    await page.goto("https://www.baidu.com");
    console.log(4646);
}
main();
