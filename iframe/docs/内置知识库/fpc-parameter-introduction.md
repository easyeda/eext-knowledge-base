# FPC参数介绍

&emsp;&emsp;FPC柔性印刷电路板虽然广泛应用于消费电子、可穿戴设备、机器人AI、医疗设备等各大领域；此处介绍FPC铜厚、最小线宽/线距、最小孔径、过孔开窗、过孔盖油、补强等参数，帮助大家更好设置FPC。

<center><img src="/storage/images/zh-hans/design-production/pcb-design/fpc-parameter-introduction/fpc-parameter-introduction_20251127_100214.png" style="border:1px solid gray" width="1000"></center>

## 基本参数

### 板子数量/板子尺寸

&emsp;&emsp;板子数量很好理解，就是你要做多少块板；板子尺寸就是板子的大小，嘉立创FPC板的最大尺寸是234X490mm（极限250X500mm），而最小尺寸是没有限制的，但小于20X20mm的话建议拼版。

<center><img src="/storage/images/zh-hans/design-production/pcb-design/fpc-parameter-introduction/fpc-parameter-introduction_20251127_100513.png" style="border:1px solid gray" width="1000"></center>

### 板子层数

&emsp;&emsp;层数一般在设计时就会确定好，因此一般根据设计要求直接选相应的层数即可；FPC按照层数可分为单层板、双面板和多层板。

- 单层板是结构最简单的软板，一般应用在线路比较简单的工业控制、电子仪器等领域中。
- 双面板相比单层FPC，它最大的区别就是增加了过孔，以连结两层铜箔，形成导电通路，一般会用在手机、汽车仪表等产品中。
- 多层板是将多层的单/双面FPC压在一起，通过钻孔、电镀形成金属化孔，在不同层间形成导电通路。一般会用在智能手机等高端消费电子产品中。

<center><img src="/storage/images/zh-hans/design-production/pcb-design/fpc-parameter-introduction/fpc-parameter-introduction_20251127_100655.png" style="border:1px solid gray" width="1000"></center>

## 常规工艺

### 阻焊颜色

&emsp;&emsp;FPC的阻焊颜色有黄色，黑色和白色。
- 黄膜适用于绝大多数产品，如各类排线产品。
- 黑膜常用在高端或需要吸光的产品中，如汽车、手机、LED显示屏等。
- 白膜比黄膜多了一层白色涂层，常应用在需要反光的产品上，如照明灯具、LED显示屏、医美产品等。

<center><img src="/storage/images/zh-hans/design-production/pcb-design/fpc-parameter-introduction/fpc-parameter-introduction_20251127_100822.png" style="border:1px solid gray" width="1000"></center>

### 板子厚度

&emsp;&emsp;板子厚度是指FPC软板的厚度，不包含补强材质的厚度；如测量区域无铜或无覆盖膜，成品厚度会相应减少；如使用白色覆盖膜，单面板板厚会增加18um，双面板会增加36um。

### 铜箔厚度
&emsp;&emsp;指FPC线路层铜箔厚度，需与板厚对应；单面板可选18um(0.5oz)、35um(1oz)；双面板可选12um(0.33oz)、18um(0.5oz)、35um(1oz)。

### 最小线宽/线隙
&emsp;&emsp;正常情况下，越小难度越高。一般建议3/3mil以上，嘉立创的极限在2/2mil左右，但是建议尽量不要设计。
<center><img src="/storage/images/zh-hans/design-production/pcb-design/fpc-parameter-introduction/fpc-parameter-introduction_20251127_101015.png" style="border:1px solid gray" width="400"></center>

### 最小过孔/焊盘
&emsp;&emsp;过孔外径必须比内径大0.2mm，推荐大0.25mm以上。一般情况下，孔越小越贵，建议过孔内径0.3mm，外径0.55mm。
<center><img src="/storage/images/zh-hans/design-production/pcb-design/fpc-parameter-introduction/fpc-parameter-introduction_20251127_101122.png" style="border:1px solid gray" width="400"></center>

### 阻焊覆盖
&emsp;&emsp;FPC采用的是覆盖膜作为阻焊层。阻焊覆盖主要有2种类型：过孔开窗、过孔盖油。
- 过孔开窗：是指成品板子过孔焊盘会裸露出来，但是FPC过孔开窗有可能会导致孔内氧化及孔铜断裂。
- 过孔盖油：是指成品板子过孔焊盘被阻焊膜覆盖，阻焊膜可以保护孔铜不氧化，在弯折时还能保护孔铜不断裂。嘉立创默认做过孔盖油，如需过孔开窗，下单需特别备注！
<center><img src="/storage/images/zh-hans/design-production/pcb-design/fpc-parameter-introduction/fpc-parameter-introduction_20251127_101209.png" style="border:1px solid gray" width="1000"></center>

### 最小阻焊桥宽度
&emsp;&emsp;最小阻焊桥宽度为0.5mm，即焊盘间距≥0.5mm才可以保桥，小于此值嘉立创会默认开通窗。
<center><img src="/storage/images/zh-hans/design-production/pcb-design/fpc-parameter-introduction/fpc-parameter-introduction_20251127_101313.png" style="border:1px solid gray" width="1000"></center>

### 补强
&emsp;&emsp;补强主要有五种：PI、FR4、钢片、3M双面胶、电磁屏蔽膜等。
- PI补强常用于金手指插拨产品。
- FR4适用于元件孔区域补强。
- 钢片价格比较高，但是平整度好，不会变形，适用于需要芯片贴片的产品（钢片具有弱磁性，类似霍尔元件的产品不建议使用）
- 3M胶一般用于组装时固定FPC板
- 电磁屏蔽膜用于解决EMC问题，一般建议在阻焊层增加接地开窗，使电磁屏蔽膜与地铜导通，增加屏蔽效果。（注意：一定要先打样验证，电磁膜对阻抗影响比较大，设计不当，反而会导致信号异常。）
<center><img src="/storage/images/zh-hans/design-production/pcb-design/fpc-parameter-introduction/fpc-parameter-introduction_20251127_101418.png" style="border:1px solid gray" width="1000"></center>

&emsp;&emsp;**补强区总厚度=FPC板厚+补强厚度，但不是直接相加，要考虑阻焊膜厚和手指背面是否有覆铜。**
&emsp;&emsp;不知道怎么算补强厚度的，打开[嘉立创补强计算器](https://www.jlc.com/newOrder/#/calcGoldfingerPIThickness)，就可以用轻松求得啦：

### 拼版
&emsp;&emsp;拼版最大尺寸是234X490mm；间距建议2mm，有钢片补强的，间隔按3mm设计。
<br/>
&emsp;&emsp;需要注意！FPC很多板框都是异形的，如果拼版不合理会导致板材利用率低，不仅增加成本，生产也会比较麻烦。如果不知道怎么拼的话，也可以让嘉立创工程师帮忙拼。

<center><img src="/storage/images/zh-hans/design-production/pcb-design/fpc-parameter-introduction/fpc-parameter-introduction_20251127_101638.png" style="border:1px solid gray" width="1000"></center>

&emsp;&emsp;除了以上常规参数外，制作FPC还会涉及金手指，阻抗，半孔等工艺。大家可以前往[嘉立创FPC工艺参数](https://www.jlc-fpc.com/technology)进行查看，根据产品需求和工艺能力作出相应的设计。
