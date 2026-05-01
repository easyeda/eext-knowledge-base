[Home](./pro-api.md) &gt; [IPCB\_PrimitivePad](./pro-api.ipcb_primitivepad.md)

# IPCB\_PrimitivePad class

焊盘图元

## 签名

```typescript
declare class IPCB_PrimitivePad implements IPCB_Primitive
```
**实现自：**[IPCB\_Primitive](./pro-api.ipcb_primitive.md)

## 备注

## 属性

<table><thead><tr><th>

属性名

</th><th>

修饰符

</th><th>

类型

</th><th>

描述

</th></tr></thead>
<tbody><tr><td>

[async](./pro-api.ipcb_primitivepad.async.md)

</td><td>

`protected`

</td><td>

boolean

</td><td>

异步

</td></tr>
<tr><td>

[heatWelding](./pro-api.ipcb_primitivepad.heatwelding.md)

</td><td>

`protected`

</td><td>

IPCB\_PrimitivePadHeatWelding \| null

</td><td>

热焊优化参数

</td></tr>
<tr><td>

[hole](./pro-api.ipcb_primitivepad.hole.md)

</td><td>

`protected`

</td><td>

[TPCB\_PrimitivePadHole](./pro-api.tpcb_primitivepadhole.md) \| null

</td><td>

孔

</td></tr>
<tr><td>

[holeOffsetX](./pro-api.ipcb_primitivepad.holeoffsetx.md)

</td><td>

`protected`

</td><td>

number

</td><td>

孔偏移 X

</td></tr>
<tr><td>

[holeOffsetY](./pro-api.ipcb_primitivepad.holeoffsety.md)

</td><td>

`protected`

</td><td>

number

</td><td>

孔偏移 Y

</td></tr>
<tr><td>

[holeRotation](./pro-api.ipcb_primitivepad.holerotation.md)

</td><td>

`protected`

</td><td>

number

</td><td>

孔相对于焊盘的旋转角度

</td></tr>
<tr><td>

[layer](./pro-api.ipcb_primitivepad.layer.md)

</td><td>

`protected`

</td><td>

[TPCB\_LayersOfPad](./pro-api.tpcb_layersofpad.md)

</td><td>

层

</td></tr>
<tr><td>

[metallization](./pro-api.ipcb_primitivepad.metallization.md)

</td><td>

`protected`

</td><td>

boolean

</td><td>

是否金属化孔壁

</td></tr>
<tr><td>

[net?](./pro-api.ipcb_primitivepad.net.md)

</td><td>

`protected`

</td><td>

string

</td><td>

_（可选）_ 网络名称

</td></tr>
<tr><td>

[pad?](./pro-api.ipcb_primitivepad.pad.md)

</td><td>

`protected`

</td><td>

[TPCB\_PrimitivePadShape](./pro-api.tpcb_primitivepadshape.md)

</td><td>

_（可选）_ 焊盘外形

</td></tr>
<tr><td>

[padNumber](./pro-api.ipcb_primitivepad.padnumber.md)

</td><td>

`protected`

</td><td>

string

</td><td>

焊盘编号

</td></tr>
<tr><td>

[padType](./pro-api.ipcb_primitivepad.padtype.md)

</td><td>

`protected`

</td><td>

[EPCB\_PrimitivePadType](./pro-api.epcb_primitivepadtype.md)

</td><td>

焊盘类型

</td></tr>
<tr><td>

[primitiveId?](./pro-api.ipcb_primitivepad.primitiveid.md)

</td><td>

`protected`

</td><td>

string

</td><td>

_（可选）_ 图元 ID

</td></tr>
<tr><td>

[primitiveLock](./pro-api.ipcb_primitivepad.primitivelock.md)

</td><td>

`protected`

</td><td>

boolean

</td><td>

是否锁定

</td></tr>
<tr><td>

[primitiveType](./pro-api.ipcb_primitivepad.primitivetype.md)

</td><td>

`protected`

`readonly`

</td><td>

[EPCB\_PrimitiveType](./pro-api.epcb_primitivetype.md)

</td><td>

图元类型

</td></tr>
<tr><td>

[rotation](./pro-api.ipcb_primitivepad.rotation.md)

</td><td>

`protected`

</td><td>

number

</td><td>

旋转角度

</td></tr>
<tr><td>

[solderMaskAndPasteMaskExpansion](./pro-api.ipcb_primitivepad.soldermaskandpastemaskexpansion.md)

</td><td>

`protected`

</td><td>

[IPCB\_PrimitiveSolderMaskAndPasteMaskExpansion](./pro-api.ipcb_primitivesoldermaskandpastemaskexpansion.md) \| null

</td><td>

阻焊/助焊扩展

</td></tr>
<tr><td>

[specialPad?](./pro-api.ipcb_primitivepad.specialpad.md)

</td><td>

`protected`

</td><td>

[TPCB\_PrimitiveSpecialPadShape](./pro-api.tpcb_primitivespecialpadshape.md)

</td><td>

_（可选）_ 特殊焊盘外形

</td></tr>
<tr><td>

[x](./pro-api.ipcb_primitivepad.x.md)

</td><td>

`protected`

</td><td>

number

</td><td>

位置 X

</td></tr>
<tr><td>

[y](./pro-api.ipcb_primitivepad.y.md)

</td><td>

`protected`

</td><td>

number

</td><td>

位置 Y

</td></tr>
</tbody></table>

## 方法

<table><thead><tr><th>

方法名

</th><th>

修饰符

</th><th>

描述

</th></tr></thead>
<tbody><tr><td>

[create()](./pro-api.ipcb_primitivepad.create.md)

</td><td>

</td><td>

**_(BETA)_** 在 PCB 画布中创建图元

</td></tr>
<tr><td>

[done()](./pro-api.ipcb_primitivepad.done.md)

</td><td>

</td><td>

**_(BETA)_** 将对图元的更改应用到画布

</td></tr>
<tr><td>

[getState\_HeatWelding()](./pro-api.ipcb_primitivepad.getstate_heatwelding.md)

</td><td>

</td><td>

获取属性状态：热焊优化参数

</td></tr>
<tr><td>

[getState\_Hole()](./pro-api.ipcb_primitivepad.getstate_hole.md)

</td><td>

</td><td>

获取属性状态：孔

</td></tr>
<tr><td>

[getState\_HoleOffsetX()](./pro-api.ipcb_primitivepad.getstate_holeoffsetx.md)

</td><td>

</td><td>

获取属性状态：孔偏移 X

</td></tr>
<tr><td>

[getState\_HoleOffsetY()](./pro-api.ipcb_primitivepad.getstate_holeoffsety.md)

</td><td>

</td><td>

获取属性状态：孔偏移 Y

</td></tr>
<tr><td>

[getState\_HoleRotation()](./pro-api.ipcb_primitivepad.getstate_holerotation.md)

</td><td>

</td><td>

获取属性状态：孔相对于焊盘的旋转角度

</td></tr>
<tr><td>

[getState\_Layer()](./pro-api.ipcb_primitivepad.getstate_layer.md)

</td><td>

</td><td>

获取属性状态：层

</td></tr>
<tr><td>

[getState\_Metallization()](./pro-api.ipcb_primitivepad.getstate_metallization.md)

</td><td>

</td><td>

获取属性状态：是否金属化孔壁

</td></tr>
<tr><td>

[getState\_Net()](./pro-api.ipcb_primitivepad.getstate_net.md)

</td><td>

</td><td>

获取属性状态：网络名称

</td></tr>
<tr><td>

[getState\_Pad()](./pro-api.ipcb_primitivepad.getstate_pad.md)

</td><td>

</td><td>

获取属性状态：焊盘外形

</td></tr>
<tr><td>

[getState\_PadNumber()](./pro-api.ipcb_primitivepad.getstate_padnumber.md)

</td><td>

</td><td>

获取属性状态：焊盘编号

</td></tr>
<tr><td>

[getState\_PadType()](./pro-api.ipcb_primitivepad.getstate_padtype.md)

</td><td>

</td><td>

获取属性状态：焊盘类型

</td></tr>
<tr><td>

[getState\_PrimitiveId()](./pro-api.ipcb_primitivepad.getstate_primitiveid.md)

</td><td>

</td><td>

获取属性状态：图元 ID

</td></tr>
<tr><td>

[getState\_PrimitiveLock()](./pro-api.ipcb_primitivepad.getstate_primitivelock.md)

</td><td>

</td><td>

获取属性状态：是否锁定

</td></tr>
<tr><td>

[getState\_PrimitiveType()](./pro-api.ipcb_primitivepad.getstate_primitivetype.md)

</td><td>

</td><td>

获取属性状态：图元类型

</td></tr>
<tr><td>

[getState\_Rotation()](./pro-api.ipcb_primitivepad.getstate_rotation.md)

</td><td>

</td><td>

获取属性状态：旋转角度

</td></tr>
<tr><td>

[getState\_SolderMaskAndPasteMaskExpansion()](./pro-api.ipcb_primitivepad.getstate_soldermaskandpastemaskexpansion.md)

</td><td>

</td><td>

获取属性状态：阻焊/助焊扩展

</td></tr>
<tr><td>

[getState\_SpecialPad()](./pro-api.ipcb_primitivepad.getstate_specialpad.md)

</td><td>

</td><td>

获取属性状态：特殊焊盘外形

</td></tr>
<tr><td>

[getState\_X()](./pro-api.ipcb_primitivepad.getstate_x.md)

</td><td>

</td><td>

获取属性状态：位置 X

</td></tr>
<tr><td>

[getState\_Y()](./pro-api.ipcb_primitivepad.getstate_y.md)

</td><td>

</td><td>

获取属性状态：位置 Y

</td></tr>
<tr><td>

[isAsync()](./pro-api.ipcb_primitivepad.isasync.md)

</td><td>

</td><td>

查询图元是否为异步图元

</td></tr>
<tr><td>

[reset()](./pro-api.ipcb_primitivepad.reset.md)

</td><td>

</td><td>

**_(BETA)_** 将异步图元重置为当前画布状态

</td></tr>
<tr><td>

[setState\_HeatWelding(heatWelding)](./pro-api.ipcb_primitivepad.setstate_heatwelding.md)

</td><td>

</td><td>

**_(BETA)_** 设置属性状态：热焊优化参数

</td></tr>
<tr><td>

[setState\_Hole(hole)](./pro-api.ipcb_primitivepad.setstate_hole.md)

</td><td>

</td><td>

**_(BETA)_** 设置属性状态：孔

</td></tr>
<tr><td>

[setState\_HoleOffsetX(holeOffsetX)](./pro-api.ipcb_primitivepad.setstate_holeoffsetx.md)

</td><td>

</td><td>

**_(BETA)_** 设置属性状态：孔偏移 X

</td></tr>
<tr><td>

[setState\_HoleOffsetY(holeOffsetY)](./pro-api.ipcb_primitivepad.setstate_holeoffsety.md)

</td><td>

</td><td>

**_(BETA)_** 设置属性状态：孔偏移 Y

</td></tr>
<tr><td>

[setState\_HoleRotation(holeRotation)](./pro-api.ipcb_primitivepad.setstate_holerotation.md)

</td><td>

</td><td>

**_(BETA)_** 设置属性状态：孔相对于焊盘的旋转角度

</td></tr>
<tr><td>

[setState\_Layer(layer)](./pro-api.ipcb_primitivepad.setstate_layer.md)

</td><td>

</td><td>

**_(BETA)_** 设置属性状态：层

</td></tr>
<tr><td>

[setState\_Metallization(metallization)](./pro-api.ipcb_primitivepad.setstate_metallization.md)

</td><td>

</td><td>

**_(BETA)_** 设置属性状态：是否金属化孔壁

</td></tr>
<tr><td>

[setState\_Net(net)](./pro-api.ipcb_primitivepad.setstate_net.md)

</td><td>

</td><td>

**_(BETA)_** 设置属性状态：网络

</td></tr>
<tr><td>

[setState\_Pad(pad)](./pro-api.ipcb_primitivepad.setstate_pad.md)

</td><td>

</td><td>

**_(BETA)_** 设置属性状态：焊盘外形

</td></tr>
<tr><td>

[setState\_PadNumber(padNumber)](./pro-api.ipcb_primitivepad.setstate_padnumber.md)

</td><td>

</td><td>

**_(BETA)_** 设置属性状态：焊盘编号

</td></tr>
<tr><td>

[setState\_PrimitiveLock(primitiveLock)](./pro-api.ipcb_primitivepad.setstate_primitivelock.md)

</td><td>

</td><td>

**_(BETA)_** 设置属性状态：是否锁定

</td></tr>
<tr><td>

[setState\_Rotation(rotation)](./pro-api.ipcb_primitivepad.setstate_rotation.md)

</td><td>

</td><td>

**_(BETA)_** 设置属性状态：旋转角度

</td></tr>
<tr><td>

[setState\_SolderMaskAndPasteMaskExpansion(solderMaskAndPasteMaskExpansion)](./pro-api.ipcb_primitivepad.setstate_soldermaskandpastemaskexpansion.md)

</td><td>

</td><td>

**_(BETA)_** 设置属性状态：阻焊/助焊扩展

</td></tr>
<tr><td>

[setState\_SpecialPad(specialPad)](./pro-api.ipcb_primitivepad.setstate_specialpad.md)

</td><td>

</td><td>

**_(BETA)_** 设置属性状态：特殊焊盘外形

</td></tr>
<tr><td>

[setState\_X(x)](./pro-api.ipcb_primitivepad.setstate_x.md)

</td><td>

</td><td>

**_(BETA)_** 设置属性状态：位置 X

</td></tr>
<tr><td>

[setState\_Y(y)](./pro-api.ipcb_primitivepad.setstate_y.md)

</td><td>

</td><td>

**_(BETA)_** 设置属性状态：位置 Y

</td></tr>
<tr><td>

[toAsync()](./pro-api.ipcb_primitivepad.toasync.md)

</td><td>

</td><td>

将图元转换为异步图元

</td></tr>
<tr><td>

[toSync()](./pro-api.ipcb_primitivepad.tosync.md)

</td><td>

</td><td>

将图元转换为同步图元

</td></tr>
</tbody></table>
