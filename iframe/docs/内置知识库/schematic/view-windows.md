# 窗口排列

### 窗口排列

控制窗口的排列方式。操作平铺窗口后可以同时查看多个文档的内容详情，避免设计过程中的频繁切页，方便相互参照设计。

### 功能入口

画布分割的功能在原理图、PCB、符号、封装、面板、面板库等所有类型的编辑器中均提供了，操作入口和交互流程都是一致的。

**顶部菜单**

-   顶部菜单 - 视图 - 窗口排列 - 水平平铺
-   菜单快捷键： <kbd>V</kbd>+<kbd>W</kbd>+<kbd>H</kbd>

![图 0](/storage/images/cn/schematic/view-windows/view-windows_20240621_172124.png)

-   顶部菜单 - 视图 - 窗口排列 - 垂直平铺
-   菜单快捷键： <kbd>V</kbd>+<kbd>W</kbd>+<kbd>V</kbd>

![图 1](/storage/images/cn/schematic/view-windows/view-windows_20240621_172125.png)

-   顶部菜单 - 视图 - 窗口排列 - 平铺所有
-   菜单快捷键： <kbd>V</kbd>+<kbd>W</kbd>+<kbd>t</kbd>

![图 2](/storage/images/cn/schematic/view-windows/view-windows_20240621_172126.png)

-   顶部菜单 - 视图 - 窗口排列 - 合并所有
-   菜单快捷键： <kbd>V</kbd>+<kbd>W</kbd>+<kbd>M</kbd>

![图 3](/storage/images/cn/schematic/view-windows/view-windows_20240621_172127.png)

**文档页签行**

在文档页签行的任意文档页签上鼠标右键，右键菜单可操作水平/垂直分割画布，还可以直接操作平铺所有，同样可操作合并所有。鼠标左键双击可关闭页签。

![图 4](/storage/images/cn/schematic/view-windows/view-windows_20240621_172128.png)

当太多文档打开时，可下拉列表展示全部标签页。

![图 0](/storage/images/cn/schematic/view-windows/view-windows_20240930_155035.png)

### 可操作文档类型

图页、符号、PCB、封装、面板、面板库、图纸、网络标识、网络端口、无电气标识类型的文档，以及PCB、面板、面板库的3D预览文档，PCB的2D预览文档等均支持通过顶部菜单或者文档右键菜单操作对应的画布分割。

### 窗口分布规则

**水平分割**

右键焦点处的文档页签当前所在窗口将会在水平方向上被均分成2个窗口，且右键焦点处的文档页签将被分配到下面新增的窗口中。

![图 5](/storage/images/cn/schematic/view-windows/view-windows_20240621_172129.gif)

**垂直分割**

右键焦点处的文档页签当前所在窗口将会在垂直方向上被均分成2个窗口，且右键焦点处的文档页签将被分配到右边新增的窗口中。

![图 6](/storage/images/cn/schematic/view-windows/view-windows_20240621_172130.gif)

**平铺所有**

默认将按照纵向2个、横向平均分割整个画布区域，分割出的窗口个数与打开的文档页签数一致。

![图 7](/storage/images/cn/schematic/view-windows/view-windows_20240621_172131.gif)

**水平平铺**

将按照横向1个、纵向平均分割整个画布区域。

![图 9](/storage/images/cn/schematic/view-windows/view-windows_20240621_172132.gif)

**垂直平铺**

将按照纵向1个、横向平均分割整个画布区域。

![图 10](/storage/images/cn/schematic/view-windows/view-windows_20240621_172133.gif)

**合并所有**

所有的小窗口被合并为一个大窗口。

![图 8](/storage/images/cn/schematic/view-windows/view-windows_20240621_172134.gif)

### 调整窗口

**拖动调整**

进行画布分割后，可在具体的文档页签上按住鼠标左键进行拖动，调整文档所在窗口。

![图 11](/storage/images/cn/schematic/view-windows/view-windows_20240621_172135.gif)

**拉伸调整**

光标移动到窗口边界显示为拉伸图标时，按住鼠标左键拖动可以拉伸调整窗口的宽/高。

![图 12](/storage/images/cn/schematic/view-windows/view-windows_20240621_172136.gif)

**窗口之间的交互**

窗口之间的交互规则保持与画布分割前的一致，只是画布分割后同时可见多个文档内容，省去了切页的操作。

注意：当前编辑文档的页签样式为浅蓝色的，操作快捷键会在当前编辑页中生效。

![图 15](/storage/images/cn/schematic/view-windows/view-windows_20240621_172137.png)

-   **交叉选择**

当在原理图图页中选中部分器件后，操作交叉选择，会对应在PCB画布中选中高亮并居中显示。

![图 13](/storage/images/en/schematic/view-windows/view-windows_20240621_172137.gif)

-   **布局传递**

当在原理图图页中选中部分器件后，操作布局传递，PCB画布显示对应器件吸附在光标上。

![图 14](/storage/images/cn/schematic/view-windows/view-windows_20240621_172138.gif)

-   **复制粘贴**

支持跨窗口的复制粘贴，PCB与封装、原理图图页与符号、面板与面板库等之间。

![图 16](/storage/images/cn/schematic/view-windows/view-windows_20240621_172139.gif)
