# 接口ESD防护电路

&emsp;&emsp;ESD防护电路是为了防止静电放电（Electro Static Discharge，简称 ESD）对电子设备和电路造成损害而设计的电路。静电放电通常是由静电荷积累和快速放电所引起的，当人体或其他物体（如开关浪涌、雷击浪涌等）与电子元件接触时，静电放电可能产生上千或万伏的电压，这会对敏感的电子元件（如通信接口，集成IC等）造成不可修复的损伤。

<center><img src="/storage/images/zh-hans/design-production/pcb-design/practical-circuit/interface-esd-protective-circuit/Interface-esd-protective-circuit_20241219_225635.jpg"  style="border:1px solid gray" width="1300"></center>

&emsp;&emsp;ESD防护电路常使用TVS管（瞬态电压抑制二极管）或者ESD管（静电放电二极管）设计，TVS管常用于输入端的浪涌抑制或输出端的电压抑制和保护，要求电容值高，适用于高电压大电流场合，如电源的输入端保护‌。‌ESD管常用于输入输出端接口电路、要求寄生电容值低(一般1～3.5pF)，静电敏感器件或静电敏感局部电路，适用于超高频低电压小电流的场合，如高速信号传输线等‌。

TVS管也属于ESD管的一种。

<center><img src="/storage/images/zh-hans/design-production/pcb-design/practical-circuit/interface-esd-protective-circuit/Interface-esd-protective-circuit_20241219_225652.jpg"  style="border:1px solid gray" width="1300"></center>

**TVS管 选型总结**

- 确定工作电压范围，确保其工作电压高于正常工作电压，低于电路中可能承受的最大电压；
- 反向击穿电压（VBR）比电路工作电压高20%～30%；
- 反向截止电压（VRWN）要大于被保护电路的正常工作电压，最好高于主控芯片的典型工作电压；
- 最大钳位电压（VC）应小于被保护电路的损坏电压，最好低于主控芯片额定工作电压的上限值，以免电压过高导致电路损坏；

**ESD管 选型总结**

- 确定工作电压范围及最大静电放电电压；
- 根据电流限制和信号类型选择单向或双向的ESD管保护；
- 选择适当的击穿电压和钳位电压；
- 结电容(CT)选型应尽可能低，尽量保持信号质量不会下降，不能影响后级被保护电路的信号完整性；
- 响应时间越短越好，响应时间也是ESD的重要特性;
- ESD等级符合IEC 61000-4-2（国际电工委员会规范）的Level 4标准；

&emsp;&emsp;外设接口（如：USB、HDMI等经常需要插拔带金属外壳的接口）是电子设备与外部设备进行数据传输的重要部分，尤其容易受到静电放电（ESD）的影响，为了保护这些接口和内部电路，通常需要给外设接口设计上ESD防护电路。

## 1 USB接口

&emsp;&emsp;USB 2.0 OTG信号电路，对USB2.0而言VBUS可能达到5V，所以，需要选取的ESD保护二极管的工作电压需要达到5V或略微高于5V。正常工作中D+和D-负责传输叉分信号幅值范围在0～3.6V之间。所以，这里选择工作电压在3.6V或者更高的ESD保护二极管。根据信号类型选择单向或双向，双向的没有极性，更灵活接地或信号。

| **USB接口**        | **ESD结电容(CT)建议值** |
| ------------------ | ----------------------- |
| USB 1.1            | ＜2pF                   |
| USB 2.0            | ＜1pF                   |
| USB 2.0 High-Speed | ＜0.7pF                 |
| USB 3.0            | ＜0.5pF                 |
| USB 3.1 Gen 2      | ＜0.3pF                 |

这里，我们选择KUU品牌的KLXES15AAA1型号ESD管(商品编号：C2892490)，工作电压为5V， ESD等级符合IEC 61000-4-2（国际电工委员会规范）的Level 4测试标准，结电容值只有0.05pF，响应时间小于1ns，漏电流＜10nA，最大钳位电压为40V，

<center><img src="/storage/images/zh-hans/design-production/pcb-design/practical-circuit/interface-esd-protective-circuit/Interface-esd-protective-circuit_20241219_225710.jpg"  style="border:1px solid gray" width="1300"></center>

<center><img src="/storage/images/zh-hans/design-production/pcb-design/practical-circuit/interface-esd-protective-circuit/Interface-esd-protective-circuit_20241219_225726.jpg"  style="border:1px solid gray" width="1300"></center>

&emsp;&emsp;为提高接口抗性，请串接2.2R电阻、使用ESD保护措施，ESD器件的寄生电容要求小于1pF，ESD器件靠近USB接口放置，如图所示。

<center><img src="/storage/images/zh-hans/design-production/pcb-design/practical-circuit/interface-esd-protective-circuit/Interface-esd-protective-circuit_20241219_225742.jpg"  style="border:1px solid gray" width="1300"></center>

## 2 HDMI接口

| **HDMI接口** | **ESD结电容(CT)建议值** |
| ------------ | ----------------------- |
| HDMI 1.4     | ＜0.7pF                 |
| HDMI 2.0     | ＜0.4pF                 |
| HDMI 2.1     | ＜0.2pF                 |

HDMI 2.0的差分信号与低速控制信号都应进行ESD防护，ESD器件需靠近HDMI接口放置，推荐电容最大不超过0.4pF（低速控制信号要求可降低）。
这里，可以选择使用 WILLSEMI(韦尔)的ESD5344D-10/TR型号（商品编号：C239666）4in1阵列ESD管。

<center><img src="/storage/images/zh-hans/design-production/pcb-design/practical-circuit/interface-esd-protective-circuit/Interface-esd-protective-circuit_20241219_225810.jpg" style="border:1px solid gray" width="1300"></center>

<center><img src="/storage/images/zh-hans/design-production/pcb-design/practical-circuit/interface-esd-protective-circuit/Interface-esd-protective-circuit_20241219_223916.jpg" style="border:1px solid gray" width="1300"></center>

&emsp;&emsp;考虑到成本等原因，I2C_SCL、I2C_SDA、CEC、HPD四个信号上的ESD管选择价格更低的台舟TPESD5341N型号（商品编号：C907840），也可以使用4in1的ESD器件。

<center><img src="/storage/images/zh-hans/design-production/pcb-design/practical-circuit/interface-esd-protective-circuit/Interface-esd-protective-circuit_20241219_223948.jpg" style="border:1px solid gray" width="1300"></center>

<center><img src="/storage/images/zh-hans/design-production/pcb-design/practical-circuit/interface-esd-protective-circuit/Interface-esd-protective-circuit_20241219_224019.jpg" style="border:1px solid gray" width="1300"></center>

&emsp;&emsp;按照上面USB接口ESD管选型设计，选择好合适的ESD管后，完成HDMI接口ESD防护电路设计，如图所示。

<center><img src="/storage/images/zh-hans/design-production/pcb-design/practical-circuit/interface-esd-protective-circuit/Interface-esd-protective-circuit_20241219_224106.jpg"  style="border:1px solid gray" width="1300"></center>

## 3 SD Card接口

&emsp;&emsp;同理，在设计MicroSD Card电路时，也可在各个输出信号上添加一个USB 2.0 OTG信号电路的KLXES15AAA1型号ESD管(商品编号：C2892490)，统一物料，节省成本，提升板子抗静电干扰能力，使得信号传输更加稳定。

<center><img src="/storage/images/zh-hans/design-production/pcb-design/practical-circuit/interface-esd-protective-circuit/Interface-esd-protective-circuit_20241219_224145.jpg"  style="border:1px solid gray" width="1300"></center>

**此设计来源于[立创·泰山派开发板](https://oshwhub.com/li-chuang-kai-fa-ban/li-chuang-tai-shan-pai-kai-fa-ban)**
