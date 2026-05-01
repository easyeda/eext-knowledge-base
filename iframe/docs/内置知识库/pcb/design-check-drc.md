# 检查DRC

DRC检查的目的是为了在所有的PCB画好后总体检查。设计完一个PCB后，需要将PCB进行规则检查DRC,DRC检查是依据自行设置的规则进行的例如自己设置的最小间距是8mil，那么实际PCB中，出现小于6mil的间距就会报错。

并不是DRC有错误的板子就不能使用，有些规则则是可以忽略的，例如丝印的错误不会影响电气属性。

## DRC检查

使用步骤：

-   顶部菜单 - 设计 - 检查DRC

![图 7](/storage/images/cn/pcb/design-check-drc/design-check-drc_20240621_172124.png)

检查的DRC结果在底部的DRC面板显示，对应的PCB也会有一个 X 的符号。鼠标选择单击错误点可在PCB高亮定位，双击会放大并定位错误点。

![图 13](/storage/images/cn/pcb/design-check-drc/design-check-drc_20240621_172125.png)

检查DRC后，DRC面板可以展示DRC错误类型，和具体每个错误具体信息。

![图 8](/storage/images/cn/pcb/design-check-drc/design-check-drc_20240621_172126.png)

支持定位对应的对象，和打开对应设计规则名称，方便快速修改规则。

**连接性错误**：这个是检测相同网络的对象没有完成导线等连接的错误。和画布的飞线检测一样。当铺铜孤岛时，铺铜填充也会参与显示在连接性错误，如果不影响使用，可进行忽略。

## 实时DRC

开启实时DRC时，能在绘制PCB过程中实时报告错误，显示黄色的 X 标识。目前不同的DRC错误标识均是 X 标识，暂不支持其他不同错误样式。

**操作步骤**：

-   顶部菜单 - 设计 - 实时DRC

![图 12](/storage/images/cn/pcb/design-check-drc/design-check-drc_20240621_172127.png)

开启实时DRC选项时，会弹窗提示是否执行一次DRC检查。

![图 66](/storage/images/cn/pcb/design-check-drc/design-check-drc_20240621_172128.png)

在违反了规则绘制PCB时，实时DRC会在PCB中会提示错误X标记。

![图 11](/storage/images/cn/pcb/design-check-drc/design-check-drc_20240621_172129.png)

**DRC线圈**：当绘制导线时，接触到其他网络图元时，图元会显示一圈安全间距的轮廓线圈，可以方便识别间距是多少。

![图 9](/storage/images/cn/pcb/design-check-drc/design-check-drc_20240621_172130.png)

提示：在开启实时DRC时，布线导线和铺铜区域不会提示DRC错误标识。

## 实时间距显示

在拖动元器件移动时，支持实时 DRC 的间距提示。

![图 1](/storage/images/cn/pcb/design-check-drc/design-check-drc_20260108_115108.png)

功能入口：设置 - PCB/封装 - DRC错误样式 - 显示元件间距

![图 0](/storage/images/cn/pcb/design-check-drc/design-check-drc_20260108_115034.png)

## 清除DRC错误

将DRC检查复位，清空画布的DRC错误标识。

入口：顶部菜单 - 设计 - 清除错误；

![图 10](/storage/images/cn/pcb/design-check-drc/design-check-drc_20240621_172131.png)

或底部面板 - DRC - 清除错误，即可把检查后的DRC清除复位。

![image-20211222170848573](/storage/images/cn/pcb/design-check-drc/design-check-drc_20240621_172132.png)

操作演示视频：https://www.bilibili.com/video/BV1dK411Z7GX/?spm_id_from=333.999.0.0
