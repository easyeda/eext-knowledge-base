# 导入网表

网表也称网络表，就是网络连接和连接表示，其内容主要是电路图中各个元件类型、封装信息、连接关系等信息。使用导出的网表文件可以导入到PCB中，PCB会自动根据网表里面的封装信息，网络信息自动在PCB生成对应的元件等信息。

**操作入口**：

-   顶部菜单 - 文件 - 导入 - 网表

![图 0](/storage/images/cn/pcb/file-import-netlist/file-import-netlist_20240621_172124.jpg)

导入网表支持的格式有：.tel、.enet、.asc、.net

选择完需要导入的网表文件后，会出现确认导入信息弹窗

![图 1](/storage/images/cn/pcb/file-import-netlist/file-import-netlist_20240621_172125.jpg)

-   分组依据：动作、对象。将会影响下方表格的分层方式

-   过滤：可以输入需要的关键字进行查询

![图 2](/storage/images/cn/pcb/file-import-netlist/file-import-netlist_20240621_172126.jpg)

-   同时更新导线的网络：如果涉及到焊盘网络的表更，两个焊盘一起从一个网络变为了另一个网络时，勾选此项可以将它们直接原本的导线过孔连接同步变更网络

导入前：

![图 4](/storage/images/cn/pcb/file-import-netlist/file-import-netlist_20240621_172127.jpg)

导入后：

![图 5](/storage/images/en/pcb/file-import-netlist/file-import-netlist_20240621_172126.jpg)

-   优先库路径：导入网表时器件库和封装库查询的路径，优先级高的库找到同名器件和封装时优先使用，如果没有找到，则按照优先级顺序依次查询其他库，优先库路径顺序可以拖动左侧的图标进行排序调整。

![图 6](/storage/images/cn/pcb/file-import-netlist/file-import-netlist_20240621_172128.jpg)

-   导出报告：可以将当前对话框中的变更项导出为.csv文件
