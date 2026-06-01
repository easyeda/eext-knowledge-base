# PCB 设计时板边为什么要打地过孔

&emsp;&emsp;在PCB设计中，板边打地过孔是一种常见做法，目的是为了抑制电磁干扰（EMI）、提供接地路径、屏蔽与抗干扰、增强PCB的机械强度、增强PCB板的散热能力。这种设计方法对电路的整体性能和元件的稳定性有显著影响，具体原因如下：

## 一、抑制电磁干扰（EMI）

&emsp;&emsp;板边的地过孔形成屏蔽，抑制电磁辐射的散射，有效减少电磁干扰（EMI），保证PCB的电磁兼容性。

<center><img src="/storage/images/zh-hans/design-production/pcb-design/knowledge-point/gnd-via/gnd-via_20250116_210356.jpg"  style="border:2px solid gray" width="600"></center>

## 二、提供接地回流路径

&emsp;&emsp;地过孔为电路中的接地信号提供了一个直接的路径，有助于降低接地阻抗，确保电路中的接地信号能够稳定、高效地传递到地层，这有助于改善电路的整体性能，特别是在高频和高速电路中，降低接地阻抗能够减少信号干扰和噪声，提高信号的完整性和稳定性。

<center><img src="/storage/images/zh-hans/design-production/pcb-design/knowledge-point/gnd-via/gnd-via_20250116_210413.jpg"  style="border:2px solid gray" width="600"></center>

## 三、屏蔽与抗干扰

&emsp;&emsp;地过孔在板边形成连续的接地网络，能够阻挡或减弱外部电磁场对电路内部信号的干扰。同时，它们还能将电路内部的干扰信号引导至地层，防止其干扰其他电路部分。

<center><img src="/storage/images/zh-hans/design-production/pcb-design/knowledge-point/gnd-via/gnd-via_20250116_210431.jpg"  style="border:2px solid gray" width="600"></center>

## 四、增强 PCB 的机械强度

&emsp;&emsp;在 PCB 板边打地过孔还可以增强电路板各层之间的电气连接，使电路更加稳定可靠，避免在插拔、震动等情况下对电路造成机械损坏。

<center><img src="/storage/images/zh-hans/design-production/pcb-design/knowledge-point/gnd-via/gnd-via_20250116_210446.jpg"  style="border:2px solid gray" width="600"></center>

## 五、增强 PCB 板的散热能力

&emsp;&emsp;板边打地过孔的设计不仅能提升 PCB 的电磁兼容性和机械强度，还能提供额外的散热路径，有效缓解高功率和高频电路的过热问题，提升电路的热稳定性和使用寿命。

<center><img src="/storage/images/zh-hans/design-production/pcb-design/knowledge-point/gnd-via/gnd-via_20250116_210500.jpg"  width="500"></center>

**此文章来源于**[ 京晓电路 ](https://mp.weixin.qq.com/s/Tmr48c0XjTYKxFiMPsRmWg?cur_album_id=3752849276242690049&scene=189&from=industrynews&nwr_flag=1#wechat_redirect)
