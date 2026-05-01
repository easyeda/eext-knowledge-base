# 更新工程库

嘉立创EDA的工程是以库模板复用的方式实现，当元件库放置在文档的时候，会创建一个副本作为模板，这样可以确保元件库的更新不会直接影响到全部使用过该库的工程或文档，需要更新到工程里面时，需要手动使用“更新工程库”功能。

当器件库有更新的时候，比如器件的属性变更，符号和封装有编辑更新，可以在更新工程库菜单进行更新。

注意，如果只更新器件只会更新器件属性，不会更新掉符号或封装。

**操作步骤**：

-   顶部菜单 - 设计 - 更新工程库

![图 3](/storage/images/cn/schematic/design-update-project-library/design-update-project-library_20240621_172124.png)

-   选择元件 - 鼠标右键 - 更新工程库；

![图 2](/storage/images/cn/schematic/design-update-project-library/design-update-project-library_20240621_172125.png)

弹窗中显示出改过的器件版本信息。勾选最新的器件，点击更新，即可将最新的修改的符号更新至工程下。支持预览前后差异，对比变更的属性。

![图 4](/storage/images/cn/schematic/design-update-project-library/design-update-project-library_20240621_172126.png)

默认不打开元件库的更新检测，你可以在：设置 - 系统 - 常用，里面把检测选项开启：“显示符号/封装更新对话框与提示”。打开工程后，会弹出更新工程库弹窗。

![图 5](/storage/images/cn/schematic/design-update-project-library/design-update-project-library_20240621_172127.png)

-   显示公开库的更新：如果不勾选，只显示系统库和个人库的更新
-   显示当前版本晚于更新版本的更新：有时候当前工程库会进行编辑，所以会更新更新时间，就会出现了当前版本更新时间比更新版本，这里可以设置是否显示。
-   不在提示：这个会把设置项“显示符号/封装更新对话框与提示”取消勾选。

当开启检测时，符号有更新的时候，打开原理图会出现图中紫色的虚线框。

![图 6](/storage/images/cn/schematic/design-update-project-library/design-update-project-library_20240621_172128.png)
