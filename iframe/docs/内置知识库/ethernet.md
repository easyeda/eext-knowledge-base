# 以太网模块

## 布局参考

- RJ45网口靠近板边摆放，与变压器靠近摆放，变压器与PHY芯片靠近摆放，距离尽可能短；
- PHY芯片的时钟电路应尽量靠近芯片摆放，远离板边和高频信号；
- PHY芯片的电源引脚需添加退耦电容，减小电源与地平面间的谐振；
- 隔离变压器上的端接电阻应靠近变压器摆放；

<center>
<img src="/storage/images/zh-hans/design-production/pcb-design/moduler-design/ethernet/ethernet_20250313_174111.png" style="border:2px solid gray" width="1300">
</center>

## 布线参考

- RJ45网口金属屏蔽固定支撑脚，需要连接到PCB板的GND上，在有空间条件下，尽可能将PGND与DGND分开处理；
- RJ45网口和隔离变压器底部应当净空处理，不允许其他走线穿过；
- 以太网的差分线组抗控制在100Ω，优先对以太网进行差分信号布线，长度差通常控制在±10mil以内，过孔数量不要超过两个，差分对之间的间距至少做3W处理；
- PHY芯片的时钟信号线应尽量短，并远离其他高速信号线，在有空间的条件下，尽可能包地处理，以减少干扰；
- 变压器的GND网络通过粗导线连接回流，走线加粗至20mil以上；

<center>
<img src="/storage/images/zh-hans/design-production/pcb-design/moduler-design/ethernet/ethernet_20250313_193511.png" style="border:2px solid gray" width="1300">
</center>
