---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [LIB\_Classification](./pro-api.lib_classification.md) &gt; [getNameByIndex](./pro-api.lib_classification.getnamebyindex.md)

# LIB\_Classification.getNameByIndex() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

> 警告：此 API 现已弃用。
>
> - since EDA v3.2; dropped EDA v3.3

获取指定索引的分类的名称

## 签名

```typescript
getNameByIndex(classificationIndex: ILIB_ClassificationIndex): Promise<{
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

classificationIndex

</td><td>

[ILIB\_ClassificationIndex](./pro-api.ilib_classificationindex.md)

</td><td>

分类索引

</td></tr>
</tbody></table>

## 返回值

Promise&lt;{ primaryClassificationName: string; secondaryClassificationName?: string \| undefined; } \| undefined&gt;

两级分类的名称
