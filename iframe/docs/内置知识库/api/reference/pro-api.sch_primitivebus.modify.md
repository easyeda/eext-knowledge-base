---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [SCH\_PrimitiveBus](./pro-api.sch_primitivebus.md) &gt; [modify](./pro-api.sch_primitivebus.modify.md)

# SCH\_PrimitiveBus.modify() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

修改总线

## 签名

```typescript
modify(primitiveId: string | ISCH_PrimitiveBus, property: {
        busName?: string;
        line?: Array<number> | Array<Array<number>>;
        color?: string | null;
        lineWidth?: number | null;
        lineType?: ESCH_PrimitiveLineType | null;
    }): Promise<ISCH_PrimitiveBus | undefined>;
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

string \| [ISCH\_PrimitiveBus](./pro-api.isch_primitivebus.md)

</td><td>

总线的图元 ID 或总线图元对象

</td></tr>
<tr><td>

property

</td><td>

{ busName?: string; line?: Array&lt;number&gt; \| Array&lt;Array&lt;number&gt;&gt;; color?: string \| null; lineWidth?: number \| null; lineType?: [ESCH\_PrimitiveLineType](./pro-api.esch_primitivelinetype.md) \| null; }

</td><td>

修改参数

</td></tr>
</tbody></table>

## 返回值

Promise&lt;[ISCH\_PrimitiveBus](./pro-api.isch_primitivebus.md) \| undefined&gt;

总线图元对象
