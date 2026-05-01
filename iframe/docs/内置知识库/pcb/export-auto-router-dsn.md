# 自动布线文件

自动布线文件是给第三方自动布线工具使用。

如果内置的自动布线器无法满足自动布线需求，嘉立创EDA支持导出自动布线文件 dsn 和导入自动布线会话文件 ses，你可以通过导出自动布线文件使用第三方自动布线工具进行布线，再导入 ses 文件即可。

**操作步骤**：

1、打开PCB导出自动布线文件 dsn，建议把不需要的过孔和导线先移除。

-   顶部菜单 - 导出 - 自动布线(DSN)
-   顶部菜单 - 文件 - 导出 - 自动布线(DSN)

![图 188](/storage/images/cn/pcb/export-auto-router-dsn/export-auto-router-dsn_20240621_172124.png)

2、打开第三方自动布线工具，打开自动布线文件 DSN

第三方自动布线工具有：Freerouting，ELECTRA，TopoR等

Freerouting下载地址：[https://github.com/freerouting/freerouting](https://github.com/freerouting/freerouting/releases)

以Freerouting举例：

1）打开Freerouting，打开自动布线文件SES

![图 2](/storage/images/en/pcb/export-auto-router-dsn/export-auto-router-dsn_20240621_172123.png)

2）设置自动布线规则，如果不需要设置可以直接点布线

![图 3](/storage/images/en/pcb/export-auto-router-dsn/export-auto-router-dsn_20240621_172124.png)

3）完成后导出自动布线会话文件 ses，会保存在 dsn 相同的目录下

![图 4](/storage/images/en/pcb/export-auto-router-dsn/export-auto-router-dsn_20240621_172125.png)

3、把自动布线会话文件导入PCB中，完成导入

入口：顶部菜单 - 文件 - 导入 - 自动布线(SES)。

![图 189](/storage/images/cn/pcb/export-auto-router-dsn/export-auto-router-dsn_20240621_172125.png)

编辑器会自动生成导线和过孔，完成自动布线。
