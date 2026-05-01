---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [SCH\_PrimitiveAttribute](./pro-api.sch_primitiveattribute.md) &gt; [get](./pro-api.sch_primitiveattribute.get.md)

# SCH\_PrimitiveAttribute.get() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

获取属性

## 签名

```typescript
get(primitiveIds: string): Promise<ISCH_PrimitiveAttribute | undefined>;
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

string

</td><td>

属性的图元 ID，可以为字符串或字符串数组，如若为数组，则返回的也是数组

</td></tr>
</tbody></table>

## 返回值

Promise&lt;[ISCH\_PrimitiveAttribute](./pro-api.isch_primitiveattribute.md) \| undefined&gt;

属性图元对象，`undefined` 表示获取失败
