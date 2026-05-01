---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [SCH\_PrimitiveText](./pro-api.sch_primitivetext.md) &gt; [modify](./pro-api.sch_primitivetext.modify.md)

# SCH\_PrimitiveText.modify() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

修改文本

## 签名

```typescript
modify(primitiveId: string | ISCH_PrimitiveText, property: {
        x?: number;
        y?: number;
        content?: string;
        rotation?: number;
        textColor?: string | null;
        fontName?: string | null;
        fontSize?: number | null;
        bold?: boolean;
        italic?: boolean;
        underLine?: boolean;
        alignMode?: ESCH_PrimitiveTextAlignMode;
    }): Promise<ISCH_PrimitiveText | undefined>;
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

string \| [ISCH\_PrimitiveText](./pro-api.isch_primitivetext.md)

</td><td>

图元 ID

</td></tr>
<tr><td>

property

</td><td>

{ x?: number; y?: number; content?: string; rotation?: number; textColor?: string \| null; fontName?: string \| null; fontSize?: number \| null; bold?: boolean; italic?: boolean; underLine?: boolean; alignMode?: [ESCH\_PrimitiveTextAlignMode](./pro-api.esch_primitivetextalignmode.md)<!-- -->; }

</td><td>

修改参数

</td></tr>
</tbody></table>

## 返回值

Promise&lt;[ISCH\_PrimitiveText](./pro-api.isch_primitivetext.md) \| undefined&gt;

文本图元对象
