---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [PCB\_PrimitiveArc](./pro-api.pcb_primitivearc.md) &gt; [create](./pro-api.pcb_primitivearc.create.md)

# PCB\_PrimitiveArc.create() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

创建圆弧线

## 签名

```typescript
create(net: string, layer: TPCB_LayersOfLine, startX: number, startY: number, endX: number, endY: number, arcAngle: number, lineWidth?: number, interactiveMode?: EPCB_PrimitiveArcInteractiveMode, primitiveLock?: boolean): Promise<IPCB_PrimitiveArc | undefined>;
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

网络名称

</td></tr>
<tr><td>

layer

</td><td>

[TPCB\_LayersOfLine](./pro-api.tpcb_layersofline.md)

</td><td>

层

</td></tr>
<tr><td>

startX

</td><td>

number

</td><td>

起始位置 X

</td></tr>
<tr><td>

startY

</td><td>

number

</td><td>

起始位置 Y

</td></tr>
<tr><td>

endX

</td><td>

number

</td><td>

终止位置 X

</td></tr>
<tr><td>

endY

</td><td>

number

</td><td>

终止位置 Y

</td></tr>
<tr><td>

arcAngle

</td><td>

number

</td><td>

圆弧角度

</td></tr>
<tr><td>

lineWidth

</td><td>

number

</td><td>

_（可选）_ 线宽

</td></tr>
<tr><td>

interactiveMode

</td><td>

[EPCB\_PrimitiveArcInteractiveMode](./pro-api.epcb_primitivearcinteractivemode.md)

</td><td>

_（可选）_ 交互模式

</td></tr>
<tr><td>

primitiveLock

</td><td>

boolean

</td><td>

_（可选）_ 是否锁定

</td></tr>
</tbody></table>

## 返回值

Promise&lt;[IPCB\_PrimitiveArc](./pro-api.ipcb_primitivearc.md) \| undefined&gt;

圆弧线图元对象
