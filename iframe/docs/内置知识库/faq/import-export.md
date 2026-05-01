# 导入导出常见问题

## 如何迁移标准版工程 {#迁移}

::: details
当我们有标准版的工程文件时，该怎么导入嘉立创EDA标准版的文件到专业版里面？

第一种 打开专业版，在开始页点击“迁移标准版”图标即可导入标准版的文件。
![](/storage/images/cn/faq/import-export/how-to-migrate-std-projects/how-to-migrate-std-projects_20240626_205623.png)

第二种 在专业版未打开工程时，先在嘉立创EDA标准版 - 工程列表 - 右键 - 下载工程，
![](/storage/images/cn/faq/import-export/how-to-migrate-std-projects/how-to-migrate-std-projects_20240626_205708.png)

第三种 在标准版打开工程文件后，导出嘉立创EDA文件 JSON 格式
![](/storage/images/cn/faq/import-export/how-to-migrate-std-projects/how-to-migrate-std-projects_20240626_205843.png)

然后在嘉立创EDA专业版 - 导入嘉立创EDA(标准版)，选择 ZIP 压缩包或 JSON 文件导入即可。
![](/storage/images/cn/faq/import-export/how-to-migrate-std-projects/how-to-migrate-std-projects_20240626_205725.png)

如果是库文件，则在嘉立创EDA标准版先导出嘉立创EDA格式，再导入即可。导入原理图库的时候可以选择导入时生成器件还是符号，还是同时生成。

注意：如果有 PCB 的，请务必把原理图和 PCB 一起压缩后导入。

3、在专业版已打开工程时，可以选择导入嘉立创EDA标准版的单个 JSON 文件，导入后会插入在当前已打开的工程里面。

后续我们将提供一个功能批量迁移和导入标准版工程。
:::

## 如何快速批量导出专业版工程 {#导出专}

::: details
如果你使用的是浏览器在线版，可以在工作区对专业版工程进行批量下载。

1、在工作区找到工程列表。可以在编辑器左侧工程列表右键 - 工作区打开。
![](/storage/images/cn/faq/import-export/import-export_20240628_203829.png)

2、点击查看所有工程。
![](/storage/images/cn/faq/import-export/import-export_20240628_203906.png)

3、点击批量下载专业版
![](/storage/images/cn/faq/import-export/import-export_20240628_210938.png)

4、勾选后点击下载，会自动打开编辑器，并自动不断下载工程归档文件 epro 到本地
![](/storage/images/cn/faq/import-export/import-export_20240628_211043.png)

如果你使用的是离线客户端，可以手动一个个工程打开工程后，在文件 - 另存为 - 工程另存为本地进行导出。
![](/storage/images/cn/faq/import-export/import-export_20240628_211232.png)

离线客户端批量导出工程为 epro 归档工程文件可以安装插件：[export-design-archive.eext](https://image.lceda.cn/files/extensions/lceda-pro/export-design-archive_v1.1.9.eext)，下载后在设置 - 扩展 - 扩展管理器进行安装。

支持批量导入 epro 工程归档文件在编辑器，在导入的时候多选 epro 导入即可。

:::

## 导入AD文件层处理逻辑 {#AD层逻辑}

::: details
AD文件导入EDA里的board shape 转为边框层，keep-out 转为文档层，mechanical 等转为机械层
:::

## 如何导出AD库 {#导出AD库}

::: details
![图 5](/storage/images/cn/faq/import-export/import-export_20240826_140352.png)
![图 6](/storage/images/cn/faq/import-export/import-export_20240826_140548.png)
![图 7](/storage/images/cn/faq/import-export/import-export_20240826_140558.png)
![图 8](/storage/images/cn/faq/import-export/import-export_20240826_140607.png)
:::

## AD文件如何导入嘉立创EDA专业版 {#导入AD}

::: details
[AD文件导入嘉立创EDA专业版文档教程：](https://prodocs.lceda.cn/cn/import-export/import-altium-designer/)
:::

## 如何导出AD文件 {#导出AD文件}

::: details
文件-导出-AD
![图 18](/storage/images/cn/faq/import-export/import-export_20240826_152000.png)
:::

## 如何批量导入AD库文件 {#导入AD库}

::: details
[如何批量导入AD库文件文档教程：](https://prodocs.lceda.cn/cn/import-export/import-altium-designer/#%E6%89%B9%E9%87%8F%E5%AF%BC%E5%85%A5altum%E6%96%87%E4%BB%B6)
:::

## PCB如何导入/导出DXF文件 {#P导DXF}

::: details
文件-导入/导出
![图 14](/storage/images/cn/faq/import-export/import-export_20240826_151712.png)
![图 16](/storage/images/cn/faq/import-export/import-export_20240826_151725.png)
:::

## 原理图如何导入/导出DXF {#原DXF}

::: details

![图 17](/storage/images/cn/faq/import-export/import-export_20240826_151846.png)
![图 19](/storage/images/cn/faq/import-export/import-export_20241127_152010.png)

:::

## 原理图，PCB如何导入/导出PDF文件？ {#PDF}

::: details

![图 97](/storage/images/cn/faq/pcb/pcb_20240809_145527.png)

![图 98](/storage/images/cn/faq/pcb/pcb_20240809_145531.png)

![图 99](/storage/images/cn/faq/pcb/pcb_20240809_145535.png)

![图 100](/storage/images/cn/faq/pcb/pcb_20240809_145541.png)
:::

## 想要导入DWG文件格式如何导入？ {#dwg}

::: details
不支持的。因为DWG格式是二进制的，比较复杂，目前我们团队没有精力研究，在CAD另存为DXF再导入
:::
