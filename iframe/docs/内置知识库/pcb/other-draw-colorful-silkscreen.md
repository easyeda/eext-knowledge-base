# 绘制彩色丝印

得益于嘉立创PCB的工艺支持，嘉立创EDA可以非常方便地支持绘制彩色丝印。

支持导入彩色图片，和对字符设置颜色以及设置板子颜色，导出制造文件后在嘉立创下单。

## 开启彩色丝印

需要先在 PCB 设置里面开启“使用嘉立创彩色丝印工艺”选项。

**操作入口：**

-   设置 - PCB - 通用 - 使用嘉立创彩色丝印工艺

![图 24](/storage/images/cn/pcb/other-draw-colorful-silkscreen/other-draw-colorful-silkscreen_20240621_172124.png)

## 导入彩色图片

嘉立创EDA支持导入彩色图片，预览图片时，选择放置原图。入口：顶部菜单 - 放置 - 图片，选择PNG或者jpg格式图片大小在2M以内。如果导入的图片发现没有放置原图勾选项，请更换其他格式的图片。

![图 25](/storage/images/cn/pcb/other-draw-colorful-silkscreen/other-draw-colorful-silkscreen_20240621_172125.png)

将会自动放在顶层丝印层，你也可以切换到文档层或底层丝印层。

![图 26](/storage/images/cn/pcb/other-draw-colorful-silkscreen/other-draw-colorful-silkscreen_20240621_172126.png)

## 设置元件丝印颜色

选中元件后，可以在右边属性面板进行设置丝印颜色

![图 27](/storage/images/cn/pcb/other-draw-colorful-silkscreen/other-draw-colorful-silkscreen_20240621_172127.png)

元件的内部线条文本，位号等属性，在制造时均会使用该颜色进行生产。

## 设置板子丝印颜色

点击画布空白处后，右侧属性面板，可以看到彩色丝印设置

![图 28](/storage/images/cn/pcb/other-draw-colorful-silkscreen/other-draw-colorful-silkscreen_20240621_172128.png)

顶面/底面板子颜色：默认白色。因为板子需要彩色印刷，所以需要先打印一层底色，该颜色设置就是该底色的颜色。

顶面/底面丝印颜色：默认的丝印颜色，比如位号，元件的外形丝印的颜色。如果元件有单独设置丝印颜色，则会优先使用单独的颜色。

## 预览彩色丝印

在顶部菜单 - 视图 - 2D/3D预览，可以对彩色丝印和图片进行预览。

在预览界面右边属性面板，修改丝印工艺为彩色丝印，就可以看到彩色打印的效果。

![图 29](/storage/images/cn/pcb/other-draw-colorful-silkscreen/other-draw-colorful-silkscreen_20240621_172129.png)

![图 30](/storage/images/cn/pcb/other-draw-colorful-silkscreen/other-draw-colorful-silkscreen_20240621_172130.png)

## 导出制造文件

完成彩色丝印的设置和编辑后，输出彩色丝印制作文件。

入口：顶部菜单 - 导出 - PCB制板文件(Gerber)

勾选导出彩色丝印选项，导出Gerber即可。

![picture 1](/storage/images/cn/pcb/other-draw-colorful-silkscreen/other-draw-colorful-silkscreen_20240621_172131.png)

注意，如如果你的彩色丝印板子需要嘉立创SMT的服务，请确保在“拼板”功能中设置工艺边(类型：V割，创建工艺边：是)或手动添加了工艺边，否则如果你选择SMT服务后，彩色取丝印将不会打印。

![picture 2](/storage/images/cn/pcb/other-draw-colorful-silkscreen/other-draw-colorful-silkscreen_20240621_172132.png)

点击“设置工艺边”按钮，选择邮票孔或者V割，设置工艺边。拼板数量可以保持1x1，如果你有更多拼板需求可以设置其他数量。
![picture 3](/storage/images/cn/pcb/other-draw-colorful-silkscreen/other-draw-colorful-silkscreen_20240621_172133.png)

导出Gerber后，Gerber压缩包里面会包含嘉立创彩色丝印专用文件。

![图 45](/storage/images/en/pcb/other-draw-colorful-silkscreen/other-draw-colorful-silkscreen_20240621_172131.png)

## 下单彩色打印

导出Gerber或者一键下单时，需要在嘉立创下单系统设置对应的选项才可以选择彩色丝印下单。

1、进入下单系统时，目前支持板材选择FR-4，双层板和四层板，支持样板和小批量订单，所有可选板厚。

![picture 4](/storage/images/cn/pcb/other-draw-colorful-silkscreen/other-draw-colorful-silkscreen_20240621_172134.png)

2、阻焊颜色选择白色，焊盘喷镀选择沉金。

![picture 5](/storage/images/cn/pcb/other-draw-colorful-silkscreen/other-draw-colorful-silkscreen_20240621_172135.png)

3、然后字符工艺再选择嘉立创EDA彩色丝印即可。

![picture 6](/storage/images/cn/pcb/other-draw-colorful-silkscreen/other-draw-colorful-silkscreen_20240621_172136.png)

剩下的步骤和普通板子下单一致。

**彩色丝印的生产工艺的声明(非常重要下单必看)**:

-   嘉立创EDA彩色丝印的生产文件是脱离Gerber的，嘉立创为了保证客户设计的PCB符合我们的工艺条件，会对客户的gerber原稿进行微调，但是我们并不会将Gerber的调整映射到彩色丝印的文件中（如果gerber调整的数据超过我们设置的误差0.2MM，那么您的彩色丝印将不会生成生产文件），所以在设计的过程中需要注意以下可能会影响彩色丝印生产的情况。
-   工艺边设置：拼板后尺寸长度需要≥70MM，如果小于这个值，提交嘉立创审核后，客服会询问是否去掉工艺边，如果让嘉立创帮你去掉工艺边，就会导致彩色丝印拼板失败，从而影响彩色丝印的生产(详细情况请参考：https://www.jlc.com/portal/server_guide_112.html)
    ![picture 7](/storage/images/cn/pcb/other-draw-colorful-silkscreen/other-draw-colorful-silkscreen_20240621_172137.png)

-   SMT的工艺边设置：嘉立创的工艺边有专门的设计要求，如果您设计的工艺边不符合嘉立创的标准，那么嘉立创的外协工程师也会对您的工艺边进行调整，如果工艺边的调整超过误差，就会导致彩色丝印拼板失败，从而影响彩色丝印的生产(嘉立创工艺边执行标准:https://www.jlc.com/portal/server_guide_69.html)

-   嘉立创EDA专业版拼板：目前彩色丝印在专业版中不支持拼板，专业的拼板功能不会将彩色丝印的内容进行复制，您导出彩色丝印的Gerber只会在母板中有数据，其他拼板的文件不会有彩色丝印的文件（如下图-右侧图是设计预览图，左侧为实际生产图）
    ![picture 9](/storage/images/cn/pcb/other-draw-colorful-silkscreen/other-draw-colorful-silkscreen_20240621_172138.png)

-   嘉立创EDA专业版2.2以上的版本中支持使用：拼板工具-拼板方式：全部对象后，支持彩色拼板。只拼板框的方式暂时不支持彩色丝印拼。
-   在彩色丝印设计单层板时需要注意！您设计的单层线路如有存在于底层时，在嘉立创生产时为了提升生产效率和节约成本，实际生产过程中，会将底层资料镜像到顶层生产，但是彩色丝印的资料不会进行同步处理，这样就会导致，彩色丝印的资料会打印到顶层的焊盘上，所以建议在设计单层彩色丝印时，线路设计在顶层，或者设计成双层板（没有线路的层可以铺一层铜）这样就保证了彩色丝印正常生产。

-   彩色丝印的生产文件与Gerber格式不同，正常的订单中，CAM工程师会在资料处理中将客编和单号加在丝印层，方便后续分板和QC检查时不容易弄混单，但是彩色丝印文件CAM工程师无法处理，工厂为彩色丝印专门提供了免费自动分板的服务，解决了无客编分板问题，所以如果，您设计的的彩色丝印中有字符层的文件时，CAM工程师就会在丝印层手动添加客编和单号，但是彩色丝印不用Gerber文件生产，所以实际生产的效果就是没有客编的样子。但是如果您设计的彩色丝印没有字符层（只有图片没有放置字符），那么CAM工程师，就会在阻焊开窗层放置客编和单号，这样实际生产出来的效果还是有客编和单号。同时彩色丝印也无法指定位置加客编以及添加二维码的服务，所以需要额外注意的是，指定位置加客编时"JLCJLCJLC"实际生产出来就是"JLCJLCJLC"的字符，而不是客编，您也可以在专业版的3D预览中进行查看彩色效果。

-   您可以添加嘉立创EDA技术支持，备注“彩色丝印”进入彩色丝印交流群。
    ![图 1](/storage/images/cn/pcb/other-draw-colorful-silkscreen/other-draw-colorful-silkscreen_20240909_153008.png)
