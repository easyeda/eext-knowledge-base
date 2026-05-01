---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [LIB\_PanelLibrary](./pro-api.lib_panellibrary.md) &gt; [create](./pro-api.lib_panellibrary.create.md)

# LIB\_PanelLibrary.create() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

创建面板库

## 签名

```typescript
create(libraryUuid: string, panelLibraryName: string, classification?: ILIB_ClassificationIndex | Array<string>, description?: string): Promise<string | undefined>;
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

panelLibraryName

</td><td>

string

</td><td>

面板库名称

</td></tr>
<tr><td>

classification

</td><td>

[ILIB\_ClassificationIndex](./pro-api.ilib_classificationindex.md) \| Array&lt;string&gt;

</td><td>

_（可选）_ 分类

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

面板库 UUID
