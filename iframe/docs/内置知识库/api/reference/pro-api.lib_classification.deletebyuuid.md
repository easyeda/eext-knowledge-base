---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [LIB\_Classification](./pro-api.lib_classification.md) &gt; [deleteByUuid](./pro-api.lib_classification.deletebyuuid.md)

# LIB\_Classification.deleteByUuid() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

删除指定 UUID 的分类

## 签名

```typescript
deleteByUuid(libraryUuid: string, classificationUuid: string): Promise<boolean>;
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

classificationUuid

</td><td>

string

</td><td>

</td></tr>
</tbody></table>

## 返回值

Promise&lt;boolean&gt;

操作是否成功
