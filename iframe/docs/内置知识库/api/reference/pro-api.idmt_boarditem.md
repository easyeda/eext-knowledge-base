[Home](./pro-api.md) &gt; [IDMT\_BoardItem](./pro-api.idmt_boarditem.md)

# IDMT\_BoardItem interface

板子属性

## 签名

```typescript
interface IDMT_BoardItem
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

[itemType](./pro-api.idmt_boarditem.itemtype.md)

</td><td>

`readonly`

</td><td>

[EDMT\_ItemType.BOARD](./pro-api.edmt_itemtype.md)

</td><td>

项目类型

</td></tr>
<tr><td>

[name](./pro-api.idmt_boarditem.name.md)

</td><td>

</td><td>

string

</td><td>

板子名称

</td></tr>
<tr><td>

[parentProjectUuid](./pro-api.idmt_boarditem.parentprojectuuid.md)

</td><td>

</td><td>

string

</td><td>

所属工程 UUID

</td></tr>
<tr><td>

[pcb](./pro-api.idmt_boarditem.pcb.md)

</td><td>

</td><td>

[IDMT\_PcbItem](./pro-api.idmt_pcbitem.md)

</td><td>

下属 PCB

</td></tr>
<tr><td>

[schematic](./pro-api.idmt_boarditem.schematic.md)

</td><td>

</td><td>

[IDMT\_SchematicItem](./pro-api.idmt_schematicitem.md)

</td><td>

下属原理图

</td></tr>
</tbody></table>
