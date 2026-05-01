---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [IPCB\_PrimitivePoured](./pro-api.ipcb_primitivepoured.md) &gt; [addSolderMaskFill](./pro-api.ipcb_primitivepoured.addsoldermaskfill.md)

# IPCB\_PrimitivePoured.addSolderMaskFill() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

添加：阻焊区域

## 签名

```typescript
addSolderMaskFill(pourFillId: IPCB_PrimitivePouredPourFill['id']): Promise<IPCB_PrimitiveFill | undefined>;
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

pourFillId

</td><td>

[IPCB\_PrimitivePouredPourFill](./pro-api.ipcb_primitivepouredpourfill.md)<!-- -->\['id'\]

</td><td>

</td></tr>
</tbody></table>

## 返回值

Promise&lt;[IPCB\_PrimitiveFill](./pro-api.ipcb_primitivefill.md) \| undefined&gt;

阻焊区域填充图元对象，无法转换或 ID 错误将返回 `undefined`
