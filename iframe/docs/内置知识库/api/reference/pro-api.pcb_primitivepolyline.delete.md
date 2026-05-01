---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [PCB\_PrimitivePolyline](./pro-api.pcb_primitivepolyline.md) &gt; [delete](./pro-api.pcb_primitivepolyline.delete.md)

# PCB\_PrimitivePolyline.delete() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

删除折线

## 签名

```typescript
delete(primitiveIds: string | IPCB_PrimitivePolyline | Array<string> | Array<IPCB_PrimitivePolyline>): Promise<boolean>;
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

string \| [IPCB\_PrimitivePolyline](./pro-api.ipcb_primitivepolyline.md) \| Array&lt;string&gt; \| Array&lt;[IPCB\_PrimitivePolyline](./pro-api.ipcb_primitivepolyline.md)<!-- -->&gt;

</td><td>

折线的图元 ID 或折线图元对象

</td></tr>
</tbody></table>

## 返回值

Promise&lt;boolean&gt;

删除操作是否成功
