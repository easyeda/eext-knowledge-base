---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [PCB\_Drc](./pro-api.pcb_drc.md) &gt; [modifyDifferentialPairName](./pro-api.pcb_drc.modifydifferentialpairname.md)

# PCB\_Drc.modifyDifferentialPairName() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

修改差分对的名称

## 签名

```typescript
modifyDifferentialPairName(originalDifferentialPairName: string, differentialPairName: string): Promise<boolean>;
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

originalDifferentialPairName

</td><td>

string

</td><td>

原差分对名称

</td></tr>
<tr><td>

differentialPairName

</td><td>

string

</td><td>

新差分对名称

</td></tr>
</tbody></table>

## 返回值

Promise&lt;boolean&gt;

操作是否成功
