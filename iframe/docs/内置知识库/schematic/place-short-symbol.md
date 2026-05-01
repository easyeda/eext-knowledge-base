# 短接符

嘉立创EDA专业版不支持在同一条导线上同时设置或者放置两个不同的网络名。

可以使用短接符把两个不同的网络连接在一起，在生成网表的时候，转PCB的时候，会取其中一个网络名(按字母自然排序)作为最终的网络名。

**操作入口：**

-   顶部菜单 - 放置 - 短接符。

![图 33](/storage/images/en/schematic/place-short-symbol/place-short-symbol_20240621_172123.png)

如图所示，VSS 和 DGND 将连接在一起，在左侧树的全局网络中可以查看。最终的网络名将取 DGND。

![图 35](/storage/images/en/schematic/place-short-symbol/place-short-symbol_20240621_172124.png)
