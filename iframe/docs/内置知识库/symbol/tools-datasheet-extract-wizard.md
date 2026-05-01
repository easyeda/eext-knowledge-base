# 规格书提取向导

规格书提取向导用于快速创建IC类型芯片的符号，只需要用户在向导中加载PDF或图片，然后识别出符号的引脚信息，方便快速创建符号。

入口：顶部菜单 - 工具 - 规格书提取向导。

![picture 0](/storage/images/en/symbol/tools-datasheet-extract-wizard/tools-datasheet-extract-wizard_20240621_172123.jpg)

操作步骤：

1、打开规格书提取向导。
![picture 1](/storage/images/en/symbol/tools-datasheet-extract-wizard/tools-datasheet-extract-wizard_20240621_172124.jpg)

点击按钮添加PDF/图片，或拖动PDF/图片，或CTRL+V粘贴PDF/图片到此处进行预览。推荐使用PDF，识别成功率更高。

2、打开规格书，点击框选区域，把符号区域框选准确，只需要把需要的部分框选，其他不需要的部分请不要框选进去。
支持连续框选多个区域，每个区域将会单独生成不同名称的部件名，在生成符号时，将自动创建不同的多部件（多Part）符号。

框选举例：
1）SOP类型
![picture 2](/storage/images/en/symbol/tools-datasheet-extract-wizard/tools-datasheet-extract-wizard_20240621_172125.jpg)

2）QFN类型
![picture 6](/storage/images/en/symbol/tools-datasheet-extract-wizard/tools-datasheet-extract-wizard_20240621_172126.jpg)

3）表格类型
只需要框选引脚编号和引脚名称，表头也不需要框选。
![picture 7](/storage/images/en/symbol/tools-datasheet-extract-wizard/tools-datasheet-extract-wizard_20240621_172127.jpg)

如果是比较标准的连续表格，如CPU芯片等引脚表格，支持直接通过按页提取，按页提取仅支持表格类型。提取向导支持常见的表格表头识别，如果按页提取效果不佳，请通过框选提取表格的方式提取。
![picture 9](/storage/images/en/symbol/tools-datasheet-extract-wizard/tools-datasheet-extract-wizard_20240621_172128.jpg)

4）BGA类型
BGA类型时，如果出现两次横向和纵向的编号，只需要框选一组，另外一组编号不需要框选，如下图箭头所示
![picture 8](/storage/images/en/symbol/tools-datasheet-extract-wizard/tools-datasheet-extract-wizard_20240621_172129.jpg)

如果你是粘贴截图进行提取，请把符号图片放大到最大，再截图保存，然后加载进行识别，图片缩放越大，清晰度越高，识别准确度越好。

图片加载后，可以不需要框选，直接点击提取按钮进行提取即可。

3、点击提取按钮，选择你提取的符号类型
![picture 3](/storage/images/en/symbol/tools-datasheet-extract-wizard/tools-datasheet-extract-wizard_20240621_172130.jpg)

4、在引脚信息列表检查和修改识别后的列表，可以手动添加没有识别到引脚，修改识别错误的引脚名称或编号，支持批量修改。
![picture 4](/storage/images/en/symbol/tools-datasheet-extract-wizard/tools-datasheet-extract-wizard_20240621_172131.jpg)

5、检查修改无误后，点击应用按钮，进行符号生成。向导会自动根据引脚名称进行分组，方便将电源，地，信号等分组，方便绘图。
![picture 5](/storage/images/en/symbol/tools-datasheet-extract-wizard/tools-datasheet-extract-wizard_20240621_172132.jpg)

功能说明：

1、支持提取SOP类型、QFN类型、表格类型、BGA类型符号。
2、文本类PDF提取成功率最高，如果遇到文本类提取不正确，一般是文本是乱码导致，可以尝试用鼠标框选引脚名称，再粘贴在记事本，查看是否乱码，乱码的不支持提取，后续会支持自动转为图片识别的方式提取。
3、图片的识别效果比较差，目前比较难提高识别准确度，建议优先用PDF提取。PDF内的符号是图片的，暂时不支持提取。
4、表格类的提取会自动拆分引脚编号和名称等
