---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [IPCB\_PrimitivePad](./pro-api.ipcb_primitivepad.md) &gt; [setState\_Layer](./pro-api.ipcb_primitivepad.setstate_layer.md)

# IPCB\_PrimitivePad.setState\_Layer() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

设置属性状态：层

## 签名

```typescript
setState_Layer(layer: TPCB_LayersOfPad): IPCB_PrimitivePad;
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

层

</td></tr>
</tbody></table>

## 返回值

[IPCB\_PrimitivePad](./pro-api.ipcb_primitivepad.md)

焊盘图元对象

## 备注

设置层时将会联动设置部分其它属性状态：

1. 顶层与底层切换时：阻焊/助焊扩展属性将会跟随切换，数据值不变

2. 多层切换到单层时：判断切换到顶层还是底层，阻焊/助焊扩展属性将只保留指定层对应的数据；如若存在特殊焊盘，将转换为普通焊盘属性，并且只保留指定层对应的数据；与孔有关的属性将被重置到默认值

3. 单层切换到多层时：阻焊/助焊扩展属性将只保留阻焊扩展，并复制原数据应用于顶层和底层；焊盘钻孔属性将被赋指定值，长宽均为焊盘直径（焊盘为长圆形或正多边形）、宽（焊盘为矩形）的 60% 的长圆形（数据层面上是长圆形，实则是正圆形），如若焊盘为折线复杂多边形，则通过专用算法计算得出数据（通常比较抽象，建议后期修改）
