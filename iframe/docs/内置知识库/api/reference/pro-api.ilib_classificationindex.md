[Home](./pro-api.md) &gt; [ILIB\_ClassificationIndex](./pro-api.ilib_classificationindex.md)

# ILIB\_ClassificationIndex interface

> 警告：此 API 现已弃用。
>
> - since EDA v3.2; dropped EDA v3.3

分类索引

## 签名

```typescript
interface ILIB_ClassificationIndex
```

## 备注

本分类索引用于索引指定库内的分类，其中库 UUID 和库类型仅作针对于本索引的识别用途，防止将不同库内的索引互相引用从而引发错误

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

[libraryType](./pro-api.ilib_classificationindex.librarytype.md)

</td><td>

</td><td>

[ELIB\_LibraryType](./pro-api.elib_librarytype.md)

</td><td>

库类型

</td></tr>
<tr><td>

[libraryUuid](./pro-api.ilib_classificationindex.libraryuuid.md)

</td><td>

</td><td>

string

</td><td>

库 UUID

</td></tr>
<tr><td>

[primaryClassificationUuid](./pro-api.ilib_classificationindex.primaryclassificationuuid.md)

</td><td>

</td><td>

string

</td><td>

一级分类 UUID

</td></tr>
<tr><td>

[secondaryClassificationUuid?](./pro-api.ilib_classificationindex.secondaryclassificationuuid.md)

</td><td>

</td><td>

string

</td><td>

_（可选）_ 二级分类 UUID

</td></tr>
</tbody></table>
