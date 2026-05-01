# 智能尺寸

## 智能尺寸

面板图元之间的距离可以通过智能尺寸进行约束或者标注，是作为辅助图元临时显示在画布上的，实际生产时智能尺寸是不生效的。
约束类型的智能尺寸可以在画布上修改约束值，始终会保持两图元之间的间距值。标注类型的智能尺寸则是实时测量图元之间的间距值，被标注的图元可以自由移动，而对应的标注值同步变化。

### 功能入口

**顶部菜单**

提供了3种绘制智能尺寸的模式，**智能尺寸**可以绘制任意角度的尺寸，而**水平尺寸**绘制出来的只会是水平方向的智能尺寸，同理**垂直尺寸**只会绘制垂直方向的智能尺寸

-   顶部菜单 - 放置 - 智能尺寸 - 智能尺寸
-   快捷键：<kbd>Alt</kbd>+<kbd>Z</kbd>

![图 0](/storage/images/cn/panel/place-smart-dimension/place-smart-dimension_20240621_172123.png)

-   顶部菜单 - 放置 - 智能尺寸 - 水平尺寸
-   快捷键：<kbd>Alt</kbd>+<kbd>X</kbd>

![图 1](/storage/images/cn/panel/place-smart-dimension/place-smart-dimension_20240621_172124.png)

-   顶部菜单 - 放置 - 智能尺寸 - 垂直尺寸
-   快捷键：<kbd>Alt</kbd>+<kbd>Y</kbd>

![图 2](/storage/images/cn/panel/place-smart-dimension/place-smart-dimension_20240621_172125.png)

**顶部工具栏**

-   直接单击智能尺寸图标，或展开下拉选项切换选择绘制模式

![图 3](/storage/images/cn/panel/place-smart-dimension/place-smart-dimension_20240621_172126.png)

### 操作步骤

-   从功能入口操作进入智能尺寸绘制模式，然后移动到图元上选取测量点，完成两个图元的测量点选取后将显示两点间的尺寸，可移动调整尺寸方向和位置。

![图 4](/storage/images/en/panel/place-smart-dimension/place-smart-dimension_20240621_172126.png)

-   调整好尺寸位置方向后鼠标左键后，显示智能尺寸弹窗。
    在弹窗中，可编辑该智能尺寸的名称，显示有该智能尺寸关联对象信息，可选该智能尺寸类型为约束或标注，约束类型的尺寸数值可编辑，标注类型的的尺寸数值不可编辑。

![图 25](/storage/images/cn/panel/place-smart-dimension/place-smart-dimension_20240621_172127.png)

-   完成智能尺寸类型的选择并确定完尺寸数值后，单击弹窗中的放置按钮即可完成该智能尺寸的绘制，并进入下一个智能尺寸的待绘制状态。

![图 6](/storage/images/en/panel/place-smart-dimension/place-smart-dimension_20240621_172128.png)

### 规则约定

**可选测量点**

-   形状、椭圆弧、椭圆、矩形、文本、图片这些类型的图元都提供了5个可选测量点，可选测量点待选中状态下为空心正方形，选中后为正方形实心填充。

![图 14](/storage/images/cn/panel/place-smart-dimension/place-smart-dimension_20240621_172128.png)

-   目前仅支持图元间的距离约束或标注，一个图元上只能选取1个测量点，即选中图元上的1个测量点后其余4个将隐藏。分别在两个图元上各选取1个测量点后将显示智能尺寸实际测的两点间的距离尺寸。

![图 15](/storage/images/cn/panel/place-smart-dimension/place-smart-dimension_20240621_172129.png)

**约束-智能尺寸**

-   约束类型的智能尺寸在画布上可通过双击数值，弹出尺寸数值修改弹窗，修改数值后单击弹窗中的确定按钮即可完成约束值得修改。

![图 26](/storage/images/cn/panel/place-smart-dimension/place-smart-dimension_20240621_172130.png)

-   选中智能尺寸，展开右侧属性面板，同样可以调整约束值的大小

![图 27](/storage/images/cn/panel/place-smart-dimension/place-smart-dimension_20240621_172131.png)

-   被约束的两点之间的间距值是固定的。为满足约束关系，移动其中一个约束对象，通过约束智能尺寸也会移动到另一个约束对象。
    ![图 9](/storage/images/cn/panel/place-smart-dimension/place-smart-dimension_20240621_172132.png)

**标注-智能尺寸**

-   标注类型的智能尺寸的尺寸数值始终都是实时测量仅作为显示的，初始创建智能尺寸弹窗中以及右侧属性面板中都是置灰不可编辑。

![图 28](/storage/images/cn/panel/place-smart-dimension/place-smart-dimension_20240621_172133.png)
![图 29](/storage/images/cn/panel/place-smart-dimension/place-smart-dimension_20240621_172134.png)

-   被标注的两点之间的间距值是可调的。移动其中一个标注对象，另一个标注对象会保持坐标值，标注智能尺寸数值实时更新。

![图 12](/storage/images/en/panel/place-smart-dimension/place-smart-dimension_20240621_172135.png)

**约束关联对象锁定**

-   约束智能尺寸的两个关联对象均为锁定状态时，画布上双击约束值，短提示约束对象均锁定，请先解锁。即不能修改两约束关联对象均锁定的约束条件。
    ![图 20](/storage/images/cn/panel/place-smart-dimension/place-smart-dimension_20240621_172135.png)

-   约束智能尺寸的关联对象仅其中1个锁定状态，画布上双击约束值或右侧属性面板中修改约束值后都将移动未锁定的那个对象以满足新的约束条件。
    ![图 21](/storage/images/cn/panel/place-smart-dimension/place-smart-dimension_20240621_172136.png)

-   多个对象之间存在约束尺寸，存在锁定对象，根据以上规则。
    例如下图场景，两个智能尺寸的约束值都不支持修改。
    ![图 22](/storage/images/cn/panel/place-smart-dimension/place-smart-dimension_20240621_172137.png)

-   不能通过约束尺寸调整组合内两对象的间距值，只能保持组合整体移动。双击约束关联对象在同一个组合内的约束值，画布短提示此变更将导致过定义或无解，不支持修改。

-   右侧图层设置不可选，可以通过约束尺寸移动到不可选层的对象。
    ![图 23](/storage/images/cn/panel/place-smart-dimension/place-smart-dimension_20240621_172138.png)

-   未锁定的约束关联对象允许在保持约束条件情况下移动。
    鼠标拖动不容易保证只是水平/垂直方向的移动，影响到约束条件时，会画布中央短提示约束关联对象当前为锁定状态，请先解锁。

![图 30](/storage/images/cn/panel/place-smart-dimension/place-smart-dimension_20240621_172139.png)

**尺寸类型**

-   智能尺寸有水平尺寸、垂直尺寸和尺寸三种类型。水平尺寸就是测量水平方向的间距，垂直尺寸则是测量垂直方向的间距，而尺寸是测量除水平和垂直方向的其他任意角度方向上的间距。

![图 16](/storage/images/en/panel/place-smart-dimension/place-smart-dimension_20240621_172141.png)

-   可通过**空格键**进行尺寸类型的锁定解锁。
    当被测量的两图元存在3种方向上的间距，通过智能尺寸模式测量过程中默认是解锁状态，按空格键1次则会锁定为当前尺寸类型，后面任意移动都不会切换测量方向，再次按空格键则会解锁。

![图 17](/storage/images/en/panel/place-smart-dimension/place-smart-dimension_20240621_172142.png)

**主题设置**

-   设置 - 面板/面板库 - 主题 - 约束尺寸
-   设置 - 面板/面板库 - 主题 - 标注尺寸

![图 13](/storage/images/cn/panel/place-smart-dimension/place-smart-dimension_20240621_172140.png)

默认的约束尺寸与标注尺寸主题色不同，支持自定义调整。

### 右键菜单

智能尺寸的右键菜单中有适应选中、删除、隐藏和属性菜单项，即在画布上选中智能尺寸可以对其进行这些操作。

![图 18](/storage/images/cn/panel/place-smart-dimension/place-smart-dimension_20240621_172141.png)

考虑到智能尺寸作为特殊的辅助图元，不支持剪切、复制和锁定等操作。

### 左侧面板-对象

在左侧对象面板中，同样只提供了隐藏显示的设置，没有像其他图元一样提供锁定解锁的设置。

![图 33](/storage/images/cn/panel/place-smart-dimension/place-smart-dimension_20240621_172142.png)
