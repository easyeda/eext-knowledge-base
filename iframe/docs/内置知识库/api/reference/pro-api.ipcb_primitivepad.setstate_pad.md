---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [IPCB\_PrimitivePad](./pro-api.ipcb_primitivepad.md) &gt; [setState\_Pad](./pro-api.ipcb_primitivepad.setstate_pad.md)

# IPCB\_PrimitivePad.setState\_Pad() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

设置属性状态：焊盘外形

## 签名

```typescript
setState_Pad(pad: TPCB_PrimitivePadShape): IPCB_PrimitivePad;
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

pad

</td><td>

[TPCB\_PrimitivePadShape](./pro-api.tpcb_primitivepadshape.md)

</td><td>

焊盘外形

</td></tr>
</tbody></table>

## 返回值

[IPCB\_PrimitivePad](./pro-api.ipcb_primitivepad.md)

焊盘图元对象

## 备注

设置焊盘外形时将会联动设置部分其它属性状态：

1. 特殊焊盘外形属性将被清空
