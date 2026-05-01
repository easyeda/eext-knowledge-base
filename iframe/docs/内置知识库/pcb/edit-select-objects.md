# 选择对象

## 选择对象

支持多种选择方式，方便选择所需的对象。

**操作入口：**

-   顶部菜单 - 编辑 - 选择对象

![图 0](/storage/images/cn/pcb/edit-select-objects/edit-select-objects_20240621_172124.jpg)

### 选择全部

选择在PCB编辑器里所有的器件，选择后可进行批量修改。

**使用方法**：

-   顶部菜单 - 编辑 - 选择对象 - 全部

-   使用快捷键<kbd>Ctrl</kbd> + <kbd>A</kbd>
    ![image-20210519095105414](/storage/images/cn/pcb/edit-select-objects/edit-select-objects_20240621_172125.png)

### 矩形内部

基本和普通的框选一样，框选一个矩形，内部的图元可以被选中

### 矩形外部

-   顶部菜单 - 编辑 - 选择对象 -矩形外部
    ![](/storage/images/cn/pcb/edit-select-objects/edit-select-objects_20240621_172126.gif)

    将会选择矩形外部的所有元素，而矩形内部的元素为不选择状态。

### 多边形内部

-   顶部菜单 - 编辑 - 选择对象 -多边形内部
    ![](/storage/images/cn/pcb/edit-select-objects/edit-select-objects_20240621_172127.gif)

### 多边形外部

-   在绘制的多边形内的元素为不选中状态，多边形外部的则全部选中
    ![](/storage/images/cn/pcb/edit-select-objects/edit-select-objects_20240621_172128.gif)

### 接触到线条的

-   接触到线条的元素将会选中，没有触碰到的元素则不会被选中
    ![](/storage/images/cn/pcb/edit-select-objects/edit-select-objects_20240621_172129.gif)

### 连接的铜皮

进入功能后点击任何可以带有网络属性的图元，会直接选中与其存在连接的图元，无论是否属于同一网络

### 切换选择

-   顶部菜单 - 编辑 - 选择对象 - 切换选择
    ![](/storage/images/cn/pcb/edit-select-objects/edit-select-objects_20240621_172130.gif)

连续选择和按住<kbd>Ctrl</kbd>+鼠标点击连续选择相似。

## 选择重叠对象

当两个图元重叠在一起时，鼠标点击可能不好选中所需的那个，可以使用选择重叠功能。快捷键 G

![图 79](/storage/images/cn/pcb/edit-select-objects/edit-select-objects_20240621_172131.png)

使用快捷键可以连续循环选中鼠标周围的图元。
