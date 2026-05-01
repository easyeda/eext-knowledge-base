---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [LIB\_Classification](./pro-api.lib_classification.md) &gt; [getAllClassificationTree](./pro-api.lib_classification.getallclassificationtree.md)

# LIB\_Classification.getAllClassificationTree() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

获取所有分类信息组成的树

## 签名

```typescript
getAllClassificationTree(libraryUuid: string, libraryType: ELIB_LibraryType): Promise<Array<{
        name: string;
        uuid: string;
        children?: Array<{
            name: string;
            uuid: string;
        }> | undefined;
    }>>;
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
</tbody></table>

## 返回值

Promise&lt;Array&lt;{ name: string; uuid: string; children?: Array&lt;{ name: string; uuid: string; }&gt; \| undefined; }&gt;&gt;

分类信息组成的树结构数据
