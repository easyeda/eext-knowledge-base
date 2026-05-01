---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [PCB\_PrimitivePolyline](./pro-api.pcb_primitivepolyline.md) &gt; [get](./pro-api.pcb_primitivepolyline.get.md)

# PCB\_PrimitivePolyline.get() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

获取折线

## 签名

```typescript
get(primitiveIds: string): Promise<IPCB_PrimitivePolyline | undefined>;
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

折线的图元 ID，可以为字符串或字符串数组，如若为数组，则返回的也是数组

</td></tr>
</tbody></table>

## 返回值

Promise&lt;[IPCB\_PrimitivePolyline](./pro-api.ipcb_primitivepolyline.md) \| undefined&gt;

折线图元对象，`undefined` 表示获取失败
