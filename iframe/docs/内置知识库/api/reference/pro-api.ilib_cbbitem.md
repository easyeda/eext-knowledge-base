[Home](./pro-api.md) &gt; [ILIB\_CbbItem](./pro-api.ilib_cbbitem.md)

# ILIB\_CbbItem interface

复用模块属性

## 签名

```typescript
interface ILIB_CbbItem
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

[boards](./pro-api.ilib_cbbitem.boards.md)

</td><td>

</td><td>

Array&lt;[IDMT\_BoardItem](./pro-api.idmt_boarditem.md)<!-- -->&gt;

</td><td>

下属板子

</td></tr>
<tr><td>

[classification?](./pro-api.ilib_cbbitem.classification.md)

</td><td>

</td><td>

[ILIB\_ClassificationIndex](./pro-api.ilib_classificationindex.md) \| Array&lt;string&gt;

</td><td>

_（可选）_ 分类

</td></tr>
<tr><td>

[description?](./pro-api.ilib_cbbitem.description.md)

</td><td>

</td><td>

string

</td><td>

_（可选）_ 描述

</td></tr>
<tr><td>

[libraryType](./pro-api.ilib_cbbitem.librarytype.md)

</td><td>

`readonly`

</td><td>

[ELIB\_LibraryType.CBB](./pro-api.elib_librarytype.md)

</td><td>

库类型

</td></tr>
<tr><td>

[libraryUuid](./pro-api.ilib_cbbitem.libraryuuid.md)

</td><td>

</td><td>

string

</td><td>

所属库 UUID

</td></tr>
<tr><td>

[name](./pro-api.ilib_cbbitem.name.md)

</td><td>

</td><td>

string

</td><td>

复用模块名称

</td></tr>
<tr><td>

[uuid](./pro-api.ilib_cbbitem.uuid.md)

</td><td>

</td><td>

string

</td><td>

复用模块 UUID

</td></tr>
</tbody></table>
