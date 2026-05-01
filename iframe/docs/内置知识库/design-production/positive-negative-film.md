# 了解正负片

&emsp;&emsp;在PCB设计中，正片（Positive Film）和负片（Negative Film）是两种不同的图层表示方式，主要用于描述铜层的分布。在嘉立创EDA(专业版)的图层管理器中，可对图层的类型进行设置，信号层为正片，内电层为负片。

<center>
<img src="/storage/images/zh-hans/design-production/pcb-design/knowledge-point/positive-negative-film/positive-negative-film_20250313_204447.png" style="border:2px solid gray" width="1300">
</center>

## 1 正片层

&emsp;&emsp;在PCB设计中，正片层是常用于走线的信号层，默认是无铜的，导线就是铜线，空白的区域是无铜的，可以使用铺铜或填充进行大区域连接网络。

&emsp;&emsp;正片常用于信号层的设计，因为信号走线需要精确控制，常用于简单的单面板或双面板。

<center>
<img src="/storage/images/zh-hans/design-production/pcb-design/knowledge-point/positive-negative-film/positive-negative-film_20250313_203618.png" style="border:2px solid gray" width="1300">
</center>

## 2 负片层

&emsp;&emsp;负片层与正片层正好相反，默认就是铺有铜的，常用作内电层，在设置为负片层时，使用折线（无网络特性的线）进行分割，线宽不宜太细，建议10mil以上，分割线太细可能会产生网络短路风险，使用线条画出一个闭合的区域，可对其重新设置分配网络。

&emsp;&emsp;负片设计常用于电源层和地平面，因为这些层通常是大面积铜层，负片可以简化设计，在多层板和高密度设计中，负片可以减少数据量，提高设计效率。

<center>
<img src="/storage/images/zh-hans/design-production/pcb-design/knowledge-point/positive-negative-film/positive-negative-film_20250313_203145.png" style="border:2px solid gray" width="1300">
</center>

&emsp;&emsp;总而言之，除了电源和地网络，可以使用负片层，其他都建议使用正片层设计。
