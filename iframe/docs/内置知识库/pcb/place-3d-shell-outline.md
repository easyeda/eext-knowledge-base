# 3D外壳-边框

嘉立创EDA专业版支持简单的 3D 外壳设计，方便用户快速绘制和制造一个简单的外壳。

如果在嘉立创EDA设计的简单 3D 外壳不满足需要，可以导出 3D 外壳时，选择导出 STEP 或者 OBJ 格式，在其他专业 3D 设计工具进行继续设计。

设计 3D 外壳，需要先绘制 3D 外壳的边框。

**操作入口：**

- 顶部菜单 - 放置 - 3D外壳-边框

![图 3](/storage/images/cn/pcb/place-3d-shell-outline/place-3d-shell-outline_20240621_172124.png)

绘制的图元会自动切换到 3D 外壳 - 边框层：

![图 4](/storage/images/cn/pcb/place-3d-shell-outline/place-3d-shell-outline_20240621_172125.png)

点击“3D外壳-边框”图元可以在右边属性面板设置其属性：

![图 11](/storage/images/cn/pcb/place-3d-shell-outline/place-3d-shell-outline_20240621_172126.png)

绘制后，可以在：顶部菜单 - 视图 - 3D外壳预览，进行同步预览，PCB修改的3D壳相关的参数会同步更新到 3D 预览里面。3D外壳预览会在新的独立窗口打开。

![图 10](/storage/images/cn/pcb/place-3d-shell-outline/place-3d-shell-outline_20240621_172127.png)

属性说明：
**类型**：上下壳、推盖。嘉立创EDA提供了两种外壳类型，暂时只有矩形外壳边框才支持推盖。
![图 6](/storage/images/en/pcb/place-3d-shell-outline/place-3d-shell-outline_20240621_172127.png)

**图层**：和其他线条一样，可以切换到其他图层，图层切换后，类型也会相应变化。

**推盖方向**：推盖类型时，推盖的方向。
![图 9](/storage/images/en/pcb/place-3d-shell-outline/place-3d-shell-outline_20240621_172128.png)

**外壳整体高度**：外壳的整体高度。比如上下壳合并后的高度。注意：该属性包含外壳厚度。

**PCB距外壳底面高度**：PCB板到底部外壳表面的高度，用于确定PCB的悬空高度。注意：该属性包含外壳厚度。

**下壳高度**：下壳的高度。上壳的高度会根据整体高度自动算出。

**外壳厚度**：外壳的厚度。建议大于等于 1.5mm，否则制造的时候不同材质和尺寸时容易断裂。具体可以查看三维猴的工艺要求：https://www.sanweihou.com/technicalColumnsDetails/b81edfabf9474537a552c53d9ac432cc

**上壳内壁高度**：上壳内壁的对位凹槽高度。
![图 7](/storage/images/en/pcb/place-3d-shell-outline/place-3d-shell-outline_20240621_172129.png)

**下壳内壁高度**：下壳内壁的对位凹槽高度。
