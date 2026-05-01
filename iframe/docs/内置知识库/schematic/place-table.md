# 表格

## 表格

在嘉立创EDA专业版中原理图支持放入表格，方便大家对原理图的说明以及观看。

**操作入口**：

-   顶部菜单 - 放置 - 表格...

![图 0](/storage/images/cn/schematic/place-table/place-table_20240621_172124.png)

-   或者直接单击顶部工具栏中的表格图标

![图 1](/storage/images/cn/schematic/place-table/place-table_20240621_172125.png)

### 创建表格

**表格属性弹窗**

进行表格的绘制前，会先弹出表格属性设置弹窗，即需要先自定义一些表格属性后再开始绘制。

-   弹窗中可见已有默认的的行列数，直接单击"确认"按钮即可确定待创建表格的属性开始绘制。

![图 2](/storage/images/cn/schematic/place-table/place-table_20240621_172126.png)

-   默认折叠更多表格属性设置，单击弹窗左下角的**更多设置**按钮，即可展开查看更多。

-   折叠的更多表格属性设置中，可以自定义表格的单元格属性和文本属性。

![图 3](/storage/images/cn/schematic/place-table/place-table_20240621_172127.png)

-   单元格的边框颜色、填充颜色以及边框的线宽都是支持自定义的。

![图 5](/storage/images/cn/schematic/place-table/place-table_20240621_172128.png)

-   表格文本的颜色、字体大小、字体、字体样式(加粗/斜体/下划线)都是支持自定义的，同时还可以设置行间距，对齐方式。

![图 6](/storage/images/cn/schematic/place-table/place-table_20240621_172129.png)

-   默认**勾选**"鼠标决定单元格尺寸"，单元格的行高、列宽是置灰的默认值。
    即单击确认按钮后可在图页画布上移动鼠标去决定表格的单元格宽高尺寸。

![图 4](/storage/images/cn/schematic/place-table/place-table_20240621_172130.png)

-   手动**取消勾选**"鼠标决定单元格尺寸"后，单元格的行高、列宽输入框取消置灰。
    进行属性自定义后单击确认按钮，则会根据弹窗中的属性设置信息自动创建一个表格，可直接在图页画布上鼠标左键放置表格。

![图 7](/storage/images/cn/schematic/place-table/place-table_20240621_172131.png)

-   展开更多设置的弹窗左下角还提供了**恢复默认样式**按钮，可以快速的重置表格属性为默认配置。

注意：
行列数至少为1，行高、列宽则至少为0.1inch(2.54mm),数值输入框内输入不符合规则约定的非法值均会重置为上一个合法的旧值。

表格属性弹窗内的各项值会保持上次的设置，操作展开更多设置后，下次显示表格属性弹窗也会是展开状态；操作折叠同理。

**绘制表格**

-   **鼠标决定(默认)**

当勾选了"鼠标决定单元格尺寸"，完成表格属性设置弹窗中的各项自定义并单击确认按钮后，光标右上角显示表格图标。

图页画布任意位置第一次鼠标左键确定表格的一个顶点，移动光标，预览显示一个固定行列数的表格，所有单元格的行高列宽会根据鼠标的移动而实时变化。

调整到合适大小，第二次鼠标左键即可确定表格的最终样式，完成该表格的绘制，并进入下一个表格的待绘制状态（也是鼠标决定单元格尺寸）。

![图 9](/storage/images/cn/schematic/place-table/place-table_20240621_172132.gif)

注意：在完成绘制前，可按键Tab，会再次弹出表格属性设置弹窗，可继续编辑各项表格的初始创建值。

-   **根据设置自动创建**

当未勾选"鼠标决定单元格尺寸"，完成表格属性设置弹窗中的各项自定义并单击确认按钮后，光标处直接跟随显示一个表格（根据表格属性弹窗中设置自动创建的）。

移动光标，鼠标左键即可将表格放置到合适位置，完成该表格的绘制，并进入下一个表格的待放置状态（显示有相同尺寸的表格跟随光标移动）。

![图 10](/storage/images/cn/schematic/place-table/place-table_20231103_160607.gif)

### 编辑表格

框选或单击表格的内/外边框，可以选中整一个表格。
表格外边框高亮，4顶点处显示绿色填充圆。
![图 11](/storage/images/cn/schematic/place-table/place-table_20240621_172133.png)

**表格遮罩**

直接单击选中单元格或者双击进入单元格文本编辑时，会进入表格的遮罩模式。

![图 12](/storage/images/en/schematic/place-table/place-table_20240621_172134.png)

仅表格部分正常亮度显示可编辑，其他非表格的部分全都显示被透明灰色遮盖效果。

单击非表格位置退出遮罩并取消表格的选中，单击内/外边框则退出遮罩并保持整一个表格的选中。

-   **进入遮罩前**

选中整个表格，鼠标移动到表格4顶点位置，光标对应变化为宽高等比例拉伸图标样式。按住左键拉伸表格，会批量调整该表格的所有单元格的宽高值。

![图 13](/storage/images/cn/schematic/place-table/place-table_20240621_172134.gif)

支持按键Shift拉伸整个表格，会保持单元格的宽高比进行变化。

![图 77](/storage/images/en/schematic/place-table/place-table_20240621_172136.gif)

选中整个表格后，表格外边框线上（除去4顶点拉伸功能区）为拖动功能区，光标变为"拖动图标"样式，可以移动整一个表格。

![图 14](/storage/images/en/schematic/place-table/place-table_20240621_172137.gif)

表格未被选中时，光标落在表格边框线/文本上，也可以直接拖动整一个表格，移动完会选中整个表格。

![图 15](/storage/images/cn/schematic/place-table/place-table_20240621_172135.gif)

鼠标移动到表格的内边框线上，光标变为"上下/左右拉伸图标"样式，此时按住左键可拖动对应边移动，改变单元格的行高/列宽值。

内边框线的拖动始终不会影响到表格的宽高尺寸（非推挤方式），只影响相关联的行列单元格的尺寸。

![图 16](/storage/images/cn/schematic/place-table/place-table_20240621_172136.gif)

注意：内边框线左右/上下移动存在范围限制，要始终保持与相邻的边框线不重合（保证最小的单元格尺寸0.1inch），内边线上下移动同理。

![图 17](/storage/images/cn/schematic/place-table/place-table_20240621_172137.gif)

-   **进入遮罩后**

**单元格的选中**

只要选中单元格，就一定会进入表格的遮罩模式。

支持按住鼠标左键框选中多个单元格，同样还支持Ctrl、Shift多选。

![图 18](/storage/images/cn/schematic/place-table/place-table_20240621_172138.gif)

鼠标移动到表格的左/上侧边的外侧5px宽区域，光标变为选中行列的功能图标样式，用于指示可选中其指向的整行/列单元格。

![图 19](/storage/images/cn/schematic/place-table/place-table_20240621_172139.gif)

**边的拉伸**

表格的外边框线不再是拖动功能区而是拉伸边的功能区，鼠标移动至表格的内外边框线上光标变为上下/左右拉伸图标样式。此时按住左键可拖动对应边移动，改变单元格的行高/列宽值（调整后一定是选中整一个表格的状态，非遮罩）

![图 20](/storage/images/cn/schematic/place-table/place-table_20240621_172140.gif)

处于遮罩下拉伸表格内边框线的交互规则与进入遮罩前的一致。

**文本的编辑**

双击单元格，即可进入文本编辑状态。（编辑表格文本，一定处于表格遮罩模式）

![图 21](/storage/images/cn/schematic/place-table/place-table_20240621_172141.gif)

单元格的宽和高都不会根据文本内容进行自适应调整，会进行自动换行。
内容多单元格小则显示不全，当手动拉伸将单元格扩大，则可看到所有的文本内容。

![图 22](/storage/images/cn/schematic/place-table/place-table_20240621_172142.gif)

注意：表格的尺寸大小不会根据文本内容的多少而改变，除非手动拉伸或右侧修改尺寸。

**表格设置悬浮窗**

进入表格的"遮罩"后(存在单元格被选中/文本编辑状态下)，提供了一个独立的表格设置悬浮窗，可自由拖动调整样式。

![图 23](/storage/images/cn/schematic/place-table/place-table_20240621_172143.png)

通过这个悬浮窗，可以对表格操作添加行列、删除行列、合并单元格、拆分单元格、设置单元格边框样式、设置文本的对齐样式。

-   **合并单元格**：会将所选的多个单元格合并为一个，内边框线隐藏，文本内容取"最左上角"的值。
    存在单元格的属性不统一时，则会弹窗提示：合并将只保留最左上角单元格的属性，确认合并吗？（左比上优先）
    ![图 24](/storage/images/cn/schematic/place-table/place-table_20240621_172144.png)

-   **拆分单元格**：仅当选中的1个单元格是进行过"合并单元格"操作的，"拆分单元格"的图标才正常显示否则置灰。

-   **表格边框设置**：直接单击悬浮窗中的边框图标，会根据上次选择的边框类型及边框颜色进行设置(初始默认：全边框、#A00000主题色)
    图标中包含1色块，用于显示当前默认的边框色，保持跟随上一次的设置，拉框可选定具体的边框类型，设置具体的边框颜色。
    ![图 25](/storage/images/cn/schematic/place-table/place-table_20240621_172145.png)

-   **文本对齐**：可以进行水平和垂直方向文本对齐的设置
    ![图 26](/storage/images/cn/schematic/place-table/place-table_20240621_172146.png)

注意：选中对象不同，悬浮窗中可操作的项不一致，支持会正常显示，置灰的都是不支持的。

### 右键菜单

**表格右键菜单**

可选中整个表格后右键菜单操作适应选中，会缩放并移动画布将表格置于画布中央显示。
还可以对表格进行剪切、复制、粘贴、删除等操作。
表格也可以加入到组合。
![图 37](/storage/images/cn/schematic/place-table/place-table_20240621_172147.png)

**单元格右键菜单**

选中单元格时，必定进入对应的表格遮罩下。

-   **粘贴**：会将剪切板上的文本内容、文本格式及单元格式都粘贴到所选单元格内。
    (每一个所选单元格都会更新为剪切板上的内容及格式。)

![图 38](/storage/images/cn/schematic/place-table/place-table_20240621_172148.gif)

-   **粘贴为纯文本**：仅将剪切板上的文本内容粘贴到所选单元格内。

![图 39](/storage/images/cn/schematic/place-table/place-table_20240621_172149.gif)

-   **适应选中**：会将所选单元格居中占满整个画布显示。

![图 42](/storage/images/cn/schematic/place-table/place-table_20240621_172150.gif)

-   **剪切**：所选单元格的内容及样式会清空恢复默认，剪切板上更新为所选单元格的内容样式。

![图 43](/storage/images/cn/schematic/place-table/place-table_20240621_172151.gif)

-   **复制**：所选单元格的内容及样式保持，剪切板上更新为所选的单元格的内容样式。

![图 44](/storage/images/cn/schematic/place-table/place-table_20240621_172152.gif)

-   **选中行**：选中所选单元格所在的行(选中多个分别位于不同行的单元格，也只会选中右键焦点处的单元格所在的那一行)

![图 45](/storage/images/cn/schematic/place-table/place-table_20240621_172153.gif)

-   **选中列**：选中所选单元格所在的列(选中多个分别位于不同列的单元格，也只会选中右键焦点处的单元格所在的那一列)

![图 46](/storage/images/cn/schematic/place-table/place-table_20240621_172154.gif)

-   **添加**:可以在所选单元格的上/下添加行或者左/右添加列。（仅在选中范围所属矩形的上/下添加一行，或左/右添加一列）

![图 48](/storage/images/cn/schematic/place-table/place-table_20240621_172155.gif)

-   **删除**：可以删除所选单元格所在行或列的所有单元格。(选中多个分别位于多行或多列的单元格，会删除多行或多列的单元格)

![图 49](/storage/images/cn/schematic/place-table/place-table_20240621_172156.gif)

-   **清除**：可以仅清除所选单元格的文本内容，也可以仅清除所选单元格的文本及单元格格式，还可以清除所选单元格的文本内容、文本格式和单元格格式。

![图 50](/storage/images/cn/schematic/place-table/place-table_20240621_172157.gif)
![图 51](/storage/images/cn/schematic/place-table/place-table_20240621_172158.gif)
![图 53](/storage/images/cn/schematic/place-table/place-table_20240621_172159.gif)

-   **合并单元格**：将所选的多个单元格合并为1个单元格。（只有在选中范围构成一个矩形且不是一个合并的单元格时才可操作该菜单项）

![图 54](/storage/images/cn/schematic/place-table/place-table_20240621_172200.gif)

-   **拆分单元格**：将所选单元格中所有的合并单元格进行拆分。(选中不包含合并单元格时,置灰且不支持操作该菜单项)

![图 55](/storage/images/cn/schematic/place-table/place-table_20240621_172201.gif)

**规则补充**

-   复制多个单元格后，再粘贴到一个合并的单元格上，被粘贴的合并单元格会自动拆分单元格，保持复制前的单元格数及内容样式。

![图 56](/storage/images/cn/schematic/place-table/place-table_20240621_172202.gif)

-   当粘贴的内容较多，而被粘贴位置不够时，画布中央短提示: 部分内容已被裁剪并粘贴成功！

![图 57](/storage/images/cn/schematic/place-table/place-table_20240621_172203.gif)

-   同时选中多个非连续的单元格操作剪切/复制，只会粘贴选中部分对应的单元格。

![图 58](/storage/images/cn/schematic/place-table/place-table_20240621_172204.gif)

-   目标粘贴区域没有完全包含合并单元格时，画布中央短提示：粘贴失败，目标粘贴区域与合并单元格区域存在冲突！（当目标粘贴区域内完全包含有合并单元格时，支持粘贴。）

![图 59](/storage/images/cn/schematic/place-table/place-table_20240621_172205.gif)

-   支持Delete键清除选中单元格的文本内容，支持Delete键删除选中的文本内容。

![图 60](/storage/images/cn/schematic/place-table/place-table_20240621_172206.gif)

-   支持Backspace键清除单元格的文本内容；在文本输入框中则可以删除光标前面的文本。

![图 61](/storage/images/cn/schematic/place-table/place-table_20240621_172207.gif)

**单元格文本右键菜单**

表格的文本右键菜单与浏览器的一致。

![图 62](/storage/images/cn/schematic/place-table/place-table_20240621_172208.png)

剪切/复制表格的单元格，进入到单元格的文本编辑模式下粘贴，只会粘贴文本内容。

![图 63](/storage/images/cn/schematic/place-table/place-table_20240621_172209.gif)

进入到单元格的文本编辑模式下剪切/复制文本，再到表格的单元格上粘贴，会粘贴上一次复制的单元格的内容。

![图 65](/storage/images/cn/schematic/place-table/place-table_20240621_172210.gif)

### 方向键与切换选中

**上下左右方向键**

选中单个单元格时，可以操作键盘的上/下/左/右方向键切换单元格的选中。

当已选中到表格最外边的单个单元格，继续按方向键无法按照预期切换选中单元格时，会保持单元格的选中。

![图 66](/storage/images/en/schematic/place-table/place-table_20240621_172213.png)

同时单击选中多个单元格时，有焦点则以焦点为准，以最后一个选中的单元格为参考进行切换选中。

![图 68](/storage/images/cn/schematic/place-table/place-table_20240621_172211.gif)

直接框选中多个单元格时，无焦点则以右下单元格为参考进行切换选中。

![图 69](/storage/images/cn/schematic/place-table/place-table_20240621_172212.gif)

**切换选中-Enter键、Tab键、F2键**

-   **Enter键**

选中单个单元格时，按键Enter后进入焦点单元格的文本编辑状态。

处于单元格文本编辑模式下，按键Enter则退出文本编辑并在垂直方向上切换选中下一行的同一列的单元格。

当选中的单元格位于最后一行，多次按键Enter只会在"进入单元格文本编辑"和"选中单元格"之间循环切换。

![图 71](/storage/images/cn/schematic/place-table/place-table_20240621_172213.gif)

单击选中多个单元格时或框选多个单元格时，按键Enter切换选中的参考对象同理方向键的规则。

![图 72](/storage/images/cn/schematic/place-table/place-table_20240621_172214.gif)

-   **Tab键**

按键Tab会在水平方向上切换选中其右列的同一行的单元格。

当选中的单元格位于最后一列时，按键Tab则会切换选中下一行的第一个单元格（选中表格最右下单元格时继续按键Tab会切换选中单元格最左上的单元格）

![图 73](/storage/images/cn/schematic/place-table/place-table_20240621_172215.gif)

-   **F2键**

选中单元格，按键F2则会进入焦点单元格的文本编辑状态。

单击选中多个单元格时按键F2会进入焦点单元格的文本编辑模式；框选多个单元格时按键F2则会进入右下单元格的文本编辑模式。

![图 74](/storage/images/cn/schematic/place-table/place-table_20240621_172216.gif)

**按键Esc**

处于表格遮罩模式下，选中单元格时按键Esc会退出遮罩，保持整一个表格的选中。

而处于单元格文本编辑模式下按键Esc则是退出编辑模式并保持该单元格的选中，不直接退出表格遮罩。

![图 76](/storage/images/cn/schematic/place-table/place-table_20240621_172217.gif)

### 右侧属性

选中整一个表格时，右侧属性的调整是针对整一个表格的，可以批量调整到所有单元格和文本的对应属性。

![图 27](/storage/images/cn/schematic/place-table/place-table_20240621_172218.gif)

选中具体的单元格或文本时，右侧属性的调整则是只针对于所选的单元格或文本。

![图 28](/storage/images/cn/schematic/place-table/place-table_20240621_172219.gif)
