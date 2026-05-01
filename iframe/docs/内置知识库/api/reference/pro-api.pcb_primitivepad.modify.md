---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [PCB\_PrimitivePad](./pro-api.pcb_primitivepad.md) &gt; [modify](./pro-api.pcb_primitivepad.modify.md)

# PCB\_PrimitivePad.modify() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

修改焊盘

## 签名

```typescript
modify(primitiveId: string | IPCB_PrimitivePad, property: {
        layer?: TPCB_LayersOfPad;
        padNumber?: string;
        x?: number;
        y?: number;
        rotation?: number;
        pad?: TPCB_PrimitivePadShape;
        net?: string;
        hole?: TPCB_PrimitivePadHole | null;
        holeOffsetX?: number;
        holeOffsetY?: number;
        holeRotation?: number;
        metallization?: boolean;
        specialPad?: TPCB_PrimitiveSpecialPadShape;
        solderMaskAndPasteMaskExpansion?: IPCB_PrimitiveSolderMaskAndPasteMaskExpansion | null;
        heatWelding?: IPCB_PrimitivePadHeatWelding | null;
        primitiveLock?: boolean;
    }): Promise<IPCB_PrimitivePad | undefined>;
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

string \| [IPCB\_PrimitivePad](./pro-api.ipcb_primitivepad.md)

</td><td>

图元 ID

</td></tr>
<tr><td>

property

</td><td>

{ layer?: [TPCB\_LayersOfPad](./pro-api.tpcb_layersofpad.md)<!-- -->; padNumber?: string; x?: number; y?: number; rotation?: number; pad?: [TPCB\_PrimitivePadShape](./pro-api.tpcb_primitivepadshape.md)<!-- -->; net?: string; hole?: [TPCB\_PrimitivePadHole](./pro-api.tpcb_primitivepadhole.md) \| null; holeOffsetX?: number; holeOffsetY?: number; holeRotation?: number; metallization?: boolean; specialPad?: [TPCB\_PrimitiveSpecialPadShape](./pro-api.tpcb_primitivespecialpadshape.md)<!-- -->; solderMaskAndPasteMaskExpansion?: [IPCB\_PrimitiveSolderMaskAndPasteMaskExpansion](./pro-api.ipcb_primitivesoldermaskandpastemaskexpansion.md) \| null; heatWelding?: IPCB\_PrimitivePadHeatWelding \| null; primitiveLock?: boolean; }

</td><td>

修改参数

</td></tr>
</tbody></table>

## 返回值

Promise&lt;[IPCB\_PrimitivePad](./pro-api.ipcb_primitivepad.md) \| undefined&gt;

焊盘图元对象
