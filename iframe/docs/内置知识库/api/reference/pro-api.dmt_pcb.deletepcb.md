---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [DMT\_Pcb](./pro-api.dmt_pcb.md) &gt; [deletePcb](./pro-api.dmt_pcb.deletepcb.md)

# DMT\_Pcb.deletePcb() method

删除 PCB

## 签名

```typescript
deletePcb(pcbUuid: string): Promise<boolean>;
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

Promise&lt;boolean&gt;

操作是否成功

## 备注

如若 PCB 已关联复用模块（在工程库内存在同名的复用模块符号），则删除 PCB 时将同步删除关联的原理图和复用模块符号，复用模块符号不可删除则跳过
