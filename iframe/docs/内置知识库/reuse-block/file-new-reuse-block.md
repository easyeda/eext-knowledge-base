# 复用模块

嘉立创EDA专业版支持复用模块功能。该高级功能可将已完成设计的工程封装为仅包含输入与输出引脚的模块，在无需关注其内部实现细节的前提下，实现快速复用，有助于简化复杂电路设计、减少重复性工作，并推动电路设计的标准化。

## 创建复用模块

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
