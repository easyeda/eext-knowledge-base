# 原理图设置

**操作入口：**

- 顶部菜单 - 设置 - 原理图/符号/仿真

![图 0](/storage/images/cn/schematic/settings-schematic/settings-schematic_20260403_165938.png)

## 通用

![图 1](/storage/images/cn/schematic/settings-schematic/settings-schematic_20240621_172125.png)

**单位**：设置原理图和符号默认使用的单位，修改后应用到新打开的页。

**网格类型**：设置原理图和符号默认的画布网格类型，修改后应用到新打开的页。

**网点**、**网格**、**无**。

![image-20201216151515527](/storage/images/en/symbol/settings-symbol/settings-symbol_20240621_172125.png)

**十字光标**：设置原理图编辑器的光标大小；

**线宽显示**：设置线宽整体器件线宽的大小；

![image-20201219155030053](/storage/images/en/schematic/settings-schematic/settings-schematic_20240621_172124.png)

开启跟随缩放变化的线条效果会变得比较粗。

![image-20210518154746947](/storage/images/en/schematic/settings-schematic/settings-schematic_20240621_172125.png)

**默认网格尺寸**： 打开原理图或者符号库的网格尺寸。ALT吸附网格是指当按住ALT键时，进行绘制或者移动图元移动或吸附的网格大小。

**吸附网格**：决定打开原理图或者符号库时，所有操作是否吸附网格。可以在顶部菜单-编辑-吸附和顶部工具栏进行临时修改，修改并不会影响设置中的的吸附网格选项。

**指示线**：根据设置是否显示元件原点和元件属性之间的指示线。

![图 29](/storage/images/en/schematic/settings-schematic/settings-schematic_20240621_172126.png)

**复制/剪切**：复制/剪切的时候是否需要选择参考点。

**默认网络名**：设置原理图中未命名的导线在导出网表和导入PCB时最终的网络命名规则。可以在右侧属性和网络树中查看。

![图 2](/storage/images/cn/schematic/settings-schematic/settings-schematic_20240621_172126.png)

**单击导线选中**：可以根据自己的使用习惯，切换单击导线时的选中范围，单段选中或者整段选中。

![图 30](/storage/images/en/schematic/settings-schematic/settings-schematic_20240621_172127.png)

**拖动网络名**: 当拖动导线的网络名离开导线上的处理方式。

- 调整属性位置：只移动属性名的位置，不影响导线的网络名。专业版之前的行为，和PADS，Orcad的网络标签行为类似。
- 修改网络名：网络名离开导线上时，导线的网络名会被清空，类似Altium和标准版的网络标签行为。

![图 31](/storage/images/en/schematic/settings-schematic/settings-schematic_20240621_172128.png)

**移动符号，导线跟随方式**：设置导线是否跟随元件移动。

**旋转符号，导线跟随方式**：设置旋转符号时，相连导线是否跟随保持连接。

![图 32](/storage/images/cn/schematic/settings-schematic/settings-schematic_20240621_172127.png)

**其他**：

- 符号编辑器显示标尺：是否显示画布标尺
- 放置或粘贴器件自动分配位号(粘贴不支持多部件元件/子库)：在器件放置的时候是否自动分配位号。将以最大值开始分配。
- 鼠标悬浮导线高亮整个网络：当鼠标悬浮到导线上面时，高亮当前画布的全部相同网络名的导线。
- 旋转元件时自动调整属性位置：如果不勾选，元件旋转的时候，属性也跟随旋转。

**每页元件放置数量**：目前原理图放置器件数量过多会比较卡顿，所以加了数量检测，建议一页放置100个元件以下，通过创建分页来放置其他器件。

## 主题

**原理图主题设置**

这里可以修改原理图图页的背景、画布、网格、选中、悬浮高亮、提示等颜色，还可以设置元素的主题色，当元素样式设置为跟随主题时，就跟随主题中的设置，用户也可以在元素的右侧属性设置为不跟随主题。

![图 3](/storage/images/cn/schematic/settings-schematic/settings-schematic_20240621_172128.png)

点击可以编辑颜色/描边颜色、填充颜色、字体风格和形状风格。
