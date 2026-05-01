# 探针

嘉立创EDA专业版仿真支持在电路放置探针从而测量节点电压、电流、逻辑状态。

- 支持在仿真画布上放置电压/电流/逻辑探针，用于节点测量与波形选择。
- 适用于电路调试与验证，快速查看实时数值或逻辑状态。
- Simulide 需启动仿真以显示实时数值；NGspice 仅用作波形节点提示。

## 功能入口

- 入口1：顶部工具栏

![图 0](/storage/images/cn/simulation/place-probe/place-probe_20251114_095308.png)

- 入口2：顶部菜单栏 - 放置 - 探针

![图 1](/storage/images/cn/simulation/place-probe/place-probe_20251114_095400.png)

## 电压测量

- Simulide 引擎，在电路节点上放置电压探针，点击开始仿真，即可在探针右侧显示框实时查看该节点电压数值。

![图 2](/storage/images/cn/simulation/place-probe/place-probe_20251114_100533.gif)

- NGspice 引擎，在电路节点上放置电压探针，点击开始仿真，即可在波形图表中展示电压情况。

![图 3](/storage/images/cn/simulation/place-probe/place-probe_20251114_100854.gif)

## 电流测量

- Simulide 在电路支路上放置电流探针，点击开始仿真，即可在探针右侧显示框实时查看该支路电流数值。

![图 4](/storage/images/cn/simulation/place-probe/place-probe_20251114_102810.gif)

- NGspice 在电路支路上放置电流探针，点击开始仿真，即可在波形图表中展示电流情况。

![图 5](/storage/images/cn/simulation/place-probe/place-probe_20251114_103053.gif)

## 逻辑探针

- Simulide 在电路支路上放置逻辑探针，点击开始仿真，即可在探针右侧实时显示查看该支路逻辑状态（高/低）。

![图 6](/storage/images/cn/simulation/place-probe/place-probe_20251211_212544.gif)

支持在右侧属性面板修改高/低电压阈值，若电压高于高电平阈值则显示 1，低于低电平阈值则显示 0，位于高低电平阈值中间则为未知态(X)。

![图 7](/storage/images/cn/simulation/place-probe/place-probe_20251211_212719.png)

- NGspice 在电路支路上放置逻辑探针，点击开始仿真，即可在波形图表中展示逻辑状态。

![图 8](/storage/images/cn/simulation/place-probe/place-probe_20251211_214315.gif)
