# 焊盘

嘉立创EDA支持放置游离的焊盘，方便制作简单的金属化定位孔。

**操作入口：**

-   顶部菜单栏 - 放置 - 焊盘
-   快捷键 <kbd>P</kbd>

![图 31](/storage/images/cn/pcb/place-pad/place-pad_20240621_172124.png)

非金属化定位孔可以通过放置圆形挖槽区域实现。

可以通过设置焊盘的属性来修改其的层和形状，还可以修改每一层的形状等。

![图 32](/storage/images/cn/pcb/place-pad/place-pad_20240621_172125.png)

游离焊盘和封装的焊盘右键支持多种功能，方便使用。

![图 33](/storage/images/cn/pcb/place-pad/place-pad_20240621_172126.png)

在属性面板时，可以通过鼠标拾取图元快速给焊盘分配网络。

![图 39](/storage/images/cn/pcb/place-pad/place-pad_20240621_172127.png)

在直接粘贴或者放置焊盘到有网络上的图元上时，会自动赋予该网络

## 焊盘形状

焊盘形状支持圆形，矩形，长园形，和多边形。多边形需要通过绘制异形焊盘生成。

矩形焊盘时，支持设置圆角半径实现圆角矩形焊盘。以短边作为100%基准，设置圆角半径比例。

![图 17](/storage/images/cn/pcb/place-pad/place-pad_20240621_172128.png)

不同焊盘形状在不同层时，可以设置不同的属性，比如多层焊盘的槽型孔焊盘。

![图 18](/storage/images/cn/pcb/place-pad/place-pad_20240621_172129.png)

## 热焊

可以直接调整此焊盘的热焊，选择为通用时，此焊盘跟随规则生成热焊，选择为自定义时，可以在此处直接修改焊盘连接方式为发散、直连或者无连接

![图 0](/storage/images/cn/pcb/place-pad/place-pad_20240621_172130.jpg)

## 选中透明度

支持在 顶部菜单 - 设置 - PCB/封装 - 显示 中设置焊盘、过孔的选中透明度。

![图 0](/storage/images/cn/pcb/place-pad/place-pad_20260106_145922.png)

透明度高：

![图 1](/storage/images/cn/pcb/place-pad/place-pad_20260106_150038.png)

透明度低：

![图 2](/storage/images/cn/pcb/place-pad/place-pad_20260106_150127.png)
