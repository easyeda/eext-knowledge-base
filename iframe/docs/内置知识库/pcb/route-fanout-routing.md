# 扇出布线

扇出或扇孔，指从芯片焊盘引出一小段导线并打孔，这样做的目的主要是为不同网络让出必要的空间，方便进行后续的内层布线操作。对于电容、电阻类的小IC器件，可以通过手动复制粘贴的方式进行快速扇出，而对于引脚数量较多、间距较小的封装如BGA，手动扇出需要花费大量时间，嘉立创EDA专业版提供自动扇出布线功能，针对此类封装进行快速批量扇出。

**操作入口**：顶部菜单-布线-扇出布线

![图 0](/storage/images/cn/pcb/route-fanout-routing/route-fanout-routing_20240621_172124.jpg)

点击菜单后，出现扇出设置对话框。对话框中有很多扇出参数设置，方便不同类型的封装和要求进行扇出。

![图 1](/storage/images/cn/pcb/route-fanout-routing/route-fanout-routing_20240621_172125.jpg)

**基本操作**：在对话框弹出时也可以对画布进行拖动和选中操作。扇出功能可以对元件和焊盘生效，在对话框点击应用前，你需要先在画布选中需要进行扇出的元件或焊盘，否则将无法扇出。

![图 2](/storage/images/cn/pcb/route-fanout-routing/route-fanout-routing_20240621_172126.jpg)

-   **操作选项**

    -   **操作类型**：分为新增和移除。如果是某个焊盘上已经连接了导线或过孔，需要重新进行扇出的，需要先进行移除操作。

    -   **扇出类型**：嘉立创EDA专业版提供了丰富的扇出类型选项。

![图 8](/storage/images/cn/pcb/route-fanout-routing/route-fanout-routing_20240621_172127.jpg)

        -   **BGA**：这是最常用的扇出类型，主要针对BGA封装。以BGA中心线为基准，左上、左下、右上、右下四个区域的焊盘分别采用不同的方向。

![图 4](/storage/images/en/pcb/route-fanout-routing/route-fanout-routing_20240621_172127.jpg)

        -   **盘中孔**：盘中孔即为直接在焊盘中心打一个过孔，不添加导线，嘉立创提供的“树脂塞孔+电镀盖帽”盘中孔工艺可以使焊盘上完全看不到孔，性能秒杀“过孔盖油”及“过孔塞油”。

![图 6](/storage/images/en/pcb/route-fanout-routing/route-fanout-routing_20240621_172128.jpg)

        -   **上**：固定扇出导线的方向为向上。

![图 7](/storage/images/cn/pcb/route-fanout-routing/route-fanout-routing_20240621_172128.jpg)

        -   **下**：固定扇出导线的方向为向下。

        -   **左**：固定扇出导线的方向为向左。

        -   **右**：固定扇出导线的方向为向右。

        -   **左上**：固定扇出导线的方向为左上。

        -   **左下**：固定扇出导线的方向为左下。

        -   **右上**：固定扇出导线的方向为右上。

        -   **右下**：固定扇出导线的方向为右下。

        -   **向外**：主要针对如下图三种规则的矩形或双边形焊盘分布的封装，如LQFP，扇出时将自动检测焊盘方向，向其所在位置的外部进行扇出。

![图 10](/storage/images/en/pcb/route-fanout-routing/route-fanout-routing_20240621_172130.jpg)

        -   **向内**：与向外类型生效的封装一样，其扇出方向是焊盘所在位置的内部。

![图 11](/storage/images/en/pcb/route-fanout-routing/route-fanout-routing_20240621_172131.jpg)

        -   **向外和向内**：与向外类型生效的封装一样，其扇出方向为相邻焊盘依次一外一内。

![图 12](/storage/images/en/pcb/route-fanout-routing/route-fanout-routing_20240621_172132.jpg)

    -   **扇出方向**：在扇出类型为BGA时会出现此选项，如果BGA封装旋转了45度放置，则可以修改扇出方向为90°。

![图 5](/storage/images/en/pcb/route-fanout-routing/route-fanout-routing_20240621_172133.jpg)

    -   **过孔-焊盘间距**

        即设置扇出导线的长度，这里的过孔-焊盘间距为空气间隙距离。

![图 13](/storage/images/en/pcb/route-fanout-routing/route-fanout-routing_20240621_172134.jpg)

        -   焊盘中心：除向外、向内、向外和向内类型外，其他扇出类型可以设置过孔-焊盘间距为焊盘中心。设置后进行扇出时，软件将自动检测相邻焊盘的最小间隙，固定扇出距离为两焊盘中间。

![图 14](/storage/images/en/pcb/route-fanout-routing/route-fanout-routing_20240621_172135.jpg)

        -   自定义距离：即设置一个固定的扇出长度。

        -   最小通道间距：向外、向内、向外和向内三种扇出类型会出现此选项，设置相邻两个通道的过孔间隙，如果按照指定长度不满足最小通道要求，将会自动拉长相邻焊盘的扇出距离。

![图 15](/storage/images/en/pcb/route-fanout-routing/route-fanout-routing_20240621_172136.jpg)

    -   **无网络焊盘扇出**：如果勾选了这个选项，空网络的焊盘将会也进行扇出。

    -   **扇出外面两行焊盘**：此选项仅在扇出类型选择为BGA时显示，如果勾选了这个选项， BGA封装最外面两行焊盘将会也进行扇出，否则将不扇出，下图为不扇出的例子。

![图 16](/storage/images/en/pcb/route-fanout-routing/route-fanout-routing_20240621_172137.jpg)

    -   **扇出时忽略DRC**：勾选后所有焊盘都将忽略DRC进行扇出，可以先勾选查看扇出的效果，在进行相关参数的调整后，再取消勾选重新扇出，未勾选的情况下扇出，那些违反DRC的扇出线和过孔将会被移除。

-   **导线属性**

    -   **线宽**：分为跟随规则和自定义，设置为跟随规则，软件将按照设计规则中导线的默认线宽进行出线。

    -   **过孔**：可以设置扇出打孔的类型为通孔或盲埋孔，如果设置盲埋孔，需要在设计规则中提前设置好盲埋孔类型。

    -   **过孔尺寸**：分为跟随规则和自定义，设置为跟随规则，软件将按照设计规则中导线的默认过孔尺寸进行打孔。
