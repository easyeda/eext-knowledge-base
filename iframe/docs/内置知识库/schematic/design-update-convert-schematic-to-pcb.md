# 更新PCB/转换原理图到PCB

当你完成了原理图设计，如何开始PBC的设计呢？可以点击 **顶部菜单 > 设计 > 原理图转PCB** 即可将原理图中的新增内容或者删改导入到PCB中

![image-20210518144840102](/storage/images/cn/schematic/design-update-convert-schematic-to-pcb/design-update-convert-schematic-to-pcb_20240621_172124.png)

**注意**：要从原理图更新至PCB里，原理图和PCB都必须在同一个板子下。

原理图转PCB的时候，会根据原理图的设计规则先检测一遍，然后满足转PCB的条件后再转换。

如果原理图没有在一个板子下，支持自动创建板子或选择PCB并创建板子。
![图 0](/storage/images/cn/schematic/design-update-convert-schematic-to-pcb/design-update-convert-schematic-to-pcb_20240930_120905.png)

## 校验封装

点击 “**原理图转PCB**” 后，如果编辑器检测到元件与封装的对应信息异常时，会弹出错误对话框，并且转换动作不会继续进行。你需要在封装管理器修正错误。
因为嘉立创EDA指定封装的时候会将封装的唯一ID记录在符号库及原理图里面，所以报错信息对应的情况有：

-   有封装名，但是未通过封装管理器指定过封装的
-   符号库引脚编号名称与指定的封装焊盘编号名称不一致的
-   符号库引脚编号数量大于指定的封装焊盘数量
-   封装为空未指定封装的

## 确认导入信息

如果原理图没有问题，成功导入到了PCB。会出现如下图所示的弹窗。

![图 1](/storage/images/cn/pcb/design-import-changes-from-schematic/design-import-changes-from-schematic_20240621_172125.jpg)

弹窗中默认勾选全部的变更，如果你不需要某一些变更，可以在左侧取消勾选

![图 3](/storage/images/cn/schematic/design-update-convert-schematic-to-pcb/design-update-convert-schematic-to-pcb_20240621_172125.jpg)

还可以设置不同的分组和排序，以及对内容进行过滤
![图 5](/storage/images/cn/schematic/design-update-convert-schematic-to-pcb/design-update-convert-schematic-to-pcb_20240621_172126.jpg)

你也可以将此窗口展示的内容导出为一个表格
![图 7](/storage/images/cn/schematic/design-update-convert-schematic-to-pcb/design-update-convert-schematic-to-pcb_20240621_172127.jpg)

点击应用修改即可将勾选内容修改到PCB中
![图 9](/storage/images/cn/schematic/design-update-convert-schematic-to-pcb/design-update-convert-schematic-to-pcb_20240621_172128.jpg)

## 生成PCB

转换成功后会如下图所示，自动将PCB封装按照顺序排列成一排，蓝色的飞线表示两个焊盘之间需要进行布线连接，属于同一网络。

![image-20201204105032157](/storage/images/en/schematic/design-update-convert-schematic-to-pcb/design-update-convert-schematic-to-pcb_20240621_172128.png)

嘉立创EDA会优先根据原理图的元件位置，大致自动摆放好元件在 PCB 的位置，减少元件归类分组的操作，方便快速布局。

![图 4](/storage/images/cn/schematic/design-update-convert-schematic-to-pcb/design-update-convert-schematic-to-pcb_20240621_172129.png)

## 更新PCB

当你已经完成转PCB动作，但是又再次修改了原理图，这时你无需转一个新的PCB，只需点击“更新PCB”即可将变更更新至现有已保存的PCB文件。

也可以在PCB中直接导入变更：顶部菜单 - 设计 - 导入修改信息。

![image-20210518144920586](/storage/images/cn/schematic/design-update-convert-schematic-to-pcb/design-update-convert-schematic-to-pcb_20240621_172130.png)

-   因为原理图网络名是计算后生成，当你修改了原理图后部分网络如果出现变更，那么更新至PCB后，原网络已经布好的走线会保持不变。

-   更新焊盘网络并把焊盘相关的导线会跟随焊盘的网络更新，可能会出现导线网络变化的情况，如果不符合期望，需要手动将导线旧的网络名改为新的网络名！

-   大部分原理图更新网络后都可以更新到PCB。但如果原理图有增删器件，PCB的导线网络需要手动修改。
