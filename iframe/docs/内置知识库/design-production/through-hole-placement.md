# PCB 电源过孔放置

‌&emsp;&emsp;在PCB设计中，常遇到需要在电源线上打过孔切层的情况，此时需要注意过孔的数量/孔径等等对实际负载电流的影响；假设电源线宽20mil，理论是可以承载1A左右的电流，但是在走线时有过孔切层，过孔孔径24/12，此时过孔处线宽是小于20mil的。

<center><img src="/storage/images/zh-hans/design-production/pcb-design/knowledge-point/through-hole-placement/through-hole-placement_20251117_113238.png"  style="border:2px solid gray" width="600"></center>

‌&emsp;&emsp;在进行电源走线时，若水平方向导线路径为主路径，过孔的位置应该稍作调整，保证主路径线宽不受影响；

<center><img src="/storage/images/zh-hans/design-production/pcb-design/knowledge-point/through-hole-placement/through-hole-placement_20251117_113943.png"  style="border:2px solid gray" width="600"></center>

‌&emsp;&emsp;当主路径电源线需要过孔切层时，若在同一条线上水平放置两个过孔，此时过孔处等效电源宽度仍是8mil；且前一个过孔与后一个过孔，在空间上构成一个回环，容易产生电磁噪声；

<center><img src="/storage/images/zh-hans/design-production/pcb-design/knowledge-point/through-hole-placement/through-hole-placement_20251117_114339.png"  style="border:2px solid gray" width="600"></center>

‌&emsp;&emsp;在主路径电源线过孔切层时，在竖直方向放置两个过孔，通过泪滴/导线过渡，此时导线宽度大于20mil，且不构成回环，电源顺畅符合载流；
<center><img src="/storage/images/zh-hans/design-production/pcb-design/knowledge-point/through-hole-placement/through-hole-placement_20251117_114904.png"  style="border:2px solid gray" width="600"></center>

‌&emsp;&emsp;当载流较大，需要多个过孔才能满足载流时，通常使用大面积填充区域包围，简单便捷，需注意填充区域不可过小甚至适当过大，保证过孔处铜皮也满足载流需求。

<center><img src="/storage/images/zh-hans/design-production/pcb-design/knowledge-point/through-hole-placement/through-hole-placement_20251117_115411.png"  style="border:2px solid gray" width="600"></center>
