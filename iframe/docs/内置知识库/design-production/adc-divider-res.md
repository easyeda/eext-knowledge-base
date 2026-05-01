# ADC分压电阻的选择

&emsp;&emsp;在实际使用过程中，adc分压检测常用于检测外部输入电压的变化，用于将一个外部电压分压到0~3.3V被adc采集到，一般用于低功耗设备或对电压敏感设备中，此时会有精度以及耗散电流的要求。虽然电阻分压简单易懂，但事实上，外部的输入电阻的选择会直接影响采样的精度和耗散电流的大小，它是搭配内部的adc电路一起工作的，这就要求我们需要对其adc检测原理进行一定的了解。

<center>
<img src="/storage/images/zh-hans/design-production/pcb-design/knowledge-point/adc-divider-res/adc-divider-res_20250721_154136.png" style="border:2px solid gray" width="300">
</center>

&emsp;&emsp;ADC 转换包括采样、保持、量化、编码四个步骤。采样阶段需要在规定的采样时间内将外部信号的电压完整无误的采样到 ADC 的采样电容上，即在采样开关 SW 关闭的过程中，外部输入信号通过外部的输入电阻 RAIN 和以及 ADC 采样电阻 Radc 对采样电容 Cadc 充电；每次采样过程可以简化为外部信号通过输入阻抗以及采样电阻对采样电容的充电。

<center>
<img src="/storage/images/zh-hans/design-production/pcb-design/knowledge-point/adc-divider-res/adc-divider-res_20250721_153429.png" style="border:2px solid gray" width="800">
</center>

&emsp;&emsp;从上方的原理分析中可知，adc采集电路本质上是一个rc延迟电路，我们需要在使信号在规定的时间内被达到一个平稳的值。其中内部adc电阻以及内部adc电容是固定不变的，在数据手册中都能找到，那我们能改变的就只有外部的电阻值，也就是输入阻抗了；这里以GD32E230C8T6数据手册中的adc为例给大家介绍，Radc=0.5k，Cadc=4pf。

<center>
<img src="/storage/images/zh-hans/design-production/pcb-design/knowledge-point/adc-divider-res/adc-divider-res_20250721_154711.png" style="border:2px solid gray" width="600">
</center>

&emsp;&emsp;此时我们通过一个仿真电路来看一下不同外部输入电阻达到稳定时间的区别;可以看到随着电阻值的增加，达到稳定的时间也随着增长了。

<center>
<img src="/storage/images/zh-hans/design-production/pcb-design/knowledge-point/adc-divider-res/adc-divider-res_20250721_155018.png" style="border:2px solid gray" width="1000">
<br/>
<img src="/storage/images/zh-hans/design-production/pcb-design/knowledge-point/adc-divider-res/adc-divider-res_20250721_155358.png" style="border:2px solid gray" width="1000">
</center>

&emsp;&emsp;在数据手册中，有写到指定时钟频率下能够允许的最大输入阻抗值,此时我们就需要在它的范围内去平衡精度和耗散功率，比如50K，虽然消耗电流很小，但是一个微弱的外部干扰电流也能得到一个比较大的波动电压值，U=IR。
<br/>
&emsp;&emsp;除此之外，还有一个问题需要考虑，那就是电阻本身的精度，1%、5%、0.1%、0.5%等，随着电阻值的增加，电阻本身的精度所造成的误差也是非常大的，对于检测电压这种对精度有所要求的电路而言，至少需要选择1%及以上精度的电阻，这样理论值和计算值才不会偏差过多。

<center>
<img src="/storage/images/zh-hans/design-production/pcb-design/knowledge-point/adc-divider-res/adc-divider-res_20250721_162115.png" style="border:2px solid gray" width="800">
<br/>
<img src="/storage/images/zh-hans/design-production/pcb-design/knowledge-point/adc-divider-res/adc-divider-res_20250721_162201.png" style="border:2px solid gray" width="800">
</center>
