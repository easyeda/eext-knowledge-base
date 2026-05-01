# 四、线路

&emsp;&emsp;线路工序主要包括前处理、压膜、曝光和显影四个环节，如图4-1所示。经过钻孔和沉铜工艺后，铜箔板的内外层已经连通，完成线路工序后，铜箔板上会显示出清晰的线路。

<center><img src="/storage/images/zh-hans/design-production/pcb-production/process/circuit/circuit_20241121_195731.png"  width="800"></center>
<center>图4-1 线路工艺流程</center>

## 1 前处理

&emsp;&emsp;前处理是使用磨刷去除铜面上的污染物，增加铜面粗糙度,以利于压膜制程。

## 2 压膜

&emsp;&emsp;压膜工艺分为干膜和湿膜两种，干膜工艺稳定性和品质会比湿膜工艺更好一些，这里我们以干膜工艺为例。

&emsp;&emsp;通过热压法使干膜紧密附著在铜面上，完成压膜工序，如图4-2所示。图4-3为压膜后的铜箔板。

<br/>
<center><img src="/storage/images/zh-hans/design-production/pcb-production/process/circuit/circuit_20241121_195909.png"  width="500"></center>
<center>图4-2 压膜示意图</center>
<br/>
<center><img src="/storage/images/zh-hans/design-production/pcb-production/process/circuit/circuit_20241121_195941.png"  width="800"></center>
<center>图4-3 压膜后的铜箔板</center>

## 3 曝光

&emsp;&emsp;目前主要使用两种机器用于曝光：一种是需要菲林对位的自动曝光机，另一种是LDI全自动曝光机。

&emsp;&emsp;曝光目的是通过图形转移技术在干膜上曝出所需的线路，图4-4为线路曝光工序示意图。

<center><img src="/storage/images/zh-hans/design-production/pcb-production/process/circuit/circuit_20241121_200740.png"  width="800"></center>
<center>图4-4 曝光示意图</center>

&emsp;&emsp;图4-5为使用菲林的线路自动曝光机，需要使用线路菲林与压好干膜的电路板对好位，然后进行曝光。线路菲林有线路的地方是黑色的，没有线路的地方是透明的，在曝光灯管的作用下，透明的地方就会充分曝光，也就是没有线路的地方会充分曝光，如图4-6所示。

<center><img src="/storage/images/zh-hans/design-production/pcb-production/process/circuit/circuit_20241121_200203.png"  width="800"></center>
<center>图4-5 使用菲林的线路自动曝光机</center>

<center><img src="/storage/images/zh-hans/design-production/pcb-production/process/circuit/circuit_20241121_200236.png"  width="800"></center>
<center>图4-6 曝光机内使用的菲林</center>

&emsp;&emsp;LDI曝光机使用激活技术，特点是不需要使用菲林，直接调取MI资后使用激光在干膜上成像，如图4-7所示。它的缺点是在速度上没有使用菲林的自动曝光机曝光快。所以，LDI自动曝光机比较适合样板制作，而使用菲林的线路自动曝光机，更适合批量生产。图4-8为曝光后干膜上显现出清晰的线路。

<center><img src="/storage/images/zh-hans/design-production/pcb-production/process/circuit/circuit_20241121_200322.png"  width="800"></center>
<center>图4-7 LDI全自动曝光机</center>

<center><img src="/storage/images/zh-hans/design-production/pcb-production/process/circuit/circuit_20241121_200349.png"  width="800"></center>
<center>图4-8 曝光后干膜上显现出清晰的线路</center>

## 4 显影

&emsp;&emsp;显影设备中的显影液会把没有曝光过的部分去掉，也就是说，它会把有线路的地方去掉，露出黄铜。显影目的是为了把尚未发生聚合反应的区域用显像液（弱碱K2CO3）将之冲洗掉,已感光部分则因已发生聚合反应而洗不掉而留在铜面上成为蚀刻或电镀之阻剂膜。图4-9为线路显影工序示意图。显影完成后的电路板如图4-10所示。

<center><img src="/storage/images/zh-hans/design-production/pcb-production/process/circuit/circuit_20241121_200448.png"  width="500"></center>
<center>图4-9 显影示意图</center>

<center><img src="/storage/images/zh-hans/design-production/pcb-production/process/circuit/circuit_20241121_200518.png"  width="800"></center>
<center>图4-10 显影完成后的电路板</center>
