---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [PCB\_Layer](./pro-api.pcb_layer.md) &gt; [modifyLayer](./pro-api.pcb_layer.modifylayer.md)

# PCB\_Layer.modifyLayer() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

修改图层属性

## 签名

```typescript
modifyLayer(layer: TPCB_LayersInTheSelectable, property: {
        name?: string;
        type?: TPCB_LayerTypesOfInnerLayer;
        color?: string;
        transparency?: number;
    }): Promise<boolean>;
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
<tr><td>

property

</td><td>

{ name?: string; type?: [TPCB\_LayerTypesOfInnerLayer](./pro-api.tpcb_layertypesofinnerlayer.md)<!-- -->; color?: string; transparency?: number; }

</td><td>

属性

</td></tr>
</tbody></table>

## 返回值

Promise&lt;boolean&gt;

修改后的图层属性，如若为 `undefined` 则代表修改失败或图层不存在

## 备注

仅内层和自定义层允许修改名称；仅内层允许修改类型, 透明度仅支持0-100之间的数
