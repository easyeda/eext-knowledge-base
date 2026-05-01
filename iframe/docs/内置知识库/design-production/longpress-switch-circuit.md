# 长按开关机电路

&emsp;&emsp;产品项目中往往会进行开关机操作来实现重启系统或实现低功耗功能，这里介绍一种使用按键进行长按开关机的电路；
<br/>
<br/>
前提条件：需要带有使能引脚的LDO或DCDC电源芯片；
<br/>
<br/>
使用二极管、按键、NMOS组成长按开关机电路，当按键按下时，5V电源直接经过二极管到使能引脚，此时电源芯片打开，3.3V有输出，芯片开始工作，并且VGSth满足NMOS的导通条件，通过判断引脚为低电平时间，从而判断按键是否长按；当长按时满足开机条件，此时GPIO引脚输出高电平到使能引脚，按键就算不按下，也有单片机持续输出高电平给电源芯片，整个系统保持正常工作。
<br/>
<br/>
同样道理，当开机状态下检测到按键持续长按时，引脚关闭输出高电平，此时一旦按键松手，电源芯片引脚使能关断，整个系统会立刻断电。

<center>

<img src="/storage/images/zh-hans/design-production/pcb-design/practical-circuit/longpress-switch-circuit/longpress-switch-circuit_20241205_165958.png" style="border:2px solid gray" width="900">

</center>
