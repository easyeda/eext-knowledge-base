# 二、钻孔

&emsp;&emsp;钻孔工艺的详细生产步骤为：开料（裁切→烘烤→磨边→倒角）、打销钉和钻孔，下文将对其步骤详细介绍。

## 1 开料

&emsp;&emsp;电路板生产主要原材料为覆铜箔层压板（Copper Clad Laminate，CCL），简称覆铜板或铜箔板。铜箔板由木浆纸或玻纤布等作增强材料，浸以树脂，单面或双面覆以铜箔，经热压而成的一种产品，如下图2-1所示。

<center><img src="/storage/images/zh-hans/design-production/pcb-production/process/drilling/drilling_20241121_193156.png"  width="600"></center>
<center>图2-1 覆铜箔层压板</center>

&emsp;&emsp;根据铜厚可分为1盎司（OZ），2盎司（OZ）等种类，每平方英尺1盎司铜箔所达到的厚度为28.35克，即1OZ=28.35g。

&emsp;&emsp;开料就是依制前设计所规划要求，将铜箔板裁切成工作所需要的尺寸过程，图2-2所示为嘉立创的全自动开料生产线。

<center><img src="/storage/images/zh-hans/design-production/pcb-production/process/drilling/drilling_20241121_193304.png"  width="600"></center>
<center>图2-2 全自动开料生产线</center>

&emsp;&emsp;裁切过程时须注意经纬方向与工程指示一致，考虑涨缩影响，裁切后的板送下制程前需进行烘烤，清除水汽，以避免翘曲等问题出现，裁切铜箔板如图2-3所示。

<center><img src="/storage/images/zh-hans/design-production/pcb-production/process/drilling/drilling_20241121_193400.png"  width="600"></center>
<center>图2-3 裁切铜箔板</center>

&emsp;&emsp;裁切后的板边缘会有毛刺效果，在后续生产过程中，可能会对生产人员和机器造成伤害，而且影响品质，所以裁切后应当进行打磨和倒圆角处理，如图2-4所示。

<center><img src="/storage/images/zh-hans/design-production/pcb-production/process/drilling/drilling_20241121_193443.png"  width="600"></center>
<center>图2-4 打磨和倒圆角铜箔板</center>

&emsp;&emsp;铜箔板打磨完成后，开料生产线会自动将铜箔板摞成整齐的一叠，如图2-5所示，铜箔板被整齐摞放成一叠。

<center><img src="/storage/images/zh-hans/design-production/pcb-production/process/drilling/drilling_20241121_193524.png"  width="600"></center>
<center>图2-5 铜箔板整齐摞放</center>

## 2 销钉

&emsp;&emsp;在开料完成后钻孔前，需要给铜箔板底下垫一层比较厚的纸板，打上销钉，用来固定铜箔板不让它跑偏，固定到钻孔机的台面上，防止钻头穿过铜箔，碰到钻孔机的台面，如图2-6所示，使用销钉机给铜箔板和纸板打上销钉。打好销钉的铜箔板和纸板如图2-7所示。

<center><img src="/storage/images/zh-hans/design-production/pcb-production/process/drilling/drilling_20241121_193622.png"  width="600"></center>
<center>图2-6 给铜箔板和纸板打上销钉</center>

<center><img src="/storage/images/zh-hans/design-production/pcb-production/process/drilling/drilling_20241121_193652.png"  width="600"></center>
<center>图2-7 打好销钉的铜箔板和纸板</center>

## 3 钻孔

&emsp;&emsp;钻孔目的是在板面上钻出层与层之间线路连接的导通孔，会将电路板上需要开孔的地方钻孔。比如，直插焊盘、过孔和安装定位孔等。钻孔示意图如图2-8所示，图2-9为钻孔机实物图。

<center><img src="/storage/images/zh-hans/design-production/pcb-production/process/drilling/drilling_20241121_193739.png"  width="600"></center>
<center>图2-8 钻孔示意图</center>

-   盖板：主要为铝片，在制程中起钻头定位，散热，减少毛头和防压力脚压伤作用。
-   钻头：碳化钨，钴及有机粘着剂组合而成。
-   垫板：主要为复合板，在制程中起保护钻机台面。防出口性毛头;降低钻针温度及清洁钻针沟槽胶渣作用。

<center><img src="/storage/images/zh-hans/design-production/pcb-production/process/drilling/drilling_20241121_193901.png"  width="600"></center>
<center>图2-9 钻孔机实物图</center>

&emsp;&emsp;钻孔机读取MI文件中的钻带参数文件后，钻孔机就知道铜箔板上哪些位置需要钻孔，将会对铜箔板进行钻孔作业，如图2-10所示。完成钻孔工艺后的铜箔板如图2-11所示。

<center><img src="/storage/images/zh-hans/design-production/pcb-production/process/drilling/drilling_20241121_193945.png"  width="600"></center>
<center>图2-10 钻孔机工作图</center>

<center><img src="/storage/images/zh-hans/design-production/pcb-production/process/drilling/drilling_20241121_194017.png"  width="600"></center>
<center>图2-11 完成钻孔工艺后的铜箔板</center>
