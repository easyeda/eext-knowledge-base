---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [SCH\_Primitive](./pro-api.sch_primitive.md) &gt; [getPrimitiveByPrimitiveId](./pro-api.sch_primitive.getprimitivebyprimitiveid.md)

# SCH\_Primitive.getPrimitiveByPrimitiveId() method

获取指定 ID 的图元的所有属性

## 签名

```typescript
getPrimitiveByPrimitiveId(id: string): Promise<ISCH_Primitive | undefined>;
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

id

</td><td>

string

</td><td>

图元 ID

</td></tr>
</tbody></table>

## 返回值

Promise&lt;[ISCH\_Primitive](./pro-api.isch_primitive.md) \| undefined&gt;

图元的所有属性
