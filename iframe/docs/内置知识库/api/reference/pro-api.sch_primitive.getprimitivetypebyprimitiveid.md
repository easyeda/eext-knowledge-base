---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [SCH\_Primitive](./pro-api.sch_primitive.md) &gt; [getPrimitiveTypeByPrimitiveId](./pro-api.sch_primitive.getprimitivetypebyprimitiveid.md)

# SCH\_Primitive.getPrimitiveTypeByPrimitiveId() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

获取指定 ID 的图元的图元类型

## 签名

```typescript
getPrimitiveTypeByPrimitiveId(id: string): Promise<ESCH_PrimitiveType | undefined>;
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

Promise&lt;[ESCH\_PrimitiveType](./pro-api.esch_primitivetype.md) \| undefined&gt;

图元类型
