# PCB 设计规则

嘉立创EDA支持在原理图中直接设置 PCB 设计规则及其他配置，并在转换为 PCB 时同步更新。

**功能入口**：

- 顶部菜单栏 - 设计 - PCB 设计规则

![图 0](/storage/images/cn/schematic/design-pcb-design-rule/design-pcb-design-rule_20250307_142931.jpg)

完整的 PCB 设计规则可以查看 [PCB设计 - 设计规则](https://prodocs.lceda.cn/cn/pcb/design-design-rule/)

## 设计规则

在原理图中，用户可以设置转换后的 PCB 导线线宽规则，具体包括最小、默认和最大线宽的设定。转换后的 PCB 将依据这些规则进行 DRC（设计规则检查），以确保导线线宽符合要求。

![图 1](/storage/images/cn/schematic/design-pcb-design-rule/design-pcb-design-rule_20250307_143148.jpg)

在网络规则中，用户可以为不同的网络配置特定规则。通过此功能，可以在原理图中为各导线网络分配相应的设计规则，确保转换后的 PCB 按照该规则进行设计。

![图 2](/storage/images/cn/schematic/design-pcb-design-rule/design-pcb-design-rule_20250307_143423.jpg)

## 元件所在 PCB 层

支持设置元件在转换为 PCB 后的所在层。用户可以在原理图中配置元件的基础属性，以指定其对应的 PCB 层。

![图 3](/storage/images/cn/schematic/design-pcb-design-rule/design-pcb-design-rule_20250307_144419.jpg)

在原理图中修改元件所在层后，还需在导入PCB时，勾选发生变更的选项以确保更改生效。

![图 6](/storage/images/cn/schematic/design-pcb-design-rule/design-pcb-design-rule_20250310_153600.jpg)

## 网络类管理器

**功能入口**：

- 顶部菜单栏 - 设计 - 网络类管理器

原理图中新增了与 PCB 设计相匹配的网络类管理器，便于在绘制 PCB 之前对网络进行分组管理。

![图 4](/storage/images/cn/schematic/design-pcb-design-rule/design-pcb-design-rule_20250307_145136.jpg)

完成网络类配置后，通过点击`设计 - 更新/转换原理图到PCB`选项，在弹出的确认导入信息窗口中勾选`包含设计规则`，并在表格中选择需同步的设计规则，最后点击`应用修改`按钮，即可实现网络类信息从原理图向 PCB 的同步更新。

![图 8](/storage/images/cn/schematic/design-pcb-design-rule/design-pcb-design-rule_20250310_154649.jpg)

用户可以在左侧文档树的网络页面中查看网络类的同步状态。

![图 9](/storage/images/cn/schematic/design-pcb-design-rule/design-pcb-design-rule_20250310_154803.jpg)

## 差分对管理器

**功能入口**：

- 顶部菜单栏 - 设计 - 差分对管理器

原理图中新增了与 PCB 设计相匹配的差分对管理器，便于在绘制 PCB 之前定义差分对。

![图 10](/storage/images/cn/schematic/design-pcb-design-rule/design-pcb-design-rule_20250311_093544.jpg)

完成差分对配置后，通过点击`设计 - 更新/转换原理图到PCB`选项，在弹出的确认导入信息窗口中勾选`包含设计规则`，并在表格中选择需同步的设计规则，最后点击`应用修改`按钮，即可实现差分对信息从原理图向 PCB 的同步更新。

![图 11](/storage/images/cn/schematic/design-pcb-design-rule/design-pcb-design-rule_20250311_094223.gif)

原理图中新增差分对标识，可在 `放置 - 差分对标识` 和顶部工具栏中调用。

![图 12](/storage/images/cn/schematic/design-pcb-design-rule/design-pcb-design-rule_20250311_095239.jpg)

放置了差分对标识的网络，可在差分对管理器中被快捷选择。

![图 13](/storage/images/cn/schematic/design-pcb-design-rule/design-pcb-design-rule_20250311_095452.gif)

## 等长网络组管理器

**功能入口**：

- 顶部菜单栏 - 设计 - 等长网络组

原理图中新增了与 PCB 设计相匹配的等长网络组管理器，便于在绘制 PCB 之前定义等长网络组。

![图 14](/storage/images/cn/schematic/design-pcb-design-rule/design-pcb-design-rule_20250311_110731.jpg)

完成等长网络组配置后，通过点击`设计 - 更新/转换原理图到PCB`选项，在弹出的确认导入信息窗口中勾选`包含设计规则`，并在表格中选择需同步的设计规则，最后点击`应用修改`按钮，即可实现等长网络组信息从原理图向 PCB 的同步更新。

![图 15](/storage/images/cn/schematic/design-pcb-design-rule/design-pcb-design-rule_20250311_111025.gif)
