[Home](./pro-api.md) &gt; [ILIB\_DeviceItem](./pro-api.ilib_deviceitem.md)

# ILIB\_DeviceItem interface

器件属性

## 签名

```typescript
interface ILIB_DeviceItem
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

[association](./pro-api.ilib_deviceitem.association.md)

</td><td>

</td><td>

[ILIB\_DeviceAssociationItem](./pro-api.ilib_deviceassociationitem.md)

</td><td>

关联

</td></tr>
<tr><td>

[classification?](./pro-api.ilib_deviceitem.classification.md)

</td><td>

</td><td>

[ILIB\_ClassificationIndex](./pro-api.ilib_classificationindex.md) \| Array&lt;string&gt;

</td><td>

_（可选）_ 器件分类

</td></tr>
<tr><td>

[description?](./pro-api.ilib_deviceitem.description.md)

</td><td>

</td><td>

string

</td><td>

_（可选）_ 描述

</td></tr>
<tr><td>

[libraryType](./pro-api.ilib_deviceitem.librarytype.md)

</td><td>

`readonly`

</td><td>

[ELIB\_LibraryType.DEVICE](./pro-api.elib_librarytype.md)

</td><td>

库类型

</td></tr>
<tr><td>

[libraryUuid](./pro-api.ilib_deviceitem.libraryuuid.md)

</td><td>

</td><td>

string

</td><td>

所属库 UUID

</td></tr>
<tr><td>

[name](./pro-api.ilib_deviceitem.name.md)

</td><td>

</td><td>

string

</td><td>

器件名称

</td></tr>
<tr><td>

[property](./pro-api.ilib_deviceitem.property.md)

</td><td>

</td><td>

[ILIB\_DeviceExtendPropertyItem](./pro-api.ilib_deviceextendpropertyitem.md)

</td><td>

扩展属性

</td></tr>
<tr><td>

[subPartNames](./pro-api.ilib_deviceitem.subpartnames.md)

</td><td>

</td><td>

\[\]

</td><td>

子部件名称数组

</td></tr>
<tr><td>

[uuid](./pro-api.ilib_deviceitem.uuid.md)

</td><td>

</td><td>

string

</td><td>

器件 UUID

</td></tr>
</tbody></table>
