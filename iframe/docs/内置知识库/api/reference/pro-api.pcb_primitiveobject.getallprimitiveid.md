---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [PCB\_PrimitiveObject](./pro-api.pcb_primitiveobject.md) &gt; [getAllPrimitiveId](./pro-api.pcb_primitiveobject.getallprimitiveid.md)

# PCB\_PrimitiveObject.getAllPrimitiveId() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

获取所有二进制内嵌对象的图元 ID

## 签名

```typescript
getAllPrimitiveId(layer?: TPCB_LayersOfObject, primitiveLock?: boolean): Promise<Array<string>>;
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

[TPCB\_LayersOfObject](./pro-api.tpcb_layersofobject.md)

</td><td>

_（可选）_ 层

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

Promise&lt;Array&lt;string&gt;&gt;

二进制内嵌对象的图元 ID 数组
