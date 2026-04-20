# SIM模块

## 布局参考

- SIM卡靠近板边摆放，方便插拔使用；
- 靠近主控芯片摆放，尽量缩短信号走线，减少信号衰减和干扰；
- 在电源引脚附近放置滤波电容，遵循先大后小原则，减少电源噪声；
- 在SIM卡的DATA引脚上，可以添加电阻上拉到SIM卡电源引脚，以增强DATA线驱动能力；
- 在信号线上添加ESD防护器件，靠近信号引脚摆放，不要打孔换层连接，防止静电损坏；

<center>
   <img src="/storage/images/zh-hans/design-production/pcb-design/moduler-design/sim/sim_20250313_133958.png" style="border:1px solid gray" width="1300">
</center>

## 布线参考

- SIM卡信号走线应尽量走在一起，保持信号一致性；
- SIM卡信号线应远离电源线，RF信号线和其他高频信号线，以减少串扰；
- SIM卡的时钟线需要做包地处理，避免跨平面分割，保证3W规则，减少干扰；

<center>
   <img src="/storage/images/zh-hans/design-production/pcb-design/moduler-design/sim/sim_20250313_145146.png" style="border:1px solid gray" width="1300">
</center>
