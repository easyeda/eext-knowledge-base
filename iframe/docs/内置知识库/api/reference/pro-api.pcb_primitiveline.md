[Home](./pro-api.md) &gt; [PCB\_PrimitiveLine](./pro-api.pcb_primitiveline.md)

# PCB\_PrimitiveLine class

PCB &amp; 封装 / 直线图元类

## 签名

```typescript
declare class PCB_PrimitiveLine implements IPCB_PrimitiveAPI
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

[create(net, layer, startX, startY, endX, endY, lineWidth, primitiveLock)](./pro-api.pcb_primitiveline.create.md)

</td><td>

</td><td>

创建直线

</td></tr>
<tr><td>

[delete(primitiveIds)](./pro-api.pcb_primitiveline.delete.md)

</td><td>

</td><td>

**_(BETA)_** 删除直线

</td></tr>
<tr><td>

[get(primitiveIds)](./pro-api.pcb_primitiveline.get.md)

</td><td>

</td><td>

**_(BETA)_** 获取直线

</td></tr>
<tr><td>

[get(primitiveIds)](./pro-api.pcb_primitiveline.get_1.md)

</td><td>

</td><td>

**_(BETA)_** 获取直线

</td></tr>
<tr><td>

[getAll(net, layer, primitiveLock)](./pro-api.pcb_primitiveline.getall.md)

</td><td>

</td><td>

**_(BETA)_** 获取所有直线

</td></tr>
<tr><td>

[getAllPrimitiveId(net, layer, primitiveLock)](./pro-api.pcb_primitiveline.getallprimitiveid.md)

</td><td>

</td><td>

**_(BETA)_** 获取所有直线的图元 ID

</td></tr>
<tr><td>

[modify(primitiveId, property)](./pro-api.pcb_primitiveline.modify.md)

</td><td>

</td><td>

**_(BETA)_** 修改直线

</td></tr>
</tbody></table>
