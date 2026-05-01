---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [PCB\_Net](./pro-api.pcb_net.md) &gt; [getNetlist](./pro-api.pcb_net.getnetlist.md)

# PCB\_Net.getNetlist() method

获取网表

## 签名

```typescript
getNetlist(type?: ESYS_NetlistType): Promise<string>;
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

[ESYS\_NetlistType](./pro-api.esys_netlisttype.md)

</td><td>

_（可选）_ 网表格式

</td></tr>
</tbody></table>

## 返回值

Promise&lt;string&gt;

网表数据
