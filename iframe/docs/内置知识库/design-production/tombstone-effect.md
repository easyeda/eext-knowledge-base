# PCB设计怎么避免元件出现“立碑现象”

‌&emsp;&emsp;立碑现象（也称为“曼哈顿效应”、“墓碑效应”），指表面贴装元器件在回流焊过程中因两端受力失衡导致焊端直立的现象，该现象主要发生于片式元件（如电阻、电容）焊接过程，表现为元件一端脱离焊盘垂直立起，甚至整个元件直立起来。其根本原因是元件两端的焊点在回流焊过程中，不同时、不均匀地熔化和凝固，导致作用于元件两端的表面张力不平衡。

<center><img src="/storage/images/zh-hans/design-production/pcb-design/knowledge-point/tombstone-effect/tombstone-effect_20251117_183252.png"  style="border:2px solid gray" width="400"></center>

‌&emsp;&emsp;PCB设计在预防立碑现象中起着至关重要的作用。

‌&emsp;&emsp;以下从PCB设计角度可以采取的措施：

‌&emsp;&emsp;①在设计封装焊盘时，确保元件两个焊盘的形状、尺寸完全一致对称。焊盘尺寸应严格按照元件数据手册进行设计。

<center><img src="/storage/images/zh-hans/design-production/pcb-design/knowledge-point/tombstone-effect/tombstone-effect_20251117_193800.png"  style="border:2px solid gray" width="400"></center>

‌&emsp;&emsp; ②走线对称性，连接到同一元件两个焊盘的导线，应尽量保持相同的宽度、长度和铜箔面积。

<center><img src="/storage/images/zh-hans/design-production/pcb-design/knowledge-point/tombstone-effect/tombstone-effect_20251118_192853.png"  style="border:2px solid gray" width="400"></center>

‌&emsp;&emsp; ③焊盘避免一侧填充连接，一次采用发散方式铺铜连接。在使用铺铜连接焊盘时，建议焊盘两边铺铜连接保持一致。若有一侧导线连接，另一侧铺铜连接，建议采用发散梅花连接方式，避免直连焊盘。

<center><img src="/storage/images/zh-hans/design-production/pcb-design/knowledge-point/tombstone-effect/tombstone-effect_20251118_200001.png"  style="border:2px solid gray" width="400"></center>

<center><img src="/storage/images/zh-hans/design-production/pcb-design/knowledge-point/tombstone-effect/tombstone-effect_20251118_193849.png"  style="border:2px solid gray" width="400"></center>
