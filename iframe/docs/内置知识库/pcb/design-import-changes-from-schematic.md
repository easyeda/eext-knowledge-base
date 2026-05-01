# 从原理图导入变更

当原理图修改完成后，可在PCB中选择从**原理图导入变更**，将最新的原理图更新至PCB中。

操作入口：

-   顶部菜单 - 设计 - 从原理图导入变更

![image-20211222172350378](/storage/images/cn/pcb/design-import-changes-from-schematic/design-import-changes-from-schematic_20240621_172124.png)

如果原理图存在错误，会直接弹窗提醒，如标注重复，封装缺失等。

若无问题将弹出确认对话框：

![图 1](/storage/images/cn/pcb/design-import-changes-from-schematic/design-import-changes-from-schematic_20240621_172125.jpg)

如果你需要同时更新PCB里面的导线网络，则勾选“同时更新导线的网络”选项。编辑器会根据焊盘的网络自动更新关联的导线网络。

![图 1](/storage/images/cn/pcb/design-import-changes-from-schematic/design-import-changes-from-schematic_20240621_172126.jpg)

若确认无问题点击“**应用修改**”即可更新PCB。

**注意**：

-   因为原理图网络名是计算后生成，当你修改了原理图后部分网络如果出现变更，那么更新至PCB后，原网络已经布好的走线并不会被删除。
-   当勾选“同时更新导线的网络”后，更新焊盘网络并把焊盘相关的导线会跟随焊盘的网络更新，可能会出现导线网络变化的情况，你需要手动将导线旧的网络名改为新的网络名！大部分原理图更新网络后都可以更新到PCB，比如修改了器件编号，修改了网络标签等。但如果原理图有增删器件，PCB的导线网络需要手动修改，可以通过：点击导线 - 右键菜单 - 选择连接 - 右边属性修改网络。
-   PCB导入变更后，有些变更你将无法撤销！
