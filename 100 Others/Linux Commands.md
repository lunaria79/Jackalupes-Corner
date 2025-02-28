---
cssclasses:
  - code no-properties
---
Opens Better Terminal
```
xfce4-terminal
```
Check Memory
```
free -m
```
Check Storage
```
ncdu
```
- - -
### Installations
Install from arch-linux
```
sudo pacman -S
```
Install from arch-linux user repository
```
yay -S
```
Update System
```
sudo pacman -Syu
```
Update User Repositories
```
yay -Syu
```
Clear Cache
```
yay -Sc
```
- - -
### Errors
Restart Bluetooth
```
sudo systemctl restart bluetooth 
```
Restart Wifi Manager
```
sudo systemctl restart NetworkManager
```
Fix Audio
```
sudo pacman -S pipewire-pulse
```
- - -
### Manual Mount (deeznuts)
List Drives
```
sudo fdisk -l
```
Mount Drive
```
sudo mount /dev/<drive_name> /<mount_location>
```
Mount **Catboy** to **Windows**
```
sudo mount /dev/nvme0n1p4 /mnt
```
Unmount Drive
```
sudo umount <mount_location/device name>
```
---
# Minecraft Project
### ZIP
Catboy Override
```
zip Catboy\ Override.zip pack.mcmeta pack.png -r assets
```
### Replace String in File Name
String
```
rename -a <original> <new> *<filetyple.
```
Example
```
rename -a diamond gold *.png
```
### Travel
Go to folder
```
cd <folder-name>
```