[Home](./pro-api.md) &gt; [PCB\_PrimitiveArc](./pro-api.pcb_primitivearc.md)

# PCB\_PrimitiveArc class

PCB &amp; 封装 / 圆弧线图元类

## 签名

```typescript
declare class PCB_PrimitiveArc implements IPCB_PrimitiveAPI
```
**实现自：**[IPCB\_PrimitiveAPI](./pro-api.ipcb_primitiveapi.md)

## 备注

直线和圆弧线均为导线，对应画布的线条走线和圆弧走线

## 方法

<table><thead><tr><th>

方法名

</th><th>

修饰符

</th><th>

描述

</th></tr></thead>
<tbody><tr><td>

[create(net, layer, startX, startY, endX, endY, arcAngle, lineWidth, interactiveMode, primitiveLock)](./pro-api.pcb_primitivearc.create.md)

</td><td>

</td><td>

**_(BETA)_** 创建圆弧线

</td></tr>
<tr><td>

[delete(primitiveIds)](./pro-api.pcb_primitivearc.delete.md)

</td><td>

</td><td>

**_(BETA)_** 删除圆弧线

</td></tr>
<tr><td>

[get(primitiveIds)](./pro-api.pcb_primitivearc.get.md)

</td><td>

</td><td>

**_(BETA)_** 获取圆弧线

</td></tr>
<tr><td>

[get(primitiveIds)](./pro-api.pcb_primitivearc.get_1.md)

</td><td>

</td><td>

**_(BETA)_** 获取圆弧线

</td></tr>
<tr><td>

[getAll(net, layer, primitiveLock)](./pro-api.pcb_primitivearc.getall.md)

</td><td>

</td><td>

**_(BETA)_** 获取所有圆弧线

</td></tr>
<tr><td>

[getAllPrimitiveId(net, layer, primitiveLock)](./pro-api.pcb_primitivearc.getallprimitiveid.md)

</td><td>

</td><td>

**_(BETA)_** 获取所有圆弧线的图元 ID

</td></tr>
<tr><td>

[modify(primitiveId, property)](./pro-api.pcb_primitivearc.modify.md)

</td><td>

</td><td>

**_(BETA)_** 修改圆弧线

</td></tr>
</tbody></table>
