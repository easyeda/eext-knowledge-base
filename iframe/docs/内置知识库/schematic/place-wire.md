# 导线/网络

导线是在设计原理图时，用于来连接各个器件之间的网络。

**注：**导线是具有电气属性的，不能用于当折线使用。

**操作入口：**

- 顶部快捷栏 - 导线

- 顶部菜单 - 放置 - 导线

- 快捷键<kbd>Alt</kbd> +<kbd>W</kbd>

![image-20221118104526359](/storage/images/cn/schematic/place-wire/place-wire_20240621_172124.png)

导线绘制未确定线段为半透明以做区分已确定线段。

![图 5](/storage/images/en/schematic/place-wire/place-wire_20240621_172124.png)

在移动符号的时候，导线是否跟随支持设置项设置：

需要临时修改是否断开连接，可以在移动开始前按住<kbd>Ctrl</kbd>+<kbd>Alt</kbd>进行拖动。
![图 15](/storage/images/cn/schematic/place-wire/place-wire_20240621_172125.png)

在进入导线绘制状态时，可以按<kbd>TAB</kbd> 键设置导线的名称

![图 8](/storage/images/cn/schematic/place-wire/place-wire_20240621_172126.png)

点击更多设置，可以快捷设置导线末端连接的元素。

![图 3](/storage/images/cn/schematic/place-wire/place-wire_20240621_172127.png)

绘制导线总线时支持<kbd>空格键</kbd>切换布线方向。如下图的未确定线段的方向。

![图 155](/storage/images/cn/schematic/place-wire/place-wire_20240621_172128.png)

绘制导线时，光标在符号范围内，会优先就近吸附引脚，如果需要不吸附，则可以按住<kbd>Alt</kbd>进行绘制。元件拖动时同样可以按住<kbd>Alt</kbd>取消吸附。

![图 2](/storage/images/cn/schematic/place-wire/place-wire_20240621_172129.jpg)

在 设置-原理图/符号-通用 中可以进行吸附的相关设置。

![图 0](/storage/images/cn/schematic/place-wire/place-wire_20241120_110114.png)

点击已有导线的未连接点，会进入到导线绘制模式，方便对导线进行编辑。

## 导线属性

嘉立创EDA专业版支持放置网络标签的功能，专业版的网络标签功能和直接给导线设置属性名称是一样的，和标准版的网络标签不一样。

![图 7](/storage/images/cn/schematic/place-wire/place-wire_20240621_172130.png)

属性说明：

- 名称：导线的名称，生成网络名的时候根据这个属性生成。当默认没有填写名称时，编辑器会自动根据导线ID或位号+引脚编号，生成一个系统默认的网络名。可以在设置-原理图-默认网络名中进行修改。
- 全局网络名：因为原理图支持层次图设计。底层原理图的导线名称和全局网络名不一定一致。全局网络名是转到PCB时所使用的网络名。

导线修改名称支持：

1、直接双击导线名修改

2、点击导线，在右边属性面板修改名称

- 名称字段会显示下拉框显示已有网络名，如果是总线分支则会显示符合总线的分支名称作为可选项，方便用户填写网络名。

3、绘制过程中按 TAB 键修改（如果导线之前有名称或有链接网络标识等，会提示网络修改弹窗，等待选择哪个名称）

**注意：**

- 嘉立创EDA专业版已经不支持多个网络名同时在一条导线上，如果需要不同网络连接在一起，请使用短接符进行短接两个网络。
- 如果需要在导线名称上添加上横线，在导线的网络名最前面输入波浪号，比如 `~VSS`。如果需要需要同时存在有上横线和无上横线的网络名则再次输入一个波浪号，比如：`~VSS~/GND`, 那么 VSS 上方有上横线，斜杠后面没有。该网络名转到PCB时，也会是`~VSS~/GND`。
  ![图 6](/storage/images/cn/schematic/place-wire/place-wire_20240621_172131.png)
- 当导线连接了网络标识后，导线名称会优先跟随网络标识的命名。修改导线名称时也会提示是否同步修改连接的网络标识。
  ![图 3](/storage/images/cn/schematic/place-wire/place-wire_20240621_172132.png)

- 当导线被拆分或者合并的时候，会弹窗选择操作后的网络分配。如果需要短接不同名称的导线需要使用短接符。
  ![图 7](/storage/images/cn/schematic/place-wire/place-wire_20240621_172133.png)

- 导线名称和连接的网络标签的全局网络名必须保持一致，否则在设计规则检查的时候会报错误，此时需要进行手动修改导线的名称或网络标签的全局网络名属性一致。出现不一致一般会出现在复制粘贴，导入等情况，需要手动修正一下。
  ![图 4](/storage/images/cn/schematic/place-wire/place-wire_20240621_172134.png)
  这三个属性值：导线名称，网络标识名称，全局网络名需要保持一致：
  ![图 6](/storage/images/cn/schematic/place-wire/place-wire_20240621_172135.png)

## 导线拾取选中

嘉立创EDA专业版支持两种导线拾取方式：

1、默认单击拾取完整整段导线，再次单击拾取单段导线；或单击选中单线段，再次点击拾取完整导线。

2、这个拾取方式支持在设置 - 原理图设置里面修改。
![图 14](/storage/images/cn/schematic/place-wire/place-wire_20240621_172136.png)

3、当点击选中单线段时，支持按 TAB 键选中完整导线。

## 导线右键菜单

在原理图设计中，提供了导线的右键菜单，支持多个功能方便设计和检视。

选中导线后，需要在导线上面右键才可以出现导线的右键菜单。

![图 8](/storage/images/cn/schematic/place-wire/place-wire_20240621_172137.png)

菜单说明：

- 导线批量重命名：支持多选不同的导线后，重新命名。
  ![图 9](/storage/images/cn/schematic/place-wire/place-wire_20240621_172138.png)
- 选择单段导线：当选择的导线是整条导线时，该菜单支持选择单段导线。
- 选择导线：当选中单段导线时，该菜单支持选择完整的导线。
- 选择网络：把当前图页的当前导线，其所属网络的全部导线都选中。
- 高亮网络：把当前导线的网络相同的导线全部持续高亮。左侧网络选项卡，也支持网络名右键高亮网络。
- 取消高亮网络：取消全部高亮的导线。

## 导线多网络

嘉立创EDA支持在同一导线上放置多个网络。

**功能入口**：

在 设置 - 原理图 - 通用 中设置导线多网络，灵活模式时，允许多个网络放置到同一个导线上。

![图 0](/storage/images/cn/schematic/wire-multi-network/wire-multi-network_20250306_092531.jpg)

### 使用方法

同一个导线上支持放置多个网络标识、网络端口、网络标签。

![图 1](/storage/images/cn/schematic/wire-multi-network/wire-multi-network_20250306_092731.jpg)

此时导线的右侧属性栏会显示多个网络名称，且这些网络之间被视为短路关系。

![图 2](/storage/images/cn/schematic/wire-multi-network/wire-multi-network_20250306_093212.jpg)

在严谨模式下，当在同一导线上放置两个网络时，将自动触发网络合并提示窗口。

![图 3](/storage/images/cn/schematic/wire-multi-network/wire-multi-network_20250306_093834.jpg)
