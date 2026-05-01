# 库相关常见问题

## 元件是指什么？和符号有什么区别？{#元件与符号}

::: details
元件=创建了器件+符号， 创建完之后就是在器件库一栏，可以直接放置原理图文件
符号指单独创建了一个符号，后面需要再关联器件才可放置到文件里面
:::

## 标准版和专业版的库共同使用的吗？{#共同库}

::: details
不是，官方库两边同步，其他用户贡献库，个人库不相通，需要另外迁移导入。
:::

## 底部面板库文件如何打开？{#底部库}

::: details 1.视图里面打开勾上底部面板2.按快捷键‘\’或‘S’ 3.手动点中下拉箭头打开
![图 13](/storage/images/cn/faq/library/library_20240815_170450.png)
:::

## 如何放置器件 {#放器件}

::: details
[如何放置器件：](https://prodocs.lceda.cn/cn/device/place-device/)
:::

## 如何批量创建器件库 {#批量建器件}

::: details
嘉立创EDA可以有两种方法批量创建器件库

1、可以通过导入第三方EDA的库的时候，进行提取库，这时可以批量创建

2、通过使用xlsx表格进行批量创建，具体查看教程：[批量新建器件](../../device/file-new-device/)

![picture 0](/storage/images/cn/device/file-new-device/file-new-device_20240621_172143.jpg)
:::

## 如何创建符号库 {#建符号}

::: details
[创建符号使用文档：](https://prodocs.lceda.cn/cn/symbol/file-new-symbol/)

<iframe src="//player.bilibili.com/player.html?isOutside=true&aid=430121097&bvid=BV1DG41157JS&cid=834715446&p=1&autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" style="width: 100%; margin: auto; display: block; height: 800px"></iframe>
:::

## 专业版如何创建子库 {#建子库}

::: details
[专业版如何创建子库：](https://prodocs.lceda.cn/cn/symbol/file-new-symbol-component-symbol/#%E5%88%9B%E5%BB%BA%E5%AD%90%E5%BA%93-%E5%A4%9A%E9%83%A8%E4%BB%B6)
:::

## 如何关联器件 {#联器件}

::: details
EDA的库使用逻辑，符号，封装需要关联器件才可放置
底部面板个人库鼠标右键选择关联

![图 0](/storage/images/cn/faq/library/library_20240815_155416.png)
![图 1](/storage/images/cn/faq/library/library_20240815_155424.png)
符号或者封装界面右侧面板的器件标签页是展示这个封装被哪些器件所关联，方便新建器件关联当前封装，也方便直接在已有绑定的器件中，直接移除这个封装的绑定关系。
![图 49](/storage/images/cn/faq/library/library_20241126_165230.png)

![图 2](/storage/images/cn/faq/library/library_20240815_155431.png)
:::

## 专业版底部栏搜索器件，怎么没有立创商城和嘉立创eda选项？ {#库搜索引擎没有选项}

::: details
全离线模式没有，只有全在线和半离线模式才有。
:::

## 如何把EDA库批量另存为本地 {#库h}

::: details
按S快捷键底部面板1.视图里面打开勾上底部面板2.按快捷键‘\’或‘S’ 3.手动点中下拉箭头打开
![图 14](/storage/images/cn/faq/library/library_20240815_170544.png)
可以多选，再点批量另存为。（要注意批量下载器件，符号，还是封装）
想要当前工程的库文件的话就在工程库里面批量另存为
![图 15](/storage/images/cn/faq/library/library_20240815_170558.png)
![图 16](/storage/images/cn/faq/library/library_20240815_170606.png)
![图 17](/storage/images/cn/faq/library/library_20240815_170614.png)
:::

## 高级符号向导 {#符向导}

::: details
[高级符号向导文档教程：](https://prodocs.lceda.cn/cn/symbol/tools-advanced-symbol-wizard/)
:::

## 智能尺寸如何用？

::: details
智能尺寸向导文档教程：(https://prodocs.lceda.cn/cn/panel/place-smart-dimension/#%E6%99%BA%E8%83%BD%E5%B0%BA%E5%AF%B8-1)

<iframe src="//player.bilibili.com/player.html?isOutside=true&aid=985258952&bvid=BV1jt4y177ET&cid=826487432&p=1&autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" style="width: 100%; margin: auto; display: block; height: 800px"></iframe>
:::

## 在PCB文件里面如何编辑修改封装 {#PCB修改封装}

::: details
PCB文件里面如何编辑封装
选中封装后，右键菜单 编辑封装
![图 3](/storage/images/cn/faq/library/library_20240815_160554.png)
底部面板也可以编辑
![图 4](/storage/images/cn/faq/library/library_20240815_160628.png)
:::

## 如何将已打开工程的封装保存为个人库？{#另个库}

::: details
**在底部面板（S快捷键）-工程库-找到这个封装右键-另存为个人 即可保存在个人库里面**

![图 5](/storage/images/cn/faq/library/library_20240815_160913.png)
![图 6](/storage/images/cn/faq/library/library_20240815_160920.png)
![图 7](/storage/images/cn/faq/library/library_20240815_161047.png)

**如果是想保存到电脑本地，在工程库-左上角批量下载-即可下载elibz压缩包。**
![图 8](/storage/images/cn/faq/library/library_20240815_161245.png)
![图 9](/storage/images/cn/faq/library/library_20240815_161313.png)
![图 10](/storage/images/cn/faq/library/library_20240815_161344.png)
**下载完成后需要再导入进来EDA使用**
![图 11](/storage/images/cn/faq/library/library_20240815_161602.png)
:::

## 如何创建封装库 {#建封装}

::: details
[创建封装使用文档：](https://prodocs.lceda.cn/cn/footprint/file-new-footprint/)
:::

## 封装如何检查尺寸 {#检查尺寸}

::: details

<iframe src="//player.bilibili.com/player.html?isOutside=true&aid=772867446&bvid=BV1t14y1e7sk&cid=826490385&p=1&autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" style="width: 100%; margin: auto; display: block; height: 800px"></iframe>
:::

## 封装向导如何使用 {#封装向导}

::: details

<iframe src="//player.bilibili.com/player.html?isOutside=true&aid=515310454&bvid=BV1Dg411S7zV&cid=826479868&p=1&autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" style="width: 100%; margin: auto; display: block; height: 800px"></iframe>
:::

## 重置封装焊盘编号 {#重置焊盘编号}

::: details
如果你放置了非常多的焊盘，需要重新对焊盘进行编号，可以使用“重新编号焊盘”功能。
入口：工具 - 重新编号焊盘。或画布右键菜单“重新编号焊盘”。
![图 12](/storage/images/cn/faq/library/library_20240815_163441.png)
:::

## 封装库命名参考规范 {#命名参考}

::: details
[封装命名参考规范文档：](https://www.jlc-bbs.com/platform/a/527316)
:::

## 本地离线库如何导入到在线库？ {#g导}

::: details

1.如果本地电脑是有以下elib或是elibz这些本地离线库组文件
![图 18](/storage/images/cn/faq/library/library_20240815_170937.png)
可以直接打开EDA编辑器离线模式，在底部面板选择批量另存为再导入到在线，文件-导入-嘉立创EDA（专业版）
![图 19](/storage/images/cn/faq/library/library_20240815_170952.png)
![图 20](/storage/images/cn/faq/library/library_20240815_171009.png)
![图 21](/storage/images/cn/faq/library/library_20240815_171022.png)

<iframe src="//player.bilibili.com/player.html?isOutside=true&aid=515063050&bvid=BV15g411Q7gB&cid=818164829&p=1&autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" style="width: 100%; margin: auto; display: block; height: 800px"></iframe>
:::

## 如何打开elib离线库 {#elib}

::: details
![图 22](/storage/images/cn/faq/library/library_20240815_171721.png)
![图 23](/storage/images/cn/faq/library/library_20240815_171728.png)
![图 24](/storage/images/cn/faq/library/library_20240815_171735.png)

<iframe src="//player.bilibili.com/player.html?isOutside=true&aid=515063050&bvid=BV15g411Q7gB&cid=818164829&p=1&autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" style="width: 100%; margin: auto; display: block; height: 800px"></iframe>
:::

## 离线模式下的新建元件库路径如何修改？ {#库路径}

::: details
![图 27](/storage/images/cn/faq/library/library_20240815_172048.png)
![图 28](/storage/images/cn/faq/library/library_20240815_172055.png)
![图 29](/storage/images/cn/faq/library/library_20240815_172102.png)
![图 30](/storage/images/cn/faq/library/library_20240815_172109.png)
:::

## 个人库器件如何导入团队库 {#团队库}

::: details
![图 0](/storage/images/cn/faq/library/library_20260225_093101.png)
![图 1](/storage/images/cn/faq/library/library_20260225_093216.png)
![图 2](/storage/images/cn/faq/library/library_20260225_093535.png)

:::

## 如何设置元件分类 {#分类}

::: details
![图 38](/storage/images/cn/faq/library/library_20240815_175411.png)

<iframe src="//player.bilibili.com/player.html?isOutside=true&aid=260203817&bvid=BV1Fe41137uY&cid=824581598&p=1&autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" style="width: 100%; margin: auto; display: block; height: 800px"></iframe>
:::

## 客户端离线模式如何创建库与把库文件导出到在线

::: details

<iframe src="//player.bilibili.com/player.html?isOutside=true&aid=515063050&bvid=BV15g411Q7gB&cid=818164829&p==1&autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" style="width: 100%; margin: auto; display: block; height: 800px"></iframe>
:::

## 常用库添加 {#常用库}

::: details
![图 39](/storage/images/cn/faq/library/library_20240815_175603.png)
![图 40](/storage/images/cn/faq/library/library_20240815_175610.png)

<iframe src="//player.bilibili.com/player.html?isOutside=true&aid=560224221&bvid=BV13e4y1h7Y4&cid=821771694&p=1&autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" style="width: 100%; margin: auto; display: block; height: 800px"></iframe>
:::

## 如何将已打开工程的封装保存为个人库？ {#存}

::: details

<b>底部面板-工程库-找到这个封装右键-另存为个人设计-设计规则</b>

![图 52](/storage/images/cn/faq/pcb/pcb_20240730_152020.png)

![图 53](/storage/images/cn/faq/pcb/pcb_20240730_152025.png)
:::

## 个人库器件如何导入团队库 {#个人库为团队}

::: details

1.进入个人工作区里面选择

![图 64](/storage/images/cn/faq/pcb/pcb_20240806_154648.png)

![图 66](/storage/images/cn/faq/pcb/pcb_20240806_154659.png)

![图 67](/storage/images/cn/faq/pcb/pcb_20240806_154703.png)

![图 70](/storage/images/cn/faq/pcb/pcb_20240806_154648.png)

2.底部面板也可直接右键另存为在团队下，但只能一个一个右键操作

![图 68](/storage/images/cn/faq/pcb/pcb_20240806_154715.png)

![图 69](/storage/images/cn/faq/pcb/pcb_20240806_154721.png)
:::
