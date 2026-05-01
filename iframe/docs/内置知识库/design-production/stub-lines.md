# 什么是Stub线

‌&emsp;&emsp;Stub线‌是指在设计PCB（Printed Circuit Board，印刷电路板）时，信号没有打算经过的路径或多余的线头，通常被称为线头或歪线。这些线头可能是由于设计过程中的疏忽或特殊设计需求而产生的‌。‌

<center><img src="/storage/images/zh-hans/design-production/pcb-design/knowledge-point/stub-lines/stub-lines_20250115_193555.jpg"  width="600"></center>

&emsp;&emsp;Stub线通常被视为不理想的设计，一般是不允许出现的，多余的线头会产生天线辐射效应，也会引起信号反射，最终出现信号完整性问题。

## Stub线的产生原因

-   断头线：在PCB布线过程中，可能会不小心留下多余的布线线头，这些线头通常被称为短桩线或残桩线‌。

<center><img src="/storage/images/zh-hans/design-production/pcb-design/knowledge-point/stub-lines/stub-lines_20250115_193621.jpg"  width="600"></center>

-   测试点的添加：在添加测试点时，为保证测试点的间距，不得不多拉一根线出来。

<center><img src="/storage/images/zh-hans/design-production/pcb-design/knowledge-point/stub-lines/stub-lines_20250115_193643.jpg"  width="600"></center>

-   多余走线：在PCB设计中可能存在多余的走线，存在多余回路，仍然存在于PCB上‌。

<center><img src="/storage/images/zh-hans/design-production/pcb-design/knowledge-point/stub-lines/stub-lines_20250115_193702.jpg"  width="600"></center>

-   走线拓扑上的分支：在走线拓扑中，信号可能会分叉到不同的路径，这些分支也会形成Stub线‌。

<center><img src="/storage/images/zh-hans/design-production/pcb-design/knowledge-point/stub-lines/stub-lines_20250115_193722.jpg"  width="600"></center>

## Stub线的影响

-   天线辐射效应：多余的Stub线头会产生天线辐射效应，产生不必要的辐射，从而干扰周围信号或电路。

-   ‌信号反射‌：多余的Stub线头会导致信号反射，影响信号的完整性。反射的信号会在Stub之间来回反射，导致信号质量下降。

-   信号衰减：Stub会增加传输线的总长度，从而增加了信号的传输路径，导致信号的衰减。这会降低信号的强度和清晰度，使得接收端难以准确解析信号。

-   模式耦合：Stub可能会导致模式耦合，即在PCB中的信号线之间相互影响，导致信号干扰和串扰。

-   容性效应‌：Stub线的存在会增加线路的电容，导致阻抗降低，影响信号的传输速度和稳定性。

-   频率谐振：当Stub线长度接近信号波长的1/4时，影响最为显著，这会导致不需要的频率谐振，引发较为严重的信号完整性（SI）问题。

## Stub线的解决方法

-   使用EDA软件检查并清除不必要的断线头Stub。
-   避免在高速信号线上增加非必要的测试点或连接点，以降低Stub线产生的可能性。普通信号添加测试点，需尽量确保Stub的长度尽可能短，以减少信号传输的影响。
-   合理规划信号路径，尽量避免不必要的分支和延伸，优化走线，检查并清除多余走线。
-   优化上下拉电阻，匹配电阻等形成的stub，通过布局布线优化解决。
