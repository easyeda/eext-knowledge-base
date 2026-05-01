---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [PCB\_PrimitiveRegion](./pro-api.pcb_primitiveregion.md) &gt; [create](./pro-api.pcb_primitiveregion.create.md)

# PCB\_PrimitiveRegion.create() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

创建区域

## 签名

```typescript
create(layer: TPCB_LayersOfRegion, complexPolygon: IPCB_Polygon, ruleType?: Array<EPCB_PrimitiveRegionRuleType>, regionName?: string, lineWidth?: number, primitiveLock?: boolean): Promise<IPCB_PrimitiveRegion | undefined>;
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

[TPCB\_LayersOfRegion](./pro-api.tpcb_layersofregion.md)

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

ruleType

</td><td>

Array&lt;[EPCB\_PrimitiveRegionRuleType](./pro-api.epcb_primitiveregionruletype.md)<!-- -->&gt;

</td><td>

_（可选）_ 区域规则类型

</td></tr>
<tr><td>

regionName

</td><td>

string

</td><td>

_（可选）_ 区域名称

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

Promise&lt;[IPCB\_PrimitiveRegion](./pro-api.ipcb_primitiveregion.md) \| undefined&gt;

区域图元对象
