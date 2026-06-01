# 七、阻焊

&emsp;&emsp;阻焊就是指在PCB电路板涂覆上一层油墨，最常见的是绿油，还有红、黄、蓝、白、黑、紫等颜色，如图7-1所示。此外，嘉立创已推出彩色丝印工艺，可实现五彩斑斓的颜色。
<br/>
&emsp;&emsp;图7-2所示为嘉立创的阻焊印刷生产线，图中为正在等待进行阻焊的电路板，电路板的线路部分，现在全部都是裸露的铜。这些裸露的铜，很容易和空气中的氧气发生氧化，发生氧化后影响电路板的性能，甚至缩短电路板的使用寿命，所以需要进行阻焊工序。

<center>
<img src="/storage/images/zh-hans/design-production/pcb-production/process/solder_resist/solder_resist_20250526_091433.png"  width="1000">
</center>
<center>图7-1 阻焊颜色</center>

<center>
<img src="/storage/images/zh-hans/design-production/pcb-production/process/solder_resist/solder_resist_20250526_091629.png"  width="1000">
</center>
<center>图7-2 嘉立创的阻焊印刷生产线</center>

&emsp;&emsp;阻焊工序主要包括前处理、印刷、预烘烤、曝光、显影和固化等环节，如图7-3所示。

<center>
<img src="/storage/images/zh-hans/design-production/pcb-production/process/solder_resist/solder_resist_20250526_091743.png"  width="200">
</center>
<center>图7-3 阻焊工艺流程图</center>

## 7.1 前处理

&emsp;&emsp;去除表面氧化物，增加板面粗糙度，加强板面油墨附着力。

## 7.2 印刷

&emsp;&emsp;利用丝网将油墨印写在板子上，如下图7-4所示。常用的印刷方式有印刷型（Screen Printing）、淋幕型 (Curtain Coating)、喷涂型 (Spray Coating) 和滚涂型 (Roller Coating)。

<center>
<img src="/storage/images/zh-hans/design-production/pcb-production/process/solder_resist/solder_resist_20250526_091943.png"  width="200">
</center>
<center>图7-4 阻焊印刷工艺示意图</center>

&emsp;&emsp;在印阻焊油之前，需要先对板子进行酸洗、磨板，和多道水洗等前处理，这些都是通过化学反应实现的。电路板上的线路铜，从裸露出来到现在，已经在空气中停留了一段时间，表面一定会有氧化，所以这里通过酸洗这个环节，来去除氧化，另外还会去除油污等杂质。磨板的目的，是为了稍后让感光油墨更好的与板子结合。
<br/>
&emsp;&emsp;如图7-5所示，是印阻焊油设备上的网板，很明显，它给电路板涂的感光油墨，是绿色的。在网板的底下，已经放了一张电路板，这张电路板，已经完成了刚才的一些前处理环节，自动进入了网板的下方。

<center>
<img src="/storage/images/zh-hans/design-production/pcb-production/process/solder_resist/solder_resist_20250526_092032.png"  width="1000">
</center>
<center>图7-5 印刷焊油设备上的网板</center>

## 7.3 预烘烤

&emsp;&emsp;经过了一道绿油印刷，电路板的一面就铺了一层绿色。电路板继续往前滑动，进入翻板机，把电路板翻转，然后进入下一个网板下面，再涂一层绿油。这样，电路板的两面，就都有了绿油。然后，电路板会进入多道已经设定好温度的高温烘烤设备，经过一定的时间，绿油就贴合在电路板上了。

## 7.4 曝光

&emsp;&emsp;电路板的正反两面整张都涂了绿油，在不需要绿油覆盖的地方，也有了绿油，比如焊盘等需要开窗的地方。为了去除这些地方的阻焊油，就需要经过曝光和显影。
<br/>
&emsp;&emsp;曝光需要用到阻焊菲林，在菲林上，需要开窗的地方是黑色的，其它地方是透明的。经过曝光以后，透明的地方就进行了充分的曝光，黑色的地方没有被曝光，就是需要开窗的地方，没有被曝光，如图7-6所示。图7-7为嘉立创的阻焊自动曝光产线。

<center>
<img src="/storage/images/zh-hans/design-production/pcb-production/process/solder_resist/solder_resist_20250526_092306.png"  width="1000">
</center>
<center>图7-6 曝光示意图</center>
<center>
<img src="/storage/images/zh-hans/design-production/pcb-production/process/solder_resist/solder_resist_20250526_092338.png"  width="1000">
</center>
<center>图7-7 阻焊自动曝光产线</center>

## 7.5 显影

&emsp;&emsp;显影的过程，也是一个化学反应的过程，显影就是使用碳酸钾将未聚合之感光油墨利用浓度为1％的碳酸钾溶液去除掉。显影液只对未曝光的地方起反应，所以，需要开窗的地方，就裸露出了焊盘。如图7-8所示，是经过了显影后的电路板，我们可以看到它的焊盘部分已经裸露，而且是铜色的。显影后的电路板如图7-9所示。

<center>
<img src="/storage/images/zh-hans/design-production/pcb-production/process/solder_resist/solder_resist_20250526_092450.png"  width="600">
</center>
<center>图7-8 显影示意图</center>
<center>
<img src="/storage/images/zh-hans/design-production/pcb-production/process/solder_resist/solder_resist_20250526_092531.png"  width="1000">
</center>
<center>图7-9 显影后的电路板</center>
