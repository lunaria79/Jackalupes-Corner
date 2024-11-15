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
- - -
### Errors
Restart Bluetooth
```
sudo systemctl restart bluetooth 
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
ZIP Catboy Override
```
zip Catboy\ Override.zip pack.mcmeta pack.png -r assets
```
### Replace Text in File
String
```
replace -a <original> <new> *<filetyple.
```
Example
```
replace -a diamond gold *.png
```