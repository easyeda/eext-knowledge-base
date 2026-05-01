# 查找和替换 {#查找替换}

在原理图中查找元件、导线、总线、符号、文本、引脚等，

操作步骤:

-   顶部菜单 - 编辑 - 查找替换
-   快捷键<kbd>CTRL</kbd> + <kbd>F</kbd>

![image-20211227161708462](/storage/images/en/schematic/edit-find-and-replace/edit-find-and-replace_20240621_172123.png)

![image-20210518150256745](/storage/images/en/schematic/edit-find-and-replace/edit-find-and-replace_20240621_172124.png)

2、输入需要查找的内容后，可以选择模糊或者精准；精准查找会查找完全相等的内容。模糊查找会查找到包含输出文本的内容

![image-20201204102111278](/storage/images/en/schematic/edit-find-and-replace/edit-find-and-replace_20240621_172125.png)

3、选择查找的内容。

![image-20210518150338848](/storage/images/en/schematic/edit-find-and-replace/edit-find-and-replace_20240621_172126.png)

4、查找的范围。

![image-20201204102152417](/storage/images/en/schematic/edit-find-and-replace/edit-find-and-replace_20240621_172127.png)

5、查找的对象、格式。

![image-20210518150404465](/storage/images/en/schematic/edit-find-and-replace/edit-find-and-replace_20240621_172128.png)

-   使用通配符。勾选后文本输入框均支持通配符 `* 或 ?`。比如搜索位号：`BAT?` 或者 `BAT*`，可以把全部 BTA 开头的位号都搜索出来。`*` 可以用来代替零个、单个或多个字符，而 `？` 仅可以使用代替一个字符。
-   区分大小写。根据大小写的不同进行查找。比如查询：`max232` 和 `MAX232` 是两个不同搜索词。
-   使用表达式。支持文本输入框输入正则表达式进行字符匹配。比如查找：`/u/`, 则可以查找出全部带 u 的属性。
    具体正则表达式的用法请查看：https://www.w3school.com.cn/js/js_regexp.asp

6、点击查找全部。

![image-20201204102309825](/storage/images/en/schematic/edit-find-and-replace/edit-find-and-replace_20240621_172129.png)

就能在底部的菜单栏看到查找的结果了

![image-20201204102344592](/storage/images/en/schematic/edit-find-and-replace/edit-find-and-replace_20240621_172130.png)

## 替换

将查找的结果替换，操作基本和查找相似。

替换的顺序逻辑为**：查找后再替换**。

![image-20201204102745258](/storage/images/en/schematic/edit-find-and-replace/edit-find-and-replace_20240621_172131.png)

1、输入想要查找的内容。

![image-20201204103151880](/storage/images/en/schematic/edit-find-and-replace/edit-find-and-replace_20240621_172132.png)

2、输入要替换的内容。

![image-20201204102822427](/storage/images/en/schematic/edit-find-and-replace/edit-find-and-replace_20240621_172133.png)

**替换全部**：替换工程下所有的查找的内容；

**替换当前**：只替换当前选中的内容；

![image-20201204102913349](/storage/images/en/schematic/edit-find-and-replace/edit-find-and-replace_20240621_172134.png)

操作视频链接：https://www.bilibili.com/video/BV1BW4y1t7QE/?spm_id_from=333.999.0.0
