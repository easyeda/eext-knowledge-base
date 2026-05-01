# 边框/板框

在开始PCB设计前，首先需要给板子创建板框。可以通过直接绘制和导入DXF两种方式创建板框。

**说明**：

一个板框内只能放置一个板框，多余的板框会转为挖槽区域。

## 直接绘制

-   顶部菜单放置 - 板框
-   顶部工具栏板框进入绘制模式，提供矩形、圆形、多边形三种方式的绘制

![图 23](/storage/images/cn/pcb/place-board-outline/place-board-outline_20240621_172124.png)

板框、铺铜区域、填充区域、挖槽区域、禁止区域的绘制方式完全相同。

![放置板框](/storage/images/cn/pcb/place-board-outline/place-board-outline_20240621_172125.gif)

## 导入DXF

可以通过轮廓对象的任意类型切换成板框，如果线条未闭合，会提示自动闭合轮廓。该功能多用于在导入DXF后，将导入的线条转换为期望的类型（板框、挖槽区域、禁止区域等）

-   点击顶部菜单文件文件 - 导入- DXF选择你要导入的DXF文件

![image-20210519101546639](/storage/images/cn/pcb/place-board-outline/place-board-outline_20240621_172126.png)

2.选择完文件后，会弹出导入DXF弹窗显示预览

![image-20210519101504790](/storage/images/cn/pcb/place-board-outline/place-board-outline_20240621_172127.png)

-   DXF单位：系统会根据自动读取DXF的单位显示出来，如果没有读取到默认取mm
-   缩放比例：默认为1，你可以根据需要调整
-   宽高：系统根据你选择的缩放比例自动计算出导入图形的宽高
-   参考点：默认放置时的参考点取DXF文件的原点，如果DXF文件的原点距离图形很远，建议切换参考点到图形中心
-   导入配置：根据你的需要勾选需要的DXF层以及导入到eda的层，导入后的图元类型均为线条，需要在放置后手动切换类型为板框或挖槽区域

    3.点击导入按钮，将根据你选择的参考点进入待放置模式，左键点击画布，即可完成图形的放置

    4.导入后的图形全部为线条类型，需要手动调整类型为板框或挖槽区域。

借助命令辅助完成多边形板框\*\*

-   `x<space><x><space><y>`:绝对坐标命令
-   `ix<space><x><space><y>`:相对坐标命令
-   `ix<space><x>`:X方向相对坐标命令
-   `iy<space><y>`:Y方向相对坐标命令

**注意**:

-   板框和挖槽区域要求必须闭合，如果你选择的线条不是闭合的，需要多选这几段线条后通过右键菜单**合并为闭合对象**合并成一个整体，再进行板框的转换

-   板框层的非闭合线条也会作为板框层导出，不影响你用线条绘制板框。

## 添加圆角 {#圆角}

专业版中绘制圆角矩形边框的方法与标准版不同，它被拆分于另外一个功能，具体操作步骤如下：

选择矩形的板框，在右边属性面板可以设置圆角半径。

![图 22](/storage/images/cn/pcb/place-board-outline/place-board-outline_20240621_172128.png)

也可以选择板框，板框需要为一个完整的闭合回路才能生成圆角 - 鼠标右键 - 添加圆角

![图 21](/storage/images/cn/pcb/place-board-outline/place-board-outline_20240621_172129.png)

在弹窗中输入圆角的宽度 - 点击确定即可给板框生成圆角

![image-20210522144133302](/storage/images/cn/pcb/place-board-outline/place-board-outline_20240621_172130.png)

![image-20210522144216389](/storage/images/cn/pcb/place-board-outline/place-board-outline_20240621_172131.png)

未闭合的线条添加圆角：

![](/storage/images/cn/pcb/place-board-outline/place-board-outline_20240621_172132.gif)

## 添加斜角

选中轮廓后右键添加倒角。
