---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [DMT\_Schematic](./pro-api.dmt_schematic.md) &gt; [modifySchematicPageName](./pro-api.dmt_schematic.modifyschematicpagename.md)

# DMT\_Schematic.modifySchematicPageName() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

修改原理图图页名称

## 签名

```typescript
modifySchematicPageName(schematicPageUuid: string, schematicPageName: string): Promise<boolean>;
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

schematicPageUuid

</td><td>

string

</td><td>

原理图图页 UUID

</td></tr>
<tr><td>

schematicPageName

</td><td>

string

</td><td>

原理图图页名称

</td></tr>
</tbody></table>

## 返回值

Promise&lt;boolean&gt;

是否修改成功
