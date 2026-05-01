---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [DMT\_Schematic](./pro-api.dmt_schematic.md) &gt; [copySchematic](./pro-api.dmt_schematic.copyschematic.md)

# DMT\_Schematic.copySchematic() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

复制原理图

## 签名

```typescript
copySchematic(schematicUuid: string, boardName?: string): Promise<string | undefined>;
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

源原理图 UUID

</td></tr>
<tr><td>

boardName

</td><td>

string

</td><td>

_（可选）_ 新原理图所属板子名称，如若不指定则为游离原理图

</td></tr>
</tbody></table>

## 返回值

Promise&lt;string \| undefined&gt;

新原理图 UUID，如若为 `undefined` 则复制失败

## 备注

如若原理图已关联复用模块（在工程库内存在同名的复用模块符号），则复制原理图时将同步新建复用模块符号
