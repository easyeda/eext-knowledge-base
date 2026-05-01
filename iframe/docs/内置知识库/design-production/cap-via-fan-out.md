# 电容过孔扇出规范

‌&emsp;&emsp;电容过孔扇出需尽可能使电源的回流路径最短，回流路径最短能够使高频噪声提供到地的阻抗路径最低。电流优先垂直电容方向输入，“U”字型输出，电源回流路径最短。

<center><img src="/storage/images/zh-hans/design-production/pcb-design/knowledge-point/cap-via-fan-out/cap-via-fan-out_20251119_175634.png"  style="border:2px solid gray" width="1400"></center>

‌&emsp;&emsp;如果受到布局布线的影响，电流无法垂直电容方向输入，再选择水平方向输入，其中，“一”字型输出，电源回流路径最长。过孔应就近扇出，电容过孔扇出对电源质量至关重要，需规范扇出。

<center><img src="/storage/images/zh-hans/design-production/pcb-design/knowledge-point/cap-via-fan-out/cap-via-fan-out_20251119_175813.png"  style="border:2px solid gray" width="1400"></center>

‌&emsp;&emsp;这里我们以0805封装的电容来计算，从焊盘中心扇出1mm长度导线到过孔，电容两焊盘中心间距为2mm，计算得出回流路径。按回流路径从短到长排列：①<③<②/④/⑥<⑤，其中，①号“U”字型的回流路径最短最好，推荐优先使用此方式扇出电容过孔。⑤号“一”字型的回流路径最长，不推荐使用此方式扇出电容过孔。

<center><img src="/storage/images/zh-hans/design-production/pcb-design/knowledge-point/cap-via-fan-out/cap-via-fan-out_20251119_180056.png"  style="border:2px solid gray" width="1400"></center>
