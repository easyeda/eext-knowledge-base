# 右侧面板-属性

## 右侧面板-属性

### 图页属性

**名称**

面板设计图的名称，右侧仅展示不支持修改。但是可以在左侧的工程中修改面板名称即可同步到右侧面板中。

![图 1](/storage/images/cn/panel/side-panel-right-property/side-panel-right-property_20240621_172124.png)

**图层**

设计图的图层显示，默认是不可修改的，只有选中图形才能修改。

![图 0](/storage/images/cn/panel/side-panel-right-property/side-panel-right-property_20240621_172125.png)

**方向**

设计图框的方向，可设置设计图画布的纵向或横向。

![图 2](/storage/images/cn/panel/side-panel-right-property/side-panel-right-property_20240621_172126.png)
![图 3](/storage/images/cn/panel/side-panel-right-property/side-panel-right-property_20240621_172127.png)

**备注**

用于备注设计图的说明信息，方便给协助者或其他工程师作说明。
注意：建议生产相关的备注在下单页面备注栏中填写。

### 对象属性

当在画布选中一个图元时，可以在右边属性面板设置其属性。

![图 4](/storage/images/cn/panel/side-panel-right-property/side-panel-right-property_20240621_172128.png)

**名称**

对象的名称支持自定义，通常默认为空。

**ID**

对象的ID是默认分配，是由图元属性类型名+序号，仅显示不支持自定义。

**图层**

图层下拉框中支持切换选择的图层是该对象允许绘制的所有图层，文本仅支持透明控制层和打印层，图片仅支持打印层，辅助图元仅支持辅助绘制层。
![图 12](/storage/images/cn/panel/side-panel-right-property/side-panel-right-property_20240621_172129.png)

在右侧属性编辑图层属性后，画布当前编辑层会自动切换到编辑后的图层。（与右侧图层面板中切换当前编辑层效果一致）

![图 23](/storage/images/cn/panel/side-panel-right-property/side-panel-right-property_20240621_172130.png)
![图 21](/storage/images/cn/panel/side-panel-right-property/side-panel-right-property_20240621_172131.png)

**透明度（打印层，白底）**

用于设置打印层和白底层透明的，可以直接输入具体数值，也可以通过下面的坐标选择器快捷设置相关透明参数。
![图 14](/storage/images/cn/panel/place-rectangle/place-rectangle_20240621_172125.png)

**生效**

默认绘制的面板图元都是生效的，可在右侧属性中设置不生效，实际生产文件中将踢出该对象的信息，画布上可见黄色高亮的特殊样式。

![图 13](/storage/images/cn/panel/side-panel-right-property/side-panel-right-property_20240621_172132.png)

**参考点**

-   修改任意一个对象的参考点，画布上所有对象的参考点同步更改，即全局对象参考点是保持一致的。

-   同一个图元设置不同的参考点，可以操作其在画布上进行不同的形变。
    例如：分别设置9种不同的参考点，矩形宽高等比例缩小到原本的1/2时，如下图示意呈现的变化效果不一
    ![图 6](/storage/images/en/panel/side-panel-right-property/side-panel-right-property_20240621_172130.png)

-   设置中间点为参考点，右侧修改正圆的宽高，将保持圆心固定，即可方便修改同心圆的尺寸
    ![图 7](/storage/images/cn/panel/side-panel-right-property/side-panel-right-property_20240621_172133.png)

-   对象的旋转角度、宽高尺寸、位置坐标等属性的调整结果均与参考点的设置相关联。

**X/Y坐标**

-   对象的参考点处的XY坐标值，单位mm，支持调整。

**宽、高**
这里的提供的是对象的轴对齐包围矩形的宽高数值，即一个与坐标轴平行的矩形，它完全包围住图元，并且每条边都与坐标轴平行。
![图 8](/storage/images/cn/panel/side-panel-right-property/side-panel-right-property_20240621_172134.png)

设置"保持宽高比"时，仅修改宽度值，高度值也会同步按照原本的比例更新；反之同理。
![图 9](/storage/images/cn/panel/side-panel-right-property/side-panel-right-property_20240621_172135.png)
单击切换为不保持宽高比后，修改宽度值，高度值会保持；反之同理。
![图 10](/storage/images/cn/panel/side-panel-right-property/side-panel-right-property_20240621_172136.png)

**圆角**

目前仅支持矩形的圆角设置，且只能4个圆角同时设置。

**旋转**

画布上直接操作对象的旋转，所产生的旋转角度值会同步到右侧属性。同理右侧调整旋转数值，画布上对象的旋转角度实时更新。

**隐藏**

下拉框可选"是"或"否"，对应左侧对象树和画布上选中对象右键菜单的隐藏显示设置，3处设置是实时联动的。
注意：隐藏只是暂时画布上不可见，不决定是否在实际生产中生效。
![图 11](/storage/images/cn/panel/side-panel-right-property/side-panel-right-property_20240621_172137.png)

**锁定**
下拉框可选"是"或"否"，对应左侧对象树和画布上选中对象右键菜单的锁定解锁设置，3处设置是实时联动的。

**填充颜色、描边颜色**

只有打印层和灯光仿真层的对象可设置填充、描边样式。

默认勾选填充颜色、描边颜色，即所设置的颜色是作用于当前对象的。
取消勾选，对象的填充、描边颜色的设置保持，但是不作用于当前对象，画布上可见无填充、无描边，实际生产也是没有填充、描边的。
![图 15](/storage/images/cn/panel/side-panel-right-property/side-panel-right-property_20240621_172138.png)

支持将换填充颜色与描边颜色进行快捷的互换，单击颜色数值框后面的"颜色互换"设置图标即可。
![图 17](/storage/images/cn/panel/side-panel-right-property/side-panel-right-property_20240621_172139.png)

**线宽**

默认绘制的对象线宽为1mm，支持自定义。

对于属性面板的数值输入框，支持简单的四则运算输入，会自动计算结果。比如在宽输入：5+3，回车会自动计算出 8 并应用。输入不符合规则的则会重置为旧值。
![图 18](/storage/images/cn/panel/side-panel-right-property/side-panel-right-property_20240621_172140.png)

### 多对象属性

当选择了多对象时，可以在右边属性面板修改整体的位置和尺寸信息和其他属性。

![图 19](/storage/images/cn/panel/side-panel-right-property/side-panel-right-property_20240621_172141.png)

**旋转角度**

这里的**旋转角度**是所有选中对象整体进行旋转的角度，与单个对象的**旋转**角度不同。
设置整体的旋转角度，会给单个对象的旋转角度分别增加同样的旋转度数

选中多对象操作属性的更改要慎重，会进行批量的更改，最好在顶部的进行对象的选择，每次批量操作同一类的对象。
![图 20](/storage/images/cn/panel/side-panel-right-property/side-panel-right-property_20240621_172142.png)
