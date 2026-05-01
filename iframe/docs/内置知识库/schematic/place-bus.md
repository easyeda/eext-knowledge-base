# 总线

当你绘制的原理图需要很多网络的时候，对每个网络都进行画线将非常困难和耗费时间，此时你可以使用“总线”功能。

在嘉立创EDA专业版里，总线功能已经有信号束的走向，可以应用到PCB上。

-   顶部菜单 - 放置 - 总线

-   顶部快捷栏 - 总线图标

-   快捷键 - <kbd>ALT</kbd>+<kbd>B</kbd>>

![image-20201219134212025](/storage/images/en/schematic/place-bus/place-bus_20240621_172123.png)

**注意**：专业版的总线命名必须符合规范`NET[0:5]`才能使用。

例如：我们需要连接51单片机的P0.0 - P0.7端口，则需要用总线来连接，则需要把总线命名为P0.[0:7]，才能命名成功。

![image-20201219132813711](/storage/images/en/schematic/place-bus/place-bus_20240621_172124.png)

然后在顶部菜单选择导线或快捷键w导线连接总线，当总线端出现一个短接符时，就代表总线连接成功。

总线拉出的顺序是按照你命名的名称来排序放置的，放置超过数目则就会从第一个开始排列。

![image-20210518151722359](/storage/images/en/schematic/place-bus/place-bus_20240621_172125.png)

连接完成后的总线。

![image-20210518151705745](/storage/images/en/schematic/place-bus/place-bus_20240621_172126.png)

**扇出总线分支**

**使用方法**：

-   在需要扇出总线分支的总线段上右键 - 选择扇出总线分支

![图 0](/storage/images/cn/schematic/place-bus/place-bus_20240621_172124.jpg)

操作后显示扇出总线分支弹窗，总线名称和扇出分支名称会根据所选总线填入。

![图 1](/storage/images/cn/schematic/place-bus/place-bus_20240621_172125.png)

根据所选总线段的方向，分支方向和分支位置的选项会有所变化。

![图 2](/storage/images/cn/schematic/place-bus/place-bus_20240621_172126.png)

**配置项**

总线名称：修改时会联动修改扇出分支的选项，确认后会修改总线的名称。

扇出分支：设置本次操作需要扇出的分支。

间距：设置新增分支之间的间距。

分支方向：设置新增分支的方向。

-   上边、下边

![图 6](/storage/images/cn/schematic/place-bus/place-bus_20240621_172127.png)

-   左边、右边

![图 5](/storage/images/cn/schematic/place-bus/place-bus_20240621_172128.png)

分支位置：设置分支出线的位置。

-   从上到下、从下到上

![图 3](/storage/images/cn/schematic/place-bus/place-bus_20240621_172129.png)

-   从左到右、从右到左

![图 4](/storage/images/cn/schematic/place-bus/place-bus_20240621_172130.png)

已有分支不新增：勾选时，如果整条总线中已经出现过的分支，则不会新增，会跳过。不勾选则会根据扇出分支进行新增，可能会出现重复的总线分支。

预览：点击预览可以查看扇出后的效果。

确认后，根据设置完成总线分支的扇出，可以整体撤销或重做。
