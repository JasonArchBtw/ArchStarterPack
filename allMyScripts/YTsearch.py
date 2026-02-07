# # import pyautogui
# import os
# # print(pyautogui.position())
# # print(pyautogui.size())

# # #pyautogui.moveTo(1000, 700, duration=1)

# # #pyautogui.rightClick(1632, 1419, duration = 0.5)
# # #pyautogui.leftClick(1632, 1350, duration = 0.5)

# # pyautogui.moveTo(2337, 1407, duration=0.5)
# # pyautogui.click()
# # pyautogui.moveRel(-80, -90, duration=0.3)
# # pyautogui.rightClick()
# # pyautogui.leftClick(100,100)

# folder_path = r"C:\Users\justr\Downloads"

# for file in os.listdir(folder_path):
#     print(file)

# current_dir = os.getcwd()
# print(current_dir)

# import sys
# import webbrowser

# URLS = {
#     "work": ["https://www.slack.com", "https://www.google.com"],
#     "personal": ["https://docs.python.org/3/library/webbrowser.html", "https://www.spotify.com", "https://www.youtube.com"]
# }
# choise = input("what do you want do to: ")

# def open_webpages(urls):
#     for url in urls:
#         webbrowser.open_new_tab(url)


# if __name__ == "__main__":
#     if len(sys.argv) != 2 or sys.argv[1] not in URLS:
#         print("Usage: python script.py <set_name>")
#         print("Available sets:")
#         for set_name in URLS.keys():
#             print(f"- {set_name}")
#         sys.exit(1)

#     set_name = sys.argv[1]
#     urls = URLS[set_name]
#     open_webpages(urls)

import sys
import webbrowser

query = input("what would you like to search on Youtube: ")
webbrowser.open(f"https://www.youtube.com/search?q={query}")



