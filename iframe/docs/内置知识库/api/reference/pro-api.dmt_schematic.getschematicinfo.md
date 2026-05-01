---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [DMT\_Schematic](./pro-api.dmt_schematic.md) &gt; [getSchematicInfo](./pro-api.dmt_schematic.getschematicinfo.md)

# DMT\_Schematic.getSchematicInfo() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

获取原理图的详细属性

## 签名

```typescript
getSchematicInfo(schematicUuid: string): Promise<IDMT_SchematicItem | undefined>;
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

Promise&lt;[IDMT\_SchematicItem](./pro-api.idmt_schematicitem.md) \| undefined&gt;

原理图的详细属性，如若为 `undefined` 则获取失败
