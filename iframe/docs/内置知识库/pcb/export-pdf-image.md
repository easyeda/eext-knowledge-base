# 导出PDF/图片

原理图和PCB的导出PDF功能有所不同，但操作相似。可单独支持导出图层、和对象，设置导出镜像以及透明度。

- **顶部菜单 - 导出 -PDF/图片**

点击后会弹出设置窗口

![image-20210522170637209](/storage/images/en/schematic/export-pdf-image/export-pdf-image_20240621_172123.png)

在窗口的最上方可以设置导出文件的名称

![图 0](/storage/images/cn/pcb/export-pdf-image/export-pdf-image_20240621_172124.jpg)

导出的PDF支持设置水印，点击“显示”并在弹出框选择需要显示的水印。

![图 1](/storage/images/cn/pcb/export-pdf-image/export-pdf-image_20240929_113630.png)

![图 2](/storage/images/cn/pcb/export-pdf-image/export-pdf-image_20240929_113802.png)

点击右侧的“样式设置”进行水印样式设置,可以设置水印内容的颜色，透明度，字体，字体大小等参数。

![picture 0](/storage/images/cn/pcb/export-pdf-image/export-pdf-image_20241231_075938.jpg)

![picture 1](/storage/images/cn/pcb/export-pdf-image/export-pdf-image_20241231_080106.jpg)

**菜单属性**

选择后，导出的PDF在PDF阅读器里打开，单击器件是可查看器件的属性。

![image-20210522170706288](/storage/images/en/pcb/export-pdf-image/export-pdf-image_20240621_172124.png)

**仅显示轮廓**

选择后，将导出的PDF的焊盘、导线、轮廓图元都只显示轮廓。

![image-20210522170723714](/storage/images/en/pcb/export-pdf-image/export-pdf-image_20240621_172125.png)

## 输出方式

**单个多页PDF**：可以在同一个PDF文件中导出多页不同的内容

在下方你可以对导出的每一页PDF进行配置，点击绿色的加号可以增加一页PDF，选中一页PDF可以点击向上或向下的箭头来调整排序，点击红色的×可以进行删除。

![图 1](/storage/images/cn/pcb/export-pdf-image/export-pdf-image_20240621_172125.jpg)

你可以通过对勾选框的配置来选择是否导出这一页。点击PDF页名称后，右侧可以配置这一页需要导出的层和对象

![图 2](/storage/images/cn/pcb/export-pdf-image/export-pdf-image_20240621_172126.jpg)

![image-20210522170840086](/storage/images/en/schematic/export-pdf-image/export-pdf-image_20240621_172127.png)

**多个单页PDF**：选择此项将会把每一层导出为单独的一个PDF，最后合并为一个压缩包，下方可选择需要导出的图层、是否镜像以及调整透明度。导出的对象选择。

![image-20210522170852875](/storage/images/en/schematic/export-pdf-image/export-pdf-image_20240621_172128.png)

![image-20201225094143365](/storage/images/en/schematic/export-pdf-image/export-pdf-image_20240621_172129.png)

**单个单页PDF**：将所有的图层导出为一个图纸页，同样可选择导出的图层、透明度调节，导出的对象选择。

![image-20210522170908032](/storage/images/en/schematic/export-pdf-image/export-pdf-image_20240621_172130.png)

![image-20210522170919417](/storage/images/en/schematic/export-pdf-image/export-pdf-image_20240621_172131.png)

## 颜色

可选择导出的PDF图片颜色,支持设置自定义背景颜色和各层颜色。

**白底黑图**

![image-20210522170932977](/storage/images/en/pcb/export-pdf-image/export-pdf-image_20240621_172128.png)

**黑底白图**

![image-20210522170943967](/storage/images/en/pcb/export-pdf-image/export-pdf-image_20240621_172129.png)

**全彩**

![image-20210522170956829](/storage/images/en/pcb/export-pdf-image/export-pdf-image_20240621_172130.png)

**自定义**

![图 3](/storage/images/cn/pcb/export-pdf-image/export-pdf-image_20240930_102149.png)

![图 4](/storage/images/cn/pcb/export-pdf-image/export-pdf-image_20240930_102218.png)

# 导出位号图与 BOM

嘉立创EDA支持在导出 PDF 时选择生成包含位号图与 BOM 表的 PDF 文件。

**功能入口**:

- 顶部工具栏 - 导出 - PDF

在图页配置中新增了位号图与BOM表的选项，用户可选择将其包含在导出文件中。

![图 0](/storage/images/cn/pcb/export-pdf-image/export-pdf-image_20250331_070136.jpg)

位号图主要用于辅助生产和调试环节，其核心价值在于将 PCB 上的物理元器件与原理图、BOM 表中的信息进行快速对应。

导出的位号图如下所示：

![图 2](/storage/images/cn/pcb/export-pdf-image/export-pdf-image_20250331_070438.jpg)

![图 3](/storage/images/cn/pcb/export-pdf-image/export-pdf-image_20250331_070451.jpg)

导出的 BOM 表 PDF 如下所示：

![图 1](/storage/images/cn/pcb/export-pdf-image/export-pdf-image_20250331_070408.jpg)

导出的 BOM 表支持自定义编辑导出配置

![图 4](/storage/images/cn/pcb/export-pdf-image/export-pdf-image_20250331_070529.jpg)

![图 5](/storage/images/cn/pcb/export-pdf-image/export-pdf-image_20250331_070545.jpg)
