# 仿真模型及仿真库

嘉立创EDA专业版支持新建 NGSpice 仿真模型。

## 功能入口

- 顶部菜单栏 - 文件 - 新建 - 仿真模型...

![图 0](/storage/images/cn/simulation/simulation-model-and-simulation-library/simulation-model-and-simulation-library_20251119_120324.png)

## 操作步骤

1.  在`模型（Model）`输入框填写模型名称；或点击`从文件加载`导入本地模型文件。 成功从文件加载后；自动获取并填入模型名称。

2.  在`模型类别（Model Category）`下拉选择器件类别；默认不选中。从文件加载时；自动填入模型类别（按模型解析）。

3.  在`模型引脚（Model Pin）`输入必填引脚映射；示例：`1=VIN+,2=VIN-,3=VOUT,4=VCC,5=VDD`。从文件加载时；自动填入模型引脚（按子电路引脚顺序）。
