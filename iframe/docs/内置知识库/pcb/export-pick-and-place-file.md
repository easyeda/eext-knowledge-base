# 导出坐标文件

嘉立创EDA支持导出SMT坐标信息，以便于工厂进行SMT贴片。坐标文件只能在PCB中导出。

**操作入口**：

-   顶部菜单 - 文件 - 导出 - 坐标文件

-   顶部菜单-导出-坐标文件\*\*点击后，弹出导出坐标文件对话框。

![image-20211223140852249](/storage/images/cn/pcb/export-pick-and-place-file/export-pick-and-place-file_20240621_172124.png)

点击后打开**导出坐标文件**窗口

![图 0](/storage/images/cn/pcb/export-pick-and-place-file/export-pick-and-place-file_20260106_161256.png)

-   文件名：支持自定义导出的文件名

-   导出文件类型：支持XLSX, CSV, TXT 三种文件类型。

-   单位：支持设置为mm或者mil

-   镜像底层元件坐标：有部分贴片厂商需要底层元件镜像后的坐标，可以勾选该选项，一般不需要勾选。在嘉立创打样不需要勾选

-   包含拼板后的元件坐标(嘉立创不需要)：输出所有拼版的坐标

-   包含拼板后的Mark点坐标(嘉立创不需要)：勾选后输出拼板后的Mark点坐标

**统计**
统计处可以勾选需要导出的内容,在右侧表格内可以调整输出内容在表格中的顺序

![图 3](/storage/images/cn/pcb/export-pick-and-place-file/export-pick-and-place-file_20240621_172126.jpg)

导出的坐标文件如下如所示：

![图 1](/storage/images/en/pcb/export-pick-and-place-file/export-pick-and-place-file_20240621_172125.png)

表头说明：

-   Designator：位号
-   Comment：器件。器件的名称，一般是元件的制造商编号。
-   Footprint：封装，器件绑定的封装名。
-   Mid X, Mid Y: 封装的焊盘中央点坐标。
-   Ref X，Ref Y：封装的原点坐标。
-   Pad X，Pad Y：封装第一个焊盘的坐标。
-   Layer：封装所在的层。
-   Rotation：封装的旋转角度。
-   SMD：封装是否属于全贴片。
