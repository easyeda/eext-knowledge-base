---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [PCB\_Drc](./pro-api.pcb_drc.md) &gt; [getPadPairGroupMinWireLength](./pro-api.pcb_drc.getpadpairgroupminwirelength.md)

# PCB\_Drc.getPadPairGroupMinWireLength() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

获取焊盘对组最短导线长度

## 签名

```typescript
getPadPairGroupMinWireLength(padPairGroupName: string): Promise<Array<IPCB_PadPairMinWireLengthItem>>;
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

padPairGroupName

</td><td>

string

</td><td>

焊盘对组名称

</td></tr>
</tbody></table>

## 返回值

Promise&lt;Array&lt;[IPCB\_PadPairMinWireLengthItem](./pro-api.ipcb_padpairminwirelengthitem.md)<!-- -->&gt;&gt;

所有焊盘对的最短导线长度
