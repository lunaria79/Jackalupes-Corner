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
```rust unfold file:Restart-Bluetooth
sudo systemctl restart bluetooth 
```

```rust unfold file:Restart-WiFi-Manager
sudo systemctl restart NetworkManager
```

```rust unfold file:Audio-Fix
sudo pacman -S pipewire-pulse
```
- - -
### Manual Mount (deeznuts)
```rust unfold file:List-Drives
sudo fdisk -l
```

```rust unfold file:Mount-Drives
sudo mount /dev/<drive_name> /<mount_location>
```
```rust fold file:Catboy-to-Windows
sudo mount /dev/nvme0n1p4 /mnt
```

```rust unfold file:Unmount-Drive
sudo umount <mount_location/device name>
```
---
# File Management
```rust unfold file:Go-to-Folder
cd <folder-name>
```

```rust unfold file:Rename-String
rename -a <original> <new> *<.filetype>
```
```rust fold file:Rename-String-Example
rename -a diamond gold *.png
```

```rust unfold file:Clear-Pacman-Cache
paccache -rk 0
```
---
# Fun Stuff
## Daktilo (Typewriter Sounds)
List Presets
```rust unfold file:List-Presets
daktilo --list-presets
```

```rust unfold file:Use-Preset
daktilo --preset default
```

```rust unfold file:Variate-Sounds
daktilo --variate-tempo 0.9,0.4 --variate-volume 0.1,0.5
```

## Music Player
```rust unfold file:Music-Player
cmus
```

## Coding
```rust unfold file:Open-Tmux
tmux
```

```rust unfold file:START-EVERYTHING-WITH-THIS
ctl b
```

```rust unfold file:Open-Manual
man tmux
```

## Minecraft Project
```rust unfold file:Zip-Catboy-Override
zip Catboy\ Override.zip pack.mcmeta pack.png -r assets
```