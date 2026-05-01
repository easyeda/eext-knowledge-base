---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [SCH\_PrimitiveBus](./pro-api.sch_primitivebus.md) &gt; [delete](./pro-api.sch_primitivebus.delete.md)

# SCH\_PrimitiveBus.delete() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

删除总线

## 签名

```typescript
delete(primitiveIds: string | ISCH_PrimitiveBus | Array<string> | Array<ISCH_PrimitiveBus>): Promise<boolean>;
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

string \| [ISCH\_PrimitiveBus](./pro-api.isch_primitivebus.md) \| Array&lt;string&gt; \| Array&lt;[ISCH\_PrimitiveBus](./pro-api.isch_primitivebus.md)<!-- -->&gt;

</td><td>

总线的图元 ID 或总线图元对象

</td></tr>
</tbody></table>

## 返回值

Promise&lt;boolean&gt;

删除操作是否成功
