[Home](./pro-api.md) &gt; [PCB\_PrimitiveComponent](./pro-api.pcb_primitivecomponent.md)

# PCB\_PrimitiveComponent class

PCB &amp; 封装 / 器件图元类

## 签名

```typescript
declare class PCB_PrimitiveComponent implements IPCB_PrimitiveAPI
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

[create(component, layer, x, y, rotation, primitiveLock)](./pro-api.pcb_primitivecomponent.create.md)

</td><td>

</td><td>

**_(BETA)_** 创建器件

</td></tr>
<tr><td>

[delete(primitiveIds)](./pro-api.pcb_primitivecomponent.delete.md)

</td><td>

</td><td>

**_(BETA)_** 删除器件

</td></tr>
<tr><td>

[get(primitiveIds)](./pro-api.pcb_primitivecomponent.get.md)

</td><td>

</td><td>

**_(BETA)_** 获取器件

</td></tr>
<tr><td>

[get(primitiveIds)](./pro-api.pcb_primitivecomponent.get_1.md)

</td><td>

</td><td>

**_(BETA)_** 获取器件

</td></tr>
<tr><td>

[getAll(layer, primitiveLock)](./pro-api.pcb_primitivecomponent.getall.md)

</td><td>

</td><td>

**_(BETA)_** 获取所有器件

</td></tr>
<tr><td>

[getAllPinsByPrimitiveId(primitiveId)](./pro-api.pcb_primitivecomponent.getallpinsbyprimitiveid.md)

</td><td>

</td><td>

**_(BETA)_** 获取器件关联的所有焊盘

</td></tr>
<tr><td>

[getAllPrimitiveId(layer, primitiveLock)](./pro-api.pcb_primitivecomponent.getallprimitiveid.md)

</td><td>

</td><td>

**_(BETA)_** 获取所有器件的图元 ID

</td></tr>
<tr><td>

[modify(primitiveId, property)](./pro-api.pcb_primitivecomponent.modify.md)

</td><td>

</td><td>

**_(BETA)_** 修改器件

</td></tr>
<tr><td>

[placeComponentWithMouse(component)](./pro-api.pcb_primitivecomponent.placecomponentwithmouse.md)

</td><td>

</td><td>

**_(BETA)_** 使用鼠标放置器件

</td></tr>
</tbody></table>
