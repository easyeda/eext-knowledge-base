---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [PCB\_Layer](./pro-api.pcb_layer.md) &gt; [selectLayer](./pro-api.pcb_layer.selectlayer.md)

# PCB\_Layer.selectLayer() method

选中图层

## 签名

```typescript
selectLayer(layer: TPCB_LayersInTheSelectable): Promise<boolean>;
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

[TPCB\_LayersInTheSelectable](./pro-api.tpcb_layersintheselectable.md)

</td><td>

层

</td></tr>
</tbody></table>

## 返回值

Promise&lt;boolean&gt;

操作是否成功，不存在指定层将返回 `false`
