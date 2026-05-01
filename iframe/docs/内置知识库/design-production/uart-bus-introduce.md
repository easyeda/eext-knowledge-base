# 通用异步收发传输总线介绍

&emsp;&emsp;通用异步收发传输器(Universal Asynchronous Receiver/Transmitter)，通常称作UART，可以通过一根数据线一位一位地传输数据，在嵌入式设备中经常使用，USART（Universal Synchronous/Asynchronous Receiver/Transmitter）比 UART 多一个同步模式，可以用 CLK 引脚输出时钟，让发送和接收端用同一个时钟同步，可靠性更高。

## 引脚说明

&emsp;&emsp;UART/USART 最基本的引脚只有两根：

| 引脚名称 | 方向 | 功能说明                                                        |
| -------- | ---- | --------------------------------------------------------------- |
| **TX**   | 输出 | **Transmit**，数据发送引脚，MCU 往外发送数据时通过此引脚输出。  |
| **RX**   | 输入 | **Receive**，数据接收引脚，MCU 从外部接收数据时通过此引脚输入。 |

&emsp;&emsp;USART 除了 TX/RX，还可能带有以下辅助引脚，用于硬件流控和同步模式：

| 引脚名称 | 方向      | 功能说明                                                          |
| -------- | --------- | ----------------------------------------------------------------- |
| **RTS**  | 输出      | **Request To Send**，请求发送信号。低电平表示本机准备好接收数据。 |
| **CTS**  | 输入      | **Clear To Send**，清除发送信号。低电平表示对方允许我发送数据。   |
| **DE**   | 输出      | **Driver Enable**，用于 RS-485 半双工模式，控制收发器的方向。     |
| **CLK**  | 输出/输入 | 同步模式时的时钟线（USART 才有），异步 UART 没有这根线。          |

## UART通信方式

- 异步通信：没有时钟线，靠双方约定的波特率进行同步信号，通信双方波特率必须保证一致，否则会通信失败。
- 全双工：一根TX线发送数据，一根RX线接收数据，可同时收发。
- 波特率：波特率通常由芯片内部时钟分频器生成，不同芯片的UART外设支持最高波特率不同，需要考虑最低的一端；通常为115200波特率，兼顾速度与可靠性。

&emsp;&emsp;UART 协议本身非常简单，不像 TCP 那样有“重传”机制，但是它有最低限度的错误检测：

| 检测方式                         | 说明                                             |
| -------------------------------- | ------------------------------------------------ |
| **帧错误（Frame Error）**        | 接收端检测到停止位不为高电平，说明帧出错。       |
| **奇偶校验错误（Parity Error）** | 如果开启奇偶校验，接收端可检测单比特错误。       |
| **溢出错误（Overrun Error）**    | 接收缓冲区满时，新的字节会覆盖，MCU 会置标志位。 |

<center>
<img src="/storage/images/zh-hans/design-production/practical-circuit/uart-bus-introduce/uart-bus-introduce_20250918_143018.png" style="border:2px solid gray" width="800">
</center>

&emsp;&emsp;在异步模式中使用的帧格式除了包含用于同步的位之外，还包含一组数据位，并且可选地还包括用于错误检测的奇偶校验位，支持7bit、8bit、9bit的数据长度。
<br/>
&emsp;&emsp;一个帧以一个起始位开始，在一段时钟周期内保持低电平，这意味着一个帧的开始，并用于实现同步。
<br/>
&emsp;&emsp;起始位之后是7/8/9个数据位，如果启用奇偶校验控制，则奇偶校验位作为最后一个数据位进行传输，并计入数据长度计数中，最后一些停止位(0/1/1.5/2)会在帧结束时使线路保持高电平状态。

<center>
<img src="/storage/images/zh-hans/design-production/practical-circuit/uart-bus-introduce/uart-bus-introduce_20250918_143753.png" style="border:2px solid gray" width="800">
</center>

&emsp;&emsp;一个空闲字符被解释为一整帧的“1”(其中“1”的数量将包括停止位的数量)；在接收到连续的“0”字符时，会对其进行分割处理，这一处理过程会持续一个帧周期，在分割帧结束时，会插入两个停止位。
