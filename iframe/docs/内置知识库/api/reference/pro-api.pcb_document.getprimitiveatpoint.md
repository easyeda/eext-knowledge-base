---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [PCB\_Document](./pro-api.pcb_document.md) &gt; [getPrimitiveAtPoint](./pro-api.pcb_document.getprimitiveatpoint.md)

# PCB\_Document.getPrimitiveAtPoint() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

获取坐标点的图元

## 签名

```typescript
getPrimitiveAtPoint(x: number, y: number): Promise<IPCB_Primitive | undefined>;
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

x

</td><td>

number

</td><td>

坐标点 X

</td></tr>
<tr><td>

y

</td><td>

number

</td><td>

坐标点 Y

</td></tr>
</tbody></table>

## 返回值

Promise&lt;[IPCB\_Primitive](./pro-api.ipcb_primitive.md) \| undefined&gt;

坐标点的图元，如若坐标点无法找到图元，将返回 `undefined`

## 备注

本操作和前端鼠标点击操作类似，将会获取指定坐标点上的图元
