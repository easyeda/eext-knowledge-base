---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [DMT\_Panel](./pro-api.dmt_panel.md) &gt; [getPanelInfo](./pro-api.dmt_panel.getpanelinfo.md)

# DMT\_Panel.getPanelInfo() method

获取面板的详细属性

## 签名

```typescript
getPanelInfo(panelUuid: string): Promise<IDMT_PanelItem | undefined>;
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

panelUuid

</td><td>

string

</td><td>

面板 UUID

</td></tr>
</tbody></table>

## 返回值

Promise&lt;[IDMT\_PanelItem](./pro-api.idmt_panelitem.md) \| undefined&gt;

面板的详细属性，如若为 `undefined` 则获取失败
