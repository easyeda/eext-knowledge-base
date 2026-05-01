---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [SCH\_PrimitiveAttribute](./pro-api.sch_primitiveattribute.md) &gt; [modify](./pro-api.sch_primitiveattribute.modify.md)

# SCH\_PrimitiveAttribute.modify() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

修改属性

## 签名

```typescript
modify(primitiveId: string | ISCH_PrimitiveAttribute, property: {
        x?: number | null;
        y?: number | null;
        rotation?: number | null;
        color?: string | null;
        fontName?: string | null;
        fontSize?: number | null;
        bold?: boolean | null;
        italic?: boolean | null;
        underLine?: boolean | null;
        alignMode?: ESCH_PrimitiveTextAlignMode | null;
        fillColor?: string | null;
        key?: string;
        value?: string;
        keyVisible?: boolean | null;
        valueVisible?: boolean | null;
    }): Promise<ISCH_PrimitiveAttribute | undefined>;
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

string \| [ISCH\_PrimitiveAttribute](./pro-api.isch_primitiveattribute.md)

</td><td>

图元 ID

</td></tr>
<tr><td>

property

</td><td>

{ x?: number \| null; y?: number \| null; rotation?: number \| null; color?: string \| null; fontName?: string \| null; fontSize?: number \| null; bold?: boolean \| null; italic?: boolean \| null; underLine?: boolean \| null; alignMode?: [ESCH\_PrimitiveTextAlignMode](./pro-api.esch_primitivetextalignmode.md) \| null; fillColor?: string \| null; key?: string; value?: string; keyVisible?: boolean \| null; valueVisible?: boolean \| null; }

</td><td>

修改参数

</td></tr>
</tbody></table>

## 返回值

Promise&lt;[ISCH\_PrimitiveAttribute](./pro-api.isch_primitiveattribute.md) \| undefined&gt;

属性图元对象
