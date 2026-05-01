# 导入 PADS

嘉立创EDA专业版支持导入 PADS 9.5 版本 和 PADS Pro VX 2.X 版本的格式文件。

需要使用 PADS或vx2.4 另存为或导出为 ASCII 文件，选择格式版本 9.5，原始的文件是加密的二进制文件，不支持直接导入。支持直接导入 PADS 的库文件。

推荐使用[嘉立创EDA文件迁移助手](/cn/import-export/easyeda-pro-format-converter)进行格式转换。

## 操作步骤

### 导出原理图或PCB为ASCII

1. 在PADS打开PADS原理图或者PCB

2. 在顶部菜单 - 文件 - 导出，选择ASCII格式导出，原理图后缀 TXT， PCB 后缀 ASC。

3. 打开嘉立创EDA，在入口：开始页 - 导入其他，选择 PADS/PADS Pro。建议把原理图和PCB打包为 zip 压缩包后导入。

![图 0](/storage/images/cn/import-export/import-pads/import-pads_20250620_163729.png)

### 导出原理图库或封装库为ASCII

1. 打开PADS软件

2. 在顶部菜单 - 文件 - 库，打开库设置弹窗

3. 选择一个库文件，点击选择封装，符号显示出预览

4. 点击弹窗下面的导出按钮，原理图库会导出 .c 后缀文件，PCB封装库会导出 .d 后缀文件

5. 找到导出的文件，打包 zip 后导入到嘉立创EDA即可

## 批量转ASCII

1. 下载批量转ASCII脚本：

- 下载[嘉立创EDA文件迁移助手](/cn/import-export/easyeda-pro-format-converter)

- 或下载 [export-pads-to-ascii_v1.1.0.zip](https://image.lceda.cn/files/extensions/pads/export-pads-to-ascii_v1.1.0.zip)

2. 解压后，根据 REAME.txt 文件安装脚本

3. 运行脚本后，选择需要转换的文件目录，会自动转换目录下面的全部文件，包括子文件夹

4. 转换完成后，在输出目录中找到输出的文件。

:::warning 注意

1. PADS 的 PCB 图层定义并没有非常严格规定，比较灵活，所以有可能导入的图层不正确。遇到可以联系我们处理。

2. 文本和铺铜等格式与设计有差异，导入后需要仔细检查，进行微调。

:::
