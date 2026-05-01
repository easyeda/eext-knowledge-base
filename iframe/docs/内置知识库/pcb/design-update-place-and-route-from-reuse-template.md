# 从复用模板更新布局布线

嘉立创EDA专业版提供了复用模块功能，通过此功能可以对PCB进行模块复用，达到布局布线复用的目的。

# 创建复用模块

-   操作入口：顶部菜单 - 文件 - 新建 - 复用模块

![图 1](/storage/images/cn/pcb/design-update-place-and-route-from-reuse-template/design-update-place-and-route-from-reuse-template_20240621_172124.jpg)

复用模块是一种特殊的工程，它将存储在复用模块库中，在新建时可以设置模块分类和描述

![图 2](/storage/images/cn/pcb/design-update-place-and-route-from-reuse-template/design-update-place-and-route-from-reuse-template_20240621_172125.jpg)

创建复用模块成功后，将会默认在工程下创建一个同时含有原理图和PCB的板子，一个符号。

![图 3](/storage/images/cn/pcb/design-update-place-and-route-from-reuse-template/design-update-place-and-route-from-reuse-template_20240621_172126.jpg)

**注意**：原理图、PCB和符号通过名称来产生关联，如果单独修改了某个类型的名称，引用时他们之间将断开联系，无法一起进行复用。

在模块工程中设计完原理图和PCB，保存前可再次点击原理图转PCB，检查原理图和PCB确保网表一致。如果需要以符号方式引用原理图，将符号的引脚与原理图图页的网络端口名称和数量保持一致，具体操作可以查看复用模块-创建复用模块章节。

# 放置复用模块

-   操作入口：底部面板 - 库 - 复用模块

![图 0](/storage/images/cn/pcb/design-update-place-and-route-from-reuse-template/design-update-place-and-route-from-reuse-template_20240621_172127.jpg)

在原理图放置复用模块后，转到PCB，PCB会自动根据复用模块中的布局布线组合成模块；也可以直接在PCB中放置复用模块，但这种方式放置原理图和PCB的网表并未产生关联。

## 原理图放置

在原理图中可以直接放置复用模块，分为符号方式放置和组合方式放置两种方式，这两种方式在原理图画布中会表现为不同的形态，但在转到PCB时，都可以将整个PCB模块一起组合好，免去重新布局布线的操作，提高设计效率。

![图 4](/storage/images/cn/pcb/design-update-place-and-route-from-reuse-template/design-update-place-and-route-from-reuse-template_20240621_172128.jpg)

放置过程中，左侧面板的图页树会自动创建复用模块工程下的原理图和PCB模板，后续的原理图转PCB和从复用模板更新布局布线将从此模板进行复用。

![图 5](/storage/images/cn/pcb/design-update-place-and-route-from-reuse-template/design-update-place-and-route-from-reuse-template_20240621_172129.jpg)

原理图放置后具体在原理图产生的不同形态差别，请在复用模块-放置复用模块章节查看

## PCB放置

在PCB中选中复用模块库下的PCB，也可以直接放置模块，点击后将整个模块作为一个组合放置到画布

![图 6](/storage/images/cn/pcb/design-update-place-and-route-from-reuse-template/design-update-place-and-route-from-reuse-template_20240621_172130.jpg)

![图 7](/storage/images/cn/pcb/design-update-place-and-route-from-reuse-template/design-update-place-and-route-from-reuse-template_20240621_172131.jpg)

# 从复用模板更新布局布线

在PCB模块的布局布线更新后，如果一个PCB中复用了多次，在每个模块单独修改是十分麻烦的，嘉立创EDA专业版提供了从复用模板更新布局布线功能，只需修改一次PCB模板，再一键更新到当前PCB所有引用的地方。

## 复用模块属性

原理图和PCB在放置模块后，模块内的每个元件均会自动产生复用模块相关的属性，用于后续原理图转PCB自动布局布线以及从模板更新布局布线。

![图 8](/storage/images/cn/pcb/design-update-place-and-route-from-reuse-template/design-update-place-and-route-from-reuse-template_20240621_172132.jpg)

-   复用模块：复用模块名称相同的元件同属于一个模板，左侧图页树中的同名PCB即为它们的模板PCB

-   分组ID：一个模块可能会被复用多次，就会产生多个组，分组ID属性用于区分当前元件归属于哪个组

-   通道ID：一个模块内可能会存在多个相同器件封装的元件，通道ID用于确认模块内这个元件的具体位置

## 从模板更新

**操作入口**：顶部菜单 - 设计 - 从复用模板更新布局布线

![图 9](/storage/images/cn/pcb/design-update-place-and-route-from-reuse-template/design-update-place-and-route-from-reuse-template_20240621_172133.jpg)

从复用模板更新布局布线弹窗中，左侧的列表列出了模块+分组id的复用模块，选中对应模块，可以在右侧预览对比当前版本和模板最新版本的差异

![图 10](/storage/images/cn/pcb/design-update-place-and-route-from-reuse-template/design-update-place-and-route-from-reuse-template_20240621_172134.jpg)

勾选需要更新的模块，点击确认，画布中的对应模块将会重新按照最新的模板进行自动布局布线。

![图 11](/storage/images/cn/pcb/design-update-place-and-route-from-reuse-template/design-update-place-and-route-from-reuse-template_20240621_172135.jpg)
