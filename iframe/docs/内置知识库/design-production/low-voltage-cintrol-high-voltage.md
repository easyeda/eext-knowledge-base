# 小电压控制大电压电路

&emsp;&emsp;在实际电路项目中，经常会遇到小电流控制大电流、小电压控制大电压负载的情况，使用最多的分别是三极管控制电路、MOS管控制电路以及继电器控制电路；下面依次为大家举例说明。

## 三极管控制电路

<center>
<img src="/storage/images/zh-hans/design-production/practical-circuit/low-voltage-cintrol-high-voltage/low-voltage-cintrol-high-voltage_20250611_180314.png" width="1000" style="border:1px solid gray">
</center>

&emsp;&emsp;三极管控制电路作为开关控制的话主要工作在饱和导通区，这里我们重点关注几个参数，Vcb以及Vce，控制的电压不应该超过该值，否则会导致三极管损坏，同时，还有Ic的最大电流以及额定功率，在实际使用过程中不应该超过限制值。

&emsp;&emsp;如果使用PNP型三极管作为驱动时，考虑到GPIO本身电压就小，及时输出高电平可能也是会导通的，如果使用开漏输出的话，外部电压也可能过高损坏gpio引脚，所以在单片机驱动中npn型的三极管使用较多。

<center>
<img src="/storage/images/zh-hans/design-production/practical-circuit/low-voltage-cintrol-high-voltage/low-voltage-cintrol-high-voltage_20250611_192023.png" width="1000" style="border:1px solid gray">
</center>

&emsp;&emsp;在进行三极管驱动时，一定要使三极管工作在饱和导通区；ic > ib\*放大倍数，且放大倍数会随着电流增大而减少，所有通常还需要流出1.5倍左右的余量。

<center>
<img src="/storage/images/zh-hans/design-production/practical-circuit/low-voltage-cintrol-high-voltage/low-voltage-cintrol-high-voltage_20250611_193802.png" width="1000" style="border:1px solid gray">
</center>

## MOS管控制电路

<center>
<img src="/storage/images/zh-hans/design-production/practical-circuit/low-voltage-cintrol-high-voltage/low-voltage-cintrol-high-voltage_20250611_194627.png" width="1000" style="border:1px solid gray">
</center>

&emsp;&emsp;mos控制电路作为开关控制的话主要工作在饱和导通区，由于mos是压控器件，我们满足Vgs的电压差后，通常就不需要动态调整压差值了，同时mos的额定电流通常也会比三极管大很多、自身的寄生电阻较小，损耗在器件本身的功耗较小，目前已经逐渐成为主流控制器件。

&emsp;&emsp;在mos控制电路中，需要考虑mos管的Vds、Vgs电压值以及Id电流值和Pd额定功率值，在设计时不能超过额定参数；

<center>
<img src="/storage/images/zh-hans/design-production/practical-circuit/low-voltage-cintrol-high-voltage/low-voltage-cintrol-high-voltage_20250611_195345.png" width="1000" style="border:1px solid gray">
</center>

&emsp;&emsp;mos管中，有一个参数是Vgs(th)，该值是导通的阈值电压，并不是说达到该值后mos管就一定饱和导通了，实际需查看对应的Vgs电压与电流的图表或说明，通常在阈值电压的1.5倍时就能达到一个饱和导通的条件。

<center>
<img src="/storage/images/zh-hans/design-production/practical-circuit/low-voltage-cintrol-high-voltage/low-voltage-cintrol-high-voltage_20250611_195714.png" width="1000" style="border:1px solid gray">
</center>

## 继电器控制电路

<center>
<img src="/storage/images/zh-hans/design-production/practical-circuit/low-voltage-cintrol-high-voltage/low-voltage-cintrol-high-voltage_20250611_202444.png" width="1000" style="border:1px solid gray">
</center>

&emsp;&emsp;继电器控制电路是一种隔离型的控制，当线圈闭合时，控制开关导通从而实现控制，在设计时需要满足线圈导通的额定电压值，同时线圈的电流也不宜过大，满足数据手册的指定导通条件即可，否则会导致继电器过热损坏，同时，由于线圈是感性负载，在设计时需要考虑反向电压冲击，通常都会在线圈两端加入一个肖特基或开关二极管来泄放反向电压。

<center>
<img src="/storage/images/zh-hans/design-production/practical-circuit/low-voltage-cintrol-high-voltage/low-voltage-cintrol-high-voltage_20250611_202909.png" width="1000" style="border:1px solid gray">
</center>

<center>
<img src="/storage/images/zh-hans/design-production/practical-circuit/low-voltage-cintrol-high-voltage/low-voltage-cintrol-high-voltage_20250611_202938.png" width="1000" style="border:1px solid gray">
</center>

&emsp;&emsp;继电器给人的认知通常是作用与高压、大功率电路中，但是通常是针对与交流而言，对于直流电压来说，继电器也并没有很高的负载能力，在使用继电器控制高压直流电路时，一定要看是否在额定直流电压范围内。
