---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [SCH\_PrimitiveAttribute](./pro-api.sch_primitiveattribute.md) &gt; [getAll](./pro-api.sch_primitiveattribute.getall.md)

# SCH\_PrimitiveAttribute.getAll() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

获取所有属性

## 签名

```typescript
getAll(parentPrimitiveId?: string): Promise<Array<ISCH_PrimitiveAttribute>>;
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

parentPrimitiveId

</td><td>

string

</td><td>

_（可选）_ 父图元 ID

</td></tr>
</tbody></table>

## 返回值

Promise&lt;Array&lt;[ISCH\_PrimitiveAttribute](./pro-api.isch_primitiveattribute.md)<!-- -->&gt;&gt;

属性图元对象数组

## 备注

不传递父图元 ID 将拿到图页中的所有属性图元
