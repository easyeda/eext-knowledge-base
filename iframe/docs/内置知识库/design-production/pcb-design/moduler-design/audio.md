# Audio

- RK809-5 SPK 的 LC 器件靠近 RK809-5 放置。
- RK809-5/RK817-5 的 VCC_SPK_HP 走线大于 50mil。
- SPKP/SPKN 按照差分走线并整组包地，线宽 20mil，尽量缩短走线。
- HP_L/HP_R 左右声道要分别包地，不是差分线，不能靠在一起，挨在一起会降低左右声道的隔离度，建议走线线宽大于 10mil。
- HP_SNS 网络串接电阻必须在耳机座管脚处短接到地，补偿输入，提高左右声道隔离度。
- HP_SNS 做为 HPL/HPR 的伴随地，整组走线并包地，HPL/HPR 线宽 10mil 以上。
- MIC 单端连接时，MIC1/MIC2 单独走线并分别包地。MIC 差分连接时，MICP/MICN 按照差分走线，并整组包地。
- MIC 走线线宽建议 8mil 以上。
- 所有音频信号都请远离 LCD、DRAM 等高速信号线。禁止在高速信号线相邻层走线，相邻层必须为地平面；禁止在高速信号线附近打孔换层；走线不要穿过电感区域；远离 RF 信号和器件。
- 所有音频信号的相邻层不得为电源平面或走线。
- 耳机座/麦克风的 TVS 保护二级管应尽量靠近连接座放置，信号拓扑为：耳机座/麦克风--->TVS--->CPU；出现 ESD 现象时，ESD 电流必须先经过 TVS器件衰减；TVS 器件走线上不要有残桩(Stub)TVS 的地管脚建议尽量增加地过孔，至少保证 2 个 0.4*0.2mm 的过孔，加强静电泄放能力。
- S/PDIF 信号建议全程包地处理，包地的走线间隔 300mil 以内必须有地过孔。

<center><img src="/storage/images/zh-hans/design-production/pcb-design/moduler-design/audio/audio_20251128_202219.png"  style="border:2px solid gray" width="1400"></center>

源自：立创.泰山派硬件手册 V1.0
