# 裁剪

嘉立创EDA支持裁剪功能，方便用户快速编辑线条、导线、区域。

**功能入口**：

- 顶部菜单栏 - 编辑 - 裁剪

![图 1](/storage/images/cn/pcb/edit-split/edit-split_20250321_162654.jpg)

- 选中图元的右键菜单中选择`裁剪`功能

![图 7](/storage/images/cn/pcb/edit-split/edit-split_20250326_102443.jpg)

支持将`裁剪`功能显示到顶部工具栏

![图 0](/storage/images/cn/pcb/edit-split/edit-split_20250321_162417.jpg)

## 适用图元

支持对以下类型的图元进行裁剪操作：

- **线条类**：普通线条、导线
- **区域类**：
    - 板框
    - 铺铜区域
    - 填充区域
    - 挖槽区域
    - 禁止区域
    - 约束区域
    - 3D外壳相关区域（侧面挖槽区域、顶/底面挖槽区域、侧面实体、顶/底面实体）
- **特殊对象**：FPC补强板

## 使用方法

1. 选中目标图元，点击顶部工具栏或右键菜单中的“裁剪”工具。
2. 左键确定裁剪起点，并继续左键绘制裁剪路径。
3. 右键结束绘制，并自动完成图元的裁剪操作。支持连续裁剪。

![图 2](/storage/images/cn/pcb/edit-split/edit-split_20250326_100406.gif)

裁剪路径的绘制遵循当前布线拐角设置。

![图 4](/storage/images/cn/pcb/edit-split/edit-split_20250326_100645.jpg)

在裁剪过程中，支持按 TAB 键调整裁剪线宽。

![图 3](/storage/images/cn/pcb/edit-split/edit-split_20250326_100608.jpg)

对于区域的裁剪，裁剪路径经过的区域将被移除。若裁剪路径完全穿过某一区域，则该区域将被分割为多个独立区域。

![图 5](/storage/images/cn/pcb/edit-split/edit-split_20250326_101514.gif)

被锁定的图元无法进行裁剪操作。

![图 6](/storage/images/cn/pcb/edit-split/edit-split_20250326_101601.jpg)
