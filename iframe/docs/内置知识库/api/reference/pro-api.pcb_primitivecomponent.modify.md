---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [PCB\_PrimitiveComponent](./pro-api.pcb_primitivecomponent.md) &gt; [modify](./pro-api.pcb_primitivecomponent.modify.md)

# PCB\_PrimitiveComponent.modify() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

修改器件

## 签名

```typescript
modify(primitiveId: string | IPCB_PrimitiveComponent, property: {
        layer?: TPCB_LayersOfComponent;
        x?: number;
        y?: number;
        rotation?: number;
        primitiveLock?: boolean;
        addIntoBom?: boolean;
        designator?: string | null;
        name?: string | null;
        uniqueId?: string | null;
        manufacturer?: string | null;
        manufacturerId?: string | null;
        supplier?: string | null;
        supplierId?: string | null;
        otherProperty?: {
            [key: string]: any;
        };
    }): Promise<IPCB_PrimitiveComponent | undefined>;
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

string \| [IPCB\_PrimitiveComponent](./pro-api.ipcb_primitivecomponent.md)

</td><td>

图元 ID

</td></tr>
<tr><td>

property

</td><td>

{ layer?: [TPCB\_LayersOfComponent](./pro-api.tpcb_layersofcomponent.md)<!-- -->; x?: number; y?: number; rotation?: number; primitiveLock?: boolean; addIntoBom?: boolean; designator?: string \| null; name?: string \| null; uniqueId?: string \| null; manufacturer?: string \| null; manufacturerId?: string \| null; supplier?: string \| null; supplierId?: string \| null; otherProperty?: { \[key: string\]: any; }; }

</td><td>

</td></tr>
</tbody></table>

## 返回值

Promise&lt;[IPCB\_PrimitiveComponent](./pro-api.ipcb_primitivecomponent.md) \| undefined&gt;

器件图元对象
