---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [SCH\_PrimitivePolygon](./pro-api.sch_primitivepolygon.md) &gt; [delete](./pro-api.sch_primitivepolygon.delete.md)

# SCH\_PrimitivePolygon.delete() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

删除多边形

## 签名

```typescript
delete(primitiveIds: string | ISCH_PrimitivePolygon | Array<string> | Array<ISCH_PrimitivePolygon>): Promise<boolean>;
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

string \| [ISCH\_PrimitivePolygon](./pro-api.isch_primitivepolygon.md) \| Array&lt;string&gt; \| Array&lt;[ISCH\_PrimitivePolygon](./pro-api.isch_primitivepolygon.md)<!-- -->&gt;

</td><td>

多边形的图元 ID 或多边形图元对象

</td></tr>
</tbody></table>

## 返回值

Promise&lt;boolean&gt;

删除操作是否成功
