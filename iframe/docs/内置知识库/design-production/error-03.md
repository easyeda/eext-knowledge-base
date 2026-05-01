# 供电需求突变，导致单片机重启

&emsp;&emsp;首先感谢开源用户“star_fire”在自己的个人项目中找到该问题并提出解决方案；

## 前情提要

&emsp;&emsp;最近在测试一个板子，测试时使用Type-C进行供电（有足够的电流），通过单个LDO芯片为整个系统供电，在这个板子中使用GPIO控制一个三极管，作为附属元器件的开关（附属元器件所需最低电流125mA，电压为3.3V）

<center>
<img src="/storage/images/zh-hans/design-production/design-error-solve/error-03/error-03_20250611_101934.png" width="1000" style="border:1px solid gray">
</center>
<center>图1-初始电源框架</center>

<center>
<img src="/storage/images/zh-hans/design-production/design-error-solve/error-03/error-03_20250611_095837.png" width="1000" style="border:1px solid gray">
</center>
<center>图2-主要原理图</center>

1. 刚上电时三极管默认导通，MOS开启，附属元器件供电正常，单片机工作正常。

2. 如果初始化时，使GPIO输出低电平，三极管截止，MOS关闭，此时，附属元器件无供电，单片机工作正常。后面若使GPIO开漏输出高电平，开启附属元器件供电，此时会使单片机重启。

## 原理分析

&emsp;&emsp;LDO芯片输出电容值较小，输出能力不足，导致当系统功率突然增大的瞬间，会拉低输出电压，从而导致单片机供电异常进行重启。

## 解决办法

1. 额外加入一颗LDO芯片，对单片机电源与附属元器件电源进行区分；
2. 加入大的电容进行储能（47uF钽电容）
3. 加入缓启动电路（使用RC电路，使三极管B极电压缓慢抬升）

<center>
<img src="/storage/images/zh-hans/design-production/design-error-solve/error-03/error-03_20250611_101834.png" width="1000" style="border:1px solid gray">
</center>
<center>图3-修改后电源框架</center>

<center>
<img src="/storage/images/zh-hans/design-production/design-error-solve/error-03/error-03_20250611_102126.png" width="1000" style="border:1px solid gray">
</center>
<center>图4-修改后原理图</center>

## 写在最后

&emsp;&emsp;以上分析与解决思路均来自原作者，已经得到原作者的授权，这里也非常感谢原作者的案例分享，如有问题随时在文档网站右上方联系我们。
<br/>

&emsp;&emsp;从小编的思路来看，如果被控电路电流要求不大时（<100mA）,通常我们可以在mos管的前方加入一个大的储能电容（22uF左右），同时在单片机等核心器件附近也加入一个较大的电容（10uf），防止电流突变时拉低核心器件电压。对于该项目案例，电流在几百mA左右，小编感觉既然作者额外加入了一颗LDO，应该是可以直接把GPIO连接在LDO的EN引脚上，通过控制LDO的导通和关闭来控制负载，也可以在EN引脚上加入RC来进行缓启动，同时，目前的ldo普遍都有限流和短路保护，这样也可以保护核心单片机不受损坏，想要更加保险的话可以加入一个小功率小阻值的电阻串联在被控LDO那一路，这样短路后烧熔断起到简单保护。
