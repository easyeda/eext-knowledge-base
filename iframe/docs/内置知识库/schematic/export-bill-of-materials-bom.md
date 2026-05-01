# 导出BOM

## 导出BOM

嘉立创EDA支持单独PCB导出BOM表(物料清单)，以便于你购买所需的零件。

-   顶部菜单 - 文件 - 导出 - 物料清单BOM

-   顶部菜单 - 导出 - 物料清单BOM
    ![图 164](/storage/images/cn/schematic/export-bill-of-materials-bom/export-bill-of-materials-bom_20240621_172124.png)
    ![图 165](/storage/images/cn/schematic/export-bill-of-materials-bom/export-bill-of-materials-bom_20240621_172125.png)

功能说明：

-   **范围**：选择导出工程的PCB还是原理图的BOM表

-   **文件名**：导出BOM的文件名

-   **文件类型**：只支持XLSX和CSV格式

-   **过滤规则**：支持添加过滤规则，把不需要的元件进行过滤。过滤配置会保存在个人偏好，云端同步。

-   **全部属性**：中间则是BOM表的类型或器件的属性。可以根据需要勾选需要导出的属性。
    ![图 166](/storage/images/cn/schematic/export-bill-of-materials-bom/export-bill-of-materials-bom_20240621_172126.png)

## BOM设置

**BOM表头设置**：右侧是可以选择导出BOM表的内容。
![图 167](/storage/images/cn/schematic/export-bill-of-materials-bom/export-bill-of-materials-bom_20240621_172127.png)

选择需要导出的内容，点击勾选或往右移动按钮，即可添加进入BOM里面。
![图 168](/storage/images/cn/schematic/export-bill-of-materials-bom/export-bill-of-materials-bom_20240621_172128.png)

移除的操作也是同样的操作，只需要在右侧选中需要移除的分类，点击小箭头或顶部的移除图标，就能将选择的属性给移出BOM。
![图 169](/storage/images/cn/schematic/export-bill-of-materials-bom/export-bill-of-materials-bom_20240621_172129.png)

添加类型的排序则需要双击右侧需要改的内容，或者选择类型点击顶部的上下箭头改变BOM列的顺序。
![图 171](/storage/images/cn/schematic/export-bill-of-materials-bom/export-bill-of-materials-bom_20240621_172130.png)

-   **标题**：导出BOM的标题；双击有修改BOM的表头名称。

-   **属性**：导出器件的属性名；

-   **排序**：导出BOM表属性的排列顺序；体现在BOM里面单元格内部的排序。

-   **键值**：设置该属性是否需要合并在一行。

    -   **主键**：将相同的属性导出BOM表时值合并导出，合并一行。
    -   **次键**： 将相同的属性导出BOM表时值分开导出，独立一行；

![图 170](/storage/images/cn/schematic/export-bill-of-materials-bom/export-bill-of-materials-bom_20240621_172131.png)

导出的BOM表示例：

![](/storage/images/en/pcb/export-bill-of-materials-bom/export-bill-of-materials-bom_20240621_172126.png)

当导出BOM的文件类型选择`XLSX`时,可以使用`嘉立创EDA专业版 BOM 模板`进行导出

![图 7](/storage/images/cn/schematic/export-bill-of-materials-bom/export-bill-of-materials-bom_20241219_143744.jpg)

使用`嘉立创EDA专业版 BOM 模板`导出的BOM表如下

![图 6](/storage/images/cn/schematic/export-bill-of-materials-bom/export-bill-of-materials-bom_20241219_143350.jpg)

## 元件下单

嘉立创EDA专业版支持BOM下单，在导出BOM的界面上选择元件下单，系统就会生成BOM数据，点击确定就可以跳转到立创商城BOM匹配界面上。

![图 173](/storage/images/cn/schematic/export-bill-of-materials-bom/export-bill-of-materials-bom_20240621_172133.png)

立创商城地址：https://www.szlcsc.com
