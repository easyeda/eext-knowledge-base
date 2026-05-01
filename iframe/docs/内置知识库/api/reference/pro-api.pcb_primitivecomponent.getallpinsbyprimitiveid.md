---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [PCB\_PrimitiveComponent](./pro-api.pcb_primitivecomponent.md) &gt; [getAllPinsByPrimitiveId](./pro-api.pcb_primitivecomponent.getallpinsbyprimitiveid.md)

# PCB\_PrimitiveComponent.getAllPinsByPrimitiveId() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

获取器件关联的所有焊盘

## 签名

```typescript
getAllPinsByPrimitiveId(primitiveId: string): Promise<Array<IPCB_PrimitiveComponentPad> | undefined>;
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

primitiveId

</td><td>

string

</td><td>

器件图元 ID

</td></tr>
</tbody></table>

## 返回值

Promise&lt;Array&lt;[IPCB\_PrimitiveComponentPad](./pro-api.ipcb_primitivecomponentpad.md)<!-- -->&gt; \| undefined&gt;

器件焊盘图元数组
