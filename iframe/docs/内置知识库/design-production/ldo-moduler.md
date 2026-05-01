# LDO模块

## 布局参考

&emsp;&emsp;LDO虽然电路结构简单，但其效率不高，工作时输入输出的电压差都被转换成热能消耗了。所以在进行LDO布局时需考虑散热问题，部分芯片还可添加散热片辅助散热。输入/输出电容尽量靠近输入/输出引脚摆放，滤波电容从大到小依次摆放，LDO两边的电容数量需要保持一致，这样才能保证电源的输入/输出端流入地的电流平衡，布局要点如下：

-   按照电源信号的输入/输出路径，布局时按一字型或者L型摆放；
-   电容按先大后小顺序摆放，就近输入/输出管脚；
-   输入/输出电容GND引脚尽量朝一个方向，保持GND方向一致，减少回流路径。

<center>
<img src="/storage/images/zh-hans/design-production/pcb-design/layout-guidance/layout-guidance_20241108_180132.png" style="border:2px solid gray" width="1100">
</center>

## 走线参考

&emsp;&emsp;LDO走线时由于电路连接比较简单，走线时沿着信号方向引出即可，一般只需要考虑线宽是否能够承载整个系统的电流即可。在单面板设计时保持GND信号的完整性，输入输出部分可直接用铜皮填充；当使用双面板以及多层板设计时，需在GND焊盘附近整齐放置一些GND过孔。注意事项如下：

-   电源输入输出信号可直接全填充或粗导线连接，确保铜皮宽度能够过系统最大电流；
-   走线尽可能直，避免不必要拐弯，必须拐弯时走钝角或圆弧；
-   走线时根据信号流向，输入信号先经过电容再到芯片，输出走线也需先过电容再输出；
-   双多层板设计时在加一些整齐统一的过孔保证各层间GND的连接；
-   走线后在板子上可根据电路需要添加必要丝印信息提示，避免焊错或接线错误。

<center>
<img src="/storage/images/zh-hans/design-production/pcb-design/routing-guidance/routing-guidance_20241108_182335.png" style="border:2px solid gray" width="1100">
</center>
