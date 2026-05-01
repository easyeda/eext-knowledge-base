---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [PCB\_MathPolygon](./pro-api.pcb_mathpolygon.md) &gt; [createPolygon](./pro-api.pcb_mathpolygon.createpolygon.md)

# PCB\_MathPolygon.createPolygon() method

创建单多边形

## 签名

```typescript
createPolygon(polygon: TPCB_PolygonSourceArray): IPCB_Polygon | undefined;
```

## 参数名

<table><thead><tr><th>

参数

</th><th>

类型

</th><th>

描述

</th></tr></thead>
<tbody><tr><td>

polygon

</td><td>

[TPCB\_PolygonSourceArray](./pro-api.tpcb_polygonsourcearray.md)

</td><td>

单多边形数据

</td></tr>
</tbody></table>

## 返回值

[IPCB\_Polygon](./pro-api.ipcb_polygon.md) \| undefined

单多边形对象，`undefined` 表示数据不合法
