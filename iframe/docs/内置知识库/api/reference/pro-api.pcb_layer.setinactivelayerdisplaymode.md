---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [PCB\_Layer](./pro-api.pcb_layer.md) &gt; [setInactiveLayerDisplayMode](./pro-api.pcb_layer.setinactivelayerdisplaymode.md)

# PCB\_Layer.setInactiveLayerDisplayMode() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

设置非激活层展示模式

## 签名

```typescript
setInactiveLayerDisplayMode(displayMode?: EPCB_InactiveLayerDisplayMode): Promise<boolean>;
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

displayMode

</td><td>

[EPCB\_InactiveLayerDisplayMode](./pro-api.epcb_inactivelayerdisplaymode.md)

</td><td>

_（可选）_ 展示模式

</td></tr>
</tbody></table>

## 返回值

Promise&lt;boolean&gt;

是否设置成功
