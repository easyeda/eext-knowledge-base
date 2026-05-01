---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [DMT\_Schematic](./pro-api.dmt_schematic.md) &gt; [modifySchematicName](./pro-api.dmt_schematic.modifyschematicname.md)

# DMT\_Schematic.modifySchematicName() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

修改原理图名称

## 签名

```typescript
modifySchematicName(schematicUuid: string, schematicName: string): Promise<boolean>;
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
<tr><td>

schematicName

</td><td>

string

</td><td>

原理图名称

</td></tr>
</tbody></table>

## 返回值

Promise&lt;boolean&gt;

是否修改成功

## 备注

如若原理图已关联复用模块（在工程库内存在同名的复用模块符号），则修改名称时将同步修改复用模块符号名称与关联 PCB 名称
