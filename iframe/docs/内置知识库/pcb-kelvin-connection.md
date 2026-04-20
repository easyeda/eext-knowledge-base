# PCB开尔文走线

‌&emsp;&emsp;‌开尔文走线（Kelvin Connection）是一种用于高精度测量低电阻的布线技术，通过分离电流传输路径和电压检测路径，消除引线电阻和接触电阻的影响，实现毫欧级甚至微欧级电阻的精确测量。

‌&emsp;&emsp;首先，先了解采样电阻（也称为电流检测电阻），是一种专门用于将电流信号转换为可测量电压信号的低阻值精密电阻。它是电流测量电路中的核心元件，串联在待测电流路径中，通过测量电阻两端的压降（根据欧姆定律 U=I×R），间接计算出流经电路的电流值，采样电阻的阻值一般不会超过1Ω，典型范围在0.1mΩ ~ 100mΩ（毫欧级），精度比较高，一般在1%以内。

‌&emsp;&emsp;在测量电流时，电流检测技术分为高侧（边）检测和低侧（边）检测。将测量采样电阻放置在电源与负载之间的检测方法称为高侧检测，将测量采样电阻放置在负载与接地端之间的检测方法称为低侧检测。这两种用于检测负载中电流的方法，如图1所示。

<center><img src="/storage/images/zh-hans/design-production/pcb-design/knowledge-point/pcb-kelvin-connection/pcb-kelvin-connection_20250717_154944.png"  width="500"></center>
<center>图1 高/低边电流检测采样</center>

‌&emsp;&emsp;在普通的两线测量法中，测量电流和测量电压共用同一对引线，引线本身的电阻会叠加在被测器件的电阻上，导致测量值偏大。通过开尔文走线（四线检测法）是提高测量精度的关键，主干道用粗线或宽铜箔，大部分电流都是从主干道流过，电流测试支路用细线，测量通过采样电阻两端的压降，计算出流过的电流，显著提高采样电阻的采样精度。

在电路板设计中，开尔文走线需遵循以下规则：

- 采样电阻焊盘分离电流焊盘区和电压检测焊盘区，电流路径使用宽铜箔，电压测量线用细线连接；

- 两条电压线应尽可能长度相等、线宽相同、保持对称布线，并远离噪声源，最好使用差分对布线规则，这有助于抑制共模噪声；

- 采样电阻到电流检测芯片的布线长度应尽可能近，以减少测量误差；

- 电压线从电阻焊盘中心直接引出，避开电流路径分支点，远离功率元件、大电流走线等热源，温度变化会影响测量精度；

<center><img src="/storage/images/zh-hans/design-production/pcb-design/knowledge-point/pcb-kelvin-connection/pcb-kelvin-connection_20250717_202323.png"  width="800"></center>
<center>图2 开尔文走线接法</center>

<center><img src="/storage/images/zh-hans/design-production/pcb-design/knowledge-point/pcb-kelvin-connection/pcb-kelvin-connection_20250717_205835.png"  width="800"></center>
<center>图3 开尔文走线接法（双通道）</center>
