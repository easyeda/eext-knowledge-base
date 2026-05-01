---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [DMT\_Pcb](./pro-api.dmt_pcb.md) &gt; [createPcb](./pro-api.dmt_pcb.createpcb.md)

# DMT\_Pcb.createPcb() method

创建 PCB

## 签名

```typescript
createPcb(boardName?: string): Promise<string | undefined>;
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

boardName

</td><td>

string

</td><td>

_（可选）_ 所属板子名称，如若不指定则为游离 PCB

</td></tr>
</tbody></table>

## 返回值

Promise&lt;string \| undefined&gt;

PCB UUID，如若为 `undefined` 则创建失败
