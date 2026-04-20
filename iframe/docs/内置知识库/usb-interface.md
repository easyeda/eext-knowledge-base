# USB 接口

## 布局参考

- USB接口应该靠近板边或按照结构定位摆放，方便插拔；
- USB输入接口和输出接口分开放置，便于分区和使用；
- 端接匹配电阻、ESD、共模电感、阻容器件靠近USB接口摆放；
- USB接口远离RF天线、摄像头等高电磁辐射EMI源摆放；
- 在布局时，尽量使差分线路最短，以缩短差分线距离；

<center><img src="/storage/images/zh-hans/design-production/pcb-design/moduler-design/usb-interface/usb-interface_20250120_120359.jpg"  width="1300"></center>

## 布线参考

- USB走线优先权高于其它器件和信号，优先考虑对高速USB差分（D+/D-、RX/TX）的布线；
- USB要走差分，阻抗控制为90Ω，并包地处理，包地线与差分线距离应大于20mil，每隔一段距离，打上一个回流地过孔，总长度最好不要超过1800mil，尽量缩短走线长度；
- USB的差分对需要做等长处理，长度一旦相差太多，将会影响时序偏差，引起共模干扰，降低信号质量，USB组内等长误差建议控制在±5mil以内；
- 差分对尽量少换层打过孔，过孔会造成阻抗改变和信号反射问题，若无法避免使用过孔，需要在打孔换层处加一对回流地过孔，用于信号回流换层，过孔建议不超过2个；
- 如果使用了外部终端电阻匹配阻抗时，请确保端接匹配电阻与主控制器信号输出引脚之间的距离小于200mil，以便更好地控制阻抗，避免信号反射；
- USB差分信号布线时，应远离板边或铺地边缘，至少保证90mil以上距离；远离电源网络、大电流信号、DDR、HDMI等高速信号，保证至少50mil的距离，以减小串扰；

<center><img src="/storage/images/zh-hans/design-production/pcb-design/moduler-design/usb-interface/usb-interface_20250120_120418.jpg"  width="1300"></center>
