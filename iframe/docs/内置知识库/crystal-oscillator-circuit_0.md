# 晶振电路设计

## 1 晶振概述

&emsp;&emsp;晶振（Crystal Oscillator）是指石英晶体谐振器和振荡器的统称，是利用石英晶体的压电效应来产生稳定频率的电子元件。晶振的主要功能是提供稳定的频率信号，常用于电路中的时钟模块，为系统提供基本的时钟信号。通常一个系统共用一个晶振，便于各部分保持同步。没有晶振，系统将无法正常稳定运行。晶振通常与锁相环电路配合使用，以提供系统所需的时钟频率。如果不同子系统需要不同频率的时钟信号，可以用与同一个晶振相连的不同锁相环来提供。

<center><img src="/storage/images/zh-hans/design-production/pcb-design/practical-circuit/crystal-oscillator-circuit/crystal-oscillator-circuit_20241210_144543.png"  width="800"></center>

&emsp;&emsp;晶振通常分为无源晶振和有源晶振两种类型，无源晶振是一种不含内部振荡电路的晶体，利用石英晶体的压电效应在外加电压作用下振动，产生特定频率的信号，一般称之为晶体谐振器（Crystal）；而有源晶振是内部自带振荡电路的晶体振荡器，直接供电就能够直接输出稳定的振荡信号，无需依赖外部起振电路来产生信号，一般称之为晶体振荡器(Oscillator)。

<center><img src="/storage/images/zh-hans/design-production/pcb-design/practical-circuit/crystal-oscillator-circuit/crystal-oscillator-circuit_20241210_114616.png" style="border:1px solid gray"  width="1300"></center>

| 特性               | 无源晶振                     | 有源晶振               |
| ------------------ | ---------------------------- | ---------------------- |
| 是否有内部振荡电路 | 否                           | 是                     |
| 是否需要外部电路   | 是(如起振电路、匹配负载电容) | 否                     |
| 是否需要外部供电   | 否                           | 是（如3.3V、5V）       |
| 输出信号           | 需要外部电路，无直接输出     | 直接输出稳定的频率信号 |
| 启动时间           | 慢                           | 快                     |
| 抗干扰能力         | 弱                           | 强                     |
| 功耗               | 较低                         | 较高                   |
| 成本               | 较低                         | 较高                   |
| 应用场景           | 成本敏感需求场景             | 高精度需求场景         |

## 2 晶振电路介绍

&emsp;&emsp;晶振电路是一种用于产生准确稳定时钟信号的电路，晶振两端通常并联连接两个电容，每个电容的另一端再连接到地，将形成一个正弦波振荡电路。

- 微控制器晶振电路

&emsp;&emsp;常用于单片机的时钟电路，典型频率为8MHz、12MHz、24MHz等，需要注意晶振的匹配负载电容。

- 低功耗时钟晶振电路

&emsp;&emsp;常用于RTC(实时时钟)电路，典型频率为32.768kHz，32768=2^15，32.768KHz的晶振产生的时钟信号经过15次分频后，可以精确地被分频为1Hz，RTC实时电路通常需要以1秒为单位计时，1Hz的信号正好对应1秒钟，非常适合实时时钟用来确定时间和日期。

## 3 晶振电路设计

### 3.1 匹配谐振电容

<center><img src="/storage/images/zh-hans/design-production/pcb-design/practical-circuit/crystal-oscillator-circuit/crystal-oscillator-circuit_20241210_164506.png"  style="border:1px solid gray" width="1300"></center>

- RF：内部反馈电阻。

- Inv：内部反相放大器。

- X1：晶振。

- CL1和CL2：晶振输入输出两端的匹配电容。

- Cs：OSC_IN和OSC_OUT引脚间的寄生杂散电容，一般无法抵消，只能减少，每个厂家晶振的这个值也会有所不同，一般取3pF～5pF。

**负载电容计算公式：**

**CL=(CL1\*CL2)/(CL1+CL2)+Cs**

**一般实际使用CL1都会等于CL2，即CL1=CL2。**

**故：CL=(CL1^2/2CL1)+Cs**

**得：CL1=2(CL-Cs)**

**示例：**

&emsp;&emsp;这里，我们选择一个12MHz频率，SMD3225-4P封装的无源晶振（商品编号：C9002），负载电容为20pF，可以查看晶振的数据手册，找到规格参数，Load Capacitance（负载电容）CL=20PF，计算出负载匹配的谐振电容大小。

<center><img src="/storage/images/zh-hans/design-production/pcb-design/practical-circuit/crystal-oscillator-circuit/crystal-oscillator-circuit_20241211_113834.png"  style="border:1px solid gray" width="1300"></center>

<center><img src="/storage/images/zh-hans/design-production/pcb-design/practical-circuit/crystal-oscillator-circuit/crystal-oscillator-circuit_20241211_114545.png"  style="border:1px solid gray" width="1300"></center>

在实际设计晶振电路时，匹配谐振电容CL1=CL2=2(CL-Cs)，寄生杂散电容Cs≈静态电容C0=3pF。

<center><img src="/storage/images/zh-hans/design-production/pcb-design/practical-circuit/crystal-oscillator-circuit/crystal-oscillator-circuit_20241211_115626.png"  style="border:1px solid gray" width="1300"></center>

即CL1=CL2=2(CL-Cs)=2(20pF-3pF)=34pF。这里，计算得到匹配负载电容为34pF，34pF电容不是常用规格，所以我们选用数量更多，更加常用的33pF电容。所设计的晶振电路如下图所示。

<center><img src="/storage/images/zh-hans/design-production/pcb-design/practical-circuit/crystal-oscillator-circuit/crystal-oscillator-circuit_20241211_160406.png"  style="border:1px solid gray" width="800"></center>

### 3.2 限流电阻

&emsp;&emsp;在设计晶振电路，当主控微控制器的反相输出电流过大时，可以在晶振的OSC_OUT引脚端接入一个外部限流电阻RExt，通常取10Ω～100Ω，避免在晶振启动时，高瞬态电流引起电路损坏。

<center><img src="/storage/images/zh-hans/design-production/pcb-design/practical-circuit/crystal-oscillator-circuit/crystal-oscillator-circuit_20241210_165328.png"  style="border:1px solid gray" width="800"></center>

### 3.3 反馈电阻

&emsp;&emsp;在设计晶振电路，当发生程序启动很慢或者不运行时，微控制器内部的晶振引脚不一定都有1MΩ的电阻的，若没有，建议可以在晶振并联上一个反馈电阻RF，通常取大于1MΩ阻值的电阻，间接增加反相放大器的负性阻抗，提高增益，使得晶振顺利起振，稳定运行。

<center><img src="/storage/images/zh-hans/design-production/pcb-design/practical-circuit/crystal-oscillator-circuit/crystal-oscillator-circuit_20241210_165708.png"  style="border:1px solid gray" width="800"></center>

## 4 晶振选型注意事项

&emsp;&emsp;在设计晶振电路时，对于晶振选型需要注意：输出频率、频率稳定性和温度范围、输入电压和功率、输出波形、封装尺寸和外形等。无源晶振要关注负载电容和外接电容，有源晶振要关注电压、脚位控制功能等参数。
