# 器件

器件在放置的画布后称为元件。

嘉立创EDA专业版的原理图和PCB均使用模板机制，放置一个器件在画布后，该器件会进入工程库作为该工程的模板，后续继续放置相同的器件时，会优先使用工程库的模板，不被器件库的更新所影响。

如果想更新工程库模板，可以在：顶部菜单 - 设计 - 更新符号，或者画布元件，右键菜单 - 更新符号进行更新工程的器件，符号或者封装。

## 器件对话框

**操作入口：**

- 顶部菜单 - 放置 - 器件
- 顶部工具栏 - 放置器件图标
- 快捷键 <kbd>SHIFT</kbd>> + <kbd>F</kbd>

- 顶部菜单 - 放置 - 快捷器件、测试点
- 顶部工具栏 - 快捷器件下拉、测试点

![图 4](/storage/images/cn/schematic/place-device/place-device_20240621_172124.png)

搜索引擎支持立创商城和嘉立创EDA双引擎，当其中一个引擎不符合搜索期望时，可以进行切换。立创商城引擎只可以搜索系统库的器件。

![图 0](/storage/images/cn/schematic/place-device/place-device_20240621_172125.png)

默认是详情列表，支持参数筛选过滤。也可以切换到表格列表。

![图 28](/storage/images/en/schematic/place-device/place-device_20240621_172123.png)

表格列表支持预览实物图，符号，封装，3D模型预览图。

![图 29](/storage/images/en/schematic/place-device/place-device_20240621_172124.png)

放置上方的图标可以进行更多操作，操作与底部库操作一致，列表模式下右键也可以唤出菜单。
![图 1](/storage/images/cn/schematic/place-device/place-device_20240621_172126.png)

点击放置器件时，器件对话框会自动消失，取消放置时再显示等待选择新的器件。在表格列表模式也可以双击库列表进行放置。

技巧：使用<kbd>ESC</kbd>> 键关闭放置对话框。

放置器件时，可以按<kbd>TAB</kbd>> 键设置主要的名称和位号。

![图 20](/storage/images/cn/schematic/place-device/place-device_20240621_172127.png)

## 底部元件库

同时支持另外一个入口放置器件，底部面板，快捷键<kbd> \ </kbd>

![图 18](/storage/images/en/schematic/place-device/place-device_20240621_172125.png)

支持鼠标右键展开管理菜单。
![图 0](/storage/images/cn/schematic/place-device/place-device_20240929_114512.png)

选择一个器件，点击放置按钮，或者双击放置。

在工程库里面，可以编辑当前工程的器件，符号，封装的模板内容，更新后会自动刷新对应图页和PCB。

在放置器件超过设置的数量时，会有消息提示。
![图 18](/storage/images/en/schematic/place-device/place-device_20240621_172126.png)

目前嘉立创EDA专业版的原理图没有使用和PCB一样的新引擎，故不建议放置超过 150 个元件每页，否则会比较卡顿。元件数量多建议新建图页。

![图 17](/storage/images/en/schematic/place-device/place-device_20240621_172127.png)

当选择放置的器件是图纸类型的器件时，会将当前图页的图纸进行替换，替换为所选的图纸器件。

## 元件属性

点击元件后，右侧属性面板可以修改和添加元件的属性。

![图 2](/storage/images/cn/schematic/place-device/place-device_20240621_172128.png)

属性名说明：

- 名称：这个相当于元件的备注，根据需要进行输入，可以通过“={属性名}”的方式关联其他属性值，方便在导出BOM时对关键属性进行聚合显示在一列内。此类名称显示在画布上时，双击修改，会修改到关联属性的值。例如在名称中填写“={值}”并显示在画布上，则在画布上双击修改，“值”的属性会被联动修改。
- ID：编辑器内部使用的ID。
- 位号：元件位号。器件放置的时候默认自动分配位号，可以在设置-原理图里进行设置。多部件或子库的元件不知道自动分配位号。
- 唯一ID：和PCB进行关联的ID，通过这个ID确定PCB对应的元件，更新PCB的时候会自动分配，也可以手动输入。
- 器件：这个元件所属的器件。
- 符号：这个元件所关联的符号模板。
- 封装：这个元件所关联的封装模板，可以点击替换新的封装。
- 加入BOM：是否可以导出在BOM中。
- 转到PCB：是否可以转到PCB中。
- 部件名称：多部件元件才有的属性，可以通过下拉选项进行部件切换，切换当前元件的其他部件。
- 多部件序号：多部件元件才有的属性，显示当前部件在整个元件符号中的位置。
- 多部件总数：多部件元件才有的属性，显示整个元件符号的部件数量。
- 多部件分组：多部件元件才有的属性，用于手动规定多部件元件的分组，位号分配时会考虑这个字段。

- 关键属性：一些常用属性。
- 更多属性：除了常用属性，其他的属性，在打开原理图后，给元件添加的自定义属性。新增自定义属性名，可以在：设置 - 属性，进行添加。

勾选属性名或属性值可以显示在画布。

![图 10](/storage/images/en/schematic/place-device/place-device_20240621_172128.png)

画布点击属性的时候会出现指示线。这个指示线可以在：设置 - 原理图设置，进行关闭。

当元件进行旋转的时候，默认会自动调整属性的位置，也可以在设置里面关闭，关闭后属性会跟随元件进行旋转：

![图 11](/storage/images/en/schematic/place-device/place-device_20240621_172129.png)

![图 16](/storage/images/en/schematic/place-device/place-device_20240621_172130.png)

也可以通过属性位置功能进行批量设置属性位置： 顶部菜单 - 布局 - 属性位置。
![图 12](/storage/images/en/schematic/place-device/place-device_20240621_172131.png)

如果你想预设位号等属性的位置，你可以在新建符号的时候，在左侧属性面板把位号等属性显示在画布后设置位置，放置器件在画布的时候，会根据符号里面预设的位置进行显示，但元件旋转后会根据设置是否被重新调整。
![图 13](/storage/images/en/schematic/place-device/place-device_20240621_172132.png)

## 元件右键菜单

支持选中元件后，右键菜单，提供常用的一些对元件的操作等功能。

![图 3](/storage/images/cn/schematic/place-device/place-device_20240621_172129.png)

查看产品详情：会打开立创商城的产品详情页。

查看规格书：会根据属性“数据手册”的链接进行打开网页。

更新工程库：打开器件更新对话框。

编辑符号：可以打开符号编辑器，编辑工程库符号。

编辑器件：可以编辑工程库器件信息。

## 旋转元件时自动调整属性位置 {#xuan}

嘉立创EDA支持旋转元件时自动调整属性位置.

**功能入口**：

顶部菜单栏 - 设置 - 原理图/符号 - 通用

![图 0](/storage/images/cn/schematic/rotated-components-adjust-properties-location.md/rotated-components-adjust-properties-location.md_20250314_102509.jpg)

### 功能介绍

未开启旋转元件时自动调整属性位置。

![图 3](/storage/images/cn/schematic/rotated-components-adjust-properties-location.md/rotated-components-adjust-properties-location.md_20250314_102812.gif)

开启旋转元件时自动调整属性位置。

![图 1](/storage/images/cn/schematic/rotated-components-adjust-properties-location.md/rotated-components-adjust-properties-location.md_20250314_102729.gif)
