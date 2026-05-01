# PCB常见问题

## PCB如何切换单位 {#单位}

::: details

1、可以通过快捷键 <kbd>Q</kbd>

![](/storage/images/cn/faq/pcb/how-to-change-unit/how-to-change-unit_20240626_202426.png)

2、可以点击顶部工具栏的单位切换下拉

![](/storage/images/cn/faq/pcb/how-to-change-unit/how-to-change-unit_20240626_202334.png)

3、可以点击顶部菜单 - 视图 - 单位进行切换

![](/storage/images/cn/faq/pcb/how-to-change-unit/how-to-change-unit_20240626_202356.png)

:::

## PCB如何修改网格尺寸/栅格 大小 {#网s}

::: details
右边属性面板设置或是鼠标右键设置
![图 114](/storage/images/cn/faq/pcb/pcb_20240911_150230.png)
并且栅格可以设置按ALT键时移动的另一个距离尺寸
![图 320](/storage/images/cn/faq/pcb/pcb_20241122_174621.png)

:::

## 如何设置常用网格/栅格尺寸{#常用网格栅格}

::: details
文档教程：[设置常用网格/栅格尺寸](https://prodocs.lceda.cn/cn/pcb/settings-pcb/#%E5%B8%B8%E7%94%A8%E7%BD%91%E6%A0%BC-%E6%A0%85%E6%A0%BC%E5%B0%BA%E5%AF%B8%E8%AE%BE%E7%BD%AE)
:::

## 按空格键每次旋转的角度如何设置 {#空格键旋转}

::: details
![图 392](/storage/images/cn/faq/pcb/pcb_20260129_104623.png)
:::

## PCB如何显示隐藏网格 {#显隐网格}

::: details

![图 94](/storage/images/cn/faq/pcb/pcb_20240809_145223.png)
:::

## PCB网格如何调粗 {#网络调粗}

::: details

![图 95](/storage/images/cn/faq/pcb/pcb_20240809_145245.png)

:::

## 如何更改布线拐角 {#布线拐角}

::: details

顶部菜单栏可以设置，或是操作时按L快捷键可以切换角度。
![图 37](/storage/images/cn/faq/pcb/pcb_20240826_172712.png)
:::

## PCB文件里面如何编辑封装 {#编辑封装}

::: details

<b>1.选中封装后，右键菜单 编辑封装</b>

![图 84](/storage/images/cn/faq/pcb/pcb_20240809_143325.png)

<b>2.底部面板也可以编辑</b>

![图 88](/storage/images/cn/faq/pcb/pcb_20240809_144644.png)
:::

## 过孔盖油与不盖油如何操作 {#过孔盖油}

::: details

视频教程：[放置-过孔-盖油/不盖油设置](https://www.bilibili.com/video/BV1rK411f7mA/)

图文教程：
![图 321](/storage/images/cn/faq/pcb/pcb_20241125_112637.png)

通用，是以设计规则-阻焊扩展-以里面的参数来跟随
![图 54](/storage/images/cn/faq/pcb/pcb_20240826_180053.png)
:::

## 属性里跟随规则的阻焊扩展数值如何设置？{#跟随规则}

::: details
![图 332](/storage/images/cn/faq/pcb/pcb_20241127_103649.png)
![图 333](/storage/images/cn/faq/pcb/pcb_20241127_103658.png)
:::

## 填充区域，导线，如何开窗漏铜及去掉阻焊？ {#去阻}

::: details

<b>方法一：点中填充或是导线右键添加阻焊区域</b>

![图 89](/storage/images/cn/faq/pcb/pcb_20240809_144757.png)

<b>方法二：复制元素（导线，填充区域等）放在阻焊层重叠放置</b>

![图 90](/storage/images/cn/faq/pcb/pcb_20240809_144804.png)

- <h3>去掉阻焊层，想要盖油如何处理？</h3>

切换阻焊层，再点中导线或是填充区域，按DEL键删除

![图 91](/storage/images/cn/faq/pcb/pcb_20240809_145012.png)
:::

## 过孔/焊盘如何开窗漏铜及去掉阻焊层盖油 {#阻焊}

::: details

点中过孔或是焊盘，右边属性自定义属性，顶层和底层阻焊扩展分别设置下数值，越大数值开窗漏铜就越大。
如果是想要盖油，不想开窗漏铜，点中过孔或是焊盘，右边属性设置阻焊扩展为负数，负多少看焊盘或是过孔的直径的一半数值即可，则会去掉阻焊层区域起到盖油效果。
![图 326](/storage/images/cn/faq/pcb/pcb_20241126_114614.png)
:::

## 如何翻面翻转板子 {#翻面翻转}

::: details
视图-翻转板子
或是框选PCB内容，鼠标右键翻面
![图 313](/storage/images/cn/faq/pcb/pcb_20240913_114800.png)
:::

## 如何设置封装与导线是否跟随 {#封跟随}

::: details

<b>顶部菜单 设置——pcb/封装</b>

![图 0](/storage/images/cn/faq/pcb/pcb_20241104_105926.png)

<b>右侧属性栏，移动封装导线跟随设置为“是”</b>

![](/storage/images/cn/faq/pcb/pcb_20240730_150408.png)
:::

## 如何设置元素属性默认显示/隐藏 {#属显藏}

::: details

<b>在右侧过滤把眼睛点掉或是开启即可</b>

![](/storage/images/cn/faq/pcb/pcb_20240730_150614.png)

![](/storage/images/cn/faq/pcb/pcb_20240730_150618.png)

![](/storage/images/cn/faq/pcb/pcb_20240730_150623.png)
:::

## PCB如何将所有元件都移动到网格点上？ {#网格点}

::: details
![图 100](/storage/images/cn/faq/schematic/schematic_20240809_115254.png)
:::

## 如何实现一面有焊盘，一面没有，孔还保留着 {#1面}

::: details
第一种方法：自定义尺寸，放多层焊盘，把一面的焊盘尺寸设置成比孔小就可以了
例如以下图：钻孔36mil，把顶层直径和内层直径设置为35mil就可以实现一面不要孔
![图 307](/storage/images/cn/faq/pcb/pcb_20240913_113212.png)
第二种方法 ：放单层焊盘，中间打个过孔
![图 308](/storage/images/cn/faq/pcb/pcb_20240913_113223.png)
:::

## 如何铺铜 {#铺铜使用}

::: details

文档教程：[如何设置铺铜区域](https://prodocs.lceda.cn/cn/pcb/place-copper-region/)
:::

## 铺铜不显示如何处理 {#铜显}

::: details
需要检查以下几点

- 1.需要画边框层，并检查边框是否已经闭合
- 2.铺铜范围是否有对应的网络
- 3.如果你不改铺铜的网络可以点击铺铜线框，在右边属性面板修改属性“保留孤岛”设置为“是”
- 4.工具铺铜管理器里面把没有显示的铜上移到大铜上面即可
  ![图 246](/storage/images/cn/faq/pcb/pcb_20240912_175451.png)
  ![图 247](/storage/images/cn/faq/pcb/pcb_20240912_175500.png)

视频教程：[铺铜不显示](https://www.bilibili.com/video/BV16Y4y1u7g9/)
:::

## 如何设置铺铜发散/直连/间距 {#发直}

::: details

1.点中焊盘，直接在右边属性设置

![](/storage/images/cn/faq/pcb/pcb_20240730_150725.png)

<b>2.设计-设计规则-铺铜</b>
铺铜与其他元素的间距设置
![图 370](/storage/images/cn/faq/pcb/pcb_20260104_170710.png)
单层焊盘/多层焊盘/导线发散直连设置
![图 371](/storage/images/cn/faq/pcb/pcb_20260104_170921.png)

:::

## 铺铜优先级如何设置 {#铜级}

::: details
![图 151](/storage/images/cn/faq/pcb/pcb_20240911_171044.png)
:::

## 铺铜如何合并 {#铜并}

::: details

![图 17](/storage/images/cn/faq/pcb/pcb_20240826_165930.png)
![图 18](/storage/images/cn/faq/pcb/pcb_20240826_165939.png)
:::

## 设计规则-网络规则-铺铜如何使用？ {#铺络}

::: details

- 当铺铜网络需要与其他铺铜不一样时：
  ![图 154](/storage/images/cn/faq/pcb/pcb_20240911_172904.png)
  ![图 155](/storage/images/cn/faq/pcb/pcb_20240911_172929.png)
- 当铺铜网络需要与其他铺铜一样时：
  ![图 156](/storage/images/cn/faq/pcb/pcb_20240911_172943.png)
- 当铺铜是同一块，但不同元素网络想要产生不同间距时：
  ![图 157](/storage/images/cn/faq/pcb/pcb_20240911_173007.png)
  ![图 158](/storage/images/cn/faq/pcb/pcb_20240911_173017.png)
  ![图 159](/storage/images/cn/faq/pcb/pcb_20240911_173038.png)

:::

## 不同网络的铺铜规则设置 {#不铜}

::: details

![图 372](/storage/images/cn/faq/pcb/pcb_20260104_172425.png)
![图 373](/storage/images/cn/faq/pcb/pcb_20260104_172513.png)
![图 374](/storage/images/cn/faq/pcb/pcb_20260104_172609.png)
![图 375](/storage/images/cn/faq/pcb/pcb_20260104_172627.png)

视频教程：[设置不同的铺铜规则](https://www.bilibili.com/video/BV1GU2TBdEkU)
:::

## 铺铜了还是有飞线如何解决 {#铺铜飞线}

::: details
视频教程：[铺铜了还是有飞线如何解决](https://www.bilibili.com/video/BV1eh4y1N76x/)
:::

## 铺铜如何设置透明度？ {#透}

::: details

设置-主题里面调整
![图 19](/storage/images/cn/faq/pcb/pcb_20240826_170016.png)
![图 20](/storage/images/cn/faq/pcb/pcb_20240826_170042.png)
:::

## PCB高亮不明显如何解决 {#lo}

::: details
![图 327](/storage/images/cn/faq/pcb/pcb_20241126_150319.png)
![图 263](/storage/images/cn/faq/pcb/pcb_20240913_102753.png)
:::

## 选择元素时会把全部网络一起选中如何取消 {#滤}

::: details
右边属性面板-过滤-网络前面的勾去掉
![图 279](/storage/images/cn/faq/pcb/pcb_20240913_104537.png)
:::

## 导入DXF文件时元素大小变了如何设置 {#DXF比例}

::: details
这是因为两边软件的单位对应不上导致，可以用以下二种方式解决

1.可以在CAD软件中修改一下格式中的插入比例，再导入到嘉立创EDA中
![图 368](/storage/images/cn/faq/pcb/pcb_20250618_114407.png)
2.导入时修改缩放比例
![图 369](/storage/images/cn/faq/pcb/pcb_20250618_114608.png)
:::

## gerber文件如何上传到小助手下单PCB并SMT

::: details

视频教程：[嘉立创PCB/SMT下单教程（2022年最新版）\_哔哩哔哩\_bilibili](https://www.bilibili.com/video/BV1PB4y1D7Rn/)

一键PCB下单视频教程：[免费PCB打板教程\_*嘉立创EDA专业版入门教程（13）*哔哩哔哩\_bilibili](https://www.bilibili.com/video/BV1Ka4y1F7ZK/?spm_id_from=333.788&vd_source=a4a8b77f188b378854ec9c4adadf0f12)

SMT贴片视频教程：[SMT贴片教程\_*嘉立创EDA专业版入门教程（15）*哔哩哔哩\_bilibili](https://www.bilibili.com/video/BV14u411j7zG/?spm_id_from=333.788&vd_source=a4a8b77f188b378854ec9c4adadf0f12)
:::

## PCB关于吸附设置 {#PCB吸附}

::: details

文档教程：[吸附功能类型捕捉功能，能吸附得了焊盘的中心、过孔中心和线条的中心点。](https://prodocs.lceda.cn/cn/pcb/edit-snap/)
:::

## 盲埋孔如何设置 {#盲埋孔}

::: details

视频教程：[如何设置盲埋孔*技巧*哔哩哔哩\_bilibili](https://www.bilibili.com/video/BV1eD4y1B778/)

文档教程：[如何设置盲埋孔](https://prodocs.lceda.cn/cn/pcb/place-blind-buried-via/)
:::

## 批量设置元件位号/名称位置 {#号位}

::: details

<b>顶部菜单栏，布局-属性位置</b>

![](/storage/images/cn/faq/pcb/pcb_20240730_145643.png)

![](/storage/images/cn/faq/pcb/pcb_20240730_145703.png)
:::

## 过滤功能的使用 {#过滤}

::: details

文档教程：
![图 290](/storage/images/cn/faq/pcb/pcb_20240913_105751.png)
![图 291](/storage/images/cn/faq/pcb/pcb_20240913_105758.png)

视频教程
视频教程：[过滤选型设置](https://www.bilibili.com/video/BV1bE421w7EG/)
:::

## PCB元素无法移动如何解决 {#移动l}

::: details

视频教程：[PCB - 右侧面板 - 过滤功能\_哔哩哔哩\_bilibili](https://www.bilibili.com/video/BV1n14y1e7ST/)

<b>1.点中元素看下右边属性面是否锁定 </b>

<b>2.右边属性栏-过滤-在相应元素前勾打上即可</b>

<b>3.图层是否锁定</b>

![图 334](/storage/images/cn/faq/pcb/pcb_20241212_115110.png)
![图 335](/storage/images/cn/faq/pcb/pcb_20241212_115131.png)
![图 336](/storage/images/cn/faq/pcb/pcb_20241212_115149.png)

:::

## 如何自动拼板 {#自拼}

::: details

<b>顶部菜单 工具——拼板</b>

![](/storage/images/cn/faq/pcb/pcb_20240730_145757.png)

![](/storage/images/cn/faq/pcb/pcb_20240730_145804.png)

视频教程：[自动拼板](https://www.bilibili.com/video/BV1Hb421J7nZ/?)
:::

## 如何手动V割拼板 {#手V}

::: details
![](/storage/images/cn/faq/pcb/pcb_20240730_150135.png)

![](/storage/images/cn/faq/pcb/pcb_20240730_150140.png)
:::

## 如何手动邮票孔拼板 {#手动邮票拼}

::: details
视频教程：[手动拼板](https://www.bilibili.com/video/BV1WG411G72h/)
:::

## 常规形状板子如何画V割线 {#V割线}

::: details
以下方法只能用于常规形状的拼板。
外形不规则的异形板，就不能直接连在一起处理了
分享异形、外形结构不规则的拼板问题： (https://www.jlc.com/portal/server_guide_10907.html)
![图 188](/storage/images/cn/faq/pcb/pcb_20240912_105835.png)
:::

## 如何封装镜像显示 {#封像}

::: details

一边拖动封装，一边按X,Y快捷键（如果没有反应先设置一下快捷键，设置-快捷键）
会弹出是否镜像翻面，点确定即可。
或是直接右键选择翻面
![图 35](/storage/images/cn/faq/pcb/pcb_20240826_172607.png)
![图 36](/storage/images/cn/faq/pcb/pcb_20240826_172615.png)
:::

## 如何设置板子厚度 {#板厚}

::: details

<b>顶部菜单 工具——图层管理器</b>

![](/storage/images/cn/faq/pcb/pcb_20240730_150203.png)
:::

## 设置线宽及规则应用 {#线宽应用}

::: details
顶部菜单栏，设计-设计规则
![图 381](/storage/images/cn/faq/pcb/pcb_20260125_151625.png)
![图 383](/storage/images/cn/faq/pcb/pcb_20260125_151757.png)
![图 384](/storage/images/cn/faq/pcb/pcb_20260125_152704.png)

:::

## 如何设置安全间距 {#安距}

::: details

<b>设计-设计规则</b>

![](/storage/images/cn/faq/pcb/pcb_20240730_151829.png)

![](/storage/images/cn/faq/pcb/pcb_20240730_151833.png)
:::

## 差分对等长布线 {#差分等长}

::: details

视频教程：[PCB - 布线 - 差分对布线与等长调节\_哔哩哔哩\_bilibili](https://www.bilibili.com/video/BV12a411G7ME/?spm_id_from=333.999.0.0)

<b>布线-差分对布线</b>

![图 72](/storage/images/cn/faq/pcb/pcb_20240809_143015.png)

![图 73](/storage/images/cn/faq/pcb/pcb_20240809_143020.png)

![图 74](/storage/images/cn/faq/pcb/pcb_20240809_143030.png)

![图 75](/storage/images/cn/faq/pcb/pcb_20240809_143033.png)

![图 76](/storage/images/cn/faq/pcb/pcb_20240809_143036.png)

![图 77](/storage/images/cn/faq/pcb/pcb_20240809_143039.png)
:::

## 如何把原理图网络标签命名好差分对形式 {#签}

::: details

![图 78](/storage/images/cn/faq/pcb/pcb_20240809_143124.png)

![图 79](/storage/images/cn/faq/pcb/pcb_20240809_143130.png)

![图 80](/storage/images/cn/faq/pcb/pcb_20240809_143132.png)
:::

## BGA封装如何扇出布线 {#BGA扇出}

::: details

视频教程：[PCB - 布线 - 扇出布线\_哔哩哔哩\_bilibili](https://www.bilibili.com/video/BV1Ku4y1U7GP/?spm_id_from=333.999.0.0)

![图 81](/storage/images/cn/faq/pcb/pcb_20240809_143225.png)

![图 82](/storage/images/cn/faq/pcb/pcb_20240809_143231.png)

![图 83](/storage/images/cn/faq/pcb/pcb_20240809_143235.png)
:::

## 原理图和PCB文件放置/复制粘贴设置是否保留位号 {#保}

::: details

<b>原理图和PCB文件都可以设置</b>

![图 92](/storage/images/cn/faq/pcb/pcb_20240809_145159.png)

![图 93](/storage/images/cn/faq/pcb/pcb_20240809_145205.png)
:::

## PCB如何组合，取消组合及移出组合 {#组合}

::: details

![图 102](/storage/images/cn/faq/pcb/pcb_20240809_145621.png)

![图 103](/storage/images/cn/faq/pcb/pcb_20240809_145627.png)
:::

## PCB如何查找相似对象使用 {#查似}

::: details

<b>编辑-查找或是点中右键-查找</b>

查找出来后，在右边属性修改。

![图 106](/storage/images/cn/faq/pcb/pcb_20240809_145745.png)

![图 107](/storage/images/cn/faq/pcb/pcb_20240809_145749.png)

![图 108](/storage/images/cn/faq/pcb/pcb_20240809_145755.png)

<b>等于：需要内容完全一致才可搜索到</b>

<b>包含：部分内容一致才可搜索到</b>

<b>不限：不论什么内容都会被搜索选择</b>

<b>全部：不分什么元素的属性</b>
:::

## 如何显示泪滴 {#泪滴显示}

::: details

<b>在右侧过滤栏里面显示泪滴</b>

![图 111](/storage/images/cn/faq/pcb/pcb_20240809_150109.png)
:::

## 如何添加泪滴 {#泪滴}

::: details
顶部菜单栏，工具-泪滴
![图 119](/storage/images/cn/faq/pcb/pcb_20240911_153530.png)

![图 120](/storage/images/cn/faq/pcb/pcb_20240911_153543.png)
:::

## 布线时如何自动加泪滴 {#自动加泪滴}

::: details
![图 187](/storage/images/cn/faq/pcb/pcb_20240912_105807.png)
:::

## 添加泪滴没有反应什么原因 {#泪滴应}

::: details
主要可能因为以下几点无法添加波澜：1.线条不支持 2.DRC报错了 3.导线没有连接好 4.导线太短 5.圆弧导线不支持，线条不支持添加。
:::

## PCB如何自定义部分设计规则进行检查 {#定drc}

::: details

![图 112](/storage/images/cn/faq/pcb/pcb_20240809_152728.png)

![图 113](/storage/images/cn/faq/pcb/pcb_20240809_152733.png)
:::

## 各个铜皮之间的间距如何设置？{#铜与铜间距}

::: details

![图 376](/storage/images/cn/faq/pcb/pcb_20260104_174136.png)

:::
## 单段整段点击选择设置 {#danduan}
::: details
顶部菜单栏-设置-PCB-通用
![图 378](/storage/images/cn/faq/pcb/pcb_20260104_191008.png)
:::

## 元件属性默认字体设置 {#ziti}
::: details
顶部菜单栏-设置-PCB-通用
![图 379](/storage/images/cn/faq/pcb/pcb_20260104_191248.png)
:::

## 编辑删除对象功能如何使用 {#编辑删除}

::: details

![图 8](/storage/images/cn/faq/pcb/pcb_20240826_164538.png)
![图 9](/storage/images/cn/faq/pcb/pcb_20240826_164559.png)
![图 10](/storage/images/cn/faq/pcb/pcb_20240826_164607.png)
:::

## 放置时如何自动显示属性值 {#默属}

::: details

设置-属性 ，里面选择某个元件属性的在画布时原理图还是PCB的属性显示
![图 11](/storage/images/cn/faq/pcb/pcb_20240826_164644.png)
:::

## 元件/丝印之间的DRC报错 {#元件丝印drc}

::: details

![图 12](/storage/images/cn/faq/pcb/pcb_20240826_164916.png)
:::

## 内电层报错有游离铜如何处理 {#孤}

::: details

点中内电层，保留孤岛设置为否，就会去游离铜即可
![图 13](/storage/images/cn/faq/pcb/pcb_20240826_165021.png)
:::

## 内电层如何改信号层 {#内改信}

::: details

![图 15](/storage/images/cn/faq/pcb/pcb_20240826_165826.png)
:::

## 内电层如何删除 {#内删}

::: details

想要切换为2层板，需要把内电层的元素和盲埋孔的设计规则删除才可
![图 55](/storage/images/cn/faq/pcb/pcb_20240826_182338.png)
![图 56](/storage/images/cn/faq/pcb/pcb_20240826_182410.png)
![图 57](/storage/images/cn/faq/pcb/pcb_20240826_182421.png)
![图 58](/storage/images/cn/faq/pcb/pcb_20240826_182428.png)
![图 59](/storage/images/cn/faq/pcb/pcb_20240826_182436.png)
![图 60](/storage/images/cn/faq/pcb/pcb_20240826_182443.png)
:::

## 如何绘制内电层 {#内电层}

::: details
![图 222](/storage/images/cn/faq/pcb/pcb_20240912_150425.png)
![图 223](/storage/images/cn/faq/pcb/pcb_20240912_150442.png)
视频教程

<iframe src="//player.bilibili.com/player.html?isOutside=true&aid=560333370&bvid=BV1de4y1h7t3&cid=826256976&p=1&autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" style="width: 100%; margin: auto; display: block; height: 800px"></iframe>
:::

## 内电层如何进行分割 {#内分}

::: details
用折线工具，然后重建内电层，shift+b实现分区，再点击设置网络
![图 233](/storage/images/cn/faq/pcb/pcb_20240912_174210.png)
![图 234](/storage/images/cn/faq/pcb/pcb_20240912_174219.png)
视频教程：

<iframe src="//player.bilibili.com/player.html?isOutside=true&aid=560333370&bvid=BV1de4y1h7t3&cid=826256976&p=1&autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" style="width: 100%; margin: auto; display: block; height: 800px"></iframe>
:::

## 内层顺序互换 {#互换}

::: details
在层管理器物理堆叠调整顺序
![图 292](/storage/images/cn/faq/pcb/pcb_20240913_105812.png)
:::

## 更新PCB到原理图如何运用 {#更原理}

::: details

顶部菜单栏-更新PCB到原理图
注意：更新过去的是元件属性的值，符号样式不会改也不会新增
![图 25](/storage/images/cn/faq/pcb/pcb_20240826_170430.png)
![图 26](/storage/images/cn/faq/pcb/pcb_20240826_170453.png)
:::

## 如何放置约束区域 {#约束}

::: details
放置-约束区域
![图 27](/storage/images/cn/faq/pcb/pcb_20240826_171508.png)
![图 28](/storage/images/cn/faq/pcb/pcb_20240826_171516.png)
![图 30](/storage/images/cn/faq/pcb/pcb_20240826_171632.png)
:::

## 如何高亮网络与取消高亮网络 {#亮}

::: details

快捷键Sfhit+H，或是右键选择
也可以点中元素，右键选择-导线，连接，网络
![图 31](/storage/images/cn/faq/pcb/pcb_20240826_171736.png)
左侧网络里面选中，也可以高亮显示
![图 32](/storage/images/cn/faq/pcb/pcb_20240826_171802.png)
:::

## 如何放置禁止区域 {#禁}

::: details

放置-禁止区域
注意：除了内电层和铺铜可以去掉，其他元素只能起到提醒作用。比如那块地方不想要导线属性，放了禁止区域，只会DRC里面做提醒
![图 33](/storage/images/cn/faq/pcb/pcb_20240826_172412.png)
![图 34](/storage/images/cn/faq/pcb/pcb_20240826_172512.png)
:::

## 如何画圆环焊盘？ {#圆环焊盘}

::: details

可以放两点圆弧，点中，右键转为焊盘
![图 39](/storage/images/cn/faq/pcb/pcb_20240826_172838.png)
![图 40](/storage/images/cn/faq/pcb/pcb_20240826_172847.png)
:::

## 如何绘制mark点 {#mark点}

::: details

![图 41](/storage/images/cn/faq/pcb/pcb_20240826_173040.png)
![图 42](/storage/images/cn/faq/pcb/pcb_20240826_173408.png)
![图 43](/storage/images/cn/faq/pcb/pcb_20240826_173417.png)
:::

## PCB网表如何编辑导入 {#PCB网表}

::: details

在原理图界面文件菜单可以导出网表选嘉立创EDA格式，用记事本打开编辑后，在到PCB文件菜单导入网表
![图 47](/storage/images/cn/faq/pcb/pcb_20240826_174831.png)
![图 48](/storage/images/cn/faq/pcb/pcb_20240826_174839.png)
![图 49](/storage/images/cn/faq/pcb/pcb_20240826_174846.png)
![图 50](/storage/images/cn/faq/pcb/pcb_20240826_174857.png)
:::

## PCB设置默认设计规则如何配置 {#默认规则}

::: details

顶部菜单栏-设计-设计规则，左下角切换设置为新建PCB默认设置
![图 82](/storage/images/cn/faq/pcb/pcb_20240911_110852.png)
:::

## 布线时添加过孔时如何设置在哪个拐角上开始添加？{#拐角添过孔}

::: details

在设置-PCB-常规 里面可以把布线时添加过孔的方式改为在当前拐点添加
![图 83](/storage/images/cn/faq/pcb/pcb_20240911_110903.png)
:::

## 对齐居中如何选择参考对象 {#对齐选参考}

::: details

布局菜单 对齐选项 选择参考对象的勾打上
![图 86](/storage/images/cn/faq/pcb/pcb_20240911_114446.png)
:::

## 批量设置元件位号/名称位置 {#属性位置}

::: details
顶部菜单栏，布局-属性位置

![图 175](/storage/images/cn/faq/pcb/pcb_20240911_175800.png)

![图 88](/storage/images/cn/faq/pcb/pcb_20240911_114816.png)
:::

## 如何重置ID {#重置ID}

::: details
原理图和PCB都点一下重置ID，再点导入更新，PCB就不会变位置了。
![图 92](/storage/images/cn/faq/pcb/pcb_20240911_115535.png)

![图 93](/storage/images/cn/faq/pcb/pcb_20240911_115555.png)
:::

## 如何放置缝合孔 {#缝合孔}

::: details
顶部菜单 放置 -——缝合孔
文档教程：[放置缝合孔](https://prodocs.lceda.cn/cn/pcb/place-suture-vias/)

<iframe src="//player.bilibili.com/player.html?isOutside=true&aid=988753122&bvid=BV1z44y1U7B6&cid=924567610&p=1&autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" style="width: 100%; margin: auto; display: block; height: 800px"></iframe>
:::

## 右边属性面板过滤默认配置 {#过滤默认配置}

::: details
可以自己设个过滤配置，在画布上右键菜单可以切换过滤配置
![图 96](/storage/images/cn/faq/pcb/pcb_20240911_143744.png)
![图 97](/storage/images/cn/faq/pcb/pcb_20240911_143801.png)
:::

## 拖动焊盘或者封装时是否吸附到栅格 {#吸附栅格}

::: details
设置-常规-拖动封装/焊盘时吸附对齐到相邻封装/焊盘边界前面选择是否勾上
![图 98](/storage/images/cn/faq/pcb/pcb_20240911_144022.png)
:::

## 多层焊盘的孔如何分别设置大小 {#钻孔设大小}

::: details
点中焊盘，右边属性面板-大小-自定义
![图 99](/storage/images/cn/faq/pcb/pcb_20240911_144331.png)
:::

## 底部图层窗口如何显示 {#底}

::: details
视图-窗口-图层栏
![图 100](/storage/images/cn/faq/pcb/pcb_20240911_144810.png)
:::

## 提示未找到完全匹配的元件如何解决？{#匹配}

::: details
元件数量、器件、封装或者焊盘对应的网络不一致都会影响复用
![图 101](/storage/images/cn/faq/pcb/pcb_20240911_144850.png)

![图 102](/storage/images/cn/faq/pcb/pcb_20240911_144900.png)
:::

## 提示未在同一板子如何解决 {#未同一}

::: details
![图 103](/storage/images/cn/faq/pcb/pcb_20240911_144930.png)
![图 104](/storage/images/cn/faq/pcb/pcb_20240911_144938.png)

<iframe src="//player.bilibili.com/player.html?isOutside=true&aid=942568003&bvid=BV1UW4y1t7Vw&cid=818191182&p=1&autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" style="width: 100%; margin: auto; display: block; height: 800px"></iframe>
:::

## 如何制作金手指 {#金手指}

::: details
![图 108](/storage/images/cn/faq/pcb/pcb_20240911_145259.png)
![图 109](/storage/images/cn/faq/pcb/pcb_20240911_145306.png)
![图 110](/storage/images/cn/faq/pcb/pcb_20240911_145315.png)
:::

## 如何隐藏或显示某一条网络飞线 {#隐线}

::: details
快捷键：点中需要隐藏的网络，按Ctrl+R可以隐藏或显示
或是左侧面板-网络里面眼睛显示隐藏
![图 111](/storage/images/cn/faq/pcb/pcb_20240911_145510.png)
:::

## 工程上的库如何另存为个人 {#另存}

::: details

- 底部面板-工程-批量另存为，即可打包另存为本地。再文件-导入-专业版文件-提取库
  ![图 115](/storage/images/cn/faq/pcb/pcb_20240911_151445.png)
  ![图 116](/storage/images/cn/faq/pcb/pcb_20240911_151725.png)
- 或是可以直接另存为个人云端
- 底部面板-工程库-另存为个人（目前只能一个一个另存为）
  ![图 117](/storage/images/cn/faq/pcb/pcb_20240911_152002.png)

:::

## 系统库如何另存为个人 {#个l}

::: details
底部面板-系统-另存为个人/本地
![图 118](/storage/images/cn/faq/pcb/pcb_20240911_153347.png)
:::

## 如何设置层颜色 {层颜色}

::: details

- 右边属性面板层管理里面设置
  ![图 122](/storage/images/cn/faq/pcb/pcb_20240911_153711.png)
- 或是在设置主题里面设置
  ![图 123](/storage/images/cn/faq/pcb/pcb_20240911_153827.png)

:::

## 布线冲突模式如何设置 {#布冲}

::: details
顶部菜单栏，布线-布线模式-忽略 就可以直接连接了。
![图 124](/storage/images/cn/faq/pcb/pcb_20240911_154200.png)
连接起来后可以看下具体阻挡原因，在设计-检查drc.底部面板定位查看。
![图 367](/storage/images/cn/faq/pcb/pcb_20250313_174341.png)
根据报错如影响板子需要去做相应修改。
:::

## 如何批量放置过孔？{#批量过孔}

::: details
点中铺铜，右边属性添加过孔
如果需要移除一样也是这个按键
放置的过孔网络是跟随铺铜的网络来的
![图 127](/storage/images/cn/faq/pcb/pcb_20240911_163738.png)
:::

## 如何快速找到并高亮显示某个网络的元素! {#高亮}

::: details
左边属性面板点中网络或是元素定位
[图 128](/storage/images/cn/faq/pcb/pcb_20240911_164028.png)
或是使用查找相似功能
![图 129](/storage/images/cn/faq/pcb/pcb_20240911_164356.png)
:::

## 如何放置异形焊盘 {#异焊}

::: details
放置-异形焊盘
![图 130](/storage/images/cn/faq/pcb/pcb_20240911_164528.png)
![图 131](/storage/images/cn/faq/pcb/pcb_20240911_164539.png)
![图 132](/storage/images/cn/faq/pcb/pcb_20240911_164547.png)
![图 133](/storage/images/cn/faq/pcb/pcb_20240911_164555.png)
:::

## 如何使用布尔运算画出圆环 {#圆环}

::: details
![图 134](/storage/images/cn/faq/pcb/pcb_20240911_164643.png)
![图 135](/storage/images/cn/faq/pcb/pcb_20240911_164653.png)
:::

## 找不到想要的快捷键如何设置？{#捷}

::: details
![图 136](/storage/images/cn/faq/pcb/pcb_20240911_164719.png)
![图 137](/storage/images/cn/faq/pcb/pcb_20240911_164730.png)
:::

## 无法显示元素如何解决 {#显示}

::: details
查看层管理和过滤对应元素前面的眼睛是否有勾选上
![图 142](/storage/images/cn/faq/pcb/pcb_20240911_165129.png)
![图 337](/storage/images/cn/faq/pcb/pcb_20241212_115556.png)

:::

## 焊盘如何单独进行设置热焊连接方式？{#热焊}

::: details
![图 143](/storage/images/cn/faq/pcb/pcb_20240911_165239.png)
:::

## 焊接辅助工具如何使用 {#焊辅}

::: details
文档教程：[焊接辅助工具](https://prodocs.lceda.cn/cn/pcb/tools-soldering-assistance-tool/#%E7%84%8A%E6%8E%A5%E8%BE%85%E5%8A%A9%E5%B7%A5%E5%85%B7)

## 如何导出离线html文件 {#html文件}

工具-焊接铺助工具
导出-离线html
![图 144](/storage/images/cn/faq/pcb/pcb_20240911_165757.png)
:::

## 如何批量删除同一种元素 {#批量删除}

::: details
编辑删除
![图 145](/storage/images/cn/faq/pcb/pcb_20240911_170032.png)
![图 146](/storage/images/cn/faq/pcb/pcb_20240911_170038.png)
![图 147](/storage/images/cn/faq/pcb/pcb_20240911_170046.png)
:::

## 两焊盘对齐，且相连导线时不出现折线 {#不出现折线}

::: details
选中焊盘，左右居中或者上下居中对齐即可
![图 153](/storage/images/cn/faq/pcb/pcb_20240911_171850.png)
:::

## 设计规则网络长度如何运用？{#网络长度}

::: details
![图 160](/storage/images/cn/faq/pcb/pcb_20240911_173248.png)
![图 161](/storage/images/cn/faq/pcb/pcb_20240911_173421.png)
![图 162](/storage/images/cn/faq/pcb/pcb_20240911_173513.png)
![图 163](/storage/images/cn/faq/pcb/pcb_20240911_173521.png)
:::

## 如何截断线条 {#截断线条}

::: details
![图 164](/storage/images/cn/faq/pcb/pcb_20240911_173632.png)
:::

## FPC的补强层如何添加？{#补强}

::: details
![图 168](/storage/images/cn/faq/pcb/pcb_20240911_174051.png)
:::

## 如何铺铜/内电层内缩 {#内缩}
::: details
设计-设计规则-安全间距，设置边框和铺铜/内电层间距
![图 380](/storage/images/cn/faq/pcb/pcb_20260116_153320.png)

:::

## 2D 预览属性参数如何设置 {#2D预览}

::: details
![图 189](/storage/images/cn/faq/pcb/pcb_20240912_105953.png)
:::

## 原理图/PCB画布十字光标设置 {#十字光标}

::: details
![图 190](/storage/images/cn/faq/pcb/pcb_20240912_110018.png)
![图 191](/storage/images/cn/faq/pcb/pcb_20240912_110026.png)
:::

## 如何设置并绘制多层板 {#多层板}

::: details
右侧栏图层管理器，设置铜箔层
![图 192](/storage/images/cn/faq/pcb/pcb_20240912_110140.png)

<iframe src="//player.bilibili.com/player.html?isOutside=true&aid=602830628&bvid=BV13B4y137pL&cid=826354526&p=1&autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" style="width: 100%; margin: auto; display: block; height: 800px"></iframe>
:::

## 如何交叉选择和布局传递 {#交叉布局}

::: details
使用方法：

- 选择元件或导线 - 顶部菜单 - 设计 - 交叉选择
- 选择元件或导线 - 布局传递
- 在同一个板子下的原理图和 PCB 可以使用这个交叉选择进行相互定位元件，引脚，导线网络。
  在原理图选择一个元件后，会根据元件的唯一 ID 高亮并选中 PCB 对应相同唯一 ID 的元件。
  ![图 193](/storage/images/cn/faq/pcb/pcb_20240912_111124.png)
      <iframe src="//player.bilibili.com/player.html?isOutside=true&aid=302529758&bvid=BV1ZP411G76U&cid=818164881&p=1&autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" style="width: 100%; margin: auto; display: block; height: 800px"></iframe>
      :::

## 等长过程中如何调节弓形的间距和高度 {#等长弓形}

::: details
视频教程：

<iframe src="//player.bilibili.com/player.html?isOutside=true&aid=260091870&bvid=BV1ee411g7je&cid=818164752&p=1&autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" style="width: 100%; margin: auto; display: block; height: 800px"></iframe>
:::

## gerber文件预览 {#gerber预览}

::: details
gerber软件下载地址：(https://sourceforge.net/projects/gerbv/files/)
![图 194](/storage/images/cn/faq/pcb/pcb_20240912_111517.png)
![图 195](/storage/images/cn/faq/pcb/pcb_20240912_111622.png)
![图 196](/storage/images/cn/faq/pcb/pcb_20240912_111628.png)
![图 197](/storage/images/cn/faq/pcb/pcb_20240912_111635.png)

视频教程：

<iframe src="//player.bilibili.com/player.html?isOutside=true&aid=260163955&bvid=BV12e411g7zs&cid=821826365&p=1&autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" style="width: 100%; margin: auto; display: block; height: 800px"></iframe>
:::

## 如何绑定封装（封装管理器的运用） {#封管}

::: details
文档教程：[封装管理器](https://prodocs.lceda.cn/cn/schematic/tools-footprint-manager/)
:::

## 如何差分对布线 {#差分对布线}

::: details
文档教程：[差分对布线](https://prodocs.lceda.cn/cn/pcb/route-differential-pair-routing/index.html)

:::

## 丝印层颜色和透明度 {#丝印}

::: details
在层管理或是主题里面设置下丝印层透明度
![图 201](/storage/images/cn/faq/pcb/pcb_20240912_114602.png)
![图 322](/storage/images/cn/faq/pcb/pcb_20241125_114148.png)

:::

## 导出DXF挖槽区域吸附不到圆心 {#圆心}

::: details
因为在边框层用折线的圆工具画才会有圆心，挖槽区域是没有的
![图 206](/storage/images/cn/faq/pcb/pcb_20240912_115205.png)
:::

## 导线拖动不能阻挡了如何解决 {#拖动阻挡}

::: details
因为前面已经违反DRC了，可以检查DRC看看有没有记录这种已经有DRC的就没办法了，需要调整为不报错后再拖动才会被阻挡
:::

## 新增泪滴以后没有提示重建铺铜的原因 {#重建铺铜}

::: details
这是因为2.1取消了这个功能了，大板会卡，比较耗时 现在是改为了应用后弹窗不消失，方便选中小范围添加后接着再选其他的继续加泪滴，后面会支持配置把应用铺铜的弹窗再显示出来
:::

## 铺铜如何开窗 {#铺铜开窗}

::: details
双击2次选中铺铜后，再在属性面板选择添加阻焊区域
![图 95](/storage/images/cn/faq/pcb/pcb_20240911_120015.png)
:::

## 铺铜没有填充完整产生尖角如何处理 {#产生尖角}

::: details
在属性面板把制造优化关掉就不会平滑尖角了
专业版制造优化是仅在填充样式为全填充时出现，网格铺铜默认启用制造优化。默认为是，将移除铺铜的尖角和小于 8mil 的细铜线，利于生产制造；设置为否则显示尖角和细铜线
![图 210](/storage/images/cn/faq/pcb/pcb_20240912_115731.png)
:::

## 有些焊盘锡膏会缺一个口子是什么原因 {#锡膏缺口}

::: details
这个主要是用于贴片工艺的，利于嘉立创smt贴片 不同类型就不同，所以有些不一定需要有一个缺口
![图 207](/storage/images/cn/faq/pcb/pcb_20240912_115429.png)
:::

## 如何删除不想要的锡膏层 {#删锡膏}

::: details

- 在嘉立创EDA如何删除不想要的锡膏层（钢网层、助焊层），这里有两种方法：

- 在PCB点击焊盘，给焊盘设置助焊扩展为自定义，并设置值为-1000即可。助焊扩展为0时助焊形状和焊盘形状一样大，为负数时，就会比焊盘形状小。

![](/storage/images/cn/faq/pcb/pcb_20240710_113243.jpg)

- 如果不想一个个焊盘设置，可以直接在设计规则里面设置，焊盘的助焊扩展属性默认是通用类型（跟随规则）。

![](/storage/images/cn/faq/pcb/pcb_20240710_113532.jpg)

- 在导出Gerber的时候，选择自定义导出，不勾选锡膏层，注意：这个会整个锡膏层都不做导出！！！

![](/storage/images/cn/faq/pcb/pcb_20240710_113317.jpg)

- 同理，如果你不需要焊盘盖绿油，可以把阻焊扩展或阻焊层做类似的设置。

:::

## 如何设置以中心移动 {#中心移动}

::: details
点中元件按快捷键 M 或是鼠标右键选择
![图 209](/storage/images/cn/faq/pcb/pcb_20240912_115546.png)
:::

## 对齐工具如何使用 {#对齐工具}

::: details
文档教程：[布局-对齐](https://prodocs.lceda.cn/cn/pcb/layout-align/)
:::

## 对齐分布如何使用 {#对齐分布}

::: details
文档教程：[布局-分布](https://prodocs.lceda.cn/cn/pcb/layout-distribute/)
:::

## CAD里面单位已经显示是毫米导入DXF后显示却是英寸 {#CAD单位}

::: details
可以在CAD软件那边有个命令行输入UNITS后修改单位与EDA的单位一致。或是在CAD设置好比例再导入进EDA
![图 211](/storage/images/cn/faq/pcb/pcb_20240912_140528.png)
:::

## 如何使用命令绘图 {#命令绘图}

::: details
文档教程：[工具-命令](https://prodocs.lceda.cn/cn/pcb/tools-command/)
:::

## 布线时如何快速切换线宽 {#切换线宽}

::: details
视频教程：

<iframe src="//player.bilibili.com/player.html?isOutside=true&aid=557762948&bvid=BV13e4y1o7jy&cid=826464035&p=1&autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" style="width: 100%; margin: auto; display: block; height: 800px"></iframe>
:::

## 起始布线宽度默认设置 {#起}

::: details
在右边属性——常用设置——起始布线宽度
![图 214](/storage/images/cn/faq/pcb/pcb_20240912_141652.png)
![图 215](/storage/images/cn/faq/pcb/pcb_20240912_141712.png)
![图 385](/storage/images/cn/faq/pcb/pcb_20260125_153045.png)

:::

## 如何从复用图块模版更新布局布线 {#更布}

::: details
文档教程：[从复用模板更新布局布线](https://prodocs.lceda.cn/cn/pcb/design-update-place-and-route-from-reuse-template/)

视频教程：

<iframe src="//player.bilibili.com/player.html?isOutside=true&aid=648856333&bvid=BV1ue4y1K72F&cid=924567464&p=1&autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" style="width: 100%; margin: auto; display: block; height: 800px"></iframe>
:::

## PCB - 布局 - 复用布局布线(多通道布局布线) {#复用布局布线}

::: details

视频教程：

<iframe src="//player.bilibili.com/player.html?isOutside=true&aid=984042272&bvid=BV1Ct4y1V7iV&cid=821223202&p=1&autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" style="width: 100%; margin: auto; display: block; height: 800px"></iframe>
:::

## PCB网络设置不同颜色 {#网络颜色}

::: details
在编辑器左侧面板-网络里面设置
![图 216](/storage/images/cn/faq/pcb/pcb_20240912_145721.png)
:::

## 如何推挤布线 {#推挤布线}

::: details
布线-推挤
![图 217](/storage/images/cn/faq/pcb/pcb_20240912_145855.png)
视频教程：

<iframe src="//player.bilibili.com/player.html?isOutside=true&aid=302803129&bvid=BV1aP41137F5&cid=826455787&p=1&autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" style="width: 100%; margin: auto; display: block; height: 800px"></iframe>
:::

## 如何重新编号焊盘 {#重新编号焊盘}

::: details
在封装库文件里面，工具-重新编号焊盘
![图 218](/storage/images/cn/faq/pcb/pcb_20240912_150007.png)

<iframe src="//player.bilibili.com/player.html?isOutside=true&aid=645291220&bvid=BV15Y4y1M7Kt&cid=826495415&p=1&autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" style="width: 100%; margin: auto; display: block; height: 800px"></iframe>
:::

## 如何测量元素之间的距离 {#测量}

::: details
第一种：工具-测量距离 ALT+M
![图 219](/storage/images/cn/faq/pcb/pcb_20240912_150100.png)
第二种：放置-长度 ALT+N
![图 220](/storage/images/cn/faq/pcb/pcb_20240912_150111.png)
视频教程：

<iframe src="//player.bilibili.com/player.html?isOutside=true&aid=217813205&bvid=BV1ca411G7an&cid=826499918&p=1&autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" style="width: 100%; margin: auto; display: block; height: 800px"></iframe>
:::

## 焊盘对组如何运用 {#焊对}

::: details
在左侧树-网络-焊盘对组添加
![图 221](/storage/images/cn/faq/pcb/pcb_20240912_150220.png)

<iframe src="//player.bilibili.com/player.html?isOutside=true&aid=514051741&bvid=BV1Xg41117Cp&cid=821244314&p=1&autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" style="width: 100%; margin: auto; display: block; height: 800px"></iframe>

:::

## 网格类型如何设置 {#网格类型}

::: details
文档教程：[网格类型设置](https://prodocs.lceda.cn/cn/pcb/view-grid-type/)
:::

## 设置文本镂空或反相 {#文本镂空}

::: details
点中文本，右边属性面板设置反相

![图 224](/storage/images/cn/faq/pcb/pcb_20240912_150718.png)
:::

## 如何运用第三方布线软件自动布线 {#第三方自动布线}

::: details
视频教程：

<iframe src="//player.bilibili.com/player.html?isOutside=true&aid=302833442&bvid=BV16P41137b2&cid=827952676&p=1&autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" style="width: 100%; margin: auto; display: block; height: 800px"></iframe>
:::

## 如何添加字体 {#添加字体}

::: details
文档教程：[文档教程](https://prodocs.lceda.cn/cn/introduction/settings/#%E5%B8%B8%E7%94%A8%E5%AD%97%E4%BD%93)
视频教程：

<iframe src="//player.bilibili.com/player.html?isOutside=true&aid=815235047&bvid=BV1wG4y1r73p&cid=821732566&p=1&autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" style="width: 100%; margin: auto; display: block; height: 800px"></iframe>
:::

## PCB文件drc报错如何处理 {#drc报错}

::: details
如何处理焊盘和导线，焊盘和焊盘等drc问题

<iframe src="//player.bilibili.com/player.html?isOutside=true&aid=472704120&bvid=BV1dK411Z7GX&cid=821793457&p=1&autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" style="width: 100%; margin: auto; display: block; height: 800px"></iframe>
:::

## 当文件无法点保存时，可以粘贴文件源码保留工程内容 {#源码保存}

::: details
注意：如果是打开多页原理图页，每一页都需要这样操作一遍
![图 225](/storage/images/cn/faq/pcb/pcb_20240912_170520.png)
![图 226](/storage/images/cn/faq/pcb/pcb_20240912_170537.png)
![图 227](/storage/images/cn/faq/pcb/pcb_20240912_170604.png)
![图 228](/storage/images/cn/faq/pcb/pcb_20240912_170613.png)
![图 229](/storage/images/cn/faq/pcb/pcb_20240912_170619.png)
![图 230](/storage/images/cn/faq/pcb/pcb_20240912_170628.png)
![图 231](/storage/images/cn/faq/pcb/pcb_20240912_170637.png)
:::

## 如何添加或减少顶部菜单栏工具 {#顶部菜单栏}

::: details
文档教程：[设置-顶部工具栏](https://prodocs.lceda.cn/cn/introduction/settings/#%E5%B8%B8%E7%94%A8%E5%AD%97%E4%BD%93)
:::

## 螺旋天线线圈如何画 {#线圈}

::: details
视频教程：

<iframe src="//player.bilibili.com/player.html?isOutside=true&aid=654028157&bvid=BV18Y4y1Q75d&cid=1068889562&p=1&autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" style="width: 100%; margin: auto; display: block; height: 800px"></iframe>
:::

## gerber文件每一层的说明 {#gerber层说明}

::: details
文档教程：[gerber层说明](https://prodocs.lceda.cn/cn/pcb/export-pcb-fabrication-file-gerber/#gerber%E8%AF%B4%E6%98%8E)
:::

## 补强材质没有FR4选项的原因 {#FP4选项}

::: details
因为在实际生产时会发黑，嘉立创制板部门也不推荐使用FR4,因此没有在软件上加上FR4材质。
![图 232](/storage/images/cn/faq/pcb/pcb_20240912_171553.png)
:::

## 如何填充 {#填充}

::: details
文档教程：[放置-填充区域](https://prodocs.lceda.cn/cn/pcb/place-fill-region/)
:::

## 如何挖槽 {#挖槽}

::: details
文档教程：[放置-填充区域](https://prodocs.lceda.cn/cn/pcb/place-slot-region/)
:::

## 网络类的使用 {#网络类}

::: details
视频教程：

<iframe src="//player.bilibili.com/player.html?isOutside=true&aid=483971520&bvid=BV1XT411B73f&cid=1065491901&p=1&autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" style="width: 100%; margin: auto; display: block; height: 800px"></iframe>
:::

## 网络-网络规则的使用 {#规则使用}

::: details

视频教程：[网络-网络规则](https://www.bilibili.com/video/BV1Qv4y1V7NW/?spm_id_from=888.80997.embed_other.whitelist&bvid=BV1Qv4y1V7NW)
:::

## 如何相等距离放置定位孔 {#等距离放置定位孔}

::: details

<iframe src="//player.bilibili.com/player.html?isOutside=true&aid=563842355&bvid=BV1rv4y197nY&cid=924567518&p=1&autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" style="width: 100%; margin: auto; display: block; height: 800px"></iframe>
:::

## 如何合并线条 {#合并线条}

::: details

鼠标右键选择合并为闭合线条
![图 38](/storage/images/cn/faq/pcb/pcb_20240826_172750.png)
:::

## 布线时如何切换层并放置过孔 {#切换层放孔}

::: details

<iframe src="//player.bilibili.com/player.html?isOutside=true&aid=861334907&bvid=BV1JV4y1A7dj&cid=924567447&p=1&autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" style="width: 100%; margin: auto; display: block; height: 800px"></iframe>
:::

## 设计规则的使用 （如何创建规则，不同网络应用规则） {#设计规则使用}

::: details

<iframe src="//player.bilibili.com/player.html?isOutside=true&aid=866433541&bvid=BV1MV4y1X7mC&cid=1065491847&p=1&autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" style="width: 100%; margin: auto; display: block; height: 800px"></iframe>
:::

## PCB如何阵列 {#阵}

::: details
文档教程：[编辑-阵列对象](https://prodocs.lceda.cn/cn/pcb/edit-array-objects/)

<iframe src="//player.bilibili.com/player.html?isOutside=true&aid=648809171&bvid=BV1Pe4y1K7u5&cid=924567445&p=1&autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" style="width: 100%; margin: auto; display: block; height: 800px"></iframe>
:::

## 等长网络组如何运用 {#等长网络组}

::: details
文档教程：[左边面板-网络-等长网络组](https://prodocs.lceda.cn/cn/pcb/design-equal-length-group-manager/)

<iframe src="//player.bilibili.com/player.html?isOutside=true&aid=353891628&bvid=BV1XX4y1Z7s3&cid=1065492042&p=1&autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" style="width: 100%; margin: auto; display: block; height: 800px"></iframe>
:::

## 单个元件焊盘无法选中如何处理 {#单焊盘选择}

::: details
点中该焊盘， 按TAB键，即可选中
:::

## 如何放置原点 {#放置原点}

::: details
文档教程：[放置-原点](https://prodocs.lceda.cn/cn/panel/place-canvas-origin/)
:::

## 如何放置异形焊盘 {#异形焊盘}

::: details
放置-异形焊盘
![图 237](/storage/images/cn/faq/pcb/pcb_20240912_174847.png)
![图 238](/storage/images/cn/faq/pcb/pcb_20240912_174937.png)
:::

## 无原理图绘制PCB如何自动生成网络 {#自动生成网络}

::: details
设置 PCB 通用 为自由导线分配网络的勾打上
![图 239](/storage/images/cn/faq/pcb/pcb_20240912_175010.png)
:::

## 怎么隐藏坐标轴的白线 {#坐标轴}

::: details
改颜色或者设置透明度
![图 240](/storage/images/cn/faq/pcb/pcb_20240912_175028.png)
:::

## 如何另存为epro格式？ {#epro文件}

::: details
文件-工程另存为本地
![图 241](/storage/images/cn/faq/pcb/pcb_20240912_175147.png)
:::

## 导线连接产生阻挡如何处理 {#忽略}

::: details
布线-布线模式-设置忽略
这样就不会产生阻挡，可以直接连接上
![图 242](/storage/images/cn/faq/pcb/pcb_20240912_175225.png)
连接后，可以再去检查DRC查看是什么原因导致没有连接上的
![图 243](/storage/images/cn/faq/pcb/pcb_20240912_175241.png)
![图 244](/storage/images/cn/faq/pcb/pcb_20240912_175247.png)
:::

## PCB的主题如何设置 {#PCB主题}

::: details
设置-PCB/封装-主题
图层颜色，透明度，边框颜色，边框线型都可设置
![图 245](/storage/images/cn/faq/pcb/pcb_20240912_175328.png)
:::

## PCB如何偏移 {#偏移}

::: details
文档教程：[布局-偏移](https://prodocs.lceda.cn/cn/pcb/layout-offset/)
:::

## 制版时候不显示丝印属性值 {#Hide}

::: details
点中元件，右边属性把值的参数前面的勾去掉，设置不显示，到时做出来的板子就不会有这个丝印
![图 249](/storage/images/cn/faq/pcb/pcb_20240913_100317.png)
:::

## 插件的元件和贴片元件如何分别设置发散和直连 {#铺铜连接}

::: details
顶部菜单 设计——设计规则 ，有分开插件焊盘与贴片焊盘的设置
![图 251](/storage/images/cn/faq/pcb/pcb_20240913_100443.png)
![picture 2](/storage/images/cn/faq/pcb/pcb_20260130_180042.png)
:::

## 如果把铺铜填充转为填充区域 {#铺铜转填充}

::: details

如果你希望把动态铺铜的形状转为填充区域，以便放在丝印层等，可以在铺铜填充的属性面板直接转为填充区域，再将填充区域的层进行切换即可。

操作如下：

1、在边框内绘制铺铜，保留铺铜孤岛

2、点击铺铜填充，需要点击左键两次

![](/storage/images/cn/faq/pcb/pcb_20240710_211316.jpg)

3、在右侧属性面板点击“转为填充区域”即可

![](/storage/images/cn/faq/pcb/pcb_20240710_211215.gif)
:::

## 铺铜填充设置透明度后，边缘有明显的线如何取消 {#铜边}

::: details
选中铺铜的轮廓 右侧栏关闭制造优化
![图 287](/storage/images/cn/faq/pcb/pcb_20240913_105658.png)
:::

## 铺铜是否保留孤岛 {#孤岛}

::: details
点中铺铜，右边属性面板设置是否保留孤岛
![图 360](/storage/images/cn/faq/pcb/pcb_20250228_174148.png)
:::

## 工程如何锁定与解锁？ {#工程锁定}

::: details
![图 253](/storage/images/cn/faq/pcb/pcb_20240913_100528.png)
![图 254](/storage/images/cn/faq/pcb/pcb_20240913_100534.png)
![图 255](/storage/images/cn/faq/pcb/pcb_20240913_100542.png)
![图 256](/storage/images/cn/faq/pcb/pcb_20240913_100550.png)
:::

## 导出step文件到SolidWorks匹配不上如何处理？{#导SW}

::: details
如果用SolidWorks打开step总是匹配不上，但是我们导出用cad-assistant查看位置是对的，这个时候需要
这样操作：
1、打开sw软件，关闭所有打开的文件；（Solidworks如果已经打开了旧的step文件，然后再打开新的step，它不会显示新的那个，还是会显示旧的，所以要关闭文件，再打开新的step）
2、在sw软件里选打开，找到step文件，打开，就正常了；
3、然后可点保存，保存为sw的装配体文件；
（注意：位置失常的、已经保存为装配体文件的，删掉就好了，不要去研究了）
![图 257](/storage/images/cn/faq/pcb/pcb_20240913_100622.png)
:::

## 快捷键设置 {#快捷键}

::: details
文档教程：[设置-快捷键](https://prodocs.lceda.cn/cn/introduction/hotkeys/)
:::

## 编辑器如何回到首页 {#首页}

::: details
文件-关闭全部
![图 258](/storage/images/cn/faq/pcb/pcb_20240913_102455.png)
:::

## 如何更新元件 {#更新元件}

::: details
设计-更新工程库
![图 259](/storage/images/cn/faq/pcb/pcb_20240913_102513.png)
:::

## 工程如何转移给成员或是团队 {#工转}

::: details
![图 260](/storage/images/cn/faq/pcb/pcb_20240913_102529.png)
![图 261](/storage/images/cn/faq/pcb/pcb_20240913_102536.png)
:::

## 设计规则如何设置阻焊扩展大小 {#阻焊扩展}

::: details
![图 265](/storage/images/cn/faq/pcb/pcb_20240913_102920.png)
:::

## PCB下单如何跳过drc检查报错 {#跳过drc检查}

::: details
![图 266](/storage/images/cn/faq/pcb/pcb_20240913_102958.png)
![图 267](/storage/images/cn/faq/pcb/pcb_20240913_103005.png)
:::

## 封装移动时如何设置仅移动焊盘 {#仅}

::: details
![图 269](/storage/images/cn/faq/pcb/pcb_20240913_103425.png)
![图 270](/storage/images/cn/faq/pcb/pcb_20240913_103449.png)
:::

## make点和测试点的区别 {#区1}

::: details
make点：smt机器定位用的，小批量、批量SMT对【工艺边、基准点】的要求：(https://docs.qq.com/doc/DS3plWE9YWGJmTUdM )

测试点：用来对芯片或者模块部分引脚外接测试使用
![图 271](/storage/images/cn/faq/pcb/pcb_20240913_103532.png)
:::

## PCB如何放置测试点 {#点}

::: details
放置-测试点
![图 275](/storage/images/cn/faq/pcb/pcb_20240913_104252.png)
:::

## 过孔直径默认大小设置 {#默孔}

::: details
![图 278](/storage/images/cn/faq/pcb/pcb_20240913_104427.png)
:::

## 如何多个原理图转多个PCB {#转多PCB}

::: details
不支持多个原理图选择转到某个PCB板子下
可以创建多个board板子，每个borad放一个原理图再转PCB
![图 280](/storage/images/cn/faq/pcb/pcb_20240913_104651.png)
![图 281](/storage/images/cn/faq/pcb/pcb_20240913_104728.png)
:::

## 绘制时是否输入动态框 {#动态}

::: details
![图 282](/storage/images/cn/faq/pcb/pcb_20240913_104748.png)
![图 283](/storage/images/cn/faq/pcb/pcb_20240913_104754.png)
:::

## 设置好了区域规则 ，检查DRC不是按区域规则检查如何解决 {#区域检查}

::: details
![图 284](/storage/images/cn/faq/pcb/pcb_20240913_104811.png)
:::

## 如何拆解边框线条与删除 {#拆解线条}

::: details
![图 285](/storage/images/cn/faq/pcb/pcb_20240913_104825.png)
![图 323](/storage/images/cn/faq/pcb/pcb_20241125_114456.png)

:::

## 吸附打开了但是依旧无法使用是什么原因？{#吸附使用}

::: details
可以在设置里面的吸附检查一下吸附距离，有可能是吸附距离变成了0，将它修改为默认的8mil就好了
![图 288](/storage/images/cn/faq/pcb/pcb_20240913_105716.png)
:::

## 无原理图怎么在PCB新增网络？{#PCB新增网络}

::: details
所有支持网络的对象均支持在属性面板手动新建网络
![图 289](/storage/images/cn/faq/pcb/pcb_20240913_105735.png)
:::

## 如何元件区域分布 {#元件区域分布}

::: details
![图 293](/storage/images/cn/faq/pcb/pcb_20240913_112347.png)
![图 295](/storage/images/cn/faq/pcb/pcb_20240913_112358.png)
![图 296](/storage/images/cn/faq/pcb/pcb_20240913_112405.png)
:::

## PCB线条如何添加节点 {#线条节点}

::: details
选中线条双击鼠标左键，或者是选中线条右键选择添加节点
![图 298](/storage/images/cn/faq/pcb/pcb_20240913_112444.png)
:::

## 等长布线的振幅只能设置最小值吗 我要设置最大值怎么办 {#等长布线振幅}

::: details
可以将最大值设置为最小值，当鼠标不超过最小值的幅度时 就会按最小值的高度生成等长线
![图 299](/storage/images/cn/faq/pcb/pcb_20240913_112506.png)
![图 300](/storage/images/cn/faq/pcb/pcb_20240913_112513.png)
:::

## 焊盘如何做长圆形钻孔 {#长圆形}

::: details
方形孔无法设置的，只能设置成槽孔
![图 301](/storage/images/cn/faq/pcb/pcb_20240913_112957.png)
:::

## 如何做无盘化孔（焊盘过孔内层不要孔）{#无盘化孔}

::: details
工具-移除未使用的焊盘
![图 302](/storage/images/cn/faq/pcb/pcb_20240913_113019.png)
:::

## 打开PCB文件没有反应如何处理 {#PCB反应}

::: details

- 1.请确保电脑有显卡，并且不是很老的显卡。因为打开PCB需要显卡的支持。
- 2.清除缓存，然后重新打开编辑器试试或退出登录。按F12弹窗里面清除缓存。
  ![图 303](/storage/images/cn/faq/pcb/pcb_20240913_113039.png)
- 3.如果是客户端，请使用谷歌浏览器并开始硬件加速。目前发现有些win7电脑安装客户端无法正常打开PCB，浏览器则正常。
  ![图 304](/storage/images/cn/faq/pcb/pcb_20240913_113101.png)
- 4.2.1后的版本做了检测，文件只读的状态下只能进入软件页面，无法进入编辑，选中文件右键点击属性，把只读取消勾选就可以进入编辑了。
  ![图 305](/storage/images/cn/faq/pcb/pcb_20240913_113115.png)
- 5.换个保存路径，原路径不能写入内容。
- 6.注意epro文件不可双击打开，直接导入。eprj才可以双击打开。
- 7.可能是直接把epro文件重名为eprj，导致无法打开，文件重命名改回去即可。

:::

## PCB文件卡如何处理 {#PCB文件卡}

::: details
 1.某个元素多了，可以在左侧栏-对象里面查看哪个元素数量多，比如1000多条或是几千条数据的，可以点中定位，删除掉元素再试试。
![图 306](/storage/images/cn/faq/pcb/pcb_20240913_113141.png)
2.如果是导入更新卡的话，用排除法在PCB上找数据异常的封装，方法：删除一半PCB再导入更新，能弹出确认变更信息说明数据异常的封装在这一半PCB上，撤回继续删除更新 ，直到找到异常数据的封装
3.PCB设置里面关闭实时显示和鼠标悬停4.清理缓存
:::

## 绘制单层PCB {#单层PCB}

::: details
https://prodocs.lceda.cn/cn/pcb/tools-layer-manager/#%E7%BB%98%E5%88%B6%E5%8D%95%E5%B1%82pcb
:::

## 想在顶层状态下也可以看清楚底层导线走向方便布线 {#透明度}

::: details
非激活层透明度设成0，快速的方式可以在层管理器里颜色配置直接切换成Altium designer

![图 310](/storage/images/cn/faq/pcb/pcb_20240913_114448.png)

![图 311](/storage/images/cn/faq/pcb/pcb_20240913_114454.png)
:::

## 关于USB封装放置板框注意事项

::: details
![图 312](/storage/images/cn/faq/pcb/pcb_20240913_114713.png)
:::

## 钻孔与钻孔之间间距报错了如何处理 {#钻孔}

::: details
钻孔与钻孔即使网络一样也会报错的，需检查下是否设计需求，如不影响

- 1.可以在在设计-设计规则-其他间距，把间距设置为0，则不显示该报错。
- 2.可以在设计-检查DRC-钻孔到钻孔的间距，则不显示该报错。
- 3.直接人工忽略该报错不处理![图 339](/storage/images/cn/faq/pcb/pcb_20241214_144619.png)

![图 338](/storage/images/cn/faq/pcb/pcb_20241214_144246.png)
:::

## FPC设计帮助文档 {#FPC设计}

::: details

文档教程：[FPC设计帮助文档](https://prodocs.lceda.cn/cn/pcb/place-fpc-stiffener/)
:::

## 彩色丝印帮助文档 {#彩色丝印}

::: details

文档教程：[彩色丝印帮助文档](https://prodocs.lceda.cn/cn/pcb/other-draw-colorful-silkscreen/)
视频教程：

<iframe src="//player.bilibili.com/player.html?isOutside=true&aid=900097126&bvid=BV1qP4y1f7pk&cid=818164581&p=1&autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" style="width: 100%; margin: auto; display: block; height: 800px"></iframe>

:::

## 3D预览没有看到挖掉的孔的原因 {#3D没有看到孔}

::: details
想预览可以看挖掉的孔，可以放置槽孔.
放板框软件识别上很难判断出来板框线是外框还是挖槽的，因为会有工艺边和其他一些板框线，如果粗暴处理为挖槽可能工艺边这些都显示异常了。
因此建议用户挖槽都统一用挖槽区域处理。
![图 200](/storage/images/cn/faq/pcb/pcb_20240912_114341.png)
:::

## 3D外壳如何绘制 {#3D外壳绘制}

::: details

<iframe src="//player.bilibili.com/player.html?isOutside=true&aid=230696681&bvid=BV1d8411S7kF&cid=1187976043&p=1&autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" style="width: 100%; margin: auto; display: block; height: 800px"></iframe>
:::

## 如何导出3D外壳文件 {#导出3D外壳文件}

::: details
文件-导出-3D外壳
![图 61](/storage/images/cn/faq/pcb/pcb_20240905_160949.png)
或是在3D预览里面也可导出![图 63](/storage/images/cn/faq/pcb/pcb_20240905_161445.png)
:::

## 3D模型如何更改大小，偏移与旋转角度 {#角度}

::: details
![图 328](/storage/images/cn/faq/pcb/pcb_20241126_163458.png)
:::

## 如何导出3D模型文件 {#导出3D模型}

::: details
导出方法：

- 顶部菜单 - 导出 - 3D文件（打开PCB文件）
  ![图 62](/storage/images/cn/faq/pcb/pcb_20240905_161345.png)
- STEP：导出 STEP 格式必须是 PCB 器件绑定的 3D 模型也是 STEP 格式的，否则导出的 STEP 将不带模型。
  OBJ：导出 OBJ 格式是一个压缩包，里面包含材质文件。可以使用 window10 自带的 3D 查看器预览。
- 支持导出：焊盘，丝印，过孔，槽孔。导出的是板子+模型。不支持单个模型导出。

:::

## 封装如何绑定3D模型？ {#绑定model}

::: details
![图 67](/storage/images/cn/faq/pcb/pcb_20240905_162325.png)
视频教程：[封装绑定模型]

<iframe src="//player.bilibili.com/player.html?isOutside=true&aid=730048535&bvid=BV1RD4y167ZY&cid=818164770&p=1&autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" style="width: 100%; margin: auto; display: block; height: 800px"></iframe>
## 3D模型如何更改大小，偏移与旋转角度
点中封装，右边属性进入3D模型管理器进行调整

![图 64](/storage/images/cn/faq/pcb/pcb_20240905_162010.png)
:::

## 3D预览没有板子如何设置 {#3D预览}

::: details
3D预览没有板子的话，请检查板框层是否已经闭合，导线之间需要端点闭合；是否有重叠的边框线段(一般出现在导入的PCB里面)。可以隐藏全部层后，只显示边框层查看，仔细检查每条线段。
![图 66](/storage/images/cn/faq/pcb/pcb_20240905_162219.png)
:::

## 在线模式如何添加3D模型 {#在线添3D模型}

::: details
文档教程：[添加3D模型](https://prodocs.lceda.cn/cn/3d-model/file-new-3d-model/)
:::

## 离线模式如何添加3d模型？ {#离3D}

::: details
文件-新建3D模型
![图 68](/storage/images/cn/faq/pcb/pcb_20240905_162715.png)
![图 69](/storage/images/cn/faq/pcb/pcb_20240905_162725.png)
![图 70](/storage/images/cn/faq/pcb/pcb_20240905_162733.png)
![图 71](/storage/images/cn/faq/pcb/pcb_20240905_171916.png)
:::

## 3D外壳打印下单 {#3D壳}

::: details
文档教程：[3D外壳打印下单视频教程](https://www.bilibili.com/video/BV1jP411W7e2/)
三维猴3D打印网址：https://www.sanweihou.com/
文件-导出-3D外壳文件
![图 73](/storage/images/cn/faq/pcb/pcb_20240905_172520.png)
![图 74](/storage/images/cn/faq/pcb/pcb_20240905_172528.png)
![图 75](/storage/images/cn/faq/pcb/pcb_20240905_172540.png)
![图 76](/storage/images/cn/faq/pcb/pcb_20240905_172548.png)
:::

## 如何从商城一键导出3D模型 {#D}
::: details
第一步，先查看元件编号
![图 386](/storage/images/cn/faq/pcb/pcb_20260125_154021.png)
第二步：登录专业版网页
https://pro.lceda.cn/editor

第三步：新建工程
![图 387](/storage/images/cn/faq/pcb/pcb_20260125_154510.png)
第四步：将该元件放置在PCB板子上
![图 388](/storage/images/cn/faq/pcb/pcb_20260125_154741.png)
第五步：文件-导出-3D文件
![图 389](/storage/images/cn/faq/pcb/pcb_20260125_154859.png)
不支持导出单独的3D模型文件，目前是将板子一起导出的
:::

## PCB如何设置部分不导出的3D模型 {#fo}
::: details
点中元件，右边属性面板-新增属性
![图 390](/storage/images/cn/faq/pcb/pcb_20260125_175113.png)
顶部菜单栏，文件-导出-3D文件
![图 391](/storage/images/cn/faq/pcb/pcb_20260125_175831.png)
:::

## 个人电脑的鼠标每次要滚动大了如何解决 {#鼠标}

::: details
这个是因为鼠标滚动行数大了，可以设置小一点
![图 329](/storage/images/cn/faq/pcb/pcb_20241127_102330.png)
![图 330](/storage/images/cn/faq/pcb/pcb_20241127_102358.png)
:::

## gerber文件里面把丝印层删除了 ，下单预览还有位号和封装丝印如何处理？ {#Silk screen}

::: details
自定义配置 不勾选元件属性和元件丝印
![图 331](/storage/images/cn/faq/pcb/pcb_20241127_102944.png)
:::

## 导出gerber失败 ! 选择的格式:整数4，小数2过小，如何处理 {#gerber3}

::: details
检查下画布原点没偏移的话，是有图元飘到很远的地方了，或者有导线长度非常长，导致gerber输出失败，需要找到很远的地方的图元删除掉
解决方法：

- 1、整体框选，剪切，然后CTRL+A全选，按delete删除，再粘贴
- 2、如果1方法不适用，则按K键，从右往左框选周边空白区域，看是否可以选中一些图元，选中后删除
- 3、如果不能框选到，则在左侧对象树，一个个点击，查看属性面板的坐标，如果有异常大的坐标数值，则直接按delete键删除这个图元
- 4、检查板框的原点，板框偏离原点过远就会导致精度不合适。可以全选画布对象，然后点击顶部菜单布局--偏移--绝对偏移，输入mil单位的坐标（-500000，-70000），最后点击确认。让板子偏移回原点附近后，就可以正常导出gerber。
- 5、或是文件——导出——gerber时，自定义设置尺寸为3：3
  ![图 349](/storage/images/cn/faq/pcb/pcb_20241223_172326.png)

:::

## 如何切换渲染引擎{#ra}
::: details
顶部菜单栏-设置-显示
![picture 4](/storage/images/cn/faq/pcb/pcb_20260130_191429.png)

:::
