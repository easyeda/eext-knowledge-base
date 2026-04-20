## 什么是差分信号？

差分信号是一种信号传输技术，区别于传统的一根信号线一根地线的做法，差分传输在两根数据线上都传输信号，这两个信号的振幅相等，相位相差180°（即相位相反）。在这两根线上传输的信号就是差分信号，而承载差分信号的那一对走线就称为差分走线。

## 差分信号的优点有哪些？

1. 抗干扰能力强

-   共模干扰抑制：差分信号对外界噪声具有很强的抗扰能力，因为两条信号线上的噪声是相同的（共模），接收端通过计算差值有效消除了共模噪声。
-   磁场耦合小：差分信号线之间的电流方向相反，产生的电磁场互相抵消，因此对外部设备的电磁干扰（EMI）小。

2. 信号完整度高

-   抑制信号反射：两条线之间的特性阻抗匹配更容易实现，从而减少信号反射，保证信号完整性。
-   减少地回路问题：差分信号不完全依赖地作为电流的回流路径，减少了地回路的干扰，对于差分信号而言，最大的影响是对地阻抗是否一致，也就是对地平衡度，它们之间相对的阻抗影响并不特别重要，之间分布电容大了只会衰落信号强度，不会引入噪声和干扰，也就是对信噪比不会产生很大影响。

3. 支持信号高速传输

-   差分信号在高速传输中表现优异，能够更好地保持波形，减少信号失真和抖动，适合用于高速数据总线（如PCIe、USB、HDMI等）。

4. 电磁辐射低

-   差分信号的电流方向相反，形成的磁场互相抵消，大大降低了电磁辐射，符合更高的EMC（电磁兼容性）要求。

5. 传输距离远

-   在相同的条件下，差分信号比单端信号能传输更长的距离，同时保持良好的信号质量。

## 差分信号在PCB中的设计要求有哪些？

1. 认识差分信号，在PCB设计中，差分信号的命名通常有“+、-、P、N”等标识

<center>

<img src="/storage/images/zh-hans/design-production/pcb-design/knowledge-point/difference-pairs/difference-pairs_20241204_144146.png" style="border:2px solid gray" width="800">
<br/>
<img src="/storage/images/zh-hans/design-production/pcb-design/knowledge-point/difference-pairs/difference-pairs_20241204_120111.png" style="border:2px solid gray" width="800">
<br/>
<img src="/storage/images/zh-hans/design-production/pcb-design/knowledge-point/difference-pairs/difference-pairs_20241204_120221.png" style="border:2px solid gray" width="800">

</center>

1. 差分信号往往是速度较快、且在整个项目中比较重要的，在布局走线时要重点考虑，尽量保证差分信号顺畅以及距离短。

<center>
<img src="/storage/images/zh-hans/design-production/pcb-design/knowledge-point/difference-pairs/difference-pairs_20241204_134445.png" style="border:2px solid gray" width="800">
<br/>
<img src="/storage/images/zh-hans/design-production/pcb-design/knowledge-point/difference-pairs/difference-pairs_20241204_134700.png" style="border:2px solid gray" width="800">

</center>

3. 差分信号在走线时，非必要不换层，若一定要换层，在换层的附近添加回流地过孔

<center>

<img src="/storage/images/zh-hans/design-production/pcb-design/knowledge-point/difference-pairs/difference-pairs_20241204_135113.png" style="border:2px solid gray" width="800">

</center>

4. 差分信号内不能有其余走线，若有匹配电阻或上拉电阻，也应该对称摆放。一般差分线间距较小，在电阻的选择上一般不大于0603，否则器件本身尺寸就会导致差分线耦合效果差，影响信号完整性。

<center>

<img src="/storage/images/zh-hans/design-production/pcb-design/knowledge-point/difference-pairs/difference-pairs_20241204_140123.png" style="border:2px solid gray" width="800">
<br/>
<img src="/storage/images/zh-hans/design-production/pcb-design/knowledge-point/difference-pairs/difference-pairs_20241204_140438.png" style="border:2px solid gray" width="800">

</center>

5. 差分信号在走线时，不可避免会有拐弯或打孔导致线长不一致，差分信号是接收两根信号的差值，需要保证相位的同步，同组差分信号一般不超过±5mil误差，在进行差分等长时，尽量满足小于3W间距（3倍线宽）以及小于2H（2倍间距）规则。

<center>

<img src="/storage/images/zh-hans/design-production/pcb-design/knowledge-point/difference-pairs/difference-pairs_20241204_141652.png" style="border:2px solid gray" width="800">
<br/>
<img src="/storage/images/zh-hans/design-production/pcb-design/knowledge-point/difference-pairs/difference-pairs_20241204_141607.png" style="border:2px solid gray" width="800">
</center>

若需要非常多个弯才能满足等长的话，建议使用差分对等长或手动在反方向绕弯，尽可能保证耦合。

<center>

<img src="/storage/images/zh-hans/design-production/pcb-design/knowledge-point/difference-pairs/difference-pairs_20241204_142430.png" style="border:2px solid gray" width="800">

</center>

1. 关于差分对等长，原则是在失长端等长，哪里短就在哪里等长；若是弯折失长，也是在失长弯折处等长。

<center>
<img src="/storage/images/zh-hans/design-production/pcb-design/knowledge-point/difference-pairs/difference-pairs_20241204_142922.png" style="border:2px solid gray" width="800">
</center>
