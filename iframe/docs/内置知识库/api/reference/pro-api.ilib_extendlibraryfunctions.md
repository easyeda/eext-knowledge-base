[Home](./pro-api.md) &gt; [ILIB\_ExtendLibraryFunctions](./pro-api.ilib_extendlibraryfunctions.md)

# ILIB\_ExtendLibraryFunctions interface

外部库方法

## 签名

```typescript
interface ILIB_ExtendLibraryFunctions
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

[getClassificationTree](./pro-api.ilib_extendlibraryfunctions.getclassificationtree.md)

</td><td>

</td><td>

() =&gt; Promise&lt;Array&lt;{ name: string; uuid?: string; children?: Array&lt;{ name: string; uuid?: string; }&gt; \| undefined; }&gt;&gt;

</td><td>

获取分类树

</td></tr>
<tr><td>

[getDetail](./pro-api.ilib_extendlibraryfunctions.getdetail.md)

</td><td>

</td><td>

(uuid: string) =&gt; Promise&lt;any&gt;

</td><td>

获取详细信息

</td></tr>
<tr><td>

[getList](./pro-api.ilib_extendlibraryfunctions.getlist.md)

</td><td>

</td><td>

(props: [ILIB\_ExtendLibrarySearchProperty](./pro-api.ilib_extendlibrarysearchproperty.md)<!-- -->&lt;any&gt;) =&gt; Promise&lt;[ILIB\_ExtendLibrarySearchResult](./pro-api.ilib_extendlibrarysearchresult.md)<!-- -->&lt;any&gt;&gt;

</td><td>

获取列表

</td></tr>
</tbody></table>
