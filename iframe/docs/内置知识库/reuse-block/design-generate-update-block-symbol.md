# 生成/更新模块符号

在原理图生成/更新层次图的符号，多数用于更新图块，自上而下的设计层次图。

顶部菜单 - 设计 - 生成更新图块符号，点击即可将原理图生成复用模块或将原理图更改的内容重新生成。

![image-20210520173100732](/storage/images/en/reuse-block/design-generate-update-block-symbol/design-generate-update-block-symbol_20240621_172123.png)

![image-20210520173041809](/storage/images/en/reuse-block/design-generate-update-block-symbol/design-generate-update-block-symbol_20240621_172124.png)

## 批量复用

在复用模块符号实例的右侧属性中可以设置批量复用属性，来达到批量复用的效果，例如在批量复用中填写初始值为1，结束值为10，则该实例复用模块符号相当于复用了10次。

![图 0](/storage/images/en/reuse-block/design-generate-update-block-symbol/design-generate-update-block-symbol_20240621_172125.jpg)

批量复用的实例模块符号，右键展开后，画布底部可以切换查看不同实例。
![图 2](/storage/images/en/reuse-block/design-generate-update-block-symbol/design-generate-update-block-symbol_20240621_172126.png)

复用模块符号的引脚属性有“引脚复用”属性，用户设置为复用引脚时，画布上的引脚名称会显示Reuse 前缀，设置为共用引脚，则只显示引脚名称。
![图 3](/storage/images/en/reuse-block/design-generate-update-block-symbol/design-generate-update-block-symbol_20240621_172127.png)

设置为共用引脚时，该端口在所有实例之间是全部连接在—起的。

设置为复用引脚时，该端口在实例之间是不连接的。

复用引脚如果连接了一条导线，则这条导钱只连接批星复用的第一个实例。

复用引脚如果连接了一条总线，则总线分支连接对应的批量复用实例（根据分支数字结尾，决定所连接的批量复用实例）。
