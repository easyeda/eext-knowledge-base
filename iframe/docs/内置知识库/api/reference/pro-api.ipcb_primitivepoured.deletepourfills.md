---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [IPCB\_PrimitivePoured](./pro-api.ipcb_primitivepoured.md) &gt; [deletePourFills](./pro-api.ipcb_primitivepoured.deletepourfills.md)

# IPCB\_PrimitivePoured.deletePourFills() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

删除覆铜填充区域

## 签名

```typescript
deletePourFills(pourFillIds: IPCB_PrimitivePouredPourFill['id'] | Array<IPCB_PrimitivePouredPourFill['id']>): Promise<boolean>;
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

pourFillIds

</td><td>

[IPCB\_PrimitivePouredPourFill](./pro-api.ipcb_primitivepouredpourfill.md)<!-- -->\['id'\] \| Array&lt;[IPCB\_PrimitivePouredPourFill](./pro-api.ipcb_primitivepouredpourfill.md)<!-- -->\['id'\]&gt;

</td><td>

覆铜填充区域 ID

</td></tr>
</tbody></table>

## 返回值

Promise&lt;boolean&gt;

删除操作是否成功
