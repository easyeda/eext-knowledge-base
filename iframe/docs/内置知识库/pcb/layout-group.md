# 组合

组合功能支持将任意图元组合为一个整体，在组合为一个整体后，在进行拖动，旋转等操作的时候，能够保证组合内各图元相对位置不变。

## 组合选中

-   选择需要组合的器件（必须在两个或者两个以上）- 顶部菜单 - 布局 - 组合 - 组合选中

-   选择需要组合的器件 - 鼠标右键 - 组合 - 组合选中

-   选择需要组合的器件 - 快捷键<kbd>Ctrl</kbd> + <kbd>G</kbd>

![图 11](/storage/images/cn/pcb/layout-group/layout-group_20240621_172124.jpg)

添加组合时，可以在窗口中给此组合自定义名称

![image-20210105162919196](/storage/images/cn/pcb/layout-group/layout-group_20240621_172125.png)

## 取消组合

选中组合内全部图元后可通过此菜单取消该组合

-   选择组合的模块 - 顶部菜单 - 布局 - 组合 - 取消组合

-   选择组合的模块 - 鼠标右键 - 取消组合

-   选择组合的模块 - 快捷键<kbd>shift</kbd> + <kbd>G</kbd>

![图 14](/storage/images/cn/pcb/layout-group/layout-group_20240621_172126.jpg)

## 取消全部组合

把所有组合的模块全部取消

-   顶部菜单 - 组合 - 取消全部组合

![图 15](/storage/images/cn/pcb/layout-group/layout-group_20240621_172127.jpg)

## 加入组合

选中图元后使用此菜单可以将不在组合内的图元加入组合里面。

-   选择器件 - 鼠标右键 - 加入组合，选择需要加入的组合模块里面。

## 如何选中组合

通过下列五种方式可以选中组合

1. 在右侧过滤面板中勾选组合选项，然后在画布上点击组合中的某一个图元

![图 0](/storage/images/cn/pcb/layout-group/layout-group_20240621_172128.jpg)

2. 选中一个组合内的图元，然后点击鼠标右键-选择-组合

![图 2](/storage/images/cn/pcb/layout-group/layout-group_20240621_172129.jpg)

3. 在左侧对象树中点击具体的组合名称

![图 6](/storage/images/cn/pcb/layout-group/layout-group_20240621_172130.jpg)

4. 进行查找组合，然后在查找结果中点击组合

![图 7](/storage/images/cn/pcb/layout-group/layout-group_20240621_172131.jpg)

5. 选中组合中的元件，通过点击<kbd>tab</kbd>键，可以切换选中范围到组合

选中组合后，可以在右侧属性面板中修改组合内图元的共有的一些属性

![图 9](/storage/images/en/pcb/layout-group/layout-group_20240621_172130.jpg)

## 复用布局布线

嘉立创EDA支持一个很快速的方法进行相似的电路进行重复布局布线，不需要使用复制粘贴也不需要逐个布局。

入口：顶部菜单 - 布局 - 复用布局布线。

操作步骤：

1、先在原理图绘制好多组电路，如多通道电路模块。

![图 2](/storage/images/cn/pcb/layout-group/layout-group_20240621_172132.png)

2、完成后原理图转到PCB。默认会大致归类各组在一起。

![图 3](/storage/images/cn/pcb/layout-group/layout-group_20240621_172133.png)

3、回到原理图，框选其中一组电路，使用交叉选择功能（右键菜单，顶部设计菜单，或快捷键 SHIFT+X等），交叉选中PCB对应的元件。

![图 4](/storage/images/cn/pcb/layout-group/layout-group_20240621_172134.png)

4、会自动切换到PCB并选中对应的元件，手动拖动到一旁后，完成布局布线添加过孔等操作。

![图 5](/storage/images/cn/pcb/layout-group/layout-group_20240621_172135.png)

5、框选完成后的电路，右键组合为一个新组合。

![图 6](/storage/images/cn/pcb/layout-group/layout-group_20240621_172136.png)

6、回到原理图，框选第二组电路，右键使用交叉选中功能。选中PCB对应的元件后，再右键菜单 - 组合 - 复用布局布线

![图 7](/storage/images/cn/pcb/layout-group/layout-group_20240621_172137.png)

7、出现十字光标后选择第一个组合并点击，第二组的元件将自动组合为一个新组合，并复用第一组电路的元件位置和布线等。

![图 8](/storage/images/cn/pcb/layout-group/layout-group_20240621_172138.png)

8、其他组电路按照上面的操作重复进行，就可以快速进行电路的布局布线复用，减少布局布线的工作量。

![图 9](/storage/images/cn/pcb/layout-group/layout-group_20240621_172139.png)

完成后如不需要组合，手动解散组合即可。
