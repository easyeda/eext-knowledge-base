---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [IPCB\_PrimitivePad](./pro-api.ipcb_primitivepad.md) &gt; [setState\_SpecialPad](./pro-api.ipcb_primitivepad.setstate_specialpad.md)

# IPCB\_PrimitivePad.setState\_SpecialPad() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

设置属性状态：特殊焊盘外形

## 签名

```typescript
setState_SpecialPad(specialPad: TPCB_PrimitiveSpecialPadShape): IPCB_PrimitivePad;
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

specialPad

</td><td>

[TPCB\_PrimitiveSpecialPadShape](./pro-api.tpcb_primitivespecialpadshape.md)

</td><td>

</td></tr>
</tbody></table>

## 返回值

[IPCB\_PrimitivePad](./pro-api.ipcb_primitivepad.md)

焊盘图元对象

## 备注

设置特殊焊盘外形时将会联动设置部分其它属性状态：

1. 焊盘外形属性将被清空
