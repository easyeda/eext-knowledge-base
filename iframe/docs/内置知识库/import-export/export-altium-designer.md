# 导出 Altium Designer

推荐使用[嘉立创EDA文件迁移助手](/cn/import-export/easyeda-pro-format-converter)进行格式转换。

## 免责声明

1. 因为格式设计和图元的不一样，无法保证导出的 Altium Designer 文件是完全一致（特别是文本大小与位置），请务必在 Altium Designer 打开后仔细检查，请勿未经检查直接下单，嘉立创EDA不保证没有任何错误产生！！！
2. 嘉立创EDA不承担因为库错误和格式转换的错误导致的任何损失！！！如不同意请不要进行Altium导出！！！
3. 如果你要下单 PCB，建议生成 Gerber 而不是导出 Altium 文件！！！
4. 请不要反复将你的原理图或PCB导出AD格式后又导入，这个操作可能会导致细节丢失。
5. 如果你检查导出的文件和原设计出入很大，请联系我们，我们会尽量修正。https://prodocs.lceda.cn/cn/faq/contact-us
6. 如果你是要导出库文件请确保在有显卡（打开PCB或封装需要显卡支持）的电脑用谷歌浏览器打开导出。

## 导出工程

嘉立创EDA支持导出 Altium Designer 文件，ASCII 5.0 格式。

入口：顶部菜单 - 文件 - 导出 - Altium Designer。 或：顶部菜单 - 导出 - Altium Designer

![图 1](/storage/images/cn/import-export/export-altium-designer/export-altium-designer_20240621_172123.png)

会根据当前工程的全部文档导出 Altium Designer 的文件格式，并打包在一个压缩包里面。

## 导出库文件

嘉立创EDA的封装库是免费使用，也是人为绘制，官方库也有可能有错误，如果发现错误请联系我们修复。

嘉立创EDA不保证每个库文件都是正确的。在使用前请务必自行检查！！！

嘉立创EDA不承担因为库错误导致的任何损失！！！

嘉立创EDA专业版支持直接在符号库和封装库直接导出 Altium Designer 格式。但是你可以通过导出工程的方式导出。

步骤：

1、在底部库，快捷键 S，搜索你需要导出的原理图库或封装库。如果是直接在立创商城打开的库界面，可以直接在文件菜单导出 Altium Designer

![图 6](/storage/images/cn/import-export/export-altium-designer/export-altium-designer_20240621_172124.png)

2、在库列表右键编辑打开。

![图 7](/storage/images/cn/import-export/export-altium-designer/export-altium-designer_20240621_172125.png)

3、然后在文件菜单 - 导出 Altium Designer 即可。

![图 5](/storage/images/cn/import-export/export-altium-designer/export-altium-designer_20240621_172126.png)

4、如果是系统库，你可以新建一个工程，把对应的库放在原理图或PCB中，再导出 Altium Designer 格式。

5、Altium Designer 打开原理图或PCB后，在：顶部菜单 - 设计 - 提取库文件，即可完成库提取。

## 注意事项

导出 Altium Designer 的图元支持情况

**1、原理图**

**1.1、支持图元情况**

| 专业版图元 {width="15%"} | 导出图元 {width="15%"} |                                       专业版图元样式{width="25%"}                                       |                                      导出后图元样式 {width="25%"}                                       |    说明 {width="20%"}    |
| :----------------------: | :--------------------: | :-----------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------: | :----------------------: |
|           元件           |          器件          | ![](/storage/images/cn/import-export/export-altium-designer/export-altium-designer_20241011_102508.jpg) | ![](/storage/images/cn/import-export/export-altium-designer/export-altium-designer_20241011_102542.jpg) |            -             |
|           导线           |           线           | ![](/storage/images/cn/import-export/export-altium-designer/export-altium-designer_20241011_102811.jpg) | ![](/storage/images/cn/import-export/export-altium-designer/export-altium-designer_20241011_102823.jpg) |            -             |
|           总线           |          总线          | ![](/storage/images/cn/import-export/export-altium-designer/export-altium-designer_20241011_102859.jpg) | ![](/storage/images/cn/import-export/export-altium-designer/export-altium-designer_20241011_102910.jpg) |            -             |
|         网络标签         |        网络标签        | ![](/storage/images/cn/import-export/export-altium-designer/export-altium-designer_20241011_102948.jpg) | ![](/storage/images/cn/import-export/export-altium-designer/export-altium-designer_20241011_102958.jpg) |            -             |
|         网络标识         |        电源端口        | ![](/storage/images/cn/import-export/export-altium-designer/export-altium-designer_20241011_103135.jpg) | ![](/storage/images/cn/import-export/export-altium-designer/export-altium-designer_20241011_103145.jpg) |            -             |
|         网络端口         |          端口          | ![](/storage/images/cn/import-export/export-altium-designer/export-altium-designer_20241011_103233.jpg) | ![](/storage/images/cn/import-export/export-altium-designer/export-altium-designer_20241011_103243.jpg) |            -             |
|        非连接标识        |  指示-通用No ERC标号   | ![](/storage/images/cn/import-export/export-altium-designer/export-altium-designer_20241011_103410.jpg) | ![](/storage/images/cn/import-export/export-altium-designer/export-altium-designer_20241011_103419.jpg) |            -             |
|           探针           |          器件          | ![](/storage/images/cn/import-export/export-altium-designer/export-altium-designer_20241011_104112.jpg) | ![](/storage/images/cn/import-export/export-altium-designer/export-altium-designer_20241011_104121.jpg) |            -             |
|           折线           |      绘图工具-线       | ![](/storage/images/cn/import-export/export-altium-designer/export-altium-designer_20241011_104150.jpg) | ![](/storage/images/cn/import-export/export-altium-designer/export-altium-designer_20241011_104208.jpg) |            -             |
|           圆弧           |      绘图工具-弧       | ![](/storage/images/cn/import-export/export-altium-designer/export-altium-designer_20241011_104255.jpg) | ![](/storage/images/cn/import-export/export-altium-designer/export-altium-designer_20241011_104305.jpg) |            -             |
|        贝塞尔曲线        |  绘图工具-贝塞尔曲线   | ![](/storage/images/cn/import-export/export-altium-designer/export-altium-designer_20241011_104344.jpg) | ![](/storage/images/cn/import-export/export-altium-designer/export-altium-designer_20241011_104353.jpg) |            -             |
|           圆形           |      绘图工具-圆       | ![](/storage/images/cn/import-export/export-altium-designer/export-altium-designer_20241011_104631.jpg) | ![](/storage/images/cn/import-export/export-altium-designer/export-altium-designer_20241011_104640.jpg) |            -             |
|           椭圆           |     绘图工具-椭圆      | ![](/storage/images/cn/import-export/export-altium-designer/export-altium-designer_20241011_104747.jpg) | ![](/storage/images/cn/import-export/export-altium-designer/export-altium-designer_20241011_104756.jpg) |            -             |
|           矩形           |     绘图工具-矩形      | ![](/storage/images/cn/import-export/export-altium-designer/export-altium-designer_20241011_104830.jpg) | ![](/storage/images/cn/import-export/export-altium-designer/export-altium-designer_20241011_104839.jpg) |            -             |
|           文本           |       文本字符串       | ![](/storage/images/cn/import-export/export-altium-designer/export-altium-designer_20241011_105111.jpg) | ![](/storage/images/cn/import-export/export-altium-designer/export-altium-designer_20241011_105119.jpg) |            -             |
|           表格           |      绘图工具-线       | ![](/storage/images/cn/import-export/export-altium-designer/export-altium-designer_20241011_105203.jpg) | ![](/storage/images/cn/import-export/export-altium-designer/export-altium-designer_20241011_105211.jpg) | 转换后由多段折线组成网格 |

**1.2、不支持图元/功能类型：**

| 专业版图元/功能 |          图元/功能描述           |                                          说明                                          |
| :-------------: | :------------------------------: | :------------------------------------------------------------------------------------: |
|    短接标识     |       用于短接两个不同网络       |                                     AD中没有该图元                                     |
|      图片       |                -                 |                           AD图片保存位置为本地，暂不支持导出                           |
|      组合       |           对应AD的联合           | 后续版本中支持导出联合信息，但由于AD联合名称并未存储在工程数据中，无法支持组合名称导出 |
|    元件屏蔽     | 屏蔽类型包括“加入BOM”和“转到PCB” |                                      暂不支持导出                                      |

**1.3、图元差异**

**1.3.1、线宽转换差异**

-   <b>包括对象：</b>导线、总线、折线、圆弧、贝塞尔曲线、圆形、椭圆、矩形、表格。
-   <b>差异说明：</b>AD原理图图元线宽大部分只支持Smallest\*\*、Small、Medium、Large四种，不支持的线宽导出后会转为最接近的线宽。

**1.3.2、线型转换差异**

-   <b>包括对象：</b>导线、总线、折线、圆弧、贝塞尔曲线、圆形、椭圆、矩形。
-   <b>差异说明：</b>暂时只支持导出实线，其他线型导出后转换为实线。

**1.3.3、字体转换差异**

-   <b>包括对象：</b>属性、属性值、名称、网络标签、文本。
-   <b>差异说明：</b><br>
    <b>a、</b>导出后字体可能不同，同时由于字体的差异可能会造成图元轻微的偏移；<br>
    <b>b、</b>如果导出是相同字体，由于字体显示的逻辑不同，无法完全和原文件一致，可能会有位置偏移和大小差异；<br>
    <b>c、</b>暂不支持文本样式（加粗、斜体、下划线）的导出。

**1.3.4、连接点样式转换差异**

-   <b>包括对象：</b>元件（元件引脚）、导线、网络标识、网络标签、网络端口、探针。
-   <b>差异说明：</b><br>
<b>a、</b> 由于图元自身差异，转换后部分元件连接点样式存在差异。
<div style="display: flex; justify-content: center;">
  <figure style="width: 25%; margin: 0 10px;">
    <img src="/storage/images/cn/import-export/export-altium-designer/export-altium-designer_20241011_111526.jpg"  style="max-width: 70%; display: block; margin: 0 auto;">
    <figcaption style="text-align: center; font-size: smaller">专业版引脚连接点样式</figcaption>
  </figure>
  <figure style="width: 25%; margin: 0 10px;">
    <img src="/storage/images/cn/import-export/export-altium-designer/export-altium-designer_20241011_111545.jpg"  style="max-width: 47%; display: block; margin: 0 auto;">
    <figcaption style="text-align: center; font-size: smaller">导出后引脚连接点样式</figcaption>
  </figure>
  <figure style="width: 25%; margin: 0 10px;">
    <img src="/storage/images/cn/import-export/export-altium-designer/export-altium-designer_20241011_111606.jpg"  style="max-width: 61%; display: block; margin: 0 auto;">
    <figcaption style="text-align: center; font-size: smaller">专业版网络标签连接点样式</figcaption>
  </figure>
  <figure style="width: 25%; margin: 0 10px;">
    <img src="/storage/images/cn/import-export/export-altium-designer/export-altium-designer_20241011_111620.jpg"  style="max-width: 77%; display: block; margin: 0 auto;">
    <figcaption style="text-align: center; font-size: smaller">导出后网络标签连接点样式</figcaption>
  </figure>
</div>

**1.3.5、填充转换差异**

-   <b>包括对象：</b>折线、圆弧、贝塞尔曲线、圆、表格。
-   <b>差异说明：</b>以上图元暂不支持导出填充。

**1.3.6、元件转换差异**

-   元件为多符号图元组成的符合图元，任何符号图元差异均可能造成元件的转换差异；
-   AD不支持显示基础属性名称，转换后仅显示属性值；
-   部分属性值转换后未显示；
<div style="display: flex; justify-content: center;">
  <figure style="width: 60%; margin: 0 10px;">
    <img src="/storage/images/cn/import-export/export-altium-designer/export-altium-designer_20241011_114609.jpg"  style="max-width: 70%; display: block; margin: 0 auto;">
    <figcaption style="text-align: center; font-size: smaller;">专业版符号属性名称和属性值</figcaption>
  </figure>
  <figure style="width: 40%; margin: 0 10px;">
    <img src="/storage/images/cn/import-export/export-altium-designer/export-altium-designer_20241011_114625.jpg"  style="max-width: 50%; display: block; margin: 0 auto; ">
    <figcaption style="text-align: center; font-size: smaller;">导出后</figcaption>
  </figure>
</div>

**1.3.7、网络标签转换差异**

-   转换后图元样式存在差异；
-   导出后保护地的图元样式会转换为模拟地，后续会进行修复；
-   部分情况下VCC会在转换后丢失，后续会进行修复。

<div style="display: flex; justify-content: center;">
  <figure style="margin: 0 10px;">
    <img src="/storage/images/cn/import-export/export-altium-designer/export-altium-designer_20241011_115406.jpg"  style="max-width: 80%; display: block; margin: 0 auto;">
    <figcaption style="text-align: center; font-size: smaller">专业版网络标识</figcaption>
  </figure>
  <figure style="margin: 0 10px;">
    <img src="/storage/images/cn/import-export/export-altium-designer/export-altium-designer_20241011_115422.jpg"  style="max-width: 80%; display: block; margin: 0 auto;">
    <figcaption style="text-align: center; font-size: smaller">导出后的电源端口</figcaption>
  </figure>
</div>

**2、PCB**
**2.1、支持图元类型**

| AD图元{width="15%"} | 导入后{width="15%"} |                                         AD图元样式{width="25%"}                                         |                                      转换后图元样式 {width="25%"}                                       |                                                        说明{width="20%"}                                                        |
| :-----------------: | :-----------------: | :-----------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------: |
|        元件         |        器件         | ![](/storage/images/cn/import-export/export-altium-designer/export-altium-designer_20241011_120217.jpg) | ![](/storage/images/cn/import-export/export-altium-designer/export-altium-designer_20241011_120229.jpg) |                                                                -                                                                |
|        过孔         |        过孔         | ![](/storage/images/cn/import-export/export-altium-designer/export-altium-designer_20241011_120253.jpg) | ![](/storage/images/cn/import-export/export-altium-designer/export-altium-designer_20241011_120302.jpg) |                                                        图元样式存在差异                                                         |
|      异形焊盘       |     Region、Pad     | ![](/storage/images/cn/import-export/export-altium-designer/export-altium-designer_20241011_120342.jpg) | ![](/storage/images/cn/import-export/export-altium-designer/export-altium-designer_20241011_120350.jpg) |                                                                -                                                                |
|        板框         |       Keepout       | ![](/storage/images/cn/import-export/export-altium-designer/export-altium-designer_20241011_120437.jpg) | ![](/storage/images/cn/import-export/export-altium-designer/export-altium-designer_20241011_120446.jpg) | AD没有板框图元，导出后转为Board Outline Layer的Keepout，限制包括过孔Via、走线Track、填充Copper、贴片焊盘SMD Pad、插件焊盘TH Pad |
|      填充区域       |       Region        | ![](/storage/images/cn/import-export/export-altium-designer/export-altium-designer_20241011_120525.jpg) | ![](/storage/images/cn/import-export/export-altium-designer/export-altium-designer_20241011_120534.jpg) |                                                                -                                                                |
|      铺铜区域       |        铺铜         | ![](/storage/images/cn/import-export/export-altium-designer/export-altium-designer_20241011_120605.jpg) | ![](/storage/images/cn/import-export/export-altium-designer/export-altium-designer_20241011_120615.jpg) |                             PCB的铺铜填充不支持导出，导出后需要在 Altium Designer 手动重建全部铺铜                              |
|      挖槽区域       |   Keepout-Region    | ![](/storage/images/cn/import-export/export-altium-designer/export-altium-designer_20241011_120651.jpg) | ![](/storage/images/cn/import-export/export-altium-designer/export-altium-designer_20241011_120700.jpg) |                                             转为多层的Keepout-Region，无限制对象。                                              |
|      约束区域       |   Keepout-Region    | ![](/storage/images/cn/import-export/export-altium-designer/export-altium-designer_20241011_120733.jpg) | ![](/storage/images/cn/import-export/export-altium-designer/export-altium-designer_20241011_120742.jpg) |                                            转为对应层的Keepout-Region，无限制对象。                                             |
|      禁止区域       |   Keepout-Region    | ![](/storage/images/cn/import-export/export-altium-designer/export-altium-designer_20241011_120816.jpg) | ![](/storage/images/cn/import-export/export-altium-designer/export-altium-designer_20241011_120826.jpg) |                                 由于禁止区域的禁止选项与Keepout的限制对象存在差异，暂时未导出。                                 |
|        折线         |        Track        | ![](/storage/images/cn/import-export/export-altium-designer/export-altium-designer_20241011_120924.jpg) | ![](/storage/images/cn/import-export/export-altium-designer/export-altium-designer_20241011_134627.jpg) |                                                                -                                                                |
|        圆弧         |         Arc         | ![](/storage/images/cn/import-export/export-altium-designer/export-altium-designer_20241011_121009.jpg) | ![](/storage/images/cn/import-export/export-altium-designer/export-altium-designer_20241011_121021.jpg) |                                                                -                                                                |
|       测试点        |         Pad         | ![](/storage/images/cn/import-export/export-altium-designer/export-altium-designer_20241011_133938.jpg) | ![](/storage/images/cn/import-export/export-altium-designer/export-altium-designer_20241011_133949.jpg) |                                                                -                                                                |
|        补强         |       Region        | ![](/storage/images/cn/import-export/export-altium-designer/export-altium-designer_20241011_134043.jpg) | ![](/storage/images/cn/import-export/export-altium-designer/export-altium-designer_20241011_134055.jpg) |                                                转为机械2层Region，类型为铜Copper                                                |
|        文本         |       字符串        | ![](/storage/images/cn/import-export/export-altium-designer/export-altium-designer_20241011_134217.jpg) | ![](/storage/images/cn/import-export/export-altium-designer/export-altium-designer_20241011_134228.jpg) |                                                                -                                                                |
|        图片         |        器件         | ![](/storage/images/cn/import-export/export-altium-designer/export-altium-designer_20241011_134311.jpg) | ![](/storage/images/cn/import-export/export-altium-designer/export-altium-designer_20241011_134321.jpg) |                               非原图图片作为元件导出，由于AD不支持彩色丝印，因此原图不支持导出。                                |
|      长度尺寸       |        尺寸         | ![](/storage/images/cn/import-export/export-altium-designer/export-altium-designer_20241011_134400.jpg) | ![](/storage/images/cn/import-export/export-altium-designer/export-altium-designer_20241011_134410.jpg) |                                                   导出后尺寸图元样式存在差异                                                    |
|    堆叠表/钻孔表    |    导线和字符串     |                                                    -                                                    |                                                    -                                                    |                             利用导线和字符串组合成复合图元导出，表格边框为导线，文本内容为字符串。                              |
|       内电层        |       内电层        |                                                    -                                                    |                                                    -                                                    |                                       PCB的内电层区域导出不能完全一致，需要手动调整重建。                                       |

<b>注：</b>PCB的一些图层无法准确找到 Altium 对应的图层，会导出在更多机械层中。

**2.2、不支持图元类型：**

|  专业版图元/功能  |                                      图元/功能描述                                       |                                           说明                                           |
| :---------------: | :--------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------: |
|      3D外壳       | 包括边框、螺丝柱、侧面基准线、侧面挖槽区域、顶面/底面挖槽区域、侧面实体、顶面/底面实体。 |                               AD中不支持该图元，无法导出。                               |
|     彩色丝印      |                                  包括丝印颜色、彩色图片                                  |               AD不支持彩色丝印，导出后丝印颜色丢失，不支持导出彩色图。片。               |
| 角度尺寸/半径尺寸 |                                            -                                             |                             图元样式差别较大，暂不支持导出。                             |
|     铺铜填充      |                                 铺铜区域中的铺铜填充区域                                 |         PCB的铺铜填充不支持导出，导出后需要在 Altium Designer 手动重建全部铺铜。         |
|       组合        |                                      对应AD中的联合                                      | 后续版本中支持导出联合信息，但由于AD联合名称并未存储在工程数据中，无法支持组合名称导出。 |
|       埋孔        |                                            -                                             |                                   导出后变成铺铜过孔。                                   |

**2.3、图元差异:**

**2.3.1、字体转换差异:**

-   <b>包括对象：</b>属性、属性值、名称、尺寸、文本
-   <b>差异说明：</b><br>
    <b>a、</b>导出后字体可能不同，同时由于字体的差异可能会造成图元轻微的偏移；<br>
    <b>b、</b>如果导出是相同字体，由于字体显示的逻辑不同，无法完全和原文件一致，可能会有位置偏移和大小差异。<br>

**2.3.2、元件转换差异**

-   元件为多封装图元组成的符合图元，任何封装图元差异均可能造成元件的转换差异；<br>
-   AD不支持显示基础属性名称；<br>
-   除位号外属性值导出后可能会造成丢失或显示异常。

<div style="display: flex; justify-content: space-between;">
    <div style="width: 50%; text-align: center;">
        <img src="/storage/images/cn/import-export/export-altium-designer/export-altium-designer_20241011_140447.jpg" style="width: 80%; margin: 0 auto;" >
        <figcaption style="text-align: center; font-size: smaller">专业版封装属性名称和属性值</figcaption>
    </div>
    <div style="width: 50%; text-align: center; margin: 0 10px;">
        <img src="/storage/images/cn/import-export/export-altium-designer/export-altium-designer_20241011_140504.jpg" style="width: 64%; display: block; margin: 0 auto;">
        <figcaption style="text-align: center; font-size: smaller">导出后</figcaption>
    </div>
</div>

**2.3.3、异形焊盘转换差异**

-   AD不支持异形焊盘，异形焊盘导出为一普通焊盘和填充区域组成的复合图元，异形焊盘中的阻焊和助焊拓展由填充区域实现。
<div style="display: flex; justify-content: center;">
  <figure style="margin: 0 10px;">
    <img src="/storage/images/cn/import-export/export-altium-designer/export-altium-designer_20241011_140813.jpg"  style="max-width: 86%; display: block; margin: 0 auto;">
    <figcaption style="text-align: center; font-size: smaller">专业版中异形焊盘</figcaption>
  </figure>
  <figure style="margin: 0 10px;">
    <img src="/storage/images/cn/import-export/export-altium-designer/export-altium-designer_20241011_140830.jpg"  style="max-width: 70%; display: block; margin: 0 auto;">
    <figcaption style="text-align: center; font-size: smaller">导出后</figcaption>
  </figure>
</div>

**2.4、设计规则**

**2.4.1、设计规则导出对照表：**

<table style="background-color: gray; width:100%; text-align: center;" >
  <tr>
    <th colspan="2" style="text-align: center;">专业版中的设计规则</th>
    <th style="text-align: center">导入后对应设计规则</th>
    <th style="text-align: center">说明</th>
  </tr>
  <tr style="background-color: white;">
    <td style="width:10%" rowspan="2">间距</td>
    <td style="width:12%"> 安全间距</td>
    <td style="width:33%">Electrical-Clearance</td>
    <td style="width:35% ">-</td>
  </tr>
  <tr style="background-color: white;">
    <td>其他间距</td>
    <td>-</td>
    <td>后续会支持Hole To Hole Clearance的导入。</td>
  </tr>
  <tr style="background-color: white;">
    <td rowspan="5">物理</td>
    <td>导线</td>
    <td>Routing-Width</td>
    <td>-</td>
  </tr>
  <tr style="background-color: white;">
    <td>网络长度</td>
    <td>-</td>
    <td>-</td>
  </tr>
  <tr style="background-color: white;">
    <td>差分对</td>
    <td>Routing-Differential Pairs Routing</td>
    <td>专业版不同层暂不支持设置不同的差分对规则，导出后所有布线层的差分对设计规则一致。导出的最大间隙为默认间隙。</td>
  </tr>
  <tr style="background-color: white;">
    <td>盲埋孔</td>
    <td>-</td>
    <td>-</td>
  </tr>
  <tr style="background-color: white;">
    <td>过孔尺寸</td>
    <td>Routing-Routing Via Style</td>
    <td>-</td>
  </tr>
  <tr style="background-color: white;">
    <td rowspan="3">平面</td>
    <td rowspan="2">内电层</td>
    <td>Plane-Power Plane Connect Style</td>
    <td>AD不支持设置发散角度，导出后为45°发散角度。</td>
  </tr>
  <tr style="background-color: white;">
    <td>Routing-RoutingLayers</td>
    <td>内电层导出后为不允许布线层。</td>
  </tr>
  <tr style="background-color: white;">
    <td>铺铜</td>
    <td>Plane-Polygon Connect Style</td>
    <td>暂时只导出简单约束设计规则，后续会支持高级约束设计规则导出。</td>
  </tr>
  <tr style="background-color: white;">
    <td rowspan="2">拓展</td>
    <td>阻焊拓展</td>
    <td>Mask-Solder Mask Expansion</td>
    <td>外扩约束数据采用焊盘外扩约束数据。</td>
  </tr>
  <tr style="background-color: white;">
    <td>助焊拓展</td>
    <td>Mask-Paste Mask Expansion</td>
    <td>外扩约束数据采用焊盘顶层外扩约束数据，使用范围为SMD焊盘使用助焊层。</td>
  </tr>
  <tr style="background-color: white;">
    <td>扇出</td>
    <td>-</td>
    <td>-</td>
    <td>规则差异较大，暂不支持导出。</td>
  </tr>
</table>

**2.4.2、安全间距导出对照表：**

| 专业版中图元  | 导出后对应AD图元 |                        说明                         |
| :-----------: | :--------------: | :-------------------------------------------------: |
|       -       |       Arc        | 导出后Arc到所有图元的安全间距取线条到线条的安全间距 |
|     导线      |      Track       |                          -                          |
|   贴片焊盘    |     SMD Pad      |                          -                          |
|   插件焊盘    |      TH Pad      |                          -                          |
|     过孔      |       Via        |                          -                          |
| 填充区域/泪滴 |       Fill       |                          -                          |
|   挖槽区域    |      Region      |                          -                          |
|     线条      |       Poly       |                          -                          |
|   文本/图片   |       Text       |                          -                          |
|     板框      |        -         |                   后续版本中支持                    |
|     钻孔      |       Hole       |                          -                          |
