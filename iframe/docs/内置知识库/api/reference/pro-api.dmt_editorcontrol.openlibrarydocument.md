---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [DMT\_EditorControl](./pro-api.dmt_editorcontrol.md) &gt; [openLibraryDocument](./pro-api.dmt_editorcontrol.openlibrarydocument.md)

# DMT\_EditorControl.openLibraryDocument() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

打开库符号、封装文档

## 签名

```typescript
openLibraryDocument(libraryUuid: string, libraryType: ELIB_LibraryType.SYMBOL | ELIB_LibraryType.FOOTPRINT, uuid: string, splitScreenId?: string): Promise<string | undefined>;
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

libraryType

</td><td>

[ELIB\_LibraryType.SYMBOL](./pro-api.elib_librarytype.md) \| [ELIB\_LibraryType.FOOTPRINT](./pro-api.elib_librarytype.md)

</td><td>

库类型，支持符号和封装

</td></tr>
<tr><td>

uuid

</td><td>

string

</td><td>

符号、封装 UUID

</td></tr>
<tr><td>

splitScreenId

</td><td>

string

</td><td>

_（可选）_ 分屏 ID，即 [DMT\_EditorControl.getSplitScreenTree()](./pro-api.dmt_editorcontrol.getsplitscreentree.md) 方法获取到的 [IDMT\_EditorSplitScreenItem.id](./pro-api.idmt_editorsplitscreenitem.id.md)

</td></tr>
</tbody></table>

## 返回值

Promise&lt;string \| undefined&gt;

标签页 ID，如若为 `undefined`<!-- -->，则打开文档失败
