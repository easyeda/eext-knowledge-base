# 晶振电路

## 布局参考

- 晶振电路布局需要优先考虑，整体紧凑摆放，晶振尽量靠近 IC，负载电容放置于晶振与 IC 之间，以减少时钟信号传输的延迟和干扰；
- 晶振摆放尽量远离板边和接口器件，减少其受外部物理因素干扰的风险，如物理撞击等；
- 晶振需远离干扰源，如电感、大功率驱动器、RF天线等；
- 晶振区域的底层不可放置其余器件，需保证晶振区域的净空；

## 布线参考

- 晶振电路的时钟信号走线越短越好，可以按照类差分走线，晶振的时钟走线不可打过孔走线连接；
- 在晶振走线周围通过GND过孔进行包地，每隔50-100mil间距整齐放置屏蔽地过孔，用以隔离吸收晶振辐射的噪声；
- 晶振区域同层需要净空处理，可以使用禁止铺铜区域进行隔离，晶振本体相邻层最好不要走线，保证地的完整性；

<center><img src="/storage/images/zh-hans/design-production/pcb-design/moduler-design/crystal-oscillator-circuit/crystal-oscillator-circuit_20250116_103250.jpg"  style="border:2px solid gray" width="1300"></center>
