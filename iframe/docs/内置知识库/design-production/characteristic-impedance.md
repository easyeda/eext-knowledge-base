# 了解特性阻抗

特性阻抗是电磁波在传输线中传播时遇到的阻抗，反映了信号传输的质量和效率。在PCB设计中，控制特性阻抗对确保信号完整性和减少反射至关重要。

特性阻抗（Z₀）是传输线上电压波与电流波的比值。

计算公式为：

<center>
<img src="/storage/images/zh-hans/design-production/pcb-design/knowledge-point/characteristic-impedance/characteristic-impedance_20250314_140133.png"width="250">
</center>
其中：

- R 为单位长度电阻；
- L 为单位长度电感；
- G 为单位长度电导；
- C 为单位长度电容；
- ω 为角频率（ω=2πf，f是频率）；
- j 为虚数单位（j²=-1）；

## 1 单端阻抗

单端阻抗（Single-Ended Impedance）是指信号线与参考平面（通常是地平面或电源平面）之间的阻抗，适用于单端信号传输。

- 常见的单端阻抗值有50Ω、75Ω等。

在高频下，单端特性阻抗可简化为：

<center>
<img src="/storage/images/zh-hans/design-production/pcb-design/knowledge-point/characteristic-impedance/characteristic-impedance_20250314_140005.png"width="150">
</center>
其中：

- L 是单位长度的电感；
- C 是单位长度的电容；

## 2 差分阻抗

差分阻抗（Differential Impedance）是指一对差分信号线之间的阻抗，适用于差分信号传输。差分阻抗可分为差模阻抗和共模阻抗，其中差模阻抗用于描述正负差分信号之间的阻抗，而共模阻抗则用于描述这两个信号与地之间的阻抗。常用于高速信号传输（如USB、HDMI、PCIe、以太网等）。

- 常见的差分阻抗值有90Ω、100Ω等。

在高频下，差分特性阻抗可简化为：

<center>
<img src="/storage/images/zh-hans/design-production/pcb-design/knowledge-point/characteristic-impedance/characteristic-impedance_20250314_120042.png"width="350">
</center>
其中：

- Z₀是单端阻抗；
- k 是两条差分线之间的耦合系数（通常为0.1~0.3）；

## 3 阻抗控制作用

在PCB设计中，如果不控制阻抗，可能会对信号完整性、系统性能和可靠性产生严重影响。

- 当信号在传输线中遇到阻抗不连续点时（如阻抗不匹配），部分信号会被反射回源端。
- 阻抗不匹配会增加信号之间的电磁耦合，导致相邻信号线之间的干扰。
- 阻抗不匹配会导致信号能量损失，信号衰减，可能使得信号在到达接收端时，无法被正确识别。
- 阻抗不匹配会影响信号的传播速度和时序，时序偏差错乱，导致数据错误，系统无法同步。
- 阻抗不匹配会引起时钟信号的反射和失真，时钟信号不稳定或抖动，会导致系统时序紊乱，降低系统性能。
- 阻抗不匹配会影响电源分布网络，导致信号能量通过电源或地线传导，增加电源噪声，影响系统稳定性。
