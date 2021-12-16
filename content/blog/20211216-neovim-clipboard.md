---
title: archlinuxのneovimのとヤンクとクリップボードを共有させる
date: "2021-12-16"
description: "neovimのヤンクをクリップボードと共有させる"
---

# 準備
1. '''init.vim'''に以下を記入
```
set clipboard+=unnamedplus
```
2. xclipとxselをインストールする
```
sudo pacman -S xclip xsel
```
これで準備は完了

# 使い方
neovimの"+"か"\*"のレジスタに保管されたものが共有される。
neovim -> clipboardの場合は
1. vで文字を選択して、```"+y``` (レジスタ"+"に保管される)
2. 普通にペースト

clipboard -> neovim
1. 普通にコピー
2. ```"+p```でペースト (レジスタ"+"に保管されたテキストをペースト)

