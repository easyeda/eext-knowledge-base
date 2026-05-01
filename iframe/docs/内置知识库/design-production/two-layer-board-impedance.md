# 两层板如何控制阻抗

&emsp;&emsp;在 PCB 设计当中，两层板控阻抗是一个具有难度的问题，因为和多层板去相比，两层板没有一个专门的参考平面层构成地返回路径，那么两层板应该如何去控制阻抗？以下是关键的控制方法和控制阻抗验证：

## 一、共面阻抗法（包地法）

- 设计方式：由于两层板没有专门的参考平面，因此需要人为地构造一个电流返回路径，即共面阻抗。这通常通过“包地”的方式实现，即在信号线的周围加上地线，以形成共面结构。

<center><img src="/storage/images/zh-hans/design-production/pcb-design/knowledge-point/two-layer-board-impedance/two-layer-board-impedance_20250120_120528.jpg"  width="600"></center>

- 走线宽度：走线宽度对阻抗有直接影响。在两层板上，为了获得所需的阻抗值，可能需要调整走线的宽度。一般来说，走线越宽，阻抗越小；走线越窄，阻抗越大。但需要注意的是，走线宽度过窄可能会导致加工难度增加和可靠性降低。

<center><img src="/storage/images/zh-hans/design-production/pcb-design/knowledge-point/two-layer-board-impedance/two-layer-board-impedance_20250120_120543.jpg"  width="600"></center>

- 包地间距：包地间距是指信号线与地线之间的距离。这个距离对阻抗也有重要影响。包地间距越小，分布电容越小，阻抗越大。因此，在设计时需要仔细调整包地间距以获得所需的阻抗值。

- 保持连贯性：为了保证阻抗的均匀性，包地应该保持连贯，不应出现断裂或不规则的情况。这有助于减少信号的反射和失真。

## 二、阻抗控制和验证

- 获取材料参数：与 PCB 厂家合作，获取实际使用的电路板材料的详细参数。这些参数对于阻抗计算至关重要，因为它们直接影响阻抗值的计算结果。

<center><img src="/storage/images/zh-hans/design-production/pcb-design/knowledge-point/two-layer-board-impedance/two-layer-board-impedance_20250120_120559.jpg"  width="1300"></center>

- 生产工艺咨询：了解厂家的生产工艺和限制，以便在设计时考虑到这些因素。例如，某些生产工艺可能会对阻抗值产生影响，需要在设计时进行补偿或调整。

- 阻抗测量与验证：在生产前，可以要求厂家进行阻抗测量，以确保设计的阻抗值与实际生产的电路板相符。这有助于及时发现并解决问题，提高电路板的可靠性和性能。

**此文章来源于**[ 京晓电路 ](https://mp.weixin.qq.com/s/SUPKD7fOGtarrF_K4oQ27Q)
