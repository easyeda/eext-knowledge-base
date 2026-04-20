# 认识TYPE-C接口

&emsp;&emsp;随着USB技术的发展，以及手机、电脑充电器接口的转变，目前市面上主流的通信 供电接口，都采用USB-Typec接口。接口虽然相同，但是不同器件所发挥的功能却不完全一样，目前主流的USB-Typec接口有USB-Typec供电接口（有供电、无通信功能、2Pin/6Pin）、USB-Typec2.0接口（有供电，具有USB2.0传输线，16Pin，）、USB-TypeC3.0接口（有供电，具有USB2.0、USB3.0传输线，24Pin）

<br/>

&emsp;&emsp;以往的USB-Typec接口仅能支持5V供电，目前在usb2.0接口及以上，随着usb通信协议的发展以及各类充电头模块内部快充协议的广泛集成，目前USB-Typec可以根据充电头的协议自由输出电压，最常用的是PD协议（支持5V、9V、12V、20V）电压输出，QC协议（5V、9V、12、20V）电压输出。这使得USB-Typec接口能够支持大功率输出，充电速度相比于其他接口（mirco-usb、mini-usb等）有了大幅度提升。

<br/>下面依次给大家介绍USB-Typec接口的组成，帮助大家在实际使用时能够选择最优的解决方案。

## USB-Typec供电接口（2P）

&emsp;&emsp;这种类型接口是对焊接的一种妥协，整体仅有两个引脚（电源正极、负极）配合四周的固定引脚组成。常用在一些成本敏感的消费电子产品上，这样可以供电方便，对于刚接触焊接的同学来说也是一个不错的选择，不过需要注意的是，该接口的正负极方向不同的厂商可能会有所区别，大家在购买后一定要测试正负极再焊接，否则容易反接短路，并且由于没有cc引脚，部分数据线（C to C）是识别不出来无法供电的。

| 实物图                                                                                                                                                               | 原理&封装图                                                                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <img src="/storage/images/zh-hans/design-production/electronic-selection/realize-typec/realize-typec_20250721_095027.png" style="border:2px solid gray" width="400"> | <img src="/storage/images/zh-hans/design-production/electronic-selection/realize-typec/realize-typec_20250721_100034.png" style="border:2px solid gray" width="700"> |

## USB-Typec供电接口（6P）

&emsp;&emsp;最常见的供电USB-Typec接口，整体由6个引脚（电源正负极、CC引脚组成）配合四周的固定引脚组成，考虑到Typec的正反插功能，上下做了对称结构，并且2组电源正极、负极也给载流能力做了大的提升，常用在需要大电流5V的场合，6个引脚焊接也较为方便。

| 实物图                                                                                                                                                               | 原理&封装图                                                                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <img src="/storage/images/zh-hans/design-production/electronic-selection/realize-typec/realize-typec_20250721_095725.png" style="border:2px solid gray" width="400"> | <img src="/storage/images/zh-hans/design-production/electronic-selection/realize-typec/realize-typec_20250721_095755.png" style="border:2px solid gray" width="700"> |

## USB-Typec供电接口（16P）

&emsp;&emsp;最常用的USB-Typec接口，整体由16个引脚（电源正负极、usb2.0传输线、CC引脚、SBU引脚组成）配合四周的固定引脚组成，考虑到Typec的正反插功能，上下做了对称结构，并且2组电源正极、负极也给载流能力做了较大大的提升，相比于6P，16pin接口多了USB2.0传输引脚（USB_DP、USB_DM）,这使得接口可以支持USB2.0数据传输，也可以匹配不同的供电协议，常用于各类电子开发板、手机、电脑等进行供电和信息传输。16Pin的接口，引脚增加了不少，但是为了兼容typec接口的尺寸，只能够缩小信号引脚的间距与宽度，这使得焊接变得复杂，需要一定的焊接技术。
| 实物图 | 原理&封装图 |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <img src="/storage/images/zh-hans/design-production/electronic-selection/realize-typec/realize-typec_20250721_100456.png" style="border:2px solid gray" width="400"> | <img src="/storage/images/zh-hans/design-production/electronic-selection/realize-typec/realize-typec_20250721_100526.png" style="border:2px solid gray" width="700"> |

## USB-Typec供电接口（24P）

&emsp;&emsp;最常用的USB-Typec接口，整体由24个引脚（电源正负极、usb2.0、3.0传输线、CC引脚、SBU引脚组成）配合四周的固定引脚组成，考虑到Typec的正反插功能，做了对称结构，由于USB-Typec接口的尺寸限制，一排焊盘无法满足需求，此时是使用两排焊盘来进行引出，常见的有前插后贴型以及前后都贴型；USB3.0接口向下兼容，这使得它不仅有3.0传输线（USBRX、USBTX），也具有2.0传输线（USB_DM/DP）,常用于需要高速传输时，比如usb3.0集线器、usb3.0转hdmi等；在使用时需要注意，3.0传输线的rx、tx不是对称相同的引脚，而是独立的2组高速差分线，2.0即可是独立的，这意味着你可以既使用2.0传输也可以是3.0传输，根据主机而定。不过目前由于焊接困难、成本较高、使用场景较少等原因，还没有成为主流。

| 实物图                                                                                                                                                               | 原理&封装图                                                                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <img src="/storage/images/zh-hans/design-production/electronic-selection/realize-typec/realize-typec_20250721_103041.png" style="border:2px solid gray" width="400"> | <img src="/storage/images/zh-hans/design-production/electronic-selection/realize-typec/realize-typec_20250721_103110.png" style="border:2px solid gray" width="700"> |
| <img src="/storage/images/zh-hans/design-production/electronic-selection/realize-typec/realize-typec_20250721_103951.png" style="border:2px solid gray" width="400"> | <img src="/storage/images/zh-hans/design-production/electronic-selection/realize-typec/realize-typec_20250721_104017.png" style="border:2px solid gray" width="700"> |
