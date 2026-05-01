# 吸附

嘉立创EDA为用户提供了强大的吸附功能，支持在进行布线、测量，绘制等操作的时候吸附到画布上已有的图元的某些特定位置，方便用户快速地进行对位，以加快设计效率。同时，吸附的范围和位置支持由用户自定义，可以适应不同用户的使用习惯

## **配置入口：**

-   顶部菜单 - 编辑 - 吸附
-   鼠标右键 - 吸附
-   PCB右侧属性面板-吸附
-   默认快捷键<kbd>Alt</kbd> + <kbd>S</kbd>

![图 0](/storage/images/cn/pcb/edit-snap/edit-snap_20240621_172124.jpg)

将吸附打开之后，将鼠标移动到吸附范围内，就会自动吸附，并且在吸附的位置显示一个白色的点

![图 1](/storage/images/en/pcb/edit-snap/edit-snap_20240621_172123.gif)
![图 16](/storage/images/en/pcb/edit-snap/edit-snap_20240621_172124.jpg)

在进行除绘制导线之外的一些操作时，如果吸附到了画布上的一些位置，还会产生白色的十字吸附标记,最多在画布上同时存在六个，可以通过此标记进行延长线吸附等操作，缩放画布或者退出当前进行的操作会清除所有标记

![图 19](/storage/images/en/pcb/edit-snap/edit-snap_20240621_172125.jpg)

## **吸附设置**

我们可以在吸附设置中配置自己想要的吸附距离和吸附位置等内容

![图 2](/storage/images/cn/pcb/edit-snap/edit-snap_20240621_172125.jpg)

### **吸附图层配置**

可以设置为**吸附所有层**或者**仅当前激活层**，设置为仅当前激活层（铅笔图标所在的地方就是当前激活层）时，不会吸附其他层的图元上的位置，选择所有层则反之。**布线时不受此配置影响**，只会吸附当前激活层
![图 4](/storage/images/cn/pcb/edit-snap/edit-snap_20240621_172126.jpg)

### **吸附距离**

在这个位置可以设置吸附的距离。注意：布线时仅会在焊盘或者过孔内开始吸附，所以说布线时鼠标即使已经在吸附范围内，但是没有在上述图元内部的话，也是不会产生吸附效果的。

### **通用**

在右侧**全部**的勾选框处可以同时勾选或者取消勾选栅格点和延长线的勾选，下同

**网格点**

勾选后光标会吸附到画布上的栅格点，吸附到栅格上时不会显示白色的点

![图 3](/storage/images/cn/pcb/edit-snap/edit-snap_20240621_172127.jpg)

**延长线**

在绘制线条、使用移动功能移动图元、调整轮廓对象外形等操作时。会产生一些十字的吸附标记，将鼠标移动到线条延长的方向，或者正交位置时，可以吸附到延长线上，方便进行对齐

![image-20210319162034055](/storage/images/en/pcb/edit-snap/edit-snap_20240621_172129.png)

## 布局布线

**封装原点**

勾选后可以吸附到封装的原点，封装的原点就是封装中十字的中心位置，可以在绘制封装时通过放置菜单进行修改

![图 5](/storage/images/cn/pcb/edit-snap/edit-snap_20240621_172128.jpg)

**封装中心**

勾选后可以吸附到整个封装图形的中心点，封装中心和封装原点两个选项同时只能选择一个

![图 10](/storage/images/en/pcb/edit-snap/edit-snap_20240621_172131.jpg)

**焊盘中心**

勾选后可吸附焊盘图形的中心点

![图 11](/storage/images/en/pcb/edit-snap/edit-snap_20240621_172132.jpg)

**过孔中心**

勾选后可吸附过孔的中心点

![图 12](/storage/images/en/pcb/edit-snap/edit-snap_20240621_172133.jpg)

**导线中心**

勾选后可以吸附到导线

![图 13](/storage/images/en/pcb/edit-snap/edit-snap_20240621_172134.jpg)
![图 15](/storage/images/en/pcb/edit-snap/edit-snap_20240621_172135.gif)

## 轮廓对象

**端点**

折线末端的端点，此设置只对折线有效。

![image-20210319163800986](/storage/images/en/pcb/edit-snap/edit-snap_20240621_172138.png)

**中点**

勾选后可吸附到线条或者轮廓对象的线段的中心点。

![](/storage/images/en/pcb/edit-snap/edit-snap_20240621_172139.png)

**交点**

勾选后可吸附同一图层的两条或者多条线之间的相交点。

![图 17](/storage/images/en/pcb/edit-snap/edit-snap_20240621_172140.jpg)

**圆心**

勾选后可吸附圆形和圆弧的中心点。需要先将鼠标移动到原型的环上才会产生中间的吸附标记

![图 18](/storage/images/en/pcb/edit-snap/edit-snap_20240621_172141.jpg)

**垂足**

打开此项后，可以吸附到以产生吸附标记的线段为基准的垂线
![图 20](/storage/images/en/pcb/edit-snap/edit-snap_20240621_172142.jpg)

**切点**

此项勾选后可以吸附到原型正交切线的四个切点

![图 21](/storage/images/en/pcb/edit-snap/edit-snap_20240621_172143.jpg)

**区域中心**

勾选后可吸附到铺铜区域、填充区域等轮廓对象的图形中心点。

![图 22](/storage/images/en/pcb/edit-snap/edit-snap_20240621_172144.jpg)

**线段中心**

此项勾选后可以吸附到线段的中心，类似于导线中心的吸附

![图 23](/storage/images/en/pcb/edit-snap/edit-snap_20240621_172145.jpg)

## 其他吸附

![图 24](/storage/images/cn/pcb/edit-snap/edit-snap_20240621_172129.jpg)

在PCB常规设置中，可以打开拖动封装或者焊盘时的一些吸附效果
