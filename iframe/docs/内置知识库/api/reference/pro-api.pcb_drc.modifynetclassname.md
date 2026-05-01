---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [PCB\_Drc](./pro-api.pcb_drc.md) &gt; [modifyNetClassName](./pro-api.pcb_drc.modifynetclassname.md)

# PCB\_Drc.modifyNetClassName() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

修改网络类的名称

## 签名

```typescript
modifyNetClassName(originalNetClassName: string, netClassName: string): Promise<boolean>;
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

originalNetClassName

</td><td>

string

</td><td>

原网络类名称

</td></tr>
<tr><td>

netClassName

</td><td>

string

</td><td>

新网络类名称

</td></tr>
</tbody></table>

## 返回值

Promise&lt;boolean&gt;

操作是否成功
