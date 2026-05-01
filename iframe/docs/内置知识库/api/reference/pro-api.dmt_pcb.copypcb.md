---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [DMT\_Pcb](./pro-api.dmt_pcb.md) &gt; [copyPcb](./pro-api.dmt_pcb.copypcb.md)

# DMT\_Pcb.copyPcb() method

复制 PCB

## 签名

```typescript
copyPcb(pcbUuid: string, boardName?: string): Promise<string | undefined>;
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

源 PCB UUID

</td></tr>
<tr><td>

boardName

</td><td>

string

</td><td>

_（可选）_ 新 PCB 所属板子名称，如若不指定则为游离 PCB

</td></tr>
</tbody></table>

## 返回值

Promise&lt;string \| undefined&gt;

新 PCB UUID，如若为 `undefined` 则复制失败

## 备注

即使此处 PCB 已关联复用模块（在工程库内存在同名的复用模块符号），也不新建复用模块符号，此操作逻辑与当前编辑器前端保持一致
