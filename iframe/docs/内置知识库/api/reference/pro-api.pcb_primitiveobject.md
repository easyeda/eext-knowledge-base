[Home](./pro-api.md) &gt; [PCB\_PrimitiveObject](./pro-api.pcb_primitiveobject.md)

# PCB\_PrimitiveObject class

PCB &amp; 封装 / 二进制内嵌对象图元类

## 签名

```typescript
declare class PCB_PrimitiveObject implements IPCB_PrimitiveAPI
```
**实现自：**[IPCB\_PrimitiveAPI](./pro-api.ipcb_primitiveapi.md)

## 备注

彩色丝印图像属于二进制内嵌对象，需要使用二进制内嵌对象的方法创建和修改

## 方法

<table><thead><tr><th>

方法名

</th><th>

修饰符

</th><th>

描述

</th></tr></thead>
<tbody><tr><td>

[create(layer, topLeftX, topLeftY, binaryData, width, height, rotation, mirror, fileName, primitiveLock)](./pro-api.pcb_primitiveobject.create.md)

</td><td>

</td><td>

**_(BETA)_** 创建二进制内嵌对象

</td></tr>
<tr><td>

[delete(primitiveIds)](./pro-api.pcb_primitiveobject.delete.md)

</td><td>

</td><td>

**_(BETA)_** 删除二进制内嵌对象

</td></tr>
<tr><td>

[get(primitiveIds)](./pro-api.pcb_primitiveobject.get.md)

</td><td>

</td><td>

**_(BETA)_** 获取二进制内嵌对象

</td></tr>
<tr><td>

[get(primitiveIds)](./pro-api.pcb_primitiveobject.get_1.md)

</td><td>

</td><td>

**_(BETA)_** 获取二进制内嵌对象

</td></tr>
<tr><td>

[getAll(layer, primitiveLock)](./pro-api.pcb_primitiveobject.getall.md)

</td><td>

</td><td>

**_(BETA)_** 获取所有二进制内嵌对象

</td></tr>
<tr><td>

[getAllPrimitiveId(layer, primitiveLock)](./pro-api.pcb_primitiveobject.getallprimitiveid.md)

</td><td>

</td><td>

**_(BETA)_** 获取所有二进制内嵌对象的图元 ID

</td></tr>
<tr><td>

[modify(primitiveId, property)](./pro-api.pcb_primitiveobject.modify.md)

</td><td>

</td><td>

**_(BETA)_** 修改二进制内嵌对象

</td></tr>
</tbody></table>
