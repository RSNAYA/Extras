import requests
from colorama import init, Fore
from time import sleep
import os, ctypes
import threading
from selenium import webdriver
os.system("cls")
init()
ctypes.windll.kernel32.SetConsoleTitleW("View Botter")
url = 'YOUR URL HERE'

options = webdriver.ChromeOptions()
options.add_experimental_option('excludeSwitches', ['enable-logging'])
options.add_experimental_option('detach', True)
driver = webdriver.Chrome(options=options, executable_path=r'chromedriver.exe')

def add():
    driver.get(url)
    print(Fore.GREEN + '[' + Fore.WHITE + 'SENT' + Fore.GREEN + '] ' + "ONE VIEW" + Fore.WHITE)
        


while True:
    if threading.active_count() < 150:
        threading.Thread(target=add, args=()).start()
        sleep(0.25)
