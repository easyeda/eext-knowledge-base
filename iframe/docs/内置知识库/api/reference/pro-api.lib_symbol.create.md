---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [LIB\_Symbol](./pro-api.lib_symbol.md) &gt; [create](./pro-api.lib_symbol.create.md)

# LIB\_Symbol.create() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

创建符号

## 签名

```typescript
create(libraryUuid: string, symbolName: string, classification?: ILIB_ClassificationIndex | Array<string>, symbolType?: ELIB_SymbolType, description?: string): Promise<string | undefined>;
```

## 参数名

<table><thead><tr><th>

参数

</th><th>

类型

</th><th>

描述

</th></tr></thead>
<tbody><tr><td>

libraryUuid

</td><td>

string

</td><td>

库 UUID，可以使用 [LIB\_LibrariesList](./pro-api.lib_librarieslist.md) 内的接口获取

</td></tr>
<tr><td>

symbolName

</td><td>

string

</td><td>

符号名称

</td></tr>
<tr><td>

classification

</td><td>

[ILIB\_ClassificationIndex](./pro-api.ilib_classificationindex.md) \| Array&lt;string&gt;

</td><td>

_（可选）_ 分类

</td></tr>
<tr><td>

symbolType

</td><td>

[ELIB\_SymbolType](./pro-api.elib_symboltype.md)

</td><td>

_（可选）_ 符号类型

</td></tr>
<tr><td>

description

</td><td>

string

</td><td>

_（可选）_ 描述

</td></tr>
</tbody></table>

## 返回值

Promise&lt;string \| undefined&gt;

符号 UUID
