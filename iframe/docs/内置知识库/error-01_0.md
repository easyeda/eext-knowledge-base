# 三极管基极直连GPIO导致芯片异常发热问题

&emsp;&emsp;首先感谢开源平台用户“zhu-123123”在“天空星-简易数字万用表”项目中找到该问题并提出解决方案；

## 前情提要

&emsp;&emsp;使用单片机GPIO驱动较大功率外设或进行电平反转灯操作时，常会用到三极管进行驱动；此处在“天空星-简易数字万用表”中，使用GPIO控制固态继电器导通/关闭，仅加入了下拉电阻确保电平，没有在基极串联电阻。经用户实测后发现发现单片机容易发热。

<center>
<img src="/storage/images/zh-hans/design-production/pcb-design/design-error-solve/audion-base-error/audion-base-error_20250609_154017.png" >
</center>

## 原理分析

&emsp;&emsp;控制三极管的GPIO引脚配置成推挽输出，GPIO输出高电平，三极管开启，由于三极管的基极与发射极有压降，所以基极的电压大概在0.7v左右，也就是GPIO引脚大概在0.7V，有2.6v的压降在PMOS的漏极与源极之间，损耗功率较大，单片机容易发热。。

<center>
<img src="/storage/images/zh-hans/design-production/pcb-design/design-error-solve/audion-base-error/audion-base-error_20250609_154532.png" >
</center>

## 解决办法

&emsp;&emsp;在gpio与三极管基极中间，串联几个小的电阻，比如330R、1k等，注意该阻值不可太大，会导致放大电流过小使三极管导通不完全，也不可太小，单片机的驱动能力是有限的，通常也就是20mA左右，超过该值内部一般会做限制。

<center>
<img src="/storage/images/zh-hans/design-production/design-error-solve/error-01/error-01_20250908_193922.png" >
</center>
