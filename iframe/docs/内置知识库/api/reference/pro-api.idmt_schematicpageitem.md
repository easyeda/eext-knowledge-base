[Home](./pro-api.md) &gt; [IDMT\_SchematicPageItem](./pro-api.idmt_schematicpageitem.md)

# IDMT\_SchematicPageItem interface

原理图图页属性

## 签名

```typescript
interface IDMT_SchematicPageItem
```

## 属性

<table><thead><tr><th>

属性名

</th><th>

修饰符

</th><th>

类型

</th><th>

描述

</th></tr></thead>
<tbody><tr><td>

[itemType](./pro-api.idmt_schematicpageitem.itemtype.md)

</td><td>

`readonly`

</td><td>

[EDMT\_ItemType.SCHEMATIC\_PAGE](./pro-api.edmt_itemtype.md)

</td><td>

项目类型

</td></tr>
<tr><td>

[name](./pro-api.idmt_schematicpageitem.name.md)

</td><td>

</td><td>

string

</td><td>

原理图图页名称

</td></tr>
<tr><td>

[parentSchematicUuid](./pro-api.idmt_schematicpageitem.parentschematicuuid.md)

</td><td>

</td><td>

string

</td><td>

所属原理图 UUID

</td></tr>
<tr><td>

[showTitleBlock](./pro-api.idmt_schematicpageitem.showtitleblock.md)

</td><td>

</td><td>

boolean

</td><td>

是否显示明细表

</td></tr>
<tr><td>

[titleBlockData](./pro-api.idmt_schematicpageitem.titleblockdata.md)

</td><td>

</td><td>

\{ \[key: string\]: \{ showTitle: boolean; showValue: boolean; value: any; \}; \}

</td><td>

明细表数据

</td></tr>
<tr><td>

[uuid](./pro-api.idmt_schematicpageitem.uuid.md)

</td><td>

</td><td>

string

</td><td>

原理图图页 UUID

</td></tr>
</tbody></table>
