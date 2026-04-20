# TPS5430带载纹波较大

## 前情提要

&emsp;&emsp;在“天空星-简易可调电源”项目设计初期发现该问题，空载纹波很小，一旦带载，纹波就很大。

| <img src="/storage/images/zh-hans/design-production/pcb-design/design-error-solve/dcdc-ripple-anomaly/dcdc-ripple-anomaly_20250609_163328.png" width="600"> | <img src="/storage/images/zh-hans/design-production/pcb-design/design-error-solve/dcdc-ripple-anomaly/dcdc-ripple-anomaly_20250609_163215.png" width="600"> |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |

## 原理分析

&emsp;&emsp;布局问题，DC-DC布局走线与效率、纹波等影响很大，在初期布局时，没有考虑输入接口、输入电容、输出接口、芯片GND以及正极的回路问题，导致空载纹波看不出来，一带载就纹波很大了，同时，官方芯片数据手册给出的推荐滤波电容为钽电容，项目实际使用相同容值的铝电解电容搭配mlcc，铝电解电容esr较大，在高速开关时损耗很大，同时铝电解电容额定纹波电流较小，长期工作在极限区间或超限区间会导致电容发热以及降低电容使用寿命。

<center>
<img src="/storage/images/zh-hans/design-production/pcb-design/design-error-solve/dcdc-ripple-anomaly/dcdc-ripple-anomaly_20250609_161939.png" width="400" style="border:1px solid gray">
</center>
<center>优化前布局</center>
<br/>

<center>
<img src="/storage/images/zh-hans/design-production/pcb-design/design-error-solve/dcdc-ripple-anomaly/dcdc-ripple-anomaly_20250609_162016.png" 
width="1200" style="border:1px solid gray">
</center>
<center>铝电解电容特性</center>

## 解决办法

&emsp;&emsp;优化布局走线，尽量使输入、输出、芯片GND在一块铜皮上，有良好的回流路径，同时保证铜皮大宽度/厚度需要满足载流需求，条件允许的情况下更换电容与数据手册保持一致为最佳，也可视情况而定选择固态电容进行替换，实测影响不大。

<center>
<img src="/storage/images/zh-hans/design-production/pcb-design/design-error-solve/dcdc-ripple-anomaly/dcdc-ripple-anomaly_20250609_162510.png" width="400" style="border:1px solid gray">
</center>
<center>优化后布局</center>
<br/>

<center>
<img src="/storage/images/zh-hans/design-production/pcb-design/design-error-solve/dcdc-ripple-anomaly/dcdc-ripple-anomaly_20250609_162534.png" style="border:1px solid gray">
</center>
<center>铝电解电容特性</center>
<br/>

<center>
<img src="/storage/images/zh-hans/design-production/pcb-design/design-error-solve/dcdc-ripple-anomaly/dcdc-ripple-anomaly_20250609_163511.png" width="1200" style="border:1px solid gray">
</center>
<center>优化后效果</center>
