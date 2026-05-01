# 尺寸

## 尺寸

面板也提供了与PCB相同的尺寸绘制功能，可以选择测量长度尺寸或者角度尺寸或者半径尺寸，是作为独立的辅助图元存在的，实际生产时不生效的。

### 功能入口

**顶部菜单**

-   顶部菜单 - 放置 - 尺寸 - 长度
-   快捷键：<kbd>Alt</kbd>+<kbd>N</Kbd>

![图 0](/storage/images/cn/panel/place-dimension/place-dimension_20240621_172123.png)

-   顶部菜单 - 放置 - 尺寸 - 角度
-   菜单快捷键：<kbd>P</kbd>+<kbd>D</Kbd>+<kbd>A</Kbd>

![图 1](/storage/images/cn/panel/place-dimension/place-dimension_20240621_172124.png)

-   顶部菜单 - 放置 - 尺寸 - 半径

![图 2](/storage/images/cn/panel/place-dimension/place-dimension_20240621_172125.png)

**顶部工具栏**

-   直接单击尺寸图标，或展开下拉选项切换选择尺寸绘制类型

![图 3](/storage/images/cn/panel/place-dimension/place-dimension_20240621_172126.png)

### 操作步骤

**长度**

-   从功能入口操作进入长度尺寸绘制模式，画布上鼠标左键任意位置即可确定起始测量点。移动光标，显示一待确定的长度尺寸

![图 4](/storage/images/en/panel/place-dimension/place-dimension_20240621_172126.png)

-   画布上任意位置再次鼠标左键，确定长度尺寸的终点。显示两点间的尺寸，移动光标会切换测量2点的水平或垂直或直线距离。

![图 6](/storage/images/en/panel/place-dimension/place-dimension_20240621_172127.png)

-   确定好长度尺寸的测量方向和样式位置后，鼠标左键即可完成本次长度尺寸的绘制，进入下一个长度尺寸的绘制。

![图 7](/storage/images/en/panel/place-dimension/place-dimension_20240621_172128.png)

**角度**

-   从功能入口操作进入角度尺寸绘制模式，画布上第1次鼠标左键任意位置即可确定**角点**位置。移动光标，显示待确定角边长，继续第2次鼠标左键即可确定角边长。

![图 8](/storage/images/cn/panel/place-dimension/place-dimension_20240621_172127.png)

-   移动鼠标，将显示待确定的角度尺寸，角度值会随着鼠标移动实时测量更新。

![图 9](/storage/images/en/panel/place-dimension/place-dimension_20240621_172130.png)

-   继续第3次鼠标左键后即可确定另一角边位置，完成本次角度尺寸绘制，进入下一个角度尺寸绘制。

![图 10](/storage/images/en/panel/place-dimension/place-dimension_20240621_172131.png)

-   角度最大值为180°，超过则显示测量反向的角度

![图 11](/storage/images/en/panel/place-dimension/place-dimension_20240621_172132.png)

**半径**

-   半径尺寸的的绘制需要依赖于圆心，面板中的圆、圆弧都是可以进行半径测量的。
    ![图 12](/storage/images/en/panel/place-dimension/place-dimension_20240621_172133.png)

-   从功能入口操作进入半径尺寸绘制模式，光标移动到无填充的圆周上或填充圆内，鼠标左键后显示实际测得的半径尺寸

![图 13](/storage/images/en/panel/place-dimension/place-dimension_20240621_172134.png)

-   可以在圆周上任意移动半径尺寸，调整到合适位置后继续鼠标左键即可完成本次半径尺寸的绘制，进入下一个半径尺寸的绘制。

![图 14](/storage/images/en/panel/place-dimension/place-dimension_20240621_172135.png)

-   正圆的长短半径一致，椭圆的长短半径不一致，半径尺寸测量会将被测量对象的长半径和短半径都测量并显示出来。

-   圆弧的半径尺寸测量与圆的测量方法一致。

### 规则约定

**整体移动**

-   选中尺寸，均无8点控制框，仅显示选中色高亮，光标移动到非尺寸控制点的位置上，显示拖动光标样式，可移动整一个尺寸。

![图 15](/storage/images/en/panel/place-dimension/place-dimension_20240621_172136.png)

-   也可不选中直接拖动尺寸图元，调整尺寸的位置。

**控制点 - 调整尺寸**

-   **长度尺寸**，提供了3个控制点，分别为长度尺寸的两个测量基准点以及尺寸线中间的数值文本控制点

![图 16](/storage/images/en/panel/place-dimension/place-dimension_20240621_172137.png)

选中后，按住鼠标左键移动控制点，可以调整长度尺寸的测量基准点并实时更新长度值，同样可调整数值文本的位置改变尺寸样式，不会移动整一个长度尺寸。

-   **角度尺寸**，提供了4个控制点，分别为角度尺寸的3个测量基准点(即角点和2个角边点)以及圆弧尺寸线上的数值文本控制点

![图 17](/storage/images/en/panel/place-dimension/place-dimension_20240621_172138.png)

选中后，按住鼠标左键移动控制点,可以调整角度尺寸的测量基准点并实时更新角度值，数值文本同样可以通过移动对应的控制点而调整到任意位置。

注意：一旦移动角点处的控制点，数值文本会自动调整回到圆弧尺寸线上。

-   **半径尺寸**，提供了3个控制点，分别为半径尺寸的测量基准点、尺寸线长度控制点和数值文本控制点

![图 18](/storage/images/en/panel/place-dimension/place-dimension_20240621_172139.png)

选中后，按住鼠标左键移动控制点，可以调整半径尺寸的控制点自由移动。测量基准点的位置决定了实际的测量对象。数值文本可自由移动，尺寸线长短可调。

注意：一旦半径尺寸的测量基准点移动脱离圆周或填充圆区域则数值置0。而拖动测量基准点到任意圆周上或填充圆内则会重新测量半径。

![图 19](/storage/images/en/panel/place-dimension/place-dimension_20240621_172140.png)

### 右键菜单

尺寸的右键菜单中有旋转、翻转，即尺寸是可以进行任意角度的旋转或上下左右翻转的。
尺寸翻转或旋转都是会保持固定样式的，半径尺寸脱离被测量对象时会数值置0。

![图 24](/storage/images/cn/panel/place-dimension/place-dimension_20240621_172128.png)

### 属性

**测量基准点坐标&尺寸数值**

-   长度尺寸的右侧属性面板中，不仅可以调整其2个测量基准点的坐标值，还可以调整长度尺寸数值。

![图 25](/storage/images/cn/panel/place-dimension/place-dimension_20240621_172129.png)

-   角度尺寸的右侧属性面板中，不仅可以调整其3个测量基准点的坐标值，还可以调整角度尺寸数值。

![图 26](/storage/images/cn/panel/place-dimension/place-dimension_20240621_172130.png)

-   半径尺寸的右侧属性面板中，起点X/Y控制的是测量基准点的坐标，而调整终点X/Y则会改变半径尺寸线的长短。长短半径尺寸数值仅置灰显示不支持编辑。

![图 27](/storage/images/cn/panel/place-dimension/place-dimension_20240621_172131.png)

**主题设置**

-   设置 - 面板/面板库 - 主题 - 尺寸

![图 28](/storage/images/cn/panel/place-dimension/place-dimension_20240621_172132.png)

默认尺寸主题色为#333333，支持自定义调整。
