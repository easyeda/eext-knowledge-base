---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [DMT\_Pcb](./pro-api.dmt_pcb.md) &gt; [modifyPcbName](./pro-api.dmt_pcb.modifypcbname.md)

# DMT\_Pcb.modifyPcbName() method

修改 PCB 名称

## 签名

```typescript
modifyPcbName(pcbUuid: string, pcbName: string): Promise<boolean>;
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
<tr><td>

pcbName

</td><td>

string

</td><td>

PCB 名称

</td></tr>
</tbody></table>

## 返回值

Promise&lt;boolean&gt;

是否修改成功

## 备注

如若 PCB 已关联复用模块（在工程库内存在同名的复用模块符号），则修改名称时将同步修改复用模块符号名称与关联原理图名称
