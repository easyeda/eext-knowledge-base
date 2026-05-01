# 原理图常见问题

## 原理图如何切换单位 {#切单位}

::: details
在顶部菜单栏，目前支持inch,mm单位切换

![](/storage/images/cn/faq/schematic/schematic_20240626_173409.png)
:::

## 原理图如何切换网格大小 {#格}

::: details
顶部菜单栏选择或是视图-网格尺寸里面选择

![图 10](/storage/images/cn/faq/schematic/schematic_20240712_142642.png)

![图 11](/storage/images/cn/faq/schematic/schematic_20240712_142654.png)
:::

## 如何在原理图编辑符号 {#编符}

::: details
![图 128](/storage/images/cn/faq/schematic/schematic_20241125_100743.png)
:::

## 原理图如何将所有元件都移动到网格点上？ {#网格点}

::: details
点中或是框选元件，按快捷键 CTRL+SHIFT+G
![图 99](/storage/images/cn/faq/schematic/schematic_20240809_115238.png)
:::

## 如何替换器件 {#器管}

::: details

工具-器件管理器
![图 136](/storage/images/cn/faq/schematic/schematic_20250314_174834.jpg)
![图 137](/storage/images/cn/faq/schematic/schematic_20250314_174849.jpg)
![图 138](/storage/images/cn/faq/schematic/schematic_20250314_174859.jpg)

:::

## 拖动网络标签是否跟随导线如何设置 {#标线}

::: details
设置-原理图-常规 里面把拖动网络名改为修改网络名
![图 130](/storage/images/cn/faq/schematic/schematic_20241125_101151.png)

:::

## 放置时如何自动显示属性值 {#属性值}

::: details
设置-属性 ，放置画布时属性是否显示
![图 59](/storage/images/cn/faq/schematic/schematic_20240712_172137.png)
:::

## 如何设置原理图屏蔽，选择部分内容不转到pcb？ {#屏蔽}

::: details
文档教程：[放置-屏蔽](https://prodocs.lceda.cn/cn/schematic/place-component-mask/#%E5%85%83%E4%BB%B6%E5%B1%8F%E8%94%BD)
:::

## 旋转符号时如何自动调整属性位置 {#属性位置}

::: details
设置-原理图/符号-常规

![图 61](/storage/images/cn/faq/schematic/schematic_20240712_172713.png)
:::

## 原理图如何高亮网络 {#高络}

::: details

- 在画布中点中元素，鼠标右键选择高亮网络
- 左侧属性面板-网络-点中定位高亮
  ![图 124](/storage/images/cn/faq/schematic/schematic_20240815_151532.png)

:::

## 原理图显示隐藏及网格类型如何设置 {#网格}

::: details
顶部菜单栏选择或是视图-网格类型
![图 12](/storage/images/cn/faq/schematic/schematic_20240712_142715.png)

![图 13](/storage/images/cn/faq/schematic/schematic_20240712_142727.png)
:::

## 如何编辑图纸样式及内容 {#图纸}

::: details
视频教程：[原理图 - 修改图纸大小\_哔哩哔哩\_bilibili](https://www.bilibili.com/video/BV1JW4y1u74u/)

<iframe src="//player.bilibili.com/player.html?isOutside=true&aid=946304522&bvid=BV1JW4y1u74u&cid=924567622&p=1&autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" style="width: 100%; margin: auto; display: block; height: 600px"></iframe>

![](/storage/images/cn/faq/schematic/schematic_20240625_202003.png)

![](/storage/images/cn/faq/schematic/schematic_20240625_202022.png)

![](/storage/images/cn/faq/schematic/schematic_20240625_202036.png)
:::

## 如何在导线名称上添加上横线表示低电平？ {#低电平}

::: details
在网络名称面前加~
![图 94](/storage/images/cn/faq/schematic/schematic_20240716_164235.png)
:::

## 原理图如何放置测试点 {#Di}

::: details
顶部菜单栏，放置-测试点

如何在原理图编辑符号
![图 14](/storage/images/cn/faq/schematic/schematic_20240712_142825.png)
:::

## 原理图主题怎么设置 {#主题}

::: details
![图 104](/storage/images/cn/faq/pcb/pcb_20240809_145651.png)
:::

## 符号如何绑定封装 {#绑封装}

::: details
视频教程：[原理图 - 元件如何绑定封装\_技巧](https://www.bilibili.com/video/BV1CD4y167ia/)

<iframe src="//player.bilibili.com/player.html?isOutside=true&aid=730006438&bvid=BV1CD4y167ia&cid=818191094&p=1&autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" style="width: 100%; margin: auto; display: block; height: 800px"></iframe>

操作入口：

- 在原理图中点中符号，右边属性面板进入封装管理器界面
  ![图 24](/storage/images/cn/faq/schematic/schematic_20240712_154937.png)

![图 28](/storage/images/cn/faq/schematic/schematic_20240712_155235.png)

- 符号和封装预览区域支持滚轮缩放显示。符号如果是多部件可以在顶部切换部件，封装支持切换单位，检查封装尺寸，放大预览，编辑封装(直接打开选中的封装)。
  全屏预览封装和检查尺寸时：
  ![图 29](/storage/images/cn/faq/schematic/schematic_20240712_155345.png)
  提示：

- 当元件没有封装，或者符号的引脚编号和封装焊盘编号不匹配时，元件列表的信息列会报错，列出报错信息。
- 元件的引脚编号全部在封装焊盘编号匹配，否则无法转PCB或更新PCB。引脚数量可以比焊盘数量少。

:::

## 如何多开复制粘贴PCB或是原理图 {#单复粘}

::: details
![图 108](/storage/images/cn/faq/schematic/schematic_20240809_153635.png)
![图 109](/storage/images/cn/faq/schematic/schematic_20240809_153649.png)
视频教程：[工程 - 复制粘贴工程文件](https://www.bilibili.com/video/BV1gY4y1T7QA/)

<iframe src="//player.bilibili.com/player.html?isOutside=true&aid=306272368&bvid=BV1pA411975W&cid=924567472&p=1&autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" style="width: 100%; margin: auto; display: block; height: 800px"></iframe>
:::

## 交叉选择 {#交叉}

::: details
顶部菜单 - 设计 -交叉选择 或
选中元素后快捷键Shift+X

![图 50](/storage/images/cn/faq/schematic/schematic_20240712_165655.png)

![图 51](/storage/images/cn/faq/schematic/schematic_20240712_165905.png)

## 布局传递 {#布递}

在同一个板子下的原理图和 PCB 可以使用这个布局传递进行把当前图页选中的元件布局，传递到PCB中，方便快速聚集所需要的元件，快速布局布线。
操作入口：

顶部菜单 - 设计 - 布局传递

元件右键菜单 - 布局传递

快捷键 CTRL + SHIFT + X

![图 52](/storage/images/cn/faq/schematic/schematic_20240712_170014.png)
视频教程：[原理图-设计-布局传递](https://www.bilibili.com/video/BV1ZP411G76U/)

<iframe src="//player.bilibili.com/player.html?isOutside=true&aid=302529758&bvid=BV1ZP411G76U&cid=818164881&p=1&autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" style="width: 100%; margin: auto; display: block; height: 800px"></iframe>
:::

## 如何快速显示一个器件的引脚编号 {#脚编号}

::: details
右边属性面板过滤里面只在引脚前面勾选上，其他取消勾选
![图 55](/storage/images/cn/faq/schematic/schematic_20240712_171748.png)
直接在原理图框选全部，这时只会选中引脚，再在右边属性面板的元件引脚数量前面的勾选上即可全部显示引脚编号
![图 56](/storage/images/cn/faq/schematic/schematic_20240712_171808.png)
:::

## 原理图过滤如何使用 {#原过滤}

::: details
右边属性面板-过滤
![图 30](/storage/images/cn/faq/schematic/schematic_20240712_160402.png)
:::

## 原理图出现紫色虚线如何处理 {#紫虚线}

::: details

设计-更新工程库

![图 31](/storage/images/cn/faq/schematic/schematic_20240712_160640.png)
![图 32](/storage/images/cn/faq/schematic/schematic_20240712_160650.png)
![图 33](/storage/images/cn/faq/schematic/schematic_20240712_160658.png)
![图 34](/storage/images/cn/faq/schematic/schematic_20240712_160710.png)
:::

## 导出BOM表时如何设置属性是否需要合并一行 {#bom行}

::: details
分组是：将相同的属性导出BOM表时值分开导出，单独一行；

分组否： 将相同的属性导出BOM表时值合并导出，合并在一行。

![图 141](/storage/images/cn/faq/schematic/schematic_20260116_152637.png)

:::

## 复用图块位号$+CBB的形式如何更改 {#CBB}
::: details

3.1支持了复用模块自动分配位号，自动分配的结果是模版位号+$+复用模块符号位号
如果模块符号有位号例如CBB1，拼接的结果会是C19$CBB1，这个需求主要是为支持在PCB可以通过位号知道元件属于哪个模块，如不需要显示，以下两种方法可以设置
1.重新分配位号，设计-分配位号，勾上分配实例位号
![图 143](/storage/images/cn/faq/schematic/schematic_20260116_171613.png)
![图 144](/storage/images/cn/faq/schematic/schematic_20260116_171730.png)
2.可以改一下CBB图块位号，例如改为1，那拼接的结果就会变成 C1$1
![图 142](/storage/images/cn/faq/schematic/schematic_20260116_171416.png)
:::

## 如何设置放置/复制粘贴自动分配位号设置 {#复保留}

::: details
设置-通用
![图 139](/storage/images/cn/faq/schematic/schematic_20260104_185848.png)
![图 140](/storage/images/cn/faq/schematic/schematic_20260104_185911.png)
:::

## 专业版如何创建复用图块 {#复用块}

::: details
视频教程：[原理图-专业版复用图块](https://www.bilibili.com/video/BV1aN4y137qN/)

<iframe src="//player.bilibili.com/player.html?isOutside=true&aid=897707818&bvid=BV1aN4y137qN&cid=751176116&p=1&autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" style="width: 100%; margin: auto; display: block; height: 800px"></iframe>

在绘制复杂的原理图时，就需用到复用图块，复用图块换一种说法就是层次原理图设计。

- 第一种：顶部菜单 - 文件 - 新建 - 复用模块
  ![图 38](/storage/images/cn/faq/schematic/schematic_20240712_161556.png)
  ![图 39](/storage/images/cn/faq/schematic/schematic_20240712_161730.png)
  ![图 40](/storage/images/cn/faq/schematic/schematic_20240712_161810.png)
  ![图 41](/storage/images/cn/faq/schematic/schematic_20240712_162738.png)
  主电路图相当于整机电路图中的方框图，一个方块图相当于一个模块，主电路图中不能放置器件，只能放置引脚来作为连接到子电路。
  ![图 42](/storage/images/cn/faq/schematic/schematic_20240712_162812.png)
  一般地子电路图都是一些具体的电路原理图。子电路图与主电路图的连接是通过方块图中的端口实现的。

- 第二种：从原理图生成复用图块
  从原理图生成复用图块的设计是作为一种自下而上的设计，从子图生成母图

    操作步骤：
    顶部菜单 - 设计 - 生成/更新图块符号或是直接在工具栏图标选择
    ![图 43](/storage/images/cn/faq/schematic/schematic_20240712_163101.png)

第三种：放置创建复用图块

顶部菜单 - 放置 - 复用模块
![图 45](/storage/images/cn/faq/schematic/schematic_20240712_163835.png)
选择后，在原理图中绘制一个图块框，然后给图块框命名即可完成创建
![图 46](/storage/images/cn/faq/schematic/schematic_20240712_163935.png)
从原理图创建的复用图块将会在左侧面板的工程下显示
![图 47](/storage/images/cn/faq/schematic/schematic_20240712_164025.png)
点击左侧面板打开子原理图或在点击复用图块框 - 点击鼠标右键 -选择展开，即可把复用图块子原理图展开!
[图 48](/storage/images/cn/faq/schematic/schematic_20240712_164051.png)
:::

## 复用图块的元件位号分配 {#分配}

::: details
在顶部菜单 - 设计 - 分配位号，进行对元件位号进行分配

![](/storage/images/cn/faq/schematic/schematic_20240625_195353.png)

![](/storage/images/cn/faq/schematic/schematic_20240625_195416.png)

![](/storage/images/cn/faq/schematic/schematic_20240625_195433.png)

![](/storage/images/cn/faq/schematic/schematic_20240625_195452.png)

![](/storage/images/cn/faq/schematic/schematic_20240625_195511.png)

根据上述在操作，可以完成复用模块里面的元件位号分配。
:::

## 网表对比功能怎么用 {#网表}

::: details
在 2.2 开始，编辑器在开始页有一个“网表对比”功能入口，可以通过加载两个网表文件进行对比得出网表差异，差异会导出xlsx表格。

该功能可以用于格式转换后，或两个不同版本的原理图间，查看原理图的网表差异，支持多种EDA的网表格式。

![](/storage/images/cn/faq/schematic/schematic_20240706_165629.jpg)

支持 allegro 的 tel 格式、zuken 的 ccf 格式、Altium 的 net 格式、PADS的 asc 和 txt 格式、嘉立创的 enet 格式。

选择两个网表导入后，会自动对比并导出xlsx文件，打开后可以查看每个网络的引脚差异。

![](/storage/images/cn/faq/schematic/schematic_20240706_170620.jpg)
:::

## 原理图如何画曲线 {#曲线}

::: details
顶部菜单栏-放置-贝塞尔曲线或是直接在顶部工具栏选择贝塞尔曲线图标直接放置

![图 19](/storage/images/cn/faq/schematic/schematic_20240712_143519.png)
:::

## 原理图符号如何填充颜色 {#填充颜色}

::: details
原理图符号填充需要点中符号-鼠标右键编辑符号或是器件，进入库文件里面右边属性编辑

![图 57](/storage/images/cn/faq/schematic/schematic_20240712_172042.png)

原理图里面只可以填充闭合线条的填充

![图 58](/storage/images/cn/faq/schematic/schematic_20240712_172100.png)
:::

## 符号引脚如何放置多个编号 {#引脚编号}

::: details
![图 62](/storage/images/cn/faq/schematic/schematic_20240712_172746.png)
![图 63](/storage/images/cn/faq/schematic/schematic_20240712_172753.png)
:::

## 原理图如何放置表格 {#shemtic表格}

::: details
![图 64](/storage/images/cn/faq/schematic/schematic_20240712_172832.png)
![图 65](/storage/images/cn/faq/schematic/schematic_20240712_172840.png)
:::

## 原理图如何组合及取消组合 {#shemtic组合}

::: details
![图 66](/storage/images/cn/faq/schematic/schematic_20240712_172903.png)
![图 67](/storage/images/cn/faq/schematic/schematic_20240712_172910.png)
![图 68](/storage/images/cn/faq/schematic/schematic_20240712_172922.png)
![图 69](/storage/images/cn/faq/schematic/schematic_20240712_172935.png)
:::

## 提示原理图页超过150个元件如何处理 {#150}

::: details
可以先在左侧对象这边可以查看每个图页有几个元件根据设计情况进行删减
![图 80](/storage/images/cn/faq/schematic/schematic_20240712_175019.png)
或是在设计-原理图/符号里面设置每页允许放置的元件数量
![图 81](/storage/images/cn/faq/schematic/schematic_20240712_175148.png)
:::

## 符号库简易模式和专业模式区别 {#简易和专业}

::: details
在设置通用里面可以改换模式
![图 85](/storage/images/cn/faq/schematic/schematic_20240716_162937.png)

区别在于

- 简易模式下新建元件时，只会显示元件。底部面板只会显示器件一栏。
- 而在专业模式下新建元件时，会显示元件和符号的创建。

![图 84](/storage/images/cn/faq/schematic/schematic_20240716_162838.png)
:::

## 导线的默认网络名规则如何设置 {#默认规则}

::: details
设置-原理图-通用
![图 86](/storage/images/cn/faq/schematic/schematic_20240716_163139.png)
转到PCB，焊盘网络就会对应显示什么
![图 87](/storage/images/cn/faq/schematic/schematic_20240716_163359.png)
:::

## 图纸或是PCB板显示很小如何处理 {#显小}

::: details
框选被放大的这块区域
![图 89](/storage/images/cn/faq/schematic/schematic_20240716_163741.png)
![图 90](/storage/images/cn/faq/schematic/schematic_20240716_163750.png)
:::

## 元件属性值如何根据原点往左右延伸输入 {#延申}

::: details
选中属性在基础属性栏 修改原点为中心，这样文本中心不变 长度是向两边延伸
![图 93](/storage/images/cn/faq/schematic/schematic_20240716_164028.png)
:::

## 网络标签后缀前缀如何快速批量更改 {#前缀}

::: details

- 查找替换把使用通配符选项勾选上，\_可以用来代替零个、单个或多个字符，？ 仅可以代替一个字符。
- 比如NET8 NET9想变成AB8,AB9 那可以在搜索的时候查找内容为：NET\_ 替换内容为：AB\* 即可批量替换。
  ![图 95](/storage/images/cn/faq/schematic/schematic_20240716_165226.png)

:::

## 如何多开分割交互操作 {#互}

::: details
页面右键选择垂直/水平分割实现多开页面交互
![图 98](/storage/images/cn/faq/schematic/schematic_20240809_114410.png)

也可以用windows自带的分屏功能实现效果，快捷键ctrl+sfhit+win+方向键
![图 97](/storage/images/cn/faq/schematic/schematic_20240809_114252.png)

## 图纸模版如何设置 {#莫版}

:::
视频教程：[原理图-设置-图纸](https://www.bilibili.com/video/BV1hP4y1f7HQ/)

<iframe src="//player.bilibili.com/player.html?isOutside=true&aid=900044143&bvid=BV1hP4y1f7HQ&cid=818191310&p=1&autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" style="width: 100%; margin: auto; display: block; height: 800px"></iframe>
:::

## 如何根据引脚名批量放置网络标签 {#批签}

::: details
![图 101](/storage/images/cn/faq/schematic/schematic_20240809_115600.png)
![图 102](/storage/images/cn/faq/schematic/schematic_20240809_115610.png)
![图 103](/storage/images/cn/faq/schematic/schematic_20240809_115619.png)

视频教程：[原理图 - 元件 - 根据引脚名称批量添加网络名](https://www.bilibili.com/video/BV1Bu411A7gJ/)
:::

## 画桥式整流电路图，需要45度放置器件时如何操作 {#符号45度}

::: details
目前不支持。需要在画符号库的时候按45度斜着绘制。
![图 107](/storage/images/cn/faq/schematic/schematic_20240809_150359.png)
:::

## 原理图如何吸附和取消吸附 {#附}

::: details
快捷键ALT+S
![图 110](/storage/images/cn/faq/schematic/schematic_20240809_154925.png)
:::

## 需要2个网络可以用短接符 {#短}

::: details
[短接符使用文档：](https://prodocs.lceda.cn/cn/schematic/place-short-symbol/)
:::

## 放置特殊符号时会弹出请选择一个器件放置时如何解决 {#放置报错}

::: details

- 1.需要有网络支持才可以，断网的情况不能放置，会有这个提示
- 2.软件安装在C盘

:::

## 器件标准化无反应如何处理 {#qijia}
::: details
这个可能是当前工程替换的对象是相同名称所以替换不了，以下两种方法可以解决：
第一种：画布删除该元件库，工程库也删除，再重新放置。
![picture 0](/storage/images/cn/faq/schematic/schematic_20260130_195658.png)
第二种：先替换其他不同名称的元件后，再替换回去
![picture 1](/storage/images/cn/faq/schematic/schematic_20260130_200153.png)

:::

## 如何设置移动符号，导线是否跟随？ {#符线}

::: details
设置-原理图/符号-通用
![图 113](/storage/images/cn/faq/schematic/schematic_20240809_161954.png)
:::

## 专业版导出BOM，元件属性里面导出BOM设置为否，还是能导出到BOM {导出BOM为否}

::: details

- 导出BOM界面 需要点恢复默认或者手动设置 过滤规则
  ![图 114](/storage/images/cn/faq/schematic/schematic_20240809_162030.png)
  ![图 115](/storage/images/cn/faq/schematic/schematic_20240809_162038.png)

:::

## 原理图导线如何画才有红色节点 {#红点}

::: details
![图 116](/storage/images/cn/faq/schematic/schematic_20240809_162140.png)
:::

## 导线的默认网络名规则如何设置 {#默规}

::: details
设置-原理图-通用
![图 117](/storage/images/cn/faq/schematic/schematic_20240809_162207.png)
:::

## 原理图如何查看有多少个引脚 {#脚}

::: details
文件-导出BOM时可以勾选引脚统计
![图 118](/storage/images/cn/faq/schematic/schematic_20240809_162324.png)
:::

## 原理图线条如何设置虚线，下划线，点线等 {#线条虚线}

::: details
点中线条，右边属性面板设置
![图 119](/storage/images/cn/faq/schematic/schematic_20240809_162444.png)
:::

## 提示多部件存在不同属性如何处理 {#部同}

::: details
当提示[警告] : 元件 RD3399_PRO3399_CORE 是一个多部件元件，每一个部件的属性需要相同。$1I1109、$2I5、$3I5、$4I5、$1I2133、$1I2185 存在不同的属性 唯一ID。
点中元件，右键编辑符号
里面可以检查下每个部件的属性内容是否一致
![图 120](/storage/images/cn/faq/schematic/schematic_20240809_162755.png)
:::

## 如何设置低有效 {#效}

::: details
在符号库里面，点中引脚，右边属性面板设置，引脚形状-反相
![图 122](/storage/images/cn/faq/schematic/schematic_20240815_151342.png)
:::

## 如何设置原理图的元器件不更新到pcb？{#不更新PCB}

::: details
在专业版中有两种方式：
第一种，在原理图选中该元器件，然后在右边的属性栏修改属性。
![图 125](/storage/images/cn/faq/schematic/schematic_20240815_151931.png)
第二种，在顶部菜单栏选择原理图更新pcb之后，在更新的菜单栏里面进行勾选，不需要更新到pcb的元器件就需取消勾选。
![图 126](/storage/images/cn/faq/schematic/schematic_20240815_151945.png)
:::

## 原理图导出PDF为什么字体不对或者文字宽度会超出范围？{#PDF字体}

::: details
因为导出PDF只支持内置的几种字体样式，无法支持自定义添加的字体，因为它导出PDF的时候要使用内置的几种字体样式来生成，不能单靠一个字体名称就生成字体样式，所以如果使用了不支持的字体就会使用默认字体“宋体”生成。
PCB导出PDF可以保持一致是因为PCB的文本在画布时已经转为了路径图形，直接取路径图形来生成的，不是取字体的样式和字体名生成。
导出PDF内置支持的几个字体有：1宋体，2黑体，3仿宋，4楷体，5隶书，6 Arial，7 Arial Black，8 Arial Narrow，9 Courier New，10 helvetica ，11 monospace，12 MS Gothic，13 Tahoma，14 Times New Roman，15 sans-serif，16 Verdana
:::

## 原理图空白了如何处理？{#空白}

::: details
第一种方法：
当打开原理图之后发现以前绘制的原理图变成白屏了可以这样处理：
![图 341](/storage/images/cn/faq/pcb/pcb_20241217_180728.png)
![图 342](/storage/images/cn/faq/pcb/pcb_20241217_180735.png)
第二种方法：
第一步：将空白原理图的文件的源码导出。
![图 343](/storage/images/cn/faq/pcb/pcb_20241217_180913.png)
第二步：在电脑上用记事本打开，然后找到重复的编号，改掉它。
![图 344](/storage/images/cn/faq/pcb/pcb_20241217_180928.png)
![图 345](/storage/images/cn/faq/pcb/pcb_20241217_180937.png)
第三步：在记事本修改完成之后，保存文件，将记事本里面的内容全部复制，回到eda原理图的界面将源码替换粘贴上去即可。
![图 346](/storage/images/cn/faq/pcb/pcb_20241217_180948.png)
:::
