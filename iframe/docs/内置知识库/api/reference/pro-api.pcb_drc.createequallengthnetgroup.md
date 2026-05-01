---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [PCB\_Drc](./pro-api.pcb_drc.md) &gt; [createEqualLengthNetGroup](./pro-api.pcb_drc.createequallengthnetgroup.md)

# PCB\_Drc.createEqualLengthNetGroup() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

创建等长网络组

## 签名

```typescript
createEqualLengthNetGroup(equalLengthNetGroupName: string, nets: Array<string>, color: IPCB_EqualLengthNetGroupItem['color']): Promise<boolean>;
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

equalLengthNetGroupName

</td><td>

string

</td><td>

等长网络组名称

</td></tr>
<tr><td>

nets

</td><td>

Array&lt;string&gt;

</td><td>

网络名称数组

</td></tr>
<tr><td>

color

</td><td>

[IPCB\_EqualLengthNetGroupItem](./pro-api.ipcb_equallengthnetgroupitem.md)<!-- -->\['color'\]

</td><td>

等长网络组颜色

</td></tr>
</tbody></table>

## 返回值

Promise&lt;boolean&gt;

操作是否成功
