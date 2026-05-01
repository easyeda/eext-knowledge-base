---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [PCB\_PrimitivePour](./pro-api.pcb_primitivepour.md) &gt; [create](./pro-api.pcb_primitivepour.create.md)

# PCB\_PrimitivePour.create() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

创建覆铜边框

## 签名

```typescript
create(net: string, layer: TPCB_LayersOfCopper, complexPolygon: IPCB_Polygon, pourFillMethod?: EPCB_PrimitivePourFillMethod, preserveSilos?: boolean, pourName?: string, pourPriority?: number, lineWidth?: number, primitiveLock?: boolean): Promise<IPCB_PrimitivePour | undefined>;
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

[TPCB\_LayersOfCopper](./pro-api.tpcb_layersofcopper.md)

</td><td>

层

</td></tr>
<tr><td>

complexPolygon

</td><td>

[IPCB\_Polygon](./pro-api.ipcb_polygon.md)

</td><td>

复杂多边形对象

</td></tr>
<tr><td>

pourFillMethod

</td><td>

[EPCB\_PrimitivePourFillMethod](./pro-api.epcb_primitivepourfillmethod.md)

</td><td>

_（可选）_ 覆铜填充方法

</td></tr>
<tr><td>

preserveSilos

</td><td>

boolean

</td><td>

_（可选）_ 是否保留孤岛

</td></tr>
<tr><td>

pourName

</td><td>

string

</td><td>

_（可选）_ 覆铜名称

</td></tr>
<tr><td>

pourPriority

</td><td>

number

</td><td>

_（可选）_ 覆铜优先级

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

Promise&lt;[IPCB\_PrimitivePour](./pro-api.ipcb_primitivepour.md) \| undefined&gt;

覆铜边框图元对象
