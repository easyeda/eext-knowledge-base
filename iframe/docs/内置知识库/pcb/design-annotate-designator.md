# 分配位号

PCB中通过分配位号功能也能根据板子布局信息进行位号的重新分配，通过自动化的方式重置位号，能够大大节省手动分配的时间。

**操作步骤**：

顶部菜单 - 设计 - 分配位号

![图 0](/storage/images/cn/pcb/design-annotate-designator/design-annotate-designator_20240621_172124.jpg)

**分配位号对话框**

![图 1](/storage/images/cn/pcb/design-annotate-designator/design-annotate-designator_20240621_172125.jpg)

**_范围_**

-   全部元件：对画布中的所有元件均进行分配位号

-   顶层元件：对画布中的所有顶层元件进行分配位号

-   底层元件：对画布中的所有底层元件进行分配位号

-   选中的元件：对画布当前选中的元件进行分配位号

**_操作_**

-   分配位号但保留已有位号：对于已经有后缀的位号保留，仅对后缀为“？”或位号为空的位号进行分配。

-   全部重新分配位号：所有位号均重新分配

-   清除位号：所有位号均重置为后缀为“？”

**_顺序_**

根据不同的顺序来进行分配位号操作

![图 2](/storage/images/cn/pcb/design-annotate-designator/design-annotate-designator_20240621_172126.jpg)

**_位号规则_**

可选择从哪个数字起开始分配位号,按照此数字递增排序，如果某个位号已经被分配，则插空分配下一个位号。

**小技巧**：在PCB进行分配位号后，原理图和PCB的网表会产生差异，此时可以通过PCB转原理图功能将新的位号传给原理图进行修改。

![图 3](/storage/images/cn/pcb/design-annotate-designator/design-annotate-designator_20240621_172127.jpg)
