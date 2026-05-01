---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [SCH\_PrimitiveRectangle](./pro-api.sch_primitiverectangle.md) &gt; [delete](./pro-api.sch_primitiverectangle.delete.md)

# SCH\_PrimitiveRectangle.delete() method

删除矩形

## 签名

```typescript
delete(primitiveIds: string | ISCH_PrimitiveRectangle | Array<string> | Array<ISCH_PrimitiveRectangle>): Promise<boolean>;
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

primitiveIds

</td><td>

string \| [ISCH\_PrimitiveRectangle](./pro-api.isch_primitiverectangle.md) \| Array&lt;string&gt; \| Array&lt;[ISCH\_PrimitiveRectangle](./pro-api.isch_primitiverectangle.md)<!-- -->&gt;

</td><td>

矩形的图元 ID 或矩形图元对象

</td></tr>
</tbody></table>

## 返回值

Promise&lt;boolean&gt;

删除操作是否成功
