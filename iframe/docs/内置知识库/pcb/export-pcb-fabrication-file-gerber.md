# 导出PCB生产文件Gerber

## 导出Gerber

**导出方法**：

1、操作入口：

- 顶部菜单 - 文件 - 导出 - PCB制板文件（Gerber）
- 顶部菜单 - 导出 - PCB制板文件（Gerber）
  ![图 1](/storage/images/cn/pcb/export-pcb-fabrication-file-gerber/export-pcb-fabrication-file-gerber_20240621_172124.png)

2、点击后系统会检测PCB中是否还存在飞线，如果存在，会弹出如下提示弹窗
![图 17](/storage/images/cn/pcb/export-pcb-fabrication-file-gerber/export-pcb-fabrication-file-gerber_20240621_172125.png)

3、点击“是”，检查飞线。会自动定位到第一个飞线，左侧面板切换到飞线树帮助你核对。如果点击“否”，下一步后，会提示是否检查DRC，建议先检查DRC后再导出Gerber。
![图 19](/storage/images/cn/pcb/export-pcb-fabrication-file-gerber/export-pcb-fabrication-file-gerber_20240621_172126.png)

4、如果你不希望每次导出gerber时提示检测飞线或DRC，可以在系统设置 - PCB - 常用中关闭此配置。
![图 20](/storage/images/cn/pcb/export-pcb-fabrication-file-gerber/export-pcb-fabrication-file-gerber_20240621_172127.png)

5、导出Gerber弹窗：
![图 1](/storage/images/cn/pcb/export-pcb-fabrication-file-gerber/export-pcb-fabrication-file-gerber_20240930_101150.png)

**文件名**：支持修改文件名再导出。

**单位**：导出的Gerber文件和钻孔文件的单位，默认是 mm。

**格式**：导出的钻孔文件的数值格式，整数位和小数位的数字个数，影响数值精度的表达（传统的钻孔文件坐标数字只有6位，所以一般是3:3，4:2 的格式）。该设置可能会影响Gerber查看器查看钻孔文件的对位。如果Gerber查看器预览Gerber和钻孔文件发现钻孔文件对位不准，可以在Gerber查看工具重新设置钻孔文件的数值格式为3:3，或其他格式4:2等格式。

**选项**：

- 一键导出：根据默认的设置，把全部的层和图元都导出，不包含钻孔表和独立的钻孔信息文件。
- 自定义配置：根据自行的需要进行修改配置。支持钻孔信息和钻孔表；支持自定义精度(单位选毫米时默认整数为4，单位选英寸时默认整数为5,可调整小数位精度)；支持导出钻孔表在钻孔图层;支持新增不同的配置在左侧列表；支持选择导出的图层；图层镜像；支持选择导出的图元对象。导出的时候选择一个配置进行Gerber导出。最多支持创建20个配置，双击修改配置名。

![图 2](/storage/images/cn/pcb/export-pcb-fabrication-file-gerber/export-pcb-fabrication-file-gerber_20241225_172800.jpg)

**导出/导入配置**：支持导入导出Gerber自定义配置，方便配置复用。配置信息会存储在个人偏好中，进行云同步。

**注意**：_PCB下单按钮不会被自定义配置里面的参数影响，会默认使用一键导出的文件进行上传下单，如果需要自定义导出Gerber配置，请务必导出Gerber后下单。_

## Gerber说明

**Gerber压缩包**：导出Gerber后是一个zip压缩包，在板厂进行下单的时候直接上传该压缩包即可。有编辑需求的（比如CAM工程师）可以解压后用第三方CAM工具进行编辑Gerber。
Gerber内文件名说明：

**Gerber文件名**：

生成后的Gerber文件是一个压缩包，解压后你可以看到有如下文件：

| 文件名                                         | 类型                         | 备注/说明                                                                                                                                                                                          |
| :--------------------------------------------- | :--------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Gerber_BoardOutline.GKO**                    | 边框文件                     | PCB板厂根据该文件进行切割板形状，嘉立创EDA绘制的挖槽区域在生成Gerber后在边框文件进行体现                                                                                                           |
| **Gerber_TopLayer.GTL**                        | PCB顶层                      | 顶层铜箔层                                                                                                                                                                                         |
| **Gerber_BottomLayer.GBL**                     | PCB底层                      | 底层铜箔层                                                                                                                                                                                         |
| **Gerber_InnerLayer1.G1**                      | 内层铜箔层                   | 信号层类型                                                                                                                                                                                         |
| **Gerber_InnerLayer2.G2**                      | 内层铜箔层                   | 内电层类型的内层，在输出时是正片输出，在PCB绘制时是负片绘制(绘制的线条则不输出在Gerber)。注：V2.2.33版本及以前使用GP+数字后缀表示内电层，后避免和其他EDA负片方式的内层后缀名冲突，改为G+数字的方式 |
| **Gerber_TopSilkLayer.GTO**                    | 顶层丝印层                   |
| **Gerber_BottomSilkLayer.GBO**                 | 底层丝印层                   |
| **Gerber_TopSolderMaskLayer.GTS**              | 顶层阻焊层                   | 也可以称之为开窗层，默认板子盖油，在该层绘制的元素对应到顶层的区域则不盖油                                                                                                                         |
| **Gerber_BottomSolderMaskLayer.GBS**           | 底层阻焊                     | 也可以称之为开窗层，默认板子盖油，在该层绘制的元素对应到底层的区域则不盖油                                                                                                                         |
| **Gerber_TopPasteMaskLayer.GTP**               | 顶层助焊层                   | 开钢网用                                                                                                                                                                                           |
| **Gerber_BottomPasteMaskLayer.GBP**            | 底层助焊层                   | 开钢网用                                                                                                                                                                                           |
| **Gerber_TopAssemblyLayer.GTA**                | 顶层装配层                   | 仅做读取，不影响PCB制造                                                                                                                                                                            |
| **Gerber_BottomAssemblyLayer.GBA**             | 底层装配层                   | 仅做读取，不影响PCB制造                                                                                                                                                                            |
| **Gerber_MechanicalLayer.GME**                 | 机械层                       | 记录在 PCB 设计里面在机械层记录的信息，仅做信息记录用，生产时默认不采用该层的形状进行制造，该层仅做文字标识用。比如：工艺参数、V割路径等                                                           |
| **Gerber_DocumentLayer.GDL**                   | 文档层                       | 记录PCB的备注信息用，不参与制造生产                                                                                                                                                                |
| **Gerber_CustomLayer1.GCL**                    | 用户自定义层                 | 用户自定义层一般不属于生成所需的层，如果需要生产使用，可以和板厂进行沟通                                                                                                                           |
| **Gerber_DrillDrawingLayer.GDD**               | 钻孔图层                     | 该层不参与制造，对生成过孔的位置以做对照标识用                                                                                                                                                     |
| **Gerber_TopStiffenerLayer_xx_xx.GTSL**        | 顶层加强板层                 | 仅嘉立创使用，该文件是加强板图层，xx表示加强板类型参数                                                                                                                                             |
| **Gerber_BottomStiffenerLayer_xx_xx.GBSL**     | 底层加强板层                 | 仅嘉立创使用，该文件是加强板图层，xx表示加强板类型参数                                                                                                                                             |
| **Drill_PTH_Through.DRL**                      | 金属化多层焊盘的钻孔层       | 这个文件显示的是内壁需要金属化的钻孔位置，如多层焊盘和通孔过孔                                                                                                                                     |
| **Drill_PTH_Through_Via.DRL**                  | 金属化通孔类型过孔的钻孔层   | 这个文件显示的是内壁需要金属化的钻孔位置，如过孔。这个文件嘉立创使用                                                                                                                               |
| **Drill_PTH_Inner1_to_Inner2.DRL**             | 金属化盲埋孔类型过孔的钻孔层 | 这个文件显示的是内壁需要金属化的钻孔位置。Inner1 和 Inner2 根据盲埋孔的层类型自动变化                                                                                                              |
| **Drill_NPTH_Through.DRL**                     | 非金属化钻孔层               | 这个文件显示的是内壁不需要金属化的钻孔位置，比如通孔(圆形挖槽区域)                                                                                                                                 |
| **Fabrication_ColorfulTopSilkscreen.FCTS**     | 顶层彩色丝印文件             | 仅嘉立创使用，导出Gerber时勾选彩色丝印工艺时才有此文件                                                                                                                                             |
| **Fabrication_ColorfulBottomSilkscreen.FCBS**  | 底层彩色丝印文件             | 仅嘉立创使用，导出Gerber时勾选彩色丝印工艺时才有此文件                                                                                                                                             |
| **Fabrication_ColorfulBoardOutLineMark**       | 彩色丝印Mark点文件           | 仅嘉立创使用，导出Gerber时勾选彩色丝印工艺时才有此文件                                                                                                                                             |
| **Fabrication_ColorfulBoardOutlinelayer.FCBO** | 彩色丝印板框层文件           | 仅嘉立创使用，导出Gerber时勾选彩色丝印工艺时才有此文件                                                                                                                                             |
| **jlcpcb.json**                                | Gerber配置文件               | 仅嘉立创使用，用来存储一些额外下单使用的信息，比如加强板位置等                                                                                                                                     |
| **FlyingProbeTesting.json**                    | 嘉立创飞针测试文件           | 仅嘉立创使用，用来存储飞针测试信息，方便生产后进行飞针测试                                                                                                                                         |

**注意**：

- _在生成制造文件之前，请务必进行2D或3D预览，查看设计管理器的 DRC 错误项，避免生成有缺陷的Gerber文件。_
- _生成 Gerber 是通过浏览器生成，所以必须通过浏览器自身的下载功能下载，不能使用任何第三方下载器_
- _Gerber文件的坐标跟随画布坐标_
- _导出Gerber时，钻孔文件坐标格式精度(整数位：小数位）默认mm为3:5，inch为2：6，当尺寸超出范围时自动用4:2格式，如果你在CAM350等查看工具发现钻孔偏移，请调整钻孔坐标格式即可（通常是mm 3：3，inch 2：4）。你也可以导出时选择自定义输出，设置格式精度。_
- _嘉立创EDA的圆形挖槽区域，当直径小于等于6.5mm时，在Gerber输出为NPTH钻孔，大于6.5mm的圆形挖槽区域与其他形状的挖槽区域，在Gerber中在板GKO文件体现。_

## Gerber预览

在将 Gerber 文件发送给制造商之前，请务必使用 Gerber 查看器进行详细检查，以确保文件符合设计要求且无设计缺陷。推荐使用嘉立创 DFM 工具进行 Gerber 文件的全面检查。

**使用方法**：

1. 打开嘉立创 DFM 官方网站 [www.jlc-dfm.com](https://www.jlc-dfm.com/)

    ![图 5](/storage/images/cn/pcb/export-pcb-fabrication-file-gerber/export-pcb-fabrication-file-gerber_20250103_110636.jpg)

2. 用户可以选择通过客户端或直接上传文件进行 Gerber 分析。支持的文件类型包括 Gerber 文件、PADS/Altium/Protel PCB 源文件（zip/rar 格式）。

![图 6](/storage/images/cn/pcb/export-pcb-fabrication-file-gerber/export-pcb-fabrication-file-gerber_20250103_110824.jpg)

3. 这里使用客户端进行演示，打开一个文件后，默认会进入 PCB 的 DFM 界面，并展示 PCB 图。

![图 10](/storage/images/cn/pcb/export-pcb-fabrication-file-gerber/export-pcb-fabrication-file-gerber_20250103_112113.jpg)

4. 点击`执行PCB检查`按钮进行 PCB 分析。在`PCB结果`中可以看到详细的分析项，按红黄绿三色区分安全等级。点击这些按钮可以查看对应分析项目的具体报告位置，灰色按钮表示该分析项无相关问题。详情请参阅[DFM分析项结果查看界面帮助](https://www.jlc-dfm.com/help_document/id/q3i41544.html)。

    ![图 11](/storage/images/cn/pcb/export-pcb-fabrication-file-gerber/export-pcb-fabrication-file-gerber_20250103_112124.jpg)

5. 检查完成后，在`概述`项中可以看到与 PCB 生产报价相关的参数信息，以及其他非 DFM 相关的数据，如锣程统计等

![图 13](/storage/images/cn/pcb/export-pcb-fabrication-file-gerber/export-pcb-fabrication-file-gerber_20250103_112139.jpg)

6. 嘉立创 DFM 同样支持 SMT 分析。点击`执行SMT检查`按钮会单独打开 SMT 分析界面（此功能需要用户登录认证）。 SMT 分析主要关注元件装配信息，因此 PCB 板子将以 2D 仿真图的形式展示。

![图 14](/storage/images/cn/pcb/export-pcb-fabrication-file-gerber/export-pcb-fabrication-file-gerber_20250103_112243.jpg)

7. 如果当前环境打开的是 Gerber 文件，则需先执行`BOM匹配`操作，加载元件信息。

![图 15](/storage/images/cn/pcb/export-pcb-fabrication-file-gerber/export-pcb-fabrication-file-gerber_20250103_112518.jpg)

![图 16](/storage/images/cn/pcb/export-pcb-fabrication-file-gerber/export-pcb-fabrication-file-gerber_20250103_112523.jpg)

8.  系统会自动执行一次 BOM 匹配，尽可能匹配所有元件。部分未自动匹配成功的元件需要人工手动匹配。完成匹配后，点击`保存并关闭`，匹配好的元件将同步到主界面上。

![图 17](/storage/images/cn/pcb/export-pcb-fabrication-file-gerber/export-pcb-fabrication-file-gerber_20250103_112619.jpg)

![图 18](/storage/images/cn/pcb/export-pcb-fabrication-file-gerber/export-pcb-fabrication-file-gerber_20250103_112644.jpg)

9. 完成所有分析检查后，嘉立创 DFM 支持一键导出 DFM 报告。
   ![图 19](/storage/images/cn/pcb/export-pcb-fabrication-file-gerber/export-pcb-fabrication-file-gerber_20250103_112718.jpg)

10. 导出的报告为PDF文档，部分内容如下图所示。

    ![图 20](/storage/images/cn/pcb/export-pcb-fabrication-file-gerber/export-pcb-fabrication-file-gerber_20250103_112745.jpg)

    ![图 21](/storage/images/cn/pcb/export-pcb-fabrication-file-gerber/export-pcb-fabrication-file-gerber_20250103_112752.jpg)

    ![图 22](/storage/images/cn/pcb/export-pcb-fabrication-file-gerber/export-pcb-fabrication-file-gerber_20250103_112757.jpg)

其他 Gerber 查看器有：Gerbv、FlatCAM、CAM350、ViewMate、GerberLogix 等 DFM 检查工具。

可以使用免费的Gerbv：

官网主页：[http://gerbv.geda-project.org/](http://gerbv.geda-project.org/)
下载地址：[https://sourceforge.net/projects/gerbv/files/](https://sourceforge.net/projects/gerbv/files/latest/download?source=files)
下载地址2：[Gerbv-2.6.0.exe](https://image.lceda.cn/files/Gerbv_2.6.0.exe)

Gerbv 使用方法：

1. 下载 Gerbv，并打开；解压下载的 Gerber 压缩包。

2. 点击左下角的加号 `+` ，打开 Gerber 文件夹，并 **SHIFT+全选** 或者 **CTRL+A全选** 解压后的Gerber文件。

![](/storage/images/en/pcb/export-pcb-fabrication-file-gerber/export-pcb-fabrication-file-gerber_20240621_172127.png)

3. 然后进行缩放，量测，换层，检查钻孔，铺铜等是否满足设计与制作要求。

操作演示视频：[PCB - 导出 - Gerber预览](https://www.bilibili.com/video/BV12e411g7zs/?spm_id_from=333.999.0.0)
