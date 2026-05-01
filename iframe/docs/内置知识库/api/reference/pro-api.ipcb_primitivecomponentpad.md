[Home](./pro-api.md) &gt; [IPCB\_PrimitiveComponentPad](./pro-api.ipcb_primitivecomponentpad.md)

# IPCB\_PrimitiveComponentPad class

器件焊盘图元

## 签名

```typescript
declare class IPCB_PrimitiveComponentPad extends IPCB_PrimitivePad
```
**扩展自：**[IPCB\_PrimitivePad](./pro-api.ipcb_primitivepad.md)

## 备注

器件焊盘图元是一个特殊的图元，它指的是在 PCB 画布上关联到封装的焊盘

你只能通过 [器件类的 getAllPinsByPrimitiveId 方法](./pro-api.pcb_primitivecomponent.getallpinsbyprimitiveid.md) 或 [器件图元的 getAllPads 方法](./pro-api.ipcb_primitivecomponent.getallpins.md) 获取到器件焊盘图元

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

[primitiveType](./pro-api.ipcb_primitivecomponentpad.primitivetype.md)

</td><td>

`protected`

`readonly`

</td><td>

[EPCB\_PrimitiveType.COMPONENT\_PAD](./pro-api.epcb_primitivetype.md)

</td><td>

图元类型

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

[done()](./pro-api.ipcb_primitivecomponentpad.done.md)

</td><td>

</td><td>

**_(BETA)_** 将对图元的更改应用到画布

</td></tr>
<tr><td>

[getConnectedPrimitives(onlyCentreConnection)](./pro-api.ipcb_primitivecomponentpad.getconnectedprimitives.md)

</td><td>

</td><td>

**_(BETA)_** 获取连接的图元

</td></tr>
<tr><td>

[getConnectedPrimitives(onlyCentreConnection)](./pro-api.ipcb_primitivecomponentpad.getconnectedprimitives_1.md)

</td><td>

</td><td>

</td></tr>
<tr><td>

[getState\_ParentComponentPrimitiveId()](./pro-api.ipcb_primitivecomponentpad.getstate_parentcomponentprimitiveid.md)

</td><td>

</td><td>

获取属性状态：父器件图元 ID

</td></tr>
<tr><td>

[setState\_ParentComponentPrimitiveId()](./pro-api.ipcb_primitivecomponentpad.setstate_parentcomponentprimitiveid.md)

</td><td>

</td><td>

设置属性状态：父器件图元 ID

</td></tr>
</tbody></table>
