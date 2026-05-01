---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [SCH\_PrimitiveRectangle](./pro-api.sch_primitiverectangle.md) &gt; [modify](./pro-api.sch_primitiverectangle.modify.md)

# SCH\_PrimitiveRectangle.modify() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

修改矩形

## 签名

```typescript
modify(primitiveId: string | ISCH_PrimitiveRectangle, property: {
        topLeftX?: number;
        topLeftY?: number;
        width?: number;
        height?: number;
        cornerRadius?: number;
        rotation?: number;
        color?: string | null;
        fillColor?: string | null;
        lineWidth?: number | null;
        lineType?: ESCH_PrimitiveLineType | null;
        fillStyle?: ESCH_PrimitiveFillStyle | null;
    }): Promise<ISCH_PrimitiveRectangle | undefined>;
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

string \| [ISCH\_PrimitiveRectangle](./pro-api.isch_primitiverectangle.md)

</td><td>

图元 ID

</td></tr>
<tr><td>

property

</td><td>

{ topLeftX?: number; topLeftY?: number; width?: number; height?: number; cornerRadius?: number; rotation?: number; color?: string \| null; fillColor?: string \| null; lineWidth?: number \| null; lineType?: [ESCH\_PrimitiveLineType](./pro-api.esch_primitivelinetype.md) \| null; fillStyle?: [ESCH\_PrimitiveFillStyle](./pro-api.esch_primitivefillstyle.md) \| null; }

</td><td>

修改参数

</td></tr>
</tbody></table>

## 返回值

Promise&lt;[ISCH\_PrimitiveRectangle](./pro-api.isch_primitiverectangle.md) \| undefined&gt;

矩形图元对象
