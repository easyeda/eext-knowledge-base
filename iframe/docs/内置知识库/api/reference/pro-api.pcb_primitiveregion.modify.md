---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [PCB\_PrimitiveRegion](./pro-api.pcb_primitiveregion.md) &gt; [modify](./pro-api.pcb_primitiveregion.modify.md)

# PCB\_PrimitiveRegion.modify() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

修改区域

## 签名

```typescript
modify(primitiveId: string | IPCB_PrimitiveRegion, property: {
        layer?: TPCB_LayersOfRegion;
        complexPolygon?: IPCB_Polygon;
        ruleType?: Array<EPCB_PrimitiveRegionRuleType>;
        regionName?: string;
        lineWidth?: number;
        primitiveLock?: boolean;
    }): Promise<IPCB_PrimitiveRegion | undefined>;
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

primitiveId

</td><td>

string \| [IPCB\_PrimitiveRegion](./pro-api.ipcb_primitiveregion.md)

</td><td>

图元 ID

</td></tr>
<tr><td>

property

</td><td>

{ layer?: [TPCB\_LayersOfRegion](./pro-api.tpcb_layersofregion.md)<!-- -->; complexPolygon?: [IPCB\_Polygon](./pro-api.ipcb_polygon.md)<!-- -->; ruleType?: Array&lt;[EPCB\_PrimitiveRegionRuleType](./pro-api.epcb_primitiveregionruletype.md)<!-- -->&gt;; regionName?: string; lineWidth?: number; primitiveLock?: boolean; }

</td><td>

修改参数

</td></tr>
</tbody></table>

## 返回值

Promise&lt;[IPCB\_PrimitiveRegion](./pro-api.ipcb_primitiveregion.md) \| undefined&gt;

区域图元对象，`undefined` 表示修改失败
