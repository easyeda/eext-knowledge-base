# 复用模块

嘉立创EDA专业版支持复用模块功能。该高级功能可将已完成设计的工程封装为仅包含输入与输出引脚的模块，在无需关注其内部实现细节的前提下，实现快速复用，有助于简化复杂电路设计、减少重复性工作，并推动电路设计的标准化。

## 新建复用模块

**操作入口**：

- 顶部菜单栏 - 文件 - 新建 - 复用模块

![图 0](/storage/images/cn/schematic/place-reuse-block/place-reuse-block_20250708_151633.png)

进入新建弹窗后，输入复用模块名称并点击“保存”，即可完成新建操作。

![图 1](/storage/images/cn/schematic/place-reuse-block/place-reuse-block_20250708_152926.png)

**使用案例**：

打开新建的复用模块后，可以观察到图页中包含模块符号、模块原理图以及模块 PCB。

![图 2](/storage/images/cn/schematic/place-reuse-block/place-reuse-block_20250708_153450.png)

复用模块的核心用途是通过端口引出原理图中的网络信号，作为模块的输入输出引脚，同时支持PCB布局和走线的复用。以下以一个 Type-C 电路为例进行说明。

首先，完成拟作为模块使用的 Type-C 电路原理图设计。

![图 4](/storage/images/cn/schematic/place-reuse-block/place-reuse-block_20250709_093530.png)

随后，将原理图中的输入输出部分替换为端口，保持网络名不变；多个相同网络名时，只需引出一个端口即可。

![图 5](/storage/images/cn/schematic/place-reuse-block/place-reuse-block_20250709_094248.png)

完成端口放置后，点击“设计”菜单中的 `生成/更新模块符号`，也可通过工具栏快捷按钮执行此操作。

![图 17](/storage/images/cn/schematic/place-reuse-block/place-reuse-block_20250709_101809.png)

此时将会跳转到复用模块符号编辑页，并在弹窗中选择更新引脚。

![图 7](/storage/images/cn/schematic/place-reuse-block/place-reuse-block_20250709_094540.png)

更新完成后，原理图上的端口信息将同步至模块符号中。

![图 8](/storage/images/cn/schematic/place-reuse-block/place-reuse-block_20250709_094759.png)

**请确保模块符号的引脚名称与类型与原理图中的端口保持一致。**

![图 9](/storage/images/cn/schematic/place-reuse-block/place-reuse-block_20250709_095003.png)

进一步完善模块 PCB 的设计，后续放置模块后也可以复用 PCB 的布局与布线。

![图 10](/storage/images/cn/schematic/place-reuse-block/place-reuse-block_20250709_095407.png)

## 放置复用模块

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

## 修改复用模块

**修改工程内复用模块**：

右键画布上的复用模块，选择 `展开` 后，能够查看和修改工程内的模块原理图。

![图 20](/storage/images/cn/schematic/place-reuse-block/place-reuse-block_20250709_105349.gif)

通过右键点击底部的复用模块标签，可以快速定位并返回至相应的复用模块位置。

![图 21](/storage/images/cn/schematic/place-reuse-block/place-reuse-block_20250709_110131.gif)

右键画布上的复用模块，选择 `编辑模块符号` 后，可对工程内的模块符号进行编辑操作。

![图 22](/storage/images/cn/schematic/place-reuse-block/place-reuse-block_20250709_110332.gif)

支持在 左侧列表-库设计-引脚 中实现对复用模块符号引脚信息的快捷编辑功能。支持修改的信息包括：引脚编号、名称、类型、方向以及引脚形状。

![图 23](/storage/images/cn/schematic/place-reuse-block/place-reuse-block_20250709_110546.png)

**以上修改仅作用于当前工程文件，不会影响到库中存储的原始复用模块内容。**

**修改库中复用模块**：

在 底部库-复用模块 中，右键点击某一复用模块的工程，可以选择打开该模块工程和修改相关信息。

![图 24](/storage/images/cn/schematic/place-reuse-block/place-reuse-block_20250709_110952.png)

若右键点击复用模块的原理图，则可对其进行符号与原理图内容的编辑操作。此类修改将直接更新至库中的复用模块。

![图 25](/storage/images/cn/schematic/place-reuse-block/place-reuse-block_20250709_111104.png)

同样地，右键点击复用模块的 PCB ，可进入模块 PCB 的编辑界面。此类修改将直接更新至库中的复用模块。

![图 26](/storage/images/cn/schematic/place-reuse-block/place-reuse-block_20250709_111309.png)
