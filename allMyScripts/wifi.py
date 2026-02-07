import subprocess

# This is the PowerShell command you provided
cmd = '$ssid = (netsh wlan show interfaces | Select-String "^\s+SSID" | ForEach-Object { $_.ToString().Split(":")[1].Trim() }); netsh wlan show profile name="$ssid" key=clear | Select-String "Key Content"'

# We tell Python to run this in PowerShell
result = subprocess.run(["powershell", "-Command", cmd], capture_output=True, text=True)

# Print the result to the screen
print("--- Current WiFi Password ---")
print(result.stdout)