[Home](./pro-api.md) &gt; [IDMT\_SchematicItem](./pro-api.idmt_schematicitem.md)

# IDMT\_SchematicItem interface

原理图属性

## 签名

```typescript
interface IDMT_SchematicItem
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

[cbbSymbol?](./pro-api.idmt_schematicitem.cbbsymbol.md)

</td><td>

</td><td>

[ILIB\_SymbolItem](./pro-api.ilib_symbolitem.md)

</td><td>

_（可选）_ 复用模块原理图关联的模块符号

</td></tr>
<tr><td>

[itemType](./pro-api.idmt_schematicitem.itemtype.md)

</td><td>

`readonly`

</td><td>

[EDMT\_ItemType.SCHEMATIC](./pro-api.edmt_itemtype.md) \| [EDMT\_ItemType.CBB\_SCHEMATIC](./pro-api.edmt_itemtype.md)

</td><td>

项目类型

</td></tr>
<tr><td>

[name](./pro-api.idmt_schematicitem.name.md)

</td><td>

</td><td>

string

</td><td>

原理图名称

</td></tr>
<tr><td>

[page](./pro-api.idmt_schematicitem.page.md)

</td><td>

</td><td>

Array&lt;[IDMT\_SchematicPageItem](./pro-api.idmt_schematicpageitem.md)<!-- -->&gt;

</td><td>

下属原理图图页

</td></tr>
<tr><td>

[parentBoardUuid?](./pro-api.idmt_schematicitem.parentboarduuid.md)

</td><td>

</td><td>

string

</td><td>

_（可选）_ 所属板子 UUID

</td></tr>
<tr><td>

[parentProjectUuid](./pro-api.idmt_schematicitem.parentprojectuuid.md)

</td><td>

</td><td>

string

</td><td>

所属工程 UUID

</td></tr>
<tr><td>

[uuid](./pro-api.idmt_schematicitem.uuid.md)

</td><td>

</td><td>

string

</td><td>

原理图 UUID

</td></tr>
</tbody></table>
