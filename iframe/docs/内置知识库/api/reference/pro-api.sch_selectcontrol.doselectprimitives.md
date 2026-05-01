---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [SCH\_SelectControl](./pro-api.sch_selectcontrol.md) &gt; [doSelectPrimitives](./pro-api.sch_selectcontrol.doselectprimitives.md)

# SCH\_SelectControl.doSelectPrimitives() method

使用图元 ID 选中图元

## 签名

```typescript
doSelectPrimitives(primitiveIds: string | Array<string>): Promise<boolean>;
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

string \| Array&lt;string&gt;

</td><td>

图元 ID

</td></tr>
</tbody></table>

## 返回值

Promise&lt;boolean&gt;

操作是否成功
