---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [LIB\_Footprint](./pro-api.lib_footprint.md) &gt; [updateDocumentSource](./pro-api.lib_footprint.updatedocumentsource.md)

# LIB\_Footprint.updateDocumentSource() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

更新封装的文档源码

## 签名

```typescript
updateDocumentSource(footprintUuid: string, libraryUuid: string, documentSource: string): Promise<boolean | undefined>;
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

documentSource

</td><td>

string

</td><td>

文档源码

</td></tr>
</tbody></table>

## 返回值

Promise&lt;boolean \| undefined&gt;

是否更新成功
