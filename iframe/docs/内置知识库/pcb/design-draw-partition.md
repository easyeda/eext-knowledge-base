# 绘制分区

在多人同时设计一个PCB时，可以通过分区功能划分不同成员负责的PCB区域，成员各自在子区域内进行设计，最终合并到主图。

**操作入口：**

顶部菜单-设计-绘制分区

![图 0](/storage/images/cn/pcb/design-draw-partition/design-draw-partition_20240425_154531.jpg)

**交互说明：**

-   点击绘制分区子菜单，选择需要的形状，如矩形
-   进入绘制模式，绘制需要的图形
-   完成绘制后，图形内部自动变暗，并在左侧图页树PCB下多出一个子图

![图 3](/storage/images/cn/pcb/design-draw-partition/design-draw-partition_20240425_193302.jpg)

在分出子图后，主图不可以操作分区内的图元，也不可以把分区外的图元移动到分区内。

打开子图，会发现分区内保持亮度，而分区外变暗，不可以操作分区外的图元，也不可以把分区内的图元移动到分区外。
![图 2](/storage/images/cn/pcb/design-draw-partition/design-draw-partition_20240425_193103.jpg)

绘制的分区边框暂时不支持选中和调整形状。绘制分区后，对子图的分出、更新、合并和删除功能需要进入分区管理器操作，请前往分区管理器章节查看。
