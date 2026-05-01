---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [DMT\_Schematic](./pro-api.dmt_schematic.md) &gt; [deleteSchematic](./pro-api.dmt_schematic.deleteschematic.md)

# DMT\_Schematic.deleteSchematic() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

删除原理图

## 签名

```typescript
deleteSchematic(schematicUuid: string): Promise<boolean>;
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

schematicUuid

</td><td>

string

</td><td>

原理图 UUID

</td></tr>
</tbody></table>

## 返回值

Promise&lt;boolean&gt;

操作是否成功

## 备注

如若原理图已关联复用模块（在工程库内存在同名的复用模块符号），则删除原理图时将同步删除关联的 PCB 和复用模块符号，复用模块符号不可删除则跳过
