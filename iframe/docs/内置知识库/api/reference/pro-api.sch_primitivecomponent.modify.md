---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [SCH\_PrimitiveComponent](./pro-api.sch_primitivecomponent.md) &gt; [modify](./pro-api.sch_primitivecomponent.modify.md)

# SCH\_PrimitiveComponent.modify() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

修改器件

## 签名

```typescript
modify(primitiveId: string | ISCH_PrimitiveComponent$1, property: {
        x?: number;
        y?: number;
        rotation?: number;
        mirror?: boolean;
        addIntoBom?: boolean;
        addIntoPcb?: boolean;
        designator?: string | null;
        name?: string | null;
        uniqueId?: string | null;
        manufacturer?: string | null;
        manufacturerId?: string | null;
        supplier?: string | null;
        supplierId?: string | null;
        otherProperty?: {
            [key: string]: string | number | boolean;
        };
    }): Promise<ISCH_PrimitiveComponent$1 | undefined>;
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

string \| ISCH\_PrimitiveComponent$1

</td><td>

图元 ID

</td></tr>
<tr><td>

property

</td><td>

\{ x?: number; y?: number; rotation?: number; mirror?: boolean; addIntoBom?: boolean; addIntoPcb?: boolean; designator?: string \| null; name?: string \| null; uniqueId?: string \| null; manufacturer?: string \| null; manufacturerId?: string \| null; supplier?: string \| null; supplierId?: string \| null; otherProperty?: \{ \[key: string\]: string \| number \| boolean; \}; \}

</td><td>

</td></tr>
</tbody></table>

## 返回值

Promise&lt;ISCH\_PrimitiveComponent$1 \| undefined&gt;

器件图元对象

## 备注

仅当器件类型为 [COMPONENT](./pro-api.esch_primitivecomponenttype.md) 时允许使用该方法进行修改
