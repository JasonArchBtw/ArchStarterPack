from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
import time

# Get user input for the game BEFORE opening the browser
game_name = input("Enter the game name: ").strip()

if not game_name:
    print("No game entered. Exiting...")
    exit()

# Set up the WebDriver (change to Firefox if needed)
driver = webdriver.Chrome()  # Or use webdriver.Firefox()

# Open SteamUnlocked
driver.get("https://steamunlocked.net")

# Wait for the page to load
time.sleep(2)

# Find the search bar and enter the game name
search_box = driver.find_element(By.NAME, "s")  # Search bar element
search_box.click()
search_box.send_keys(game_name)
search_box.send_keys(Keys.RETURN)  # Press Enter

# Wait for search results to load
time.sleep(2)



# Keep the browser open (optional)
input("Press Enter to close...")
driver.quit()
