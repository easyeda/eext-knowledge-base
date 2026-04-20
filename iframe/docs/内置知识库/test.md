# 十一、测试

&emsp;&emsp;测试主要使用飞针机和复合模具专用机两种方法进行，对PCB的电性能即开短路进行裸板测试，以满足客户要求。图11-1所示为嘉立创的测试车间。

<center>
<img src="/storage/images/zh-hans/design-production/pcb-production/process/test/test_20250526_101616.png"  width="1000">
</center>
<center>图11-1 嘉立创的测试车间</center>

## 11.1 飞针测试

&emsp;&emsp;针对样板，嘉立创的AOI和飞针都是免费全测。AOI+飞针测试，基本上可以从根本上解决线路品质不良的问题。
<br/>
&emsp;&emsp;我们自己测试PCB线路的时候，会把万用表打到通断档，然后使用红黑表笔放到线路的两端，听声音检测电路板上的某条线是否导通。飞针测试，原理和这个类似，只不过，它不是通过听声音来判断，而是通过检测电容值来判断，飞针测试机设备如图11-2所示。在开始测试前，工作人员先把电路板固定到机器上，然后导入电路板的网络文件，机器电脑会计算好每个网络的电容标准值，当测试开始以后，如果容差超过了一定范围，就认为不合格。
<br/>
&emsp;&emsp;测试线路电容值，比起测试线路通断，更容易发现线路的品质问题，比如，一条原本是3mm宽的线，如果在某道工序中被腐蚀成了1mm宽，线路依然导通，但是很明显，已经出现了品质问题，可能导致电路板根本无法使用。

<center>
<img src="/storage/images/zh-hans/design-production/pcb-production/process/test/test_20250526_101818.png"  width="1000">
</center>
<center>图11-1 嘉立创的测试车间</center>

&emsp;&emsp;我们可以看到两个针臂正在工作，事实上，是由四个针臂同时工作，另外的两个针臂，在电路板的背面，图片中看不到。图11-3所示为正在工作中的飞针测试机。

<center>
<img src="/storage/images/zh-hans/design-production/pcb-production/process/test/test_20250526_102358.png"  width="1000">
</center>
<center>图11-3 正在工作中的飞针测试机</center>

&emsp;&emsp;探针的移动速度非常快，它会逐点移动来完成测试，不过，毕竟板子上这么多个点，这么条线。从嘉立创的以往数据来看，测试一张板的时间从20分钟到3个小时都有。
<br/>
&emsp;&emsp;图11-4是飞针测试机上的电脑显示器。图中，绿色焊盘表示已经经过测试的，蓝色的焊盘表示待检。我们还可以看到在图中标有数字，这些数字，是电脑给电路板进行了区域划分，目的是防止飞针在测试的时候相撞。

<center>
<img src="/storage/images/zh-hans/design-production/pcb-production/process/test/test_20250526_102449.png"  width="1000">
</center>
<center>图11-4 飞针测试机上的电脑显示器</center>

## 11.2 复合模具测试

&emsp;&emsp;刚才我们了解到，飞针测试完成一张电路板，需要的时间并不短。为了很好的解决时间的问题，复合模具测试，就诞生了。总的来说，复合模具测试，几秒钟，就可以测试一张电路板。图11-5所示为嘉立创的复合模具测试设备。

<center>
<img src="/storage/images/zh-hans/design-production/pcb-production/process/test/test_20250526_102548.png"  width="1000">
</center>
<center>图11-5 复合模具测试设备</center>

&emsp;&emsp;复合模具测试虽然快，但是需要制作一个复合模具，复合模具是由一层一层的板子组成的，包括插针、打线、排线等。制作模具需要一定的成本，还有时间，所以，复合模具测试，更适合大批量的电路板测试，如果是样板，还是飞针测试比较适合。
<br/>
&emsp;&emsp;在复合模具中，会有很多的探针，一次性压到电路板上，完成测试，很明显，它比飞针测试中的4个探针逐点移动要快很多。
