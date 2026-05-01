# 导出 PADS

嘉立创EDA支持导出PADS 9.5文件格式。

## 免责声明

1. 因为格式设计和图元的不一样，无法保证导出的 PADS 文件是完全一致（特别是文本大小与位置），请务必在 PADS 打开后仔细检查，请勿未经检查直接下单，嘉立创EDA不保证没有任何错误产生！！！
2. 嘉立创EDA不承担因为库错误和格式转换的错误导致的任何损失！！！如不同意请不要进行PADS导出！！！
3. 如果你要下单 PCB，建议生成 Gerber文件。
4. 请不要反复将你的原理图或PCB导出PADS格式后又导入，这个操作可能会导致细节丢失。
5. 如果你检查导出的文件和原设计出入很大，请联系我们，我们会尽量修正。https://prodocs.lceda.cn/cn/faq/contact-us/index.html。
6. 如果你是要导出库文件请确保在有显卡（打开PCB或封装需要显卡支持）的电脑用谷歌浏览器打开导出。

## 操作步骤

入口：顶部菜单 - 文件 - 导出 - PADS。 或：顶部菜单 - 导出 - PADS。

![图 4](/storage/images/cn/import-export/export-pads/export-pads_20241008_160259.png)

![图 1](/storage/images/cn/import-export/export-pads/export-pads_20240930_165212.png)

点击“PADS”后出现下面窗口。

![图 2](/storage/images/cn/import-export/export-pads/export-pads_20240930_165302.png)

点击“导出PADS”后生成对应压缩包文件。

![图 3](/storage/images/cn/import-export/export-pads/export-pads_20240930_165450.png)

:::warning 注意

导出后的PCB再次导入到PADS时，可能出现层数不匹配的问题。

![picture 0](/storage/images/cn/import-export/export-pads/export-pads_20241231_080410.jpg)

这时可以在PADS设置-层定义，在弹出的“层设置”窗口点击右下角的“最大层”。

:::
