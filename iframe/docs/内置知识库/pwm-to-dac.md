# PWM转DAC电路

&emsp;&emsp;在多数低端单片机中，往往没有DAC外设，但在运算放大器电路、偏置电路等场景中，经常有需要使用DAC的场景。此时我们可以通过PWM加上低通滤波来实现DAC输出的效果。
<br/>
&emsp;&emsp;PWM转DAC输出的原理是，单片机输出一个占空比可调的PWM信号，比如一个3.3V占空比为50%的方波，根据傅里叶变换原理，任意波形均可分解为无数频率的正弦波叠加，此时方波中含有1.65V的直流分量和谐波分量，如果我们将谐波分量进行滤除，就可以得到一个1.65V的直流电压。

<center>

<img src="/storage/images/zh-hans/design-production/practical-circuit/pwm-to-dac/pwm-to-dac_20250718_201637.png" style="border:2px solid gray" width="800">

</center>

&emsp;&emsp;在使用低通滤波器将PWM转换为DAC的过程中，除了简单滤除谐波分量外，还需要考虑获得DAC的分辨率以及DAC输出的平稳程度；分辨率与单片机定时器时钟有关，比如你想得到一个8bit的DAC，那定时器的位数至少也需要8bit，否则此时得到的占空比无法满足输出条件。
<br/>
dac输出的平稳程度往往与滤波器设计有关，常用的1阶低通滤波器得到的效果如下；

<center>

<img src="/storage/images/zh-hans/design-production/practical-circuit/pwm-to-dac/pwm-to-dac_20250718_202110.png" style="border:2px solid gray" width="800">

</center>

&emsp;&emsp;此时输出的值是不平稳的，得到的直流电压偏差较大，这时可以通过增加电容的方式来使输出平稳，但随之而来的是信号到达平稳的时间会变得很长，如果外界adc或其余外部设备在信号没有达到平稳时就采集，此时会得到一个错误的值。

<center>

<img src="/storage/images/zh-hans/design-production/practical-circuit/pwm-to-dac/pwm-to-dac_20250718_194905.png" style="border:2px solid gray" width="800">
<br/>
<img src="/storage/images/zh-hans/design-production/practical-circuit/pwm-to-dac/pwm-to-dac_20250718_194813.png" style="border:2px solid gray" width="800">

</center>

&emsp;&emsp;改善的办法是，采样多阶滤波器组合的形式或者使用有源滤波器，这样能保证得到较好滤波效果的同时，信号上升时间不会很久，能够被adc或其余外部设备设计及时采集到。

<center>

<img src="/storage/images/zh-hans/design-production/practical-circuit/pwm-to-dac/pwm-to-dac_20250718_195343.png" style="border:2px solid gray" width="800">
<br/>
<img src="/storage/images/zh-hans/design-production/practical-circuit/pwm-to-dac/pwm-to-dac_20250718_195406.png" style="border:2px solid gray" width="800">

</center>

&emsp;&emsp;在上述介绍中，我演示的低通滤波器参数并不是最优值，仅供演示，通常，我们会设置rc低通滤波器的截止频率为pwm输出频率的1/10；这样能获得一个比较好的滤波效果，另外，转换后的dac如果想要比较高的分辨率以及比较好的平稳度，通常我们会选择有源低通滤波器来进行操作，而不是增加非常多阶rc，这会导致输出阻抗很大且截止频率计算困难；
<br/>

&emsp;&emsp;在ti的官网中，有直接可用的有源滤波器计算工具，不过作者并没有实际使用过，平时绝大多少项目使用2阶rc就足够满足日常使用了。

<center>

<img src="/storage/images/zh-hans/design-production/practical-circuit/pwm-to-dac/pwm-to-dac_20250718_195852.png" style="border:2px solid gray" width="800">
<br/>
<img src="/storage/images/zh-hans/design-production/practical-circuit/pwm-to-dac/pwm-to-dac_20250718_200429.png" style="border:2px solid gray" width="800">
<br/>
<img src="/storage/images/zh-hans/design-production/practical-circuit/pwm-to-dac/pwm-to-dac_20250718_200636.png" style="border:2px solid gray" width="800">
</center>

&emsp;&emsp;想要设计好一个便宜好用的滤波器并不容易，这里列举出一些参考视频及资料，供大家参考借鉴，上述描述或截图如有错误或侵权欢迎随时联系，（上述仿真软件为Tina-TI）。

- ti有源滤波器设计网站（需要登录账号）：https://webench.ti.com/filter-design-tool/
- ti高性能pwm转dac设计参考文档：https://www.ti.com.cn/cn/lit/an/zhct350/zhct350.pdf?ts=1752767277281&ref_url=https%253A%252F%252Fwww.ti.com.cn%252Fsitesearch%252Fzh-cn%252Fdocs%252Funiversalsearch.tsp%253FlangPref%253Dzh-CN%2526nr%253D5%2526searchTerm%253Dzhct350
- JT硬件乐趣有关pwm转dac设计视频：https://www.bilibili.com/video/BV1Ae411X7ff/?spm_id_from=333.337.search-card.all.click&vd_source=707571906d620ab79fbfb12c5733d269
- JT硬件乐趣有关pwm转dac设计视频：https://www.bilibili.com/video/BV1uC4y1n7X4/?spm_id_from=333.337.search-card.all.click&vd_source=707571906d620ab79fbfb12c5733d269
- csdn博主卓晴老师关于ti有源滤波器设计使用文档：https://blog.csdn.net/zhuoqingjoking97298/article/details/122900182
