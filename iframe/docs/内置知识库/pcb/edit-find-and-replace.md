# 查找

在PCB界面中查找器件 、 属性、 名称等。查找的格式可以使用通配符和表达式查找。

-   使用通配符。勾选后文本输入框均支持通配符 `*?`。比如搜索位号：`BAT?` 或者 `BAT*`，可以把全部 BTA 开头的位号都搜索出来。`*` 可以用来代替零个、单个或多个字符，而 `？` 仅可以使用代替一个字符。
-   区分大小写。根据大小写的不同进行查找。比如查询：`max232` 和 `MAX232` 是两个不同搜索词。
-   使用表达式。支持文本输入框输入正则表达式进行字符匹配。比如查找：`/u/`, 则可以查找出全部带 u 的属性。
    具体正则表达式的用法请查看：https://www.w3school.com.cn/js/js_regexp.asp

**查找方法**：

-   顶部菜单 - 编辑 - 查找或快捷键<kbd>Ctrl + F</kbd>

![image-20211222174045272](/storage/images/cn/pcb/edit-find-and-replace/edit-find-and-replace_20240621_172124.png)

在弹窗中输入需要筛选查找的的对象。

![image-20210522133342666](/storage/images/cn/pcb/edit-find-and-replace/edit-find-and-replace_20240621_172125.png)

可选择输入的格式，不选择则是默认全部。

![image-20210519094854587](/storage/images/cn/pcb/edit-find-and-replace/edit-find-and-replace_20240621_172126.png)

过滤掉选择需要查找的对象。

![image-20210522135555705](/storage/images/cn/pcb/edit-find-and-replace/edit-find-and-replace_20240621_172127.png)

选择精准搜索或者模糊搜索。

![image-20210519094914905](/storage/images/cn/pcb/edit-find-and-replace/edit-find-and-replace_20240621_172128.png)

在输入框内输入需要查找的内容，点击查找全部。

![image-20210519094931795](/storage/images/cn/pcb/edit-find-and-replace/edit-find-and-replace_20240621_172129.png)

查找的结果将会在底部面板显示出来，并且高亮在PCB里的内容。

![image-20210522133411977](/storage/images/cn/pcb/edit-find-and-replace/edit-find-and-replace_20240621_172130.png)

查找范围可选择“当前选中对象”从而进一步筛选内容。

![图 1](/storage/images/cn/pcb/edit-find-and-replace/edit-find-and-replace_20241021_105536.png)
