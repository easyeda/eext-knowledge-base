# LPDDR4/4X

## 布线参考

- LPDDR4/4x DQ 和 DQS 之间与 DM 和 DQS 之间等长可以不严格控制，建议控制在 600mil 以内，但确保 DQ 走线尽可能短。
- LPDDR4/4x DQSP/N 之间等长需要控制在 12mil 以内。
- LPDDR4/4x CLKP/N 之间等长需要控制在 12mil 以内。
- LPDDR4/4x DQS 和 CLK 之间等长需要控制在 1200mil 以内。
- LPDDR4/4x DQS 有条件的情况下可全程包地处理，包地的走线间隔 200mil以内必须有地过孔，LPDDR4/4x DQ 组内的信号间的空隙：>=2 倍线宽，LPDDR4/4x DQ 和 DM 信号间的空隙：>=2 倍线宽。
- LPDDR4/4x 的 CA/CMD 信号和 CLK 之间的等长可以不严格控制，建议控制在500mil 以内，但确保走线尽可能短。
- LPDDR4/4x CLK 有条件的情况下可全程包地处理，包地的走线间隔 200mil以内必须有地过孔，LPDDR4/4x CA/CMD 之间的空隙：>=2 倍线宽。
- DDR 信号走线不得走在参考平面边缘或 PCB 板边，否则会对阻抗产生很大影响，确保信号走线和参考平面边缘大于 40mil。
- 优化好换层过孔的位置和间距，不要大面积破坏电源层和地层的铺铜，如果铺铜有被过孔分割了，必须手工通用走线再连接上。
- VCC_DDR 电源平面保持完整，不要在平面内走线。

<center>
<img src="/storage/images/zh-hans/design-production/pcb-design/moduler-design/lpddr4/lpddr4_20250728_135053.png"  width="1300">
</center>

<center>LPDDR4/4X 电路顶层</center>

<center>
<img src="/storage/images/zh-hans/design-production/pcb-design/moduler-design/lpddr4/lpddr4_20250728_135232.png"  width="1300">
</center>

<center>LPDDR4/4X 电路内层</center>

<center>
<img src="/storage/images/zh-hans/design-production/pcb-design/moduler-design/lpddr4/lpddr4_20250728_135321.png"  width="1300">
</center>

<center>LPDDR4/4X 电路内层</center>

源自：立创.泰山派硬件手册 V1.0
