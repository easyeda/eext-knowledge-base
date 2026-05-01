---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [PCB\_PrimitiveRegion](./pro-api.pcb_primitiveregion.md) &gt; [delete](./pro-api.pcb_primitiveregion.delete.md)

# PCB\_PrimitiveRegion.delete() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

删除区域

## 签名

```typescript
delete(primitiveIds: string | IPCB_PrimitiveRegion | Array<string> | Array<IPCB_PrimitiveRegion>): Promise<boolean>;
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

string \| [IPCB\_PrimitiveRegion](./pro-api.ipcb_primitiveregion.md) \| Array&lt;string&gt; \| Array&lt;[IPCB\_PrimitiveRegion](./pro-api.ipcb_primitiveregion.md)<!-- -->&gt;

</td><td>

区域的图元 ID 或区域图元对象

</td></tr>
</tbody></table>

## 返回值

Promise&lt;boolean&gt;

删除操作是否成功
