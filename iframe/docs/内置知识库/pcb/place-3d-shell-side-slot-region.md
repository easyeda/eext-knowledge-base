# 3D外壳-侧面挖槽区域

当需要绘制侧面的挖槽时，需要侧面基准线来定位，再加上侧面挖槽区域。

入口：顶部菜单 - 放置 - 3D外壳-侧面挖槽区域

![图 10](/storage/images/cn/pcb/place-3d-shell-side-slot-region/place-3d-shell-side-slot-region_20240621_172124.png)

侧面基准线只允许设置在3D外壳边框层。

**使用方式法：**

1、在需要挖槽的外壳侧面，确定板子俯视图时，侧面对应的边框线段。

2、放置侧面基准线，和对应的边框线段平行，不要和边框线段重叠，需要放在外部。
![图 15](/storage/images/cn/pcb/place-3d-shell-side-datum-line/place-3d-shell-side-datum-line_20240621_172125.png)

3、再放置侧面挖槽区域在外部即可。侧面挖槽区域距离基准线的间距就是挖槽距离底部的高度。如下图：B 的高度等于 A 的距离。
![图 17](/storage/images/en/pcb/place-3d-shell-side-datum-line/place-3d-shell-side-datum-line_20240621_172125.png)

**侧面挖槽区域属性说明**：

![图 9](/storage/images/cn/pcb/place-3d-shell-side-slot-region/place-3d-shell-side-slot-region_20240621_172125.png)

顶面底面挖槽和侧面挖槽可以相互切换。

**基准线**：根据对应的基准线确定挖槽的方向和面。单击可以选择新的基准线。

**挖槽深度**：挖槽需要挖多深，根据自己的设计需要来决定。以侧面挖槽区域放置的位置作为起始位置，到外壳边框的距离为挖槽深度。如下图：A 和 B 的距离相等。
![图 21](/storage/images/en/pcb/place-3d-shell-side-slot-region/place-3d-shell-side-slot-region_20240621_172125.png)

**挖槽选项**：可以设置需要挖掉的类型。外壳边框，螺丝柱，实体都可以分别设置。
