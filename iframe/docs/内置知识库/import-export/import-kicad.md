# 导入KiCad

嘉立创EDA专业版支持导入 KiCad 5.1 和 KiCad 5.9 版本的格式文件。

如果是更低版本的 KiCad 文件请在 5.1 保存后重新打包导入。

推荐使用[嘉立创EDA文件迁移助手](/cn/import-export/easyeda-pro-format-converter)进行格式转换。

1、在KiCad打开工程后，在顶部用压缩功能进行打包

![图 11](/storage/images/en/import-export/import-kicad/import-kicad_20240621_172122.png)

2、找到打包后的 zip 文件，在专业版开始页进行导入。

![图 12](/storage/images/cn/import-export/import-kicad/import-kicad_20240621_172123.png)

也支持直接导入库文件。

注意：

1、KiCad 工程压缩请使用 KiCad 自带的打包功能，不要自行在文件夹打包，因为自带的打包功能会把原理图使用的库文件也自动打包。

2、太低版本的KiCad可能支持不是很好，请在 v5.1 以上版本重新保存一次，再打包成 zip 文件导入。

3、PCB 导入后会自动重建铺铜，铺铜结果会有差异，请仔细检查。
