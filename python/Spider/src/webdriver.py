import time
import json
import requests
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.action_chains import ActionChains

chrome_options = Options()
# 要先在cmd中运行chrome.exe --remote-debugging-port=9222
chrome_options.add_experimental_option("debuggerAddress", "127.0.0.1:9222")

driver = webdriver.Chrome(options=chrome_options)
print(driver.title)
print("已连接")
# 当前句柄
current = driver.current_window_handle

for i in range(40, 50):
    response = requests.get("http://localhost:8888/get?index=" + str(i))
    idlist = json.loads(response.text)
    if (len(idlist) == 0):
        break
    for j, v in enumerate(idlist):
        num = (i - 1) * 100 + j
        print('页数：', i, ' num: ', num, 'id: ', v)
        try:
            driver.execute_script('window.open("https://item.taobao.com/item.htm?id=' + v + '")')
            time.sleep(2)
        except:
            try:
                # 如果发生异常就再试一遍
                driver.execute_script('window.open("https://item.taobao.com/item.htm?id=' + v + '")')
                time.sleep(3)
            except:
                print('两次尝试均失败')

        if (j % 3 == 0):
            time.sleep(4)
