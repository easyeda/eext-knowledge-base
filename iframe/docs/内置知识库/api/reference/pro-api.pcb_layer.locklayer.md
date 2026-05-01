---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [PCB\_Layer](./pro-api.pcb_layer.md) &gt; [lockLayer](./pro-api.pcb_layer.locklayer.md)

# PCB\_Layer.lockLayer() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

锁定层

## 签名

```typescript
lockLayer(layer?: TPCB_LayersInTheSelectable | Array<TPCB_LayersInTheSelectable>): Promise<boolean>;
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

[TPCB\_LayersInTheSelectable](./pro-api.tpcb_layersintheselectable.md) \| Array&lt;[TPCB\_LayersInTheSelectable](./pro-api.tpcb_layersintheselectable.md)<!-- -->&gt;

</td><td>

_（可选）_ 层，如若不指定任何层则默认为所有层

</td></tr>
</tbody></table>

## 返回值

Promise&lt;boolean&gt;

操作是否成功
