# 挖空

嘉立创EDA支持挖空功能，挖空功能适用对象：铺铜区域、内电层、填充区域、FPC补强板以及导线。

**功能入口**：

- 顶部菜单栏 - 编辑 - 挖空

![图 0](/storage/images/cn/pcb/edit-cutout/edit-cutout_20250326_113151.jpg)

- 选中图元的右键菜单中选择`挖空`功能

![图 1](/storage/images/cn/pcb/edit-cutout/edit-cutout_20250326_113241.jpg)

支持将挖空功能显示到顶部工具栏中。

![图 2](/storage/images/cn/pcb/edit-cutout/edit-cutout_20250326_113339.jpg)

支持矩形、圆形、多边形三种挖空方式。

![图 3](/storage/images/cn/pcb/edit-cutout/edit-cutout_20250326_113420.jpg)

## 使用方法

对铺铜区域和内电层进行挖空操作时，将在挖空位置生成对应禁止选项的禁止区域。

![图 4](/storage/images/cn/pcb/edit-cutout/edit-cutout_20250326_113556.gif)

![图 5](/storage/images/cn/pcb/edit-cutout/edit-cutout_20250326_113721.jpg)

若同时对多层的铺铜区域和内电层进行挖空操作，则每层均会生成一个禁止区域。

![图 6](/storage/images/cn/pcb/edit-cutout/edit-cutout_20250326_114301.gif)

对填充区域或 FPC 补强板进行挖空操作时，挖空位置将被裁剪掉。若挖空路径完全穿过某一区域，则该区域将被分割为多个独立区域。

![图 7](/storage/images/cn/pcb/edit-cutout/edit-cutout_20250326_115343.gif)

对导线进行挖空操作时，挖空位置将被裁剪掉。

![图 8](/storage/images/cn/pcb/edit-cutout/edit-cutout_20250326_115701.gif)

被锁定的图元无法进行裁剪操作。
