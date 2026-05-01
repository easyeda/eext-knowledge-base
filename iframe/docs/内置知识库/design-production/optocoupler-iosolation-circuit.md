# 光耦隔离电路

&emsp;&emsp;光耦（Optocoupler）,也称光电耦合器，是一种利用光信号实现电信号隔离和传输的电子器件。它主要由发光二极管（LED）和光敏元件（如光电二极管、光电三极管、光电晶体管、光电可控硅等）组成，通过光信号传递信息，实现电路之间的电气隔离‌。

<center><img src="/storage/images/zh-hans/design-production/pcb-design/practical-circuit/optocoupler-iosolation-circuit/optocoupler-iosolation-circuit_20241228_201154.jpg"  width="1300"></center>

## 1 光耦的基本原理

&emsp;&emsp;光耦的基本原理是利用光敏元件将光信号转换为电信号。当输入端的电流通过发光二极管时，发光二极管发出光线，这些光线被光敏元件接收并转换成电信号，从而实现电信号的传递。这一过程确保了输入与输出之间的电气隔离，即使在输入端出现高电压或其他干扰，输出端仍能保持稳定和安全‌。

## 2 光耦的应用

- 单片机与外部电路隔离：单片机通常工作在5V或3.3V（低压），而电机驱动等电路的电压比单片机工作电压高，容易损坏损坏单片机。所以，可以使用光耦来隔离两者，防止干扰或损坏单片机。
- 继电器驱动电路：继电器是一种电控制器件，使用小电压控制大电压工作的设备的开关，通常需要较大电流驱动，而单片机引脚所能提供输出的电流较小。所以，可以使用光耦来隔离两者，防止驱动继电器的大电流回流损坏单片机。
- 电机驱动电路：在电机驱动电路中，控制信号与功率电路需要隔离，避免高压干扰传递到控制电路中。光耦可以将低压控制信号传递到高压电机驱动电路。
- 模数转换电路：光耦可以隔离模数电路，实现模拟信号到数字信号的转变。

## 3 光耦隔离电路

&emsp;&emsp;光耦隔离电路的VIN为输入信号，通常与单片机的引脚连接，光耦的内部发光二极管电源连接为+3V3，所以单片机的供电电源不能超过3.3V。这里，我们选用常用的PC817型号的光耦，查看PC817的数据手册，来确定输入端的顺向电流IF，电压VF，电流传输比CTR，进而得出电阻值。

<center><img src="/storage/images/zh-hans/design-production/pcb-design/practical-circuit/optocoupler-iosolation-circuit/optocoupler-iosolation-circuit_20241228_201218.jpg"  width="900"></center>
&emsp;&emsp;输入Input的顺向电流IF，最大为50mA，一般光耦在传输过程中，内部的发光二极管通常在5mA就点亮了，所以通常10mA～20mA的电流就足够了。一般实际应用中很多都是取IF为10mA，这里我们以数据手册标注的20mA进行计算，输入Input的顺向电压VF取1.2V就行。计算得出R1=(3.3V-1.2V)/20mA=105Ω。
<center><img src="/storage/images/zh-hans/design-production/pcb-design/practical-circuit/optocoupler-iosolation-circuit/optocoupler-iosolation-circuit_20241228_201250.jpg"  width="1300"></center>

<center><img src="/storage/images/zh-hans/design-production/pcb-design/practical-circuit/optocoupler-iosolation-circuit/optocoupler-iosolation-circuit_20241228_201315.jpg"  width="1300"></center>

&emsp;&emsp;光耦的内部光敏三极管完全导通时，UCE≈0V，实际上CE极之间是会有压差的，这里我们取0.2V。IF=20mA，对应的电流传输比CTR范围是135%左右。这里，需要注意，在这里VCE是等于5V测试得出的，CTR = ( IC / IF ) x 100%，计算得出，输出端电流IC=26mA，进而计算得出R2=（5V-0.2V）/26mA≈185Ω。

<center><img src="/storage/images/zh-hans/design-production/pcb-design/practical-circuit/optocoupler-iosolation-circuit/optocoupler-iosolation-circuit_20241228_201336.jpg"  width="600"></center>

<center><img src="/storage/images/zh-hans/design-production/pcb-design/practical-circuit/optocoupler-iosolation-circuit/optocoupler-iosolation-circuit_20241228_201409.jpg"  width="900"></center>
