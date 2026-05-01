[Home](./pro-api.md) &gt; [ILIB\_ExtendLibrarySymbolFunctions](./pro-api.ilib_extendlibrarysymbolfunctions.md)

# ILIB\_ExtendLibrarySymbolFunctions interface

外部库符号方法

## 签名

```typescript
interface ILIB_ExtendLibrarySymbolFunctions extends ILIB_ExtendLibraryFunctions
```
**扩展自：**[ILIB\_ExtendLibraryFunctions](./pro-api.ilib_extendlibraryfunctions.md)

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

[getList](./pro-api.ilib_extendlibrarysymbolfunctions.getlist.md)

</td><td>

</td><td>

(props: [ILIB\_ExtendLibrarySearchProperty](./pro-api.ilib_extendlibrarysearchproperty.md)<!-- -->&lt;{ symbolType?: [ELIB\_SymbolType](./pro-api.elib_symboltype.md)<!-- -->; }&gt;) =&gt; Promise&lt;[ILIB\_ExtendLibrarySearchResult](./pro-api.ilib_extendlibrarysearchresult.md)<!-- -->&lt;[ILIB\_ExtendLibraryItem](./pro-api.ilib_extendlibraryitem.md) &amp; [ILIB\_ExtendLibrarySearchResultDataLine](./pro-api.ilib_extendlibrarysearchresultdataline.md) &amp; { symbolType: [ELIB\_SymbolType](./pro-api.elib_symboltype.md)<!-- -->; }&gt;&gt;

</td><td>

</td></tr>
<tr><td>

[getSupportedSymbolTypes](./pro-api.ilib_extendlibrarysymbolfunctions.getsupportedsymboltypes.md)

</td><td>

</td><td>

() =&gt; Promise&lt;Array&lt;[ELIB\_SymbolType](./pro-api.elib_symboltype.md)<!-- -->&gt;&gt;

</td><td>

获取支持的符号类型

</td></tr>
</tbody></table>
