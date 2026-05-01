# 元件符号

## 创建元件符号

元件符号是指放在原理图里面的元件，需要连接引脚，设置引脚名称等。

入口1：顶部菜单 - 文件 - 新建 - 符号。

![图 1](/storage/images/cn/symbol/file-new-symbol-component-symbol/file-new-symbol-component-symbol_20241106_092803.png)

入口2：首页面 - 快速开始 - 新建符号。

![图 2](/storage/images/cn/symbol/file-new-symbol-component-symbol/file-new-symbol-component-symbol_20241106_092924.png)

在 新建符号 弹窗中编辑符号名称，分类，描述。

![图 3](/storage/images/cn/symbol/file-new-symbol-component-symbol/file-new-symbol-component-symbol_20241106_092937.png)

创键元件符号的步骤：

1、获取元件规格书，得到符号样式和引脚信息。比如：https://item.szlcsc.com/8070.html

![图 56](/storage/images/en/symbol/file-new-symbol-component-symbol/file-new-symbol-component-symbol_20240621_172124.png)

2、绘制矩形作为元件图形。

![图 57](/storage/images/en/symbol/file-new-symbol-component-symbol/file-new-symbol-component-symbol_20240621_172125.png)

3、放置引脚。快捷键 P。入口：顶部菜单 - 放置 - 引脚。

![图 58](/storage/images/en/symbol/file-new-symbol-component-symbol/file-new-symbol-component-symbol_20240621_172126.png)

4、设置引脚编号和名称。双击引脚编号或者名称修改，也可以单击在左侧引脚列表，右侧属性面板修改。
根据实际情况调整引脚的方位方便绘图连线。

![图 59](/storage/images/en/symbol/file-new-symbol-component-symbol/file-new-symbol-component-symbol_20240621_172127.png)

5、在左侧属性面板设置符号的名称和位号值，如 U?

![图 4](/storage/images/cn/symbol/file-new-symbol-component-symbol/file-new-symbol-component-symbol_20241106_093212.png)

6、保存完成创建。
保存后可以在底部面板的元件库找到：底部面板 - 元件库 - 符号 - 个人。

如果需要创建子库，或者多部件的符号库，请参考下文。

**注意**：必须创建一个同名或者不同名的器件绑定创建的好的符号，才可以在原理图里面放置使用。

## 创建子库/多部件 {#子库1}

当一个元件的引脚数量过多时，如果将其全部绘制在一个库文件中会占用大量空间。因此可以采用创建子库（也称为多部件器件、子母库或多部件符号）的方式，将元件拆分为多个符号组合。每个子库对应同一个封装，但仅包含部分引脚，且焊盘编号不同。所有子库组合在一起时构成一个完整的元件。

**操作步骤**：

1、打开或创建一个符号库文件，在底部菜单栏能看到元件的子库。

![图 6](/storage/images/cn/symbol/file-new-symbol-component-symbol/file-new-symbol-component-symbol_20241106_093629.png)

2、点击 画布左下角的 + ，添加子库

![图 7](/storage/images/cn/symbol/file-new-symbol-component-symbol/file-new-symbol-component-symbol_20241106_093657.png)

3、每次添加子库均会产生一个名称带 .1 ，.2，.3 等的子库文件。

- 含子库的元件仅在父库指定一个封装即可，若你为每一个子库均指定不同的封装，那么嘉立创EDA将保留最后一个指定的封装做为元件的封装\*
- 子库的编号必须均与父库保持一致。

4、子库创建完毕后也可以在器件库中看到子库目录。

![图 8](/storage/images/cn/symbol/file-new-symbol-component-symbol/file-new-symbol-component-symbol_20241106_093907.png)

点击底部按钮可显示详细子库目录。

![图 9](/storage/images/cn/symbol/file-new-symbol-component-symbol/file-new-symbol-component-symbol_20241106_093945.png)

# 引脚编号全局递增

在不同 part 放置引脚时，支持引脚编号的全局递增。

![图 0](/storage/images/cn/symbol/file-new-symbol-component-symbol/file-new-symbol-component-symbol_20250321_101047.gif)

# 多引脚支持更多属性

在放置单个或多个引脚时，可通过按下`TAB`打开弹窗以设置更多属性。支持配置的属性包括：引脚类型、引脚形状、非连接标识、方向、长度以及引脚颜色。

![图 1](/storage/images/cn/symbol/file-new-symbol-component-symbol/file-new-symbol-component-symbol_20250321_101351.jpg)

# 引脚默认长度

支持在 设置-原理图/符号-通用 中设置默认引脚长度，新建符号时放置的引脚按照这个长度。

![图 2](/storage/images/cn/symbol/file-new-symbol-component-symbol/file-new-symbol-component-symbol_20250321_102007.jpg)
