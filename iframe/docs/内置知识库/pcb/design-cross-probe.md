# 交叉选中

当选中一个元件、元件焊盘、网络，可以使用交叉选中功能，进行定位原理图的元件位置

![图 49](/storage/images/cn/pcb/design-cross-probe/design-cross-probe_20240621_172124.png)

快捷键 SHIFT+X，或元件右键菜单进行交叉选中

![图 50](/storage/images/cn/pcb/design-cross-probe/design-cross-probe_20240621_172125.png)

在PCB选中了对象后，原理图中需要交叉选中的对象所在的图页，会在左侧图页树、顶部标签、复用模块底部标签处加粗文字并标红显示，方便快速找到到涉及的图页。

![图 0](/storage/images/cn/pcb/design-cross-probe/design-cross-probe_20240621_172126.jpg)

当原理图和PCB均单独打开了窗口，也可以使用这个进行交叉选中。

如果直接用鼠标点击PCB元件，原理图窗口的元件也会进行定位，使用快捷键进行交叉选中可以自动移动画布，使元件在画布中央。

-   PCB中选中了元件后，选择交叉选择功能，会根据元件的唯一ID高亮并选中原理图对应相同唯一ID的元件。

-   PCB中选中了元件内的焊盘后，选择交叉选择功能，会高亮并选中原理图对应元件相同编号的引脚。

-   PCB中过滤面板勾选网络，同时画布中选中了某个网络后，会高亮并选中原理图中对应的网络，如果同时有多个图页存在该网络，会同时打开这些图页，并切换到第一个图页。

操作演示视频：https://www.bilibili.com/video/BV1CT411F79b/?spm_id_from=333.999.0.0

支持在 顶部菜单栏 - 设置 - PCB/封装 - 显示 中设置交叉选择的高亮效果。

![图 0](/storage/images/cn/pcb/design-cross-probe/design-cross-probe_20260106_155231.png)

![图 1](/storage/images/cn/pcb/design-cross-probe/design-cross-probe_20260106_155821.png)
