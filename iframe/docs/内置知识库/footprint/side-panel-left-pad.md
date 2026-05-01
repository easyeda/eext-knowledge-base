# 焊盘编辑器

封装焊盘编辑器是对封装图纸页内所有的焊盘进行编辑查看。双击列表可修改焊盘的属性。

![image-20211222103826881](/storage/images/cn/footprint/side-panel-left-pad/side-panel-left-pad_20240621_172123.png)

- **属性**：表示焊盘的编号

- **图层**：T是顶层的焊盘，B是底层的焊盘，M是通孔类型的焊盘。
- **中心X**：表示焊盘在封装页面的X坐标值。

- **中心Y**：表示焊盘在封装页面的Y坐标值。

- **角度**：可设置焊盘的角度。

嘉立创EDA支持对焊盘封装长度进行设置。

功能入口：

- 入口1：选中焊盘对象后，在右侧属性面板的`引脚长度`栏中进行设置。

![图 0](/storage/images/cn/footprint/side-panel-left-pad/side-panel-left-pad_20250401_150656.jpg)

在焊盘属性面板中新增引脚延迟属性栏，支持编辑焊盘的引脚长度。

- 入口2：左侧库设计面板 - 焊盘 - 引脚长度

库设计的焊盘表格中新增引脚长度列表，支持在表格中编辑引脚长度。

![图 1](/storage/images/cn/footprint/side-panel-left-pad/side-panel-left-pad_20250401_150907.jpg)

编辑后的引脚属性,可在 PCB 中选中焊盘对象后，于右侧属性栏中查看已编辑的引脚长度。

![图 2](/storage/images/cn/footprint/side-panel-left-pad/side-panel-left-pad_20250401_151209.jpg)
