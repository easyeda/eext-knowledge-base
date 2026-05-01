---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [PCB\_Net](./pro-api.pcb_net.md) &gt; [setNetlist](./pro-api.pcb_net.setnetlist.md)

# PCB\_Net.setNetlist() method

更新网表

## 签名

```typescript
setNetlist(type: ESYS_NetlistType | undefined, netlist: string): Promise<boolean>;
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

type

</td><td>

[ESYS\_NetlistType](./pro-api.esys_netlisttype.md) \| undefined

</td><td>

网表格式

</td></tr>
<tr><td>

netlist

</td><td>

string

</td><td>

网表数据

</td></tr>
</tbody></table>

## 返回值

Promise&lt;boolean&gt;
