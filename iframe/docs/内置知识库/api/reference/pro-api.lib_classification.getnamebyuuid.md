---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [LIB\_Classification](./pro-api.lib_classification.md) &gt; [getNameByUuid](./pro-api.lib_classification.getnamebyuuid.md)

# LIB\_Classification.getNameByUuid() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

获取指定 UUID 的分类的名称

## 签名

```typescript
getNameByUuid(libraryUuid: string, libraryType: ELIB_LibraryType, primaryClassificationUuid: string, secondaryClassificationUuid?: string): Promise<{
        primaryClassificationName: string;
        secondaryClassificationName?: string | undefined;
    } | undefined>;
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

库 UUID

</td></tr>
<tr><td>

libraryType

</td><td>

[ELIB\_LibraryType](./pro-api.elib_librarytype.md)

</td><td>

库类型

</td></tr>
<tr><td>

primaryClassificationUuid

</td><td>

string

</td><td>

一级分类 UUID

</td></tr>
<tr><td>

secondaryClassificationUuid

</td><td>

string

</td><td>

_（可选）_ 二级分类 UUID，如若不指定，则只获取一级分类的信息

</td></tr>
</tbody></table>

## 返回值

Promise&lt;{ primaryClassificationName: string; secondaryClassificationName?: string \| undefined; } \| undefined&gt;

两级分类的名称
