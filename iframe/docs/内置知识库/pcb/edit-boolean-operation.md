# 布尔运算

## 操作入口

-   顶部菜单 - 编辑 - 布尔运算
-   右键菜单 - 布尔运算
-   快捷键（需自行添加）

![图 0](/storage/images/cn/pcb/edit-boolean-operation/edit-boolean-operation_20240621_172124.jpg)

## 保留重叠区域

选择此菜单可以只保留所有所选中图元重叠的区域。此操作目前支持所有轮廓区域和FPC补强板

![图 2](/storage/images/en/pcb/edit-boolean-operation/edit-boolean-operation_20240621_172123.jpg)

## 合并区域

可以将相互靠近或重叠的图元合并为一个，目前支持所有轮廓对象及FPC补强板

![图 4](/storage/images/en/pcb/edit-boolean-operation/edit-boolean-operation_20240621_172124.jpg)

## 减去顶层区域

可以选择性的将减去图元重叠的部分，目前仅支持填充区域

选择减去顶层区域时，你可以通过按住Ctrl键多选的顺序来决定保留哪一部分，最先选择的那一个图元将会作为基准，减去后续选择的其他图元

![图 6](/storage/images/en/pcb/edit-boolean-operation/edit-boolean-operation_20240621_172125.jpg)

![图 5](/storage/images/cn/pcb/edit-boolean-operation/edit-boolean-operation_20240621_172125.gif)

如果你是一次性直接框选多个图元，且图元是完全包含的关系，则以大的为基准，减去小的
![图 7](/storage/images/cn/pcb/edit-boolean-operation/edit-boolean-operation_20240621_172126.gif)

如果你是一次性直接框选多个图元，且图元只是部分相交，则以图元在画布上的放置顺序，先放置的图元为基准，减去后放置的

![图 11](/storage/images/cn/pcb/edit-boolean-operation/edit-boolean-operation_20240621_172127.gif)

## 排除重叠区域

可以将减去图元所有重叠的部分，目前仅支持填充区域

![图 12](/storage/images/en/pcb/edit-boolean-operation/edit-boolean-operation_20240621_172129.jpg)

## 拆分带洞区域

会将带洞的图元拆分成一个以最外边外形最准的大图元，以及以洞的外形为基准的多个小图元
![图 14](/storage/images/en/pcb/edit-boolean-operation/edit-boolean-operation_20240621_172130.jpg)
