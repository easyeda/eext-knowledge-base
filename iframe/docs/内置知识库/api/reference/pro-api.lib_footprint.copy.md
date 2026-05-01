---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [LIB\_Footprint](./pro-api.lib_footprint.md) &gt; [copy](./pro-api.lib_footprint.copy.md)

# LIB\_Footprint.copy() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

复制封装

## 签名

```typescript
copy(footprintUuid: string, libraryUuid: string, targetLibraryUuid: string, targetClassification?: ILIB_ClassificationIndex | Array<string>, newFootprintName?: string): Promise<string | undefined>;
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

footprintUuid

</td><td>

string

</td><td>

封装 UUID

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

newFootprintName

</td><td>

string

</td><td>

_（可选）_ 新封装名称，如若目标库内存在重名封装将导致复制失败

</td></tr>
</tbody></table>

## 返回值

Promise&lt;string \| undefined&gt;

目标库内新封装的 UUID
