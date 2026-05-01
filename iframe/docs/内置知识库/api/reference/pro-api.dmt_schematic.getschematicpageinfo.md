---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [DMT\_Schematic](./pro-api.dmt_schematic.md) &gt; [getSchematicPageInfo](./pro-api.dmt_schematic.getschematicpageinfo.md)

# DMT\_Schematic.getSchematicPageInfo() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

获取原理图图页的详细属性

## 签名

```typescript
getSchematicPageInfo(schematicPageUuid: string): Promise<IDMT_SchematicPageItem | undefined>;
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
</tbody></table>

## 返回值

Promise&lt;[IDMT\_SchematicPageItem](./pro-api.idmt_schematicpageitem.md) \| undefined&gt;

原理图图页的详细属性，如若为 `undefined` 则获取失败
