---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [PCB\_Layer](./pro-api.pcb_layer.md) &gt; [setLayerColorConfiguration](./pro-api.pcb_layer.setlayercolorconfiguration.md)

# PCB\_Layer.setLayerColorConfiguration() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

设置层颜色配置

## 签名

```typescript
setLayerColorConfiguration(colorConfiguration: EPCB_LayerColorConfiguration): Promise<boolean>;
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

colorConfiguration

</td><td>

[EPCB\_LayerColorConfiguration](./pro-api.epcb_layercolorconfiguration.md)

</td><td>

颜色配置

</td></tr>
</tbody></table>

## 返回值

Promise&lt;boolean&gt;

操作是否成功
