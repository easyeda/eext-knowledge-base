# 两层板设计规范

## 一、两层板设计难点

- 对于两层板的设计，两层板的设计难点在于没有完整的GND参考平面和没完整的电源平面，对于电源和地的处理，在两层板当中尤为重要，其中高密度两层板的布线难度也相对较大，需要在有限的布线空间内完成所有信号的连接，同时还得保证信号的质量和完整性；那么如何去设计两层板，可以根据两层板设计规范去设计。

<center><img src="/storage/images/zh-hans/design-production/pcb-design/knowledge-point/two-layer-board-specification/two-layer-board-specification_20250117_222012.png"  width="500"></center>

## 二、两层板设计规范

### 布局设计

- 布局建议是进行单面布局，这样子可以在设计合理的情况下更好的节省成本而且没有层间信号干扰的问题，这有助于提高信号的稳定性和可靠性。如果不能保证，最起码主要的元器件要和主控芯片放在同一面，合理布局可以方便走线不拥挤，而且信号走线间距保持等距减少线间串扰。

<center><img src="/storage/images/zh-hans/design-production/pcb-design/knowledge-point/two-layer-board-specification/two-layer-board-specification_20250117_222209.png"  width="500"></center>

### 布线设计

- 优先考虑关键信号的布线，确保它们有最短、最直接的路径。
- 顶层尽量去处理大部分的信号线，能直接连接的条件下，就进行网络顶层直连。
- 合理利用顶层和底层的空间进行布线，必要时可以通过打孔来实现层间的连接。
- 对于关键信号可进行包地线处理，以提高关键信号的抗干扰能力。

<center><img src="/storage/images/zh-hans/design-production/pcb-design/knowledge-point/two-layer-board-specification/two-layer-board-specification_20250117_222400.png"  width="800"></center>

### 电源设计

- 两层板的电源布线，建议是在顶层去进行布线，能在顶层处理完成最好，如不能满足，也可以通过打孔走线在地层，要注意避免大面积分割问题，尽量保持底层平面完整。
- 电源线应尽可能宽以满足电源载流，减少电源波动对电路的影响。
- 避免电源线与信号线交叉，电源线和敏感信号线要保持一定的安全间距，必要时候可以适当包地隔离处理，以减少干扰。

<center><img src="/storage/images/zh-hans/design-production/pcb-design/knowledge-point/two-layer-board-specification/two-layer-board-specification_20250117_222716.png"  width="800"></center>

### 地层设计

- 底层一般是用于处理地网络，底层进行地铜全铺，提供一个完整的地参考平面有助于确保信号能够顺畅地回流，减少电磁干扰。

- 注意地平面跨分割免问题，因为分割会破坏回流路径的连续性，导致信号回流时产生不必要的绕行，增加电磁辐射，如不能保证平面跨分割问题，可以在跨分割的区域，使用地孔来连接分割的地层，确保回流路径的连续性。

- 顶层空白区域也可以进行一个铺地铜进行处理，同时打孔将顶层和底层的地网络连接起来，为信号提供一个更直接的回流路径。

<center><img src="/storage/images/zh-hans/design-production/pcb-design/knowledge-point/two-layer-board-specification/two-layer-board-specification_20250117_222849.png"  width="800"></center>

**此文章来源于**[ 京晓电路 ](https://mp.weixin.qq.com/s/uyzbFrvh6ywOcO4kJBnsIg)
