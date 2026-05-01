# 交叉选择

在同一个板子下的原理图和 PCB 可以使用这个交叉选择进行相互定位元件、引脚、导线网络、复用模块。

**操作入口**：

顶部菜单 - 设计 -交叉选择

选中元件、引脚、导线网络、复用模块后右键菜单 - 交叉选择

选中元件、引脚、导线网络、复用模块后快捷键<kbd>Shift</kbd>+<kbd>X</kbd>

![图 8](/storage/images/cn/schematic/design-cross-probe/design-cross-probe_20240621_172124.png)

**使用方法**：

-   选中元件后，选择交叉选择功能，会根据元件的唯一ID高亮并选中PCB对应相同唯一ID的元件。

-   选中引脚后，选择交叉选择功能，会高亮并选中PCB对应元件里相同编号的焊盘

-   过滤面板勾选网络，同时选中导线、网络标识、网络端口、网络标签后，选择交叉选择功能，会高亮并选中PCB对应网络的所有对象

![图 0](/storage/images/cn/schematic/design-cross-probe/design-cross-probe_20240621_172125.jpg)

-   选中复用模块符号后，选择交叉选择功能，会高亮并选中PCB中对应模块的所有元件

**操作演示视频：**https://www.bilibili.com/video/BV1ZP411G76U/?spm_id_from=333.999.0.0
