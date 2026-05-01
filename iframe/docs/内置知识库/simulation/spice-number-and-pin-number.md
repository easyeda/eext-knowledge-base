# 仿真编号与引脚编号

在自定义编辑仿真模型之前，应熟悉并理解仿真模型名称与编号的对应关系。本节对相关关系进行说明。

### 元件编号和仿真前缀

原理图符号的前缀或标记的分配在一定程度上取决于 EDA 工具与器件型号。根据器件的原理图符号，可能采用不同的前缀或标记。例如，分立 MOSFET 器件可能使用“Q”“M”“TR”作为前缀；若属于单片多晶体管阵列，可能使用“U”或“IC”作为前缀。

原理图符号的 SPICE 前缀分配规则较为严格。SPICE 前缀用于指示仿真器该符号所代表的电路元素以及对应的仿真模型类型。

多数仿真电路元件的模型采用单行“.model”语句；部分模型采用多行“.subckt”子电路定义。

例如，某些 MOSFET 可通过“.model”语句描述，此时其 SPICE 前缀为“M”；许多 MOSFET 通过“.subckt”描述，此时其 SPICE 前缀为“X”。因此，无论原理图符号选用何种 PCB 前缀，符号对应的 SPICE 前缀必须与实例所需的模型类型一致。

以下示例展示两类 MOSFET 模型：

“Q1”，由“.model”语句建模的 BSS123：

```
* BSS123
* SRC = BSS123; DI_BSS123; MOSFET N; Enh; 100V 0.170A 1.00ohm
* Diodes
Inc.MOSFET .MODEL DI_BSS123 NMOS（LEVEL = 1 VTO = 1.00 KP = 6.37m GAMMA = 1.24
+ PHI = .75 LAMBDA = 625u RD = 0.140 RS = 0.140
+ IS = 85.0f PB = 0.800 MJ = 0.460 CBD = 19.8p
+ CBS = 23.7p CGSO = 36.0n CGDO = 30.0n CGBO = 124n
* -- Assumes default L = 100U W = 100U --
```

“Q2”，由“.subckt”建模的 BSS127S：

```
* BSS127S
*--- BSS127S Spice Model ---
.SUBCKT BSS127S 10 20 30
* TERMINALS: D G S
M1 1 2 3 3 NMOS L = 1E-006 W = 1E-006
RD 10 1 84.22
RS 30 3 0.001
RG 20 2 29
CGS 2 3 1.958E-011
EGD 12 0 2 1 1
VFB 14 0 0
FFB 2 1 VFB 1
CGD 13 14 2E-011
R1 13 0 1
D1 12 13 DLIM
DDG 15 14 DCGD
R2 12 15 1
D2 15 0 DLIM
DSD 3 10 DSUB
.MODEL NMOS NMOS LEVEL = 3 VMAX = 8E+005 ETA = 1E-012 VTO = 3.419
+ TOX = 6E-008 NSUB = 1E+016 KP = 0.127 U0 = 400 KAPPA = 1.044E-015
.MODEL DCGD D CJO = 1.135E-011 VJ = 0.9232 M = 0.9816
.MODEL DSUB D IS = 2.294E-010 N = 1.601 RS = 0.1079 BV = 65
+ CJO = 1.956E-011 VJ = 1.514 M = 0.8171
.MODEL DLIM D IS = 0.0001
.ENDS
*Diodes BSS127S Spice Model v1.0 Last Revised 2012/6/6
```

上述两器件的元件编号均为“Q”；但“Q1”的 SPICE 前缀必须为“M”，“Q2”的 SPICE 前缀必须为“X”。

下表列出 SPICE 前缀及其对应电路元素的类型说明：

| 元素描述 |             仿真类型             |      适用类型      |               应用               |
| :------: | :------------------------------: | :----------------: | :------------------------------: |
|    A     |          XSpice代码模块          |     取决于型号     |       模拟、数字、混合信号       |
|    B     |          行为源和受控源          | Source±、Control±  |                                  |
|    C     |              电容类              | 由模型固定，无极性 |                                  |
|    D     |              二极管              |                    |                                  |
|    E     |       电压控电压源（VCVS）       | Source±，Control±  |           线性、非线性           |
|    F     |      电流控制电流源（CCCS）      | Source±、Vsrcname  | 线性，Vsrcname 用于开关外部电压源 |
|    G     |        压控电流源（VCCS）        | Source±，Control±  |           线性、非线性           |
|    H     |      电流控制电压源（CCVS）      | Source±、Vsrcname  | 线性，Vsrcname 用于开关外部电压源 |
|    I     |              电流源              |      Source±       |                                  |
|    J     |     结型场效应晶体管（JFET）     |       G D S        |                                  |
|    K     |        耦合电感（互感器）        |    考虑绕相相位    |                                  |
|    L     |               电感               | 由模型固定，无极性 |                                  |
|    M     |   金属氧化物场效应管（MOSFET）   |       G D S        |                                  |
|    N     |           GSS数字装置            |                    |                                  |
|    O     |            有损传输线            |      由型号定      |                                  |
|    P     |        耦合多股线（CPL）         |      由型号定      |                                  |
|    Q     |      双极结型晶体管（BJT）       |       C B E        |                                  |
|    R     |              电阻器              | 由模型固定，无极性 |                                  |
|    S     |           电压控制开关           | Switch±、Control±  |                                  |
|    T     |            无损传输线            |     由型号固定     |                                  |
|    U     |         均布电阻电容线路         |     由型号固定     |                                  |
|    V     |              电压源              |      Source±       |                                  |
|    W     |           电流控制开关           | Switch±、Vsrcname  |  Vsrcname 用于开关外部电压源     |
|    X     |              子电路              |    取决于subckt    |                                  |
|    Y     |       单有损传输线（TXL）        |     由型号固定     |                                  |
|    Z     | 金属半导体场效应晶体管（MESFET） |       G D S        |                                  |

有关 LTspice 中电路元件的更多信息，请参考：[http://ltwiki.org/index.php?title=Main_Page](http://ltwiki.org/index.php?title=Main_Page)

## PCB 与 SPICE 引脚号

嘉立创 EDA 的仿真模型包含两种引脚编号，分别为封装引脚与仿真引脚。

原则上两者应保持一致；但由于仿真模型数据的特殊性，仿真模型对应的器件封装引脚可能存在差异。

1. 封装引脚：指实际器件的引脚编号，通常为固定值，以便原理图器件符号的引脚映射至 PCB 封装的引脚，从而确保 PCB 上电气连接的一致性。

2. 仿真引脚：在 SPICE 中，为更准确地描述器件内部的逻辑，对器件引脚进行定义；这些编号映射至仿真模型或对应子电路中的相应功能。

以下以一个具有 5 个引脚的简化运算放大器为例说明：

在仿真网表中，此类运算放大器的子电路调用可能如下：

`X1 input feedback vpos vneg output opamp_ANF01`

其中，`X1` 是电路中子电路的实例名称；

`input feedback vpos vneg output` 为调用（包含）子电路的网络名；

`opamp_ANF01` 为被调用的子电路名称。

需确保子电路调用的网络名称引脚顺序与 SPICE 仿真模型的引脚顺序保持一致。

大多数运算放大器子电路的仿真引脚顺序如下例所示：

```
*opamp_ANF01 * * Simplified behavioural opamp
*Node assignments
*                  noninverting input
*                  |   inverting input
*                  |   |   positive supply
*                  |   |   |   negative supply
*                  |   |   |   |   output
*                  |   |   |   |   |
*spice pin order:  1   2   3   4   5
*                  |   |   |   |   |
.subckt opampANF01 inp inn vcc vee out ; these are the netnames
* used internally to the
* subcircuit.
V=(TANH((V(inp)-V(inn)){Avol}2/(V(vcc)-V(vee)))(V(vcc)-V(vee)) + +(V(vcc)+V(vee)))/2
.ends opampANF01
```

仿真模型中子电路调用的引脚顺序需与“.subckt”定义中的引脚顺序完全一致。

以下四种运算放大器封装的引脚标号与上述例子的子电路引脚排列对应关系如下：

| 类型A | 引脚序号 | 仿真序号 |     | 类型B | 引脚序号 | 仿真序号 |     | 类型C | 引脚序号 | 仿真序号 |     | 类型D | 引脚序号 | 仿真序号 |
| :---: | :------: | :------: | --- | :---: | :------: | :------: | --- | :---: | :------: | :------: | --- | :---: | :------: | :------: |
|  OUT  |    1     |    5     |     |  OUT  |    7     |    5     |     |  OUT  |    8     |    5     |     |  OUT  |    14    |    5     |
|  IN-  |    2     |    2     |     |  IN-  |    6     |    2     |     |  IN-  |    9     |    2     |     |  IN-  |    13    |    2     |
|  IN+  |    3     |    1     |     |  IN+  |    5     |    1     |     |  IN+  |    10    |    1     |     |  IN+  |    12    |    1     |
|  V+   |    4     |    3     |     |  V+   |    4     |    3     |     |  V+   |    4     |    3     |     |  V+   |    4     |    3     |
|  V-   |    5     |    4     |     |  V-   |    11    |    4     |     |  V-   |    11    |    4     |     |  V-   |    11    |    4     |

实际封装的引脚标号反映器件的引脚定义；对于各类运算放大器，其仿真引脚顺序一致。

在实际仿真过程中，如结果与预期存在偏差，建议检查引脚定义是否匹配；必要时可在仿真图中调整器件引脚对应的仿真编号。
