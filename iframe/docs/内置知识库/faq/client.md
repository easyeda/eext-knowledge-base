# 客户端常见问题

## 客户端界面

::: details
嘉立创EDA专业版客户端支持三大运行模式：

- 全在线模式：需要登录，库和工程都存在云端，支持协作，支持自动备份云端工程到本地；
- 半离线模式：不需要登录，库和工程都存在本地，不支持协作，支持使用云端系统库。推荐使用该模式。
- 全离线模式：不需要登录，库和工程都存在本地，不支持协作，不支持使用云端系统库。内置 1w+ 常用的系统库。
  ![图 73](/storage/images/cn/faq/client/client_20241126_173004.png)

启动界面：
![图 3](/storage/images/cn/faq/client/client_20240621_172123.png)

主界面：
![图 2](/storage/images/cn/faq/client/client_20240621_172124.png)

关于菜单和顶部栏：
![图 4](/storage/images/cn/faq/client/client_20240621_172125.png)
:::

## 安装客户端须知

::: details

- 1、之前未安装过测试版的，可直接安装；
- 2、之前安装过测试版的，建议先卸载旧版本再安装，避免缓存影响；
- 3、请确保你的电脑有显卡，独立显卡更好；
- 4、仅支持64位，不支持XP系统。
  :::

## 下载地址

::: details
https://lceda.cn/page/download

「windows版本」因系统兼容性问题，有可能出现安装后启动界面白屏，没有加载到编辑器，或者要等很久才可以加载出来，如果遇到加载界面白屏请关闭防火墙再试，或者联系技术支持查看。或查看下面的常见问题。

「Linux版本」请按照下载后的压缩包提示进行安装。

「Mac版本」请按照下载后的压缩包提示进行安装。
:::

## 加载激活文件 {#加载}

::: details
激活文件免费下载地址：[激活文件下载地址](https://lceda.cn/page/desktop-client-activation)

第一次打开客户端会弹窗提示激活，把下载的激活文件导入或者粘贴内容进去即可。

![图 1](/storage/images/cn/faq/client/client_20240621_172126.png)

激活后，激活文件会存放在数据存储目录：此电脑/Documents/LCEDA-Pro，查看设置的默认工程存放路径可以找到。手动删除即可移除激活状态。

![图 2](/storage/images/cn/faq/client/client_20240621_172127.png)
:::

## 取消激活和重新激活 {#激活}

::: details
视频教程：

<iframe src="//player.bilibili.com/player.html?isOutside=true&aid=260317263&bvid=BV1Pe411u7nP&cid=828062129&p=1&autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" style="width: 100%; margin: auto; display: block; height: 800px"></iframe>
:::

## V2V3版本工程不同步如何处理 {#V2V3}
::: details
-  V2V3版本由于做了数据隔离，如打开V3版本发现工程内容不同步，需要退回V2版本，文件-另存为本地，再导入回V3版本打开即可。
![图 121](/storage/images/cn/faq/client/client_20260116_162755.png)
-  如V3版本打开编辑过的工程想要导入回V2客户端，在文件-另存为本地时选择epro格式，才能导入回V2客户端。
![图 122](/storage/images/cn/faq/client/client_20260116_162855.png)
:::
## 如何强制使用独立显卡加速立创EDA专业版PCB {#jiasu}
::: details

有很多同学的电脑有双显卡，集成显卡和独立显卡。我们立创EDA专业版的PCB是需要显卡支持的，可以开始独立显卡渲染则可以加速PCB的渲染，缩放，平移操作，达到更加流畅的效果。

如果你的系统是win7，有可能客户端打开PCB的时候无法正常打开，需要按照下面的方法设置一下。

浏览器默认使用的是集成显卡的，需要在系统里面设置才可以调用独立显卡。设置前请先去官网下载最新的显卡驱动更新先。

教程如下：如果你的操作系统是Win10

1、在谷歌浏览器里面先把硬件加速开启
![图 93](/storage/images/cn/faq/client/client_20251028_165754.png)
2、前往win10 系统设置 - 系统 - 显示 - 图形设置
![图 94](/storage/images/cn/faq/client/client_20251028_165814.png)
![图 95](/storage/images/cn/faq/client/client_20251028_165825.png)
![图 96](/storage/images/cn/faq/client/client_20251028_165838.png)
![图 97](/storage/images/cn/faq/client/client_20251028_165848.png)
3、开启硬件加速GPU计划和图形性能首选项添加谷歌浏览器和火狐浏览器，或客户端的lcEDA-pro.exe文件
![图 98](/storage/images/cn/faq/client/client_20251028_165924.png)
![图 99](/storage/images/cn/faq/client/client_20251028_165939.png)
4、添加好浏览器的运行文件exe后（如果你需要给客户端设置默认独显，可以选择客户端安装目录的lceda-pro.exe进行添加），点击列表，点击选项，设置图形首选项为高性能，点击保存即可。
![图 100](/storage/images/cn/faq/client/client_20251028_170009.png)
后面打开浏览器画PCB的时候就会使用独立显卡了。速度都会快很多。
如果你的操作系统是Win7

1、先去官网下载最新的显卡驱动，安装更新

2、安装你的独立显卡的图形管理软件，或者打开显卡控制面板。

比如英伟达的显卡

因为没有win7，下图仅演示怎么搜索英伟达的控制面板：在搜索框搜索 nvidia，其他厂商的显卡也一般有控制软件，可以前往官网下载安装。
![图 101](/storage/images/cn/faq/client/client_20251028_170051.png)
打开运行 NVIDIA控制面板程序：
![图 102](/storage/images/cn/faq/client/client_20251028_170112.png)
2、在管理3D设置里面，把浏览器设置首选的图形处理程序为独立显卡，然后应用
![图 103](/storage/images/cn/faq/client/client_20251028_170126.png)
全局设置里面也修改为默认是独立显卡
![图 104](/storage/images/cn/faq/client/client_20251028_170140.png)
设置PhysX配置选择独立显卡
![图 105](/storage/images/cn/faq/client/client_20251028_170156.png)
3、然后就完成了浏览器优先使用独立显卡的设置。如果win7这样设置后，客户端也不能正常打开PCB，就需要升级系统到win10了。

如果是AMD显卡也大同小异按照上面的方式配置，只是他们的控制软件不一样。
:::
## 如何清除缓存indexedDB {#清除l}

::: details
-  网页版清除缓存（注意，这个操作会把缓存恢复的本地备份都清除掉，且不可恢复，通常用于清理磁盘空间，或者本地工程数据损坏后的清理操作）
按F12，进入开发者工具，找‘应用’进入 。英文就是从Application-storage-clear site data
![图 3](/storage/images/cn/faq/client/client_20240913_172403.png)
-  客户端清除缓存：
打开客户端，右上角设置标识进入设置-其他设置-清除缓存-确认，确认清除完会自动重启
![图 0](/storage/images/cn/faq/client/client_20260206_200829.png)
![图 1](/storage/images/cn/faq/client/client_20260206_200842.png)

-  也可以删除本地缓存文件夹，在系统的文档目录/LCEDA-Pro/Cache.x 文件夹，把cache开头的文件夹都删除即可
![图 2](/storage/images/cn/faq/client/client_20240913_172348.png)
:::

## 设置运行模式 {#模式}

::: details
导入激活文件后即可打开客户端界面，点击右上角的「齿轮」图标或开始页的「设置」图标来设置运行模式。

右上角齿轮设置：
![图 6](/storage/images/cn/faq/client/client_20240621_172128.png)

开始页设置按钮：
![图 7](/storage/images/cn/faq/client/client_20240621_172129.png)

运行模式说明：
全在线模式：
需要联网使用，需要登录，支持团队协作。
数据全部存储在云端服务器。
支持自动备份在线工程在本地，编辑器会根据设置的备份间隔把工程压缩包备份在该文件夹下。
半离线模式/全离线模式：- 半离线模式支持使用在线系统库。- 个人的库和工程都存储在本地。- 支持设置库路径，支持添加多个库路径。- 支持设置新建工程的默认存放路径。支持添加多个工程存放路径。
![图 8](/storage/images/cn/faq/client/client_20240621_172130.png)
:::

## 如何新建和打开eprj离线文件 {#eprj}

::: details
新建的工程文件是独立的 eprj 文件
![图 9](/storage/images/cn/faq/client/client_20240621_172131.png)

打开的时候也可以选择 eprj 文件进行打开，支持直接双击 eprj 文件直接打开工程。
![图 10](/storage/images/cn/faq/client/client_20240621_172132.png)

也可以在左侧工程列表打开工程，打开客户端会自动加载工程路径下的全部工程，也可以右键刷新工程列表
![图 11](/storage/images/cn/faq/client/client_20240621_172133.png)

这个 eprj 文件仅客户端离线模式和半离线模式使用，如果需要把工程导出再导入到在线版，请在文件菜单，另存为本地，再把工程压缩包导入到线上版本。
:::

## 创建元件库 {#元件库}

::: details
在开始页点击「新建元件库」按钮
![图 12](/storage/images/cn/faq/client/client_20240621_172134.png)

或者「打开文档后」在顶部菜单点击【文件】＞【新建 】＞【元件库】
![图 13](/storage/images/cn/faq/client/client_20240621_172135.png)

新建后在底部左侧元件库列表可以找到
![图 14](/storage/images/en/faq/client/client_20240621_172135.png)

新建器件，符号，封装等，可以选择保存在个人的库即可。
![图 15](/storage/images/cn/faq/client/client_20240621_172136.png)
:::

## 库如何进行库搜索放置 {#搜索}

::: details
当你打开原理图后，你可以按 SHIFT+F 打开器件放置弹窗（PCB没有）
![](/storage/images/cn/faq/client/how-to-search-components/how-to-search-components_20240626_213408.png)

也可以打开底部面板，切换到器件库进行搜索放置器件。
![](/storage/images/cn/faq/client/how-to-search-components/how-to-search-components_20240626_213437.png)

请注意，在客户端的半离线和全离线模式下，本地库仅支持模糊搜索而不支持多条件搜索。因此，有时可能会返回多个不太理想的结果。为了提高搜索精度，请确保输入至少三个字符以上的准确关键词进行搜索。这样可以更好地匹配您的需求并减少无关结果的数量。
:::

## 离线模式下怎么去修改工程名称/borad名/原理图名/PCB名？{#离修}

::: details
![图 170](/storage/images/cn/faq/pcb/pcb_20240911_174916.png)
![图 171](/storage/images/cn/faq/pcb/pcb_20240911_174929.png)
![图 172](/storage/images/cn/faq/pcb/pcb_20240911_174953.png)
其他文件都可以直接鼠标右键重命名
![图 173](/storage/images/cn/faq/pcb/pcb_20240911_175010.png)
:::

## 在线模式如何修改工程名/borad名/原理图名/PCB名教程 {#线修}

::: details
左侧属性面板文件鼠标右键-重命名
![图 325](/storage/images/cn/faq/pcb/pcb_20241125_160850.png)
![图 324](/storage/images/cn/faq/pcb/pcb_20241125_160838.png)
:::

## 库搜索支持哪些属性

::: details
客户端半离线或全离线的本地元件库文件的搜索支持字段有：标题Title、部分属性（封装Footprint、制造商编码Manufacturer Part、供应商封装Supplier Footprint、值Value、供应商编号Supplier Part、料号Part Number、元件编码Part Code）、描述Description。当你建立的器件库有自己公司的料号或元件编码时，可以通过料号或元件编码进行搜索。
:::

## 数据目录说明 {#目录}

::: details
嘉立创EDA专业版客户端安装后会默认创建数据文件夹在 Documents\LCEDA-Pro，请不要删除或修改该目录下的文件，避免产生错误。
![图 67](/storage/images/en/faq/client/client_20240621_172138.png)

| 文件夹名                 | 类型                           | 备注/说明                                                                                                                                                                                                                                   |
| :----------------------- | :----------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| cache                    | 数据缓存目录                   |
| cache.model              | 数据缓存目录                   |
| database                 | 数据库目录                     |
| example-projects         | 示例工程目录                   |
| libraries                | 默认的库文件目录               | 个人创建的库文件存放目录。注：v1.9开始，系统库文件 lceda-std.elib 不再放在该目录。                                                                                                                                                          |
| logs                     | 运行日志目录                   | 存放客户端的运行日志。注：从v1.9客户端开始，该配置不再使用，已改为直接在 log 文件夹下创建 trace 或 error 或 debug 文件夹的方式，当客户端检测到有 trace 等文件夹会自动生成对应的日志文件。使用完毕需要将文件夹删除，避免客户端运行性能降低。 |
| online-projects-backup   | 在线工程备份目录               | 默认的全在线模式时，在线工程自动备份工程 zip 文件存放目录。                                                                                                                                                                                 |
| projects                 | 默认的工程文件存放目录         | 对应菜单：文件 - 版本切换(备份恢复)。目录内有“工程名\_backup”文件夹，是该工程的备份 zip 文件存放目录。                                                                                                                                      |
| projects-recovery        | 工程缓存数据存放目录           | 对应菜单：文件 - 缓存恢复，是工程的缓存 zip 压缩包。                                                                                                                                                                                        |
| updater                  | 客户端自动下载的安装包存放目录 |
| config.json              | 客户端的配置文件               |
| editorConfig.json        | 客户端的配置文件               |
| lceda-pro-activation.txt | 客户端的激活文件               | 可以手动删除后，客户端变为未激活状态                                                                                                                                                                                                        |

:::

## 右键菜单

::: details
你可以在开始页操作右键菜单
![图 17](/storage/images/cn/faq/client/client_20240621_172137.png)

或者在「打开文档」后，在顶部菜单文字处打开右键菜单。
![图 18](/storage/images/cn/faq/client/client_20240621_172138.png)

- 前进/后退：当在客户端打开了其他网页，可以使用这个前进后退进行返回上一页或者下一页
- 重新加载：重新加载当前编辑器或者页面
- 放大/缩小/重置/全屏：缩放客户端界面大小。
- 新开编辑器窗口：和点击编辑器左上角的logo行为一致，可以打开多个编辑器，打开多个编辑器时你可以分别打开不同的工程，进行文档和元件的相互复制粘贴；同样分别打开工程的原理图和PCB，可以进行相互定位和PCB导入更新。
- 客户端设置：打开客户端的设置对话框。
- 开发者工具：打开后可以查看控制台console是否有报错，如果编辑器运行出错可以把console的报错信息(红色内容)截图发给技术支持，再次按 F12 关闭开发者工具。

:::

## 版本管理如何使用 {#版管}

::: details

左侧栏工程文件夹鼠标右键-创建版本
![图 4](/storage/images/cn/faq/pcb/pcb_20240826_164428.png)
![图 5](/storage/images/cn/faq/pcb/pcb_20240826_164434.png)
![图 6](/storage/images/cn/faq/pcb/pcb_20240826_164448.png)
![图 7](/storage/images/cn/faq/pcb/pcb_20240826_164456.png)
:::

## 原理图/PCB主题怎么设置 {#主题}

::: details
![图 104](/storage/images/cn/faq/pcb/pcb_20240809_145651.png)

![图 105](/storage/images/cn/faq/pcb/pcb_20240809_145655.png)
:::

## 已知问题

::: details
1、目前发现部分 Win7 系统无法正常运行客户端，无法正常打开界面，原因未知，属于系统兼容性问题。有时候需要比较长的时候才可以加载显示页面。

如果win7打开PCB黑屏，需要升级显卡驱动，如果升级驱动后仍然无法打开PCB，建议升级到win10，或使用谷歌浏览器访问。

升级驱动后可以参考这个教程试试：【教程】嘉立创EDA专业版开启GPU加速 https://www.bilibili.com/read/cv12369610

2、如果windows系统打开白屏，可以尝试：

1）、先关闭防火墙，再启动客户端。如果关闭后正常运行，则需要把客户端添加进入防火墙白名单。
如何关闭防火墙：https://jingyan.baidu.com/article/cd4c2979d55c41756e6e60a1.html

2）、如果关闭防火墙仍然白屏无法加载，请尝试。

- 1、先关闭客户端，用**管理员权限**打开系统的 cmd 命令窗口
   WIN + R 键，然后输入 cmd，回车
  ![picture 288](/storage/images/cn/faq/client/client_20240621_172139.png)
- 2、在打开的 cmd 窗口输入：`netsh winsock reset`
  ![picture 289](/storage/images/cn/faq/client/client_20240621_172140.png)
- 3、回车
- 4、再打开客户端

如果你在使用途中发现了客户端的BUG， 请及时反馈给我们修复，非常感谢你对嘉立创EDA一如既往的支持！
:::

## win11单独给EDA设置显卡加速 {#速}

::: details
1：打开电脑的系统设置（也可在桌面右键--显示设置中进入）后进入游戏分类--游戏模式中
![图 84](/storage/images/cn/faq/client/client_20250314_142503.png)
2：开启游戏模式之后，在进入显示卡设置中
![图 85](/storage/images/cn/faq/client/client_20250314_142521.png)
3：设置好加速的开关后，再添加嘉立创EDA
![图 86](/storage/images/cn/faq/client/client_20250314_142539.png)
4：添加本地EDA软件进入
![图 87](/storage/images/cn/faq/client/client_20250314_142557.png)
5：切换GPU首选项，让windows决定更改为高性能
![图 88](/storage/images/cn/faq/client/client_20250314_142613.png)
:::

## 如何删除示例工程

::: details
客户端的实例工程可以删除，但是网页版的示例工程是不能删除的。

客户端在半离线或离线模式时，可以在“设置 - 客户端 - 工程路径”，把示例工程路径移除即可。
:::

## 客户端清除缓存   {#h}
::: details

打开客户端，右上角设置标识进入设置-其他设置-清除缓存-确认，确认清除完会自动重启
![图 109](/storage/images/cn/faq/client/client_20260109_170127.png)

![图 108](/storage/images/cn/faq/client/client_20260104_164302.png)

:::

## 如何将在线文件epro变为eprj离线文件？ {#工程}

::: details
如果你想把线上云端的工程导入到客户端的离线模式等，你可以：

- 1、在浏览器打开工程，在：文件 - 另存为本地，得到工程erpo文件
  ![图 78](/storage/images/cn/faq/client/client_20241217_181515.png)
- 2、在客户端的离线模式，开始页：导入专业版。进行导入
  不支持批量下载专业版工程，也不支持批量导入。

因为eprj是离线模式的工程路径文件，所以不支持直接从编辑器导出，我们需要将它进行转换。
第一步：先将epro的文件导入离线模式的编辑器。
![图 75](/storage/images/cn/faq/client/client_20241217_181309.png)
第二步：将文件保存在离线模式之后，找到离线模式的工程路径，复制该路径在我的电脑中打开。
![图 76](/storage/images/cn/faq/client/client_20241217_181330.png)
![图 77](/storage/images/cn/faq/client/client_20241217_181410.png)

<iframe src="//player.bilibili.com/player.html?isOutside=true&aid=560058884&bvid=BV1Ae4y1Y7FA&cid=818191143&p=1&autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" style="width: 100%; margin: auto; display: block; height: 800px"></iframe>
:::

## 专业版和标准版的区别 {#区别}

::: details
文档教程：[专业版和标准版的区别](https://prodocs.lceda.cn/cn/faq/editor/#%E5%98%89%E7%AB%8B%E5%88%9Beda%E4%B8%93%E4%B8%9A%E7%89%88%E4%B8%8E%E6%A0%87%E5%87%86%E7%89%88%E7%9A%84%E5%8C%BA%E5%88%AB)
:::

## 底部面板库库如何运用 {#底部面板}

::: details

<iframe src="//player.bilibili.com/player.html?isOutside=true&aid=302615878&bvid=BV1sP411V7HX&cid=818164914&p=1&autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" style="width: 100%; margin: auto; display: block; height: 800px"></iframe>
:::

## 如何新增工程路径和库路径 {#新增}

::: details
![图 7](/storage/images/cn/faq/client/client_20240913_173658.png)
:::

## 离线客户端如何创建元件库 {#库组}

::: details
![图 8](/storage/images/cn/faq/client/client_20240913_173730.png)
![图 9](/storage/images/cn/faq/client/client_20240913_173742.png)
:::

## 离线模式下的底部面板的左侧元件库组如何删除 {#del库组}

::: details
打开底部面板左侧右键打开元件目录，在本地把elib库文件删除，再重新加载客户端即可。
![图 25](/storage/images/cn/faq/library/library_20240815_171816.png)
![图 26](/storage/images/cn/faq/library/library_20240815_171823.png)
:::

## 离线工程如何导入到在线客户端 {#离导在线}

::: details
![图 10](/storage/images/cn/faq/client/client_20240913_173804.png)
![图 11](/storage/images/cn/faq/client/client_20240913_173813.png)
![图 12](/storage/images/cn/faq/client/client_20240913_173822.png)
视频教程：

<iframe src="//player.bilibili.com/player.html?isOutside=true&aid=302624167&bvid=BV14P411V7mY&cid=818191225&p=1&autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" style="width: 100%; margin: auto; display: block; height: 800px"></iframe>
:::

## 在线库迁移到离线库 {#千}

::: details
![图 41](/storage/images/cn/faq/library/library_20240815_180025.png)
![图 42](/storage/images/cn/faq/library/library_20240815_180037.png)
![图 43](/storage/images/cn/faq/library/library_20240815_180051.png)
![图 44](/storage/images/cn/faq/library/library_20240815_180059.png)
![图 45](/storage/images/cn/faq/library/library_20240815_180106.png)
![图 46](/storage/images/cn/faq/library/library_20240815_180221.png)
![图 47](/storage/images/cn/faq/library/library_20240815_180229.png)
![图 48](/storage/images/cn/faq/library/library_20240815_180239.png)
:::

## 专业版推荐使用的电脑配置

::: details
系统最低要求配置推荐电脑配置：2017 年后的电脑和显卡，CPU i5，内存 8GB，1080P 的显示屏
专业版需要的电脑配置：最低配置，8G内存，i5处理器或者同等能力的其它CPU，集成显卡或者独立显卡带有GPU加速功能，1080 x 1920的显示器。
:::

## 专业版安装权限，为个人和为全部人安装的区别 {#安装}

::: details
个人安装：当前电脑一个用户账户可用
为全部人安装：当前电脑所有账户可用
:::

## 底部面板库搜索出来哪个表头标题权重高？

::: details
优先搜索商品编号， 其次制造商编号，最后是器件名称
![图 14](/storage/images/cn/faq/client/client_20240913_180147.png)
:::

## 底部面板搜索不到系统库 {#搜库}

::: details
有2个原因：

- 1.在线模式和半离线模式才可以使用系统库，全离线只有1W+
- 2.在立创商城点数据手册可以查看是否绘制，没有绘制的可以申请绘制。

![图 13](/storage/images/cn/faq/client/client_20240913_174522.png)
:::

## 导入/导出DXF文件图形丢失如何处理 {#DXF}

::: details
因为2007CAD的版本太低了，目前正在想办法兼容，建议先使用2011及以上的CAD版本
:::

## 在线模式如何删除工程 {#DEL}

::: details
![图 69](/storage/images/cn/faq/client/client_20241126_172421.png)
![图 70](/storage/images/cn/faq/client/client_20241126_172429.png)
![图 71](/storage/images/cn/faq/client/client_20241126_172436.png)

:::

## 离线模式如何删除工程 {#删工程}

::: details
![图 15](/storage/images/cn/faq/client/client_20240914_101522.png)
![图 16](/storage/images/cn/faq/client/client_20240914_101531.png)
![图 17](/storage/images/cn/faq/client/client_20240914_101540.png)
![图 18](/storage/images/cn/faq/client/client_20240914_101550.png)
:::

## 客户端界面字体发虚/模糊的解决方法 {#模糊}

::: details
文档教程：[客户端界面字体发虚/模糊解决方法](https://blog.csdn.net/qq_46435629/article/details/124908258)

![图 19](/storage/images/cn/faq/client/client_20240914_101622.png)
:::

## 如何设置电脑的缩放布局与分辨率 {#置}

::: details
![图 20](/storage/images/cn/faq/client/client_20240914_101710.png)
![图 21](/storage/images/cn/faq/client/client_20240914_101720.png)
:::

## 获取客户端启动没有界面显示的错误日志 {#日志}

::: details
方法一：
如果是专业版，可以在资源管理器 - 左侧文档目录 - LCEDA-PRO，在logs文件夹里面 创建trace文件夹，打开客户端会输出日志文件在trace文件夹里面
![图 24](/storage/images/cn/faq/client/client_20240914_102123.png)
方法二：1.打开客户端安装目录，找lceda.exe 或lceda-pro.exe
![图 25](/storage/images/cn/faq/client/client_20240914_102139.png) 2.在顶部资源管理器地址栏，输入 cmd，回车
![图 26](/storage/images/cn/faq/client/client_20240914_102206.png) 3.会自动打开命令行窗口，拖动exe到窗口，回车 !
[图 27](/storage/images/cn/faq/client/client_20240914_102221.png) 4.此时命令行窗口会开始运行客户端，会输出日志 !
[图 28](/storage/images/cn/faq/client/client_20240914_102235.png) 5.把报错的日志截图或者复制下来，发给技术支持排查
:::

## 离线客户端左侧面板如何添加示例工程 {#示}

::: details
![图 29](/storage/images/cn/faq/client/client_20240914_102302.png)
![图 30](/storage/images/cn/faq/client/client_20240914_102311.png)
:::

## 工程无法保存如何处理 {#保存}

::: details

-   1. 换个保存路径，可能是原路径不能写入内容
-   2. 报错如图 本地磁盘 右键属性 安全 看看有没有读写权限 ，有的话那就需要用管理员模式打开软件，右键属性 兼容性里面可以设置默认管理员启动
-   3. 如是离线模式，查看本地离线文件是否只读![图 31](/storage/images/cn/faq/client/client_20240914_102339.png)

:::

## 安装在D盘上EDA软件无法启动如何处理{#D盘}

::: details
在C盘找到lceda-pro文件，图示
![图 365](/storage/images/cn/faq/pcb/pcb_20250313_173331.png)
![图 366](/storage/images/cn/faq/pcb/pcb_20250313_173338.png)
如果没有上面的账户，请尝试安装在C盘，我们发现某些win11系统必须安装在C盘才可以正常启动
:::

## 另存为提示错误Failed to get 'downloads' path如何处理 {#另存为}

::: details
文档-lceda-rpo-config.json-记事本里面添加一行 "exportFilePath": "C:\\Users\\win10\\Downloads",重启即可
![图 32](/storage/images/cn/faq/client/client_20240914_102408.png)
:::

## 开源平台的工程如何下单？{#开源}

::: details
因为标准版与专业版的软件界面不同，做分别下单演示（工程区别可以看工程名称位置标识）
![图 33](/storage/images/cn/faq/client/client_20240914_102500.png)
![图 34](/storage/images/cn/faq/client/client_20240914_102508.png)
标准版开源工程下单以此官方工程链接为例：https://oshwhub.com/course-examples/ua741-she-ji

1.打开链接后，往下滑动到最低端，可以看到有pcb的示例图，然后点击一下在编辑器打开 !
[图 35](/storage/images/cn/faq/client/client_20240914_102530.png) 2.打开后会跳转到pcb的页面，在顶部栏--制造--选择“一键PCB/SMT下单”，会直接跳转到下单选择工艺的页面，从而下单，如果需要把器件焊接到板子上，需要在工艺界面选择smt贴片选项 !
[图 36](/storage/images/cn/faq/client/client_20240914_102600.png) !
[图 37](/storage/images/cn/faq/client/client_20240914_102609.png)

专业版开源工程下单以此官方工程链接为例：https://oshwhub.com/course-examples/le-xin-yu-yin-teng-qiu-deng-xiang-mu

1.同标准版工程一样，打开链接后，往下滑动到最低端，可以看到有pcb的示例图，然后点击一下在编辑器打开 ![图 38](/storage/images/cn/faq/client/client_20240914_102625.png) 2.打开后会跳转到pcb的页面，在顶部栏选择下单选项，然后再点击“PCB下单”，会直接跳转到下单选择工艺的页面，如果需要把器件焊接到板子上，需要在工艺界面选择smt贴片选项
![图 39](/storage/images/cn/faq/client/client_20240914_102644.png)![图 40](/storage/images/cn/faq/client/client_20240914_102652.png)
:::

## 如何把首页的最近打开工程清空？ {#清空}

::: details

1.打开此电脑-左侧文档-LCEDA-pro文件夹，找到datebase文件夹 ![图 41](/storage/images/cn/faq/client/client_20240914_102728.png) 2.把里面的web.db文件删除，然后再回到首页看，能看到打开记录已经没有了
![图 42](/storage/images/cn/faq/client/client_20240914_102741.png)
:::

## 双击客户端无反应 {#客端启}

::: details
当下载安装完客户端之后，双击打开没有反应，可以尝试以下几种解决方法：

- 1.软件需要安装到C盘，并且关闭及所有防火墙和杀毒软件。
  ![图 43](/storage/images/cn/faq/client/client_20240914_102811.png)
  ![图 44](/storage/images/cn/faq/client/client_20240914_102820.png)

- 2.尝试以管理员的方式运行。
  ![图 80](/storage/images/cn/faq/client/client_20241220_164236.png)

- 3.把电脑的保护机制关掉。
  ![图 47](/storage/images/cn/faq/client/client_20240914_103207.png)

![图 48](/storage/images/cn/faq/client/client_20240914_103223.png)

- 4.在此电脑中找到——文档-LCEDA-pro文件夹后缀，将文件名改为LCEDA-pro1，然后再双击打开客户端就可以了，再把LCEDA-pro文件夹的库和工程迁移过去，再把LCEDA-pro1删除。这是文件夹的权限读取问题。
  ![图 49](/storage/images/cn/faq/client/client_20240914_103248.png)
- 5.在安装路径里面找到一下路径，把路径中的config.json文件删除，然后再次启动即可
  （也可以将文档/LCEDA-Pro/config.json，重命名成别的，比如 config1.json，然后再启动客户端。这是配置文件被写坏的症状，但是 2.1 好像已经修复了，又或者本地有什么加密程序。）
  ![图 50](/storage/images/cn/faq/client/client_20240914_103314.png)

- 6.当打开客户端提示没有显卡或显卡过低的时候，可以这么做：

删除EDA，删除C盘的本地文档文件，重新下载一遍，设置好加速后再打开EDA即可

- 7.当win10安装软件时显示：“现在更新设备， 若要继续接收应用建议,请立即更新”，可以按照以下教程这么做：
  文档教程：[win10安装软件提示解决](https://blog.csdn.net/Strive_For_Future/article/details/108822134)

- 8.先在电脑搜索界面输入“cmd”，右键以管理员方式运行，最后输入需要运行的安装文件所在位置的目录自行安装就可以了

![图 81](/storage/images/cn/faq/client/client_20241220_164623.png)
![图 82](/storage/images/cn/faq/client/client_20241220_164633.png)

- 9.点击立创EDA安装包没有反应，提示get apps from store 右键安装包--属性--解除锁定
  ![图 83](/storage/images/cn/faq/client/client_20241220_164653.png)

- 10 如果没有上面的账户，请尝试安装在C盘，我们发现某些win11系统必须安装在C盘才可以正常启动
  ![图 22](/storage/images/cn/faq/client/client_20240914_102035.png)
  ![图 23](/storage/images/cn/faq/client/client_20240914_102044.png)

:::

## 点击登录提示报错：Error: unable to verify the first certificate 怎么解决？{#登录}

::: details

1.打开windows设置主页，输入【环境变量】查找
![图 51](/storage/images/cn/faq/client/client_20240914_103409.png)
![图 52](/storage/images/cn/faq/client/client_20240914_103437.png) 2.在环境系统变量，新建NODE_TLS_REJECT_UNAUTHORIZED=0，然后重启电脑
![图 53](/storage/images/cn/faq/client/client_20240914_103452.png)
![图 54](/storage/images/cn/faq/client/client_20240914_103502.png) :::
:::

## 如何把工程分享到开源平台 {#工分}

::: details
![图 67](/storage/images/cn/faq/client/client_20241125_161353.png)
![图 68](/storage/images/cn/faq/client/client_20241125_161416.png)

视频教程：

<iframe src="//player.bilibili.com/player.html?isOutside=true&aid=260108103&bvid=BV1be411g74r&cid=818191115&p=1&autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" style="width: 100%; margin: auto; display: block; height: 800px"></iframe>
:::

## 嘉立创EDA专业版网页版如何进入

::: details
文档教程：[专业版网址，使用谷歌或是火狐浏览器登录](https://pro.lceda.cn/)
:::

## 专业版开源广场网站

::: details
[开源广场网站](https://oshwhub.com/explore)
:::

## 如何强制使用独立显卡加速嘉立创EDA专业版 {#独显加速}

::: details
文档教程：[强制使用独立显卡加速](https://www.bilibili.com/read/cv12369610)
:::

## 忘记保存如何找回文件 {#找备份}

::: details
- 1.工程备份-备份管理
![图 119](/storage/images/cn/faq/client/client_20260116_160724.png)
![图 120](/storage/images/cn/faq/client/client_20260116_160843.png)

- 2.工程历史
- 点击 工程历史 选项后，右侧将显示工程历史列表，用户可以在该列表中查看当前文档和工程的历史记录。工程历史列表支持展开和收起。在查看工程历史期间，不允许对工程进行修改。
- 历史记录按时间段分割，列表中展示了记录的时间和最近编辑者。选中一条记录后，用户可以点击 还原 按钮进行记录还原。
- ![图 110](/storage/images/cn/faq/client/client_20260116_153923.png)
- 当打开的文档为 PCB 时，支持选中两条记录进行 PCB 对比。
- ![图 111](/storage/images/cn/faq/client/client_20260116_154112.png)
- 3.回收站，如果是误删除，可以在回收站找回，画布右上角-进入个人工作区
![图 112](/storage/images/cn/faq/client/client_20260116_154316.png)
![图 115](/storage/images/cn/faq/client/client_20260116_154531.png)

:::

## 如何快捷键打开属性面板 {#属性面板}

::: details
![图 59](/storage/images/cn/faq/client/client_20240914_150742.png)
![图 60](/storage/images/cn/faq/client/client_20240914_150752.png)
:::

## 如何导出专业版工程文件？{#导出专}

::: details
![图 61](/storage/images/cn/faq/client/client_20240914_150914.png)
:::
{#区别}

## 如何导入专业版工程文件？{#导入专}

::: details
![图 62](/storage/images/cn/faq/client/client_20240914_151012.png)
:::

## 如何迁移标准版？{#迁移}

::: details
![图 63](/storage/images/cn/faq/client/client_20240914_151909.png)
![图 65](/storage/images/cn/faq/client/client_20240914_151934.png)
:::

## 文件变为只读了如何处理 {#只读}

::: details
![图 66](/storage/images/cn/faq/client/client_20240914_152022.png)
:::

## 提示PCB下单失败，请联系技术支持企业微信寻求帮助处理方法 {#下单失败}

::: details
1：登录状态失效了，需要重新登录一下账号
2：文件没有保存在工程目录下，需要另存为本地工程
3：客户端模式是离线模式的，不支持在线下单
:::

## MAC版本的触摸板手势左右正常，上下变成放大缩小了如何解决？{#mac}

::: details
滚轮的功能就相当于在触摸屏上双指上下拖动，改为 CTRL +滚轮 按住ctrl再上下拖动，就是想要的拖动板子效果
:::

## 嘉立创EDA导出到AD后没有挖槽的问题 {#导AD槽}

::: details
建议导出Gerber再下单，导出AD不能保证百分百一致，导出前注意查看导出注意事项，其中一项：PCB的一些图层无法准确找到 Altium 对应的图层，会导出在更多机械层中。
根据嘉立创的工艺要求外形层也需要在机械层 才能算挖槽。
:::

## 相同型号的封装，为什么电容和电阻大小不一样 {#同型}

::: details
电容的0805封装普遍会比电阻高，为了保证焊接质量，为了更好的焊接质量焊盘长一点是正常的，我们C0805都会比R0805长一些，这个封装是我们长期验证过的不会有问题。
:::

## 如何注销EDA账号 {#注销账号}

::: details
先在EDA中打开头像处的个人中心
找到账户--高级设置
![图 268](/storage/images/cn/faq/pcb/pcb_20240913_103324.png)
:::

## 关注‘嘉立创EDA公众号’-硬件电子助手 {#硬件电子}

::: details
![图 277](/storage/images/cn/faq/pcb/pcb_20240913_104408.png)
:::

## 登录时二维码加载不出来如何处理{#二维码}

::: details
以下几种方法试试：

- 第一种：需要在二维码打不开的这个页面按三次f12如图勾选禁用缓存
- ![图 91](/storage/images/cn/faq/client/client_20250930_115552.png)
- 第二种.：可能是电脑时间与北京时间对不上，设置同步下时间即可
- 第三种：需要把插件关了，即使是使用的是客户端
- 第四种：重启下电脑
- 第五种：修改DNS,在控制面板-网络链接属性——Internet协议版本4(TCP/IPv4）-首选DNS服务器输入114 114 114 114
  文档教程：[设置电脑的DNS服务器以及常用的DNS服务器](https://zhuanlan.zhihu.com/p/305914414)

:::
