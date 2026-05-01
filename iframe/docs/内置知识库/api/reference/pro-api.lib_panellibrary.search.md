---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [LIB\_PanelLibrary](./pro-api.lib_panellibrary.md) &gt; [search](./pro-api.lib_panellibrary.search.md)

# LIB\_PanelLibrary.search() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

搜索面板库

## 签名

```typescript
search(key: string, libraryUuid?: string, classification?: ILIB_ClassificationIndex | Array<string>, itemsOfPage?: number, page?: number): Promise<Array<ILIB_PanelLibrarySearchItem>>;
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

Promise&lt;Array&lt;[ILIB\_PanelLibrarySearchItem](./pro-api.ilib_panellibrarysearchitem.md)<!-- -->&gt;&gt;

搜索到的面板库属性列表
