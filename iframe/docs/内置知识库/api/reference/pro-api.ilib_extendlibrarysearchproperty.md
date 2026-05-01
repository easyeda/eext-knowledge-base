[Home](./pro-api.md) &gt; [ILIB\_ExtendLibrarySearchProperty](./pro-api.ilib_extendlibrarysearchproperty.md)

# ILIB\_ExtendLibrarySearchProperty interface

外部库搜索参数

## 签名

```typescript
interface ILIB_ExtendLibrarySearchProperty<T>
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

[page?](./pro-api.ilib_extendlibrarysearchproperty.page.md)

</td><td>

</td><td>

number

</td><td>

_（可选）_ 页数

</td></tr>
<tr><td>

[pageSize?](./pro-api.ilib_extendlibrarysearchproperty.pagesize.md)

</td><td>

</td><td>

number

</td><td>

_（可选）_ 单页条目数

</td></tr>
<tr><td>

[query](./pro-api.ilib_extendlibrarysearchproperty.query.md)

</td><td>

</td><td>

T &amp; { wd?: string; listByTitles?: Array&lt;string&gt;; classification?: [ILIB\_ExtendLibraryClassificationIndex](./pro-api.ilib_extendlibraryclassificationindex.md) \| Array&lt;string&gt;; }

</td><td>

查询参数

</td></tr>
</tbody></table>
