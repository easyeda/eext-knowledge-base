# PCB 层压结构

## 1 PCB叠层的基本组成

&emsp;&emsp;PCB 叠层（PCB Stack-up）通常由导电铜箔（信号层和电源/地层）和绝缘材料（介质层）交替组成。合理的叠层设计对PCB的电气特性、物理性能、机械性能、可靠稳定性和制造成本等至关重要。

## 2 叠层设置的基本原则

- 主芯片相邻层为地平面，在布线时提供良好的参考地平面；
- 信号层尽量避免直接相邻，以减少串扰；
- 所有信号层最好与地平面相邻，以保证完整信号的回流；
- 主电源尽可能与地平面相邻，降低电源平面阻抗；

## 3 常见的叠层结构

&emsp;&emsp;以下是一些典型的PCB叠层结构，实际设计可根据实际应用情况进行调整。

- 双层板：包含两层导电铜箔层，中间是绝缘介电层。

<center><img src="/storage/images/zh-hans/design-production/pcb-design/knowledge-point/laminated-structure/laminated-structure_20250116_210613.jpg" style="border:1px solid gray" width="1300"></center>

- 四层板：包含四层导电铜箔层，每两层铜箔中间夹一层绝缘介电层。通常在靠近元器件多的内层里铺一层完整的GND。

<center><img src="/storage/images/zh-hans/design-production/pcb-design/knowledge-point/laminated-structure/laminated-structure_20250116_210629.jpg" style="border:1px solid gray" width="1300"></center>

- 六层板及以上：增加了更多的导电铜箔层，每两层铜箔中间夹一层绝缘介电层，提供更好的电源分配和信号隔离。

## 4 嘉立创层压结构

&emsp;&emsp;嘉立创 4-32 层板共支持 700 多种阻抗结构，非常丰富，后续还会不断增加。为了产品稳定性及易于生产，建议可以直接采用嘉立创现有的层压结构进行设计。

<center><img src="/storage/images/zh-hans/design-production/pcb-design/knowledge-point/laminated-structure/laminated-structure_20250116_210643.jpg" style="border:1px solid gray" width="1300"></center>

详情链接：https://tools.jlc.com/jlcTools/#/impedanceDefaultTemplate?spm=PCB.Homepage.functionbar.1004

如果仍然没有想要的层压结构，在嘉立创下单高多层PCB时，在需要阻抗选项栏中，可以点击更多层压结构，自定义层压结构，由嘉立创人工核算。

<center><img src="/storage/images/zh-hans/design-production/pcb-design/knowledge-point/laminated-structure/laminated-structure_20250116_210700.jpg" style="border:1px solid gray" width="1300"></center>
