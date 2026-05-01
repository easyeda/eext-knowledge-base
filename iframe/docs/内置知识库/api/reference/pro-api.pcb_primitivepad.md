[Home](./pro-api.md) &gt; [PCB\_PrimitivePad](./pro-api.pcb_primitivepad.md)

# PCB\_PrimitivePad class

PCB &amp; 封装 / 焊盘图元类

## 签名

```typescript
declare class PCB_PrimitivePad implements IPCB_PrimitiveAPI
```
**实现自：**[IPCB\_PrimitiveAPI](./pro-api.ipcb_primitiveapi.md)

## 方法

<table><thead><tr><th>

方法名

</th><th>

修饰符

</th><th>

描述

</th></tr></thead>
<tbody><tr><td>

[create(layer, padNumber, x, y, rotation, pad, net, hole, holeOffsetX, holeOffsetY, holeRotation, metallization, padType, specialPad, solderMaskAndPasteMaskExpansion, heatWelding, primitiveLock)](./pro-api.pcb_primitivepad.create.md)

</td><td>

</td><td>

创建焊盘

</td></tr>
<tr><td>

[delete(primitiveIds)](./pro-api.pcb_primitivepad.delete.md)

</td><td>

</td><td>

**_(BETA)_** 删除焊盘

</td></tr>
<tr><td>

[get(primitiveIds)](./pro-api.pcb_primitivepad.get.md)

</td><td>

</td><td>

**_(BETA)_** 获取焊盘

</td></tr>
<tr><td>

[get(primitiveIds)](./pro-api.pcb_primitivepad.get_1.md)

</td><td>

</td><td>

**_(BETA)_** 获取焊盘

</td></tr>
<tr><td>

[getAll(layer, net, primitiveLock, padType)](./pro-api.pcb_primitivepad.getall.md)

</td><td>

</td><td>

**_(BETA)_** 获取所有焊盘

</td></tr>
<tr><td>

[getAllPrimitiveId(layer, net, primitiveLock, padType)](./pro-api.pcb_primitivepad.getallprimitiveid.md)

</td><td>

</td><td>

**_(BETA)_** 获取所有焊盘的图元 ID

</td></tr>
<tr><td>

[modify(primitiveId, property)](./pro-api.pcb_primitivepad.modify.md)

</td><td>

</td><td>

**_(BETA)_** 修改焊盘

</td></tr>
</tbody></table>
