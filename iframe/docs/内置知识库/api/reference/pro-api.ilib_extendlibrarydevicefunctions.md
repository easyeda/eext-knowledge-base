[Home](./pro-api.md) &gt; [ILIB\_ExtendLibraryDeviceFunctions](./pro-api.ilib_extendlibrarydevicefunctions.md)

# ILIB\_ExtendLibraryDeviceFunctions interface

外部库器件方法

## 签名

```typescript
interface ILIB_ExtendLibraryDeviceFunctions extends ILIB_ExtendLibraryFunctions
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

[getList](./pro-api.ilib_extendlibrarydevicefunctions.getlist.md)

</td><td>

</td><td>

(props: [ILIB\_ExtendLibrarySearchProperty](./pro-api.ilib_extendlibrarysearchproperty.md)<!-- -->&lt;{ attributes?: { \[key: string\]: string; }; symbolType?: [ELIB\_SymbolType](./pro-api.elib_symboltype.md)<!-- -->; }&gt;) =&gt; Promise&lt;[ILIB\_ExtendLibrarySearchResult](./pro-api.ilib_extendlibrarysearchresult.md)<!-- -->&lt;[ILIB\_ExtendLibraryItemIndex](./pro-api.ilib_extendlibraryitemindex.md) &amp; { classification?: [ILIB\_ExtendLibraryClassificationIndex](./pro-api.ilib_extendlibraryclassificationindex.md) \| Array&lt;string&gt;; symbol?: [ILIB\_ExtendLibraryItem](./pro-api.ilib_extendlibraryitem.md) &amp; { symbolType: [ELIB\_SymbolType](./pro-api.elib_symboltype.md)<!-- -->; }; footprint?: [ILIB\_ExtendLibraryItem](./pro-api.ilib_extendlibraryitem.md)<!-- -->; model3d?: [ILIB\_ExtendLibraryItemIndex](./pro-api.ilib_extendlibraryitemindex.md) &amp; { adjustment?: { size?: { x: number; y: number; z: number; }; rotation?: { x: number; y: number; z: number; }; offset?: { x: number; y: number; z: number; }; }; }; value?: string; supplierPart?: string; manufacturer?: string; description?: string; updateTime?: number; createTime?: number; attributes?: { \[key: string\]: string; }; }&gt;&gt;

</td><td>

</td></tr>
<tr><td>

[getSupportedPreviewTypes](./pro-api.ilib_extendlibrarydevicefunctions.getsupportedpreviewtypes.md)

</td><td>

</td><td>

() =&gt; Promise&lt;Array&lt;[ELIB\_PreviewType](./pro-api.elib_previewtype.md)<!-- -->&gt;&gt;

</td><td>

获取支持的预览类型

</td></tr>
<tr><td>

[getSupportedSymbolTypes](./pro-api.ilib_extendlibrarydevicefunctions.getsupportedsymboltypes.md)

</td><td>

</td><td>

() =&gt; Promise&lt;Array&lt;[ELIB\_SymbolType](./pro-api.elib_symboltype.md)<!-- -->&gt;&gt;

</td><td>

获取支持的符号类型

</td></tr>
</tbody></table>
