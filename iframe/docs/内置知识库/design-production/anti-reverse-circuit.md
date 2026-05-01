# 电源防反接电路

在日常电子设计过程中，经常会使用排针、电池等容易插反的接口进行供电，此时一旦电源接反，会导致短路，通常芯片内部也无法承受反向电流，可能会导致芯片损坏。

## 二极管防反接

&emsp;&emsp;使用一个二极管串联在电路中，当电源正常接入时，二极管导通,当电源反接时，二极管反向截止，整个系统不会有电流经过，但是此时二极管需要承担整个电路的电流，且自身会有压降，输出电压与实际输入电压会有一个二极管压差，建议综合电路负载电流情况选择不同型号的肖特基二极管。

<center>

<img src="/storage/images/zh-hans/design-production/pcb-design/practical-circuit/anti-reverse-circuit/anti-reverse-circuit_20241204_203750.png" style="border:2px solid gray" width="800">
<br/>
<img src="/storage/images/zh-hans/design-production/pcb-design/practical-circuit/anti-reverse-circuit/anti-reverse-circuit_20241204_202749.png" style="border:2px solid gray" width="800">

</center>

## 整流桥防反接

&emsp;&emsp;使用四个二极管或整流桥芯片进行防反接，此时不管电路正常接入还是反向接入，都可以正常工作，但是全桥整流需要承受两个二极管的压降，而且也需要考虑负载电流的大小选择合适的二极管。

<center>

<img src="/storage/images/zh-hans/design-production/pcb-design/practical-circuit/anti-reverse-circuit/anti-reverse-circuit_20241205_103227.png" style="border:2px solid gray" width="800">
<br/>
<img src="/storage/images/zh-hans/design-production/pcb-design/practical-circuit/anti-reverse-circuit/anti-reverse-circuit_20241205_102936.gif" style="border:2px solid gray" width="800">

</center>

## 保险丝+二极管防反接

&emsp;&emsp;使用保险丝+二极管进行防反接，当电源正常接入时，系统正常工作，保险丝自身可能会有一点点压降，此时整个负载电流全部经过保险丝，需要认真考虑后级负载电流大小；当电源反接时，电流经过二极管流会保险丝，此时保险丝自身+二极管的电阻很小，电流会迅速增加熔断保险丝，注意二极管的持续电流要大于保险丝的跳闸电流，此时自恢复保险丝熔断后恢复，电路又可正常工作，二极管无损坏。

<center>

<img src="/storage/images/zh-hans/design-production/pcb-design/practical-circuit/anti-reverse-circuit/anti-reverse-circuit_20241205_105407.png" style="border:2px solid gray" width="800">

<br/>

<img src="/storage/images/zh-hans/design-production/pcb-design/practical-circuit/anti-reverse-circuit/anti-reverse-circuit_20241205_163320.png" style="border:2px solid gray" width="800">

</center>

## Pmos防反接

&emsp;&emsp;使用PMOS进行防反接，当电源正常接入时,电源经过PMOS体二极管进入S级，此时VGS符合导通条件，电路正常工作，当电源反接时，PMOS的VGS不符合导通条件，截止。
<br/>
在使用该电路时，系统电流也是由PMOS承受的，同样需要考虑负载电流的大小选择合适的MOS管，并且不同MOS管的导通条件（VGSth）是不一样的，需要结合实际电压值进行选择和修改。

<center>

<img src="/storage/images/zh-hans/design-production/pcb-design/practical-circuit/anti-reverse-circuit/anti-reverse-circuit_20241205_113737.png" style="border:2px solid gray" width="800">
<br/>
<img src="/storage/images/zh-hans/design-production/pcb-design/practical-circuit/anti-reverse-circuit/anti-reverse-circuit_20241205_114507.gif" style="border:2px solid gray" width="800">

</center>

## Nmos防反接

&emsp;&emsp;使用Nmos进行防反接，当电源正常接入时，电源正极正常流过，同时经过10K分压电阻到达Nmos的G极，在初始状态下，Nmos是不导通的，注意体二极管方向，此时S极是比D（外部电源的GND）高一个二极管压差的，也就是0.7~1V左右，此时Vgs也满足导通条件，电路正常工作，但是就算Nmos完全导通，也有内阻的存在，此时外部电源GND与实际电路GND是不直连的，会有一点压差，也就是负载GND不为0。当电源反接时，Nmos体二极管截止，不符号导通条件。
<br/>
&emsp;&emsp;在使用该电路时，需注意电源电压的大小，mos的Vgs耐压值是很低的，通常是12~20v左右，通常我们会在电压表处，放置一个12V左右的稳压二极管，以防止高压损坏Nmos，同时，当放置稳压二极管后，此时多余电压是由上方10K电阻承担，需要选择功率大一点的电阻。
<br/>
&emsp;&emsp;如果电压、电流不大，推荐还是Pmos防反接电路，Nmos由于内阻低、便宜等条件，通常用于电流、电压较大场合。

<center>

<img src="/storage/images/zh-hans/design-production/practical-circuit/anti-reverse-circuit/anti-reverse-circuit_20250714_193106.png" style="border:2px solid gray" width="800">
<br/>
<img src="/storage/images/zh-hans/design-production/practical-circuit/anti-reverse-circuit/anti-reverse-circuit_20250714_193219.png" style="border:2px solid gray" width="800">
<br/>
<img src="/storage/images/zh-hans/design-production/practical-circuit/anti-reverse-circuit/anti-reverse-circuit_20250714_193315.gif" style="border:2px solid gray" width="800">
</center>
