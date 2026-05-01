# 自动布线

## 内部自动布线

嘉立创EDA支持自动布线，目前的自动布线效果一般，需要手动再次调整，后续我们将继续优化自动布线功能。

**操作入口：**

-   顶部菜单栏 - 布线 - 自动布线

![图 3](/storage/images/en/pcb/route-auto-routing/route-auto-routing_20240621_172123.png)

你可以设置一些自动布线相关的参数：

![图 4](/storage/images/en/pcb/route-auto-routing/route-auto-routing_20240621_172124.png)

**布线拐角**：45度或90度。一般布线拐角都是45度，如果板子要求不高，使用90度布线也不会有什么影响

**已有导线/过孔**：保留或移除。在开始布线时，可以对已经存在的导线或者过孔进行保留，或者移除。默认保留。如果选择移除会自动清除全部导线或过孔进行布线。

**效果优先级**：速度优先或完成度优先。如果想要快速布线就选择速度优先，在一定尝试时间内自动停止，可能有部分没有进行布线；如果不赶时间，则可以选择完成度优先，改选项会尽量完成布线。

**过孔数量**：少，中或多。这个决定自动放置的过孔数量，过孔数量越多布线成功率越高。根据自己的接受程度选择。自动布线会自行生成过孔。

**网络优先级**：根据设置的网络的网络顺序进行从头到尾进行自动布线。不同的网络排序会影响布线成功率和最终布线效果。

-   默认：编辑器程序直接读取到的PCB网络顺序，未经排序。
-   随机：随机生成网络排序进行布线。
-   自定义网络名优先：网络名不是$开头的网络优先。按照首字母自然增序排序。
-   焊盘从多到少：根据网络包含的焊盘数量从多到少进行排序网络。
-   焊盘从少到多：根据网络包含的焊盘数量从少到多进行排序网络。
-   焊盘从远到近：根据网络包含的焊盘的相互间距的总距离，从远到近进行排序网络。
-   焊盘从近到远：根据网络包含的焊盘的相互间距的总距离，从近到远进行排序网络。

**布线图层**：设置需要布线的图层。

**忽略网络**：设置不需要进行自动布线的网络，点击下拉列表选择网络添加，点击移除按钮移除网络。比如 GND 这种不需要自动布线，一般在最后进行铺铜连接。

**设计规则**：自动布线根据设计规则进行布线和放置过孔。可以先设置设置规则后进行布线。

点击“运行”按钮后开始自动布线，布线过程中可以实时预览。如过布线角度是45度，布线时是以90度拐角进行布线，在最后面结束时才会优化为45度布线。
在布线过程中停止布线，会保留已经完成的90度布线和过孔，不需要的话可以手动清除。

## 外部自动布线

如果内置的自动布线器无法满足自动布线需求，嘉立创EDA支持导出自动布线文件 dsn 和导入自动布线会话文件 ses，你可以通过导出自动布线文件使用第三方自动布线工具进行布线，再导入 ses 文件即可。

**操作步骤**：

1、打开PCB导出自动布线文件 dsn，建议把不需要的过孔和导线先移除。

通过：顶部菜单 - 导出 - 自动布线(DSN)，或顶部菜单 - 文件 - 导出 - 自动布线(DSN)

![图 188](/storage/images/cn/pcb/export-auto-router-dsn/export-auto-router-dsn_20240621_172124.png)

2、打开第三方自动布线工具，打开自动布线文件 DSN

第三方自动布线工具有：Freerouting，ELECTRA，TopoR等

Freerouting下载地址：

-   [https://freerouting.mihosoft.eu/](https://freerouting.mihosoft.eu/)
-   [https://github.com/freerouting/freerouting](https://github.com/freerouting/freerouting/releases)

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

操作演示视频：https://www.bilibili.com/video/BV1F14y1s7o6/?spm_id_from=333.999.0.0

# 自动布线交流群

![图 1](/storage/images/cn/pcb/route-auto-routing/route-auto-routing_20260119_115230.png)
