---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [DMT\_Schematic](./pro-api.dmt_schematic.md) &gt; [createSchematic](./pro-api.dmt_schematic.createschematic.md)

# DMT\_Schematic.createSchematic() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

创建原理图

## 签名

```typescript
createSchematic(boardName?: string): Promise<string | undefined>;
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

boardName

</td><td>

string

</td><td>

_（可选）_ 所属板子名称，如若不指定则为游离原理图

</td></tr>
</tbody></table>

## 返回值

Promise&lt;string \| undefined&gt;

原理图 UUID，如若为 `undefined` 则创建失败
