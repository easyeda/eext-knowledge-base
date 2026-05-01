---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [PCB\_Drc](./pro-api.pcb_drc.md) &gt; [addNetToNetClass](./pro-api.pcb_drc.addnettonetclass.md)

# PCB\_Drc.addNetToNetClass() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

将网络添加到网络类

## 签名

```typescript
addNetToNetClass(netClassName: string, net: string | Array<string>): Promise<boolean>;
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

netClassName

</td><td>

string

</td><td>

网络类名称

</td></tr>
<tr><td>

net

</td><td>

string \| Array&lt;string&gt;

</td><td>

网络名称

</td></tr>
</tbody></table>

## 返回值

Promise&lt;boolean&gt;

操作是否成功
