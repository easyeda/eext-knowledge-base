# MIPI接口

## MIPI_CSI

- 整体布局时，MIPI CSI 设备尽量靠近 RK3566 放置，尽量缩短走线。
- MIPI_CSI_RX_AVDD_0V9/1V8 电源的去耦电容务必放在对应的电源管脚背面。
- MIPI CSI 差分对需要控制 PCB 阻抗，差分阻抗为 100Ω ±10%。
- MIPI CSI 差分对间线长延迟控制在 36mil 以内。
- MIPI CSI 差分对走线长度必须小于 6inch。
- 尽量减少换层过孔，必须要换层时，最多只能打 4 次过孔，并靠近信号过孔放置对称的缝合地孔，缝合地孔和信号过孔中心距不得超过 30mil。
- 差分对之间空隙：>=3 倍线宽，有条件建议中间能有地线隔离，差分对和其它信号之间空隙：>=3 倍线宽，有条件建议中间能有地线隔离。
- MIPI CSI 差分对的参考层需要为完整的地平面，避免出现连续的过孔阻断信号的回流路径的情况。
- 走线拐角尽量用弧线或者钝角，不能为直角或锐角。

<center>
<img src="/storage/images/zh-hans/design-production/pcb-design/moduler-design/mipi/mipi_20250728_143839.png"  width="1300">
</center>

<center>MIPI_CSI 电路</center>

## MIPI_DSI

- 整体布局时，MIPI DSI/LVDS 设备尽量靠近 RK3566 放置，尽量缩短走线。
- MIPI_DSI_TX0/LVDS_TX0_AVDD_0V9/1V8 电源的去耦电容务必放在对应的电源管脚背面。
- MIPI_DSI_TX1_AVDD_0V9/1V8 电源的去耦电容务必放在对应的电源管脚背面。
- MIPI 差分对需要控制 PCB 阻抗，差分阻抗为 100Ω ±10%。
- MIPI 差分对应严格遵循差分规则走线。例如，必须保持相同的长度、相同的宽度、相同的层和固定的线距，并尽可能保持对称，差分对内线长延迟控制在 12mil 以内。
- MIPI 差分对间线长延迟控制在 36mil 以内。
- MIPI 差分对走线长度必须小于 6inch。
- MIPI 差分对尽量减少换层过孔，必须要换层时，不得超过 4 个过孔，并靠近信号过孔放置对称的缝合地孔，缝合地孔和信号过孔中心距不得超过 30mil。
- MIPI 差分对之间空隙：>=3 倍线宽，有条件建议中间能有地线隔离，MIPI差分对和其它信号之间空隙：>=3 倍线宽，有条件建议中间能有地线隔离。
- MIPI 差分对的参考层需要为完整的地平面，避免出现连续的过孔阻断信号的回流路径的情况。
- 走线拐角尽量用弧线或者钝角，不能为直角或锐角。

<center>
<img src="/storage/images/zh-hans/design-production/pcb-design/moduler-design/mipi/mipi_20250728_144822.png"  width="1300">
</center>

<center>MIPI_DSI 电路</center>

源自：立创.泰山派硬件手册 V1.0
