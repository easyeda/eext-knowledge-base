# 为什么Type-c接口要加5.1K电阻下拉

&emsp;&emsp;USB是主从模式的结构，设备与设备之间、主机与主机之间是不能互联的，所有的数据传输都是由主机发起，而设备只能被动的负责应答，在USB-Typec接口中，是没有ID引脚来标识当前是主机或设备的，此时CC引脚就可以充当一个检测作用了。
<br/>
&emsp;&emsp;在主机和设备连接上后，主机的cc引脚检测到设备CC引脚的下拉电阻，表示接入到设备，此时主机可以打开Vbus的FET开关，输出Vbus电源给设备。

<center>
<img src="/storage/images/zh-hans/design-production/pcb-design/knowledge-point/typec-5.1k/typec-5.1k_20250721_113831.png" style="border:2px solid gray" width="600">
<br/>
<img src="/storage/images/zh-hans/design-production/pcb-design/knowledge-point/typec-5.1k/typec-5.1k_20250721_120332.png" style="border:2px solid gray" width="600">
</center>

&emsp;&emsp;事实上，CC引脚的作用远不止于此，在usb协议规范中指出，cc引脚用于连接检测、接口配置与Vconn功能；

<center>
<img src="/storage/images/zh-hans/design-production/pcb-design/knowledge-point/typec-5.1k/typec-5.1k_20250721_114237.png" style="border:2px solid gray" width="800">
</center>

&emsp;&emsp;CC引脚的简要概述中指出，cc引脚主要用于一下目的：

- 检测USB端口的连接，例如源端到接收端的连接；
- 解决电缆方向和扭转连接问题，以建立USB数据总线路由
- 在两个连接端口之间建立数据角色
- 发现并配置Vbus：USB Type-C电流模式或USB Power Delivery
- 配置Vconn
- 发现并配置可选的备用和辅助模式；

&emsp;&emsp;由于USB-Typec接口指出正反插，对于USB2.0标准，主机和设备接口的两组USB_DP/DM信需要各种短接以实现这一功能；在USB3.2超高速或USB4双通道传输方案中，主机和设备需要配置对应的传输通道，需要自行解决通道顺序问题，此时将单个CC引脚和1组TX/RX进行匹配，通过检测cc引脚的方向来实现正反插功能，从而判断使用哪组tx/rx信号进行传输，如果是双通道，也同样可以根据cc引脚判断通道序号，为0/1通道。

<center>
<img src="/storage/images/zh-hans/design-production/pcb-design/knowledge-point/typec-5.1k/typec-5.1k_20250721_120012.png" style="border:2px solid gray" width="1000">
<br/>
<img src="/storage/images/zh-hans/design-production/pcb-design/knowledge-point/typec-5.1k/typec-5.1k_20250721_120125.png" style="border:2px solid gray" width="1000">
</center>

&emsp;&emsp;以上内容均来自usb官网文档，大家可以自行下载浏览：

https://www.usb.org/documents?search=USB+Type-C+Specification+Release&items_per_page=50
