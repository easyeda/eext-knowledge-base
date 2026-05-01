# 放置圆弧

## 圆弧

面板提供了和PCB一样的3种绘制圆弧的工具，其中三点圆弧和两点圆弧只是绘制方式不同，属性分类名统称为两点圆弧。中心圆弧与两点圆弧的区别在于画布上调整规则不同，属性项都是一致的。

### 功能入口

**顶部菜单**

-   顶部菜单 - 放置 - 圆弧 - 三点圆弧
-   菜单快捷键： <kbd>P</kbd>+<kbd>A</kbd>+<kbd>A</kbd>
-   全局快捷键： <kbd>Alt</kbd>+<kbd>A</kbd>

![图 0](/storage/images/cn/panel/place-arc/place-arc_20240621_172123.png)

-   顶部菜单 - 放置 - 圆弧 - 中心圆弧
-   全局快捷键： <kbd>Alt</kbd>+<kbd>U</kbd>

![图 1](/storage/images/cn/panel/place-arc/place-arc_20240621_172124.png)

-   顶部菜单 - 放置 - 圆弧 - 两点圆弧

![图 2](/storage/images/cn/panel/place-arc/place-arc_20240621_172125.png)

**顶部工具栏**

-   直接单击顶部工具栏中圆弧图标，默认是三点圆弧的，也可以展开下拉选项切换选择其他方式的圆弧绘制。

![图 3](/storage/images/cn/panel/place-arc/place-arc_20240621_172126.png)

### 操作步骤

**三点圆弧**

-   功能入口处选择"三点圆弧"绘制方式后，光标右上角跟随显示"三点圆弧"类型图标。画布上任意位置第1次鼠标左键确定圆弧起点，移动光标，可见起点到待确定光标点之间有一透明显示的指示线。

![图 4](/storage/images/en/panel/place-arc/place-arc_20240621_172126.png)

-   再次鼠标左键画布任意位置确定圆弧终点，移动光标，显示过圆弧起点、终点以及待确定光标点的圆弧线。

![图 7](/storage/images/en/panel/place-arc/place-arc_20240621_172127.png)

-   第3次鼠标左键即可确定圆弧半径，完成本次圆弧的绘制，进入下一个三点圆弧的绘制。

![图 6](/storage/images/en/panel/place-arc/place-arc_20240621_172128.png)

**中心圆弧**

-   功能入口处选择"中心圆弧"绘制方式后，光标右上角跟随显示"中心圆弧"类型图标。画布上任意位置第1次鼠标左键确定圆弧的圆心，移动光标，将显示以圆心到待确定光标点的距离为半径的圆形指示线。

![图 8](/storage/images/en/panel/place-arc/place-arc_20240621_172129.png)

-   再次鼠标左键即可确定圆弧的起点和圆弧半径大小，显示圆弧起点到待确定光标点的圆弧线。

![图 9](/storage/images/en/panel/place-arc/place-arc_20240621_172130.png)

-   第3次鼠标左键即可确定圆弧终点，完成本次圆弧的绘制，进入下一个中心圆弧的绘制。

![图 10](/storage/images/en/panel/place-arc/place-arc_20240621_172131.png)

**两点圆弧**

-   功能入口处选择"两点圆弧"绘制方式后，光标右上角跟随显示"两点圆弧"类型图标。画布上任意位置第1次鼠标左键确定圆弧的起点，移动光标，将显示以圆弧起点到待确定光标点的距离为直径的圆弧。

![图 11](/storage/images/en/panel/place-arc/place-arc_20240621_172132.png)

-   第2次鼠标左键即可确定圆弧终点和圆弧半径大小，完成本次圆弧的绘制，进入下一个两点圆弧的绘制。

![图 12](/storage/images/en/panel/place-arc/place-arc_20240621_172133.png)

### 圆弧遮罩

面板中直接选中圆弧是8点控制模式，可以对圆弧进行拉伸、旋转、翻转等操作。

![图 24](/storage/images/en/panel/place-arc/place-arc_20240621_172134.png)

如果要在画布上调整圆弧的起点、终点或者圆弧半径，则需要双击圆弧进入其遮罩模式下。鼠标双击和按键Esc都可以退出圆弧遮罩。

![图 13](/storage/images/en/panel/place-arc/place-arc_20240621_172135.png)

左侧对象树中，可见处于某个圆弧遮罩下时，对应的图标会红色显示作为提示。

![图 25](/storage/images/cn/panel/place-arc/place-arc_20240621_172127.png)

### 圆弧控制点

**起点、终点**

-   **两点圆弧**的起点和终点处的控制点可以进行任意的拖拽。若移动圆弧起点，圆弧终点会保持，圆心会重新计算并实时更新。反之移动圆弧终点同理。
    ![图 14](/storage/images/cn/panel/place-arc/place-arc_20240621_172128.png)
    **按键Shift**移动圆弧的起点或终点，会保持圆弧的长短半径比，即始终为正圆弧或椭圆弧。
    ![图 15](/storage/images/en/panel/place-arc/place-arc_20240621_172138.png)
    ![图 16](/storage/images/en/panel/place-arc/place-arc_20240621_172139.png)

-   **中心圆弧**的起点和终点处的控制点只能在圆周上移动，改变的是圆弧的起始角度、结束角度，圆弧长短半径都是保持的。
    ![图 17](/storage/images/en/panel/place-arc/place-arc_20240621_172140.png)
    ![图 18](/storage/images/en/panel/place-arc/place-arc_20240621_172141.png)

-   **Ctrl切换类型**，在两点圆弧的起点、终点处按住Ctrl键进行拖动可以保持在圆周上移动，即临时切换为了中心圆弧模式。(反之同理)

**圆弧中点**

-   圆弧中点始终只能在其与圆心所在直线上移动。
    ![图 19](/storage/images/en/panel/place-arc/place-arc_20240621_172142.png)

-   直接拖动圆弧中点，椭圆弧会自动调整为正圆弧。
    ![图 20](/storage/images/en/panel/place-arc/place-arc_20240621_172143.png)

-   **按住Alt键**拖动圆弧中点，则会保持圆弧起点、终点位置，圆弧长短半径比不保持。
    ![图 21](/storage/images/en/panel/place-arc/place-arc_20240621_172144.png)

-   **按住Alt键+Shift键**拖动圆弧中点，则会保持圆弧的长短半径比，与中心缩放的效果相同。
    ![图 22](/storage/images/en/panel/place-arc/place-arc_20240621_172145.png)

**圆心**

-   拖动圆心，可以在圆弧遮罩模式下移动整一个圆弧。在非控制点的圆弧线位置也可以拖动整个圆弧。

### 圆弧填充

面板中圆弧的填充区域就是圆弧线与起点终点连线形成的闭合路径内的区域。

![图 23](/storage/images/en/panel/place-arc/place-arc_20240621_172146.png)

### 右侧属性

两点圆弧与中心圆弧可以通过右侧"圆弧类型"属性设置项去切换调整。

右侧属性面板中还可以调整圆弧控制点的坐标、长短半径和起始角度、结束角度等属性值。

![图 26](/storage/images/cn/panel/place-arc/place-arc_20231028_175354.png)
