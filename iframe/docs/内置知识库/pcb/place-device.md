# 器件

## 放置器件

1、当原理图转到PCB，或PCB导入更新时，会自动放置器件到PCB中。

![图 8](/storage/images/cn/pcb/place-device/place-device_20240621_172124.png)

原理图转PCB时，会默认使用原理图里元件的布局相对位置摆放在PCB中，方便快速元件布局查找

2、你也可以在底部元件库放置新的器件在PCB。
![图 9](/storage/images/cn/pcb/place-device/place-device_20240621_172125.png)

鼠标选中元件后，拖动摆放元件位置。也可以使用布局菜单的自动布局功能，目前是体验版本，在继续开发中。

## 器件属性

点击一个元件后，可以在右边属性面板查看和修改元件的属性

![图 10](/storage/images/cn/pcb/place-device/place-device_20240621_172126.png)

## 编辑封装

如果你需要在PCB里面直接对封装进行修改焊盘等操作，你可以点击封装内焊盘进行修改属性（比如修改焊盘大小，坐标），修改后不会影响其他相同的封装，当对封装进行右键编辑封装时，将打开修改前的封装模板。
![图 11](/storage/images/cn/pcb/place-device/place-device_20240621_172127.png)

如果需要恢复原本的封装模板，在选中元件后，点击右边属性面板的封装属性的恢复按钮图标，即可还原修改。

![图 12](/storage/images/cn/pcb/place-device/place-device_20240621_172128.png)

也可以通过封装右键，编辑封装的方式，该方式可以直接修改工程库模板，支持同步修改全局封装。编辑封装会打开封装编辑界面，保存后自动同步到PCB。
![图 13](/storage/images/cn/pcb/place-device/place-device_20240621_172129.png)

## 右键菜单

封装的右键菜单支持非常多的功能，可以根据自己的需要进行使用。

![图 14](/storage/images/cn/pcb/place-device/place-device_20240621_172130.png)
