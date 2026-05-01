# PCB设计中的安全间距

‌&emsp;&emsp;**在PCB设计中，考虑到可制造性、电气安全性、可使用性等方面，会有各类间距要求需要遵守；包括导线到导线、导线到焊盘、过孔到导线、过孔到焊盘、电源爬电距离、铜皮到板框距离等等；**

‌&emsp;&emsp;下方是嘉立创EDA设计规则中默认的安全间距要求；在日常器件不密、板框较大的场合，通常都不需要修改规则；但当板框较小、器件较多且密集的适合，默认的间距规则就会成为设计阻碍，导致拉不出来线、产生drc报错。此时，可以尝试减少设计规则中安全间距、导线默认线宽等规则。注意，此时的修改一定是要在板厂的生产要求内，且留有一定余量，否则最终设计出来不能生产或次品率过高。

| <center><img src="/storage/images/zh-hans/design-production/pcb-design/knowledge-point/safety-spacing/safety-spacing_20250312_144928.png"  width="600"></center> | <center><img src="/storage/images/zh-hans/design-production/pcb-design/knowledge-point/safety-spacing/safety-spacing_20250312_145243.png"  width="600"></center> |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |

| <center><img src="/storage/images/zh-hans/design-production/pcb-design/knowledge-point/safety-spacing/safety-spacing_20250312_145305.png"  width="600"></center> | <center><img src="/storage/images/zh-hans/design-production/pcb-design/knowledge-point/safety-spacing/safety-spacing_20250312_145324.png"  width="600"></center> |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |

‌&emsp;&emsp;对于不同的板厂，极限生产工艺是不一样的，此处以嘉立创PCB板厂为例给大家介绍；

- 常规PCB通常是2层、4层且铜厚1oz居多，此时最小线宽线距为4mil或3.5mil；注意，这里是“**最小**”，在实际项目设计过程中，不应挑战工艺极限，通常≤6mil；已经足够满足绝大多少项目设计需求了；

<center><img src="/storage/images/zh-hans/design-production/pcb-design/knowledge-point/safety-spacing/safety-spacing_20250312_150311.png"  width="1300" style="border:2px solid gray"></center>

- 常规PCB设计中，常用过孔孔径有，8/16mil，10/20mil，12/24mil，11.8/19.7mil，13.8/27.6mil，23.6/39.4mil；在实际项目实际过程中，不建议随意改变过孔尺寸，因为工厂钻头都是有固定大小的，当设计尺寸不符合实际钻头尺寸时，切割就会有误差，可能影响不良率；同时免费打样过孔应大于11.8/17.7mil。

<center><img src="/storage/images/zh-hans/design-production/pcb-design/knowledge-point/safety-spacing/safety-spacing_20250312_150956.png"  width="1300" style="border:2px solid gray"></center>

- 20H规则：将电源层相对于地层内缩，使电场只只在接地层的范围内传导。其中，一个 H（电源和地之间的介质厚度）为单位，内缩 20H 可将 70%的电场
  限制在接地层边沿内。若内缩 100H 则可将 98%的电场限制在内。一般，在 PCB 设计时把电源层比地层内缩 1mm，或者必须≥20mil，优先 40mil，基本就可以满足 20H 的原则。当然，这是建立在内缩后GND平面仍然完整的前提下，若内缩后导致GND平面不完成或有割裂，则需减少内缩距离。

<center><img src="/storage/images/zh-hans/design-production/pcb-design/knowledge-point/safety-spacing/safety-spacing_20250312_153459.png"  width="1300" style="border:2px solid gray"></center>
