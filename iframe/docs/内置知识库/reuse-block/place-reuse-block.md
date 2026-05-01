# 放置复用模块

复用模块可通过以下两个入口进行放置：

1. 顶部菜单栏 - 放置 - 复用模块

    ![图 11](/storage/images/cn/schematic/place-reuse-block/place-reuse-block_20250709_095938.png)

2. 底部库 - 复用模块 - 放置模块模块

![图 12](/storage/images/cn/schematic/place-reuse-block/place-reuse-block_20250709_100121.png)

其中，通过顶部菜单栏放置的复用模块仅应用于当前工程，常用于层次化原理图设计。

![图 18](/storage/images/cn/schematic/place-reuse-block/place-reuse-block_20250709_101938.png)

通过底部元件库可调用已新建的复用模块。此处我们放置上一步新建的 Type-C 复用模块。

![图 14](/storage/images/cn/schematic/place-reuse-block/place-reuse-block_20250709_100620.png)

左侧树中将新增复用模块的板子，支持双击进入对应的原理图或 PCB 页面进行修改。**需注意，此类修改仅作用于当前工程，不会影响库中的复用模块。**

![图 15](/storage/images/cn/schematic/place-reuse-block/place-reuse-block_20250709_100804.png)

若想放置已存在于工程中的复用模块，可在左侧工程中右键模块原理图，选择`放置模块符号`。

![图 27](/storage/images/cn/schematic/place-reuse-block/place-reuse-block_20250709_113304.png)

点击`更新/转换原理图到 PCB`，能够观察到 PCB 中保留了模块的电路布局与布线。

![图 16](/storage/images/cn/schematic/place-reuse-block/place-reuse-block_20250709_101401.gif)

对于库中保存的复用模块，支持选中该模块的原理图/PCB，并直接放置到图页中。

![图 28](/storage/images/cn/schematic/place-reuse-block/place-reuse-block_20250709_114540.gif)
- 2、当前画布为原理图图页时，左侧-工程设计树，在已有模块符号的原理图层级右键，操作放置复用模块符号，则可将左侧树所选原理图以模块符号的形式复用到当前画布上。

![图 5](/storage/images/cn/reuse-block/place-reuse-block/place-reuse-block_20240621_172129.png)

- 注意：层次图不能产生循环嵌套
- 没有复用模块的原理图，想要以复用模块符号的形式复用时，可以先操作生成/更新复用模块符号。

- 3、当前画布为原理图图页时，左侧-工程设计树，在原理图图页层级右键，操作放置模块，则可将左侧树所选图页整个以模块的形式复用到当前画布上。

![图 7](/storage/images/cn/reuse-block/place-reuse-block/place-reuse-block_20240621_172130.png)

## 复用模块自动位号分配

嘉立创EDA具备复用模块自动位号分配功能，有效防止模块与原理图中元件位号的重复现象。

复用模块中实例页的元件位号如下：

![图 0](/storage/images/cn/schematic/cbb-auto-annotate-designator/cbb-auto-annotate-designator_20250311_163237.jpg)

当复用模块被导入至原理图中时，若原理图与模块内元件位号存在重复，系统将自动为元件分配新的位号，并确保其与模块内的位号相匹配。

![图 1](/storage/images/cn/schematic/cbb-auto-annotate-designator/cbb-auto-annotate-designator_20250311_163518.jpg)
