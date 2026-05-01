# 导入Allegro/OrCad

嘉立创EDA专业版支持导入OrCad原理图文件和Orcad原理图库文件。

推荐使用[嘉立创EDA文件迁移助手](/cn/import-export/easyeda-pro-format-converter)进行格式转换。

## 操作步骤

### 导入OrCad文件

1、打开OrCad软件，打开原理图 DSN 文件

2、在顶部菜单 - 文件 - 导出 - EDIF 或 Library XML，获得原理图 EDF 后缀文件或原理图库文件 XML。如果是导出 XML 需要手动选择一下要导出的 OLB 文件和输出目录。

3、在嘉立创EDA开始页，选择导入其他

![picture 1](/storage/images/en/import-export/import-allegro-orcad/import-allegro-orcad_20240621_172122.png)

文件类型下拉选择 Allegro/Orcad，选择文件后导入即可，可以根据需要选择导入文件还是提取库。

![picture 2](/storage/images/en/import-export/import-allegro-orcad/import-allegro-orcad_20240621_172123.png)

如果OrCad原理图和Allegro的PCB是一起的项目，可以把Allegro的文件转换好后一起压缩在zip压缩包里面再导入到嘉立创EDA，导入时会自动进行封装关联到器件。

### 导入Allegro文件

从v2.1开始，嘉立创EDA支持导入Allegro，因为Allegro的文件是一个加密的数据库文件，需要使用一个提取工具，把数据库转为 ASCII 文件，下载下面的转换插件，安装后可以导出 ebrd 和 edra 文件。

1、下载Allegro转ASCII插件：
1）下载[嘉立创EDA文件迁移助手](/cn/import-export/easyeda-pro-format-converter)
2）或下载插件安装：

exe安装版：[export-allegro-to-ascii.zip](https://image.lceda.cn/files/extensions/allegro/export-allegro-to-ascii_v3.0.zip)
bat安装版：[export-allegro-to-ascii.zip](https://image.lceda.cn/files/extensions/allegro/export-allegro-to-ascii_v1.7.1.zip)
2、根据压缩包内的教程安装好插件。注意，插件可能在低版本 Allegro 不兼容，请自行验证。
1）解压压缩包后，双击运行`install-allegro-extension.exe`或`install-allegro-extension.bat`会自动安装插件，如果安装失败，可以根据readme文件进行手动安装。

2）打开 Allegro 软件，在顶部菜单 Batch Conversion 菜单，打开 Convert PCB to ASCII 或转封装库 Convert Lib to ASCII 弹窗。
![picture 1](/storage/images/en/import-export/import-allegro-orcad/import-allegro-orcad_20240621_172126.png)

3）打开弹窗后选择要转换的 brd 或 dra 文件所在目录，和设置要输出的目录，点 Translate 按钮进行转换。

3、在输出目录找到 ebrd 后缀的PCB文件，或 edra 后缀的封装库文件，在嘉立创EDA进行导入即可
![picture 2](/storage/images/en/import-export/import-allegro-orcad/import-allegro-orcad_20240621_172127.png)

## 批量转换

### 批量转换OrCad

如果你有大量的Orcad原理图或者原理图库，可以使用下面的插件进行批量转换，它会根据你选择的文件夹，和子文件夹扫描转换。

1、下载转换脚本：[export-orcad-to-ascii.zip](https://image.lceda.cn/files/extensions/orcad/export-orcad-to-ascii_v1.2.0.zip)

2、解压后安装脚本。根据里面的Readme.txt进行安装脚本。

3、根据教程进行批量转换原理图DSN文件或原理图库OLB文件。

4、转换完成后，在输出目录找到文件，再在嘉立创EDA导入即可。如果OrCad原理图和Allegro的PCB是一起的项目，可以把Allegro的文件转换好后一起压缩在zip压缩包里面再导入到嘉立创EDA，导入时会自动进行封装关联到器件。

### 批量转换Allegro

如果需要大批量的转换Allegro文件为 ebrd 或 edra 格式，可以使用上文提供的转换插件，选择文件夹后进行批量转换。

插件会自动遍历文件夹下的子文件夹和全部 brd 文件或 dra 文件，批量转换的时候会时间比较长，请耐心等待。

## 注意事项

1、因为Orcad原理图没有包含PCB，所以目前至导入OrCad原理图到嘉立创EDA后，元件的封装属性会为空，需要重新绑定封装。这个是因为封装绑定设计和Orcad不同导致，嘉立创EDA需要关联绑定，不能通过输入封装名进行关联。
2、Allegro的图元设计和嘉立创EDA图元设计不一样，可能有细节差异，比如铺铜，焊盘热焊，方形孔，焊盘多孔等在导入后会根据嘉立创EDA的图元属性自动调整。

## 导入前后差异

| 图元/图层          | Allegro                             | 嘉立创EDA                                       | 补充说明                                         |
| ------------------ | ----------------------------------- | ----------------------------------------------- | ------------------------------------------------ |
| 图层               | PLACE_BOUND_TOP, PLACE_BOUND_BOTTOM | 元件外形层                                      | 导入专业版的元件外形层图元线条使用的线宽固定是 2 |
| 图层               | -                                   | DOCUMENT                                        | 一些作用未知的层解析到文档层                     |
| 图层               | -                                   | 自定义层                                        | Board Geometry 中对应不上的层                    |
| 字体               | 笔画字体                            | 默认字体                                        | 轻微偏差                                         |
| 焊盘阻焊、助焊     | 可为任意图形                        | 阻焊、助焊扩展                                  | -                                                |
| 焊盘编号           | 可设置位置                          | 忽略位置信息                                    | 显示在焊盘中心                                   |
| 方形钻孔           | -                                   | 用圆形孔代替                                    | -                                                |
| -                  | 钻孔符号                            | -                                               | 不需要该符号                                     |
| 线宽               | 一些需要线宽的图元线宽为 0          | -                                               | 设置默认线宽 1mil                                |
| 焊盘中有多个孔     | -                                   | 只保留一个孔                                    | 暂不支持焊盘中有多个孔                           |
| 焊盘内层图形       | 各个内层图元能单独定义              | 内层图形都一样                                  | 取 Allegro 中的 default internal 图形导入        |
| 热风焊盘           | Thermal Pad                         | 可用热焊规则替代                                | 封装文件中信息不够，使用默认规则                 |
| 隔离焊盘           | Anti Pad                            | 可用内电层网络间距规则或者禁止区域替代          | 封装文件中不解析，因为场景不适用                 |
| 封装中的内层图形   | 对应 PCB 同名内层图形               | 对应 PCB 同 layer id（物理堆叠顺序） 的内层图形 | 这个不是导入的问题，但需要用户注意一下           |
| Route Keepin       | 布线区域                            | 不支持 Keepin 区域                              | -                                                |
| 禁止区域           | ROUTE, PACKAGE, VIA KEEPOUT         | -                                               | 依据 CLASS 判断禁止项，具体禁止项可能存在偏差    |
| 铺铜配置           | -                                   | 保留铺铜轮廓；使用默认铺铜规则                  | -                                                |
| 热焊               | -                                   | 导线                                            | ASCII 格式中是导线形式                           |
| 约束规则           | -                                   | 支持部分间距和物理规则                          | 缺少规则与网络的关联                             |
| 约束区域           | -                                   | -                                               | ASCII 格式中信息不够，暂不支持                   |
| 画布配置           | -                                   | -                                               | ASCII 格式中未记录，暂不支持                     |
| 图元颜色           | -                                   | -                                               | ASCII 格式中未记录                               |
| 图元激活、显示状态 | -                                   | -                                               | ASCII 格式中未记录                               |
