---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [PCB\_PrimitivePad](./pro-api.pcb_primitivepad.md) &gt; [create](./pro-api.pcb_primitivepad.create.md)

# PCB\_PrimitivePad.create() method

创建焊盘

## 签名

```typescript
create(layer: TPCB_LayersOfPad, padNumber: string, x: number, y: number, rotation?: number, pad?: TPCB_PrimitivePadShape, net?: string, hole?: TPCB_PrimitivePadHole | null, holeOffsetX?: number, holeOffsetY?: number, holeRotation?: number, metallization?: boolean, padType?: EPCB_PrimitivePadType, specialPad?: TPCB_PrimitiveSpecialPadShape, solderMaskAndPasteMaskExpansion?: IPCB_PrimitiveSolderMaskAndPasteMaskExpansion | null, heatWelding?: IPCB_PrimitivePadHeatWelding | null, primitiveLock?: boolean): Promise<IPCB_PrimitivePad | undefined>;
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
<tr><td>

padNumber

</td><td>

string

</td><td>

焊盘编号

</td></tr>
<tr><td>

x

</td><td>

number

</td><td>

位置 X

</td></tr>
<tr><td>

y

</td><td>

number

</td><td>

位置 Y

</td></tr>
<tr><td>

rotation

</td><td>

number

</td><td>

_（可选）_ 旋转角度

</td></tr>
<tr><td>

pad

</td><td>

[TPCB\_PrimitivePadShape](./pro-api.tpcb_primitivepadshape.md)

</td><td>

_（可选）_ 焊盘外形，在特殊焊盘外形实现前，该参数必传

</td></tr>
<tr><td>

net

</td><td>

string

</td><td>

_（可选）_ 网络名称

</td></tr>
<tr><td>

hole

</td><td>

[TPCB\_PrimitivePadHole](./pro-api.tpcb_primitivepadhole.md) \| null

</td><td>

_（可选）_ 孔，`null` 标识无孔

</td></tr>
<tr><td>

holeOffsetX

</td><td>

number

</td><td>

_（可选）_ 孔偏移 X

</td></tr>
<tr><td>

holeOffsetY

</td><td>

number

</td><td>

_（可选）_ 孔偏移 Y

</td></tr>
<tr><td>

holeRotation

</td><td>

number

</td><td>

_（可选）_ 孔相对于焊盘的旋转角度

</td></tr>
<tr><td>

metallization

</td><td>

boolean

</td><td>

_（可选）_ 是否金属化孔壁

</td></tr>
<tr><td>

padType

</td><td>

[EPCB\_PrimitivePadType](./pro-api.epcb_primitivepadtype.md)

</td><td>

_（可选）_ 焊盘类型

</td></tr>
<tr><td>

specialPad

</td><td>

[TPCB\_PrimitiveSpecialPadShape](./pro-api.tpcb_primitivespecialpadshape.md)

</td><td>

_（可选）_ 特殊焊盘外形，当前暂未实现，请勿使用

</td></tr>
<tr><td>

solderMaskAndPasteMaskExpansion

</td><td>

[IPCB\_PrimitiveSolderMaskAndPasteMaskExpansion](./pro-api.ipcb_primitivesoldermaskandpastemaskexpansion.md) \| null

</td><td>

_（可选）_ 阻焊/助焊扩展，`null` 表示遵循规则

</td></tr>
<tr><td>

heatWelding

</td><td>

IPCB\_PrimitivePadHeatWelding \| null

</td><td>

_（可选）_ 热焊优化参数

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

Promise&lt;[IPCB\_PrimitivePad](./pro-api.ipcb_primitivepad.md) \| undefined&gt;

焊盘图元对象
