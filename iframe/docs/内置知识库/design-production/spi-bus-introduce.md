# SPI总线协议介绍

## SPI总线的特点

- 一主多从结构：有一个主机和多个从机组成；
- 全双工通信：MOSI和MISO可同时传输，实现双向数据交换；
- 通信速率快：最高支持几十Mhz传输，适合高速传输场合；

## SPI总线的引脚

- SLCK（Serial Clock）：主机输出的时钟信号；
- MOSI（Master Out Slave In）：主机发出的数据线
- MISO（Master In Slave Out）：从机发出的数据线
- CS/SS（Chip Select/Slave Select）：片选信号，用于选择具体的从机

## SPI信号传输规则

&emsp;&emsp;SPI具有严格的主次关系，只有主机产生时钟，从机只能被动响应，不能主动发起通信；主机通过拉低某个从机的CS线来开始与它进行通信；

<center>
<img src="/storage/images/zh-hans/design-production/practical-circuit/spi_bus_introduce/spi_bus_introduce_20250915_200804.png" style="border:2px solid gray" width="800">
</center>

### 数据移位规则

&emsp;&emsp;SPI通过移位寄存器同步交换数据，每一个时钟周期，主机和从机各发送一位数据、接收一位数据；数据位宽通常有8bit、16bit。

### SPI工作模式

&emsp;&emsp;SPI有四种工作模式，由两个参数决定；注意主次双方必须工作在同一模式，否则数据会错位。

- CPOL：时钟极性，决定空闲状态下SCLK是高还是低
- CPHA：时钟相位，决定在哪个时钟沿采样数据

| 模式 | CPOL | CPHA | 空闲时钟 | 采样时刻   |
| ---- | ---- | ---- | -------- | ---------- |
| 0    | 0    | 0    | 低电平   | 上升沿采样 |
| 1    | 0    | 1    | 低电平   | 下降沿采样 |
| 2    | 1    | 0    | 高电平   | 下降沿采样 |
| 3    | 1    | 1    | 高电平   | 上升沿采样 |

<center>
<img src="/storage/images/zh-hans/design-production/practical-circuit/spi_bus_introduce/spi_bus_introduce_20250915_200619.png" style="border:2px solid gray" width="800">
<br/>
<img src="/storage/images/zh-hans/design-production/practical-circuit/spi_bus_introduce/spi_bus_introduce_20250915_200706.png" style="border:2px solid gray" width="800">
</center>

### 数据位序规则

- MSB First：最高位先传输
- LSB Frist：最低位先传输

### 软件SPI/硬件SPI区别

| 特性       | 软件SPI                                                                     | 硬件SPI                                                                           |
| ---------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| 实现       | 通过普通GPIO引脚，手动控制SCK、MOSI、MISO、CS的电平跳转，用软件延时完成时序 | 由MCU内部的SPI外设模块完成，直接配置寄存器后即可由硬件自动产生时钟、发送/接收数据 |
| 灵活性     | 任意 GPIO 都能用作 SPI 引脚，甚至可以多个独立 SPI 总线                      | 必须使用 MCU 支持的 SPI 引脚（部分 MCU 支持引脚重映射）                           |
| 速度       | 受 CPU 执行速度、延时精度影响。一般几十 kHz ~ 几百 kHz                      | 以轻松到几 MHz，受限于外设最大 SPI 速率（很多 MCU 可到 10-50 MHz）                |
| 稳定性     | 容易受中断或系统调度影响导致时序抖动                                        | 由硬件保证时序，抗干扰能力强                                                      |
| 多字节传输 | 需要手动循环发送每一位/字节                                                 | 支持 FIFO/DMA，可以连续高速传输                                                   |

## SPI协议注意事项

- 如果有多个SPI设备，同一时刻只能有一个从机被选中，空闲状态下cs应该保持高电平，避免从机误响应，建议加上外部上拉电阻，防止上电期间CS悬空。
- 速度不能是依据主机的最大速度来定，需要考虑从机规格，必要时设置小一点，极限速率可能会丢包或通信异常。
- 高速SPI（>10Mhz）走线需要注意干扰，布线尽量短、避免多个过孔相连，在信号线上，可以串联22~100Ω电阻方便调试以及增强抗干扰能力。
