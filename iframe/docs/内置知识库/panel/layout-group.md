# 组合

## 组合

面板支持组合的创建，方便图元之间建立组合关系。将多个零散的图元进行组合后，可以作为一个整体在画布移动。编辑组合内的图元则需要进入组合遮罩下，仅能操作到组合遮罩内的图元，可以很好的屏蔽其他非组合内图元的干扰。

### 功能入口

**顶部菜单**

面板画布上至少要选中一个对象，才能操作创建组合。

-   选中图元 - 顶部菜单 - 布局 - 组合 - 组合
-   全局菜单快捷键：<kbd>Ctrl</kbd>+<kbd>G</kbd>

![图 1](/storage/images/cn/panel/layout-group/layout-group_20240621_172123.png)

**右键菜单**

画布上选中图元后鼠标右键，操作组合菜单的子菜单组合同样可以新建组合。
![图 3](/storage/images/cn/panel/layout-group/layout-group_20240621_172124.png)

### 使用说明

**新建组合**

通过顶部菜单或右键菜单或按键Ctrl+G操作组合新建，画布中央会短提示组合成功。
同一组合内的图元在画布上将保持一个整体，单击任意组内对象，会选中整一个组合。

![图 4](/storage/images/cn/panel/layout-group/layout-group_20240621_172125.png)

面板支持**嵌套组合**。选中对象包含组合时，可以继续操作新建组合，生成新的父组合包含原有所选的子组合。
注意：子组合是父组合下的一个子对象，子组合内的图元是保持原有的组合关系的。
![图 5](/storage/images/cn/panel/layout-group/layout-group_20240621_172126.png)

**加入组合**

一定要存在组合并且至少选中一个对象，才能操作加入组合。

-   选中对象 - 顶部菜单 - 布局 - 组合 - 加入组合

![图 6](/storage/images/cn/panel/layout-group/layout-group_20240621_172127.png)

或者

-   选中对象 - 右键菜单 - 组合 - 加入组合

![图 7](/storage/images/cn/panel/layout-group/layout-group_20240621_172128.png)

操作加入组合后，会弹出加入组合选择弹窗。弹窗内显示的是当前已有的所有组合的名称，树状结构方便直观预览嵌套组合的关系。

![图 8](/storage/images/cn/panel/layout-group/layout-group_20240621_172129.png)

选中欲加入的组合名后单击确认按钮，画布中央短提示加入组合成功。

![图 9](/storage/images/cn/panel/layout-group/layout-group_20240621_172130.png)

注意：支持任意对象加入到任意组合内，即使已存在于某个组合内，会先移出所在组合再加入到目标组合（面板组合允许嵌套，不能交叉成环）

![图 10](/storage/images/cn/panel/layout-group/layout-group_20240621_172131.png)

**取消组合**

一定要选中包含有组合时，才能操作取消组合。

-   选中组合 - 顶部菜单 - 布局 - 组合 - 取消组合
-   全局快捷键：<kbd>Shift</kbd>+<kbd>G</kbd>

![图 11](/storage/images/cn/panel/layout-group/layout-group_20240621_172132.png)

或者

-   选中组合 - 右键菜单 - 组合 - 取消组合

![图 12](/storage/images/cn/panel/layout-group/layout-group_20240621_172133.png)

操作取消组合后，会将所选的组合全部取消组合，画布中央短提示组合取消成功。

![图 13](/storage/images/cn/panel/layout-group/layout-group_20240621_172134.png)

注意：1.要取消组合一定是选中整个组合才能操作，仅选中组合内的对象是无法操作取消其所在组合的组合状态的。2.取消子组合的组合状态，原本子组合内的对象会移动到子组合的上一级父组合内。

![图 14](/storage/images/cn/panel/layout-group/layout-group_20240621_172135.png)

**移出组合**

一定要选中组合内的对象，才能操作移出组合。

-   选中对象 - 右键菜单 - 组合 - 移出组合

![图 15](/storage/images/cn/panel/layout-group/layout-group_20240621_172136.png)

操作移出组合后，所选对象会直接移出所有组合，画布中央短提示对象从组合中移出成功。

![图 16](/storage/images/cn/panel/layout-group/layout-group_20240621_172137.png)

**取消全部组合**

-   顶部菜单 - 布局 - 组合 - 取消全部组合

![图 17](/storage/images/cn/panel/layout-group/layout-group_20240621_172138.png)

操作取消全部组合，会将当前面板画布上已有的所有组合状态取消，画布中央短提示所有组合取消成功。

### 组合遮罩

为了方便操作组合内的对象而不希望误触其他非组合内对象，增加了组合遮罩的功能。画布上双击组合内的任意对象可进入组合遮罩下，进入组合遮罩后无法选中到其他非组合内的对象，可以双击或者按键Esc退出组合遮罩。

-   进入组合遮罩，画布上可见遮罩区域内正常亮度显示，遮罩区域外被灰色遮盖效果。
    ![图 18](/storage/images/en/panel/layout-group/layout-group_20240621_172138.png)

-   嵌套组合，需要逐级进入。每双击一次组内对象切换进入下一级组合遮罩下，直到进入到对象所在最小组合后，才能画布上选中该对象。
    ![图 19](/storage/images/en/panel/layout-group/layout-group_20240621_172139.png)

-   左侧对象树直接选中组合内的对象，则可以直接进入其所在最小组合的遮罩下进行选中。组合图标红色显示代表当前画布处于该组合遮罩下。
    ![图 20](/storage/images/cn/panel/layout-group/layout-group_20240621_172139.png)

-   处于某个组合遮罩下，绘制新的图元对象会自动加入到该组合下。
    ![图 21](/storage/images/en/panel/layout-group/layout-group_20240621_172141.png)

-   进入组合遮罩后，会临时将组合内的对象全部提升显示到所有非组合对象之上，而组合内的对象层级顺序是保持的，退出遮罩会恢复原本的层级优先显示顺序。
    ![图 22](/storage/images/en/panel/layout-group/layout-group_20240621_172142.png)

### 左侧组合对象树

**锚点定位**

左侧对象树顶部增加了图层和组合的锚点定位设置，默认选中图层，即选中画布上的对象会优先展示图层对象树部分。

![图 23](/storage/images/cn/panel/layout-group/layout-group_20240621_172140.png)

切换选中组合，则会快速定位到组合对象树部分。

![图 24](/storage/images/cn/panel/layout-group/layout-group_20240621_172141.png)

**拖动调整**

-   支持直接拖动组合对象树部分的对象调整组合关系。子组合也可以整体进行拖动调整。

![图 25](/storage/images/cn/panel/layout-group/layout-group_20240621_172142.png)

-   拖动到组合对象树顶部则会移出组合对象树。

![图 26](/storage/images/cn/panel/layout-group/layout-group_20240621_172143.png)

**隐藏组合**

-   操作组合隐藏，组合内的对象在画布上均不可见。左侧对象树中组合内对象前的图标样式会保持，但是会透明显示。
    ![图 27](/storage/images/cn/panel/layout-group/layout-group_20240621_172144.png)

-   单击透明显示的隐藏显示图标，会弹窗提示该对象所在组合当前隐藏状态，询问是否要取消其所在组合的隐藏。
    ![图 28](/storage/images/cn/panel/layout-group/layout-group_20240621_172145.png)

注意：当组合隐藏时，想要切换组合内对象的隐藏显示状态，一定要先取消其所在组合的隐藏。

**锁定组合**

-   操作组合锁定，仅锁定组合自身，不会批量锁定组合内的对象。即组合整体在画布上是锁定的，但是进入组合遮罩下，组合内的未锁定对象是可以在组合内自由操作的。
    ![图 29](/storage/images/cn/panel/layout-group/layout-group_20240621_172146.png)

-   操作组内对象锁定则仅在其所在最小组合内锁定不可操作。当其所在最小组合未锁定时，可以移动整个组合，而进入组合遮罩下则无法操作锁定的组内对象。
    ![图 30](/storage/images/cn/panel/layout-group/layout-group_20240621_172147.png)
    简单来说就是：组合内对象的锁定只是被锁定在某一层级组合内。

### 其他组合规则

-   组合的名称在创建的时候就默认分配，允许自定义，允许为空，允许重复。

-   面板库中进行组合，放置到面板画布上也是保持组合属性的。

-   不支持跨组合同时多选组合内的与非组合内的对象

-   允许空组合的存在，双击空组合也会进入遮罩模式，绘制图元将自动加入到组合内。
