---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [LIB\_PanelLibrary](./pro-api.lib_panellibrary.md) &gt; [copy](./pro-api.lib_panellibrary.copy.md)

# LIB\_PanelLibrary.copy() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

复制面板库

## 签名

```typescript
copy(panelLibraryUuid: string, libraryUuid: string, targetLibraryUuid: string, targetClassification?: ILIB_ClassificationIndex | Array<string>, newPanelLibraryName?: string): Promise<string | undefined>;
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

panelLibraryUuid

</td><td>

string

</td><td>

面板库 UUID

</td></tr>
<tr><td>

libraryUuid

</td><td>

string

</td><td>

库 UUID，可以使用 [LIB\_LibrariesList](./pro-api.lib_librarieslist.md) 内的接口获取

</td></tr>
<tr><td>

targetLibraryUuid

</td><td>

string

</td><td>

目标库 UUID

</td></tr>
<tr><td>

targetClassification

</td><td>

[ILIB\_ClassificationIndex](./pro-api.ilib_classificationindex.md) \| Array&lt;string&gt;

</td><td>

_（可选）_ 目标库内的分类

</td></tr>
<tr><td>

newPanelLibraryName

</td><td>

string

</td><td>

_（可选）_ 新面板库名称，如若目标库内存在重名面板库将导致复制失败

</td></tr>
</tbody></table>

## 返回值

Promise&lt;string \| undefined&gt;

目标库内新面板库的 UUID
