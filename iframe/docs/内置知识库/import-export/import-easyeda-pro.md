# 导入嘉立创EDA专业版

在导入专业版前，需要先在专业版的编辑器导出专业版的工程

## 导出嘉立创EDA专业版

### 导出工程文件

**导出流程**：

-   顶部菜单 - 文件 - 另存为(本地)

![image-20210522174102873](/storage/images/en/project/file-save-as-local/file-save-as-local_20240621_172123.png)

点击后即可将工程里面的文件压缩到本地，压缩包里包括放置在工程原理图的器件库和封装。

![image-20210522174112628](/storage/images/en/project/file-save-as-local/file-save-as-local_20240621_172124.png)

### 导出库文件

在底部库面板，可以对器件，符号，封装，面板库进行“批量另存为”导出到本地，导出后可以进行分发再次导入。注意：3D模型库不支持批量导出本地。
![图 3](/storage/images/cn/import-export/import-lceda-pro/import-lceda-pro_20240927_120438.png)
![图 4](/storage/images/cn/import-export/import-lceda-pro/import-lceda-pro_20240927_120514.png)
另存为本地后会得到一个 elibz 后缀的库包。

## 导入嘉立创EDA专业版

### 导入工程文件

1、在专业版未打开工程时，在嘉立创EDA专业版开始页 - 导入嘉立创EDA(专业版)，选择 epro 或 zip 压缩包导入即可。

![picture 3](/storage/images/cn/import-export/import-lceda-pro/import-lceda-pro_20240621_172123.png)

2、文件 - 导入 - 嘉立创EDA(专业版)

![picture 4](/storage/images/cn/import-export/import-lceda-pro/import-lceda-pro_20240621_172124.png)

如果需要批量导入 epro 工程文件，在导入时在选择文件弹窗，按 SHIFT+点选进行多选 epro 后导入。

![图 0](/storage/images/cn/import-export/import-lceda-pro/import-lceda-pro_20240927_113656.png)

选择文件的操作类型，点击导入即可完成专业版的导入。

单个导入弹窗：
![图 2](/storage/images/cn/import-export/import-lceda-pro/import-lceda-pro_20240927_113952.png)

批量导入工程弹窗：

![图 1](/storage/images/cn/import-export/import-lceda-pro/import-lceda-pro_20240927_113923.png)

点击“导入”后，可以选择"新建工程"或者"保存至已有工程"。

![图 7](/storage/images/cn/import-export/import-lceda-pro/import-lceda-pro_20240930_152955.png)

如果是库文件，则在嘉立创EDA专业版先导出嘉立创EDA格式（elibz，esym，efoo，epanl），再导入即可。导入原理图库的时候可以选择导入时生成器件还是符号，还是同时生成。

### 导入库文件

方法一：通过elibz文件导入
根据上文“导出库文件”的操作后得到的 elibz 文件，进行导入，可以批量导入，导入步骤和导入工程文件epro类似。
![图 6](/storage/images/cn/import-export/import-lceda-pro/import-lceda-pro_20240927_120930.png)

导入时可以设置导入的库分类。

方法二：通过工程文件epro导入时进行提取
![图 5](/storage/images/cn/import-export/import-lceda-pro/import-lceda-pro_20240927_120914.png)
