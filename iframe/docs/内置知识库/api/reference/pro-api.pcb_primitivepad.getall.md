---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [PCB\_PrimitivePad](./pro-api.pcb_primitivepad.md) &gt; [getAll](./pro-api.pcb_primitivepad.getall.md)

# PCB\_PrimitivePad.getAll() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

获取所有焊盘

## 签名

```typescript
getAll(layer?: TPCB_LayersOfPad, net?: string, primitiveLock?: boolean, padType?: EPCB_PrimitivePadType): Promise<Array<IPCB_PrimitivePad>>;
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

layer

</td><td>

[TPCB\_LayersOfPad](./pro-api.tpcb_layersofpad.md)

</td><td>

_（可选）_ 层

</td></tr>
<tr><td>

net

</td><td>

string

</td><td>

_（可选）_ 网络名称

</td></tr>
<tr><td>

primitiveLock

</td><td>

boolean

</td><td>

_（可选）_ 是否锁定

</td></tr>
<tr><td>

padType

</td><td>

[EPCB\_PrimitivePadType](./pro-api.epcb_primitivepadtype.md)

</td><td>

_(Optional)_

</td></tr>
</tbody></table>

## 返回值

Promise&lt;Array&lt;[IPCB\_PrimitivePad](./pro-api.ipcb_primitivepad.md)<!-- -->&gt;&gt;

焊盘图元对象数组
