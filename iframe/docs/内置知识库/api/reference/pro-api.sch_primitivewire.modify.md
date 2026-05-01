---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [SCH\_PrimitiveWire](./pro-api.sch_primitivewire.md) &gt; [modify](./pro-api.sch_primitivewire.modify.md)

# SCH\_PrimitiveWire.modify() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

修改导线

## 签名

```typescript
modify(primitiveId: string | ISCH_PrimitiveWire, property: {
        line?: Array<number> | Array<Array<number>>;
        net?: string;
        color?: string | null;
        lineWidth?: number | null;
        lineType?: ESCH_PrimitiveLineType | null;
    }): Promise<ISCH_PrimitiveWire | undefined>;
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

string \| [ISCH\_PrimitiveWire](./pro-api.isch_primitivewire.md)

</td><td>

导线的图元 ID 或导线图元对象

</td></tr>
<tr><td>

property

</td><td>

{ line?: Array&lt;number&gt; \| Array&lt;Array&lt;number&gt;&gt;; net?: string; color?: string \| null; lineWidth?: number \| null; lineType?: [ESCH\_PrimitiveLineType](./pro-api.esch_primitivelinetype.md) \| null; }

</td><td>

修改参数

</td></tr>
</tbody></table>

## 返回值

Promise&lt;[ISCH\_PrimitiveWire](./pro-api.isch_primitivewire.md) \| undefined&gt;

导线图元对象
