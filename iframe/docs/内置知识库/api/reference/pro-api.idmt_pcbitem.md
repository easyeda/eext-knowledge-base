[Home](./pro-api.md) &gt; [IDMT\_PcbItem](./pro-api.idmt_pcbitem.md)

# IDMT\_PcbItem interface

PCB 属性

## 签名

```typescript
interface IDMT_PcbItem
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

[itemType](./pro-api.idmt_pcbitem.itemtype.md)

</td><td>

`readonly`

</td><td>

[EDMT\_ItemType.PCB](./pro-api.edmt_itemtype.md) \| [EDMT\_ItemType.CBB\_PCB](./pro-api.edmt_itemtype.md)

</td><td>

项目类型

</td></tr>
<tr><td>

[name](./pro-api.idmt_pcbitem.name.md)

</td><td>

</td><td>

string

</td><td>

PCB 名称

</td></tr>
<tr><td>

[parentBoardName?](./pro-api.idmt_pcbitem.parentboardname.md)

</td><td>

</td><td>

string

</td><td>

_（可选）_ 所属板子名称

</td></tr>
<tr><td>

[parentProjectUuid](./pro-api.idmt_pcbitem.parentprojectuuid.md)

</td><td>

</td><td>

string

</td><td>

所属工程 UUID

</td></tr>
<tr><td>

[uuid](./pro-api.idmt_pcbitem.uuid.md)

</td><td>

</td><td>

string

</td><td>

PCB UUID

</td></tr>
</tbody></table>
