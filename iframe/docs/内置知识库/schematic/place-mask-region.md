# 屏蔽区域

嘉立创EDA提供屏蔽区域功能，该功能确保屏蔽区域内的图元不会参与网表生成、BOM 输出以及 PCB 转换。

**功能入口**：

入口1：顶部菜单栏 - 放置 - 屏蔽区域

![图 0](/storage/images/cn/schematic/mask-region/mask-region_20250304_152546.jpg)

入口2:顶部工具栏

![图 1](/storage/images/cn/schematic/mask-region/mask-region_20250304_152656.jpg)

## 使用方法

点击“屏蔽区域”选项，左键单击绘图区设置端点，移动鼠标预览矩形区域，再次左键单击结束绘制并选中矩形区域。

确认起始点后，按住Shift键可绘制正方形。待确认起始点时，按Esc或右键单击退出绘制模式，恢复选择模式。

![图 2](/storage/images/cn/schematic/mask-region/mask-region_20250304_153719.jpg)

原理图中被屏蔽区域完全覆盖的图元将不会参与网表生成、BOM输出及PCB转换。

![图 3](/storage/images/cn/schematic/mask-region/mask-region_20250304_154123.jpg)

屏蔽区域支持展开和收起。区域收起后，屏蔽功能即被取消。

![图 4](/storage/images/cn/schematic/mask-region/mask-region_20250304_154425.gif)

屏蔽后的图元在左侧文档树的网络和元件列表中也会同步变化。

![图 6](/storage/images/cn/schematic/mask-region/mask-region_20250304_160428.gif)

支持屏蔽器件的部分引脚。

![图 5](/storage/images/cn/schematic/mask-region/mask-region_20250304_155622.jpg)

支持屏蔽复用模块。

![图 7](/storage/images/cn/schematic/mask-region/mask-region_20250304_162354.jpg)

封装管理器、器件管理器、器件标准化、IPC2552、元件列表不受屏蔽区域影响。
