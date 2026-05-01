# 替换证书教程（Windows）

私有化安装资料包内附带的证书为 嘉立创EDA 生成的自信任证书，有效期 1000 年，根据以下操作步骤可替换证书

::: warning ⚠ 注意：替换证书前，请先做好文件保存工作，所有用户停止访问服务器

:::

## 一、文件准备

![](/storage/images/cn/private/installers/update-certificate-windows/update-certificate_20240626_175018.png)

1. 新的证书文件，通常为 .crt 文件，本教程以 private.lceda.cn.crt 为例讲解

2. 新的密钥文件，通常为 .key 文件，本教程以 private.lceda.cn.key 为例讲解

## 二、复制证书到配置目录

在服务器上，将证书文件（.crt 文件）和密钥文件（.key 文件）复制到数据目录下的 .pro-private-config 文件夹内

::: warning ⚠ 注意：.pro-private-config 为隐藏文件夹，需先开启显示隐藏文件夹

:::

![](/storage/images/cn/private/installers/update-certificate-windows/update-certificate_20240626_175044.png)

## 三、修改配置文件

1. 鼠标右击 .pro-private-config 文件夹内的 config.js 文件，选【编辑】，用记事本打开文件

2. 修改如图的文件名为 新证书文件的文件名 和 新密钥文件的文件名

3. 修改完成后保存文件并关闭记事本

![](/storage/images/cn/private/installers/update-certificate-windows/update-certificate_20240626_175059.png)

## 四、修改访问域名

1. 服务器桌面右下角，任务栏中，有私有部署的服务状态图标，鼠标右击图标，点击【设置】进入设置菜单

![](/storage/images/cn/private/installers/update-certificate-windows/update-certificate_20240626_175108.png)

1. 将服务域名更改为新的服务域名，点击【确认】按钮保存配置，即完成了证书的替换，会自动以新域名访问私有部署系统

![](/storage/images/cn/private/installers/update-certificate-windows/update-certificate_20240626_175129.png)

## 五、常见问题

### （一）无法访问

![](/storage/images/cn/private/installers/update-certificate-windows/update-certificate_20240626_175139.png)

解决办法：访问域名如有更改，需要去 hosts 文件中配置为新的域名（或重新设置 DNS 服务器）

1. 在用户机打开资源管理器，访问 C:\Windows\System32\drivers\etc ，内有一个 hosts 文件

2. 使用管理员身份，使用记事本打开，在文件最后新加一行，输入服务器的 IP 地址和访问网址<br>（图示IP及域名仅为示例，实际为 服务器IP地址 和 域名证书的域名）

![](/storage/images/cn/private/installers/update-certificate-windows/update-certificate_20240626_175209.png)

### （二）访问提示不安全

![访问提示不安全](/storage/images/cn/private/installers/update-certificate-windows/update-certificate-windows_20240627_181704.png)

解决办法：新的证书文件若为自信任证书，需在用户机上安装，请在用户机上按以下步骤安装

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
