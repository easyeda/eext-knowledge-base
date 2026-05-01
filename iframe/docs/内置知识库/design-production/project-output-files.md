# 工程最终可输出文件

&emsp;&emsp;在设计画完PCB电路板后，可以将PCB在各个环节中，需要使用到的文件输出整理好，为后续使用做好准备。

<center><img src="/storage/images/zh-hans/design-production/pcb-design/project-output-files/project-output-files_20250722_194320.png" style="border:1px solid gray" width="600"></center>

&emsp;&emsp;工程最终可输出文件目录如下。

<center><img src="/storage/images/zh-hans/design-production/pcb-design/project-output-files/project-output-files_20250722_193501.png" style="border:1px solid gray" width="600"></center>

## 1 工程源文件

&emsp;&emsp;将设计好的工程文件导出到本地，其中，网页在线的工程是在云端保存的，需要自行操作命令：文件->另存为->工程另存为（本地），文件格式为.epro；

<center><img src="/storage/images/zh-hans/design-production/pcb-design/project-output-files/project-output-files_20250722_165616.png" style="border:1px solid gray" width="600"></center>

&emsp;&emsp;离线客户端（全离线/半离线运行模式）的工程默认保存在：此电脑 > 文档 > LCEDA-Pro > projects 目录下，文件格式为.eprj，自行复制粘贴到“输出文件”目录下。

<center><img src="/storage/images/zh-hans/design-production/pcb-design/project-output-files/project-output-files_20250722_161811.png"  width="600"></center>

&emsp;&emsp;除此之外，还可以将原理图导出为PDF文档，方便后续查阅使用。在工程的原理图页面下，操作命令：文件->导出->PDF/图片，文件格式为.pdf；

<center><img src="/storage/images/zh-hans/design-production/pcb-design/project-output-files/project-output-files_20250722_160656.png"  width="1200"></center>

&emsp;&emsp;有需要的话，还可以导出网表文件，操作命令为：文件->导出->网表，文件格式各软件有所不同。

<center><img src="/storage/images/zh-hans/design-production/pcb-design/project-output-files/project-output-files_20250722_203545.png" style="border:1px solid gray"  width="1200"></center>

## 2 Gerber文件

&emsp;&emsp;Gerber光绘文件是制造PCB电路板的光绘机设备的底片图形文件，通常包含制造PCB电路板所需要的线路、钻孔、丝印、阻焊等图层相关信息，Gerber文件是PCB板厂通用的数据格式。

&emsp;&emsp;在工程PCB页面下，操作命令：文件->导出->PCB制板文件（Gerber文件），自定义配置相关参数信息，点击导出Gerber，完成导出。

<center><img src="/storage/images/zh-hans/design-production/pcb-design/project-output-files/project-output-files_20250722_160040.png" style="border:1px solid gray" width="1200"></center>

&emsp;&emsp;导出输出的Gerber文件是一个ZIP压缩包文件，可以自行命名保存，解压后可以看到有以下文件。

<center><img src="/storage/images/zh-hans/design-production/pcb-design/project-output-files/project-output-files_20250722_155126.png"  width="1200"></center>

&emsp;&emsp;Gerber各文件详细说明。

<center><img src="/storage/images/zh-hans/design-production/pcb-design/project-output-files/project-output-files_20250722_155804.png" style="border:1px solid gray" width="1200"></center>

<center><img src="/storage/images/zh-hans/design-production/pcb-design/project-output-files/project-output-files_20250722_160426.png" style="border:1px solid gray" width="1200"></center>

## 3 BOM物料清单

&emsp;&emsp;物料清单（Bill Of Materials）简称BOM表，用于元器件采购和 SMT 贴片使用。在PCB设计中，物料清单是制造电路板所需要使用的全部元器件清单，通常包含元器件名称、封装、制造商、供应商、价格、数量等参数信息。

&emsp;&emsp;在工程原理图页面下，操作命令：文件->导出->物料清单（BOM）。点击导出BOM，自定义配置相关参数信息，完成导出。也可以点击元件下单，在线采购。立创商城为客户提供了优质的一站式配单方案，立创BOM配单（链接：http://bom.szlcsc.com），支持多人协作，海量现货SKU，智能快速匹配，一键下单，高效提升配单采购效率。

<center><img src="/storage/images/zh-hans/design-production/pcb-design/project-output-files/project-output-files_20250722_162450.png"  width="1200"></center>

&emsp;&emsp;导出的物料清单（BOM）可以自行命名保存，然后，根据所导出的数据，整理输出最终BOM表。

<center><img src="/storage/images/zh-hans/design-production/pcb-design/project-output-files/project-output-files_20250722_162705.png"  width="1200"></center>

## 4 坐标文件

&emsp;&emsp;坐标文件（Gernerates pick and place files）是描述元器件位置信息的文件，坐标文件只能在PCB中导出，在SMT加工时方便对元器件坐标进行定位贴片。

&emsp;&emsp;在工程PCB页面下，操作命令：文件->导出->坐标文件，自定义配置相关参数信息，点击导出，可以自行命名保存，完成导出。

<center><img src="/storage/images/zh-hans/design-production/pcb-design/project-output-files/project-output-files_20250722_163106.png"  width="1200"></center>

## 5 装配文件

&emsp;&emsp;为了方便手工焊接，导出装配图PDF文件使用。

&emsp;&emsp;在工程PCB页面下，可以点击元件右键，使用查找功能，查找全部，然后在右侧属性面板，将位号，型号和值显示出来；操作命令：布局->属性位置，将“值”的属性位置为“中间”，然后手动调整好丝印的方向及大小，以便查阅焊接使用。

<center><img src="/storage/images/zh-hans/design-production/pcb-design/project-output-files/project-output-files_20250722_173150.png" style="border:1px solid gray" width="600"></center>

&emsp;&emsp;调整好后，操作命令：文件->导出->PDF/图片，勾选装配图顶层，背面也有元件，在配置装配图底层时，需注意镜像，点击右边的输出配置🖊，按下图配置导出图层，透明度和对象（记得勾选上元件属性和元件丝印），配置完成后点击确认，可以点击打印查看预览，确认没问题后导出，文件格式为.pdf。

<center><img src="/storage/images/zh-hans/design-production/pcb-design/project-output-files/project-output-files_20250722_181430.png" style="border:1px solid gray" width="1200"></center>

<center><img src="/storage/images/zh-hans/design-production/pcb-design/project-output-files/project-output-files_20250722_171436.png" style="border:1px solid gray" width="1200"></center>

&emsp;&emsp;可以将导出的装配图PDF文件，打印出纸质版来，方便焊接时查看使用，节省焊接时间。

<center><img src="/storage/images/zh-hans/design-production/pcb-design/project-output-files/project-output-files_20250722_181152.png" style="border:1px solid gray" width="1200"></center>

&emsp;&emsp;除此之外，嘉立创EDA自带了焊接辅助工具功能，在工程PCB页面下，可以点击：导出->交互式BOM，文件格式为.html，方便后续手工焊接板子查看器件位置使用。

<center><img src="/storage/images/zh-hans/design-production/pcb-design/project-output-files/project-output-files_20250722_192847.png"  width="1200"></center>

&emsp;&emsp;使用本地浏览器查看，在左侧选中器件，右侧3D预览图里被选中的器件对应高亮起，方便手工焊接使用，焊接完的器件，可以勾选左侧已焊接标记，提升焊接效率。

<center><img src="/storage/images/zh-hans/design-production/pcb-design/project-output-files/project-output-files_20250722_192941.png"  width="1200"></center>

## 6 DXF文件

&emsp;&emsp;在绘制PCB时，如有外形要求，可以使用CAD软件设计好DXF外形，导入到PCB中，充当板框外形使用，在后期面板和外壳设计中也可使用。

<center><img src="/storage/images/zh-hans/design-production/pcb-design/project-output-files/project-output-files_20250722_195430.png"  width="300"></center>

&emsp;&emsp;在工程PCB页面下，操作命令：文件->导入DXF，选择规定的结构外形DXF文件，在导入DXF窗口里，配置导入层，缩放比例保持为1，修改会导致导入的DXF外形尺寸变化，线宽默认为0.1mm。

<center><img src="/storage/images/zh-hans/design-production/pcb-design/project-output-files/project-output-files_20250722_200053.png" style="border:1px solid gray" width="1200"></center>

## 7 其他文件

&emsp;&emsp;其他文件用于存放整理好的PCB生产说明、工艺、阻抗、叠层等信息。

<center><img src="/storage/images/zh-hans/design-production/pcb-design/project-output-files/project-output-files_20250722_201616.png" style="border:1px solid gray" width="300"></center>
