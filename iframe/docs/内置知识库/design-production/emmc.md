# EMMC

- 整体布局时，eMMC/Nand/SPI Flash 尽量靠近 RK3566 放置，尽量缩短走线。
- 所有 eMMC 信号都要控制 PCB 阻抗，单端信号阻抗为 50Ω ±10%。
- eMMC clkout/Data Strobe 和 data/cmd，之间的延迟必须控制在 120mil 以内。
- eMMC 所有信号走线长度必须小于 4inch，换层时，不得超过 4 个过孔，并靠近信号过孔放置对称的缝合地孔。
- eMMC clkout 和 Data Strobe 有条件的情况下可全程包地处理，包地的走线间隔 300mil 以内必须有地过孔。
- eMMC 所有信号的参考层需要为完整的地平面，避免出现连续的过孔阻断信号的回流路径的情况。
- eMMC data/cmd 信号间的空隙：>=2 倍线宽和其它信号间的空隙：>=3 倍线宽，建议中间能有地线隔离。
- eMMC_CLKOUT 的 22ohm 串联匹配电阻靠近 CPU 端（源端），CPU 管脚和电阻之间走线必须控制在 300mil 以内。
- eMMC_DATA_STROBE 的 0ohm 串联匹配电阻靠近 eMMC 颗粒端，eMMC 管脚和电阻之间走线必须控制在 300mil 以内。
- eMMC 电源线宽度应满足 VCCIO2 电源域及相应颗粒的电流需求，建议 VCCIO2 电源域走线 12mil 以上，颗粒的电源走线 25mil 以上。
- eMMC 以及 RK3566 VCCIO2 的去耦电容务必放在对应的电源管脚背面。

<center><img src="/storage/images/zh-hans/design-production/pcb-design/moduler-design/emmc/emmc_20251128_180121.png"  style="border:2px solid gray" width="1400"></center>

源自：立创.泰山派硬件手册 V1.0
