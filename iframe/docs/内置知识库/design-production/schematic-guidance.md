# 原理图设计规范

&emsp;&emsp;电路原理图描述了各电子元器件如何电气连接，规范绘制好原理图将可以直观清晰看懂信号在电路中的流向，辅助理解电路的功能作用。

### (1)图纸属性标题栏信息填写

&emsp;&emsp;在原理图的右下角包含图纸属性标题栏中，添加上工程/原理图/图页名称，公司名称，绘制/审阅人员，图纸页数，更新/创建日期，物料编码。添加版本号，以易于区分版本。原理图页建议使用A4/A5尺寸，始终使用在标准纸上查看和打印的原理图。

<center>
<img src="/storage/images/zh-hans/design-production/pcb-design/schematic-guidance/schematic-guidance_20250319_175150.png"  >
</center>
<center>图1 原理图图纸属性标题栏</center>

### (2)合理将电路整体划分成电路模块

&emsp;&emsp;在设计电路时可以在每个逻辑功能部分的周围添加矩形线框和文本标注，明确线框中的电路功能作用，这样在分析电路和排查故障问题时将会容易些。

<center>
<img src="/storage/images/zh-hans/design-production/pcb-design/schematic-guidance/schematic-guidance_20250319_175320.png"  >
</center>
<center>图2 简易读卡器原理图</center>

&emsp;&emsp;当原理图过大时，可以各个功能电路模块单独使用图页绘制或划分成复用图块层次绘制，单独使用图页绘制时命名需要直观清晰，复用图块的顶层系统框图需要清晰显示各电路模块逻辑连接关系，便于阅读。

<center>
<img src="/storage/images/zh-hans/design-production/pcb-design/schematic-guidance/schematic-guidance_20250319_175430.png" >
</center>
<center>图3 各功能电路模块分图页进行绘制</center>

<center>
<img src="/storage/images/zh-hans/design-production/pcb-design/schematic-guidance/schematic-guidance_20250319_175504.png"  >
</center>
<center>图4 立创梁山派·天空星的复用图块的顶层系统框图</center>

### (3)去耦电容放置在芯片电源管脚旁边

&emsp;&emsp;在原理图上放置芯片去耦电容时，确保将其靠近放置在与PCB布局上一样的芯片管脚旁边，提升原理图可阅读性与继承性。

<center>
<img src="/storage/images/zh-hans/design-production/pcb-design/schematic-guidance/schematic-guidance_20250319_175626.png" >
</center>
<center>图5 RP2040电源管脚去耦电容连接关系</center>

### (4)设计中用不着的元器件管脚可以放置非连接标识符

&emsp;&emsp;在原理图绘制时，用不着的元器件引脚上可以放置非连接标识符，表示此引脚是非连接状态，未用上的，规范原理图设计。

<center>
<img src="/storage/images/zh-hans/design-production/pcb-design/schematic-guidance/schematic-guidance_20250319_175734.png" >
</center>
<center>图6 Type-C未用着的SUB1/SUB2引脚上放置非连接标识</center>
