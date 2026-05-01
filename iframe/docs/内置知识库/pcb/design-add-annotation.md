# 添加批注

嘉立创EDA专业版支持在图页中进行批注功能，可用于工程文件在内部设计或者交付过程中的评审，在进行批注后，其他人打开工程即可查看到，他人添加评论也可以实时更新，并且可以进行回复、标记完成、删除等操作，可以极大的提高团队协作效率。

## 使用方法

提示：该功能暂提供给私有部署，公网版本暂未支持。

### 创建批注

-   顶部菜单 - 设计 - 添加批注
-   选中图元 - 右键菜单 - 添加批注

![图 32](/storage/images/cn/pcb/design-add-annotation/design-add-annotation_20240621_172124.jpg)

-   直接从顶部菜单下-设计中的添加批注，会直接在画布上放置一个矩形区域，这个矩形的区域不会绑定到图元上

-   选中具体的一个或多个图元后，点击鼠标右键，选择添加批注，这样添加的批注会绑定到对应图元。注意：所有可放置的图元以及泪滴和内电层都可以添加批注

![图 30](/storage/images/cn/pcb/design-add-annotation/design-add-annotation_20240621_172125.gif)

添加批注时，必须要在右侧面板的对应批注条内输入内容，否则退出输入后，批注框会自动消失

![图 35](/storage/images/cn/pcb/design-add-annotation/design-add-annotation_20240621_172126.jpg)

批注支持导出到表格。

![图 0](/storage/images/cn/pcb/design-add-annotation/design-add-annotation_20240930_163550.png)

导出的表格如下：

![图 1](/storage/images/cn/pcb/design-add-annotation/design-add-annotation_20240930_163706.png)

### 批注的显示和选中

可以点击此处开关控制整个工程的画布是否显示批注，每次打开工程时，此开关都是默认关闭的，需要手动打开

![图 36](/storage/images/cn/pcb/design-add-annotation/design-add-annotation_20240621_172127.jpg)

在最上方可以选择显示当前工程的批注或者是当前文档的批注

![图 24](/storage/images/cn/pcb/design-add-annotation/design-add-annotation_20240621_172128.jpg)

点击画布批注框可以选中批注，同时会选中批注绑定的图元，右侧批注面板也会自动定位到该条批注

![图 40](/storage/images/cn/pcb/design-add-annotation/design-add-annotation_20240621_172129.jpg)

在右侧面板点击某一条批注也会选中该批注条，画布中的批注框会居中显示

![图 43](/storage/images/cn/pcb/design-add-annotation/design-add-annotation_20240621_172130.jpg)

如果在右侧面板双击批注条，会选中画布上批注框，并且居中和适应画布大小，在未打开对应图页的情况下进行双击，还会自动打开到该图页

![图 44](/storage/images/cn/pcb/design-add-annotation/design-add-annotation_20240621_172131.jpg)

将鼠标悬浮在右侧面板某一条批注上时，对应批注以及画布上的批注框会高亮

![图 46](/storage/images/cn/pcb/design-add-annotation/design-add-annotation_20240621_172132.gif)

### 批注的回复和删除

将鼠标放到某一条批注内容上既可显示删除和回复的按钮，点击即可进行对应操作

![图 49](/storage/images/cn/pcb/design-add-annotation/design-add-annotation_20240621_172133.jpg)

回复某一条批注后，回复内容的上方会显示具体回复了哪一条内容

![图 16](/storage/images/cn/pcb/design-add-annotation/design-add-annotation_20240621_172134.jpg)

当被回复的内容删除之后，会显示已删除

![图 18](/storage/images/cn/pcb/design-add-annotation/design-add-annotation_20240621_172135.jpg)

### 回复的状态

在每一个块批注的右上角，你可以将对应内容标记为已完成

![图 20](/storage/images/cn/pcb/design-add-annotation/design-add-annotation_20240621_172136.jpg)

批注面板左上角可以对批注面板的内容进行筛选，可以筛选未处理、已处理或者所有的批注

![图 22](/storage/images/cn/pcb/design-add-annotation/design-add-annotation_20240621_172137.jpg)

在设置中你可以自定义批注框的相关样式

![图 52](/storage/images/cn/pcb/design-add-annotation/design-add-annotation_20240621_172138.jpg)
