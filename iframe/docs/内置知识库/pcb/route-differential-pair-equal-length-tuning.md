# 差分对等长调节

差分对等长调节在高速信号设计中有重要的应用价值，它是为了保证差分对内的两个信号等长，同时与电路中其他信号路径长度等长，来提高信号的可靠性，提升系统性能。差分等长的具体原理是通过一起调节差分信号的两个网络长度，使差分信号内部误差不变，同时整体调整差分对与其他信号的长度误差，以此达到多组信号长度相等的目的

**操作步骤**：

-   顶部菜单 - 布线 - 差分对等长调节

![图 0](/storage/images/cn/pcb/route-differential-pair-equal-length-tuning/route-differential-pair-equal-length-tuning_20240621_172124.jpg)

## 等长调节设置

激活差分对等长调节后，鼠标变为十字光标，等待选择差分等长的起点

![图 1](/storage/images/cn/pcb/route-differential-pair-equal-length-tuning/route-differential-pair-equal-length-tuning_20240621_172125.jpg)

点击<kbd>TAB</kbd>或通过右键菜单 - 等长调节设置可以调出等长调节属性框，该属性框的参数设置与等长调节完全一致

![图 2](/storage/images/cn/pcb/route-differential-pair-equal-length-tuning/route-differential-pair-equal-length-tuning_20240621_172126.jpg)

![图 3](/storage/images/cn/pcb/route-differential-pair-equal-length-tuning/route-differential-pair-equal-length-tuning_20240621_172127.jpg)

**小技巧**：增加长度输入框可以通过输入四则运算表达式快速计算需要的数值。比如输入 5+2 回车，会自动计算为 7。

## 拐角

-   **线条45度**：设置差分对等长绕线的拐角为角度45°

![图 4](/storage/images/cn/pcb/route-differential-pair-equal-length-tuning/route-differential-pair-equal-length-tuning_20240621_172128.jpg)

-   **线条90度**：

设置差分对等长绕线的拐角为角度90°

![图 5](/storage/images/cn/pcb/route-differential-pair-equal-length-tuning/route-differential-pair-equal-length-tuning_20240621_172129.jpg)

-   **圆弧90度**：最常用的一种等长调节设置，这个角度设置也称为蛇形等长。

![图 6](/storage/images/cn/pcb/route-differential-pair-equal-length-tuning/route-differential-pair-equal-length-tuning_20240621_172130.jpg)

## 走线约束

-   **走线方式**：单边走线等长的时只会往一个方向进行等长摆幅。双边则是线条的两边都能进行等长调节。
    ![图 116](/storage/images/cn/pcb/route-differential-pair-equal-length-tuning/route-differential-pair-equal-length-tuning_20240621_172131.png)

-   **间距（W）**：等长调节走线之间的宽度设置。

-   **最小振幅（H）**：等长走线的振幅设置，也可以说是高度的设置。

**小技巧**：在进行等长调节时，可以通过快捷键<kbd>num+</kbd>、<kbd>num-</kbd>来微调间距，间隙步进值可以通过右键菜单调整。

![图 7](/storage/images/cn/pcb/route-differential-pair-equal-length-tuning/route-differential-pair-equal-length-tuning_20240621_172132.jpg)
