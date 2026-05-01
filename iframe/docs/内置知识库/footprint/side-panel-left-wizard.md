# 封装向导

嘉立创EDA提供一个常用封装且功能强大的创建向导，使用封装向导可以快速根据规格书进行创建封装。

入口：左侧面板 - 向导

![图 177](/storage/images/cn/footprint/side-panel-left-wizard/side-panel-left-wizard_20240621_172123.png)

点击封装类型缩略图可以进入参数填写界面，在参数填写界面点击预览图和顶部导航可以返回上一级。

![图 187](/storage/images/cn/footprint/side-panel-left-wizard/side-panel-left-wizard_20240621_172124.png)

**使用步骤**：

1、选择需要创建的封装类型。点击示意图进入。比如选择 SOIC_SOP 类型封装：

![图 179](/storage/images/en/footprint/side-panel-left-wizard/side-panel-left-wizard_20240621_172124.png)

2、根据规格书设置封装的物理尺寸。涉及外形长BL，外形宽BW，引脚跨距LS，引脚间距PP，引脚大小PW，如果有散热焊盘还有散热焊盘长EPL，焊盘宽EPW。

比如需要创建一个 SOP-8 的封装，规格书参考地址：[C368696 APW7172](https://atta.szlcsc.com/upload/public/pdf/source/20190812/C368696_AC859780F18C0A36686152ABD0615FD2.pdf)

根据上图规格书可以得知该封装的物理尺寸如下，单位mm：

![图 181](/storage/images/cn/footprint/side-panel-left-wizard/side-panel-left-wizard_20240621_172125.png)

```
引脚数量：8
焊盘形状：矩形
引脚跨距(LS)：5.80 ~ 6.20。对应尺寸 E 的最小最大值
本体长度(BW)：3.80 ~ 4.00。对应尺寸 E1 的最小最大值
本体宽度(BL)：4.80 ~ 5.00。对应尺寸 D 的最小最大值
引脚长度(PL)：0.40 ~ 1.27。对应尺寸 L 的最小最大值
引脚宽度(PW)：0.31 ~ 0.51。对应尺寸 b 的最小最大值
引脚间距(PP)：1.27。对应尺寸 b 的最小最大值
```

如果需要自定义热焊盘，和自定义锡膏层，可以勾选并设置相应的参数。第一引脚位置通常在坐下，封装原点通常在焊盘中央。

3、点击生成封装按钮

点击下方的生成封装按钮后，画布会生成对应的封装内容。开启元件相关的层就可以看到生成的引脚焊接大小和元件外型大小

![图 182](/storage/images/cn/footprint/side-panel-left-wizard/side-panel-left-wizard_20240621_172126.png)

**注意**：

- 向导填写的是封装的物理尺寸，并不是封装焊盘的尺寸，向导会根据填写的参数自动预留余量来生成焊盘。
- 封装向导提供的参数和生成的尺寸仅供参考，生成后的封装尺寸请自行根据规格书的建议值和实际生产的相关信息进行调整。

嘉立创EDA支持在封装向导中创建 3D 模型。

**功能入口**：

- 左侧栏 - 库设计 - 向导

![图 0](/storage/images/cn/footprint/side-panel-left-wizard/side-panel-left-wizard_20250331_083559.jpg)

编辑好封装参数后，勾选`生成3D模型`选项，输入所需实体高度。

![图 1](/storage/images/cn/footprint/side-panel-left-wizard/side-panel-left-wizard_20250331_083905.jpg)

点击`生成3D模型`按钮后，在弹出的新建3D模型窗口中点击`保存`，即可完成3D模型的创建。

![图 2](/storage/images/cn/footprint/side-panel-left-wizard/side-panel-left-wizard_20250331_084044.jpg)

![图 3](/storage/images/cn/footprint/side-panel-left-wizard/side-panel-left-wizard_20250331_084126.jpg)

系统将自动为封装绑定所生成的3D模型。此外，用户还可通过点击输入框，在弹出窗口中重新绑定3D模型。

![图 4](/storage/images/cn/footprint/side-panel-left-wizard/side-panel-left-wizard_20250331_084524.jpg)

# 符合 IPC-7351B 规范封装名称 - 封装向导

嘉立创EDA支持创建符合 IPC-7351B 规范的封装名称。

支持的封装类型有：BGA、Chip、ChipArray、DFN-4、DIP、QFN、SOP、SOIC_SOP、SOT23、SOT223、TO-DPAK。

- 左侧栏 - 库设计 - 向导

![图 5](/storage/images/cn/footprint/side-panel-left-wizard/side-panel-left-wizard_20250331_115951.jpg)

点击`应用IPC-7351B封装名`后，生成的封装将按照选项后规范名称命名。

![图 6](/storage/images/cn/footprint/side-panel-left-wizard/side-panel-left-wizard_20250331_120204.jpg)
