# 自动引脚布局

当一个比较大的芯片需要绘制符号时，我们通常会将引脚按功能进行重新分组，而不是按逆时针顺序摆放引脚，以便在绘制原理图的时候可以方便同类引脚快速连接导线，比如地脚，电源脚，信号脚等等。

为解决手动进行引脚分组耗时问题，提升工程师的作业效率，我们提供了自动引脚布局功能，可以一键自动引脚分组，仅需少量修改即可完成多引脚符号的布局绘制。

入口：顶部菜单 - 布局 - 自动引脚布局

使用方法：

1、打开符号库
![picture 0](/storage/images/en/symbol/layout-auto-pin-placement/layout-auto-pin-placement_20240621_172123.jpg)

2、点击自动引脚布局菜单，选择要布局的类型，支持SOP和QFN类型
![picture 1](/storage/images/en/symbol/layout-auto-pin-placement/layout-auto-pin-placement_20240621_172124.jpg)

3、自动布局完成会自动保存
![picture 2](/storage/images/en/symbol/layout-auto-pin-placement/layout-auto-pin-placement_20240621_172125.jpg)

编辑器将自动根据引脚名称进行分组，如果发现不合适的引脚手动调整一下即可

高级符号向导也同样有该功能，可以在导入表格时就进行自动引脚布局；
![picture 3](/storage/images/en/symbol/layout-auto-pin-placement/layout-auto-pin-placement_20240621_172126.jpg)

引脚布局支持设置引脚类型：

![图 1](/storage/images/cn/symbol/layout-auto-pin-placement/layout-auto-pin-placement_20250207_175839.jpg)

规格书提取向导在提取后默认使用自动引脚布局功能，在应用后就是布局后的效果。
