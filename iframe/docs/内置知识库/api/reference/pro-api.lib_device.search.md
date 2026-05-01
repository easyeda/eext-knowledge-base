---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [LIB\_Device](./pro-api.lib_device.md) &gt; [search](./pro-api.lib_device.search.md)

# LIB\_Device.search() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

搜索器件

## 签名

```typescript
search(key: string, libraryUuid?: string, classification?: ILIB_ClassificationIndex | Array<string>, symbolType?: ELIB_SymbolType, itemsOfPage?: number, page?: number): Promise<Array<ILIB_DeviceSearchItem>>;
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

key

</td><td>

string

</td><td>

搜索关键字

</td></tr>
<tr><td>

libraryUuid

</td><td>

string

</td><td>

_（可选）_ 库 UUID，默认为系统库，可以使用 [LIB\_LibrariesList](./pro-api.lib_librarieslist.md) 内的接口获取

</td></tr>
<tr><td>

classification

</td><td>

[ILIB\_ClassificationIndex](./pro-api.ilib_classificationindex.md) \| Array&lt;string&gt;

</td><td>

_（可选）_ 分类，默认为全部

</td></tr>
<tr><td>

symbolType

</td><td>

[ELIB\_SymbolType](./pro-api.elib_symboltype.md)

</td><td>

_（可选）_ 符号类型，默认为全部

</td></tr>
<tr><td>

itemsOfPage

</td><td>

number

</td><td>

_（可选）_ 一页搜索结果的数量

</td></tr>
<tr><td>

page

</td><td>

number

</td><td>

_（可选）_ 页数

</td></tr>
</tbody></table>

## 返回值

Promise&lt;Array&lt;[ILIB\_DeviceSearchItem](./pro-api.ilib_devicesearchitem.md)<!-- -->&gt;&gt;

搜索到的器件属性的列表
