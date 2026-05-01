---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [SCH\_PrimitiveAttribute](./pro-api.sch_primitiveattribute.md) &gt; [getAllPrimitiveId](./pro-api.sch_primitiveattribute.getallprimitiveid.md)

# SCH\_PrimitiveAttribute.getAllPrimitiveId() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

获取所有属性的图元 ID

## 签名

```typescript
getAllPrimitiveId(parentPrimitiveId?: string): Promise<Array<string>>;
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

Promise&lt;Array&lt;string&gt;&gt;

属性的图元 ID 数组

## 备注

不传递父图元 ID 将拿到图页中的所有属性图元
