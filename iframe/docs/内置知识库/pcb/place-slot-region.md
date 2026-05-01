# 挖槽区域

在PCB设计中无论是高压板卡爬电间距，还是板型结构要求，会经常遇到板子需要挖槽（直接挖穿板子）的情况，挖槽就是在设计的 PCB 上进行挖空处理。

**具体的操作步骤如下**：

-   **顶部菜单 - 放置 - 挖槽区域 - 圆形**

![image-20210519143206139](/storage/images/cn/pcb/place-slot-region/place-slot-region_20240621_172124.png)

当光标变成十字就可以在PCB内绘制了

![image-20210519145415622](/storage/images/cn/pcb/place-slot-region/place-slot-region_20240621_172125.png)

绘制完之后PCB有着比较明显的一个黑色区域

![image-20210519145656549](/storage/images/cn/pcb/place-slot-region/place-slot-region_20240621_172126.png)

挖槽区域的层只能在多层，因为它是作用于全部层进行挖孔：

![图 52](/storage/images/cn/pcb/place-slot-region/place-slot-region_20240621_172127.png)

挖槽预览：

![image-20210519150335724](/storage/images/cn/pcb/place-slot-region/place-slot-region_20240621_172128.png)

![image-20210519150454819](/storage/images/cn/pcb/place-slot-region/place-slot-region_20240621_172129.png)

注意：

-   圆形挖槽区域在v1.9开始，直径小于等于6.5mm将会在Drill文件的NPTH文件体现，大于6.5mm的在Gerber的边框文件GKO里面体现
-   小于v1.9的挖槽区域，圆形和非圆形的挖槽都在Gerber的边框文件GKO文件体现
