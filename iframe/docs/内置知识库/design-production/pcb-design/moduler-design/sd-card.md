# SD-Crad模块

## 布局参考

- 靠近板边摆放，方便插拔使用；
- 靠近主控芯片摆放，尽量缩短信号走线，减少信号衰减和干扰；
- 在电源引脚附近放置滤波电容，遵循先大后小原则，减少电源噪声；
- 上拉电阻靠近SD卡进行摆放连接；
- 在信号线上添加ESD防护器件，靠近信号引脚摆放，不要打孔换层连接，防止静电损坏；

<center>
<img src="/storage/images/zh-hans/design-production/pcb-design/moduler-design/sd-card/sd-card_20250313_105227.png" style="border:1px solid gray" width="1300">
</center>

## 布线参考

- SD卡信号为单端信号，阻抗控制为50Ω；
- 所有信号线需要同层同组连接，保证参考平面完整，避免跨分割区；
- 时钟信号需要做3W处理，在有空间的条件下，尽可能包地处理；
- 所有信号线要做等长处理，以时钟线为目标线，误差控制在300mil以内；

<center>
<img src="/storage/images/zh-hans/design-production/pcb-design/moduler-design/sd-card/sd-card_20250313_112549.png" style="border:1px solid gray" width="1300">
</center>
