# 钻孔表

## 钻孔表

当 PCB 设计规模比较大时，和工厂制造流程需要，PCB 通常会需要输出钻孔表进行校对 PCB 制造时的钻孔类型和位置。

嘉立创EDA专业版支持放置钻孔表。

**入口**：

-   顶部菜单 - 放置 - 钻孔表

点击后设置钻孔表的参数，再点击位置生成钻孔表数据。放置后默认放在钻孔图层。

![图 12](/storage/images/cn/pcb/place-drill-table/place-drill-table_20240621_172124.png)

钻孔表会根据当前 PCB 中出现的钻孔类型：金属化孔 PTH 和非金属化孔 NPTH，和钻孔大小进行统计，并且用不同的标识符号标识出来，导出 PDF 或 Gerber 时，钻孔图层可以跟随导出，对应的钻孔位置会显示对应的标识符号。

![图 13](/storage/images/en/pcb/place-drill-table/place-drill-table_20240621_172126.png)
