# 包地孔

嘉立创EDA支持包地孔的放置功能。

**功能入口**：

- 入口1：顶部菜单栏 - 放置 - 包地孔

![图 0](/storage/images/cn/pcb/place-via-fence/place-via-fence_20250331_061755.jpg)

- 入口2：图元右键菜单 - 添加包地孔...

![图 5](/storage/images/cn/pcb/place-via-fence/place-via-fence_20250410_105806.jpg)

**适用图元**：

包地孔功能适用于以下图元类型：

- 线条
- 板框
- 焊盘
- 元件
- 导线
- 填充

## 使用方法

首先选中需要放置包地孔的对象，然后依次点击“放置 - 包地孔”，点击“应用”按钮后将自动在对象周围放置包地孔。

![图 1](/storage/images/cn/pcb/place-via-fence/place-via-fence_20250331_062658.gif)

支持先打开包地孔设置弹窗，再框选目标图元进行相关操作。

![图 2](/storage/images/cn/pcb/place-via-fence/place-via-fence_20250331_062839.gif)

在包地孔设置弹窗中，支持对以下参数进行编辑：

- 图元间距
- 行间距
- 过孔间距
- 过孔属性（内直径、外直径、网络）
- 过孔行数
- 是否忽略设计规则检查（DRC）

![图 3](/storage/images/cn/pcb/place-via-fence/place-via-fence_20250331_062920.jpg)

支持在正式创建包地孔之前进行预览操作，确保生成结果符合预期后再完成创建。

![图 4](/storage/images/cn/pcb/place-via-fence/place-via-fence_20250331_063117.gif)

针对板框图元，支持配置负值图元间距参数，实现包地孔向板框内侧偏移布局。

![图 0](/storage/images/cn/pcb/place-via-fence/place-via-fence_20250619_175628.gif)
