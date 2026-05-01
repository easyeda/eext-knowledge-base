---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [PCB\_PrimitiveImage](./pro-api.pcb_primitiveimage.md) &gt; [delete](./pro-api.pcb_primitiveimage.delete.md)

# PCB\_PrimitiveImage.delete() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

删除图像

## 签名

```typescript
delete(primitiveIds: string | IPCB_PrimitiveImage | Array<string> | Array<IPCB_PrimitiveImage>): Promise<boolean>;
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

string \| [IPCB\_PrimitiveImage](./pro-api.ipcb_primitiveimage.md) \| Array&lt;string&gt; \| Array&lt;[IPCB\_PrimitiveImage](./pro-api.ipcb_primitiveimage.md)<!-- -->&gt;

</td><td>

图像的图元 ID 或图像图元对象

</td></tr>
</tbody></table>

## 返回值

Promise&lt;boolean&gt;

删除操作是否成功
