---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [PCB\_SelectControl](./pro-api.pcb_selectcontrol.md) &gt; [doSelectPrimitives](./pro-api.pcb_selectcontrol.doselectprimitives.md)

# PCB\_SelectControl.doSelectPrimitives() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

使用图元 ID 选中图元

## 签名

```typescript
doSelectPrimitives(primitiveIds: string | Array<string>): Promise<boolean>;
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

primitiveIds

</td><td>

string \| Array&lt;string&gt;

</td><td>

图元 ID

</td></tr>
</tbody></table>

## 返回值

Promise&lt;boolean&gt;

操作是否成功
