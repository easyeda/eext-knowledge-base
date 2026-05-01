# 右侧面板-图层

## 图层切换

PCB设计会经常使用层工具，它可以随意拖动位置，用来展示当前活动层。在这里对不同层进行切换编辑。

-   点击层对应的眼睛图标可以使其是否显示该层；
    ![图 20](/storage/images/cn/pcb/side-panel-right-layer/side-panel-right-layer_20240621_172124.png)

-   点击层的颜色标识区，使铅笔图标切换至对应层，表示该层为活跃层，已进入编辑状态，可进行布线等操作；
    ![图 21](/storage/images/cn/pcb/side-panel-right-layer/side-panel-right-layer_20240621_172125.png)

-   也可以使用命令来切换图层

        快捷键“C”调出命令输入框 ，在输入框输入“**L+ 图层的ID**”即可切换图层。

    ![图 19](/storage/images/cn/pcb/side-panel-right-layer/side-panel-right-layer_20240621_172126.png)
    ![图 18](/storage/images/cn/pcb/side-panel-right-layer/side-panel-right-layer_20240621_172127.png)

切换层的快捷键如下：

-   **T**： 切换至顶层
-   **B**： 切换至底层
-   **1**： 切换至内层1
-   **2**： 切换至内层2
-   **3**： 切换至内层3
-   **4**： 切换至内层4
-   **SHIFT+S**：高亮当前层的所有元素，隐藏其他层的元素。

**注意**：隐藏PCB层只是视觉上的隐藏，在照片预览，3D预览和导出Gerber时仍会导出对应层。

## 图层锁定

嘉立创EDA支持单独锁定一整个图层，当锁定一个图层的时候，属于该层的元素将无法被鼠标移动。

![图 22](/storage/images/cn/pcb/side-panel-right-layer/side-panel-right-layer_20240621_172128.png)

也可以在过滤面板取消勾选批量过滤其他对象。

## 图层设置

点击图层管理器图标，可以进行图层设置。

![图 23](/storage/images/cn/pcb/side-panel-right-layer/side-panel-right-layer_20240621_172129.png)

更多关于PCB层的信息请查看：[PCB设计 - 图层管理器](https://prodocs.lceda.cn/cn/pcb/tools-layer-manager/index.html)
