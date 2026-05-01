---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [LIB\_Classification](./pro-api.lib_classification.md) &gt; [createPrimary](./pro-api.lib_classification.createprimary.md)

# LIB\_Classification.createPrimary() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

> 警告：此 API 现已弃用。
>
> - since EDA v3.2; dropped EDA v3.3

创建一级分类

## 签名

```typescript
createPrimary(libraryUuid: string, libraryType: ELIB_LibraryType, primaryClassificationName: string): Promise<ILIB_ClassificationIndex | undefined>;
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

primaryClassificationName

</td><td>

string

</td><td>

一级分类名称

</td></tr>
</tbody></table>

## 返回值

Promise&lt;[ILIB\_ClassificationIndex](./pro-api.ilib_classificationindex.md) \| undefined&gt;

分类索引
