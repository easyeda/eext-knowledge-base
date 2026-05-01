# 分布

嘉立创EDA专业版支持分布排距对齐。

**操作方法**：

-   顶部菜单 - 布局 - 分布或在顶部快捷栏

![图 35](/storage/images/cn/pcb/layout-distribute/layout-distribute_20240621_172124.png)

## 水平等距分布

框选需要分布的器件，点击顶部菜单 - 布局 - 分布 - 水平等距分布，EDA就会将水平面的器件或其他元素进行等距分布。

![](/storage/images/cn/pcb/layout-distribute/layout-distribute_20240621_172125.gif)

## 垂直等距分布

框选需要分布的器件，点击顶部菜单 - 布局 - 分布 - 垂直等距分布，EDA就会将垂直的器件或其他元素进行垂直等距分布。

![](/storage/images/cn/pcb/layout-distribute/layout-distribute_20240621_172126.gif)

## 左边沿等距分布

已选择的左边器件的丝印边距为基准点分布排距。

![](/storage/images/cn/pcb/layout-distribute/layout-distribute_20240621_172127.gif)

可以看明显的看出来第一个器件左边丝印间距到另一个器件的左边丝印间距都是一致的。

![image-20201223142707720](/storage/images/en/pcb/layout-distribute/layout-distribute_20240621_172126.png)

## 上边沿等距分布

已选择的上边器件的丝印边距为基准点分布排距。

![](/storage/images/cn/pcb/layout-distribute/layout-distribute_20240621_172128.gif)

![image-20201223143234136](/storage/images/cn/pcb/layout-distribute/layout-distribute_20240621_172129.png)

## 水平指定中心间距分布

将选中的器件按照用户输入的数据的水平间距来排布。

![](/storage/images/cn/pcb/layout-distribute/layout-distribute_20240621_172130.gif)

![image-20201223143550905](/storage/images/cn/pcb/layout-distribute/layout-distribute_20240621_172131.png)

## 垂直指定中心间距分布

将选中的器件按照用户输入的间距数据进行垂直间距来排布。

![](/storage/images/cn/pcb/layout-distribute/layout-distribute_20240621_172132.gif)

![image-20201223143947594](/storage/images/cn/pcb/layout-distribute/layout-distribute_20240621_172133.png)

## 水平指定边沿间距分布

将选中的器件按照用户输入的数据的水平间距来排布。

![图 204](/storage/images/cn/pcb/layout-distribute/layout-distribute_20240621_172134.png)

分布后，水平线上元件的两两间距相同。

![图 205](/storage/images/cn/pcb/layout-distribute/layout-distribute_20240621_172135.png)

## 垂直指定边沿间距分布

将选中的器件按照用户输入的间距数据进行垂直间距来排布。

如果指定垂直边沿间距是 5mm

![图 206](/storage/images/cn/pcb/layout-distribute/layout-distribute_20240621_172136.png)

分布后，上下两两之间的间距都是 5mm

![图 207](/storage/images/cn/pcb/layout-distribute/layout-distribute_20240621_172137.png)

## 阵列分布

阵列分布与阵列对象功能基本一致，这里就不多做介绍了，详细的操作步骤在阵列对象教程里已说明。

## 元件区域分布 {#分布1}

当PCB的元件布局比较乱的时候，你可以使用元件区域分布功能把所选的元件自动排列的一个区域内，方便手动移动布局。

使用方法：框选元件 - 点击元件区域分布菜单（快捷键 SHIFT+P） - 进入光标模式框选一个区域。

![图 34](/storage/images/cn/pcb/layout-distribute/layout-distribute_20240621_172138.png)

所选的元件会自动根据外形大小逐个摆放整齐。

![图 33](/storage/images/cn/pcb/layout-distribute/layout-distribute_20240621_172139.png)
