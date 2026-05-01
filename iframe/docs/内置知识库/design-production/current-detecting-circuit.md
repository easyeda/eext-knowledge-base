# 电流检测电路

&emsp;&emsp;电流检测电路的设计主要是为了测量、实时监测电路中电流的变化，常应用于电源管理、电池监控及过流检测等场景。

&emsp;&emsp;这里，介绍电流感应放大器芯片方案，来学习设计电流检测电路，电流感应放大器本质上是运放电路，是通过在电流路径中串联感测采样电阻两端的压降，经过电流感应放大器（运放电路）放大电阻的压降，然后单片机ADC采样，来测量得出电流值。

&emsp;&emsp;在测量电流时，电流检测技术分为高侧（边）检测和低侧（边）检测。将测量采样电阻放置在电源与负载之间的检测方法称为高侧检测，将测量采样电阻放置在负载与接地端之间的检测方法称为低侧检测。这两种用于检测负载中电流的方法，如图所示。

<center><img src="/storage/images/zh-hans/design-production/pcb-design/practical-circuit/current-detecting-circuit/current-detecting-circuit_20241226_215327.jpg"  width="600"></center>
<center>图 1 高侧和低侧检测连接</center>

| **特性**         | **低侧电流检测**     | **高侧电流检测**     |
| ---------------- | -------------------- | -------------------- |
| 测量采样电阻位置 | 负载与接地端之间     | 电源与负载之间       |
| 共模电压         | 接近地               | 接近电源电压         |
| 接地环路问题     | 较差                 | 无                   |
| 检测失败         | 有                   | 无                   |
| 应用场景         | 采样精度要求相对较低 | 采样精度要求相对较高 |
| 成本             | 成本较低             | 成本较高             |

## 1 低侧电流检测

要求设计一个0～3A的低侧电流检测电路。

这里，我们以INA180电流感应放大芯片为例进行设计。

INA180参数信息：

- 供电电压：2.7V～5.5V
- 共模电压范围（VCM）:-0.2V～+26V
- 高带宽：350kHz
- 增益选项：
  INA180A1（20V/V）；
  INA180A2（50V/V）；
  INA180A3（100V/V）；
  INA180A4（200V/V）；

<center><img src="/storage/images/zh-hans/design-production/pcb-design/practical-circuit/current-detecting-circuit/current-detecting-circuit_20241226_215405.jpg" width="900"></center>
<center>图 2 低侧电流检测电路</center>

&emsp;&emsp;这里我们假设单片机ADC采样电压范围为0～3.3V，取中间端1.65V作为参考电压，我们选取INA180A2（50V/V放大增益），经过芯片放大前最大的可采样电压为33mV，除以采样电阻最高输入的3A，算出串联的电流采样电阻为11mΩ，这里我们选用10mΩ的采样电阻，更加常用一些，便于购买使用。电流采样电阻的精度,将直接影响电流测量的准确性，高精度的电阻可以减少误差，提高电流测量精度准确，常选用±1%精度。

<center><img src="/storage/images/zh-hans/design-production/pcb-design/practical-circuit/current-detecting-circuit/current-detecting-circuit_20241226_215454.jpg" width="900"></center>
<center>图 3 INA180A2低侧电流检测电路</center>

采样电阻两端的电压：VSENSE=VOUT/G

流过采样电阻的电流：I=VSENSE/RSENSE

所以，合并公式可得

被检测的电流：I=VOUT(ADC采集的电压值)/（G增益\*RSENSE)=VOUT(ADC采集的电压值)/（50\*10mΩ)

即单片机ADC采集出VOUT电压即可计算得出检测的电流。

## 2 高侧电流检测

<center><img src="/storage/images/zh-hans/design-production/pcb-design/practical-circuit/current-detecting-circuit/current-detecting-circuit_20241226_215348.jpg" width="900"></center>

<center>图 4 高侧电流检测电路</center>

&emsp;&emsp;电源VBUS输出控制选用PMOS WST4041型号，最高支持40V漏源电压（Vdss），6A连续漏极电流。电路的工作原理是INA180A2高侧检测R1采样电阻电流，R2电阻作用是使PMOS的栅极悬空出现不稳定现象引起漏电流，提高PMOS导通与关断的稳定性。默认VBUS_CTRL输入高电平，使三极管Q2导通，PMOS管Q1的G极被拉低，VGS大于阈值电压Vth，Q1打开导通，后级的负载正常工作；当单片机采样检测到的ADC_CURRENT电压计算出来流过采样电阻的电流超过预设的保护电流值时，VBUS_CTRL输入低电平，控制三极管Q2关闭截止，PMOS管Q1的G极被拉高，VGS小于阈值电压Vth，Q1关闭截止，后级负载断电，防止超过预设的电流进入后级，保护后级负载电路。

<center><img src="/storage/images/zh-hans/design-production/pcb-design/practical-circuit/current-detecting-circuit/current-detecting-circuit_20241226_215510.jpg" width="1200"></center>

<center>图 5 INA180A2高侧电流检测电路</center>
