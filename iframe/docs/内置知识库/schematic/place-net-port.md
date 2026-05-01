# 网络端口

网络端口有两个用途：
1、图页内网络的相互连接
2、复用图块/层次图的连接

建议减少使用第一个用途，网络端口常用于层次图连接。

**操作入口：**

-   顶部菜单 - 放置 - 网络端口。

![图 39](/storage/images/cn/schematic/place-net-port/place-net-port_20240621_172124.png)

![图 14](/storage/images/cn/schematic/place-net-port/place-net-port_20240621_172125.png)

当待放置时，可以按快捷键 TAB 进行设置端口名称和名称增序规则。

![图 13](/storage/images/cn/schematic/place-net-port/place-net-port_20240621_172126.png)

**网络连接**：网络端口当成网络标签来使用。

**层次图连接**：在绘制复用图块的时候，复用图块符号的引脚会和图页上的端口相连，作为连接关系。在根据复用图块符号生成端口，或者根据端口更新复用图块符号引脚时，会同步更新。具体可以看“复用图块”章节。

因为网络端口主要是用做层次图连接关系，所以端口的名称和所连接的导线名称可以不保持一致。如图：

![图 40](/storage/images/en/schematic/place-net-port/place-net-port_20240621_172125.png)

在修改网络端口的名称时，或者第一次放置端口到导线上时，如果导线没有设置名称，会自动给导线设置相同的名称。
