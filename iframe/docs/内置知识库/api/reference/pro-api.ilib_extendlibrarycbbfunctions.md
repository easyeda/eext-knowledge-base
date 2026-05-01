[Home](./pro-api.md) &gt; [ILIB\_ExtendLibraryCbbFunctions](./pro-api.ilib_extendlibrarycbbfunctions.md)

# ILIB\_ExtendLibraryCbbFunctions interface

外部库复用模块方法

## 签名

```typescript
interface ILIB_ExtendLibraryCbbFunctions extends ILIB_ExtendLibraryFunctions
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

[getList](./pro-api.ilib_extendlibrarycbbfunctions.getlist.md)

</td><td>

</td><td>

(props: any) =&gt; Promise&lt;[ILIB\_ExtendLibrarySearchResult](./pro-api.ilib_extendlibrarysearchresult.md)<!-- -->&lt;[ILIB\_ExtendLibraryItem](./pro-api.ilib_extendlibraryitem.md) &amp; [ILIB\_ExtendLibrarySearchResultDataLine](./pro-api.ilib_extendlibrarysearchresultdataline.md) &amp; { schematics?: Array&lt;{ uuid: string; name: string; updateTime: string; description?: string; }&gt;; pcbs?: Array&lt;{ uuid: string; name: string; updateTime: number; thumb?: string; createTime?: number; creator?: [ILIB\_ExtendLibraryUserIndex](./pro-api.ilib_extendlibraryuserindex.md)<!-- -->; modifier?: [ILIB\_ExtendLibraryUserIndex](./pro-api.ilib_extendlibraryuserindex.md)<!-- -->; description?: string; }&gt;; boards?: Array&lt;{ pcbUuid: string; schUuid: string; name: string; }&gt;; sheets?: Array&lt;{ uuid: string; name: string; belongSchematicUuid: string; updateTime: number; thumb?: string; createTime?: number; creator?: [ILIB\_ExtendLibraryUserIndex](./pro-api.ilib_extendlibraryuserindex.md)<!-- -->; modifier?: [ILIB\_ExtendLibraryUserIndex](./pro-api.ilib_extendlibraryuserindex.md)<!-- -->; description?: string; }&gt;; }&gt;&gt;

</td><td>

</td></tr>
</tbody></table>
