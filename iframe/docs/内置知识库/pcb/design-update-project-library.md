# 更新工程库

在修改完封装和符号后，不需要删除PCB里的封装也可以直接把修改完成的封装或器件更新到设计图中。

**操作入口**：

-   顶部菜单 - 设计 - 更新工程库

![图 51](/storage/images/cn/pcb/design-update-project-library/design-update-project-library_20240621_172124.png)

更新工程库会清空历史记录，无法进行撤销重做，更工程库前先保存文件。

![图 52](/storage/images/cn/pcb/design-update-project-library/design-update-project-library_20240621_172125.png)

选择封装进行更新即可，更新前先进行预览并对比差异，确认没有问题后更新。

![图 53](/storage/images/cn/pcb/design-update-project-library/design-update-project-library_20240621_172126.png)

**注意**：_更新工程库会影响整个工程，有引用到这个库的文档都会影响到，下次打开文档就会使用新的库版本，如果你只想改某个元件的封装，可以在封装右键 - 编辑封装 - 仅应用选中元件。_

![图 54](/storage/images/cn/pcb/design-update-project-library/design-update-project-library_20240621_172127.png)
