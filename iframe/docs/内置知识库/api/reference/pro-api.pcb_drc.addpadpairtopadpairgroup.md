---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [PCB\_Drc](./pro-api.pcb_drc.md) &gt; [addPadPairToPadPairGroup](./pro-api.pcb_drc.addpadpairtopadpairgroup.md)

# PCB\_Drc.addPadPairToPadPairGroup() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

将焊盘对添加到焊盘对组

## 签名

```typescript
addPadPairToPadPairGroup(padPairGroupName: string, padPair: [string, string] | Array<[string, string]>): Promise<boolean>;
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

padPairGroupName

</td><td>

string

</td><td>

焊盘对组名称

</td></tr>
<tr><td>

padPair

</td><td>

\[string, string\] \| Array&lt;\[string, string\]&gt;

</td><td>

焊盘对

</td></tr>
</tbody></table>

## 返回值

Promise&lt;boolean&gt;

操作是否成功

## 示例

有三种不同的用法，确保画布上已有对应的焊盘。 分别是 一，游离焊盘-游离焊盘；二，器件焊盘 - 器件焊盘；三，器件焊盘 - 游离焊盘 await eda.pcb\_Drc.addPadPairToPadPairGroup('test',\['e0','e1'\]) // 游离焊盘-游离焊盘 await eda.pcb\_Drc.addPadPairToPadPairGroup('test',\['R1:1','R1:2'\]) // 器件焊盘 - 器件焊盘 await eda.pcb\_Drc.addPadPairToPadPairGroup('test',\['R1:1','e1'\]) // 器件焊盘 - 游离焊盘
