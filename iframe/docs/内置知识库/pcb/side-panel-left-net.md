# 左侧面板-网络

在PCB界面的左侧面板-网络显示的是当前PCB界面的网络，分为网络、网络类、飞线、差分对、等长网络组、焊盘对组

![图 0](/storage/images/cn/pcb/side-panel-left-net/side-panel-left-net_20240621_172124.jpg)

切换上方的标签到元件，将显示当前PCB中焊盘的网络

![图 1](/storage/images/cn/pcb/side-panel-left-net/side-panel-left-net_20240621_172125.jpg)

## 网络

显示当前PCB界面中网络的数量及具体网络，其中空网络也会显示，名称为None

**网络定位**：单击网络，即可在PCB界面高亮出来，并平移画布到中央。

双击网络可在PCB中缩放画布后并且高亮。

**网络颜色**：设置网络颜色：点击网络名前的颜色小方块会打开颜色设置面板，设置自己需要的演示。

![图 33](/storage/images/cn/pcb/side-panel-left-net/side-panel-left-net_20240621_172126.png)

也可以导线右键设置颜色

![图 28](/storage/images/cn/pcb/route-single-routing/route-single-routing_20240621_172136.png)

**网络长度**：网络名后面的括号是当前网络的长度，单位跟随画布单位，注意，这里的网络长度只统计导线的长度，如果使用了线条或者填充区域连接焊盘，网络的长度不会纳入这里。

![图 39](/storage/images/cn/pcb/side-panel-left-net/side-panel-left-net_20240621_172127.png)

## 网络类

网络类一般用在同类型网络需要一起设置设计规则时使用。

在网络分支下鼠标右键 - 新建分类或点击新建小图标

![图 35](/storage/images/cn/pcb/design-net-class-manager/design-net-class-manager_20240621_172125.png)

![图 34](/storage/images/cn/pcb/design-net-class-manager/design-net-class-manager_20240621_172126.png)

或者在上面“网络”列表直接网络名右键创建“网络类”。

![图 37](/storage/images/cn/pcb/design-net-class-manager/design-net-class-manager_20240621_172127.png)

在网络类弹窗设置好名称，和设置对于的网络即可。

![图 37](/storage/images/cn/pcb/design-net-class-manager/design-net-class-manager_20240621_172128.png)

已加入网络类的网络名会在对话框里面显示出来

![图 38](/storage/images/cn/pcb/design-net-class-manager/design-net-class-manager_20240621_172129.png)

创建完毕后，刷新左侧网络类，可以看到新建的网络类。

![图 40](/storage/images/cn/pcb/design-net-class-manager/design-net-class-manager_20240621_172130.png)

点击排序按钮，可以对网络类里面的网络进行排序，方便按网络类查看网络。点击可以根据网络名，网络长度进行排序。

## 飞线

在布线时，先把其他暂时不需要布线的飞线隐藏，有利于减少干扰，专注于当前网络的布线。

可以在左侧网络树隐藏飞线

![图 30](/storage/images/cn/pcb/route-single-routing/route-single-routing_20240621_172137.png)

也可以选中导线后，在顶部视图菜单进行隐藏飞线

![图 31](/storage/images/cn/pcb/route-single-routing/route-single-routing_20240621_172138.png)

## 差分对

当需要差分对布线时，需要先创建差分对，并设置规则。

点击差分对的新建图标，可以创建新的差分对。

![图 41](/storage/images/cn/pcb/design-differential-pair-manager/design-differential-pair-manager_20240621_172125.png)

设置好差分对名称，添加正负网络后应用

![图 42](/storage/images/cn/pcb/design-differential-pair-manager/design-differential-pair-manager_20240621_172126.png)

也可以使用自动生成差分对功能，会根据网络名前缀相同，但后缀不同的进行匹配

![图 44](/storage/images/cn/pcb/design-differential-pair-manager/design-differential-pair-manager_20240621_172127.png)

## 等长网络组

在需要等长控制的布线时，设置等长网络组可以很方便对比两个网络或多个网络之间的网络长度，方便在设计规则里面对整个网络组进行设置网络规则。

![图 46](/storage/images/cn/pcb/design-equal-length-group-manager/design-equal-length-group-manager_20240621_172125.png)

和前面新建网络类类似，点新建按钮后创建。
![图 45](/storage/images/cn/pcb/design-equal-length-group-manager/design-equal-length-group-manager_20240621_172126.png)

## 焊盘对组

创建焊盘对组可以很方便进行差分对长度控制，可以直观查看两个焊盘之间的导线网络长度，利于进行等长调整。

![图 48](/storage/images/cn/pcb/design-pad-pair-group-manager/design-pad-pair-group-manager_20240621_172125.png)

![图 47](/storage/images/cn/pcb/design-pad-pair-group-manager/design-pad-pair-group-manager_20240621_172126.png)
