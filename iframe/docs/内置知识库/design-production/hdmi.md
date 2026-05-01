# HDMI模块

## 布局参考

- HDMI接口要外形结构要求摆放在板边，方便插拔使用；
- ESD静电保护器件一定要靠近HDMI端子进行摆放，摆放位置优先于阻容；
- 信号线的匹配电阻需要靠近接口并排放置，切勿一前一后；
- 在HDMI芯片的电源引脚附近放置去耦电容，减少电源噪声；
- 整体布局时，HDMI座子尽量靠近RK3566放置，尽量缩短走线。
- HDMITXAVDD0V9/1V8电源去耦电容务必放在对应的电源管脚背面。

<center>
<img src="/storage/images/zh-hans/design-production/pcb-design/moduler-design/hdmi/hdmi_20260119_102625.png" style="border:1px solid gray" width="1300">
</center>

## 布线参考

- 差分对需要控制 PCB 阻抗，差分阻抗为 100Ω ±10%。
- 差分对应严格遵循差分规则走线。例如，必须保持相同的长度、相同的宽度、相同的层和固定的线距，并尽可能保持对称，对内线长延迟控制在 12mi 以内。
- 差分对走线长度必须小于 6inch。
- D0-D2 之间空隙：>=4 倍线宽，有条件建议中间加地线隔离，CLK 和 D0 之间空隙：>=5 倍线宽，有条件建议中间加地线隔离。
- 所有信号的参考层需要为完整的地平面，避免出现连续的过孔阻断信号的回流路径的情况。
- 走线尽量在 top 层，必须要换层时，最多只能打 2 次过孔，并靠近信号过孔放置对称的缝合地孔，缝合地孔和信号过孔中心距不得超过 30mil，走线拐角尽量用弧线或者钝角，不能为直角或锐角。
- HDMI 的 TVS 管应尽量靠近连接座放置，信号拓扑为：HDMI 座--->TVS--->CPU；出现 ESD 现象时，ESD 电流必须先经过 TVS 器件衰减；TVS 器件走线上不要有残桩(Stub)。
- TVS 的地管脚建议尽量增加地过孔，至少保证 2 个过孔，加强静电泄放能力。

<center>
<img src="/storage/images/zh-hans/design-production/pcb-design/moduler-design/hdmi/hdmi_20260119_101827.png" width="1300">
</center>

源自：立创.泰山派硬件手册 V1.0
