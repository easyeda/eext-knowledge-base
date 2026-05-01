---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [PCB\_Drc](./pro-api.pcb_drc.md) &gt; [modifyPadPairGroupName](./pro-api.pcb_drc.modifypadpairgroupname.md)

# PCB\_Drc.modifyPadPairGroupName() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

修改焊盘对组的名称

## 签名

```typescript
modifyPadPairGroupName(originalPadPairGroupName: string, padPairGroupName: string): Promise<boolean>;
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

originalPadPairGroupName

</td><td>

string

</td><td>

原焊盘对组名称

</td></tr>
<tr><td>

padPairGroupName

</td><td>

string

</td><td>

新焊盘对组名称

</td></tr>
</tbody></table>

## 返回值

Promise&lt;boolean&gt;

操作是否成功
