[Home](./pro-api.md) &gt; [SYS\_Unit](./pro-api.sys_unit.md)

# SYS\_Unit class

系统 / 单位类

## 签名

```typescript
declare class SYS_Unit
```

## 备注

控制系统数据单位与单位转换基础函数，当前原理图数据单位跨度等效为 `10mil` 或 `0.01inch`<!-- -->，PCB 数据单位跨度等效为 `mil`

## 方法

<table><thead><tr><th>

方法名

</th><th>

修饰符

</th><th>

描述

</th></tr></thead>
<tbody><tr><td>

[getFrontendDataUnit()](./pro-api.sys_unit.getfrontenddataunit.md)

</td><td>

</td><td>

**_(BETA)_** 获取 EDA 前端数据单位跨度

</td></tr>
<tr><td>

[inchToMil(inch, numberOfDecimals)](./pro-api.sys_unit.inchtomil.md)

</td><td>

</td><td>

单位转换：英寸到密尔

</td></tr>
<tr><td>

[inchToMm(inch, numberOfDecimals)](./pro-api.sys_unit.inchtomm.md)

</td><td>

</td><td>

单位转换：英寸到毫米

</td></tr>
<tr><td>

[milToInch(mil, numberOfDecimals)](./pro-api.sys_unit.miltoinch.md)

</td><td>

</td><td>

单位转换：密尔到英寸

</td></tr>
<tr><td>

[milToMm(mil, numberOfDecimals)](./pro-api.sys_unit.miltomm.md)

</td><td>

</td><td>

单位转换：密尔到毫米

</td></tr>
<tr><td>

[mmToInch(mm, numberOfDecimals)](./pro-api.sys_unit.mmtoinch.md)

</td><td>

</td><td>

单位转换：毫米到英寸

</td></tr>
<tr><td>

[mmToMil(mm, numberOfDecimals)](./pro-api.sys_unit.mmtomil.md)

</td><td>

</td><td>

单位转换：毫米到密尔

</td></tr>
</tbody></table>
