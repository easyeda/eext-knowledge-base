# 测试点

嘉立创EDA专业版支持在PCB上直接放置测试点，用于连接测试仪器，以便进行电路测试和故障诊断。测试点通常位于电路板上的关键位置，例如连接器、芯片引脚、关键信号线等。

**放置方法**：

- 顶部菜单 - 放置 - 测试点

![图 0](/storage/images/cn/pcb/place-test-point/place-test-point_20240621_172124.jpg)

放置完成后可以在右侧属性面板设置测试点的图层、网络、大小形状等参数

![图 1](/storage/images/cn/pcb/place-test-point/place-test-point_20240621_172125.jpg)

# 自动添加测试点

嘉立创EDA支持为对应网络自动添加测试点。

**功能入口**：

- 顶部工具栏 - 放置 - 测试点 - 自动

![图 0](/storage/images/cn/pcb/place-test-point/place-test-point_20250331_051141.jpg)

# 使用方法

点击`测试点 - 自动`选项后，将进入自动生成测试点的配置窗口。

![图 1](/storage/images/cn/pcb/place-test-point/place-test-point_20250331_051218.jpg)

在生成选项中，可选择`新增`或`移除`两种操作类型。

![图 2](/storage/images/cn/pcb/place-test-point/place-test-point_20250331_051549.jpg)

选择`新增`操作后，点击`自动生成`，将在指定网络中生成测试点。生成结果可在底部日志中查看，并支持通过点击日志定位测试点位置。

![图 3](/storage/images/cn/pcb/place-test-point/place-test-point_20250331_051840.jpg)

选择`移除`操作后，点击`自动生成`，将移除指定网络中的测试点。移除结果的坐标信息可通过底部日志查看。

![图 4](/storage/images/cn/pcb/place-test-point/place-test-point_20250331_051948.jpg)

在生成选项中，可配置以下参数：

- 生成图层
- 是否允许测试点位于元件内部
- 是否移除已有测试点并重新生成
- 是否忽略设计规则检查（DRC）

![图 5](/storage/images/cn/pcb/place-test-point/place-test-point_20250331_052122.jpg)

左下角区域可配置生成测试点的属性。

![图 6](/storage/images/cn/pcb/place-test-point/place-test-point_20250331_052217.jpg)

当选择多层选项时，可配置测试点的钻孔直径属性。

![图 7](/storage/images/cn/pcb/place-test-point/place-test-point_20250331_052316.jpg)

右侧区域显示当前 PCB 的网络列表，可在此选择需要生成测试点的网络及其对应的数量。

![图 8](/storage/images/cn/pcb/place-test-point/place-test-point_20250331_052422.jpg)

支持对网络进行搜索以及批量设置测试点数量

![图 9](/storage/images/cn/pcb/place-test-point/place-test-point_20250331_052459.jpg)
