---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [IPCB\_PrimitivePad](./pro-api.ipcb_primitivepad.md) &gt; [setState\_Hole](./pro-api.ipcb_primitivepad.setstate_hole.md)

# IPCB\_PrimitivePad.setState\_Hole() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

设置属性状态：孔

## 签名

```typescript
setState_Hole(hole: TPCB_PrimitivePadHole): IPCB_PrimitivePad;
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

hole

</td><td>

[TPCB\_PrimitivePadHole](./pro-api.tpcb_primitivepadhole.md)

</td><td>

焊盘钻孔

</td></tr>
</tbody></table>

## 返回值

[IPCB\_PrimitivePad](./pro-api.ipcb_primitivepad.md)

焊盘图元对象

## 备注

设置孔时将会联动设置部分其它属性状态：

1. 层将会强制切换到多层

本接口无法将孔设置为 `null`<!-- -->，如果想要移除孔属性，请使用 [setState\_Layer](./pro-api.ipcb_primitivepad.setstate_layer.md) 方法切换层为顶层或底层
