---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [PCB\_Document](./pro-api.pcb_document.md) &gt; [importChanges](./pro-api.pcb_document.importchanges.md)

# PCB\_Document.importChanges() method

从原理图导入变更

## 签名

```typescript
importChanges(uuid?: string): Promise<boolean>;
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

uuid

</td><td>

string

</td><td>

_（可选）_ 原理图 UUID，默认为关联在同一个 Board 下的原理图

</td></tr>
</tbody></table>

## 返回值

Promise&lt;boolean&gt;

导入操作是否成功，导入失败或未传入原理图 UUID 的游离 PCB 将返回 `false`
