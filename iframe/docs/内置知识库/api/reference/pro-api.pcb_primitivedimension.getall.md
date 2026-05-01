---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [PCB\_PrimitiveDimension](./pro-api.pcb_primitivedimension.md) &gt; [getAll](./pro-api.pcb_primitivedimension.getall.md)

# PCB\_PrimitiveDimension.getAll() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

获取所有尺寸标注

## 签名

```typescript
getAll(layer?: TPCB_LayersOfDimension, primitiveLock?: boolean): Promise<Array<IPCB_PrimitiveDimension>>;
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

[TPCB\_LayersOfDimension](./pro-api.tpcb_layersofdimension.md)

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

Promise&lt;Array&lt;[IPCB\_PrimitiveDimension](./pro-api.ipcb_primitivedimension.md)<!-- -->&gt;&gt;

尺寸标注图元对象数组
