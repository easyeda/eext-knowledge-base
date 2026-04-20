# 天线区域为什么要放置大量过孔

| <img src="/storage/images/zh-hans/design-production/practical-circuit/requirement-via-holes-antenna-area/requirement-via-holes-antenna-area_20250904_194212.jpg" style="border:2px solid gray" width="500"> | <img src="/storage/images/zh-hans/design-production/practical-circuit/requirement-via-holes-antenna-area/requirement-via-holes-antenna-area_20250904_194449.png" style="border:2px solid gray" width="600"> |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

## 形成完整连续的接地屏蔽

&emsp;&emsp;大量GND过孔可以把不同层的地平面结合在一起，形成一个“法拉第笼”进行接地屏蔽干扰，抑制天线射频信号避免传递到板内其余位置。

## 提供回流路径

&emsp;&emsp;天线是辐射电流的源，电流必然需要形成闭合回路，在天线附近加入密集的GND过孔，可以给射频信号提供最短的回流路径，提升信号质量。

## 控制阻抗

&emsp;&emsp;射频信号通常是控制50欧姆特征阻抗，密集的GND过孔可以稳定参考平面，同时可以进行共面参考，对于布线设计也有好处。

## 过孔放置要求

&emsp;&emsp;过孔的排列需要注意，尽量不要形成周期性结构，否则会类似于光栅/周期性介质，在某些频率下回产生布拉格反射或带隙效应，同时，规则排列的过孔可能会成为滤波器或EMI泄漏通道，通常在过孔的放置时，会打乱周期或控制周期小于λ/10（λ/20）。

## 过孔周期规则

&emsp;&emsp;当一个周期性结构的周期远小于波长时，电磁波会忽视它的周期性，表现为近似均匀介质，通常周期性排列的过孔会控制在λ/10一下，基本可以避免周期性效应。

### 计算λ（有效波长）

&emsp;&emsp;波长不是在真空中计算的，而是要考虑PCB介质的传播速度:

$$
\lambda = \frac{c}{f \cdot \sqrt{\varepsilon_{eff}}}
$$

其中：

- $\lambda$ ：介质中的有效波长
- $c$ ：光速，约 $3 \times 10^8 \,\text{m/s}$
- $f$ ：信号频率 (Hz)
- $\varepsilon_{eff}$ ：有效介电常数
  $\varepsilon_{eff}$ ：有效介电常数

    - 微带线：大约
        $$
        \varepsilon_{eff} \approx \frac{\varepsilon_r + 1}{2}
        $$
    - 带状线：接近
        $$
        \varepsilon_{eff} \approx \varepsilon_r
        $$

- FR-4 常见介电常数：
    $$
    \varepsilon_r \approx 4.0
    $$
    所以有效介电常数一般在
    $$
    \varepsilon_{eff} \approx 2.5 \sim 3.5
    $$

### 举例说明

&emsp;&emsp;假设你做的是 **10 GHz 高速信号**，板材 FR-4：

- 有效介电常数估算：

    $$
    \varepsilon_{eff} \approx 3.0
    $$

- 波长：

    $$
    \lambda = \frac{3 \times 10^8}{10^{10} \cdot \sqrt{3}} \approx 17.3 \,\text{mm}
    $$

- λ/10：
    $$
    \frac{\lambda}{10} \approx 1.7 \,\text{mm}
    $$

&emsp;&emsp;这意味着如果你在 10 GHz 应用里，把过孔周期控制在 **1.7 mm 以下**，那么它不会形成显著的周期性结构效应；过孔的周期指的是相邻过孔中心到中心的间距。

## 参考书籍

1. David M. Pozar，《Microwave Engineering》（微波工程，第4版）

    &emsp;&emsp;书中在讨论周期性结构、布拉格反射、频带隙时，有关于“当结构周期远小于波长时，可近似为均匀介质”的表述。

2. Howard Johnson，《High-Speed Signal Propagation: Advanced Black Magic》

    &emsp;&emsp;书中提到过孔阵列、接地过孔间距和 λ 的关系，强调密度足够时电磁波“看不见”间隙。
    <br/>
    参考链接：https://kolegite.com/EE_library/books_and_lectures/%D0%A6%D0%B8%D1%84%D1%80%D0%BE%D0%B2%D0%B0%20%D1%81%D1%85%D0%B5%D0%BC%D0%BE%D1%82%D0%B5%D1%85%D0%BD%D0%B8%D0%BA%D0%B0/High%20Speed%20Signal%20Propagation%20Advanced%20Black%20Magic%20by%20Howard%20Johnson%20%28z-lib.org%29.pdf?utm_source=chatgpt.com

3. Eric Bogatin，《Signal and Power Integrity – Simplified》

    &emsp;&emsp;对走线过孔、接地过孔阵列的周期效有描述，推荐将地过孔间距控制在 λ/10 甚至更小。

4. Infineon / Cypress – 《Antenna Design and RF Layout Guidelines》（AN91445）

    &emsp;&emsp;文中明确提到在 PCB 上“**放置 via fencing（过孔围栏）**于 BLE 与 Wi-Fi 区域之间，用以最小化泄漏”
    <br/>
    参考链接：https://community.infineon.com/gfawx74859/attachments/gfawx74859/psoc4/9578/1/001-91445_AN91445_Antenna_Design_and_RF_Layout_Guidelines.pdf?utm_source=chatgpt.com

5. Texas Instruments – 《Antenna Impedance Measurement and Matching》（SWRA726）

    &emsp;&emsp;是 TI 针对 433/868 MHz（Sub-1 GHz）以及 2.4 GHz/5 GHz（BLE、ZigBee、Wi-Fi）的射频天线匹配指南，强调 PCB 地形、组件布局对天线性能至关重要。
    <br/>
    参考链接：https://www.ti.com/lit/an/swra726/swra726.pdf?utm_source=chatgpt.com
