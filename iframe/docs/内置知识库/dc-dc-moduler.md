# DC-DC模块

## 布局参考

<center>
<img src="/storage/images/zh-hans/design-production/pcb-design/layout-guidance/layout-guidance_20241108_175619.png" style="border:2px solid gray" width="1100">
</center>

&emsp;&emsp;**PCB的良好布局对DCDC电源非常至关重要，他能直接影响到产品的稳定性和转换的效果。总结规则如下：**

-   旁路去耦电容靠近输入/输出端摆放（如图4-15）
-   从数据手册中看出PH引脚是电源IC的开关节点，那么电感和环流二极管应尽量靠近PH引脚摆放，尽可能的缩小PCB的导体面积，防止电容过度耦合和减小电流环路面积（如图4-16所示）
-   在电源整体布局时，尽量横平竖直的摆放，不要将器件摆放的过于杂乱，避免增加电源路径（如图4-17所示）
-   DC-DC电源芯片在工作时会产生一些热量，所以布局时，应提前注意是否有对热源敏感的器件，避免影响到其他器件的工作（如图4-19所示）
-   遵循以上布局的规则的同时也要考虑好是否方便焊接以及后续拆卸维护，在不影响芯片工作的状态下，布局可以稍微宽松一点

<center>
<img src="/storage/images/zh-hans/design-production/pcb-design/layout-guidance/layout-guidance_20241108_175756.png" style="border:2px solid gray" width="1100">
<br/>
<img src="/storage/images/zh-hans/design-production/pcb-design/layout-guidance/layout-guidance_20241108_175835.png" style="border:2px solid gray" width="1100">
<br/>
<img src="/storage/images/zh-hans/design-production/pcb-design/layout-guidance/layout-guidance_20241108_175908.png" style="border:2px solid gray" width="1100">
</center>

## 走线参考

&emsp;&emsp; DC-DC模块常用于大电流使用，且走线对其效果影响较大，注意事项如下：

1. 输入和输出的电源走线一定要计算好走线宽度，大电流/电压可以使用铺铜方式或者全填充 方式进行连接；
   <br/>
2. 所有的走线尽可能的短和直，减少电源路径

<center>
<img src="/storage/images/zh-hans/design-production/pcb-design/routing-guidance/routing-guidance_20241108_182612.png" style="border:2px solid gray" width="800">
</center>

3. GND焊盘使用铺铜或全连接连接，输入输出GND尽可能位于一块铜皮上，同时在底层铺铜（注意避开电感区域），在GND焊盘处打上过孔进行连通，缩短电源的回流路径；

<center>
<img src="/storage/images/zh-hans/design-production/pcb-design/routing-guidance/routing-guidance_20241108_182745.png" style="border:2px solid gray" width="800">
</center>

4. DC-DC反馈走线不能直接走在电感、二极管、大电容、IC芯片散热焊盘下面，也不能被大电流环包围，反馈线不是电源走线，不需要加粗，正常信号线宽度（10mil/15mil）即可）；

<center>
<img src="/storage/images/zh-hans/design-production/pcb-design/routing-guidance/routing-guidance_20241108_182841.png" style="border:2px solid gray" width="800">
</center>

5. 如果芯片下方有热焊盘，则需要使用多个过孔连接到底层，增强散热性

<center>
<img src="/storage/images/zh-hans/design-production/pcb-design/routing-guidance/routing-guidance_20241108_182917.png" style="border:2px solid gray" width="800">
</center>

6. 电感器件底部尽量不走线，避免电感产生的电磁信号影响到信号线的传输；
