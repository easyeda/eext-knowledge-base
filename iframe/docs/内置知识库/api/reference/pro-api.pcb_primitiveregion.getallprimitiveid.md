---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [PCB\_PrimitiveRegion](./pro-api.pcb_primitiveregion.md) &gt; [getAllPrimitiveId](./pro-api.pcb_primitiveregion.getallprimitiveid.md)

# PCB\_PrimitiveRegion.getAllPrimitiveId() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

获取所有区域的图元 ID

## 签名

```typescript
getAllPrimitiveId(layer?: TPCB_LayersOfRegion, ruleType?: Array<EPCB_PrimitiveRegionRuleType>, primitiveLock?: boolean): Promise<Array<string>>;
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

_（可选）_ 层

</td></tr>
<tr><td>

ruleType

</td><td>

Array&lt;[EPCB\_PrimitiveRegionRuleType](./pro-api.epcb_primitiveregionruletype.md)<!-- -->&gt;

</td><td>

_（可选）_ 区域规则类型，只会匹配所有规则类型均一致的图元

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

Promise&lt;Array&lt;string&gt;&gt;

区域的图元 ID 数组
