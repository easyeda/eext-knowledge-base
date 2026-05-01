# 等长调节

等长调节又称等长绕线、延迟线，是PCB设计中一种特殊的走线形式，主要目的是为了补偿同一组时序相关的信号线中延时较小的走线，尽量减小同组信号之间的相对延时，避免出现时序问题。

**操作步骤**：

-   顶部菜单 - 布线 - 等长调节

![图 117](/storage/images/cn/pcb/route-equal-length-tuning/route-equal-length-tuning_20240621_172124.png)

## 等长调节设置

激活等长调节后，点击<kbd>TAB</kbd>调出等长调节属性框

![图 115](/storage/images/cn/pcb/route-equal-length-tuning/route-equal-length-tuning_20240621_172125.png)

**小技巧**：增加长度输入框可以通过输入四则运算表达式快速计算需要的数值。比如输入 5+2 回车，会自动计算为 7。

## 拐角

-   **线条45度**：设置等长绕线的拐角为角度45°

![image-20211224180557258](/storage/images/en/pcb/route-equal-length-tuning/route-equal-length-tuning_20240621_172125.png)

-   **线条90度**：

设置等长绕线的拐角为角度90°

![image-20211224180755324](/storage/images/en/pcb/route-equal-length-tuning/route-equal-length-tuning_20240621_172126.png)

-   **圆弧90度**：最常用的一种等长调节设置，这个角度设置也称为蛇形等长。

![image-20211224180915856](/storage/images/en/pcb/route-equal-length-tuning/route-equal-length-tuning_20240621_172127.png)

## 走线约束

**走线方式**：单边走线等长的时只会往一个方向进行等长摆幅。双边则是线条的两边都能进行等长调节。
![图 116](/storage/images/cn/pcb/route-differential-pair-equal-length-tuning/route-differential-pair-equal-length-tuning_20240621_172131.png)

**间距（W）**：等长调节走线之间的宽度设置。

**最小振幅（H）**：等长走线的振幅设置，也可以说是高度的设置。

![差分对布线](/storage/images/cn/pcb/route-equal-length-tuning/route-equal-length-tuning_20240621_172126.gif)

操作演示视频：https://www.bilibili.com/video/BV12a411G7ME/?spm_id_from=333.999.0.0
