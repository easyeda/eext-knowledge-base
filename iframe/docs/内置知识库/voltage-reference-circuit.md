# 电压基准源电路

&emsp;&emsp;电压基准源（Voltage Reference）是一种能够提供稳定、精确和可靠的电压输出的电路，常将其用作参考来校准和比较其他电压信号。广泛应用于模数转换器（ADC）、数模转换器（DAC）、比较器、运算放大器、电源管理等电路中。

<center><img src="/storage/images/zh-hans/design-production/pcb-design/practical-circuit/voltage-reference-circuit/voltage-reference-circuit_20241230_223149.jpg"   width="500"></center>

&emsp;&emsp;为了提高单片机ADC和DAC转换精度，可以使用电压基准芯片来提供精确的参考电压（VREF），使用电阻分压得到的参考电压，精度受限于电阻的精度和温度系数，而且会随负载电流的大小变化而变化，负载电流大时，电压降低，负载电流小时电压升高，这种分压方式成本低，但是电压不稳定，难以达到高精度的要求‌。

&emsp;&emsp;这里，我们以典型的TL431型号电压基准芯片为例，分析设计电压基准源电路。

<center><img src="/storage/images/zh-hans/design-production/pcb-design/practical-circuit/voltage-reference-circuit/voltage-reference-circuit_20241230_223207.jpg"   width="400"></center>

- A(Anode)：阳极，接低电平，使用时需接地
- K(Cathode)：阴极，接高电平，使用时需接电源正极
- R(Reference)：参考基准端，是输出电压的设定端，参考基准端电压＞2.5V，阴阳极导通；参考基准端电压＜2.5V，阴阳极截止
- 可调输出电压：2.5V～36V
- 灌电流能力：1mA～100mA
- 工作温度范围：−40°C～125°C

&emsp;&emsp;TL431是由内部结构是由运算放大器、保护二极管、NPN型三极管以及2.5V的精密基准电压源Vref所组成。参考端(R)接运放的同相输入端，2.5V(Vref)基准电压源接运放的反相输入端，运放相当于一个误差放大器，会把同相输入端与反相输入端的电压差放大很多倍，参考端(R)电压与精密基准电压源的2.5V(Vref)电压相比较，当参考端(R)电压大于2.5V(Vref)时，运放输出端电压为高电平，三极管导通，运放的输出端电压会随参考端(R)的电压增大而增大，形成负反馈，三极管起到调节负载电流的作用，保护二极管可防止K-A间电源极性接反而击穿三极管。

<center><img src="/storage/images/zh-hans/design-production/pcb-design/practical-circuit/voltage-reference-circuit/voltage-reference-circuit_20241230_223223.jpg"   width="700"></center>

&emsp;&emsp;用TL431搭建并联稳压器，配置输出2.5V～36V电压基准源，小于2.5V电压是不能输出的。TL431的VREF=2.5V，当REF引脚与CATHODE直接相连接时，输出端电压：VO=VREF=2.5V。可以灵活的调整R1和R2的电阻比例，得到所需要的电压输出值VO=（1+R1/R2）*VREF。当需要更精确地确定阴极输出电压时，还需要考虑上阴极电流，此时，VO=（1+R1/R2）*VREF-IREF\*R1。这里，需要注意，电阻精度需要选用高精度的，如0.1%，防止最后所输出与理论偏差太大。输出的电流带负载能力通过RSUP电阻来决定，负载的需求电流越大，电阻RSUP阻值就会越小，发热就会越严重，带负载能力比较差，通常只用来做基准参考源，超过100mA的带负载需求不建议使用此电路来带载。

<center><img src="/storage/images/zh-hans/design-production/pcb-design/practical-circuit/voltage-reference-circuit/voltage-reference-circuit_20241230_223238.jpg"   width="1000"></center>

在将 TL431 用作并联稳压器时，需要确定以下参数：

- 输入电压范围
- 温度范围
- 总精度
- 阴极电流
- 基准初始精度
- 输出电容

<center><img src="/storage/images/zh-hans/design-production/pcb-design/practical-circuit/voltage-reference-circuit/voltage-reference-circuit_20241230_223301.jpg"   width="1300"></center>
