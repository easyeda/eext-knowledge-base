---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [PCB\_PrimitivePoured](./pro-api.pcb_primitivepoured.md) &gt; [delete](./pro-api.pcb_primitivepoured.delete.md)

# PCB\_PrimitivePoured.delete() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

删除覆铜填充

## 签名

```typescript
delete(primitiveIds: string | IPCB_PrimitivePoured | Array<string> | Array<IPCB_PrimitivePoured>): Promise<boolean>;
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

string \| [IPCB\_PrimitivePoured](./pro-api.ipcb_primitivepoured.md) \| Array&lt;string&gt; \| Array&lt;[IPCB\_PrimitivePoured](./pro-api.ipcb_primitivepoured.md)<!-- -->&gt;

</td><td>

覆铜填充的图元 ID 或覆铜填充图元对象

</td></tr>
</tbody></table>

## 返回值

Promise&lt;boolean&gt;

删除操作是否成功
