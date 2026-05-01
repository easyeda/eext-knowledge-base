---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [SCH\_Netlist](./pro-api.sch_netlist.md) &gt; [getNetlist](./pro-api.sch_netlist.getnetlist.md)

# SCH\_Netlist.getNetlist() method

> 警告：此 API 现已弃用。
>
> 请使用 [SCH\_ManufactureData.getNetlistFile()](./pro-api.sch_manufacturedata.getnetlistfile.md) 替代

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
