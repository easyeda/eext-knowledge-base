---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [LIB\_3DModel](./pro-api.lib_3dmodel.md) &gt; [get](./pro-api.lib_3dmodel.get.md)

# LIB\_3DModel.get() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

获取 3D 模型的所有属性

## 签名

```typescript
get(modelUuid: string, libraryUuid?: string): Promise<ILIB_3DModelItem | undefined>;
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

modelUuid

</td><td>

string

</td><td>

3D 模型 UUID

</td></tr>
<tr><td>

libraryUuid

</td><td>

string

</td><td>

_（可选）_ 库 UUID，可以使用 [LIB\_LibrariesList](./pro-api.lib_librarieslist.md) 内的接口获取

</td></tr>
</tbody></table>

## 返回值

Promise&lt;[ILIB\_3DModelItem](./pro-api.ilib_3dmodelitem.md) \| undefined&gt;

3D 模型属性
