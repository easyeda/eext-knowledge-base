# 约束区域

约束区域多用于含BGA的PCB设计中，绘制一个约束区域后，可以对该区域设置特殊规则。在区域内进行布线、打孔、铺铜操作时，优先按照规则约束的线宽、过孔尺寸、间距进行交互，而在区域外进行操作时，则按正常的规则。

## 放置约束区域

**操作入口**：顶部菜单-放置-约束区域

![图 0](/storage/images/cn/pcb/place-constraint-region/place-constraint-region_20240621_172124.jpg)

1.通过顶部菜单选择矩形、圆形、多边形后，画布进入光标模式，开始进行区域形状的绘制

![图 1](/storage/images/cn/pcb/place-constraint-region/place-constraint-region_20240621_172125.jpg)

2.绘制完成一个形状后，会出现约束区域属性弹窗，可以提前设置好相关的属性，也可以先点击确认，在属性面板进行修改。

![图 2](/storage/images/cn/pcb/place-constraint-region/place-constraint-region_20240621_172126.jpg)

3.在放置完成后，如果需要对约束区域形状进行微调，可以选中后拖动控制点进行调整，与调整板框等轮廓对象的操作相同。

![图 3](/storage/images/en/pcb/place-constraint-region/place-constraint-region_20240621_172126.jpg)

## 约束区域属性

![图 4](/storage/images/cn/pcb/place-constraint-region/place-constraint-region_20240621_172127.jpg)

-   **类型**：约束区域属于轮廓对象体系，下拉可以切换到其他类型，如填充区域、铺铜区域。

-   **名称**：每个约束区域的名称是唯一的，设计规则中进行约束区域规则分配时将会用到此名称。如果修改名称为一个已经存在的名称，将无法修改成功。

![图 5](/storage/images/cn/pcb/place-constraint-region/place-constraint-region_20240621_172128.jpg)

-   **图层**：约束区域可以设置在任意铜箔层或多层。当约束区域设置在单层时，DRC检查将只有这个层应用约束区域内的规则；当约束区域设置在多层时，所有铜箔层在约束区域内的部分均会应用约束区域内的规则。

-   **约束选项**：在属性面板中可以直接下拉切换区域内对应的规则，另一种方式是进入设计规则对话框进行分配。默认所有规则都为空，为空即表示这个区域内没有分配特殊规则，按照正常没有规则进行DRC计算。当需要给区域内分配一个特殊的规则，如安全间距规则需要设置一个更小规则时，直接下拉切换到对应规则。

![图 6](/storage/images/cn/pcb/place-constraint-region/place-constraint-region_20240621_172129.jpg)

如果还没有提前设置区域内的规则，需要先进入设计规则的规则管理中新增，可直接点击对应规则的设置图标或下拉选项进入。

![图 7](/storage/images/cn/pcb/place-constraint-region/place-constraint-region_20240621_172130.jpg)

![图 8](/storage/images/cn/pcb/place-constraint-region/place-constraint-region_20240621_172131.jpg)

## 约束区域规则

除了直接通过修改约束区域的属性来分配区域内规则外，也可以进入设计规则对话框进行约束区域规则的分配。

**操作入口**：顶部菜单-设计-设计规则，顶部tab切换至区域规则。

![图 9](/storage/images/cn/pcb/place-constraint-region/place-constraint-region_20240621_172132.jpg)

该页面下左侧树选择规则类型，右侧的表格中针对不同区域下拉切换规则。

![图 10](/storage/images/cn/pcb/place-constraint-region/place-constraint-region_20240621_172133.jpg)

## 约束区域交互

设置过规则的约束区域内，进行布线交互时会产生不同的效果。

在起始布线宽度和起始打孔尺寸均设置为跟随规则的情况下，从约束区域所在层内部开始布线，将会以区域内的导线线宽规则、差分规则、间距规则、过孔尺寸等规则进行出线。

![图 11](/storage/images/cn/pcb/place-constraint-region/place-constraint-region_20240621_172134.jpg)

当从区域内布线到区域外，或从区域外布线到区域内，内外部的导线宽度规则不一样时，将会在内外边界自动改变线宽。

![图 12](/storage/images/cn/pcb/place-constraint-region/place-constraint-region_20240621_172135.jpg)

规则分配优先级为：区域规则>网络-网络规则>网络规则。

实时DRC以及DRC的检查，铺铜，针对约束区域内有特殊规则的，都将按照区域内规则进行计算。

![图 13](/storage/images/cn/pcb/place-constraint-region/place-constraint-region_20240621_172136.jpg)
