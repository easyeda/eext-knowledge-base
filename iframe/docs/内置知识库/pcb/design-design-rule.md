# 设计规则

设计规则是用于设置PCB基本设计原则，在设计规则中输入一个安全设计规则，可以保证PCB的设计不会出现设计问题。

操作入口：

- 顶部菜单 - 设计 - 设计规则

![图 0](/storage/images/cn/pcb/design-design-rule/design-design-rule_20240621_172124.jpg)

# 规则管理

在规则管理器下，可以在每一种类型的规则下新增、修改、删除规则，对没有特殊设置规则的网络，会使用默认的规则。

目前有四大类规则，每个具体规则下创建有一个或多个规则

![图 2](/storage/images/cn/pcb/design-design-rule/design-design-rule_20240621_172125.png)

设计规则对话框左下方支持嘉立创多个预设工艺配置切换
![图 0](/storage/images/cn/pcb/design-design-rule/design-design-rule_20240621_172126.jpg)

## 规则编辑

需要要新增的规则类型右边点击+图标，即可新增一个规则。输入规则名称后，鼠标在输入框外部点击即可创建规则成功。

![image-20211222175155493](/storage/images/cn/pcb/design-design-rule/design-design-rule_20240621_172127.png)

新增设计规则后需要重新对规则命名，需要注意的是同一个类型下规则名称不能重复。

![image-20210518164904821](/storage/images/cn/pcb/design-design-rule/design-design-rule_20240621_172128.png)

1、默认规则

左侧栏的默认规则类型下仅有一个，该规则会置顶。

如果想要将某个规则设为默认规则，在该规则视图下点击设为默认按钮即可。

![image-20211222175347310](/storage/images/cn/pcb/design-design-rule/design-design-rule_20240621_172129.png)

2、删除规则

非默认规则支持删除，在要删除的规则视图下点击删除按钮，即可删除该规则

![image-20211222175413701](/storage/images/cn/pcb/design-design-rule/design-design-rule_20240621_172130.png)

## 间距规则

### 安全间距规则

通过安全间距表格，可以设置两个不同网络图元之间的间距要求。

![图 1](/storage/images/cn/pcb/design-design-rule/design-design-rule_20240621_172131.jpg)

双击任意一个表格可修改规则的数值。

![图 2](/storage/images/cn/pcb/design-design-rule/design-design-rule_20240621_172132.jpg)

点击表格顶部的名称可批量修改数值。

![图 3](/storage/images/cn/pcb/design-design-rule/design-design-rule_20240621_172133.png)

### 其他间距规则

![图 3](/storage/images/cn/pcb/design-design-rule/design-design-rule_20240621_172134.jpg)

- 元件到元件：两同层元件之间的间距要求，设置为0表示忽略不需要检测

- 插件焊盘到SMD元件：多层焊盘到单层元件的间距要求，在需要SMT工艺时可能会用到，设为0表示忽略不需要检测

- 钻孔到钻孔：两个金属化孔（同网络也包含）之间的间距要求，设为0表示忽略不需要检测

## 物理规则

### 导线规则

可以在导线规则中设置导线的最小、默认和最大线宽。PCB中的导线线宽如果不满足最小线宽到最大线宽的范围，将被DRC检测出来。默认线宽则是指每次布线时默认取的线宽，但当布线从一条导线发起时，则会以那条导线的线宽作为开始布线的线宽。

![image-20211222175749986](/storage/images/cn/pcb/design-design-rule/design-design-rule_20240621_172135.png)

### 网络长度

网络长度规则是用于设定检查单网络走线的总体长度，这个规则不能应用于设计上限制，但可以通过布线时候能查看。

![image-20211222175829112](/storage/images/cn/pcb/design-design-rule/design-design-rule_20240621_172136.png)

走线时符合设定的规则长度会有一个指示，在符合规则走线的情况下，指示会标绿色，大于或小于规则会标红色。

![image-20211222180329824](/storage/images/cn/pcb/design-design-rule/design-design-rule_20240621_172137.png)

### 盲埋孔规则

盲埋孔通常用于多层板设计，在新增盲埋孔之前需要先确定设计的PCB是否已经设置为多层，如果未设置，需要到图层管理器中进行设置。

![image-20211222181001893](/storage/images/cn/pcb/design-design-rule/design-design-rule_20240621_172138.png)

PCB如果需要盲埋孔，需要首先在设计规则中添加。

- 新增盲埋孔

点击新增按钮，即可在盲埋孔列表中新增一个盲埋孔，输入盲埋孔的名称，设置起始层和结束层，点击应用即可添加成功。

![image-20211222181551936](/storage/images/cn/pcb/design-design-rule/design-design-rule_20240621_172139.png)

- 删除盲埋孔

在盲埋孔列表中选中某一个盲埋孔，再点击删除按钮，即删除该盲埋孔

- 上移/下移盲埋孔

在盲埋孔列表中选中某一个盲埋孔，点击上移、下移按钮调整其在列表中的顺序，在布线时放置盲埋孔会根据该排序顺序放置

### 过孔尺寸规则

可以在过孔尺寸规则中设置过孔外径/内径的最小、默认和最大尺寸。PCB中的过孔尺寸如果不满足最小到最大的范围，将被DRC检测出来。默认孔径则是指每次放置过孔时默认取的尺寸。

![image-20211222181718484](/storage/images/cn/pcb/design-design-rule/design-design-rule_20240621_172140.png)

## 平面规则

### 内电层规则

![image-20211222181744494](/storage/images/cn/pcb/design-design-rule/design-design-rule_20240621_172141.png)

- **网络间距**：设置铺铜时铺铜填充到不同网络元素的间距。
- **到边框/槽孔间距**：设置铺铜填充到边框、挖槽区域的间距。
- **焊盘连接方式**：分为发散和直连，无连接。设置为发散时，可以分别设置发散线宽和发散间距。直连时，铺铜会直接连接到焊盘。无连接时，铺铜不会连接到焊盘。
- **发散间距**：焊盘对铜皮的发散间距设置。
- **发散线宽**：连接焊盘导线铜皮发散间距的设置。
- **发散角度**：支持内电层铜皮链接方式角度的设置。
  ![图 201](/storage/images/cn/pcb/design-design-rule/design-design-rule_20240621_172142.png)

### 铺铜规则

铺铜规则与内电层规则基本相同，此处不再赘述。

注意：当铺铜的焊盘发散线宽设置为 0 的时候，将根据焊盘的尺寸自动生成连接线宽。

![图 203](/storage/images/cn/pcb/design-design-rule/design-design-rule_20240621_172143.png)

铺铜相比内电层规则，多了一个导线连接方式设置，支持设置为无连接。设置为无连接时，铺铜不会和导线相连，也就不会看起来导线被铺铜覆盖了。

![图 202](/storage/images/cn/pcb/design-design-rule/design-design-rule_20240621_172144.png)

## 扩展规则

### 助焊扩展规则

![image-20211222181826691](/storage/images/cn/pcb/design-design-rule/design-design-rule_20240621_172145.png)

助焊扩展用于贴片封装的焊盘，当焊盘的助焊扩展属性设置为通用时，就会以设计规则中的助焊扩展作为其助焊。

![图 200](/storage/images/cn/pcb/design-design-rule/design-design-rule_20240621_172146.png)

### 阻焊扩展规则

可以在阻焊扩展中分别设置焊盘和过孔的阻焊扩展，如果你不想对过孔开窗，将阻焊扩展数据设置为一个小于孔径的数字（如-1000mil）即可

![图 198](/storage/images/cn/pcb/design-design-rule/design-design-rule_20240621_172147.png)

与助焊扩展类似，默认焊盘和过孔的阻焊扩展都是跟随规则

![图 199](/storage/images/cn/pcb/design-design-rule/design-design-rule_20240621_172148.png)

如果需要自定义某个焊盘或过孔的阻焊，需要在属性面板修改其阻焊扩展自定义参数

# 网络规则

在网络规则中，你可以对当前PCB所有的网络进行规则分配。首先在左侧树选择你要分配的规则类型，然后查看右侧视图的网络列表，默认所有网络都是在默认规则下，如果你需要修改某个网络的规则，直接在对应网络的规则下拉框切换即可。

![image-20211222182235963](/storage/images/cn/pcb/design-design-rule/design-design-rule_20240621_172149.png)

![image-20211222182521001](/storage/images/cn/pcb/design-design-rule/design-design-rule_20240621_172150.png)

网络规则中，提供了快速创建网络类和加入网络类的功能，在网络列表中单击右键，选择新建网络类功能用来新建网络类

![image-20211222183116860](/storage/images/cn/pcb/design-design-rule/design-design-rule_20240621_172151.png)

在新建后，网络类会置顶。

![image-20211222183226400](/storage/images/cn/pcb/design-design-rule/design-design-rule_20240621_172152.png)

在网络列表中通过<kbd>ctrl</kbd>多选网络，右键添加网络类功能，将选择的网络加入到网络类中

![image-20211222183355270](/storage/images/cn/pcb/design-design-rule/design-design-rule_20240621_172153.png)

![image-20211222183445872](/storage/images/cn/pcb/design-design-rule/design-design-rule_20240621_172154.png)

对网络类分配一个设计规则， 该网络类下面的所有网络都会变为这个规则

![image-20211222183459704](/storage/images/cn/pcb/design-design-rule/design-design-rule_20240621_172155.png)

使用 <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>V</kbd> 粘贴能够将复制出的网络仍然保持之前的设计规则。

# 网络-网络规则

支持设置两个不同的网络规则之间的规则约束，支持安全间距，内电层，铺铜生效的规则设置。

可以设置网络，或者网络类，并分配不同的规则。

![image-20211222183554547](/storage/images/cn/pcb/design-design-rule/design-design-rule_20240621_172156.png)

操作演示视频：https://www.bilibili.com/video/BV1dK411Z7GX/?spm_id_from=333.999.0.0&vd_source=dd7a8cc46de402157952c8f8bcd39434

# 区域规则

支持设置画布中约束区域内的规则约束，支持安全间距、其他间距、导线、差分对、过孔尺寸、内电层、铺铜。

可以对画布中不同的约束区域分配不同的规则。

![图 4](/storage/images/cn/pcb/design-design-rule/design-design-rule_20240621_172157.jpg)

# 不同层网络规则

嘉立创EDA支持根据不同层设置网络规则。

**功能入口**：

- 顶部菜单栏 - 设计 - 设计规则

## 使用方法

在安全间距页面中，规则表格上方新增了`全部`和`分层`两个选项。

![图 0](/storage/images/cn/pcb/design-design-rule/design-design-rule_20250326_143757.jpg)

当切换至`分层`选项时，表格的第一列将根据 PCB 铜箔层数量进行分类显示。点击目标层后可展开详细设置，支持用户按层配置图元间的间距规则。

![图 1](/storage/images/cn/pcb/design-design-rule/design-design-rule_20250326_144510.gif)

在导线规则页面中，规则配置表的第一列标识为`层`，支持按层或针对全部层级设置线宽规则。

![图 2](/storage/images/cn/pcb/design-design-rule/design-design-rule_20250326_152413.jpg)

在差分对规则页面中，规则配置表的第一列标识为`层`，支持按层或针对全部层级设置线宽规则和间距规则。

![图 3](/storage/images/cn/pcb/design-design-rule/design-design-rule_20250326_154542.jpg)

在铺铜规则页面中，规则配置表的第一列标识为`层`，支持按层或针对全部层级设置单层焊盘、多层焊盘及导线的规则。

![图 4](/storage/images/cn/pcb/design-design-rule/design-design-rule_20250326_154916.jpg)

在内电层规则页面中，规则配置表的第一列标识为`层`，支持按层或针对全部层级设置多层焊盘的规则。

![图 5](/storage/images/cn/pcb/design-design-rule/design-design-rule_20250326_160010.jpg)

# 盲埋孔不同层尺寸

嘉立创EDA支持为盲埋孔在不同层的尺寸添加设计规则。

**功能入口**：

- 顶部菜单栏 - 设计 - 设计规则 - 物理-盲埋孔

![图 6](/storage/images/cn/pcb/design-design-rule/design-design-rule_20250331_044034.jpg)

支持在右侧设置面板中指定盲埋孔的起始层与终止层，选择过孔尺寸配置。

![图 7](/storage/images/cn/pcb/design-design-rule/design-design-rule_20250331_044218.jpg)
