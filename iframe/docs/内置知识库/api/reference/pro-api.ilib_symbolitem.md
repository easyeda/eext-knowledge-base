[Home](./pro-api.md) &gt; [ILIB\_SymbolItem](./pro-api.ilib_symbolitem.md)

# ILIB\_SymbolItem interface

符号属性

## 签名

```typescript
interface ILIB_SymbolItem
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

[cbbUuid?](./pro-api.ilib_symbolitem.cbbuuid.md)

</td><td>

</td><td>

string

</td><td>

_（可选）_ 所属复用模块 UUID，仅复用模块符号存在该属性

</td></tr>
<tr><td>

[classification?](./pro-api.ilib_symbolitem.classification.md)

</td><td>

</td><td>

[ILIB\_ClassificationIndex](./pro-api.ilib_classificationindex.md) \| Array&lt;string&gt;

</td><td>

_（可选）_ 分类

</td></tr>
<tr><td>

[description?](./pro-api.ilib_symbolitem.description.md)

</td><td>

</td><td>

string

</td><td>

_（可选）_ 描述

</td></tr>
<tr><td>

[libraryType](./pro-api.ilib_symbolitem.librarytype.md)

</td><td>

`readonly`

</td><td>

[ELIB\_LibraryType.SYMBOL](./pro-api.elib_librarytype.md)

</td><td>

库类型

</td></tr>
<tr><td>

[libraryUuid](./pro-api.ilib_symbolitem.libraryuuid.md)

</td><td>

</td><td>

string

</td><td>

所属库 UUID

</td></tr>
<tr><td>

[name](./pro-api.ilib_symbolitem.name.md)

</td><td>

</td><td>

string

</td><td>

符号名称

</td></tr>
<tr><td>

[subPartNames](./pro-api.ilib_symbolitem.subpartnames.md)

</td><td>

</td><td>

\[\]

</td><td>

子部件名称数组

</td></tr>
<tr><td>

[type](./pro-api.ilib_symbolitem.type.md)

</td><td>

</td><td>

[ELIB\_SymbolType](./pro-api.elib_symboltype.md)

</td><td>

符号类型

</td></tr>
<tr><td>

[uuid](./pro-api.ilib_symbolitem.uuid.md)

</td><td>

</td><td>

string

</td><td>

符号 UUID

</td></tr>
</tbody></table>
