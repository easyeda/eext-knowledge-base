---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [DMT\_Panel](./pro-api.dmt_panel.md) &gt; [modifyPanelName](./pro-api.dmt_panel.modifypanelname.md)

# DMT\_Panel.modifyPanelName() method

修改面板名称

## 签名

```typescript
modifyPanelName(panelUuid: string, panelName: string): Promise<boolean>;
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
<tr><td>

panelName

</td><td>

string

</td><td>

面板名称

</td></tr>
</tbody></table>

## 返回值

Promise&lt;boolean&gt;

是否修改成功
