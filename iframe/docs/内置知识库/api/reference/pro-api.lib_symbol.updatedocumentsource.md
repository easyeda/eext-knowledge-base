---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [LIB\_Symbol](./pro-api.lib_symbol.md) &gt; [updateDocumentSource](./pro-api.lib_symbol.updatedocumentsource.md)

# LIB\_Symbol.updateDocumentSource() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

更新符号的文档源码

## 签名

```typescript
updateDocumentSource(symbolUuid: string, libraryUuid: string, documentSource: string): Promise<boolean | undefined>;
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

symbolUuid

</td><td>

string

</td><td>

符号 UUID

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
