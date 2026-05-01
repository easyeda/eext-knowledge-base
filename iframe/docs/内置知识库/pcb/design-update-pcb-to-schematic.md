# 更新PCB到原理图

正常情况下，PCB设计需要先完成原理图，通过原理图转PCB或PCB导入更新功能将最新的网表导入进PCB中。而在PCB布局布线完成后，如果需要根据PCB布局信息进行重置位号，或对某个元件进行器件替换，则可以先在PCB中完成此类操作，再反向更新到原理图，此种方式可以提高工作效率。

**操作入口**：

原理图中，顶部菜单 - 设计 - 从PCB导入变更

![图 0](/storage/images/cn/pcb/design-update-pcb-to-schematic/design-update-pcb-to-schematic_20240621_172124.jpg)

PCB中，顶部菜单 - 设计 - 更新PCB到原理图

![图 1](/storage/images/cn/pcb/design-update-pcb-to-schematic/design-update-pcb-to-schematic_20240621_172125.jpg)

**注意**：PCB转到原理图需要保证它们在同一个板子下，否则将无法互转

![图 2](/storage/images/cn/pcb/design-update-pcb-to-schematic/design-update-pcb-to-schematic_20240621_172126.jpg)

**检查网表差异**

PCB转原理图仅支持元件属性的修改（例如修改元件的器件、位号信息），涉及元件的增删、网络的修改将无法转到原理图，此时在日志和画布中央会出现相关提示信息。

![图 3](/storage/images/cn/pcb/design-update-pcb-to-schematic/design-update-pcb-to-schematic_20240621_172127.jpg)

可以在日志中点击元件定位到原理图具体位置，查看并进行修改

![图 4](/storage/images/cn/pcb/design-update-pcb-to-schematic/design-update-pcb-to-schematic_20240621_172128.jpg)

元件属性的修改将出现在接下来弹出的确认导入信息弹窗中

![图 5](/storage/images/cn/pcb/design-update-pcb-to-schematic/design-update-pcb-to-schematic_20240621_172129.jpg)

**应用修改**

检查并勾选需要修改的项目，点击应用修改，对应的属性将更新至原理图中

![图 6](/storage/images/cn/pcb/design-update-pcb-to-schematic/design-update-pcb-to-schematic_20240621_172130.jpg)
