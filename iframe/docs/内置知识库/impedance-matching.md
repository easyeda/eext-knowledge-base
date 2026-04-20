## 什么是阻抗匹配？

阻抗匹配是指在电路中，将负载的阻抗与信号源的输出阻抗调整为相等或接近相等，以实现信号能量的最大传输或减少信号反射的过程。

## 造成阻抗不匹配的原因

1. 电路设计不当，比如导线时宽时窄，或GND平面不完整。
2. 器件特性不一致，走线以及PCB板会带有寄生电容、电感、电阻等，导致实际阻抗偏离
3. 系统参数变化，比如从外接线缆到PCB板，器件本身材质不一致导致阻抗不一致。

## 阻抗不匹配的后果

1. 在高频电路中，当传输线与发送端阻抗不匹配时，会产生反射、振荡、过充等现象，并叠加至原本的信号被接收端收到，此时可能会导致接收端数据异常。
2. 在模拟信号中，若阻抗不匹配，同样容易造成电压抖动、过充等现象，导致ADC转换数据抖动或异常。

<center>
<img src="/storage/images/zh-hans/design-production/pcb-design/knowledge-point/impedance-matching/impedance-matching_20241204_162752.png" style="border:2px solid gray" width="800">
</center>

## 如何计算阻抗

影响阻抗的因素有很多，导线宽度、PCB板材、PCB层叠、GND平面等等，在进行阻抗匹配计算时，通常会使用专门的工具来进行计算。比如：[嘉立创阻抗计算神器](https://tools.jlc.com/jlcTools/index.html#/impedanceCalculatenew)
<br/>
<br/>
根据输入参数的不同，计算的结果也不相同，在进行阻抗计算时，首先需要清楚所需的阻抗，其次是传输线的传输方式（差分、单端），根据参考平面与阻抗线所在平面的区别分为共面或隔层参考。（共面参考主要影响是阻抗线到参考平面的距离、隔层参考主要影响是参考层与阻抗层的层叠）。
<br/>
<br/>
阻抗计算结果可能不符合实际生产设计需要，此时需要不断调整相关参数，选择一个价格、设计折中的方案。

<center>
<img src="/storage/images/zh-hans/design-production/pcb-design/knowledge-point/impedance-matching/impedance-matching_20241204_151347.png" style="border:2px solid gray" width="800">
</center>

## 常见高速信号阻抗计算

-   USB传输线阻抗要求：差分90欧姆，差分对内长度误差≤5mil；传输线长度尽量不超过1800mil；
-   网口传输线阻抗要求：差分100欧姆，差分对内长度误差≤5mil；传输线长度尽量不超过1500mil；
-   HDMI传输线阻抗要求：差分100欧姆，单端50欧姆，差分对内长度误差≤5mil；传输线长度尽量不超过500mil；
-   射频天线阻抗要求：单端50欧姆，走线周围要有良好的接地平面，尽可能保证射频信号区域内净空无其他干扰。
