# 命令

嘉立创EDA专业版可以使用系统命令来快速绘图，目前只支持PCB和封装的命令使用，原理图与符号的暂时不支持。

使用方法：

-   在PCB界面或封装界面点击顶部菜单 - 高级 - 运行命令

点击后在底部面板会弹出命令输入框。

![图 0](/storage/images/cn/pcb/tools-command/tools-command_20240930_143803.png)

X方向相对坐标命令 `ix <space> <x>`

点击导线，快捷键调出命令输入框，在命名输入框内输入IX 300 （注意ix要隔一个空格才能输入坐标）

![1-1608608691917](/storage/images/en/pcb/tools-command/tools-command_20240621_172124.gif)

Y方向相对坐标命令 `iy <space> <y>`

Y方向相对坐标命令与X方向相对坐标命令的操作方式一致。

## 换层命令

调出命令输入框，在输入框内输入“L 2”即可换到底层。

-   输入“L 1”即可切换到顶层；

-   输入“L 2”即可切换到顶层；

-   输入“L 3”即可切换到顶层丝印层；

对应层的数字在右侧的属性面板图层这里能看到。

![image-20210520151932519](/storage/images/en/pcb/tools-command/tools-command_20240621_172125.png)

## 查找元件命令

调出命令输入框，输入“S 加器件的位号” 即可在编辑器里找到器件并且高亮。

![2-1608615530755](/storage/images/en/pcb/tools-command/tools-command_20240621_172126.gif)

## 修改线宽

点击导线，调出命令输入框，输入W 需要改的线宽。

![3-1608615906958](/storage/images/en/pcb/tools-command/tools-command_20240621_172127.gif)

命令的查找在设置，快捷键设置查询，也可以双击修改命令。

目前支持的命令不多，后续会推出更多的命令。

![image-20210520152359910](/storage/images/en/pcb/tools-command/tools-command_20240621_172128.png)

![image-20210520152348401](/storage/images/en/pcb/tools-command/tools-command_20240621_172129.png)
