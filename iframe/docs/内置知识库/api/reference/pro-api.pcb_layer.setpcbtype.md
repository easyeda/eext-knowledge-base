---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [PCB\_Layer](./pro-api.pcb_layer.md) &gt; [setPcbType](./pro-api.pcb_layer.setpcbtype.md)

# PCB\_Layer.setPcbType() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

设置 PCB 类型

## 签名

```typescript
setPcbType(pcbType: EPCB_PcbPlateType): Promise<boolean>;
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

pcbType

</td><td>

[EPCB\_PcbPlateType](./pro-api.epcb_pcbplatetype.md)

</td><td>

PCB 类型

</td></tr>
</tbody></table>

## 返回值

Promise&lt;boolean&gt;

操作是否成功

## 备注

此处主要是为了适配 FPC 软板的设计，如若将 PCB 类型设置为 FPC 软板，将会新增 FPC 补强层图层。

请注意：

1. 嘉立创暂不支持超过 2 层铜箔层的 FPC 软板生产；

2. 将 PCB 类型从 FPC 软板切换为普通板材时需要预先删除 FPC 补强层上的任何图元，否则将无法切换并返回 `false` 的结果。
