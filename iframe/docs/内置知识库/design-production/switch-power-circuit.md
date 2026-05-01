# 电源切换电路

&emsp;&emsp;当一个项目中同时有电池（3.7V~4.2V）与供电接口（5V）时，同时接入会有电源倒灌的风险（5V直接给电池充电）。一般会在项目中加入一个电源切换电路，当供电接口没有接入时，电池给系统供电，当供电接口接入时，电池不再供电。

<br/>
使用二极管、Pmos、电阻组成电源切换电路，当供电接口接入时，VGSth不满足导通条件，且5V电压比电池电压高，电池不会输出；当供电接口断开时，此时电池电压经过体二极管，VGSth满足导通条件，mos管导通，由电池给负载供电。

<br/>
<br/>
需要注意的是，Pmos的VGSth不能太高，否则电池电压无法饱和导通，虽然也能使用，此时mos管会发热严重可能导致烧坏。另外该电源切换电路若电池电压高于输入电压则无法使用，需要注意。

<center>

<img src="/storage/images/zh-hans/design-production/pcb-design/practical-circuit/switch-power-circuit/switch-power-circuit_20241205_160723.png" style="border:2px solid gray" width="800">
<br/>
<img src="/storage/images/zh-hans/design-production/pcb-design/practical-circuit/switch-power-circuit/switch-power-circuit_20241205_162756.gif" style="border:2px solid gray" width="800">
<br/>
<img src="/storage/images/zh-hans/design-production/pcb-design/practical-circuit/switch-power-circuit/switch-power-circuit_20241205_162937.gif" style="border:2px solid gray" width="800">

</center>
