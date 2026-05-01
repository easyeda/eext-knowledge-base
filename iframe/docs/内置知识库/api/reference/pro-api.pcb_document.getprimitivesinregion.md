---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [PCB\_Document](./pro-api.pcb_document.md) &gt; [getPrimitivesInRegion](./pro-api.pcb_document.getprimitivesinregion.md)

# PCB\_Document.getPrimitivesInRegion() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

获取区域内所有图元

## 签名

```typescript
getPrimitivesInRegion(left: number, right: number, top: number, bottom: number, leftToRight?: boolean): Promise<Array<IPCB_Primitive>>;
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

left

</td><td>

number

</td><td>

矩形框第一 X 坐标

</td></tr>
<tr><td>

right

</td><td>

number

</td><td>

矩形框第二 X 坐标

</td></tr>
<tr><td>

top

</td><td>

number

</td><td>

矩形框第一 Y 坐标

</td></tr>
<tr><td>

bottom

</td><td>

number

</td><td>

矩形框第二 Y 坐标

</td></tr>
<tr><td>

leftToRight

</td><td>

boolean

</td><td>

_（可选）_ 是否仅获取完全框选的图元，`false` 则触碰即获取

</td></tr>
</tbody></table>

## 返回值

Promise&lt;Array&lt;[IPCB\_Primitive](./pro-api.ipcb_primitive.md)<!-- -->&gt;&gt;

区域内所有图元
