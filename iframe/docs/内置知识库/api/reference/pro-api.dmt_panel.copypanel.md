---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [DMT\_Panel](./pro-api.dmt_panel.md) &gt; [copyPanel](./pro-api.dmt_panel.copypanel.md)

# DMT\_Panel.copyPanel() method

复制面板

## 签名

```typescript
copyPanel(panelUuid: string): Promise<string | undefined>;
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

源面板 UUID

</td></tr>
</tbody></table>

## 返回值

Promise&lt;string \| undefined&gt;

新面板 UUID，如若为 `undefined` 则复制失败
