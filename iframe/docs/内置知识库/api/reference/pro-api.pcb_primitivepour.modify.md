---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [PCB\_PrimitivePour](./pro-api.pcb_primitivepour.md) &gt; [modify](./pro-api.pcb_primitivepour.modify.md)

# PCB\_PrimitivePour.modify() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

修改覆铜边框

## 签名

```typescript
modify(primitiveId: string | IPCB_PrimitivePour, property: {
        net?: string;
        layer?: TPCB_LayersOfCopper;
        complexPolygon?: IPCB_Polygon;
        pourFillMethod?: EPCB_PrimitivePourFillMethod;
        preserveSilos?: boolean;
        pourName?: string;
        pourPriority?: number;
        lineWidth?: number;
        primitiveLock?: boolean;
    }): Promise<IPCB_PrimitivePour | undefined>;
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

string \| [IPCB\_PrimitivePour](./pro-api.ipcb_primitivepour.md)

</td><td>

图元 ID

</td></tr>
<tr><td>

property

</td><td>

{ net?: string; layer?: [TPCB\_LayersOfCopper](./pro-api.tpcb_layersofcopper.md)<!-- -->; complexPolygon?: [IPCB\_Polygon](./pro-api.ipcb_polygon.md)<!-- -->; pourFillMethod?: [EPCB\_PrimitivePourFillMethod](./pro-api.epcb_primitivepourfillmethod.md)<!-- -->; preserveSilos?: boolean; pourName?: string; pourPriority?: number; lineWidth?: number; primitiveLock?: boolean; }

</td><td>

修改参数

</td></tr>
</tbody></table>

## 返回值

Promise&lt;[IPCB\_PrimitivePour](./pro-api.ipcb_primitivepour.md) \| undefined&gt;

覆铜边框图元对象，`undefined` 表示修改失败
