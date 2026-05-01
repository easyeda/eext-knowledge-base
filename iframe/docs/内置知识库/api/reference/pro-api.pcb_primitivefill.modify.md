---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [PCB\_PrimitiveFill](./pro-api.pcb_primitivefill.md) &gt; [modify](./pro-api.pcb_primitivefill.modify.md)

# PCB\_PrimitiveFill.modify() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

修改填充

## 签名

```typescript
modify(primitiveId: string | IPCB_PrimitiveFill, property: {
        layer?: TPCB_LayersOfFill;
        complexPolygon?: IPCB_Polygon;
        net?: string;
        fillMode?: EPCB_PrimitiveFillMode;
        lineWidth?: number;
        primitiveLock?: boolean;
    }): Promise<IPCB_PrimitiveFill | undefined>;
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

string \| [IPCB\_PrimitiveFill](./pro-api.ipcb_primitivefill.md)

</td><td>

图元 ID

</td></tr>
<tr><td>

property

</td><td>

{ layer?: [TPCB\_LayersOfFill](./pro-api.tpcb_layersoffill.md)<!-- -->; complexPolygon?: [IPCB\_Polygon](./pro-api.ipcb_polygon.md)<!-- -->; net?: string; fillMode?: [EPCB\_PrimitiveFillMode](./pro-api.epcb_primitivefillmode.md)<!-- -->; lineWidth?: number; primitiveLock?: boolean; }

</td><td>

修改参数

</td></tr>
</tbody></table>

## 返回值

Promise&lt;[IPCB\_PrimitiveFill](./pro-api.ipcb_primitivefill.md) \| undefined&gt;

填充图元对象，`undefined` 表示修改失败
