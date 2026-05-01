# 新建面板库

## 面板库

面板库的绘制比较自由，没有具体设计规则约束，可以在任意位置绘制任意大小的任意层图元，提供与面板相同的绘制工具。面板库不能直接导出用于生产，但可以放置面板库到面板画布上，放置后面板库不是保持一个整体的，方便进一步调整。

### 新建入口

注意：专业版编辑器才支持面板库的创建，面板库可以单独新建。

-   **未打开任何工程时**，顶部菜单 - 文件 - 新建 - 面板库

![图 0](/storage/images/cn/panel/file-new-panel-lib/file-new-panel-lib_20240621_172123.png)

-   **已打开某工程时**，顶部菜单 - 文件 - 新建 - 面板库

![图 1](/storage/images/cn/panel/file-new-panel-lib/file-new-panel-lib_20240621_172124.png)

### 操作步骤

**新建弹窗**

操作新建面板库菜单项后，会弹出新建弹窗。
面板库的名称需要自定义，不能为空且长度限制在1~128字符。（必要操作）

![图 2](/storage/images/cn/panel/file-new-panel-lib/file-new-panel-lib_20240621_172125.png)

可以在创建面板库的时候就进行分类管理。单击分类栏右侧的"..."，弹出分类选择弹窗，为将要创建的面板库选择分类。

![图 4](/storage/images/cn/panel/file-new-panel-lib/file-new-panel-lib_20240621_172126.png)
![图 5](/storage/images/cn/panel/file-new-panel-lib/file-new-panel-lib_20240621_172127.png)

也可以在新建面板库弹窗中或分类选择弹窗中单击管理分类，弹出分类设置弹窗，单击绿色加号可以新增分类。

![图 6](/storage/images/cn/panel/file-new-panel-lib/file-new-panel-lib_20240621_172128.png)

还可以给面板库添加一些描述。

![图 7](/storage/images/cn/panel/file-new-panel-lib/file-new-panel-lib_20240621_172129.png)

最后单击保存按钮即可完成面板库的创建，会自动打开刚新建完成的面板库的编辑页。

**面板库编辑页**

面板库编辑页中默认是隐藏材料边界层的。左侧面板默认打开库设计，展示有创建该面板库时的自定义信息，支持再调整。

![图 8](/storage/images/cn/panel/file-new-panel-lib/file-new-panel-lib_20240621_172130.png)

面板库的工具栏与面板的基本一致，面板库中图元的绘制与在面板中的绘制方式一致。

![图 9](/storage/images/cn/panel/file-new-panel-lib/file-new-panel-lib_20240621_172131.png)

左侧对象树、右侧属性面板等均保持与面板编辑器的一致。

![图 10](/storage/images/cn/panel/file-new-panel-lib/file-new-panel-lib_20240621_172132.png)

**导出面板库**

-   顶部菜单 - 文件 - 另存为 - 文档另存为(云端)...

![图 20](/storage/images/cn/panel/file-new-panel-lib/file-new-panel-lib_20240621_172133.png)

另存为云端相当于新建面板库，需要重新自定义面板库的名称、分类、描述等信息，而面板库中的内容是会直接复制到新建的这个面板库内。

![图 21](/storage/images/cn/panel/file-new-panel-lib/file-new-panel-lib_20240621_172134.png)

-   顶部菜单 - 文件 - 另存为 - 文档另存为(本地)...

导出到本地的面板库文件名后缀为.epanl

![图 19](/storage/images/cn/panel/file-new-panel-lib/file-new-panel-lib_20240621_172135.png)

-   底部库 - 面板库 - 选中具体的面板库后鼠标右键

右键菜单中同样可选择操作"文档另存为(云端)..."或"文档另存为(本地)..."菜单项，进行面板库的导出。

![图 22](/storage/images/cn/panel/file-new-panel-lib/file-new-panel-lib_20240621_172136.png)

**导入面板库**

-   顶部菜单 - 文件 - 导入 - 嘉立创EDA(专业版)...

![图 23](/storage/images/cn/panel/file-new-panel-lib/file-new-panel-lib_20240621_172137.png)

在弹出的选择文件弹窗内选择后缀为.epanl的面板库文件后，弹出导入确认信息弹窗。

![图 24](/storage/images/cn/panel/file-new-panel-lib/file-new-panel-lib_20240621_172138.png)

导入弹窗内单击导入按钮后，弹出新建面板库弹窗。面板库名称会被自动填入原文件名，完成新建面板库信息的自定义编辑后，单击保存按钮即可完成面板库的导入。

![图 25](/storage/images/cn/panel/file-new-panel-lib/file-new-panel-lib_20240621_172139.png)

注意：面板库名称是不允许重复的。可以自定义添加序号等方式避免重命名。

![图 26](/storage/images/cn/panel/file-new-panel-lib/file-new-panel-lib_20240621_172140.png)
