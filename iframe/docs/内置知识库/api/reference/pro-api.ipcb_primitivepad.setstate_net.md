---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [IPCB\_PrimitivePad](./pro-api.ipcb_primitivepad.md) &gt; [setState\_Net](./pro-api.ipcb_primitivepad.setstate_net.md)

# IPCB\_PrimitivePad.setState\_Net() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

设置属性状态：网络

## 签名

```typescript
setState_Net(net?: string): IPCB_PrimitivePad;
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

net

</td><td>

string

</td><td>

_（可选）_ 网络名称

</td></tr>
</tbody></table>

## 返回值

[IPCB\_PrimitivePad](./pro-api.ipcb_primitivepad.md)

焊盘图元对象

## 备注

本接口仅在 PCB 编辑器可用，空字符串与 `undefined` 均被视为空网络
