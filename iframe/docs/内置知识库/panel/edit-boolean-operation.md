# 布尔运算

## 保留重叠区域

通过保留重叠区域功能可以对两个图元的相交部分进行截取，由此可以生成很多不好绘制的图形。简单来说就是取A和B相交的地⽅。

**操作说明**：

-   选中元素 - 顶部菜单 - 编辑 - 布尔运算 - 保留重叠区域

![图 1](/storage/images/cn/panel/edit-boolean-operation/edit-boolean-operation_20240621_172123.png)

如下图，取两个图元重叠区域部分：

![图 1](/storage/images/en/panel/edit-boolean-operation/edit-boolean-operation_20240621_172123.png)

如图的方向键按钮的图元形状就可以多次取交集生成：

![图 3](/storage/images/en/panel/edit-boolean-operation/edit-boolean-operation_20240621_172124.png)

## 合并区域

使用合并区域功能，把两个不同形状的图元合并成为一个图元，取图元的外边沿合并。简单的来说就是把A和B合并到⼀起。

**操作说明**：

-   选中元素 - 顶部菜单 - 编辑 - 布尔运算 - 合并区域

![图 2](/storage/images/cn/panel/edit-boolean-operation/edit-boolean-operation_20240621_172124.png)

选中多个相交的图元后，点击合并区域菜单。

![图 5](/storage/images/en/panel/edit-aggregate/edit-aggregate_20240621_172122.png)

可以通过合并区域功能生成一些不好绘制的轮廓。

## 减去顶层区域

通过减去顶层区域功能可以把两个不同形状的图元的内部相交部分和其中一个图元移除。假如A在B下⼀层级，操作减去顶层区域，会保留A-B的部分。

**操作说明**：

-   选中元素 - 顶部菜单 - 编辑 - 布尔运算 - 减去顶层区域

![图 3](/storage/images/cn/panel/edit-boolean-operation/edit-boolean-operation_20240621_172125.png)

如下图，矩形部分通过减去顶层区域后删除掉不需要保留的部分。

![图 8](/storage/images/en/panel/edit-boolean-operation/edit-boolean-operation_20240621_172127.png)

**注意**：减去顶层区域被消除的部分是根据图元绘制顺序，后绘制的会被消除。

## 排除重叠区域

通过排除重叠区域功能可以把A和B相交部分去掉，保留不相交的部分。不同形状的图元的内部相交部分移除。

**操作说明**：

-   选中元素 - 顶部菜单 - 编辑 - 布尔运算 - 排除重叠区域

![图 4](/storage/images/cn/panel/edit-boolean-operation/edit-boolean-operation_20240621_172126.png)

选中多个图元，点击排除重叠区域菜单即可。

![图 6](/storage/images/en/panel/edit-boolean-operation/edit-boolean-operation_20240621_172129.png)
