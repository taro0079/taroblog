---
slug : least square
title: Pythonでの最小自乗近似
date: 2020-09-10
published: true
tags: ['python']
description: pythonのnumpyを使って最小二乗近似をする方法．よく忘れてしまうのでメモ．
---

# 参考サイト
[http://ailaby.com/least_square/](http://ailaby.com/least_square/)


# 最小二乗近似
```python
import numpy as np
from matplotlib import pyplot as plt

x = [1, 2, 3]
y = [2, 4, 6]

fig = plt.figure(figsize=(6,6))
ax = fig.add_subplot(111)

ax.scatter(x, y)
ax.plot(x, np.poly1d(np.polyfit(x, y, 1))(x)) # 最小二乗近似
```

