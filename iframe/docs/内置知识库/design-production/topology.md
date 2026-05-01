# PCB 常用拓扑结构

‌&emsp;&emsp;在PCB Layout 设计中，拓扑结构是指在电路板上信号流动的方式。通常，拓扑结构涉及到信号如何从一个组件传输到另一个组件（如：芯片与芯片的连接方式）。良好的拓扑结构对信号完整性、电源完整性以及电路性能等至关重要，在高速高频pcb设计中更为关键。

## 1 点到点拓扑

<center><img src="/storage/images/zh-hans/design-production/pcb-design/knowledge-point/topology/topology_20250117_165507.jpg"  width="250"></center>

- 定义：点对点拓扑就是指在PCB上，该总线只在这两个组件（如：芯片与芯片）之间连接，即一对一的拓扑。

- 特点：结构比较简单，易实现阻抗匹配，只要在驱动端（源端）或接收端（终端）进行适当的阻抗匹配，就可以得到较好的信号完整性。

- 应用：常用于高速双向传输信号线，常在源端加串行匹配电阻来防止源端的二次反射。

## 2 菊花链拓扑

<center><img src="/storage/images/zh-hans/design-production/pcb-design/knowledge-point/topology/topology_20250117_165525.jpg"  width="600"></center>

- 定义：菊花链拓扑就是指在PCB上，信号从驱动端依次连接到多个接收端。

- 特点：主要优势是支路走线短，占用的布线空间较小，可用单一电阻匹配终结，避免分支信号对主干信号的反射干扰。

- 应用：常用于多负载的总线系统中，并在最末端预留端接电阻电路终结。

### Fly-by拓扑

<center><img src="/storage/images/zh-hans/design-production/pcb-design/knowledge-point/topology/topology_20250117_165551.jpg"  width="800"></center>

- 定义：Fly-by拓扑是一种特殊的菊花链拓扑结构。

- 特点：在菊花链拓扑中的支路布线长度非常短，几乎为零，可以有效减少了信号反射，提高了信号的完整性，减少了信号完整性（SI）问题。

- 应用：常用于DDR内存设计中，Fly-by拓扑能够更好地保证信号的完整性，适合高速信号的传输。

## 3 星型拓扑

<center><img src="/storage/images/zh-hans/design-production/pcb-design/knowledge-point/topology/topology_20250117_165612.jpg"  width="300"></center>

- 定义：星型拓扑是指在PCB上，一个信号驱动器驱动多个信号接收器，并要求多个信号接收器同时接收信号时，每个分支的接收端负载和走线长度尽量保持一致，终端电阻的阻值应和连线的特征阻抗相匹配。

- 特点：星型拓扑设计有助于优化信号传输路径，可以有效避免信号在多个负载上的不同步问题，减少信号传输过程中的损耗和延迟，提高电路性能和数据传输速度。

- 应用：常用于多负载，对时序要求高的系统中，常在每条分支上加上终端电阻匹配阻抗。

## 4 远端簇型拓扑（远端分支）

<center><img src="/storage/images/zh-hans/design-production/pcb-design/knowledge-point/topology/topology_20250117_165631.jpg"  width="600"></center>

- 定义：远端簇拓扑结构实质上可以看做是星型拓扑结构的变种，特点是D到中心点的长度要远远长于各个R到中心连接点的长度，各个R到中心连接点的距离要尽量等长，匹配电阻放置在D附近。

- 特点：驱动器与负载间的路径相对简单，信号反射和串扰较少，接收器集中在簇中，分支线长度短，延迟小。

- 应用：常用于DDR内存总线、时钟信号等对时序要求严格的系统中，通常只需要簇末端设计端接匹配电阻，有效减少反射。

### T型拓扑

<center><img src="/storage/images/zh-hans/design-production/pcb-design/knowledge-point/topology/topology_20250117_165649.jpg"  width="600"></center>

- 定义：T型拓扑又称为树型拓扑，是一种对称型的远端簇型拓扑结构。

- 特点：T型拓扑布局清晰，布线简单，在高速信号下，T型拓扑的分支节点容易引起信号反射。

- 应用：常用于低速信号或非关键信号的分配。
