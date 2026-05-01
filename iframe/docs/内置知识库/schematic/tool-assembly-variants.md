# 装配变量

嘉立创 EDA 专业版提供装配变量功能，可在同一原理图基础上定义多套装配配置，用于快速管理产品变体。通过为元件设置装配状态与替代方案，工程师可在研发、试产与量产阶段灵活应对功能差异、成本约束与供应风险。

## 应用场景

1. 基于同一原理图创建不同功能等级的产品型号
2. 依据订单规模与成本目标灵活调整装配策略（删减或更换器件）
3. 快速生成定制化装配配置以满足特定规格/客户需求
4. 预先定义替代物料方案，应对供应链波动与备货不稳定

## 功能入口

操作路径：原理图顶部菜单栏 > 工具 > 装配变量

![图 0](/storage/images/cn/schematic/tool-assembly-variants/tool-assembly-variants_20251110_092810.png)

## 创建元件分组

在“装配变量”页面中，首先创建元件分组，并将需要在不同变体中发生装配状态变化的元件添加至相应分组。

![图 1](/storage/images/cn/schematic/tool-assembly-variants/tool-assembly-variants_20251110_093350.png)

方式一：在元件列表中框选目标元件，右键选择“移入分组 > 创建分组”。

![图 2](/storage/images/cn/schematic/tool-assembly-variants/tool-assembly-variants_20251110_093554.png)

方式二：在左下角分组树区域右键新建分组，再将所需元件逐项移入该分组。

![图 3](/storage/images/cn/schematic/tool-assembly-variants/tool-assembly-variants_20251110_093854.png)

方式三：在原理图画布中框选元件，右键直接添加到指定分组。

![图 4](/storage/images/cn/schematic/tool-assembly-variants/tool-assembly-variants_20251110_094336.gif)

## 分组配置

单击分组名称进入分组配置页。按 Ctrl + 左键可多选元件，右键打开菜单为选中元件批量设置装配状态：

- 装配：按原设计进行装配
- 不装配：在该变体中不焊接该元件
- 设置替代器件：为该元件指定替代型号/料号

![图 5](/storage/images/cn/schematic/tool-assembly-variants/tool-assembly-variants_20251110_095429.png)

## 变体管理

完成分组配置后，右键变体树以创建新的变体节点（可建立多级结构）。

![图 16](/storage/images/cn/schematic/tool-assembly-variants/tool-assembly-variants_20251110_134639.png)

![图 7](/storage/images/cn/schematic/tool-assembly-variants/tool-assembly-variants_20251110_100102.png)

在左侧分组树中选择目标“变体”与“分组”，点击“加入已选变体”，即可将该分组的装配状态应用到所选变体。

![图 8](/storage/images/cn/schematic/tool-assembly-variants/tool-assembly-variants_20251110_100645.gif)

支持创建多个变体与多个分组，并为同一变体添加多个分组以组合不同策略。元件树列表中的橘红色方块表示该元件存在装配变量配置。

![图 9](/storage/images/cn/schematic/tool-assembly-variants/tool-assembly-variants_20251110_100925.png)

## 分组子节点

支持利用分组子节点功能，为同一元件分组创建多样的装配配置。

首先创建一个元件分组，并将需应用多套配置的元件加入该分组。

![图 17](/storage/images/cn/schematic/tool-assembly-variants/tool-assembly-variants_20260202_141839.png)

右键点击元件分组，选择“创建子节点”。子节点将继承父节点的元件列表，但不继承其装配状态和替代器件信息。

![图 18](/storage/images/cn/schematic/tool-assembly-variants/tool-assembly-variants_20260202_141927.png)

在各子节点中，可分别设置独立的装配状态和替代器件。

![图 19](/storage/images/cn/schematic/tool-assembly-variants/tool-assembly-variants_20260202_142231.png)

由此即可复用元件列表，为不同变体灵活配置差异化的装配状态和替代器件。

![图 20](/storage/images/cn/schematic/tool-assembly-variants/tool-assembly-variants_20260202_142405.png)

## 装配视图

完成装配策略组合后，返回原理图。操作路径：顶部菜单栏 > 视图 > 装配变量视图模式，选择已创建的装配变体进行视图切换。

![图 10](/storage/images/cn/schematic/tool-assembly-variants/tool-assembly-variants_20251110_103400.png)

切换后，原理图画布将依据所选变体进行展示。可通过右侧面板与属性清单清晰查看各元件的装配状态与替代信息。

![图 11](/storage/images/cn/schematic/tool-assembly-variants/tool-assembly-variants_20251110_103552.png)

装配完成后，EDA 可为每个装配变体生成对应的 BOM 清单，便于生产与采购管理。

![图 13](/storage/images/cn/schematic/tool-assembly-variants/tool-assembly-variants_20251110_120208.png)

## 补充说明

切换至装配视图后，可导出对应原理图的 PDF、PNG、SVG 文件。

在装配变量编辑页面中，可切换要应用的原理图工程。

![图 14](/storage/images/cn/schematic/tool-assembly-variants/tool-assembly-variants_20251110_120558.png)

支持对装配变量配置的导入/导出，便于复用与团队协作。

![图 15](/storage/images/cn/schematic/tool-assembly-variants/tool-assembly-variants_20251110_120626.png)
