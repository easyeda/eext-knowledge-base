# 认识存储芯片

‌&emsp;&emsp;存储芯片可分为RAM（随机存储器，易失性存储器）和ROM（只读存储器，非易失性存储器）两大类。

## 1 RAM

‌&emsp;&emsp;RAM（Random Access Memory）随机存储器，也称主存/内存，特点是随机存储，读写访问速度快，断电后保存的数据会消失。主要包含DRAM（动态随机存储器）和SRAM（静态随机存储器）。

### （1）DRAM

‌&emsp;&emsp;DRAM是动态随机存取存储器，可随时读写且速度很快，常用于存储正在运行的程序和数据，也就是运行内存，系统一断电，所存储的数据会全部丢失，因此不能用于长期存储。其中，按技术标准和用途可以分为同步DRAM（如DDR、LPDDR、GDDR）和异步DRAM（已淘汰）。

#### ①DDR

‌&emsp;&emsp;DDR的规范名称应该为DDR SDRAM，是通用型标准DRAM，从SDR SDRAM发展而来，常设计为系统主存，多用于PC电脑、服务器的内存条中。

- SDRAM

‌&emsp;&emsp;SDR SDRAM是最原始的同步DRAM，特指第一代同步动态随机存储器（SDRAM），采用时钟频率来命名，如PC100，表示时钟频率为100MHz，数据读/写速率也为100MHz。其核心特点常用单端时钟信号，每个时钟周期只在上升沿传输一次数据，而DDR SDRAM在时钟上升沿和下降沿均传输数据，已完全被DDR所取代。

- DDR1

‌&emsp;&emsp;DDR1是指第1代DDR（2n Prefetch，n为I/O接口宽度，Prefetc为预存位数，即控制器预先读取或写入2倍于基本位宽的数据量），其核心内部在时钟预存准备2位数据，在上升沿和下降沿各传输1位。

- DDR2

    ‌&emsp;&emsp;DDR2为第2代DDR（4n Prefetch），其核心内部在时钟预存准备4位数据，在上升沿和下降沿各传输2位。

- DDR3

    ‌&emsp;&emsp;DDR3为第3代DDR（8n Prefetch），其核心内部在时钟预存准备8位数据，在上升沿和下降沿各传输4位。

- DDR4

    ‌&emsp;&emsp;DDR4为第4代DDR（8n Prefetch，采用Bank Group架构，将内存Bank分组，如4组×4Banks，支持并行访问，提升带宽利用率，使其效率更高），其核心内部在时钟预存准备8位数据，在上升沿和下降沿各传输4位。

- DDR5

    ‌&emsp;&emsp;DDR5为第5代DDR（16n Prefetch，采用双通道设计，将每个内存模块内部分为两个独立通道，如32位×2，提升并行效率），其核心内部在时钟预存准备16位数据，在上升沿和下降沿各传输8位。

<center><img src="/storage/images/zh-hans/design-production/electronic-selection/memory-chip/memory-chip_20250724_163450.png" width="1300"></center>

- 上图源于"王知鱼"公众号的深入理解DRAM（全文·万字30+图）https://mp.weixin.qq.com/s/dfxIMmxWMx_sA_yM30QY4A 如有侵权请联系删除。

- DDR的基本原理可查看“一个人一支队伍”公众号 https://mp.weixin.qq.com/s/R_VybK-SrC8-JrCUF3kk9w 如有侵权请联系删除。

历代DDR内存性能参数对比表：

|         特性         |           DDR1            |               DDR2               |    DDR3    |         DDR4         |         DDR5         |
| :------------------: | :-----------------------: | :------------------------------: | :--------: | :------------------: | :------------------: |
|    发布年份（年）    |           2000            |               2003               |    2007    |         2014         |         2020         |
|  标准工作电压（V）   |            2.5            |               1.8                |    1.5     |         1.2          |         1.1          |
|   核心频率（MHz）    |         133～200          |             133～200             |  133～200  |       133～200       |       133～200       |
|   时钟频率（MHz）    |         133～200          |             266～400             |  533～800  |      1066～3200      |      1600～3200      |
| 数据传输速率（MT/s） |         266～400          |             533～800             | 1066～1600 |      2133～3200      |      3200～6400      |
|    总带宽（GB/s）    |         2.1～3.2          |             4.2～6.4             | 8.5～12.8  |       17～25.6       |      25.6～51.2      |
| 预存（Prefetch）位数 |            2n             |                4n                |     8n     | 8n（Bank Group架构） |    16n（双通道）     |
|       关键创新       | 双倍数据速率、2位预存机制 | ODT片内终结电阻、OCD片外驱动调校 |  Bank分组  |    Bank Group架构    | 双通道设计、PMIC集成 |
|       技术标准       |          JESD79E          |        JESD79-2E、JESD208        | JESD79-3C  |       JESD79-4       |       JESD79-5       |

- DDR的更多技术标准详情，可访问JEDEC固态技术协会官网查看：https://www.jedec.org

#### ②LPDDR

‌&emsp;&emsp;LPDDR为低功耗型内存，是DDR内存的一种低功耗版本，以低功耗和小体积著称。专为移动设备设计，可以提供更窄的通道宽度和低功耗运行状态，多应用于移动式便携设备（如手机、平板电脑、智能手表等设备中）。

LPDDR内存的工作电压对比表：

|     特性      | LDDR1 | LDDR2 | LDDR3 | LDDR4 | LDDR4X | LDDR5 |
| :-----------: | :---: | :---: | :---: | :---: | :----: | :---: |
| 工作电压（V） |  1.8  |  1.2  |  1.2  |  1.1  |  0.6   | 1.05  |

LPDDR4X可以看作是LPDDR4的省电优化版本，比LPDDR4功耗更低、更省电。

可以优先选择LPDDR的厂商有[SAMSUNG（三星）](https://list.szlcsc.com/brand/12391.html?)、[Micron（镁光）](https://list.szlcsc.com/brand/739.html?)、[Hynix（海力士）](https://list.szlcsc.com/brand/223.html?)、[长鑫（国产）](https://list.szlcsc.com/brand/15160.html?)等。

下面介绍各厂商LPDDR的命名规则，以方便快速掌握选项技巧。

SAMSUNG（三星）[K4F6E3S4HM-MGCJ](https://item.szlcsc.com/datasheet/K4F6E3S4HM-MGCJ/3027737.html?)

<center><img src="/storage/images/zh-hans/design-production/electronic-selection/memory-chip/memory-chip_20250725_162701.png" width="800"></center>

- K4：代表三星的移动内存DRAM
- F：类型为LPDDR4 SDRAM
- 6E：容量为16G，8K/32ms
- 3S：位宽，数据通道宽度为x32位
- 4：Bank数为8Bank
- H：接口电平要求，VDD1，VDD2，VDDQ，接高电平LVSTL_11，1.8V/1.1V/1.1V
- M：代数说明，第1代
- M：封装，200-FBGA（10×15）
- G：温度和功率，-25℃～85℃（标准）
- CJ：性能，0.536ns@RL32,tRCD18ns, tRP18ns

Micron（镁光）[MT53E512M32D1ZW-046 WT:B](https://item.szlcsc.com/datasheet/MT53E512M32D1ZW-046%2520WT%253AB/6089554.html?)

<center><img src="/storage/images/zh-hans/design-production/electronic-selection/memory-chip/memory-chip_20250725_170522.png" width="1000"></center>

- MT：镁光科技缩写
- 53：产品系列：53 = 移动LPDDR4 SDRAM
- E：工作电压：E = 1.10V VDD2/0.60V VDDQ or 1.10V VDDQ
- 512M32：存储配置信息：512M为容量，32为位宽，512M32 = 512 Meg x 32；1G32 = 1 Gig x 32；
- D1：寻址位数：D1 = LPDDR4, 1 die；D2 = LPDDR4, 2 die；
- ZW：封装方式：ZW = 200-ball TFBGA 10 x 14.5 x 1.05mm （Ø0.40 SMD）
- -046：时序参数：-046为468ps，tCK RL = 36/40
- WT：工作温度：WT = –25°C to +85°C；IT = –40°C to +95°C
- :B：设计版本

Hynix（海力士）[H9HCNNNBKUMLXR-NEX](https://item.szlcsc.com/datasheet/H9HCNNNBKUMLXR-NEE/23342394.html?)

<center><img src="/storage/images/zh-hans/design-production/electronic-selection/memory-chip/memory-chip_20250725_174553.png" width="800"></center>

- H：SK海力士半导体
- 9：FBGA产品线
- HC：生产模式LPDDR4
- NN：NVM：没有
- N：NVM：没有
- BK：容量，堆叠方式，通道数，CS信号：16Gb, DDP, 2Ch 1CS
- U：I/O工作电压和配置参数：1.1v，16位, LPDDR4
- M：代数：第1代
- LX：封装类型：FBGA 200 Ball
- R：包装材料：无铅和无卤
- N：NAND闪存速率：没有
- E：DRAM速率
- X：工作温度

长鑫（国产）[CXDB4CBAM-MK-A](https://item.szlcsc.com/datasheet/CXDB4CBAM-MK-A/21938044.html?)

<center><img src="/storage/images/zh-hans/design-production/electronic-selection/memory-chip/memory-chip_20250725_192744.png" width="1000"></center>

- CX：长鑫缩写
- D：产品系列为DRAM
- B：产品类型为LPDDR4/4X（VDD2/VDDQ:1.1/1.1&0.6V）
- 4：产品容量为2GB
- C：封装类型为200-ball FBGA
- B：存储配置信息，32位，2通道，1CS
- A：晶元堆叠，DDP
- M：包装材料，无卤和无铅（符合ROHS标准）
- M：工作温度，商业温度（-25°C~85 °C）
- K：时钟频率，3733Mbps
- A：产品版本，第2版

#### ③GDDR

‌&emsp;&emsp;GDDR为图形型内存，即显存，专为显卡设计，以满足图形处理对高带宽和高速度的需求。GDDR分为普通GDDR平面结构和HBM 3D堆叠结构，GDDR平面结构更适合图形处理和游戏场景，而HBM 3D堆叠结构更适合AI训练和推理等需要大容量数据并行处理的应用场景。

### （2）SRAM

‌&emsp;&emsp;SRAM是静态随机存取存储器，读写速度非常快，成本也高，一般用于高速缓存使用，数据在断电时会丢失，但在供电时不会像DRAM那样需要动态刷新，因此称为“静态”存储器。

## 2 ROM

‌&emsp;&emsp;ROM（Read Only Memory）只读存储器，也称闪存/外存，特点是断电保持的数据不受影响，可以长期保存数据。主要包含PROM（可编程只读存储器），MROM（掩模式只读存储器）和Flash（可清除程序化只读存储器，闪存）。

### （1）PROM

‌&emsp;&emsp;PROM是可编程ROM，也叫一次性编程ROM，只能写入一次数据，且无法擦除修改，这种是早期的产品，现在已经不使用了。

#### ①EPROM

‌&emsp;&emsp;EPROM是可擦除编程ROM，通常采用单总线与MCU连接，通过紫外线照射才能够擦除数据，需要专用编程器和紫外线设备，仅支持整片擦除，无法单独修改部分数据，耗时较长，需要拆卸且操作较为复杂。
| ADI（亚德诺）“[DS2502P](https://item.szlcsc.com/datasheet/DS2502P%252BT%2526R/24092051.html?)”实物图 | 符号&封装图 |
| :--------------------------------------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| <img src="/storage/images/zh-hans/design-production/electronic-selection/memory-chip/memory-chip_20250724_142159.png" style="border:1px solid gray" width="400"> | <img src="/storage/images/zh-hans/design-production/electronic-selection/memory-chip/memory-chip_20250724_142055.png" style="border:1px solid gray" width="800"> |

#### ②EEPROM

‌&emsp;&emsp;EEPROM是带电可擦除编程ROM，通常采用IIC与MCU连接，通过施加特定电压直接接电擦除，可直接在电路板上操作，允许按字节擦写，灵活性更高，无需要拆卸。

|                                HXY MOSFET（华轩阳电子）“[AT24C02](https://item.szlcsc.com/datasheet/AT24C02/8522899.html?)”实物图                                |                                                                           符号&封装图                                                                            |
| :--------------------------------------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| <img src="/storage/images/zh-hans/design-production/electronic-selection/memory-chip/memory-chip_20250724_145354.png" style="border:1px solid gray" width="400"> | <img src="/storage/images/zh-hans/design-production/electronic-selection/memory-chip/memory-chip_20250724_145224.png" style="border:1px solid gray" width="800"> |

### （2）Flash

‌&emsp;&emsp;Flash是一种非易失性存储器，又称闪存，其核心特性包括断电后数据不丢失、支持多次擦写且具有块级操作特性，是EEPROM的改进产品，根据存储架构和应用场景的不同，主要分为NOR Flash和NAND Flash两大类。

#### ①NOR Flash

‌&emsp;&emsp;NOR Flash是基于Flash芯片的NOR结构生产而成的，核心特性是非易失，断电后数据和程序可长期保存。不能单字节擦除数据，采用块擦除技术，每次擦除会将整个块内的所有位重置为默认状态。通常采用SPI通信协议与MCU连接。

|                                Winbond（华邦）“[W25Q64JVSSIQ](https://item.szlcsc.com/datasheet/W25Q64JVSSIQ/190565.html?)”实物图                                |                                                                           符号&封装图                                                                            |
| :--------------------------------------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| <img src="/storage/images/zh-hans/design-production/electronic-selection/memory-chip/memory-chip_20250728_111258.png" style="border:1px solid gray" width="400"> | <img src="/storage/images/zh-hans/design-production/electronic-selection/memory-chip/memory-chip_20250728_111338.png" style="border:1px solid gray" width="800"> |

#### ②NAND Flash

‌&emsp;&emsp;NAND Flash是基于Flash芯片的NAND结构生产而成的，核心特性是非易失，断电后数据和程序可长期保存。写入、擦除速度快，以块为单位进行操作，速度优于NOR Flash，存储密度也远高于NOR Flash，适合大容量存储场景（U盘，闪存卡，SSD固态硬盘等），嵌入式存储包含eMMC、UFS等。通常采用SPI通信协议与MCU连接。

|                          GigaDevice（兆易创新）“[GD5F1GQ5REYIGR](https://item.szlcsc.com/datasheet/GD5F1GQ5REYIGR/3252553.html?)”实物图                          |                                                                           符号&封装图                                                                            |
| :--------------------------------------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| <img src="/storage/images/zh-hans/design-production/electronic-selection/memory-chip/memory-chip_20250728_113208.png" style="border:1px solid gray" width="400"> | <img src="/storage/images/zh-hans/design-production/electronic-selection/memory-chip/memory-chip_20250728_113241.png" style="border:1px solid gray" width="800"> |

### （3）eMMC

‌&emsp;&emsp;eMMC（embedded MultiMediaCard）嵌入式多媒体卡，是将NAND Flash存储器和控制器集成在同一个封装内的存储解决方案。eMMC采用并行接口设计，支持8位数据总线，工作电压通常为1.8V或3.3V，具有成本低、集成度高、易于使用等优点。

eMMC版本演进对比表：

|     特性     | eMMC 4.5  | eMMC 5.0  | eMMC 5.1  |
| :----------: | :-------: | :-------: | :-------: |
|   发布年份   |   2011    |   2013    |   2015    |
|   最大容量   |    2TB    |    2TB    |    2TB    |
|   接口速度   |  200MB/s  |  400MB/s  |  600MB/s  |
|   工作电压   | 1.8V/3.3V | 1.8V/3.3V | 1.8V/3.3V |
| 数据总线宽度 |    8位    |    8位    |    8位    |

|                                                   KLM8G1GETF-B041                                                   |                                                     原理图符号                                                      |                                                       PCB封装                                                       |
| :-----------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------: |
| ![图 3](/storage/images/zh-hans/design-production/electronic-selection/memory-chip/memory-chip_20250915_114724.png) | ![图 4](/storage/images/zh-hans/design-production/electronic-selection/memory-chip/memory-chip_20250915_114743.png) | ![图 5](/storage/images/zh-hans/design-production/electronic-selection/memory-chip/memory-chip_20250915_114757.png) |

主要厂商包括[SAMSUNG（三星）](https://list.szlcsc.com/brand/12391.html?)、[Micron（镁光）](https://list.szlcsc.com/brand/739.html?)、[Hynix（海力士）](https://list.szlcsc.com/brand/223.html?)等。

### （4）UFS

‌&emsp;&emsp;UFS（Universal Flash Storage）通用闪存存储，是新一代嵌入式存储标准，采用串行接口设计，支持全双工通信，具有更高的传输速度和更低的功耗。UFS采用SCSI架构命令集，支持多队列操作，能够同时处理读写请求，性能远超eMMC。

UFS版本演进对比表：

|    特性    | UFS 2.0  | UFS 2.1  | UFS 3.0 | UFS 3.1 | UFS 4.0 |
| :--------: | :------: | :------: | :-----: | :-----: | :-----: |
|  发布年份  |   2013   |   2016   |  2018   |  2020   |  2022   |
|  接口速度  | 1.45GB/s | 1.45GB/s | 2.9GB/s | 2.9GB/s | 4.2GB/s |
|  工作电压  |   1.8V   |   1.8V   |  1.8V   |  1.8V   |  1.8V   |
|  数据通道  |  2通道   |  2通道   |  2通道  |  2通道  |  2通道  |
| 全双工通信 |   支持   |   支持   |  支持   |  支持   |  支持   |

|                                                  MTFC128GASAONS-IT                                                  |                                                     原理图符号                                                      |                                                       PCB封装                                                       |
| :-----------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------: |
| ![图 0](/storage/images/zh-hans/design-production/electronic-selection/memory-chip/memory-chip_20250915_114347.png) | ![图 1](/storage/images/zh-hans/design-production/electronic-selection/memory-chip/memory-chip_20250915_114423.png) | ![图 2](/storage/images/zh-hans/design-production/electronic-selection/memory-chip/memory-chip_20250915_114444.png) |

|

eMMC与UFS对比表：

|   特性   |        eMMC         |         UFS          |
| :------: | :-----------------: | :------------------: |
| 接口类型 |      并行接口       |       串行接口       |
| 通信方式 |       半双工        |        全双工        |
| 传输速度 |     最高600MB/s     |     最高4.2GB/s      |
| 功耗表现 |        较高         |         较低         |
|   成本   |        较低         |         较高         |
| 应用场景 | 中低端移动设备、IoT | 高端移动设备、旗舰机 |
| 命令队列 |       单队列        |        多队列        |
