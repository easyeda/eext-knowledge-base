# FPC补强板

嘉立创EDA专业版在v2.0开始支持FPC补强板的绘制，再结合嘉立创PCB下单系统，可以方便接入FPC设计文件，减少人工相互确认的过程，减少出错，减少时间成本。

![](/storage/images/cn/pcb/place-fpc-stiffener/place-fpc-stiffener_20250315_104250.jpg)

## FPC补强板绘制步骤

1、首先按平常的PCB进行绘制，画好板框等图元

2、然后可以通过顶部**放置**菜单下的FPC补强板菜单进行放置
![picture 1](/storage/images/cn/pcb/place-fpc-stiffener/place-fpc-stiffener_20240621_172125.png)

也支持导入DXF，选中对应图元然后通过右键菜单中的转为补强板进行转换

![picture 10](/storage/images/cn/pcb/place-fpc-stiffener/place-fpc-stiffener_20240621_172126.png)

3、PCB在第一次放置或者转为FPC补强板时会为您在图层管理器中自动切换PCB类型到FPC软板，并打开补强专属的两个图层。

![picture 8](/storage/images/cn/pcb/place-fpc-stiffener/place-fpc-stiffener_20240621_172127.png)

4、在放置之后，选中补强板，在属性面板设置它的材质（PI、钢片、3M双面胶、电磁屏蔽膜）、厚度/型号，这样在下单后工程人员就可以根据您设置的选项自动进行计价和生产。

![picture 2](/storage/images/cn/pcb/place-fpc-stiffener/place-fpc-stiffener_20240621_172128.png)

![picture 9](/storage/images/cn/pcb/place-fpc-stiffener/place-fpc-stiffener_20240621_172129.png)

5、如果您需要将补强的中间挖空，可以使用布尔的功能

![图 0](/storage/images/cn/pcb/place-fpc-stiffener/place-fpc-stiffener_20240621_172130.jpg)

## FPC软板下单

1、完成FPC补强板绘制后，导出Gerber或者一键下单

![picture 4](/storage/images/cn/pcb/place-fpc-stiffener/place-fpc-stiffener_20240621_172131.png)

2、下单页面，板材类型选择FPC软板

![picture 5](/storage/images/cn/pcb/place-fpc-stiffener/place-fpc-stiffener_20240621_172132.png)

3、补强方式根据设计时选择的属性进行选择

![picture 6](/storage/images/cn/pcb/place-fpc-stiffener/place-fpc-stiffener_20240621_172133.png)

4、填完其他参数后提交订单即可。

你可以加入FPC微信交流群进行交流

![picture 12](/storage/images/cn/pcb/place-fpc-stiffener/place-fpc-stiffener_20240621_172134.png)
