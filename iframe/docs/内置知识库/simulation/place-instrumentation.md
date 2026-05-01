# 仪器仪表

嘉立创 EDA 专业版在 Simulide 引擎中提供“示波器”“万用表”等仪器仪表的放置与使用功能。

## 示波器

在仿真工程中可放置并使用“示波器”，用于观测与测量多通道电压的时间变化。

### 功能入口

- 顶部菜单栏“放置”→“仪器仪表”→“示波器”。

![图 0](/storage/images/cn/simulation/place-instrumentation/place-instrumentation_20251119_102142.png)

- 双击或鼠标右键示波器图标打开示波器窗口。启动仿真后将显示连接信号的波形。

![图 2](/storage/images/cn/simulation/place-instrumentation/place-instrumentation_20251211_210044.png)

### 功能介绍

#### 多通道接入

- 仪器下方提供 4 个输入通道（A、B、C、D），分别对应示波器内部的 CH1–CH4。Ext Trig 为外部触发输入通道，GND 为信号参考点。

![图 3](/storage/images/cn/simulation/place-instrumentation/place-instrumentation_20251211_210244.png)

- 仿真启动后，已连接的信号在画布上以波形显示。

![图 4](/storage/images/cn/simulation/place-instrumentation/place-instrumentation_20251211_210426.png)

- 可启用“自动模式”，自动调整通道刻度以达到最佳观赏效果。

![图 5](/storage/images/cn/simulation/place-instrumentation/place-instrumentation_20251211_210605.png)

#### 波形显示

- 支持在“时基”面板配置标度与 X 轴位移，调整画布显示范围。

- 可在波形画布上滚动鼠标以缩放时基（X 轴）。

- 通过拖动左侧两条垂直光标读取交点的时间与电压,也可使用底部按钮进行微调。

![图 6](/storage/images/cn/simulation/place-instrumentation/place-instrumentation_20251211_210918.gif)

- 支持显示模式切换：“Y/T”“A/B”“A+B”。分别表示“幅度–时间”“X–Y”“叠加”，切换后绘制与测量逻辑随模式变化。

![图 7](/storage/images/cn/simulation/place-instrumentation/place-instrumentation_20251211_211822.gif)

- 在“触发”面板配置触发条件，以获得稳定显示（含“边沿”“水平”“触发源”等参数）。
  - 边沿：包含上升沿、下降沿、Ext 触发。
  - 水平：支持设置触发水平电压。
  - 触发源：下拉选择用于触发的信号源头（CH1、CH2、CH3、CH4、EXT）。

## 万用表

用于测量端电压或支路电流，支持双引脚连接。

### 功能入口

- 顶部菜单栏“放置”→“仪器仪表”→“万用表”。

![图 1](/storage/images/cn/simulation/place-instrumentation/place-instrumentation_20251119_115525.png)

- 开始仿真后，画布上的万用表将显示当前读数与单位。

![图 8](/storage/images/cn/simulation/place-instrumentation/place-instrumentation_20251211_212120.gif)

- 支持在右侧属性面板修改万用表类型（“电压表”“电流表”）。

![图 9](/storage/images/cn/simulation/place-instrumentation/place-instrumentation_20251211_212145.png)

- 双引脚；正端用于连接待测点；负端建议连接地，亦可按需悬空。

![图 10](/storage/images/cn/simulation/place-instrumentation/place-instrumentation_20251211_212202.png)
