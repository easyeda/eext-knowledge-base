# 缝合孔

**缝合孔技术**可以将不同层中的较大的铜箔连接到一起，在板结构中进行垂直连接，同时保持较低的阻抗和较短的回流路径。在RF设计中，缝合孔与护环一起创建一个过孔墙，以创建电磁屏蔽PCB。缝合孔也可以被用来连接那些独立于网络的铜箔，将其与网络连接起来。

**放置方法**：

方法一：

-   顶部菜单 - 放置 - 缝合孔 - 矩形/多边形/线条

![image-20210519151537021](/storage/images/cn/pcb/place-suture-vias/place-suture-vias_20240621_172124.png)

设置缝合孔的属性，点击确定，然后在在PCB里绘制一个矩形，就能根据绘制的矩形放置缝合孔。缝合孔放置时会自动避让

-   **网络**：设置缝合孔的网络。
-   **外径**：缝合过孔的外径。
-   **内径**：缝合过孔的内径。
-   **行间距**：设置缝合孔的行距。
-   **列间距**：设置缝合孔的列间距。

![image-20210519151631355](/storage/images/cn/pcb/place-suture-vias/place-suture-vias_20240621_172125.png)

![](/storage/images/cn/pcb/place-suture-vias/place-suture-vias_20240621_172126.gif)

方法二：

通过：选中铺铜 - 右边属性面板 - 自动放置缝合孔

![图 196](/storage/images/cn/pcb/place-suture-vias/place-suture-vias_20240621_172127.png)

可以进行新增或移除当前铺铜的缝合孔。

![图 197](/storage/images/cn/pcb/place-suture-vias/place-suture-vias_20240621_172128.png)

设置好参数后，点确认，会在当前铺铜的填充区域进行放置缝合孔，并且会自动避让 DRC 错误的图元。
