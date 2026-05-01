# 辅助

## 辅助

辅助线、辅助点是用于辅助其他普通图元进行**对齐**、**吸附**的，仅临时存在于画布上，实际生产中辅助绘制层的图元都是不生效的。

### 功能入口

**顶部菜单**

辅助线的绘制提供了3种菜单选项，其中十字辅助线就是同时绘制1条水平辅助线和1条垂直辅助线，放置到画布上之后是相互独立的。

-   顶部菜单 - 放置 - 辅助 - 水平辅助线
-   菜单快捷键：<kbd>P</kbd>+<kbd>A</kbd>+<kbd>X</kbd>
    ![图 0](/storage/images/cn/panel/place-auxiliary/place-auxiliary_20240621_172123.png)

-   顶部菜单 - 放置 - 辅助 - 垂直辅助线
-   菜单快捷键：<kbd>P</kbd>+<kbd>A</kbd>+<kbd>Y</kbd>
    ![图 1](/storage/images/cn/panel/place-auxiliary/place-auxiliary_20240621_172124.png)

-   顶部菜单 - 放置 - 辅助 - 十字辅助线
-   菜单快捷键：<kbd>P</kbd>+<kbd>A</kbd>+<kbd>C</kbd>
    ![图 2](/storage/images/cn/panel/place-auxiliary/place-auxiliary_20240621_172125.png)

-   顶部菜单 - 放置 - 辅助 - 辅助点
-   菜单快捷键：<kbd>P</kbd>+<kbd>A</kbd>+<kbd>P</kbd>
    ![图 21](/storage/images/cn/panel/place-auxiliary/place-auxiliary_20240621_172126.png)

**顶部工具栏**

-   直接单击顶部工具栏中辅助图标，默认是绘制十字辅助线的，也可以展开下拉选项切换选择放置其他类型的辅助图元。
    ![图 5](/storage/images/cn/panel/place-auxiliary/place-auxiliary_20240621_172127.png)

**标尺**

-   面板画布编辑区上边缘和左边缘的标尺区域也可以快速触发绘制辅助线。鼠标左键单击后，光标将跟随显示对应类型的辅助线处于待放置状态。
    ![图 6](/storage/images/cn/panel/place-auxiliary/place-auxiliary_20240621_172128.png)

-   也可以在标尺区域内按住左键拖出，松开左键后显示对应类型辅助线，处于待放置状态。

### 操作步骤

-   从功能入口操作进入辅助线或辅助点的绘制模式，光标右上角会显示对应类型的图标，光标上也会吸附对应类型的辅助图元，移动到画布上鼠标左键即可完成放置，鼠标右键会退出绘制状态。
    ![图 7](/storage/images/cn/panel/place-auxiliary/place-auxiliary_20240621_172129.png)

### 规则

-   辅助线、辅助点绘制完成后都保存在辅助绘制层，无法切换为其他层的。
    ![图 8](/storage/images/cn/panel/place-auxiliary/place-auxiliary_20240621_172130.png)

-   水平辅助线仅提供Y坐标，垂直辅助线仅提供X坐标，而辅助点提供XY坐标均提供
    ![图 20](/storage/images/cn/panel/place-auxiliary/place-auxiliary_20240621_172131.png)

-   辅助线、辅助点都是默认进行连续放置的。会保持上一个放置完成的辅助对象的选中，并进入下一个辅助对象的待放置状态。鼠标右键或按键Esc可以退出辅助绘制模式。
    ![图 9](/storage/images/en/panel/place-auxiliary/place-auxiliary_20240621_172131.png)

-   辅助图元移动待放置过程中，标尺区域内对应位置会显示其对应的坐标值。
    注意：辅助点选中状态下，不会在标尺区域内对应位置显示对应的坐标值
    ![图 10](/storage/images/en/panel/place-auxiliary/place-auxiliary_20240621_172132.png)

-   辅助对象取消选中状态下，标尺区域内对应位置不显示对应坐标值
    ![图 11](/storage/images/en/panel/place-auxiliary/place-auxiliary_20240621_172133.png)

**吸附、对齐**

-   辅助线、辅助点都是具有吸附功能的，方便其他普通图元进行对齐排版操作。拖动图元与辅助线、辅助点相触后将会显示十字样式的吸附点和吸附辅助线，即可进行吸附对齐。
    ![图 16](/storage/images/en/panel/place-auxiliary/place-auxiliary_20240621_172134.png)

-   支持选择以辅助对象为操作对齐的参考对象
    ![图 17](/storage/images/cn/panel/place-auxiliary/place-auxiliary_20240621_172132.png)

**锁定解锁&显示隐藏**

-   辅助对象的左侧面板对象树中、右键菜单和右侧属性面板中，均可设置锁定解锁和显示隐藏，3处设置是保持实时联动的。
    ![图 12](/storage/images/cn/panel/place-auxiliary/place-auxiliary_20240621_172133.png)
    ![图 13](/storage/images/cn/panel/place-auxiliary/place-auxiliary_20240621_172134.png)
    ![图 14](/storage/images/cn/panel/place-auxiliary/place-auxiliary_20240621_172135.png)

**旋转、翻转**

-   辅助线有水平和垂直两种，均不支持与普通图元一起旋转、翻转。右键菜单未提供旋转、翻转菜单的图元无法与其他普通图元一起进行整体的翻转、旋转，不支持的会被过滤保持原样。
    ![图 18](/storage/images/cn/panel/place-auxiliary/place-auxiliary_20240621_172136.png)

**主题设置**

-   设置 - 面板/面板库 - 主题 - 辅助线
-   设置 - 面板/面板库 - 主题 - 辅助点
    ![图 19](/storage/images/cn/panel/place-auxiliary/place-auxiliary_20240621_172137.png)
    辅助线不仅可以设置颜色，还可以设置线型。辅助点只能设置颜色。
