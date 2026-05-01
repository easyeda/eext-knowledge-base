# 引脚延迟管理器

嘉立创EDA支持设置焊盘封装长度，引脚延迟管理器可实现对 PCB 中元件焊盘引脚长度的批量管理。

**功能入口**：

- 顶部菜单栏 - 工具 - 引脚延迟管理器

![图 0](/storage/images/cn/pcb/tool-pin-delay-manager/tool-pin-delay-manager_20250401_152033.jpg)

## 使用方法

在引脚延迟管理器的左侧，选择需要编辑焊盘所属的元件，并支持通过筛选功能快速定位目标元件。

![图 1](/storage/images/cn/pcb/tool-pin-delay-manager/tool-pin-delay-manager_20250401_152256.jpg)

选中目标元件后，在右侧表格中查看该元件的焊盘引脚长度。表格支持直接编辑、复制及粘贴操作。

![图 2](/storage/images/cn/pcb/tool-pin-delay-manager/tool-pin-delay-manager_20250401_152956.jpg)

引脚长度数据支持导入和导出功能。点击左下角`导出`按钮，进入导出弹窗，选择所需元件位号即可完成数据导出。

![图 3](/storage/images/cn/pcb/tool-pin-delay-manager/tool-pin-delay-manager_20250401_153127.jpg)

编辑完成后，用户可在PCB界面中选中焊盘对象，并通过右侧属性栏查看已更新的引脚属性信息，同时支持在此处重新编辑引脚长度属性。

![图 2](/storage/images/cn/footprint/side-panel-left-pad/side-panel-left-pad_20250401_151209.jpg)

网络长度的计算、等长约束、差分对约束、焊盘对组范围以及误差的计算均会将引脚长度纳入考虑范围。

![图 4](/storage/images/cn/pcb/tool-pin-delay-manager/tool-pin-delay-manager_20250603_094542.jpg)
