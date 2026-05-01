---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [PCB\_PrimitiveFill](./pro-api.pcb_primitivefill.md) &gt; [create](./pro-api.pcb_primitivefill.create.md)

# PCB\_PrimitiveFill.create() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

创建填充

## 签名

```typescript
create(layer: TPCB_LayersOfFill, complexPolygon: IPCB_Polygon, net?: string, fillMode?: EPCB_PrimitiveFillMode, lineWidth?: number, primitiveLock?: boolean): Promise<IPCB_PrimitiveFill | undefined>;
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

layer

</td><td>

[TPCB\_LayersOfFill](./pro-api.tpcb_layersoffill.md)

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

net

</td><td>

string

</td><td>

_（可选）_ 网络名称

</td></tr>
<tr><td>

fillMode

</td><td>

[EPCB\_PrimitiveFillMode](./pro-api.epcb_primitivefillmode.md)

</td><td>

_（可选）_ 填充模式

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

Promise&lt;[IPCB\_PrimitiveFill](./pro-api.ipcb_primitivefill.md) \| undefined&gt;

填充图元对象
