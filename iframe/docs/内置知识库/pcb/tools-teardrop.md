# 泪滴

在绘制PCB电路板时，我们可以通过添加泪滴来避免电路板在受到巨大外力冲撞时导线与焊盘或过孔断开。此外，添加泪滴还可以使PCB电路板更加美观，以及能够保护焊盘，避免多次焊接时焊盘脱落。在生产过程中，使用泪滴也可以避免蚀刻不均匀导致的裂缝以及过孔偏位的出现。此外，泪滴还能够平滑信号传输中的阻抗，减少阻抗的急剧跳变，避免高频信号传输中因线宽突然变小而引起的反射问题。

在2.1版本中，我们添加泪滴的工具迎来的重大的更新，支持了走线和T型连接的泪滴添加；泪滴的边也变为了弧形，更加美观

![图 0](/storage/images/en/pcb/tools-teardrop/tools-teardrop_20240621_172123.jpg)

**添加泪滴流程**：

-   顶部菜单 - 工具 - 泪滴
-   选中导线 - 鼠标右键 - 泪滴

![image-20210520155002979](/storage/images/cn/pcb/tools-teardrop/tools-teardrop_20240621_172124.png)

![image-20210520155056942](/storage/images/cn/pcb/tools-teardrop/tools-teardrop_20240621_172125.png)

点击确定，即可生成泪滴

![图 2](/storage/images/cn/pcb/tools-teardrop/tools-teardrop_20240621_172126.jpg)

添加泪滴成功后效果图

![图 4](/storage/images/en/pcb/tools-teardrop/tools-teardrop_20240621_172127.jpg)

## 操作

-   新增：选择此选项会移除原有泪滴（如果有的话）然后重新添加泪滴
-   移除：选择此选项会移除画布上的泪滴
    ![图 6](/storage/images/cn/pcb/tools-teardrop/tools-teardrop_20240621_172127.jpg)

## 应用范围

![图 9](/storage/images/cn/pcb/tools-teardrop/tools-teardrop_20240621_172128.jpg)

-   全部：新增或者移除的范围为整个PCB
-   仅选中：新增或者移除的范围为选中的范围，可以在打开窗口前提前选中，或者是在打开窗口后再选中也是支持的

## 形状

支持圆弧或者线条

![图 14](/storage/images/cn/pcb/tools-teardrop/tools-teardrop_20240621_172129.jpg)

![图 10](/storage/images/cn/pcb/tools-teardrop/tools-teardrop_20240621_172130.jpg)

## 选项

生成泪滴时忽略DRC：勾选此选项后，生成泪滴时可能会生成带有DRC的泪滴。

![图 15](/storage/images/cn/pcb/tools-teardrop/tools-teardrop_20240621_172131.jpg)

## 范围

此处可以设置不同位置所添加的泪滴的宽度或者高度

![图 17](/storage/images/cn/pcb/tools-teardrop/tools-teardrop_20240621_172132.jpg)
