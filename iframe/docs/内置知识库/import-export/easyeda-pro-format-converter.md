# 格式转换助手

嘉立创EDA文件迁移助手用于不同EDA软件与嘉立创EDA工程之间的批量格式转换和库提取。

![图 20](/storage/images/cn/import-export/easyeda-pro-format-converter/easyeda-pro-format-converter_20241212_140728.png)

支持以下表格中列出的EDA软件格式的批量格式迁移。

|   EDA软件名称   | 支持导入格式                                                                                                  | 库提取 | 支持导入 | 支持导出 |
| :-------------: | :------------------------------------------------------------------------------------------------------------ | :----: | :------: | :------: |
|     Altium      | `.zip` `.schdoc` `.pcbdoc` `.sch` `.pcb` `.schlib` `.pcblib` `.intlib` `.lib`                                 |   √    |    √     |    √     |
|  Allegro Orcad  | `.zip` `.edra` `.xml` `.ebrd` `.edf` `.edif`                                                                  |   √    |    √     |          |
|      PADS       | `.zip` `.pcb` `.asc` `.sch` `.txt` `.d` `.c`                                                                  |   √    |    √     |    √     |
|      KICad      | `.zip` `.lib` `.mod` `.kicad_mod` `.kicad_wks` `.kicad_sym` `.pro.kicad_pro` `.sch` `.kicad_sch` `.kicad_pcb` |   √    |    √     |          |
|      EAGLE      | `.zip` `.lbr` `.sch` `.brd`                                                                                   |   √    |    √     |          |
| 嘉立创EDA标准版 | `.zip` `.json`                                                                                                |   √    |    √     |          |

从嘉立创EDA专业版迁出支持格式：`.zip` `.epro`

:::warning 注意

本工具可以直接转换ASCII格式的第三方EDA工具文档，非ASCII格式的，需要选择第三方EDA的主执行文件exe后才可以进行转换，所以您需要提前在电脑上安装对应的EDA软件。

:::

## 免责声明

1. 由于格式设计和图元的不同，无法保证导出的EDA格式文件完全一致（尤其是文本大小和位置）。请务必在迁移到的EDA软件中打开并仔细检查，切勿未经检查直接下单。嘉立创EDA不保证不会出现任何错误。
2. 嘉立创EDA不对因库错误和格式转换错误导致的任何损失承担责任。如不同意，请勿使用格式转换助手。
3. 如需订购PCB，建议生成Gerber文件。
4. 请勿反复将原理图或PCB文件进行格式转换，此操作可能导致细节丢失。
5. 如您发现导出文件与原设计差异较大，请联系我们，我们将尽力修正。联系方式：https://prodocs.lceda.cn/cn/faq/contact-us

## 下载页面

[嘉立创EDA格式转换助手](https://lceda.cn/page/download)

![图 0](/storage/images/cn/import-export/easyeda-pro-format-converter/easyeda-pro-format-converter_20251106_093335.png)

## 使用教程

首先点击上方链接下载并安装“格式转换助手”，打开软件后将显示如下页面。

![图 3](/storage/images/cn/import-export/easyeda-pro-format-converter/easyeda-pro-format-converter_20241211_162500.png)

将鼠标悬停在EDA软件图标上，可查看已支持的转换格式。

![图 4](/storage/images/cn/import-export/easyeda-pro-format-converter/easyeda-pro-format-converter_20241211_162542.png)

点击需要转换的EDA软件图标，将显示如下转换说明页面。（此处以Altium为例）

![图 19](/storage/images/cn/import-export/easyeda-pro-format-converter/easyeda-pro-format-converter_20241212_140706.png)

将属于同一工程的原理图文件和PCB文件存放在同一文件夹内，工程文件夹可以压缩成ZIP格式。（ZIP文件内可以是工程文件或工程文件夹，同时存在时仅读取工程文件）

```yaml
.
├─ 工程1
├─ 工程2
│  ├─原理图文件
│  └─PCB文件
├─ 符号.Schlib
├─ 封装.Pcblib
└─ 工程3.zip
```

![图 33](/storage/images/cn/import-export/easyeda-pro-format-converter/easyeda-pro-format-converter_20250225_092928.jpg)

点击“下一步”后，选择源文件目录及输出文件目录。如果迁移文件包含二进制格式文件，则需要指定原EDA软件的EXE路径。

![图 21](/storage/images/cn/import-export/easyeda-pro-format-converter/easyeda-pro-format-converter_20241212_140804.png)

接下来，转换助手将自动扫描可转换的工程或文件，您可以选择需要转换的工程并点击“下一步”。

![图 34](/storage/images/cn/import-export/easyeda-pro-format-converter/easyeda-pro-format-converter_20250225_093003.jpg)

在转换期间，为确保迁移过程顺利进行并降低失败风险，建议用户尽量减少或避免进行其他操作。在迁移过程中，可能会触发软件界面的自动弹窗提示，整个过程将自动进行，无需用户手动干预。

![图 35](/storage/images/cn/import-export/easyeda-pro-format-converter/easyeda-pro-format-converter_20250225_093016.jpg)

转换过程中和结束后，支持鼠标右键点击转换的文件，快速打开输出文件夹。

![图 37](/storage/images/cn/import-export/easyeda-pro-format-converter/easyeda-pro-format-converter_20250225_093525.jpg)

格式转换结束后，将出现“转换完成”的信息弹窗。

![图 36](/storage/images/cn/import-export/easyeda-pro-format-converter/easyeda-pro-format-converter_20250225_093512.jpg)

可以在输出目录下看到转换后的文件。

![图 38](/storage/images/cn/import-export/easyeda-pro-format-converter/easyeda-pro-format-converter_20250225_093636.jpg)

之后就可以在立创EDA顶部菜单栏选择“文件 - 导入 - 嘉立创EDA（专业版）...”进行文件批量导入。

![图 13](/storage/images/cn/import-export/easyeda-pro-format-converter/easyeda-pro-format-converter_20241211_170146.png)
