# 导入Altium Designer

嘉立创EDA专业版支持导入Altium Designer。

推荐使用[嘉立创EDA文件迁移助手](/cn/import-export/easyeda-pro-format-converter)进行格式转换。

:::warning 注意

- **因格式和图元设计不一致，图元导入后可能会有一定差异，请仔细检查。具体差异请查看帮助文档。**
- **嘉立创EDA不承担任何因格式转换差异产生的损失，如不同意请不要导入。**

:::

## 导入Altium工程文件

1、在 Altium Designer 打开原理图和 PCB，在“文件 - 另存为”，选择“Advanced Schematic ascii(\*.SchDoc)”或“PCB ASCII File(\*.PcbDoc)”

![](/storage/images/en/import-export/import-altium-designer/import-altium-designer_20240621_172122.png)

2、把导出原理图和PCB文件打包成压缩包 ZIP 格式。压缩格式只支持 zip。

注意：也支持单独原理图或者PCB导入，但是单独原理图导入无法自动绑定封装，需要导入后手动绑定。

3、在专业版开始页 - 导入Altium进行导入。
![图 3](/storage/images/cn/import-export/import-altium-designer/import-altium-designer_20240621_172123.png)
![图 1](/storage/images/cn/import-export/import-altium-designer/import-altium-designer_20240621_172124.png)

点击确定后选择导入的文件。

导入的时候可以根据需要选择不同的选项。
![图 2](/storage/images/cn/import-export/import-altium-designer/import-altium-designer_20240621_172125.png)

选项：

- 导入文件
- 提取库文件
- 导入文件并提取库

过孔阻焊扩展：

- 全部默认盖油。会强制把全部过孔都设置为盖油（阻焊扩展设置为-1000）
- 跟随原设置。会根据原本AD文件里面过孔的阻焊参数设置。

边框来源：

- 从Keepout层。很多用户使用keepout层绘制边框，所以默认该层作为边框。
- 从机械层1。选择机械层1时，闭合的keepout层将转为禁止区域，未闭合的将转到机械层。

## 批量导入 Altium 文件 {#批量}

请参考下面的方法。

1、下载 AltiumScript 脚本。
1）下载[嘉立创EDA文件迁移助手](/cn/import-export/easyeda-pro-format-converter)
2）或下载 [export-altium-design.zip](https://image.lceda.cn/files/extensions/altium/export-altium-design_v1.9.1.zip)

2、解压后，在 Altium Design 打开 export-altium-design.PrjScr 工程，太低版本 AD 可能无法运行，请自行验证。
![图 7](/storage/images/en/import-export/import-altium-designer/import-altium-designer_20240621_172131.png)

3、在顶部菜单 - 文件或DXP - 运行脚本（File/DXP - Run Script）打开脚本对话框

4、选择需要运行的脚本名称，点击运行即可。

convert-design-to-ascii.js：转换选择的原理图和PCB文件为ASCII格式

convert-library-to-ascii.js：转换选择的原理图库和PCB库文件为ASCII格式

place-footprint-to-pcb.js: 把封装放在PCB导出二进制的PCB文件

5、运行脚本后，脚本会自动创原理图或PCB文件，把当前安装的库文件里面的库一个个放在文档里面。期间可能多次弹窗，需要手动点确认继续。
![图 5](/storage/images/en/import-export/import-altium-designer/import-altium-designer_20240621_172132.png)

6、完成后，将在自定义的输出目录下找到自动生成的 ASCII 文件。

7、把生成的原理图和 PCB 文件一起压缩到 zip 压缩包后在嘉立创EDA导入，并选择提取库或者导入文件即可。

## 导入Altium库文件 {#AD库}

因为AD的库文件是加密的文件，不支持直接导入提取，需要通过文件提取的方式。批量提取请看下面部分。

1、新建一个原理图或PCB

2、把原理图库或封装库一个个拖动放在画布中

3、保存后，把原理图或者PCB另存为ASCII格式文档，参照上面的截图

4、把生成的原理图和 PCB 文件一起压缩到 zip 压缩包后在嘉立创EDA导入，并选择提取库。

5、提取库的时候选择勾选需要的器件和封装，即可导入库文件。
![图 3](/storage/images/cn/import-export/import-altium-designer/import-altium-designer_20240621_172126.png)

5、导入后在“底部面板(快捷键S) - 元件库 - 器件 - 个人”处找到。
![图 4](/storage/images/cn/import-export/import-altium-designer/import-altium-designer_20240621_172127.png)

## 常见问题

1、导入AD原理图出现中文乱码

在 AD17 以下的版本，另存为的 ASCII 文件编码可能是 GBK2312，需要把 ASCII 文件的编码由 GBK2312 转为 UTF-8。可以使用文本编辑器另存为 UTF-8 编码的文件。

方法：

- 用 AD17 另存为 ASCII 文件，其默认是 UTF-8 编码

- 或者用系统的记事本打开 ASCII 文件，另存为时选择 UTF-8 编码。其他文本编辑器也有相应的编码转换功能。
  ![picture 1](/storage/images/en/import-export/import-altium-designer/import-altium-designer_20240621_172126.png)

如果文本编码转为 UTF-8 后，用文本编辑器查看内容仍有乱码字符，那么导入后也会是乱码，请先在文本编辑器修正后再导入。

2、导入AD文件后存在导线和器件引脚没有对齐格点，或者引脚偏了

- 先在 Altium Designer 设置原理图的单位为英制mil，在：查看菜单 - 切换单位
  ![图 7](/storage/images/en/import-export/import-altium-designer/import-altium-designer_20240621_172127.png)

- 然后画布右键菜单或系统设置：选项 - 网格 - 设置显示网格，电气网格，吸附网格为 100mil，切换网格为 100mil
  ![图 8](/storage/images/en/import-export/import-altium-designer/import-altium-designer_20240621_172128.png)
  ![图 9](/storage/images/en/import-export/import-altium-designer/import-altium-designer_20240621_172129.png)

- 全选原理图 CTRL + A ，使用编辑菜单：编辑 - 对齐 - 对齐网格功能。检查断开或者不对的地方修正。
  ![图 10](/storage/images/en/import-export/import-altium-designer/import-altium-designer_20240621_172130.png)

- 另存为 ASCII 再导入

3、导入后封装尺寸会变。

这个是因为导入的PCB有同名的封装，但是封装尺寸是不一样的，导入的时候会在底部日志提示封装重名，只取其中一个作为模板导入。

解决方法：建议手动在AD修改掉同名不同尺寸的封装名，确保封装名不重复。

## 导入前后差异

格式转换的图元支持情况

**原理图/元件库**

**支持图元类型：**

| AD图元{width="15%"} | 导入后{width="15%"} | AD图元样式{width="25%"}                                                                                 | 转换后图元样式 {width="25%"}                                                                                 | 说明{width="20%"}                                            |
| :------------------ | :------------------ | :------------------------------------------------------------------------------------------------------ | :----------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------- |
| 总线                | 总线                | ![](/storage/images/cn/import-export/import-altium-designer/import-altium-designer_20241010_121210.jpg) | ![](/storage/images/cn/import-export/import-altium-designer/import-altium-designer_20241010_134104.jpg)      |                                                              |
| 总线入口            | Bus Entry           | ![](/storage/images/cn/import-export/import-altium-designer/import-altium-designer_20241010_134717.jpg) | ![](/storage/images/cn/import-export/import-altium-designer/import-altium-designer_20241010_134813.jpg)      | 暂不支持悬空Bus Entry导入。                                  |
| 器件                | 符号                | ![](/storage/images/cn/import-export/import-altium-designer/import-altium-designer_20241010_140134.jpg) | ![](/storage/images/cn/import-export/import-altium-designer/import-altium-designer_20241010_140159.jpg)      |                                                              |
| 电源端口            | 网络标识            | ![](/storage/images/cn/import-export/import-altium-designer/import-altium-designer_20241010_140659.jpg) | ![](/storage/images/cn/import-export/import-altium-designer/import-altium-designer_20241010_140738.jpg)      |                                                              |
| 线                  | 导线                | ![](/storage/images/cn/import-export/import-altium-designer/import-altium-designer_20241010_140859.jpg) | ![](/storage/images/cn/import-export/import-altium-designer/import-altium-designer_20241010_140922.jpg)      |                                                              |
| 网络标签            | 网络标签            | ![](/storage/images/cn/import-export/import-altium-designer/import-altium-designer_20241010_170725.jpg) | ![](/storage/images/cn/import-export/import-altium-designer/import-altium-designer_20241010_170744.jpg)      | AD中的网络标签连接点为浅灰色，转换后专业版为蓝色十字。       |
| 端口                | 网络端口            | ![](/storage/images/cn/import-export/import-altium-designer/import-altium-designer_20241010_141633.jpg) | ![](/storage/images/cn/import-export/import-altium-designer/import-altium-designer_20241010_141657.jpg)      |                                                              |
| 离图连接器          | 网络标识            | ![](/storage/images/cn/import-export/import-altium-designer/import-altium-designer_20241010_141758.jpg) | ![](/storage/images/cn/import-export/import-altium-designer/import-altium-designer_20241010_141839.jpg)      | 专业版暂不支持离图连接器，导入后转换为圆形/三角形网络标识。  |
| 页面符/图纸入口     | 模块符号/引脚       | ![](/storage/images/cn/import-export/import-altium-designer/import-altium-designer_20241010_142141.jpg) | ![](/storage/images/cn/import-export/import-altium-designer/import-altium-designer_20241010_142220.jpg)      | 专业版暂不支持图纸入口，导入后转换为引脚。                   |
| 文本字符串          | 文本                | ![](/storage/images/cn/import-export/import-altium-designer/import-altium-designer_20241010_142417.jpg) | ![](/storage/images/cn/import-export/import-altium-designer/import-altium-designer_20241010_142443.jpg)      |                                                              |
| 文本框/注释         | 文本                | ![](/storage/images/cn/import-export/import-altium-designer/import-altium-designer_20241010_142651.jpg) | ![](/storage/images/cn/import-export/import-altium-designer/import-altium-designer_20241010_142727.jpg)      | 专业版暂不支持文本框和注释，导入后均转换为文本。             |
| 绘图工具-弧         | 圆弧                | ![](/storage/images/cn/import-export/import-altium-designer/import-altium-designer_20241010_142850.jpg) | ![](/storage/images/cn/import-export/import-altium-designer/import-altium-designer_20241010_142912.jpg)      |                                                              |
| 绘图工具-圆圈       | 圆形                | ![](/storage/images/cn/import-export/import-altium-designer/import-altium-designer_20241010_143004.jpg) | ![](/storage/images/cn/import-export/import-altium-designer/import-altium-designer_20241010_143022.jpg)      |                                                              |
| 绘图工具-椭圆弧     | 折线                | ![](/storage/images/cn/import-export/import-altium-designer/import-altium-designer_20241010_143113.jpg) | ![](/storage/images/cn/import-export/import-altium-designer/import-altium-designer_20241010_143137.jpg)      | 专业版暂不支持椭圆弧，导入后转换为多段折线。                 |
| 绘图工具-线         | 折线                | ![](/storage/images/cn/import-export/import-altium-designer/import-altium-designer_20241010_143516.jpg) | ![](/storage/images/cn/import-export/import-altium-designer/import-altium-designer_20241010_143534.jpg)      |                                                              |
| 绘图工具-矩形       | 矩形                | ![](/storage/images/cn/import-export/import-altium-designer/import-altium-designer_20241010_143633.jpg) | ![](/storage/images/cn/import-export/import-altium-designer/import-altium-designer_20241010_143649.jpg)      | 专业版矩形暂不支持Transparent操作。                          |
| 绘图工具-圆角矩形   | 矩形                | ![](/storage/images/cn/import-export/import-altium-designer/import-altium-designer_20241010_143926.jpg) | ![](/storage/images/cn/import-export/import-altium-designer/import-altium-designer_20241010_143949.jpg)      |                                                              |
| 绘图工具-多边形     | 折线                | ![](/storage/images/cn/import-export/import-altium-designer/import-altium-designer_20241010_144122.jpg) | ![](/storage/images/cn/import-export/import-altium-designer/import-altium-designer_20241010_144152.jpg)      |                                                              |
| 绘图工具-贝塞尔曲线 | 贝塞尔曲线          | ![](/storage/images/cn/import-export/import-altium-designer/import-altium-designer_20241010_144239.jpg) | ![](/storage/images/cn/import-export/import-altium-designer/import-altium-designer_20241010_144304.jpg)      | 连续多段贝塞尔曲线，导入后转换为多段贝塞尔曲线。             |
| 指示-通用No ERC标号 | 非连接标识          | ![](/storage/images/cn/import-export/import-altium-designer/import-altium-designer_20241010_144520.jpg) | ![](/storage/images/cn/import-export/import-altium-designer/import-altium-designer_20241010_144537.jpg)      |                                                              |
| IEEE符号            | 折线、圆弧、圆形    | ![](/storage/images/cn/import-export/import-altium-designer/import-altium-designer_20241010_144649.jpg) | ![](/storage/images/cn/import-export/import-altium-designer/import-altium-designer_20241010_144720.jpg)      | 转换后以多段折线、圆弧以及圆形组成的复合图元形式呈现。       |
| 手工接点            | 节点                | ![](/storage/images/cn/import-export/import-altium-designer/import-altium-designer_20241010_144833.jpg) | ![](/storage/images/cn/import-export/import-altium-designer/import-altium-designer_20241010_144849.jpg)      | 悬空的手工接点无法导入，放在导线上的手工接点会被转换为节点。 |
| 主题样式            | 主题样式            |                                                                                                         | 导入对话框默认使用专业版默认主题，圆角矩形转为直角，填充颜色不做保留，图元颜色不做保留，以便切换原理图主题题 | 使用原文件主题则跟随原文件样式，切换主题时颜色不会变化。     |

**不支持图元类型：**

| AD图元             | 图元描述                                                                         | 说明                                                                             |
| :----------------- | :------------------------------------------------------------------------------- | :------------------------------------------------------------------------------- |
| 线束 {width="15%"} | 包括信号线束、线束连接器，线束入口、预定义的线束连接器。                         | 原理图设计暂不支持线束图元。                                                     |
| 指示               | 包括通用No ERC标号、差分对、参数设置、覆盖区域、编译屏蔽、探针（低版本中存在）。 | 目前原理图设计仅支持连接在器件引脚上的通用No ERC标号转换，其余指示暂不支持转换。 |
| 图像               | 图片。                                                                           | Altium Designer的图片存储的是本地文件路径，文件中不包含图片。                    |
| 隐藏引脚           | 器件中隐藏的引脚。                                                               | 专业版不支持隐藏引脚，导入后显示。                                               |
| 器件页面符         |                                                                                  | 专业版不支持器件页面符                                                           |

**图元差异：**

**文本字符串转换差异:**

- 转换后删除线效果丢失，嘉立创EDA专业版文本相关符号图元暂不支持删除线效果，因此凡是具有删除线效果的文本相关符号图元删除线效果均会丢失；
- 下划线显示效果略有差异，嘉立创EDA专业版的文本图元下划线相对于Altium Designer较粗，且不会覆盖字符内容；
- 锁定信息效果丢失，由于嘉立创EDA专业版符号图元暂不支持锁定，导致了凡是具有锁定效果的图元锁定效果均会丢失；
- 字体差异，如果操作系统没有安装对应字体，文本导入后会使用默认字体，同时文本位置可能会有所偏移；
- 在AD文件另存为ASCII时，中文可能会乱码，导入后乱码字符会自动转为下划线“-”。
      <div style="display: flex; justify-content: center;">
      <figure style="margin: 0 10px;">
      <img src="/storage/images/cn/import-export/import-altium-designer/import-altium-designer_20241010_155537.jpg"  style="display: block; margin: 0 auto;">
      <figcaption style="text-align: center; font-size: smaller">Altium Designer 中文字符串删除线与下划线效果</figcaption>
      </figure>
      <figure style="margin: 0 10px;">
      <img src="/storage/images/cn/import-export/import-altium-designer/import-altium-designer_20241010_155608.jpg"  style="display: block; margin: 0 auto;">
      <figcaption style="text-align: center; font-size: smaller">格式转换后中文字符串删除线与下划线效果</figcaption>
      </figure>
      </div>

**总线Bus转换差异:**

- 转换后总线Bus的线宽存在明显变细的情况，在后续的版本中会对此进行修复。
      <div style="display: flex; justify-content: center;">
      <figure style="margin: 0 10px;">
      <img src="/storage/images/cn/import-export/import-altium-designer/import-altium-designer_20241010_164022.jpg"  style="max-width: 80%; display: block; margin: 0 auto;">
      <figcaption style="text-align: center; font-size: smaller">Altium Designer 中不同线宽的总线</figcaption>
      </figure>
      <figure style="margin: 0 10px;">
      <img src="/storage/images/cn/import-export/import-altium-designer/import-altium-designer_20241010_164050.jpg"  style="max-width: 100%; display: block; margin: 0 auto;">
      <figcaption style="text-align: center; font-size: smaller">格式转换后不同线宽的总线 </figcaption>
      </figure>
      </div>

**总线入口Bus Entry转换差异**

- 转换后Bus Entry图元样式存在差异；
- 转换后Bus Entry颜色存在差异，Altium Designer中可以对Bus Entry图元进行颜色修改，嘉立创EDA专业版暂不支持此操作，转换后Bus Entry颜色均为绿色。
      <div style="display: flex; justify-content: center;">
      <figure style="margin: 0 10px;">
      <img src="/storage/images/cn/import-export/import-altium-designer/import-altium-designer_20241010_164554.jpg" style="max-width: 100%; display: block; margin: 0 auto;">
      <figcaption style="text-align: center; font-size: smaller">Altium Designer中的总线入口Bus Entry</figcaption>
      </figure>
      <figure style="margin: 0 10px;">
      <img src="/storage/images/cn/import-export/import-altium-designer/import-altium-designer_20241010_164618.jpg"  style="max-width: 92%; display: block; margin: 0 auto;">
      <figcaption style="text-align: center; font-size: smaller">格式转换后的总线入口Bus Entry </figcaption>
      </figure>
      </div>

**器件Component转换差异**

- 器件为多符号图元组成的复合图元，任何符号图元差异均可能造成器件的转换差异；
- 引脚颜色存在差异，导入后引脚颜色为默认颜色；
- 暂不支持引脚电气类型导入，转换后会丢失；
- Altium Designer图元中的自定义属性与系统属性重复时，转换后系统属性将被自定义属性覆盖；
- 转换后连接点样式存在差异；
      <div style="display: flex; justify-content: center;">
      <figure style="margin: 0 10px;">
      <img src="/storage/images/cn/import-export/import-altium-designer/import-altium-designer_20241010_165328.jpg"  style="max-width: 97%; display: block; margin: 0 auto;">
      <figcaption style="text-align: center; font-size: smaller">Altium Designer中的不同引脚颜色和类型</figcaption>
      </figure>
      <figure style="margin: 0 10px;">
      <img src="/storage/images/cn/import-export/import-altium-designer/import-altium-designer_20241010_165350.jpg"  style="max-width: 100%; display: block; margin: 0 auto;">
      <figcaption style="text-align: center; font-size: smaller">格式转换后的不同引脚颜色和类型 </figcaption>
      </figure>
      </div>

- 元件封装导入后会生成“原封装1，原封装2等”，专业版不是根据封装名关联封装，是根据封装的uuid，所以导入时会把原来关联的多个封装名作为普通属性添加，如果导入的原理图和PCB一起压缩导入时，会自动关联封装；
- 元件位号，专业版不支持AD那种多部件的位号方式，多部件位号U1A，U1B导入后为U1.1, U1.2。

**电源端口Power Port转换差异**

- 嘉立创EDA专业版网络名称仅支持大写英文字母和一些常用字符，若网络名称中存在中文、小写英文字母、希腊字母等特殊字符，转换后小写英文字母会被转换为大写，中文和特殊字符会转换为下划线“\_”；
- GOST Power Ground和GOST Earth的电源端口的样式存在差异，后续版本中会对此进行适配；
- GOST Power Ground和GOST Earth的电源端口名称位置存在偏移，后续版本中会对此进行修复。
      <div style="display: flex; justify-content: center;">
      <figure style="margin: 0 10px;">
      <img src="/storage/images/cn/import-export/import-altium-designer/import-altium-designer_20241010_170017.jpg"  style="max-width: 75%; display: block; margin: 0 auto;">
      <figcaption style="text-align: center; font-size: smaller">Altium Designer中的电源端口Power Port</figcaption>
      </figure>
      <figure style="margin: 0 10px;">
      <img src="/storage/images/cn/import-export/import-altium-designer/import-altium-designer_20241010_170043.jpg"  style="max-width: 77%; display: block; margin: 0 auto;">
      <figcaption style="text-align: center; font-size: smaller">格式转换后的电源端口Power Port </figcaption>
      </figure>
      </div>

**端口Port转换差异**

- 端口properties名称、值信息转换后丢失，嘉立创EDA专业版网络端口暂不支持properties信息；
      <div style="display: flex; justify-content: center;">
      <figure style="margin: 0 10px;">
      <img src="/storage/images/cn/import-export/import-altium-designer/import-altium-designer_20241010_171059.jpg"  style="max-width: 70%; display: block; margin: 0 auto;">
      <figcaption style="text-align: center; font-size: smaller">Altium Designer中的端口Port</figcaption>
      </figure>
      <figure style="margin: 0 10px;">
      <img src="/storage/images/cn/import-export/import-altium-designer/import-altium-designer_20241010_171124.jpg"  style="max-width: 55%; display: block; margin: 0 auto;">
      <figcaption style="text-align: center; font-size: smaller">格式转换后的端口Port</figcaption>
      </figure>
      </div>

- 嘉立创EDA专业版网络端口暂不支持修改字体、边框宽度、边框颜色、填充颜色，转换后这类信息会存在差异；
      <div style="display: flex; justify-content: center;">
      <figure style="margin: 0 10px;">
      <img src="/storage/images/cn/import-export/import-altium-designer/import-altium-designer_20241010_171335.jpg"  style="max-width: 96%; display: block; margin: 0 auto;">
      <figcaption style="text-align: center; font-size: smaller">Altium Designer中的端口Port</figcaption>
      </figure>
      <figure style="margin: 0 10px;">
      <img src="/storage/images/cn/import-export/import-altium-designer/import-altium-designer_20241010_171400.jpg"  style="max-width: 100%; display: block; margin: 0 auto;">
      <figcaption style="text-align: center; font-size: smaller">格式转换后的端口Port</figcaption>
      </figure>
      </div>

- 转换后Port的I/O属性丢失；
- Altium Designer中Port如果与未命名导线/总线有连接关系，转换后会把Port名称给到导线/总线；
- Altium Designer中Port两端如果均与导线有连接关系，转换后两端均连接导线；如果均与网络标识有连接关系转换后则只有带引脚一端可以连接。
      <div style="display: flex; justify-content: center;">
      <figure style="margin: 0 10px;">
      <img src="/storage/images/cn/import-export/import-altium-designer/import-altium-designer_20241010_171655.jpg"  style="max-width: 50%; display: block; margin: 0 auto;">
      <figcaption style="text-align: center; font-size: smaller">Altium Designer中的端口Port两端连接</figcaption>
      </figure>
      <figure style="margin: 0 10px;">
      <img src="/storage/images/cn/import-export/import-altium-designer/import-altium-designer_20241010_171718.jpg"  style="max-width: 42%; display: block; margin: 0 auto;">
      <figcaption style="text-align: center; font-size: smaller">格式转换后的端口Port两端连接</figcaption>
      </figure>
      </div>

**页面符转换差异**

- 页面符导入之后会以模块符号呈现，嘉立创EDA专业版暂不支持修改模块符号的边框、是否填充、填充颜色、锁定操作，因此转换后填充、边框、锁定状态会存在差异。
      <div style="display: flex; justify-content: center;">
      <figure style="margin: 0 10px;">
      <img src="/storage/images/cn/import-export/import-altium-designer/import-altium-designer_20241010_172227.jpg"  style="display: block; margin: 0 auto;">
      <figcaption style="text-align: center; font-size: smaller">Altium Designer中的页面符</figcaption>
      </figure>
      <figure style="margin: 0 10px;">
      <img src="/storage/images/cn/import-export/import-altium-designer/import-altium-designer_20241010_172255.jpg"  style="display: block; margin: 0 auto;">
      <figcaption style="text-align: center; font-size: smaller">格式转换后的页面符（模块符号）</figcaption>
      </figure>
      </div>

**线转换差异**

- 转换后线样式存在差异；
- 嘉立创EDA专业版中不支持 Altium Designer中的Start Line Shape和End Line Shape，因此会被转换为多段折线。
      <div align="center">
      <img src="/storage/images/cn/import-export/import-altium-designer/import-altium-designer_20241010_172659.jpg" style="max-width: 60%" />
      <figcaption style="text-align: center; font-size: smaller">Altium Designer中的不同线样式</figcaption>
      </div>
      <div align="center">
      <img src="/storage/images/cn/import-export/import-altium-designer/import-altium-designer_20241010_173336.jpg" style="max-width: 60%" />
      <figcaption style="text-align: center; font-size: smaller">格式转换后的线样式</figcaption>
      </div>
      <div style="display: flex; justify-content: center;">
      <figure style="margin: 0 10px;">
      <img src="/storage/images/cn/import-export/import-altium-designer/import-altium-designer_20241010_173457.jpg"  style="max-width: 100%; display: block; margin: 0 auto;">
      <figcaption style="text-align: center; font-size: smaller">Altium Designer中的不同Start Line Shape和End Line Shape</figcaption>
      </figure>
      <figure style="margin: 0 10px;">
      <img src="/storage/images/cn/import-export/import-altium-designer/import-altium-designer_20241010_173522.jpg"  style="max-width: 95%; display: block; margin: 0 auto;">
      <figcaption style="text-align: center; font-size: smaller">格式转换后的不同Start Line Shape和End Line Shape</figcaption>
      </figure>
      </div>

**PCB/封装库：**

**支持图元类型：**

| AD图元{width="15%"} | 导入后{width="15%"}   | AD图元样式{width="25%"}                                                                                 | 转换后图元样式 {width="25%"}                                                                            | 说明{width="20%"}                                                        |
| :------------------ | :-------------------- | :------------------------------------------------------------------------------------------------------ | :------------------------------------------------------------------------------------------------------ | :----------------------------------------------------------------------- |
| 器件                | 元件                  | ![](/storage/images/cn/import-export/import-altium-designer/import-altium-designer_20241010_174253.jpg) | ![](/storage/images/cn/import-export/import-altium-designer/import-altium-designer_20241010_174310.jpg) |                                                                          |
| 3D元件体            | 轮廓对象              | ![](/storage/images/cn/import-export/import-altium-designer/import-altium-designer_20241010_174515.jpg) | ![](/storage/images/cn/import-export/import-altium-designer/import-altium-designer_20241010_174529.jpg) | 专业版暂不支持导入3D元件体，转换后根据其所在图层不同转为线条或填充区域。 |
| 填充                | 填充区域              | ![](/storage/images/cn/import-export/import-altium-designer/import-altium-designer_20241010_174724.jpg) | ![](/storage/images/cn/import-export/import-altium-designer/import-altium-designer_20241010_174736.jpg) |                                                                          |
| 实心区域            | 填充区域              | ![](/storage/images/cn/import-export/import-altium-designer/import-altium-designer_20241010_174807.jpg) | ![](/storage/images/cn/import-export/import-altium-designer/import-altium-designer_20241010_174819.jpg) |                                                                          |
| 圆弧                | 线条-两点圆弧         | ![](/storage/images/cn/import-export/import-altium-designer/import-altium-designer_20241010_174923.jpg) | ![](/storage/images/cn/import-export/import-altium-designer/import-altium-designer_20241010_174935.jpg) |                                                                          |
| 圆                  | 线条-圆形             | ![](/storage/images/cn/import-export/import-altium-designer/import-altium-designer_20241010_175032.jpg) | ![](/storage/images/cn/import-export/import-altium-designer/import-altium-designer_20241010_175046.jpg) |                                                                          |
| 线条                | 导线                  | ![](/storage/images/cn/import-export/import-altium-designer/import-altium-designer_20241010_175139.jpg) | ![](/storage/images/cn/import-export/import-altium-designer/import-altium-designer_20241010_175151.jpg) |                                                                          |
| 字符串              | 文本                  | ![](/storage/images/cn/import-export/import-altium-designer/import-altium-designer_20241010_175243.jpg) | ![](/storage/images/cn/import-export/import-altium-designer/import-altium-designer_20241010_175257.jpg) | 多行文本暂时只能导入第一行文本，后续版本中会支持多行导入。               |
| 焊盘                | 焊盘                  | ![](/storage/images/cn/import-export/import-altium-designer/import-altium-designer_20241010_175346.jpg) | ![](/storage/images/cn/import-export/import-altium-designer/import-altium-designer_20241010_175400.jpg) |                                                                          |
| 过孔                | 过孔                  | ![](/storage/images/cn/import-export/import-altium-designer/import-altium-designer_20241010_175430.jpg) | ![](/storage/images/cn/import-export/import-altium-designer/import-altium-designer_20241010_175445.jpg) |                                                                          |
| 走线                | 导线                  | ![](/storage/images/cn/import-export/import-altium-designer/import-altium-designer_20241010_175513.jpg) | ![](/storage/images/cn/import-export/import-altium-designer/import-altium-designer_20241010_175526.jpg) |                                                                          |
| 矩形                | 线条                  | ![](/storage/images/cn/import-export/import-altium-designer/import-altium-designer_20241010_175611.jpg) | ![](/storage/images/cn/import-export/import-altium-designer/import-altium-designer_20241010_175621.jpg) |                                                                          |
| 图形                | 轮廓对象              | ![](/storage/images/cn/import-export/import-altium-designer/import-altium-designer_20241010_175655.jpg) | ![](/storage/images/cn/import-export/import-altium-designer/import-altium-designer_20241010_175706.jpg) | kind设置为多边形切口的图形转换后会变为禁止铺铜区域。                     |
| Keepout             | 板框                  | ![](/storage/images/cn/import-export/import-altium-designer/import-altium-designer_20241010_175741.jpg) | ![](/storage/images/cn/import-export/import-altium-designer/import-altium-designer_20241010_175801.jpg) | 默认为板框。                                                             |
| 铺铜                | 铺铜区域              | ![](/storage/images/cn/import-export/import-altium-designer/import-altium-designer_20241010_175900.jpg) | ![](/storage/images/cn/import-export/import-altium-designer/import-altium-designer_20241010_175916.jpg) |                                                                          |
| 多边形铺铜挖空      | 禁止区域-禁止铺铜区域 | ![](/storage/images/cn/import-export/import-altium-designer/import-altium-designer_20241010_184812.jpg) | ![](/storage/images/cn/import-export/import-altium-designer/import-altium-designer_20241010_184830.jpg) |                                                                          |
| 钻孔表              | 文本、线条            | ![](/storage/images/cn/import-export/import-altium-designer/import-altium-designer_20241010_184950.jpg) | ![](/storage/images/cn/import-export/import-altium-designer/import-altium-designer_20241010_185019.jpg) | 转换为文本、线条的复合图元，图层转换至钻孔图层。                         |
| 层叠结构表          | 文本、线条            | ![](/storage/images/cn/import-export/import-altium-designer/import-altium-designer_20241010_185145.jpg) | ![](/storage/images/cn/import-export/import-altium-designer/import-altium-designer_20241010_185205.jpg) | 转换为文本、线条的复合图元                                               |
| 尺寸                | 尺寸                  | ![](/storage/images/cn/import-export/import-altium-designer/import-altium-designer_20241010_185243.jpg) | ![](/storage/images/cn/import-export/import-altium-designer/import-altium-designer_20241010_185253.jpg) | 尺寸样式存在差异，部分尺寸图层会转变为文档层。                           |
| 泪滴                | 泪滴                  | ![](/storage/images/cn/import-export/import-altium-designer/import-altium-designer_20241010_185328.jpg) | ![](/storage/images/cn/import-export/import-altium-designer/import-altium-designer_20241010_185340.jpg) |                                                                          |

**部分图层/功能说明：**

| AD图层/功能{width="20%"} | 导入后{width="20%"}                               | 说明{width="60%"}                                                                                                                                                                              |
| :----------------------- | :------------------------------------------------ | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 板子形状                 | 默认转到文档层                                    | 专业版没有board shape但是有边框层，由于大部分人使用keepout和机械层1作为板框，所以board shape转到机械层                                                                                         |
| 内电层                   | 导入后区块的网络可能改变                          | AD和专业版的内电层实现方式不同，当有多个内电区块的时候，其区块的网络可能无法完全保持一致，需要仔细检查；导入后内电层会重建区块，内电层区块划分可能也有差异                                     |
| KeepOut层                | 默认为板框层                                      | 在导入弹窗支持设置板框来源是keepout层还是机械层1；部分板子内部的keepout闭合线条，根据作用对象，会自动转为对应的禁止区域；非闭合的keepout图元会导入到机械层，专业版不支持独立线条等作为禁止区域 |
| 机械层                   | 机械层1默认转到机械层，其他机械层转到用户自定义层 | 专业版使用用户自定义层实现AD的其他机械层的功能                                                                                                                                                 |
| 飞线                     | 导入后出现飞线                                    | 可能是导入后重建铺铜导致有些地方断开了连接，如无网络图元、热焊因DRC间距不能生成等                                                                                                              |
| 图元阻焊助焊扩展         | 仅焊盘过孔的支持导入                              | 其他的导线，圆弧等图元的阻焊助焊扩展不支持导入，如果是独立图元会在阻焊或助焊层(锡膏层)生成一个扩展后的图元                                                                                     |
| 定义板切割 Board Cutout  | 转到边框层或转为挖槽区域                          | 该功能对应专业版的挖槽区域                                                                                                                                                                     |

**不支持图元类型：**

| AD图元{width="15%"} | 说明{width="42.5%"}                                |
| :------------------ | :------------------------------------------------- |
| 设计视图            | 专业版不支持工作视图                               |
| 工作向导            | 专业版不支持这个图元                               |
| 来自文件的对象      | 这种调用文件外部的对象，不包含在文件中，不支持导入 |
| 3D体                | 专业版不支持3D体图元                               |
| 拼板阵列            | 实现逻辑不同，不支持导入                           |
| 坐标                | 专业版不支持坐标图元                               |
| Room                | 专业版不支持Room图元                               |

**图元差异**

**器件转换差异**

- 器件为多封装图元组成的复合图元，任何封装图元差异均可能造成器件的转换差异；
- 如果有多个同名但不同尺寸的封装，导入会默认取其中一个作为模板进行关联其他元件；
- 转换后封装所在层可能存在差异：<br>
  &nbsp;&nbsp;&nbsp;&nbsp;a、专业版中元件所在层属性只支持顶层或底层，其他图层器件转换后元件所在层属性变为顶层，但器件内图元仍然在对应层；
  <div align="center">
  <img src="/storage/images/cn/import-export/import-altium-designer/import-altium-designer_20241010_190740.jpg" style="max-width: 60%" />
  <figcaption style="text-align: center; font-size: smaller">Altium Designer中不同层的器件</figcaption>
  </div>
  <div align="center">
  <img src="/storage/images/cn/import-export/import-altium-designer/import-altium-designer_20241010_190817.jpg " style="max-width: 60%" />
  <figcaption style="text-align: center; font-size: smaller">转换后不同层的器件</figcaption>
  </div>
  &nbsp;&nbsp;&nbsp;&nbsp;b、如果在AD里面绘制的封装属性在顶层，但整体在底层(属于错误数据)，导入后会自动修正层属性在底层；<br>
  &nbsp;&nbsp;&nbsp;&nbsp;例：器件内部图元整体在底层但封装属性在顶层时转换

<div style="display: flex; justify-content: center;">
  <figure style="margin: 0 10px;">
    <img src="/storage/images/cn/import-export/import-altium-designer/import-altium-designer_20241010_191003.jpg"  style="max-width: 95%; display: block; margin: 0 auto;">
    <figcaption style="text-align: center; font-size: smaller">Altium Designer中器件属性在顶层</figcaption>
  </figure>
  <figure style="margin: 0 10px;">
    <img src="/storage/images/cn/import-export/import-altium-designer/import-altium-designer_20241010_191026.jpg"  style="max-width: 100%; display: block; margin: 0 auto;">
    <figcaption style="text-align: center; font-size: smaller">转换后器件属性在底层</figcaption>
  </figure>
</div>

**文本/文本框转换差异**

- 如果操作系统没有安装对应字体或者专业版字体设置没有添加对应字体，文本导入后会使用默认字体（Arial和宋体），同时文本位置可能会有所偏移；
- 相同文本字体因为字体显示逻辑不同，无法完全和源文件一致，可能会有位置和大小的差异；
- Altium Designer的Default字体转换后变为默认2字体，Altium Designer的Default字体中不支持显示的汉字会在转换后正常显示，字体变为宋体；
- Altium Designer中设置在锡膏层的文本，导入后会变成机械层；
- 文本框会被转换为普通文本，且仅保留文本框的第一行；
      <div style="display: flex; justify-content: center;">
      <figure style="margin: 0 10px;">
      <img src="/storage/images/cn/import-export/import-altium-designer/import-altium-designer_20241010_191623.jpg"  style="max-width: 100%; display: block; margin: 0 auto;">
      <figcaption style="text-align: center; font-size: smaller">Altium Designer中多行文本的文本框</figcaption>
      </figure>
      <figure style="margin: 0 10px;">
      <img src="/storage/images/cn/import-export/import-altium-designer/import-altium-designer_20241010_191651.jpg"  style="max-width: 93%; display: block; margin: 0 auto;">
      <figcaption style="text-align: center; font-size: smaller">格式转换后仅保留第一行</figcaption>
      </figure>
      </div>

- 笔画和条形码均会转为普通文本；
  **焊盘转换差异**
- 不支持矩形钻孔，会转为槽型钻孔
      <div style="display: flex; justify-content: center;">
      <figure style="margin: 0 10px;">
      <img src="/storage/images/cn/import-export/import-altium-designer/import-altium-designer_20241010_191942.jpg"  style="max-width: 60%; display: block; margin: 0 auto;">
      <figcaption style="text-align: center; font-size: smaller">Altium Designer中的矩形钻孔</figcaption>
      </figure>
      <figure style="margin: 0 10px;">
      <img src="/storage/images/cn/import-export/import-altium-designer/import-altium-designer_20241010_192008.jpg"  style="max-width: 48%; display: block; margin: 0 auto;">
      <figcaption style="text-align: center; font-size: smaller">格式转换后变为长圆形</figcaption>
      </figure>
      </div>

- 电气类型属性值转换后会丢失；
- 专业版焊盘不支持任意层，不支持的层会转为对应的填充区域；
      <div style="display: flex; justify-content: center;">
      <figure style="margin: 0 10px;">
      <img src="/storage/images/cn/import-export/import-altium-designer/import-altium-designer_20241010_192331.jpg"  style="max-width: 100%; display: block; margin: 0 auto;">
      <figcaption style="text-align: center; font-size: smaller">Altium Designer中内层Signal1的焊盘</figcaption>
      </figure>
      <figure style="margin: 0 10px;">
      <img src="/storage/images/cn/import-export/import-altium-designer/import-altium-designer_20241010_192401.jpg"  style="max-width: 92%; display: block; margin: 0 auto;">
      <figcaption style="text-align: center; font-size: smaller">格式转换后变为填充区域</figcaption>
      </figure>
      </div>

**过孔转换差异**

- 嘉立创EDA专业版暂不支持过孔在不同层设置不同的外直径，转换后取顶层数据作为过孔外直径。
      <div style="display: flex; justify-content: center;">
      <figure style="margin: 0 10px;">
      <img src="/storage/images/cn/import-export/import-altium-designer/import-altium-designer_20241010_192839.jpg"  style="max-width: 100%; display: block; margin: 0 auto;">
      <figcaption style="text-align: center; font-size: smaller">Altium Designer中不同层不同外直径的过孔</figcaption>
      </figure>
      <figure style="margin: 0 10px;">
      <img src="/storage/images/cn/import-export/import-altium-designer/import-altium-designer_20241010_192859.jpg"  style="max-width: 93%; display: block; margin: 0 auto;">
      <figcaption style="text-align: center; font-size: smaller">格式转换后的过孔</figcaption>
      </figure>
      </div>

**铺铜转换差异**

- 暂不支持轮廓填充样式的铺铜导入，转换后变为禁止区域；
      <div style="display: flex; justify-content: center;">
      <figure style="margin: 0 10px;">
      <img src="/storage/images/cn/import-export/import-altium-designer/import-altium-designer_20241010_193956.jpg"  style="max-width: 80%; display: block; margin: 0 auto;">
      <figcaption style="text-align: center; font-size: smaller">Altium Designer中轮廓填充样式的铺铜</figcaption>
      </figure>
      <figure style="margin: 0 10px;">
      <img src="/storage/images/cn/import-export/import-altium-designer/import-altium-designer_20241010_194022.jpg"  style="max-width: 66%; display: block; margin: 0 auto;">
      <figcaption style="text-align: center; font-size: smaller">格式转换后变为禁止区域</figcaption>
      </figure>
      </div>

- 暂不支持非铜层和多层的铺铜导入，转换后变为填充区域或其他；
      <div style="display: flex; justify-content: center;">
      <figure style="margin: 0 10px;">
      <img src="/storage/images/cn/import-export/import-altium-designer/import-altium-designer_20241010_194148.jpg"  style="max-width: 68%; display: block; margin: 0 auto;">
      <figcaption style="text-align: center; font-size: smaller">Altium Designer中丝印层的铺铜</figcaption>
      </figure>
      <figure style="margin: 0 10px;">
      <img src="/storage/images/cn/import-export/import-altium-designer/import-altium-designer_20241010_194218.jpg"  style="max-width: 100%; display: block; margin: 0 auto;">
      <figcaption style="text-align: center; font-size: smaller">格式转换后变为填充区域</figcaption>
      </figure>
      </div>

- 导入后重新铺铜由于铺铜逻辑不同可能会存在差异；
- 由于专业版不完全支持AD的铺铜填充样式，导入后铺铜填充样式属性可能会存在差异；

**尺寸转换差异**

- 暂不支持径向、基准、引线、中心、基线、直径的尺寸导入；
- 非机械层和丝印层的尺寸导入后会转换到文档层；
- 尺寸和线性尺寸导入后转换为长度尺寸；
- 由于专业版和Altium Designer尺寸样式不同，转换后的尺寸样式存在差异。
      <div style="display: flex; justify-content: center;">
      <figure style="margin: 0 10px;">
      <img src="/storage/images/cn/import-export/import-altium-designer/import-altium-designer_20241010_195247.jpg"  style="max-width: 54%; display: block; margin: 0 auto;">
      <figcaption style="text-align: center; font-size: smaller">Altium Designer中的不同尺寸</figcaption>
      </figure>
      <figure style="margin: 0 10px;">
      <img src="/storage/images/cn/import-export/import-altium-designer/import-altium-designer_20241010_195313.jpg"  style="max-width: 60%; display: block; margin: 0 auto;">
      <figcaption style="text-align: center; font-size: smaller">格式转换后的不同尺寸</figcaption>
      </figure>
      </div>

**设计规则转换支持情况：**

<table style="width:100%">
  <tr>
    <th colspan="2">AD中的设计规则</th>
    <th>导入后对应设计规则</th>
    <th>说明</th>
  </tr>
  <tr>
    <td style="width:15%"> Electrical</td>
    <td style="width:30%">Clearance</td>
    <td style="width:25%"> 间距-安全间距</td>
    <td style="width:25%"></td>
  </tr>
  <tr>
    <td rowspan="3">Routing</td>
    <td>Width</td>
    <td>物理-导线</td>
    <td>取极值</td>
  </tr>
  <tr>
    <td>Routing Via Style</td>
    <td>物理-过孔尺寸</td>
    <td></td>
  </tr>
  <tr>
    <td>Differential Pairs Routing</td>
    <td>物理-差分对</td>
    <td>取极值</td>
  </tr>
  <tr>
    <td rowspan="2">Mask</td>
    <td>Solder Mask Expansion</td>
    <td>拓展-阻焊拓展</td>
    <td></td>
  </tr>
  <tr>
    <td>Paste Mask Expansion</td>
    <td>拓展-助焊拓展</td>
    <td>取SMD焊盘数据</td>
  </tr>
  <tr>
    <td rowspan="2">Plane</td>
    <td>Power Plane Connect Style</td>
    <td>平面-内电层</td>
    <td></td>
  </tr>
  <tr>
    <td>Polygon Connect Style</td>
    <td>平面-铺铜</td>
    <td></td>
  </tr>
  <tr>
    <td>Manufacturing</td>
    <td>Board Outline Clearance</td>
    <td>间距-安全间距</td>
    <td>板框安全间距</td>
  </tr>
</table>
<b>注：</b>“取极值”指如果导入的设计规则存在多个应用于不同层的设计规则，则默认设计规则取各层规则默认值中最小的那个；最小线宽/差分对最小线宽取各层设计规则中最小值；最大线宽/差分对最大线宽取各层设计规则中最大值。

**Clearance**<br>
安全间距（简单）转换对照表：

| Altium Designer中图元{width="30%"} | 导入后对应专业版图元{width="30%"} |
| :--------------------------------: | :-------------------------------: |
|               Track                |               导线                |
|              SMD Pad               |       贴片焊盘、单层测试点        |
|               TH Pad               |       插件焊盘、多层测试点        |
|                Via                 |               过孔                |
|               Copper               |        填充区域/泪滴、线条        |
|                Text                |             文本/图片             |
|                Hole                |               钻孔                |

安全间距（高级）转换对照表：

| Altium Designer中图元{width="30%"} | 导入后对应专业版图元{width="30%"} |
| :--------------------------------: | :-------------------------------: |
|                Arc                 |                 /                 |
|               Track                |               导线                |
|              SMD Pad               |             贴片焊盘              |
|               TH Pad               |             插件焊盘              |
|                Via                 |               过孔                |
|                Fill                |                 /                 |
|                Poly                |               线条                |
|               Region               |           填充区域/泪滴           |
|                Text                |             文本/图片             |
|                Hole                |               钻孔                |

**其他注意事项：**

- 请不要反复将你的原理图或PCB导出AD格式后又导入，这个操作可能会导致细节丢失！！！

- 导入Altium文件时，如果有不支持的字符(比如乱码)将自动转为下滑线，所以导入后可能会发现有网络标签、器件名称、封装名、属性等多了一个下划线，请手动修改。AD目前的版本在另存为ASCII文件的时候，中文会变为乱码，所以在导入的时候也是乱码，需要用记事本等文本编辑器打开ASCII文件修正后再导入。

- 导入的 AD 文件最大支持 1GB，文件越大会导致导入时间越长或导入失败，建议手动减小文件体积。如先删除铺铜填充后(设置铺铜为无填充类型)再导入。
