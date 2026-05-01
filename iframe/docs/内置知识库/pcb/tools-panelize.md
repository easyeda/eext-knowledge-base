# 拼版

嘉立创EDA提供了一个强大的拼版功能，可以很方便进行拼版操作。编辑器自带的拼板功能只支持拼当前单板，不支持拼多个不同的板子，如果需要拼接多个不同的板子需要使用手动拼板功能。

## 自动拼版

PCB画好后，确定板子的边框已经绘制完成，并且已经闭合后，可以使用拼板功能。

**操作入口：**

-   顶部菜单 - 工具 - 拼板

![图 19](/storage/images/en/pcb/tools-panelize/tools-panelize_20240621_172123.png)

### 不拼板

拼板的参数是存在文件中，不需要拼板的时候，选择不拼板。

### 拼板类型

**V割拼板**：

根据板子的设计需要采用V割拼板，在拼板时会根据边框/板框产生阵列，再根据设置的其他参数生成拼板预览。

![图 20](/storage/images/en/pcb/tools-panelize/tools-panelize_20240621_172124.png)

在生产的时候会根据边框线条进行V割，往板子V字形割开一条细槽，完成后，需要手动掰断分离板子。

**邮票孔拼版**：

邮票孔拼板是通过多组通孔，把需要拼接的板子连接起来，在生产完成后，手动掰断链接的地方。

![图 21](/storage/images/en/pcb/tools-panelize/tools-panelize_20240621_172125.png)

可以根据需要设置邮票孔的数量和尺寸等

**V割+邮票孔拼板**：

V割和邮票孔的组合拼板，比较适合不规则外形的板子，和有器件需要突出板子边框的场景。

### 工艺边

支持设置工艺边的高度和定位孔和定位点（mark点）尺寸。

![图 22](/storage/images/en/pcb/tools-panelize/tools-panelize_20240621_172126.png)

工艺边通常用于SMT贴片时进行板子进入贴片轨道，也方便SMT贴片定位。如果在嘉立创贴片的可以不需要该选项。

### 其他选项

拼板方式支持两种：

![图 25](/storage/images/en/pcb/tools-panelize/tools-panelize_20240621_172127.png)

-   只拼边框。推荐该方式。只拼边框时，2D和3D预览，Gerber和坐标文件仅包括单板数据，Gerber文件体积小，大部分板厂支持该拼板方式。嘉立创支持这个方式。
    ![图 23](/storage/images/en/pcb/tools-panelize/tools-panelize_20240621_172128.png)

-   拼接全部对象。拼接全部图元时，Gerber和坐标文件包含全部拼板数据，Gerber文件体积大，部分板厂需要该方式。
    ![图 24](/storage/images/en/pcb/tools-panelize/tools-panelize_20240621_172129.png)

自动拼版演示视频：https://www.bilibili.com/video/BV14d4y1u7TA/?spm_id_from=333.999.0.0

## 手动拼版

当自动拼板无法满足需要时，比如需要拼不同的板子，需要进行阴阳拼板（如太极图形）等时，只能使用手动拼板。

需要注意，手动拼板如果PCB比较大，会导致PCB卡顿，并且不好对位等，建议使用自动拼板功能。

步骤：

1、打开需要拼板的PCB，或其他不同的PCB

2、框选或CTRL+A全选PCB内容，CTRL+C复制

3、切换到需要拼板的PCB，CTRL+SHIFT+V进行粘贴。这个快捷键粘贴会自动把飞线层隐藏，并且保持位号不会递增，支持自动处理网络名，确保粘贴的网络名不重复。

4、可以在粘贴的时候对位，或者放置后批量框选再对位，也可以把板子组合后再移动对位。

5、如果需要工艺边和V割线，则在边框层（板框层）绘制边框线条。

![图 26](/storage/images/en/pcb/tools-panelize/tools-panelize_20240621_172130.png)

6、如果需要邮票孔，放置圆形挖槽区域，设置好大小和间距，放在边框线上。邮票孔直径0.55mm，间距0.85mm。具体参数可以参考：[嘉立创V割拼板](https://www.sz-jlc.com/portal/server_guide_69.html) 和 [嘉立创邮票孔拼板](https://www.sz-jlc.com/portal/server_guide_10181.html)

![图 27](/storage/images/en/pcb/tools-panelize/tools-panelize_20240621_172131.png)

7、如果需要定位孔和定位点，可以放置圆形挖槽区域（定位孔），加单层焊盘（定位点）。定位点需要在顶层和底层信号层均放置，定位孔直径2mm，定位点焊盘直径1mm，阻焊扩展0.5mm。

![图 28](/storage/images/en/pcb/tools-panelize/tools-panelize_20240621_172132.png)

定位孔和定位点需要在对角放置，并且上边和下边距离左右边界的距离不能一样，否则SMT无法准确定位，如图。

![图 29](/storage/images/en/pcb/tools-panelize/tools-panelize_20240621_172133.png)

手动拼版演示视频：https://www.bilibili.com/video/BV1WG411G72h/?spm_id_from=333.999.0.0

注意：

1、有内电层的板子不能使用手动拼板，否则内电层无法正常生效。因为内电层的实现方式必须要和完整边框才可以，手动复制粘贴多个边框内电区块分割会异常，网络也无法继承。需要改为信号层用铺铜代替内电分割。
2、编辑器自带拼板和手动拼板不能同时进行。
3、支持在只拼边框模式下也将挖槽区域复制到拼版中。
![图 0](/storage/images/cn/pcb/tools-panelize/tools-panelize_20241225_181101.jpg)
