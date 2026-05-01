# 批量复用

嘉立创EDA支持对复用模块进行批量复用，从而实现电路设计的简化，减少重复绘制电路的工作量。

**功能入口**：

在原理图中，单击复用模块后，右侧属性栏将显示批量复用选项。

![图 0](/storage/images/cn/reuse-block/batch-reuse/batch-reuse_20250307_094523.jpg)

## 使用方法

批量复用功能提供两个输入框，用户可以在其中输入大于0的整数。这两个输入框之间的数字定义了复用次数。例如，输入“1 - 3”表示复用3次，系统将生成编号为1、2、3的三个模块图页。

![图 1](/storage/images/cn/reuse-block/batch-reuse/batch-reuse_20250307_095052.jpg)

在原理图中，右键单击复用模块并选择 `展开` 选项，以打开复用模块的子原理图。

![图 2](/storage/images/cn/reuse-block/batch-reuse/batch-reuse_20250307_095149.jpg)

在子原理图中可以观察到，批量复用后的复用模块生成了三个独立的模块图页。

![图 3](/storage/images/cn/reuse-block/batch-reuse/batch-reuse_20250307_095416.jpg)

批量复用功能根据复用模块的引脚类型，分为引脚共用和引脚复用两种类型，下面将以两个示例进行说明。

### 引脚共用

引脚共用功能允许在对复用模块进行批量复用时，使多个模块图页的相应引脚共享同一个外部连接，复用模块之间为短接关系。

首先，在创建好的复用模块中，右键单击并选择`编辑模块符号`。

![图 4](/storage/images/cn/reuse-block/batch-reuse/batch-reuse_20250307_095858.jpg)

在符号编辑页面中，为复用模块添加一个引脚，并保存编辑。

![图 5](/storage/images/cn/reuse-block/batch-reuse/batch-reuse_20250307_100216.gif)

回到原理图中，单击复用模块，并设置好批量复用次数。

![图 6](/storage/images/cn/reuse-block/batch-reuse/batch-reuse_20250307_100622.jpg)

开启批量复用功能后，单击复用模块的引脚。此时，在右侧属性栏中会出现`引脚复用`属性，支持下拉切换`共用引脚`和`复用引脚`。

![图 7](/storage/images/cn/reuse-block/batch-reuse/batch-reuse_20250307_101129.jpg)

在此步骤中，我们选择`共用引脚`，然后右键单击复用模块并选择`展开`。

![图 8](/storage/images/cn/reuse-block/batch-reuse/batch-reuse_20250307_101233.jpg)

进入复用模块子原理图时，系统会弹出确认窗口，选择`是`以同步更新网络端口。

![图 9](/storage/images/cn/reuse-block/batch-reuse/batch-reuse_20250307_101329.jpg)

在共用引脚的网络端口处放置一个电阻和一个连接器。

![图 10](/storage/images/cn/reuse-block/batch-reuse/batch-reuse_20250307_101632.jpg)

回到原理图中，在复用模块的共用引脚处放置一个开关。

![图 11](/storage/images/cn/reuse-block/batch-reuse/batch-reuse_20250307_101806.jpg)

点击`设计 - 更新/转换原理图到PCB`，可以在生成的 PCB 中查看复用模块与外部器件的关系。

![图 12](/storage/images/cn/reuse-block/batch-reuse/batch-reuse_20250307_102055.jpg)

可以观察到，复用模块被批量复用了三次，并且复用模块之间为短接关系，通过共用引脚连接到了同一个开关上。

![图 13](/storage/images/cn/reuse-block/batch-reuse/batch-reuse_20250307_102217.jpg)

### 引脚复用

引脚复用通常应用于总线设计，能够将批量复用的复用模块按顺序连接到外部电路，且各模块之间保持独立，无直接连接关系。

基于前一示例，将复用模块的共用引脚更改为复用引脚。

![图 14](/storage/images/cn/reuse-block/batch-reuse/batch-reuse_20250307_103851.jpg)

在原理图中，移除复用模块外部的开关，并放置一条总线，在总线上添加导线作为分支。

![图 16](/storage/images/cn/reuse-block/batch-reuse/batch-reuse_20250307_105631.jpg)

在每条总线分支上放置一个开关，然后右键单击复用模块并选择`展开`。

![图 18](/storage/images/cn/reuse-block/batch-reuse/batch-reuse_20250307_105950.jpg)

在展开的复用模块子原理图页中，选择`更新网络端口`。

![图 19](/storage/images/cn/reuse-block/batch-reuse/batch-reuse_20250307_110027.jpg)

在更新后的端口上放置电阻和连接器。

![图 20](/storage/images/cn/reuse-block/batch-reuse/batch-reuse_20250307_110101.jpg)

回到原理图，点击`设计 - 更新/转换原理图到PCB`，可以在生成的PCB中查看复用模块与外部器件的关系。

![图 21](/storage/images/cn/reuse-block/batch-reuse/batch-reuse_20250307_110222.jpg)

可以观察到，复用模块被批量复用了三次，且每个复用模块独立连接了外部器件，彼此之间没有连接关系。

![图 22](/storage/images/cn/reuse-block/batch-reuse/batch-reuse_20250307_110327.jpg)
