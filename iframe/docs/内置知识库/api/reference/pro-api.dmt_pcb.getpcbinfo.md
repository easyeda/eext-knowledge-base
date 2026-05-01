---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [DMT\_Pcb](./pro-api.dmt_pcb.md) &gt; [getPcbInfo](./pro-api.dmt_pcb.getpcbinfo.md)

# DMT\_Pcb.getPcbInfo() method

获取 PCB 的详细属性

## 签名

```typescript
getPcbInfo(pcbUuid: string): Promise<IDMT_PcbItem | undefined>;
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

pcbUuid

</td><td>

string

</td><td>

PCB UUID

</td></tr>
</tbody></table>

## 返回值

Promise&lt;[IDMT\_PcbItem](./pro-api.idmt_pcbitem.md) \| undefined&gt;

PCB 的详细属性，如若为 `undefined` 则获取失败
