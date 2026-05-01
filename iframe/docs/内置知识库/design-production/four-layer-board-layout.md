# 四层板PCB Layout设计规范指导

## 层叠结构

&emsp;&emsp;四层板是四个导电铜箔的印制电路板，通常采用多层压合的方式制造，相比于两层板，它多了两个铜层，可以更好的实现电源分配、信号完整性和EMC性能提升。

<center><img src="/storage/images/zh-hans/design-production/pcb-design/four-layer-board-layout/four-layer-board-layout_20250918_160345.png" style="border:1px solid gray" width="1000"></center>
<br/>

### 堆叠分布

&emsp;&emsp;四层板多了两个铜箔层，这使得电源、信号的分配有了更多的可选项，下面列举出四层板常用的堆叠情况：
<br/>

**第一种：（注：核心器件若在底层，则颠倒一下顺序，保证高速信号靠近GND平面）**

<center><img src="/storage/images/zh-hans/design-production/pcb-design/four-layer-board-layout/four-layer-board-layout_20250918_160649.png" style="border:1px solid gray" width="1000"></center>

- 优点：有完整的接地平面、回流路径最短，EMC性能好，阻抗控制简单。
- 缺点：顶层元件较多时高速信号布线困难。

**第二种：（注：核心器件若在底层，则颠倒一下顺序，保证高速信号靠近GND平面）**

<center><img src="/storage/images/zh-hans/design-production/pcb-design/four-layer-board-layout/four-layer-board-layout_20250918_161123.png" style="border:1px solid gray" width="1000"></center>

- 优点：有完整的接地平面、回流路径最短，EMC性能好，阻抗控制简单。
- 缺点：电源平面不完整，适用与电源不复杂但是板子很密很紧凑项目。

### 铜厚分布

&emsp;&emsp;注意：多层板内层铜厚通常为0.5oz，且散热不如外层，多数情况下电源和GND层均被分配在内层，此时一定要考虑电流与线宽/铜皮的宽度关系，防止因载流不够导致的使用异常。

<center><img src="/storage/images/zh-hans/design-production/pcb-design/four-layer-board-layout/four-layer-board-layout_20250918_161252.png" style="border:1px solid gray" width="1000"></center>

## 特性阻抗

### 定义

&emsp;&emsp;特性阻抗是电磁波在传输线中传播时遇到的阻抗，反映了信号传输的质量和效率，在PCB设计中，控制特性阻抗对确保信号完整性和减少反射非常重要。

### 计算

&emsp;&emsp;理想传输线不消耗功率，电压和电流之间只有相位差，Z0=V/I；实际情况下铜箔有一定直流/交流电阻R（导体损耗），介质有损耗角正切tanδ，等效为电导G（介质损耗）；在低频/直流时，jωL很小，公式主要受R和G影响，高频时铜箔电阻R和介质损耗G非常小可以忽略R/G，

<center><img src="/storage/images/zh-hans/design-production/pcb-design/four-layer-board-layout/four-layer-board-layout_20250918_161518.png" style="border:1px solid gray" width="1000"></center>

### 防止阻抗突变

&emsp;&emsp;在高速PCB设计中，设计重点就是防止特性阻抗突变，核心思路是：保持传输线的电气环境连续和一致，建议遵循以下几点：

#### 保持线宽连续

- 阻抗取决于走线的线宽、介质厚度、铜厚；
- 避免走线突然变窄/变宽，特别是在器件焊盘、过孔附近；
- 如果需要变宽（如BGA扇出），尽量采用过渡渐变，减少不连续。

#### 保证参考平面连续

- 高速信号必须有完整的GND参考平面；
- 避免跨越电源平面分割、GND缺口，否则回流路径突然变长会导致等效阻抗跳变；
- 如果必须要跨分割，增加回流地过孔，为回流提供连续通道。

#### 保持原有阻抗匹配

- 高速信号在芯片、连接器中本身根据连接器特性做好了阻抗匹配，在接入PCB时应该保持一致。

### 传输线阻抗

&emsp;&emsp;在高速信号中，分为单端高速信号，差分高速信号，对应的引出单端传输线阻抗以及差分传输线阻抗，下面对单端、差分阻抗进行介绍：

- 单端阻抗（Single-Ended Impedance）是指信号线与参考平面（通常是地平面或电源平面）之间的阻抗，适用于单端信号传输。

- 差分阻抗（Differential Impedance）是指一对差分信号线之间的阻抗，适用于差分信号传输。差分阻抗可分为差模阻抗和共模阻抗，其中差模阻抗用于描述正负差分信号之间的阻抗，而共模阻抗则用于描述这两个信号与地之间的阻抗，常用于高速信号传输（如USB、HDMI、PCIe、以太网等），其中Z是单端阻抗；k是两条差分线之间的耦合系数（通常为0.1~0.3）。

&emsp;&emsp;各传输线由于协议标准、电气特性等规范，接口的传输线阻抗也不一样，下面列举出常用的高速信号传输线阻抗。

| 接口   | 差分阻抗目标 | 单端阻抗目标 | 备注                               |
| ------ | ------------ | ------------ | ---------------------------------- |
| USB2.0 | 90Ω±15%      |              | 差分信号                           |
| USB3.x | 90Ω±10%      |              | 5Gbps以上，阻抗稍低，有时会做85Ω   |
| HDMI   | 100Ω±15%     |              | TMDS差分对                         |
| PCIE   | 85Ω±15%      |              | 高速Lane信号                       |
| 网口   | 100Ω±15%     |              | 双绞线物理标准规定                 |
| LVDS   | 100Ω±10%     |              | 驱动器匹配一般是100Ω               |
| 射频线 | 50Ω±10%      |              | 无线电发射、射频模块接口、天线馈线 |

<center><img src="/storage/images/zh-hans/design-production/pcb-design/four-layer-board-layout/four-layer-board-layout_20250918_163204.png" style="border:1px solid gray" width="1000"></center>

### 阻抗模式选择

&emsp;&emsp;在进行阻抗参数计算时，除了单端、差分的区分外，还有共面/不共面的区别。

&emsp;&emsp;共面意思是阻抗线与参考平面在同一层或耦合非常密切，此时阻抗线到参考平面的距离会影响特性阻抗，此时一定要保证参考平面的完整，并每隔150~300mil左右进行GND过孔连接，一般是＜λ/20 ~λ/10，λ 为信号最高频率对应波长在介质中的传播速度。

&emsp;&emsp;在四层板设计中，如果顶层走了阻抗线，并不意味着顶层就不能铺铜了，通常会将铺铜到阻抗的距离设置为3倍线宽，此时参考平面对阻抗线的影响基本可以忽略。

<center><img src="/storage/images/zh-hans/design-production/pcb-design/four-layer-board-layout/four-layer-board-layout_20250918_162140.png" style="border:1px solid gray" width="600"></center>

## 设计规则

### 差分对的创建与查看

#### 创建

&emsp;&emsp;在嘉立创EDA中，可以选择设计->差分对管理器->左上方加号新增差分对，右侧选择差分对网络。

#### 查看

&emsp;&emsp;在嘉立创EDA中，可以选择左侧工程设计面板->网络->差分对网络查看长度与创建好的差分对。

<center><img src="/storage/images/zh-hans/design-production/pcb-design/four-layer-board-layout/four-layer-board-layout_20250918_162315.png" style="border:1px solid gray" width="600"></center>

### 单端/差分对规则设置

#### 单端线宽设置

&emsp;&emsp;在嘉立创EDA中，可以选择设计->设计规则-导线规则，设置默认导线线宽最小、最大、默认值，也可以点击右上角加号新增导线规则，自行命名然后分配给所需网络；

#### 差分线宽设置

&emsp;&emsp;在嘉立创EDA中，可以选择设计->设计规则->差分对规则，设置差分对线宽、间距、误差值，也可以点击右上角加号新增差分线规则，自行命名然后分配给所需网络,差分对规则仅对差分对有效；

#### 规则设置建议

&emsp;&emsp;上述规则通常来源与阻抗计算后的值，设计值不建议小于4mil（大部分板厂工艺都可以满足），否则生产会加大不良率。

#### 规则应用

&emsp;&emsp;在设计好规则后，可以选择设计->设计规则->网络规则，选择导线，分配单端规则给对应的导线网络；选择差分对，分配差分对规则给对应的差分对网络，选择应用，此时才算生效。

<center><img src="/storage/images/zh-hans/design-production/pcb-design/four-layer-board-layout/four-layer-board-layout_20250918_162538.png" style="border:1px solid gray" width="1000"></center>

<center><img src="/storage/images/zh-hans/design-production/pcb-design/four-layer-board-layout/four-layer-board-layout_20250918_162559.png" style="border:1px solid gray" width="1000"></center>

### 等长调节

#### 介绍

&emsp;&emsp;在高速信号传输中，为保证时序一致，通常会确保同组信号、同差分线信号长度保持在一定误差范围内，否则收发会异常；走线时由于拐角、绕线等因素，正常走线不可能确保满足该误差范围，此时就需要进行等长调节，等长调节通常在最后阶段才处理。

#### 使用

&emsp;&emsp;在嘉立创EDA中，可以选择布线->等长调节->鼠标左键选择需要调节的信号，框选进行调节。等长调节通常适用对内等长，比如单端信号等长或差分对信号正网络/负网络调节。
&emsp;&emsp;在嘉立创EDA中，可以选择布线->差分对等长调->鼠标左键选择需要调节的信号，框选进行调节。差分对调节适用对间等长，比如两两差分对需要保持同一长度。

#### 设置

&emsp;&emsp;在嘉立创EDA中，选择等长调节后，按住键盘Tap键，可设置等长调节参数，包括长度、拐角、约束等信息，这里重点关注约束信息，需要满足一定的规范，否则容易造成信号串扰。

<center><img src="/storage/images/zh-hans/design-production/pcb-design/four-layer-board-layout/four-layer-board-layout_20250918_162750.png" style="border:1px solid gray" width="1000"></center>

## 生产文件输出

&emsp;&emsp;在高速PCB设计完成后，除去基础的PCB制板文件（Gerber文件）、坐标文件、物料清单文件外，还需要对设计进行总结，提供一份阻抗管控文件，方便交付到板厂进行匹配生产。

&emsp;&emsp;通常会列举出一份word文档，包含阻抗值、阻抗线宽/线距、阻抗层、参考层以及阻抗线在PCB上的具体位置图片。

&emsp;&emsp;若项目中过孔值、层叠有调整，或有特殊注意事项，还需要将堆叠表、钻孔表一并放置在PCB设计中，方便工程人员查看。在嘉立创EDA中选择放置->堆叠表/钻孔表放置即可。

<center><img src="/storage/images/zh-hans/design-production/pcb-design/four-layer-board-layout/four-layer-board-layout_20250918_162914.png" style="border:1px solid gray" width="1000"></center>
