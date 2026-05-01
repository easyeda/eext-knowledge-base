# 快速上手

嘉立创 EDA 专业版仿真功能支持 “Simulide” 与 “NGspice” 引擎。用户可按需求选择适用的引擎执行仿真。

## Simulide仿真引擎

引擎定位：入门级仿真，支持放置仪器仪表以实时分析电路。

### 操作步骤

1. 在已打开工程的左侧文件树中，右键选择“新建仿真”，创建仿真图页。

![图 0](/storage/images/cn/simulation/quick-start/quick-start_20251212_161403.png)

2. 在“新建仿真”弹窗中选择“Simulide”引擎。

![图 1](/storage/images/cn/simulation/quick-start/quick-start_20251212_161416.png)

3. 点击左侧面板“常用库”，在顶部栏选择“仿真”，在页面中查看常用仿真器件。

![图 2](/storage/images/cn/simulation/quick-start/quick-start_20251212_161437.png)

4. 点击“正弦电压源”并放置到画布；选中仿真器件后，右侧属性面板将显示电源的可编辑属性。

![图 3](/storage/images/cn/simulation/quick-start/quick-start_20251212_161529.png)

5. 点击 ”顶部菜单栏 - 放置 - 快捷器件“，使用已绑定仿真模型的器件组成仿真电路。

![图 4](/storage/images/cn/simulation/quick-start/quick-start_20251212_161552.png)

6. 单击已放置元件，在右侧“仿真属性”面板中修改属性值；后续仿真将依据这些属性进行分析。

![图 5](/storage/images/cn/simulation/quick-start/quick-start_20251212_195126.png)

7. 点击 ”顶部菜单栏 - 放置 - 仿真器件“，在器件弹窗中查找更多官方提供的仿真器件。

![图 6](/storage/images/cn/simulation/quick-start/quick-start_20251212_195141.png)

![图 7](/storage/images/cn/simulation/quick-start/quick-start_20251212_195148.png)

8. 这里我们搭建一个流水灯电路为例，点击 ”顶部菜单栏 - 仿真 - 运行“ 进行电路分析。

![图 8](/storage/images/cn/simulation/quick-start/quick-start_20251212_195202.png)

![图 10](/storage/images/cn/simulation/quick-start/quick-start_20251212_195342.gif)

9. 首次仿真需安装引擎

![图 11](/storage/images/cn/simulation/quick-start/quick-start_20251212_195408.png)

10. 在右侧“电路设置”面板，可配置电流动态效果和仿真速度。仿真步长为数据取值周期、最大非线性迭代次数为非线性器件的计算次数。

![图 12](/storage/images/cn/simulation/quick-start/quick-start_20251212_195419.png)

11. 点击 ”顶部菜单栏 - 放置 - 探针“ ，可放置“电压探针”“电流探针”“逻辑探针”，用于快速查看节点处实时数值或逻辑状态。

![图 13](/storage/images/cn/simulation/quick-start/quick-start_20251212_195432.png)

12. 在电路中放置电压、电流探针，开始仿真后将在探针旁显示实时电压、电流数值。

![图 14](/storage/images/cn/simulation/quick-start/quick-start_20251212_195527.gif)

13. 点击 ”顶部菜单栏 - 放置 - 仪器仪表 - 万用表“，将万用表接入电路；开始仿真后将根据万用表类型显示参数。

![图 15](/storage/images/cn/simulation/quick-start/quick-start_20251212_195540.png)

![图 16](/storage/images/cn/simulation/quick-start/quick-start_20251212_195619.gif)

14. 点击 顶部菜单栏 - 放置 - 仪器仪表 - 示波器，示波器包含底部四个信号通道（A、B、C、D）、右侧外部触发通道（Ext Trig）以及“GND”引脚。

![图 17](/storage/images/cn/simulation/quick-start/quick-start_20251212_195639.png)

![图 18](/storage/images/cn/simulation/quick-start/quick-start_20251212_195649.png)

15. 双击示波器图标，进入示波器波形弹窗，运行仿真分析时将看到信号波形。

![图 19](/storage/images/cn/simulation/quick-start/quick-start_20251212_195705.png)

## NGSpice仿真引擎

NGSpice 引擎定位为进阶级仿真，支持瞬态、交流等多种电路分析方式。

### 操作步骤

1. 在已打开工程的左侧文件树中，右键选择“新建仿真”，创建仿真图页。

![图 20](/storage/images/cn/simulation/quick-start/quick-start_20251212_195812.png)

2. 在“新建仿真”弹窗中选择“NGspice”引擎。

![图 21](/storage/images/cn/simulation/quick-start/quick-start_20251212_195825.png)

3. 仿真器件的放置参考上方教程，这里以三极管放大电路作为演示。

![图 22](/storage/images/cn/simulation/quick-start/quick-start_20251212_195836.png)

4. 点击运行仿真，NGspice 将显示电路探针结果到波形图图页（Waveform）。

![图 31](/storage/images/cn/simulation/quick-start/quick-start_20251212_201102.gif)

5. 在波形图页会根据探针决定输出的信号类型，在信号轴附近滚动鼠标将修改视图幅度。

![图 32](/storage/images/cn/simulation/quick-start/quick-start_20251212_201108.gif)

6. 点击 ”顶部菜单栏- 视图 - 适应全部“，可按照当前视图进行自适应波形。

![图 33](/storage/images/cn/simulation/quick-start/quick-start_20251212_201118.gif)

7. 右下角的 XY 表格将显示当前鼠标位置的数值。

![图 34](/storage/images/cn/simulation/quick-start/quick-start_20251212_201124.gif)

8. 在右侧属性面板支持修改波形颜色和显示状态。

![图 37](/storage/images/cn/simulation/quick-start/quick-start_20251212_201547.png)

9. 回到仿真图页， NGspice 支持三种仿真分析方式。
  - 瞬态分析：观察电路在时域中对变化信号（如开关、脉冲）的动态响应波形。
  - 交流分析：在频域中分析电路对不同频率小信号的频率响应特性。
  - 直流分析：系统地改变电压源或元件值，分析直流电压工作点的变化关系。

![图 36](/storage/images/cn/simulation/quick-start/quick-start_20251212_201247.png)

10. 点击顶部工具栏的仿真设置，能够在窗口中详细设置每种分析方式的具体参数。

![图 23](/storage/images/cn/simulation/quick-start/quick-start_20251212_200823.png)

![图 24](/storage/images/cn/simulation/quick-start/quick-start_20251212_200830.png)

11. 图示为交流分析波形图。

![图 25](/storage/images/cn/simulation/quick-start/quick-start_20251212_200841.png)

12. 图示为直流扫描波形图。

![图 26](/storage/images/cn/simulation/quick-start/quick-start_20251212_200851.png)

## 仿真模型

嘉立创EDA专业版支持基于NGSpice与Simulide的仿真模型创建与绑定功能，便于用户在电路设计过程中实现精确的仿真分析。

### 模型创建

- 功能入口：文件 - 新建 - 仿真模型

![图 27](/storage/images/cn/simulation/quick-start/quick-start_20251212_200922.png)

1. 在“模型名称”输入框中填写自定义模型名称；或点击“从文件加载”按钮导入本地模型文件。成功加载后，系统将自动解析并填充模型名称。
2. 在“模型类别”下拉菜单中选择对应的器件类型，初始状态默认为空。若通过文件加载模型，系统将根据模型内容自动识别并填入相应类别。
3. 在“模型引脚”字段中，需手动输入引脚映射关系，格式为“引脚编号=引脚名称”，多个引脚间以英文逗号分隔。示例：1=VIN+, 2=VIN-, 3=VOUT, 4=VCC, 5=VDD。当从文件加载时，EDA将依据子电路的引脚顺序自动填充该字段。

![图 28](/storage/images/cn/simulation/quick-start/quick-start_20251212_200937.png)

### 模型绑定

对于已创建的仿真模型，可在符号编辑界面完成模型绑定操作。

- 功能入口：底部库 - 选中器件右键 - 编辑符号

![图 29](/storage/images/cn/simulation/quick-start/quick-start_20251212_201006.png)

进入符号编辑页面后，点击左侧“库设计”面板中的“仿真”选项，即可进行NGSpice或Simulide模型的绑定配置。
只有完成仿真模型绑定的器件，才可被放置于仿真图纸中并参与后续仿真运算。

![图 30](/storage/images/cn/simulation/quick-start/quick-start_20251212_201017.png)
