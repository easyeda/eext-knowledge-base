---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [PCB\_PrimitiveVia](./pro-api.pcb_primitivevia.md) &gt; [modify](./pro-api.pcb_primitivevia.modify.md)

# PCB\_PrimitiveVia.modify() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

修改过孔

## 签名

```typescript
modify(primitiveId: string | IPCB_PrimitiveVia, property: {
        net?: string;
        x?: number;
        y?: number;
        holeDiameter?: number;
        diameter?: number;
        viaType?: EPCB_PrimitiveViaType;
        designRuleBlindViaName?: string | null;
        solderMaskExpansion?: IPCB_PrimitiveSolderMaskAndPasteMaskExpansion | null;
        primitiveLock?: boolean;
    }): Promise<IPCB_PrimitiveVia | undefined>;
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

string \| [IPCB\_PrimitiveVia](./pro-api.ipcb_primitivevia.md)

</td><td>

图元 ID

</td></tr>
<tr><td>

property

</td><td>

{ net?: string; x?: number; y?: number; holeDiameter?: number; diameter?: number; viaType?: [EPCB\_PrimitiveViaType](./pro-api.epcb_primitiveviatype.md)<!-- -->; designRuleBlindViaName?: string \| null; solderMaskExpansion?: [IPCB\_PrimitiveSolderMaskAndPasteMaskExpansion](./pro-api.ipcb_primitivesoldermaskandpastemaskexpansion.md) \| null; primitiveLock?: boolean; }

</td><td>

修改参数

</td></tr>
</tbody></table>

## 返回值

Promise&lt;[IPCB\_PrimitiveVia](./pro-api.ipcb_primitivevia.md) \| undefined&gt;

过孔图元对象
