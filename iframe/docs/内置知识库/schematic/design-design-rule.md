# 设计规则

## 设计规则设置

设置电气规则检查的提示错误的等级信息。

![图 1](/storage/images/cn/schematic/design-design-rule/design-design-rule_20260106_120115.png)

这里可以看到规则的错误信息等级，并且可以对错误等级进行修改。

![图 2](/storage/images/cn/schematic/design-design-rule/design-design-rule_20260106_120132.png)

也可以进行等级的修改。

![图 3](/storage/images/cn/schematic/design-design-rule/design-design-rule_20260106_120634.png)

也可以在修改规则后立即检查DRC规则。

![图 4](/storage/images/cn/schematic/design-design-rule/design-design-rule_20260106_120656.png)

## 设计规则检查(DRC)

在导入PCB前检查封装、符号、文本等符合规则或者有没有冲突的检查。

![图 160](/storage/images/cn/schematic/design-design-rule/design-design-rule_20240621_172127.png)

检查的结果在底部的 DRC Tab显示出来。

![图 159](/storage/images/cn/schematic/design-design-rule/design-design-rule_20240621_172128.png)

单击提示信息可高亮，双击提示可高亮并定位错误点。

![image-20201204110748349](/storage/images/en/schematic/design-design-rule/design-design-rule_20240621_172128.png)

**注意**：不加入BOM和不转到PCB的元件不纳入设计规则检查。

## 电气类型连接检查

嘉立创EDA支持在设计规则中配置引脚和网络的电气类型连接情况检查。

**功能入口**：

- 顶部菜单栏 - 设计 - 设计规则 - 连接

![图 0](/storage/images/cn/schematic/design-design-rule-connection/design-design-rule-connection_20250307_155135.gif)

### 使用方法

在设计规则的连接页面中，用户可以查看当前引脚的检查规则，并根据需要进行调整。

![图 1](/storage/images/cn/schematic/design-design-rule-connection/design-design-rule-connection_20250307_155320.jpg)

通过左键单击规则中的方块，可以切换该连接情况下的报错等级。

![图 2](/storage/images/cn/schematic/design-design-rule-connection/design-design-rule-connection_20250307_155529.gif)

右键单击引脚类型名称，可以批量修改报错等级。

![图 3](/storage/images/cn/schematic/design-design-rule-connection/design-design-rule-connection_20250307_155707.gif)

用户可以导入或导出连接规则配置，并随时恢复默认设置。

![图 4](/storage/images/cn/schematic/design-design-rule-connection/design-design-rule-connection_20250307_155817.jpg)

用户可以根据当前连接规则对选中的原理图进行快捷 DRC（设计规则检查）校验。

![图 5](/storage/images/cn/schematic/design-design-rule-connection/design-design-rule-connection_20250307_155956.gif)

### 示例

在符号编辑页面中，用户可以选中器件引脚并修改其电气类型。

![图 6](/storage/images/cn/schematic/design-design-rule-connection/design-design-rule-connection_20250307_160145.jpg)

例如，将二极管的两端分别设置为输入输出类型，并通过导线连接。

![图 7](/storage/images/cn/schematic/design-design-rule-connection/design-design-rule-connection_20250307_160313.gif)

打开连接规则页面，修改`输入-输出`连接的报错等级，并启用引脚冲突检测。

![图 8](/storage/images/cn/schematic/design-design-rule-connection/design-design-rule-connection_20250307_160520.jpg)

此时对该原理图进行 DRC 检查，系统会显示相应的警告提醒。

![图 9](/storage/images/cn/schematic/design-design-rule-connection/design-design-rule-connection_20250307_160629.jpg)
