# 私有化安装指南（Windows服务器端）

::: tip 提示：嘉立创 EDA 和传统 EDA 工具文件储存逻辑不一样！

1. 嘉立创 EDA 私有部署的 工程文件 和 库文件 都存在数据库里，数据库在服务器上

2. 工程师通过浏览器访问服务器打开编辑器或工作区访问文件

3. 在用户机及服务器不会存储独立的设计文件实体

:::

## 一、配置及环境检查

检查服务器硬件配置、操作系统是否符合使用要求。

<!-- 引用 @/cn/private/system-config.md 文件 -->
<!--@include: @/cn/private/system-config.md{7,17}-->

::: warning ⚠ 注意

1. 服务器 IP 地址需固定，不能使用自动分配策略，用户机需要与服务器在同一局域网。

2. 服务器需要关闭电源自动休眠，建议把网卡的自动休眠选项也关闭

:::

## 二、安装必备文件检查

检查是否包含安装所必须的文件（图示文件名仅为示例，实际文件名会存在部分差异，以实际文件为准）：

![](/storage/images/cn/private/installers/install-windows/install_20240626_171201.png)

### 1. 安装包

是一个 exe 文件，命名如 lceda-pro-private-windows-x64-1.0.0.exe，其中的 windows、x64、1.0.0 会随着安装包版本不同而略有区别。

### 2. 服务器域名证书

是一个 ecrt 格式文件，命名如 eda.lceda.cn.ecrt，服务器使用的证书，在服务器安装过程中加载

### 3. 用户机域名证书

是一个 crt 格式的文件，命名如 eda.lceda.cn.crt，用户机使用的证书，在用户机双击安装

::: warning ⚠ 注意

1. 域名证书共两个文件，ecrt 和 crt，注意区分

2. 一般情况下，证书的文件名就是私有化访问域名,如证书文件名为 eda.lceda.cn.ecrt，访问的域名就是：https://eda.lceda.cn

3. 该域名可以联系嘉立创 EDA 实施人员进行修改，重新生成新的证书和新的域名。

:::

## 三、开始安装

### （一）开始安装

在 windows 系统中，右击安装包文件，以管理员身份运行，打开安装程序

1. 选择安装期间要使用的语言，点击【确定】按钮，启动安装程序

![](/storage/images/cn/private/installers/install-windows/install_20240626_171600.png)

1. 检查版本号是否和安装包文件名一致，点击【下一步】

![](/storage/images/cn/private/installers/install-windows/install_20240626_171622.png)

1. 选择要安装的组件，新装时全部勾选（完整安装），点击【下一步】

    服务组件：嘉立创 EDA 私有部署的服务代码<br>
    Node 组件：用作服务代码和数据库之间的连接<br>
    MySQL 组件：用作数据库生成和管理

![](/storage/images/cn/private/installers/install-windows/install_20240626_171636.png)

1.  选择安装目录、工作区目录，点击【下一步】

    安装目录建议默认，或者选择速度较快的磁盘<br>
    工作区目录建议默认，或者选择空间较大的磁盘

![](/storage/images/cn/private/installers/install-windows/install_20240626_171652.png)

1.  选择域名证书文件，点击【下一步】
    此处选择 .ecrt 的服务器域名证书文件

![](/storage/images/cn/private/installers/install-windows/install_20240626_171709.png)

1.  确认访问域名是否正确，点击【下一步】
    此处显示的域名一般和服务器域名证书的文件名一致

![](/storage/images/cn/private/installers/install-windows/install_20240626_171729.png)

1.  选择是否 创建桌面图标 和 开机时启动服务，点击【下一步】
    开机时启动服务建议勾选

![](/storage/images/cn/private/installers/install-windows/install_20240626_171741.png)

1.  点击【安装】按钮，开始安装

![](/storage/images/cn/private/installers/install-windows/install_20240626_171758.png)

### （二）安装过程

![](/storage/images/cn/private/installers/install-windows/install_20240626_171811.png)

1. 安装过程中会多次弹出控制台黑窗口，属正常现象，无需进行操作，耐心等待即可
2. 整个安装时长根据服务器性能不同有所差异。一般不超过 10 分钟

![](/storage/images/cn/private/installers/install-windows/install_20240626_171836.png)

### （三）安装完成

安装完成，点击【完成】按钮

![](/storage/images/cn/private/installers/install-windows/install_20240626_171846.png)

::: warning ⚠ 注意

1. 若勾选了 立即启动嘉立创EDA私有化服务，会在服务器的浏览器打开登录页面。

2. 若在服务器的浏览器无法正常加载登录页面（网址正常但页面空白）一般是浏览器不支持，建议使用最新版谷歌浏览器（Google Chrome）访问。

:::

## 四、访问配置

需要设置好访问配置才能正常使用私有部署系统，否则用户机访问服务网址的时候会提示网址不存在。

### （一）配置 hosts / 配置 DNS

::: warning ⚠ 注意：配置 hosts 和配置 DNS 二选一即可

1. 选择配置 hosts ，需要在每台用户机上均修改

2. 选择配置 DNS 需由 IT 人员统一设置在 DNS 服务器（或路由器）上

:::

#### 方式一：配置 DNS

由 IT 人员统一设置在 DNS 服务器（或路由器）上，不同的 DNS 服务器操作方法不一致，此处省略。

#### 方式二：配置 hosts

1. 在用户机打开资源管理器，访问 C:\Windows\System32\drivers\etc ，内有一个 hosts 文件

2. 使用管理员身份，使用记事本打开，在文件最后新加一行，输入服务器的 IP 地址和访问网址<br>
   （图示IP及域名仅为示例，实际为 服务器IP 和 域名证书的域名）

![](/storage/images/cn/private/installers/install-windows/install_20240626_172016.png)

### （二）用户机安装域名证书

1. 安装服务端程序时，使用的服务器域名证书是受信任的证书，则无需进行以下安装域名证书的操作。

2. 若安装服务端程序时，选用的是随安装包附带的服务器域名证书，一般需要执行以下安装操作。

::: warning ⚠ 注意

以下安装的证书为用户机证书（crt 文件），需要在用户机上操作。

用户机证书要分发安装在每个用户的电脑上，否则访问服务网址时会提示不安全地址。

:::

1. 双击 crt 证书文件（命名如 private.lceda.cn.crt）， 点击【安装证书】按钮

![](/storage/images/cn/private/installers/install-windows/install_20240626_172407.png)

1. 选择存储位置为 本地计算机，点击【下一步】按钮（需要管理员权限）

![](/storage/images/cn/private/installers/install-windows/install_20240626_172419.png)

1. 选择 将所有的证书都放入下列存储，点击【浏览】按钮

![](/storage/images/cn/private/installers/install-windows/install_20240626_172430.png)

1. 选择 受信任的根证书颁发机构 并点击【确定】按钮， 然后点击【下一步】

![](/storage/images/cn/private/installers/install-windows/install_20240626_172449.png)

1. 点击完成按钮开始安装证书

![](/storage/images/cn/private/installers/install-windows/install_20240626_172516.png)

1. 安装过程中可能会弹出警告窗口，点击是

![](/storage/images/cn/private/installers/install-windows/install_20240626_172528.png)

1. 域名证书安装完成

![](/storage/images/cn/private/installers/install-windows/install_20240626_172540.png)

## 五、激活系统

### （一）获得企业唯一标识码

配置完成后，双击桌面私有部署应用图标，会打开私有部署版的服务，并自动打开访问网址（在嘉立创EDA生成证书的时候指定，如 https://private.lceda.cn）进入激活页面

::: warning ⚠ 注意：请使用最新版谷歌浏览器访问，否则将无法正常访问系统

:::

将激活页面显示的 企业唯一标识 复制发给嘉立创 EDA 实施人员去生成激活文件

![](/storage/images/cn/private/installers/install-windows/install_20240626_172625.png)

::: warning ⚠ 注意：用户端在安装完证书后，在浏览器输入对应的网址即可访问，需要输入https 前缀，如https://private.lceda.cn

:::

### （二）激活系统

激活文件由 嘉立创 EDA 生成，通常为一个 .license 格式文件（图示文件名仅为示例，以实际文件为准）

![](/storage/images/cn/private/installers/install-windows/install_20240626_172653.png)

点击【导入授权文件】按钮，选择 license 文件，再点击【激活】按钮即可激活系统

![](/storage/images/cn/private/installers/install-windows/install_20240626_172707.png)

## 六、私有化设置、重启与退出

服务器桌面右下角，任务栏中，有私有部署的服务状态图标，鼠标右击图标可唤出菜单

![](/storage/images/cn/private/installers/install-windows/install_20240626_172718.png)

### （一）基本设置

基本设置可设置常用参数，如服务域名、服务端口、TLS设置，数据目录，更新库，开机自启，语言设置等

1. 服务域名：用户机通过此域名访问私有部署系统，不建议修改
2. 服务端口：默认 443 端口，若端口被占用可更换为其他（使用 443 端口，访问时不需在网址后输入端口号）
3. TLS 设置：是否启用 TLS，若不启用，需在外部配置反向代理以允许通过 HTTPS 访问
4.
5. ![](/storage/images/cn/private/installers/install-windows/install_20240626_172731.png)

### （二）备份设置

备份设置可设置备份目录，备份个数，备份频率等。

![](/storage/images/cn/private/installers/install-windows/install_20240626_172754.png)

### （三）接口设置

接口设置可配置外部系统的接口，以实现系统对接功能，详见《私有化系统对接 API 接口文档》

![](/storage/images/cn/private/installers/install-windows/install_20240626_172808.png)

### （四）关于

关于菜单可以查看私有部署版本相关组件版本号

![](/storage/images/cn/private/installers/install-windows/install_20240626_172819.png)

### （五）重启与退出

服务器桌面右下角，鼠标右击任务栏中私有部署的服务状态图标，选择【重启】可重新启动服务，选择【退出】即可停止服务。

![](/storage/images/cn/private/installers/install-windows/install_20240626_172829.png)

::: warning ⚠ 注意：在进行 私有化升级、私有化卸载、关闭服务器等操作前务必先手动退出服务再操作。

:::

## 七、卸载与数据清理

注意：在进行卸载操作前务必先手动退出服务。

### （一）卸载私有化系统

1. 进入 Windows 的 设置 → 应用和功能，找到 嘉立创 EDA 私有部署，点击【卸载】按钮（需要管理员权限）

![](/storage/images/cn/private/installers/install-windows/install_20240626_172903.png)

1. 卸载时可能会弹出控制台黑窗口，属正常现象，无需进行操作

![](/storage/images/cn/private/installers/install-windows/install_20240626_172915.png)

1. 在卸载向导中点击【是】按钮

![](/storage/images/cn/private/installers/install-windows/install_20240626_172926.png)

1. 卸载过程

![](/storage/images/cn/private/installers/install-windows/install_20240626_172936.png)

1. 卸载完成

![](/storage/images/cn/private/installers/install-windows/install_20240626_173112.png)

### （二）清理数据文件

1. 清理安装目录

    安装目录默认为 D:\lceda-pro-private，删除 lceda-pro-private 文件夹即可

2. 清理数据目录/工作区目录（**！高风险操作！**）

    数据目录默认为 D:\Pro-Private-Data，删除 Pro-Private-Data 文件夹即可

    数据目录存储着系统中的 账号、团队、工程、元件库、角色、权限、日志 等数据，清理后无法恢复，请谨慎操作！

3. 清理备份目录（**！高风险操作！**）

4. 备份目录默认为 D:\Pro-Private-Data_backup，删除 Pro-Private-Data_backup 文件夹即可

    备份目录存储着系统中的 账号、团队、工程、元件库、角色、权限、日志等备份信息，清理后无法恢复，请谨慎操作！
