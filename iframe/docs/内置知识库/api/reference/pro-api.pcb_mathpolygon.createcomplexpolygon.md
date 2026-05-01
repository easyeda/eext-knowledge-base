---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [PCB\_MathPolygon](./pro-api.pcb_mathpolygon.md) &gt; [createComplexPolygon](./pro-api.pcb_mathpolygon.createcomplexpolygon.md)

# PCB\_MathPolygon.createComplexPolygon() method

创建复杂多边形

## 签名

```typescript
createComplexPolygon(complexPolygon: TPCB_PolygonSourceArray | Array<TPCB_PolygonSourceArray> | IPCB_Polygon | Array<IPCB_Polygon>): IPCB_ComplexPolygon | undefined;
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

complexPolygon

</td><td>

[TPCB\_PolygonSourceArray](./pro-api.tpcb_polygonsourcearray.md) \| Array&lt;[TPCB\_PolygonSourceArray](./pro-api.tpcb_polygonsourcearray.md)<!-- -->&gt; \| [IPCB\_Polygon](./pro-api.ipcb_polygon.md) \| Array&lt;[IPCB\_Polygon](./pro-api.ipcb_polygon.md)<!-- -->&gt;

</td><td>

复杂多边形数据

</td></tr>
</tbody></table>

## 返回值

[IPCB\_ComplexPolygon](./pro-api.ipcb_complexpolygon.md) \| undefined

复杂多边形对象，`undefined` 表示数据不合法
