# 创建封装库

封装库就是电子的元器件，芯片等的各种参数（比如元器件的大小，长宽，直插，贴片，焊盘的大小，管脚的长宽，管脚的间距等）用图形方式表现出来，以便可以在画PCB图时进行调用。

封装库工具的使用方法与PCB下的PCB工具一致，只是工具栏内少一些不需要的功能。

如果你需要一个PCB封装，但是嘉立创EDA的元件库中不存在，那么你可以自行进行创建。且创建器件也是需要一个封装库才能完成。

创建封装库与创建符号库几乎一致。

**新建封装步骤**：

-   顶部菜单 - 文件 - 新建 - 封装

![image-20210604181045922](/storage/images/cn/footprint/file-new-footprint/file-new-footprint_20240621_172123.png)

给封装命名,选择分类。

封装名称命名建议参考 [嘉立创EDA封装库命名参考规范.pdf](https://www.jlc-bbs.com/platform/a/527316)，以使用科学的命名规则，方便管理和复用。

![](/storage/images/cn/footprint/file-new-footprint/file-new-footprint_20240621_172124.png)

根据器件的数据手册来绘制相应的封装。

-   1、下载需要绘制的元件规格书。
    比如创建SOIC-8。[如PDF：UC2844BD1R2G](https://image.lceda.cn/files/ON-Semicon-ON-UC2844BD1R2G_C77262.pdf)
-   2、阅读规格书，获取封装尺寸，方位信息。
    绘制封装时需要注意封装0度方向(0度就是你当前绘制的角度，当封装放置在PCB里面后它的角度在属性面板显示为0度)，利于SMT贴片。具体请查看：[PCB封装库0度图形制作标准](http://club.szlcsc.com/article/details_12157_1.html)
-   3、查看封装的尺寸，引脚方向与极性，然后放置焊盘在画布上。需要根据自己实际情况适当调整焊盘的形状和大小。
    -   元件引脚方向，第一页，逆时针计数1到8脚。

![](/storage/images/en/footprint/file-new-footprint/file-new-footprint_20240621_172125.png)

元件极性，第一页，第十八页，方向为横向摆放。

![](/storage/images/en/footprint/file-new-footprint/file-new-footprint_20240621_172126.png)

根据十八页的尺寸图放置焊盘在顶层(有些金手指封装需要顶层和底层同时放置)。需要修改焊盘的属性，其中包括焊盘编号、类型、大小。先确定第一个焊盘的坐标，然后放置多个，使用顶部菜单的对齐工具进行平均分布。如果移动焊盘步进距离不合适可以在右边修改栅格大小。

![](/storage/images/en/footprint/file-new-footprint/file-new-footprint_20240621_172127.png)

绘制元件边框丝印。有时还可以在机械层，文档层放置对应标识图形。

-   将层切换至顶层丝印。
-   使用导线，圆弧等工具绘制元件丝印。

![](/storage/images/cn/footprint/file-new-footprint/file-new-footprint_20240621_172125.png)

![](/storage/images/en/footprint/file-new-footprint/file-new-footprint_20240621_172129.png)

-   放置的焊盘至少要一个中心点尽量在格线上，以免使用封装时导线连接焊盘困难的问题。
-   焊盘编号可以设置数字和字母，其需与元件的引脚编号一一对应，否则元件在指定了这个封装后在原理图将会在封装管理器报错，无法转为PCB。
-   焊盘编号通过鼠标放置可以递增，如果通过粘贴复制放置编号将保持不变。
-   绘制完封装后封装的坐标原点建议修改到封装正中央：以利于放置时旋转时保持鼠标在图形正中心；SMT机器在识别元件中心时减少元件调整工作。
