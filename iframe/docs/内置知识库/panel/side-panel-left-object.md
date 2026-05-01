# 左侧面板-对象

## 左侧面板-对象

-   左侧面板的对象选项卡可以查看当前面板文件里面的全部对象，点击可以选中。
    ![图 10](/storage/images/cn/panel/side-panel-left-object/side-panel-left-object_20240621_172124.png)

### 选中

**Ctrl、Shift多选**

支持左侧对象树中进行Ctrl、Shift多选。

![图 3](/storage/images/cn/panel/side-panel-left-object/side-panel-left-object_20240621_172125.png)

保持按键Ctrl，可以逐次单击对象进行不连续的多选。在已选中的对象上继续单击会取消选中。

![图 19](/storage/images/cn/panel/side-panel-left-object/side-panel-left-object_20240621_172126.gif)

保持按键Shift，选中第一个对象确定为起始位置，后面继续单击其他对象会确定结束位置，这之间的对象均会被选中，即进行连续的多选。
只要没有取消按键Shift，可以继续任意单击对象改变结束位置。

![图 20](/storage/images/cn/panel/side-panel-left-object/side-panel-left-object_20240621_172127.gif)

注意：无法跨组合同时选中多对象。
例如下图场景，先选中的非组合内的对象椭圆10，按住Ctrl/Shift在椭圆5上单击不会增加选中，因为椭圆5在组合1内，而椭圆10不在组合1内。
![图 18](/storage/images/cn/panel/side-panel-left-object/side-panel-left-object_20240621_172128.png)

**单击、双击**

-   左侧单击选中某个对象，画布上显示该对象选中高亮，并且会移动画布使得该对象居中显示在画布上。
    （不会自动缩放画布，只会定位移动画布）
    ![图 8](/storage/images/cn/panel/side-panel-left-object/side-panel-left-object_20240621_172129.png)

-   左侧双击某个对象，画布会自动缩放（使对象合适大小显示），并且移动画布使得该对象居中显示在画布上。
    ![图 9](/storage/images/cn/panel/side-panel-left-object/side-panel-left-object_20240621_172130.png)

**方向键改变悬浮项**

-   支持左侧对象树中上下左右方向键改变悬浮项，回车改变选中项。
    左侧对象树中悬浮高亮项与画布上的元素悬浮高亮对应。

    ![图 11](/storage/images/cn/panel/side-panel-left-object/side-panel-left-object_20240621_172131.gif)

    ![图 12](/storage/images/cn/panel/side-panel-left-object/side-panel-left-object_20240621_172132.png)

### 显示

**对象ID名**

-   左侧对象树中的对象ID名的构成：图元属性类型名+序号：图元名称

    ![图 13](/storage/images/cn/panel/side-panel-left-object/side-panel-left-object_20240621_172133.png)

**类型图标**

-   图元ID名前通常都黑色显示对应类型的图标

    ![图 14](/storage/images/cn/panel/side-panel-left-object/side-panel-left-object_20240621_172134.png)

-   当圆弧/形状/组合类型图标红色显示，则代表当前画布正处于对应的圆弧/形状/组合遮罩下。

    ![图 16](/storage/images/cn/panel/side-panel-left-object/side-panel-left-object_20240621_172135.png)

    ![图 15](/storage/images/cn/panel/side-panel-left-object/side-panel-left-object_20240621_172136.png)

    ![图 17](/storage/images/cn/panel/side-panel-left-object/side-panel-left-object_20240621_172137.png)

### 隐藏和锁定

-   点击眼睛图标可以设置图元的隐藏属性，点击锁图标可以设置图元的锁定属性。
-   ![图 1](/storage/images/cn/panel/side-panel-left-object/side-panel-left-object_20240621_172138.png)

    红色闭眼图标代表对应图元当前画布上隐藏不可见，黑色眼睛图标则代表在画布上显示可见状态。
    红色锁头图标代表对应图元当前画布上锁定状态，黑色开锁图标则代表解锁状态。

**批量隐藏**

操作组合、图层、过滤类型的隐藏都是批量隐藏。

-   操作组合隐藏，其所包含的对象都会被批量隐藏，画布上均不可见。
    对象树中显示，组合所包含的对象原本是隐藏的还是隐藏图标只是加上了透明度，原本是显示的也还是显示图标也加上了透明度。

    ![图 21](/storage/images/cn/panel/side-panel-left-object/side-panel-left-object_20240621_172139.png)

-   左侧对象树中，点击带有透明度的隐藏显示图标，会弹窗询问是否先取消其所属组合的隐藏状态，点击确认后才能切换设置组合内对象的隐藏显示。

    ![图 22](/storage/images/cn/panel/side-panel-left-object/side-panel-left-object_20240621_172140.png)

-   操作图层隐藏，同理会将该图层内所有的对象都批量隐藏。

    ![图 23](/storage/images/cn/panel/side-panel-left-object/side-panel-left-object_20240621_172141.png)

-   左侧对象树中，点击带有透明度的隐藏显示图标，会弹窗询问是否先取消其所属图层的隐藏状态，点击确认后才能切换设置该图层内对象的隐藏显示。

    ![图 24](/storage/images/cn/panel/side-panel-left-object/side-panel-left-object_20240621_172142.png)

-   操作过滤类型隐藏，同理会将该过滤类型所包含的对象都批量隐藏。

    ![图 25](/storage/images/cn/panel/side-panel-left-object/side-panel-left-object_20240621_172143.png)

-   左侧对象树中，点击带有透明度的隐藏显示图标，会弹窗询问是否先取消其所属过滤类型的隐藏状态，点击确认后才能切换设置该过滤类型包含的对象的隐藏显示。

    ![图 27](/storage/images/cn/panel/side-panel-left-object/side-panel-left-object_20240621_172144.png)

**解锁全部**

-   顶部菜单 - 编辑 - 解锁全部
    将重置面板的所有锁定为解锁。

    ![图 28](/storage/images/cn/panel/side-panel-left-object/side-panel-left-object_20240621_172145.png)

**显示全部**

-   顶部菜单 - 编辑 - 显示全部
    将重置面板的所有隐藏为显示。

    ![图 29](/storage/images/cn/panel/side-panel-left-object/side-panel-left-object_20240621_172146.png)

### 查找和过滤

-   支持查找和过滤。支持在结果中切换。
    ![图 2](/storage/images/cn/panel/side-panel-left-object/side-panel-left-object_20240621_172147.png)

### 右键菜单

在对象列表的右键菜单可以方便进行层级切换操作。
注意：是切换同一图层内的对象4层级顺序。

![图 4](/storage/images/cn/panel/side-panel-left-object/side-panel-left-object_20240621_172148.png)

还可以操作右键删除图元，右键刷新左侧对象树列表。
