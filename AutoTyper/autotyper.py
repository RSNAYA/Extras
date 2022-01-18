import pyautogui 
import time
print('Booting up....')
userInput = "AutoTyper"
text_file = open("type.txt", "r")

userInput = text_file.read()
text_file.close()
def typeMessage ():
    interval = 0
    print("Waiting 5 seconds before typing!")
    time.sleep(5)
    pyautogui.typewrite(userInput, interval)

typeMessage()
print('Typing is now complete!')
input('Press enter to exit!')