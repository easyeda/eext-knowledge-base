# 底部面板-元件库

使用快捷键<kbd>\ </kbd> 调出底部弹窗，选择器件路，器件中库中有立创商城的库和嘉立创EDA的系统库。

**说明**：系统基础库不支持自定义！

## 器件库

器件库是包含了符号 、封装、3D模型、图片的一个器件库，器件库有系统的基础库，个人的器件库以及团队的器件库。

![image-20211227142819479](/storage/images/en/schematic/side-panel-bottom-library/side-panel-bottom-library_20240621_172123.png)

使用筛选器可快速找到想要的零件，比如输入 0603 可快速搜索出与0603有关的器件。

![image-20211227142910888](/storage/images/en/schematic/side-panel-bottom-library/side-panel-bottom-library_20240621_172124.png)

可以双击器件列表或者选中后点击“放置”按钮进行放置，底部面板会自动收起，取消放置时会再自动打开。

对于器件列表的具体功能请查看：“[器件库 - 器件列表](https://prodocs.lceda.cn/cn/device/bottom-side-panel-library-device-list/index.html)” 章节。

也可以通过器件对话框，<kbd>SHIFT</kbd>+<kbd>F</kbd> 打开，进行放置。

**说明**：放置器件独立对话框只能放置器件，不能对器件进行编辑操作。

## 符号库

符号库只是仅仅有一个符号而已，没有封装与3D模型，符号库的符号是不能在原理图的画布中，需要绑定器件才允许放置在画布中。符号库有系统的库、个人的库、团队的符号库。

**注意**：系统的符号库不可编辑！

![image-20211227143021857](/storage/images/en/schematic/side-panel-bottom-library/side-panel-bottom-library_20240621_172125.png)

## 封装库

封装库页是只有一个封装而已，没有符号和3D模型，封装不能单独放入PCB中。封装库也有系统的库、个人的库、团队的符号库。

![image-20211227143045206](/storage/images/en/schematic/side-panel-bottom-library/side-panel-bottom-library_20240621_172126.png)

元件库在PCB界面中的底部面板中，元件库中的器件库可以直接在PCB界面中放置器件，但是符号、封装和复用图块则不能放置。

元件库中包含了系统库、个人库、收藏库和加入团队的元件库。而元件库中又包含了器件库、符号库、封装库、复用图块。

![image-20211222165711832](/storage/images/en/pcb/side-bottom-panel-library/side-bottom-panel-library_20240621_172123.png)

## 器件搜索

器件库顶部的搜索是全局搜索，在整个元件库中搜索。

![](/storage/images/en/pcb/side-bottom-panel-library/side-bottom-panel-library_20240621_172124.png)

而下面的搜索框是对系统或个人的器件库进行分类搜索。

![](/storage/images/en/pcb/side-bottom-panel-library/side-bottom-panel-library_20240621_172125.png)

提示：
因为搜索有索引限制，故在线版本器件搜索支持的搜索字段有：标题Title、部分属性（封装Footprint、制造商编码Manufacturer Part、供应商封装Supplier Footprint、值Value、供应商编号Supplier Part、料号Part Number、元件编码Part Code）、描述Description。当你建立的器件库有自己公司的器件库时，请注意填入对应的关键属性以便可搜索。

## 编辑器件

在库中选择任意器件，点击鼠标右键，即可对器件修改。

**说明**：

-   系统库不支持修改！

![](/storage/images/en/pcb/side-bottom-panel-library/side-bottom-panel-library_20240621_172126.png)

## 新增器件

在元件库中点击右上方的新增按键，可快速创建器件，符号和封装操作相同。

![](/storage/images/en/pcb/side-bottom-panel-library/side-bottom-panel-library_20240621_172127.png)

操作演示视频：https://www.bilibili.com/video/BV1sP411V7HX/?spm_id_from=333.999.0.0
