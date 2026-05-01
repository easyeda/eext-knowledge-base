# 查找相似对象 {#find}

嘉立创EDA提供了查找和查找相似对象两个查找工具，可以非常方便地进行查找对象。

操作入口：

- 顶部菜单 - 编辑 - 查找相似对象
- 画布选中图元，右键菜单 - 查找相似对象
- 快捷键 <kbd>CTRL</kbd>> + <kbd>SHIFT</kbd>> + <kbd>F</kbd>

## 使用方法

![图 20](/storage/images/en/schematic/edit-find-similar-objects/edit-find-similar-objects_20240621_172123.png)

通过右键打开的查找相似对象会自动选择该图元类型和填写对应的属性参数。

![图 21](/storage/images/en/schematic/edit-find-similar-objects/edit-find-similar-objects_20240621_172124.png)

**种类**：支持了原理图里面全部的图元类型，和元件的属性

![图 22](/storage/images/en/schematic/edit-find-similar-objects/edit-find-similar-objects_20240621_172125.png)

**范围**：支持设置查找的范围，当前图页，当前原理图，全部原理图，选中的图元中查找等

![图 23](/storage/images/en/schematic/edit-find-similar-objects/edit-find-similar-objects_20240621_172126.png)

**属性**：设置查找的条件和x规则。
![图 24](/storage/images/en/schematic/edit-find-similar-objects/edit-find-similar-objects_20240621_172127.png)

- 使用通配符。勾选后文本输入框均支持通配符 `* 或 ?`。比如搜索位号：`BAT?` 或者 `BAT*`，可以把全部 BTA 开头的位号都搜索出来。`*` 可以用来代替零个、单个或多个字符，而 `？` 仅可以使用代替一个字符。
- 区分大小写。根据大小写的不同进行查找。比如查询：`max232` 和 `MAX232` 是两个不同搜索词。

## 表达式查找

- 在输入格式复选框中勾选**使用表达式**后，支持在文本输入框中输入正则表达式进行高级匹配（无需输入两侧的 `/` ）

![图 0](/storage/images/cn/schematic/edit-find-similar-objects/edit-find-similar-objects_20250610_103938.png)

### 表达式示例

| 应用场景          | 表达式示例        | 说明                                       |
| ----------------- | ----------------- | ------------------------------------------ |
| **位号匹配**      |                   |                                            |
| 匹配R开头的电阻   | `^R\d+`           | 匹配"R1"、"R101"等 (区分大小写)            |
| 匹配所有芯片      | `^(U\|IC)\d+`     | 匹配"U1"、"IC2"等 (不区分大小写需用字符集) |
| **网络标签匹配**  |                   |                                            |
| 匹配电源网络      | `(VCC\|VDD\|GND)` | 匹配各种电源网络标签                       |
| 匹配时钟信号      | `CLK_[0-9]+`      | 匹配"CLK_1"、"CLK_12"等                    |
| **元件参数匹配**  |                   |                                            |
| 匹配10K电阻       | `10[kK]`          | 匹配"10k"、"10K" (Ω符号需单独处理)         |
| 匹配容值范围      | `10[0-9]{0,2}uF`  | 匹配100uF~1099uF电容                       |
| **封装匹配**      |                   |                                            |
| 匹配QFN封装       | `QFN\d+`          | 匹配"QFN32"、"QFN48"等                     |
| 匹配0402/0603封装 | `0(402\|603)`     | 匹配0402或0603封装                         |
| **高级匹配**      |                   |                                            |
| 匹配特定总线      | `^DATA\[[0-7]\]$` | 精确匹配DATA[0]~DATA[7]                    |
| 匹配未命名网络    | `^NET-[0-9]+$`    | 匹配"NET-123"等自动生成网络                |

> 表达式测试工具：[https://regex101.com](https://regex101.com/)
>
> 更多表达式用法：[https://www.w3school.com.cn/js/js_regexp.asp](https://www.w3school.com.cn/js/js_regexp.asp)

操作视频链接：[如何进行查找相似对象](https://www.bilibili.com/video/BV1BW4y1t7QE/?spm_id_from=333.999.0.0)
