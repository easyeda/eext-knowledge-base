---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [SCH\_Netlist](./pro-api.sch_netlist.md) &gt; [setNetlist](./pro-api.sch_netlist.setnetlist.md)

# SCH\_Netlist.setNetlist() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

更新网表

## 签名

```typescript
setNetlist(type: ESYS_NetlistType | undefined, netlist: string): Promise<void>;
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

Promise&lt;void&gt;
