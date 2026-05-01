# 设置工程图纸

在新建的工程中，嘉立创EDA会默认设置一个图纸符号给图页。

如果需要设置自定义的图纸，在每次新建工程时，可以在“顶部菜单 - 设置 - 图纸”设置修改默认的图纸模板。

当创建完工程后，会把工程的图纸模板存下来，下次创建新的图页的时候会根据工程图纸模板的信息进行创建图纸。如需更改，我们可以再另外设置工程图纸的模板信息。

## 当前工程图纸模板 {#drawing}

**操作入口：**

- 顶部菜单 - 设计 - 图纸预设

![image-20221118112255825](/storage/images/cn/schematic/design-project-drawing-setting/design-project-drawing-setting_20240621_172124.png)

工程图纸设置对话框：

![图 0](/storage/images/cn/schematic/design-project-drawing-setting/design-project-drawing-setting_20241008_093541.png)

在预设图纸中所保存的图页属性设置，仅针对新建的原理图页生效。

![图 5](/storage/images/cn/schematic/design-project-drawing-setting/design-project-drawing-setting_20250303_112535.jpg)

当点击确认按钮后，系统会弹出一个询问是否将相关配置应用到当前工程的提示窗口。若予以确认，该配置则会被设定为后续新建原理图页的默认图纸样式。

![图 6](/storage/images/cn/schematic/design-project-drawing-setting/design-project-drawing-setting_20250303_112639.jpg)

如果需要对已有的图纸进行修改，可通过选中相应的图页，随后在右侧的属性栏中进行相应的修改操作。

![图 7](/storage/images/cn/schematic/design-project-drawing-setting/design-project-drawing-setting_20250303_113134.jpg)

**图纸模板**：点击后，选择所需要的新模板。如果后续的图页不需要图纸，在打开的图纸选择对话框里面勾选“不使用图纸”。

![图 9](/storage/images/cn/schematic/design-project-drawing-setting/design-project-drawing-setting_20240621_172126.png)

**图纸明细表**：这里是根据图纸模板展示对应可以修改的属性，在右侧修改属性值，下次创建图页的时候，图纸的值将根据这里设置的值生成。

![图 1](/storage/images/cn/schematic/design-project-drawing-setting/design-project-drawing-setting_20241008_093645.png)

在修改工程图纸模板，点应用的时候会提示应用范围，可以快速进行设置。

![图 12](/storage/images/cn/schematic/design-project-drawing-setting/design-project-drawing-setting_20240621_172129.png)

**边框属性**：这里可以根据需要修改原理图边框的属性值。

![图 2](/storage/images/cn/schematic/design-project-drawing-setting/design-project-drawing-setting_20241008_093932.png)

## 编辑页图纸模板

如果需要更换当前图页的图纸模板，只需要在画布右边的属性面板设置新的图纸模板即可，点击图纸输入框，会弹窗旋转新的模板。

![图 3](/storage/images/cn/schematic/design-project-drawing-setting/design-project-drawing-setting_20241008_094115.png)

选择新的图纸或不使用图纸后应用即可生效到当前图页。

![图 53](/storage/images/en/schematic/design-project-drawing-setting/design-project-drawing-setting_20240621_172129.png)

当前图页的图纸替换只对当前图页有效，下个新建图页会根据工程图纸设置创建。

当前图页的图纸边界属性值和相关明细表也可在这进行修改。

![图 4](/storage/images/cn/schematic/design-project-drawing-setting/design-project-drawing-setting_20241008_094444.png)

如果要编辑当前图纸，可以点击图纸名称旁边的“编辑”图标，将会打开当前的图纸符号库，等待编辑保存。
![图 14](/storage/images/cn/schematic/design-project-drawing-setting/design-project-drawing-setting_20240621_172131.png)

打开后，可以根据自己的需要修改图纸的大小，可以通过左侧的向导调整，也可以手动添加自定义属性，修改表格等。
![图 15](/storage/images/cn/schematic/design-project-drawing-setting/design-project-drawing-setting_20240621_172132.png)

修改完成后，保存即可更新之前的图纸。如果没有及时更新，请重新打开图页。

## 创建自定义图纸模板

如果没有想要的图纸模板，可以自己新建一个图纸符号进行关联。

入口：顶部菜单 - 新建 - 图纸，符号类型选择图纸符号。

![图 16](/storage/images/cn/schematic/design-project-drawing-setting/design-project-drawing-setting_20240621_172133.png)

![图 17](/storage/images/cn/schematic/design-project-drawing-setting/design-project-drawing-setting_20240621_172134.png)

绘制完图纸符号后，即可在系统设置，工程图纸设置，单页图纸切换里面找到新建的图纸，并应用。

![图 18](/storage/images/cn/schematic/design-project-drawing-setting/design-project-drawing-setting_20240621_172135.png)

再次编辑可以在底部库 - 器件 - 个人中找到，再右键器件列表进行编辑。

![图 19](/storage/images/cn/schematic/design-project-drawing-setting/design-project-drawing-setting_20240621_172136.png)

操作演示视频：https://www.bilibili.com/video/BV1hP4y1f7HQ/?spm_id_from=333.999.0.0
