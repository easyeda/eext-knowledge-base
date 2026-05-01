---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [SCH\_PrimitiveArc](./pro-api.sch_primitivearc.md) &gt; [modify](./pro-api.sch_primitivearc.modify.md)

# SCH\_PrimitiveArc.modify() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

修改圆弧

## 签名

```typescript
modify(primitiveId: string | ISCH_PrimitiveArc, property: {
        startX?: number;
        startY?: number;
        referenceX?: number;
        referenceY?: number;
        endX?: number;
        endY?: number;
        color?: string | null;
        fillColor?: string | null;
        lineWidth?: number | null;
        lineType?: ESCH_PrimitiveLineType | null;
    }): Promise<ISCH_PrimitiveArc | undefined>;
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

string \| [ISCH\_PrimitiveArc](./pro-api.isch_primitivearc.md)

</td><td>

图元 ID

</td></tr>
<tr><td>

property

</td><td>

{ startX?: number; startY?: number; referenceX?: number; referenceY?: number; endX?: number; endY?: number; color?: string \| null; fillColor?: string \| null; lineWidth?: number \| null; lineType?: [ESCH\_PrimitiveLineType](./pro-api.esch_primitivelinetype.md) \| null; }

</td><td>

修改参数

</td></tr>
</tbody></table>

## 返回值

Promise&lt;[ISCH\_PrimitiveArc](./pro-api.isch_primitivearc.md) \| undefined&gt;

圆弧图元对象
