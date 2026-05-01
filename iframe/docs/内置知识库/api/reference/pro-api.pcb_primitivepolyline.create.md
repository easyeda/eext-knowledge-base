---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [PCB\_PrimitivePolyline](./pro-api.pcb_primitivepolyline.md) &gt; [create](./pro-api.pcb_primitivepolyline.create.md)

# PCB\_PrimitivePolyline.create() method

创建折线

## 签名

```typescript
create(net: string, layer: TPCB_LayersOfLine, polygon: IPCB_Polygon, lineWidth?: number, primitiveLock?: boolean): Promise<IPCB_PrimitivePolyline | undefined>;
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

net

</td><td>

string

</td><td>

网络名称

</td></tr>
<tr><td>

layer

</td><td>

[TPCB\_LayersOfLine](./pro-api.tpcb_layersofline.md)

</td><td>

层

</td></tr>
<tr><td>

polygon

</td><td>

[IPCB\_Polygon](./pro-api.ipcb_polygon.md)

</td><td>

单多边形对象

</td></tr>
<tr><td>

lineWidth

</td><td>

number

</td><td>

_（可选）_ 线宽

</td></tr>
<tr><td>

primitiveLock

</td><td>

boolean

</td><td>

_（可选）_ 是否锁定

</td></tr>
</tbody></table>

## 返回值

Promise&lt;[IPCB\_PrimitivePolyline](./pro-api.ipcb_primitivepolyline.md) \| undefined&gt;

折线图元对象
