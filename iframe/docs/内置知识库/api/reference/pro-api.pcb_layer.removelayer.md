---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [PCB\_Layer](./pro-api.pcb_layer.md) &gt; [removeLayer](./pro-api.pcb_layer.removelayer.md)

# PCB\_Layer.removeLayer() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

移除层

## 签名

```typescript
removeLayer(layer: TPCB_LayersOfCustom): Promise<boolean>;
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

[TPCB\_LayersOfCustom](./pro-api.tpcb_layersofcustom.md)

</td><td>

层

</td></tr>
</tbody></table>

## 返回值

Promise&lt;boolean&gt;

操作是否成功

## 备注

当前仅支持移除自定义层
