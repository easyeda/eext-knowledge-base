# 封装管理器 {#封管}

## 封装管理器

批量修改封装，如果原理图中同样封装的器件很多时，那么批量修改封装将大大减少你的工作量。在原理图界面打开封装管理器

**操作入口：**

-   顶部菜单 - 工具 - 封装管理器

![图 145](/storage/images/cn/schematic/tools-footprint-manager/tools-footprint-manager_20240621_172124.png)

或者选中元件后，在右边属性面板点击封装属性输入框

![图 146](/storage/images/cn/schematic/tools-footprint-manager/tools-footprint-manager_20240621_172125.png)

打开后可以看到在工程下所有器件的符号和封装，上边是符号，下边则是封装。

鼠标移动在右侧的引脚列表时，对应的相同编号的封装焊盘也会同时高亮，方便定位

![图 147](/storage/images/cn/schematic/tools-footprint-manager/tools-footprint-manager_20240621_172126.png)

符号和封装预览区域支持滚轮缩放显示。符号如果是多部件可以在顶部切换部件，封装支持切换单位，检查封装尺寸，放大预览，编辑封装(直接打开选中的封装)。

![图 148](/storage/images/cn/schematic/tools-footprint-manager/tools-footprint-manager_20240621_172127.png)

全屏预览封装和检查尺寸时：

![图 149](/storage/images/cn/schematic/tools-footprint-manager/tools-footprint-manager_20240621_172128.png)

在左侧选择要修改的元件，搜索或选择需要替换的封装，点击更新即可把最新的封装更新到原理图。

![图 150](/storage/images/cn/schematic/tools-footprint-manager/tools-footprint-manager_20240621_172129.png)

更新完成后中央消息提示。

![图 151](/storage/images/cn/schematic/tools-footprint-manager/tools-footprint-manager_20240621_172130.png)

**提示**：

-   当元件没有封装，或者符号的引脚编号和封装焊盘编号不匹配时，元件列表的信息列会报错，列出报错信息。
-   元件的引脚编号全部在封装焊盘编号匹配，否则无法转PCB或更新PCB。引脚数量可以比焊盘数量少。

## 小技巧

元件列表的表头支持右键调整列宽和自定义表头。

![图 0](/storage/images/cn/schematic/tools-footprint-manager/tools-footprint-manager_20240621_172131.png)
