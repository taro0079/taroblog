---
title: gnome 42 (Endeavour OS)のウィンドウタイトルバーの高さを小さくする
date: 2022-08-23
published: true
description: でかいタイトルバーを小さくする設定です
---

## 問題
surface pro 7にarch linuxベースのディストリのEndeavour OSを入れて使っています
Endeavour OSはgnomeやi3などデスクトップ環境を選択することができます。
ラップトップとして使うときにはなんだかんだでgnomeを選択することが多いのですが、gnomeのウィンドウタイトルバーが太く、画面を占有してしまうのが欠点でした。

## 解決
gnomeの外観はcssで管理されている(私も今回初めて知ってビックリした)ので、そのcssファイルを設定します。
`~/.config/gtk-4.0/gtk.css`を下記のように設定します。
(私の環境では`~/.config/gtk-3.0/gtk.css`も存在していたので、そちらも下記の通り変更しました)
```css
headerbar {
				min-height: 0px;
				padding-left: 2px;
				padding-right: 2px;
}

headerbar entry,
headerbar spinbutton,
headerbar separator {
				margin-top: 0px;
				margin-bottom: 0px;
}

.default-decoration {
				min-height: 0px;
				padding: 0px;
}

.default-decoration .titlebuttoon {
				min-height: 0px;
				min-width: 0px;
}

window.ssd headerbar .titlebar {
				padding-top: 3px;
				padding-bottom: 3px;
				min-height: 0;
}

window.ssd headerbar.titlebar button.titlebutton {
				padding-top: 3px;
				padding-bottom: 3px;
				min-height: 0;
}
```
上記設定後に再起動すると反映されています。
