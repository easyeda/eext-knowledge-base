# PCB与原理图交互设计

‌&emsp;&emsp;‌嘉立创EDA的PCB与原理图交互设计主要通过交叉选择和窗口排列实现，能够迅速完成元器件的合理布局，显著提升PCB设计效率。

- 交叉选择（快捷键：Shift+X）

‌&emsp;&emsp;在同一板子下，点击选择中原理图或PCB的元件后，使用设计-交叉选择，原理图和PCB中的这个元件会相互跳转高亮显示定位，快速找到其位置，无需来回查看。

<center><img src="/storage/images/zh-hans/design-production/pcb-design/knowledge-point/pcb-sch-interactive-design/pcb-sch-interactive-design_20251128_100212.png"  width="250"></center>

- 布局传递（快捷键：Ctrl+Shift+X）

‌&emsp;&emsp;布局传递功能跟交叉选择类似，区别在于使用布局传递只能在原理图选中后，传递到PCB；无法从PCB选中后，传递回原理图。还有原理图选中的器件布局传递后，到PCB的器件会悬浮在鼠标光标上，方便布局使用。

<center><img src="/storage/images/zh-hans/design-production/pcb-design/knowledge-point/pcb-sch-interactive-design/pcb-sch-interactive-design_20251128_104806.png"  width="1400"></center>

- 元件区域分布（快捷键：Shift+P）

‌&emsp;&emsp;框选中电路模块后，可使用"交叉选择"或“布局传递”进行快速定位，然后搭配使用“元件区域分布”功能，将模块分布到框选的矩形区域，方便后续查找与合理布局。

<center><img src="/storage/images/zh-hans/design-production/pcb-design/knowledge-point/pcb-sch-interactive-design/pcb-sch-interactive-design_20251128_103212.png"  width="1400"></center>

‌&emsp;&emsp;将此电路模块杂乱无序分散的元器件，快速分布到一个矩形区域里面去，方便后续元器件进行合理布局。

<center><img src="/storage/images/zh-hans/design-production/pcb-design/knowledge-point/pcb-sch-interactive-design/pcb-sch-interactive-design_20251128_103456.png"  width="600"></center>

- 交叉选择模式

‌&emsp;&emsp;勾选了交叉选择模式后，可以点击“视图-窗口排列”，选择窗口排列模式，可以将同工程的原理图和PCB，同时间同屏幕同一个窗口显示出来。

<center><img src="/storage/images/zh-hans/design-production/pcb-design/knowledge-point/pcb-sch-interactive-design/pcb-sch-interactive-design_20251128_101300.png"  width="400"></center>

‌&emsp;&emsp;这里，先提前打开好同一个工程的原理图和PCB，然后窗口排列-垂直平铺，在设计里面，勾选了“交叉选择模式”，此时框选中的器件，会实时交互高亮显示出来，方便快速设计PCB，提升设计效率。

<center><img src="/storage/images/zh-hans/design-production/pcb-design/knowledge-point/pcb-sch-interactive-design/pcb-sch-interactive-design_20251128_102324.png"  width="1400"></center>
