# 0Ω电阻的功能

‌&emsp;&emsp;0Ω电阻又称跨接电阻，是一种标称阻值为0的特殊电阻，实际阻值通常在10-50mΩ（毫欧）之间，下面介绍0Ω电阻的用法和功能。

<center><img src="/storage/images/zh-hans/design-production/practical-circuit/0ohm-function/0ohm-function_20250721_175144.png"  width="300"></center>

## 1 方便调试与兼容设计

&emsp;&emsp;当电路引脚功能不确定时，可以通过0Ω电阻临时连接不同模块，待调试后确定出最终方案。

<center><img src="/storage/images/zh-hans/design-production/practical-circuit/0ohm-function/0ohm-function_20250723_101518.png"  width="400"></center>

## 2 参数匹配

&emsp;&emsp;在不确定电路参数时，用0Ω电阻作为过渡元件，待调试后更换为实际电阻值。 ‌

<center><img src="/storage/images/zh-hans/design-production/practical-circuit/0ohm-function/0ohm-function_20250721_180621.png"  width="500"></center>

## 3 模数电路单点接地

&emsp;&emsp;在模拟电路和数字电路等混合电路中，往往要求地分开，避免信号干扰，不同地线可以通过0Ω电阻单点连接在一起。

<center><img src="/storage/images/zh-hans/design-production/practical-circuit/0ohm-function/0ohm-function_20250721_175521.png"  width="500"></center>

## 4 跨接跳线

‌&emsp;&emsp;在PCB布线时，可能会出现布线走不通的情况，如铝基板单层布线，不允许打过孔，可以使用0Ω电阻充当跳线进行连接。

<center><img src="/storage/images/zh-hans/design-production/practical-circuit/0ohm-function/0ohm-function_20250721_180010.png"  width="500"></center>

## 5 保护与熔断

‌&emsp;&emsp;作为低成本熔丝使用，当电路过流时，优先熔断0Ω电阻，以保护其他元件。 ‌

<center><img src="/storage/images/zh-hans/design-production/practical-circuit/0ohm-function/0ohm-function_20250721_181423.png"  width="800"></center>

‌&emsp;&emsp;0Ω电阻的过流能力与参考功率表
| 封装 | 最大阻值 | 额定电流 | 参考功率 |
| :----: | :------: | :------: | :------: |
| R01005 | 50mΩ | 0.5A | 1/32W |
| R0201 | 50mΩ | 0.5A | 1/20W |
| R0402 | 50mΩ | 1A | 1/16W |
| R0603 | 50mΩ | 1A | 1/10W |
| R0805 | 50mΩ | 2A | 1/8W |
| R1206 | 50mΩ | 2A | 1/4W |
| R1210 | 50mΩ | 2A | 1/2W |
| R1812 | 50mΩ | 2A | 3/4W |
| R2010 | 50mΩ | 2A | 3/4W |
| R2512 | 50mΩ | 2A | 1W |
