---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [LIB\_3DModel](./pro-api.lib_3dmodel.md) &gt; [create](./pro-api.lib_3dmodel.create.md)

# LIB\_3DModel.create() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

创建 3D 模型

## 签名

```typescript
create(libraryUuid: string, modelFile: Blob, classification?: ILIB_ClassificationIndex | Array<string>, unit?: ESYS_Unit.MILLIMETER | ESYS_Unit.CENTIMETER | ESYS_Unit.METER | ESYS_Unit.MIL | ESYS_Unit.INCH): Promise<string[] | undefined>;
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

modelFile

</td><td>

Blob

</td><td>

3D 模型文件数据

</td></tr>
<tr><td>

classification

</td><td>

[ILIB\_ClassificationIndex](./pro-api.ilib_classificationindex.md) \| Array&lt;string&gt;

</td><td>

_（可选）_ 分类

</td></tr>
<tr><td>

unit

</td><td>

[ESYS\_Unit.MILLIMETER](./pro-api.esys_unit.md) \| [ESYS\_Unit.CENTIMETER](./pro-api.esys_unit.md) \| [ESYS\_Unit.METER](./pro-api.esys_unit.md) \| [ESYS\_Unit.MIL](./pro-api.esys_unit.md) \| [ESYS\_Unit.INCH](./pro-api.esys_unit.md)

</td><td>

_(Optional)_

</td></tr>
</tbody></table>

## 返回值

Promise&lt;string\[\] \| undefined&gt;

3D 模型 UUID
