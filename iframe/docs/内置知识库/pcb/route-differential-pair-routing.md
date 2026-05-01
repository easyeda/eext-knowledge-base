# 差分对布线

差分对布线是一项要求在印刷电路板上创建利于差分信号（对等和反相的信号）平衡的传输系统的技术。差分线路一般与外部的差分信号系统相连接,差分信号系统是采用双绞线进行信号传输的，双绞线中的一条信号线传送原信号，另一条传送的是与原信号反相的信号。差分信号是为了解决信号源和负载之间没有良好的参考地连接而采用的方法，它对电子产品的干扰起到固有的抑制作用。差分信号的另一个优点是它能减小信号线对外产生的电磁干扰(EMI）。

**设置差分走线步骤**：

-   顶部菜单 - 布线 - 差分对布线。

![图 67](/storage/images/cn/pcb/route-differential-pair-routing/route-differential-pair-routing_20240621_172124.png)

## 创建差分对网络类

在进行差分对布线前，需要先设置差分对网络类。

1、可以在左侧网络标签页，在差分对类别右键，新建差分对。
![图 41](/storage/images/cn/pcb/design-differential-pair-manager/design-differential-pair-manager_20240621_172125.png)

2、也可以直接点击布线菜单 - 差分对布线，点击焊盘后如果检测到没有建立差分对，会弹窗提示创建差分对。

![图 2](/storage/images/cn/pcb/route-differential-pair-routing/route-differential-pair-routing_20240621_172125.png)

3、在设计菜单 - 差分对管理器进行创建
![图 59](/storage/images/cn/pcb/design-differential-pair-manager/design-differential-pair-manager_20240621_172124.png)

设置好差分对名称和包含的网络。

![图 42](/storage/images/cn/pcb/design-differential-pair-manager/design-differential-pair-manager_20240621_172126.png)

也可以使用左下角的自动生成差分对，根据网络名的正负符号进行查询生成：

![图 44](/storage/images/cn/pcb/design-differential-pair-manager/design-differential-pair-manager_20240621_172127.png)

创建完差分对后，可以在左侧网络标签页看到。并且可以看到网络的导线总长度。

![图 7](/storage/images/cn/pcb/route-differential-pair-routing/route-differential-pair-routing_20240621_172126.png)

## 创建差分对规则

在设计菜单 - 设计规则进行设置差分对的网络规则。

![图 5](/storage/images/cn/pcb/route-differential-pair-routing/route-differential-pair-routing_20240621_172127.png)

![图 6](/storage/images/cn/pcb/route-differential-pair-routing/route-differential-pair-routing_20240621_172128.png)

## 绘制差分对

当完成了规则设置后，就可以点击差分对布线菜单，进行差分对布线，在布线过程中还可以实时查看布线长度和差异。

![差分对布线](/storage/images/en/pcb/route-differential-pair-routing/route-differential-pair-routing_20240621_172130.gif)

绘制过程中可以通过按空格键切换路径走向，使用快捷键 T B 进行切层。

在通过快捷键切层绘制时，或添加过孔时，可以通过按空格键切换导线和过孔的扇出方向，如下图过孔的导线走向的两种方式：

![图 68](/storage/images/cn/pcb/route-differential-pair-routing/route-differential-pair-routing_20240621_172129.png)

在布线过程中，光标右上角会提示布线误差和是否符合规则。

![图 69](/storage/images/cn/pcb/route-differential-pair-routing/route-differential-pair-routing_20240621_172130.png)

如果没有显示，可以在设置 - PCB设置 - 通用里面开启实时显示。

![图 70](/storage/images/cn/pcb/route-differential-pair-routing/route-differential-pair-routing_20240621_172131.png)

操作演示视频：https://www.bilibili.com/video/BV12a411G7ME/?spm_id_from=333.999.0.0
