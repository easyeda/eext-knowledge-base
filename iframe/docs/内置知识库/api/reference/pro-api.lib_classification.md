[Home](./pro-api.md) &gt; [LIB\_Classification](./pro-api.lib_classification.md)

# LIB\_Classification class

综合库 / 库分类索引类

## 签名

```typescript
declare class LIB_Classification
```

## 方法

<table><thead><tr><th>

方法名

</th><th>

修饰符

</th><th>

描述

</th></tr></thead>
<tbody><tr><td>

[createPrimary(libraryUuid, libraryType, primaryClassificationName)](./pro-api.lib_classification.createprimary.md)

</td><td>

</td><td>

**_(BETA)_** 创建一级分类

</td></tr>
<tr><td>

[createSecondary(libraryUuid, libraryType, primaryClassificationUuid, secondaryClassificationName)](./pro-api.lib_classification.createsecondary.md)

</td><td>

</td><td>

**_(BETA)_** 创建二级分类

</td></tr>
<tr><td>

[deleteByIndex(classificationIndex)](./pro-api.lib_classification.deletebyindex.md)

</td><td>

</td><td>

**_(BETA)_** 删除指定索引的分类

</td></tr>
<tr><td>

[deleteByUuid(libraryUuid, classificationUuid)](./pro-api.lib_classification.deletebyuuid.md)

</td><td>

</td><td>

**_(BETA)_** 删除指定 UUID 的分类

</td></tr>
<tr><td>

[getAllClassificationTree(libraryUuid, libraryType)](./pro-api.lib_classification.getallclassificationtree.md)

</td><td>

</td><td>

**_(BETA)_** 获取所有分类信息组成的树

</td></tr>
<tr><td>

[getIndexByName(libraryUuid, libraryType, primaryClassificationName, secondaryClassificationName)](./pro-api.lib_classification.getindexbyname.md)

</td><td>

</td><td>

**_(BETA)_** 获取指定名称的分类的分类索引

</td></tr>
<tr><td>

[getNameByIndex(classificationIndex)](./pro-api.lib_classification.getnamebyindex.md)

</td><td>

</td><td>

**_(BETA)_** 获取指定索引的分类的名称

</td></tr>
<tr><td>

[getNameByUuid(libraryUuid, libraryType, primaryClassificationUuid, secondaryClassificationUuid)](./pro-api.lib_classification.getnamebyuuid.md)

</td><td>

</td><td>

**_(BETA)_** 获取指定 UUID 的分类的名称

</td></tr>
</tbody></table>
