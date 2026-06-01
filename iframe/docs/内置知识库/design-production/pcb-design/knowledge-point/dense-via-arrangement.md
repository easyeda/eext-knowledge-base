# PCB设计中密集过孔排列

‌&emsp;&emsp;PCB设计中密集过孔的排列方式不仅影响布线的通过率，还直接关系到信号完整性、电源完整性和制造工艺等。

‌&emsp;&emsp;一整排过孔整齐放置，看起来非常规整美观，但对平面层分割严重，这是最大的缺点。整齐的排列会在电源和地平面上形成一条条“沟壑”，严重破坏参考平面的完整性，导致信号回流路径不顺畅，增加电源分布网络的阻抗，容易引起信号完整性和电源完整性问题。信号走线在其他层上也都被阻碍了，只能绕开这堵过孔墙走线，在高速板上是非常致命的，强烈不推荐使用这种密集过孔排列。

<center><img src="/storage/images/zh-hans/design-production/pcb-design/knowledge-point/dense-via-arrangement/dense-via-arrangement_20251119_114058.png"  style="border:2px solid gray" width="800"></center>

<center><img src="/storage/images/zh-hans/design-production/pcb-design/knowledge-point/dense-via-arrangement/dense-via-arrangement_20251119_142753.png"  style="border:2px solid gray" width="800"></center>  


‌&emsp;&emsp;两排过孔拉开间距交错排列，要求两个过孔之间，要保证至少能够穿过一根导线。这种密集过孔排列方式，过孔之间可以创造出更多、更灵活的布线空间，布线通过率更高。在多层板中，也能够穿出更多的导线，其他层也不会有一整条的过孔墙，信号和电源完整性也会比整排过孔排列放置的好，推荐使用这种密集过孔排列。

<center><img src="/storage/images/zh-hans/design-production/pcb-design/knowledge-point/dense-via-arrangement/dense-via-arrangement_20251119_114248.png"  style="border:2px solid gray" width="800"></center>  

<center><img src="/storage/images/zh-hans/design-production/pcb-design/knowledge-point/dense-via-arrangement/dense-via-arrangement_20251119_142545.png"  style="border:2px solid gray" width="800"></center>  
