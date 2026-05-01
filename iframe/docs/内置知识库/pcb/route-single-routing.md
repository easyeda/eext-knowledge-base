# 单路布线

## 单路布线

**单路布线的方法**：

-   单击顶部菜单 - 布线 - 单路布线，进入添加布线工作模式

-   顶部工具栏 - 单路布线

-   快捷键<kbd>W</kbd>

-   双击焊盘或者过孔进入布线模式

![image-20210520134818868](/storage/images/cn/pcb/route-single-routing/route-single-routing_20240621_172124.png)

    **添加拐点**

    -   在布线的过程中在需要增加拐点的地方鼠标左键单击以添加拐点。
    -   布线过程中使用快捷键<kbd>L</kbd>切换拐点。

更多布线的操作设置可以在设置 - PCB设置中修改。
![图 26](/storage/images/cn/pcb/route-single-routing/route-single-routing_20240621_172125.png)

## 布线时添加过孔

-   在布线的过程中点击鼠标右键菜单（或按CTRL+右键，根据PCB设置项来），选择添加过孔功能，将在接下来的第一个待布线拐角处增加一个过孔，鼠标左键单击画布，添加过孔成功
    ![图 27](/storage/images/cn/pcb/route-single-routing/route-single-routing_20240621_172126.png)

-   在布线的过程中输入快捷键 <kbd>V</kbd> 也可以直接添过孔

-   在布线的过程中切层到信号层，快捷键 T B 1 2 3 4，也会自动添加过孔

![](/storage/images/cn/pcb/route-single-routing/route-single-routing_20240621_172127.gif)

    如果想要添加盲埋孔，需要先在设计规则中添加盲埋孔列表。然后在布线的过程中点击鼠标右键放置盲孔或埋孔功能\*\*选择你需要添加的盲埋孔。

-   在设置对话框，如果勾选了**布线切层时优先放置盲埋孔，**在布线过程中切信号层，会优先选择满足条件的盲埋孔进行放置

![image-20210520134311683](/storage/images/cn/pcb/route-single-routing/route-single-routing_20240621_172128.png)

-   在阻挡、环绕、推挤模式下，布线过程中添加过孔，如果添加的过孔违反DRC，则会出现警告提示，可以点击是来忽略该DRC继续布线，或点击否取消添加过孔。

![图 0](/storage/images/cn/pcb/route-single-routing/route-single-routing_20240621_172129.jpg)

## 回退布线

-   布线的过程中点击右键菜单，点击回退，或使用快捷键backspace，可以手动将布线回退到上一个拐点

-   布线的过程中如果光标移动到了已经布的部分，会自动回退到光标位置导线的上一个拐点。此时如果鼠标移回未产生回路部分，又会恢复之前隐藏的导线；添加拐点后，将确定新的拐点，之前自动回退的导线将无法再恢复

## 布线时切换过孔尺寸

-   跟随规则。点击后接下来添加的过孔将会变为设计规则中的默认尺寸

-   规则设置。点击后弹出设计规则对话框，可以在此处设置过孔尺寸的规则

-   常用过孔尺寸列表。布线时通过右键菜单快速切换常用过孔尺寸，点击常用尺寸设置，弹出系统设置对话框，可以在此维护常用过孔尺寸列表

-   输入过孔尺寸。点击后弹出弹窗输入要修改的过孔外径和内径后回车，接下来布的过孔将变为此尺寸

![](/storage/images/cn/pcb/route-single-routing/route-single-routing_20240621_172130.gif)

如果需要在布线打孔时自动切层，可以在PCB设置里面开启自动切层选项。

![图 14](/storage/images/cn/pcb/route-single-routing/route-single-routing_20240621_172131.png)

## 添加节点

支持双击导线或右键添加导线节点，以便调整导线。

![图 15](/storage/images/cn/pcb/route-single-routing/route-single-routing_20240621_172132.png)

## 右键菜单

导线的右键菜单支持丰富的功能，可以快速实现多种操作。

![图 16](/storage/images/cn/pcb/route-single-routing/route-single-routing_20240621_172133.png)

在布线的过程中点击鼠标右键菜单（或按CTRL+右键，根据PCB设置项来），也有丰富功能，可以根据自己的需要进行使用。

![图 61](/storage/images/cn/pcb/route-single-routing/route-single-routing_20240621_172134.png)

## 设置网络颜色 {#网颜}

在左侧的网络树可以设置网络颜色，

![图 29](/storage/images/cn/pcb/route-single-routing/route-single-routing_20240621_172135.png)

也可以导线右键设置颜色

![图 28](/storage/images/cn/pcb/route-single-routing/route-single-routing_20240621_172136.png)

## 隐藏飞线

在布线时，先把其他暂时不需要布线的飞线隐藏，有利于减少干扰，专注于当前网络的布线。

可以在左侧网络树隐藏飞线

![图 30](/storage/images/cn/pcb/route-single-routing/route-single-routing_20240621_172137.png)

也可以选中导线后，在视图菜单进行隐藏飞线

![图 31](/storage/images/cn/pcb/route-single-routing/route-single-routing_20240621_172138.png)
