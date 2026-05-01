---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [LIB\_Symbol](./pro-api.lib_symbol.md) &gt; [openInEditor](./pro-api.lib_symbol.openineditor.md)

# LIB\_Symbol.openInEditor() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

在编辑器打开文档

## 签名

```typescript
openInEditor(symbolUuid: string, libraryUuid: string, splitScreenId?: string): Promise<string | undefined>;
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

splitScreenId

</td><td>

string

</td><td>

_（可选）_ 分屏 ID，不填写则默认在最后输入焦点的分屏内打开，可以使用 [DMT\_EditorControl](./pro-api.dmt_editorcontrol.md) 内的接口获取

</td></tr>
</tbody></table>

## 返回值

Promise&lt;string \| undefined&gt;

标签页 ID，对应 [IDMT\_EditorTabItem.tabId](./pro-api.idmt_editortabitem.tabid.md)<!-- -->，可使用 [DMT\_EditorControl.getSplitScreenIdByTabId()](./pro-api.dmt_editorcontrol.getsplitscreenidbytabid.md) 获取到分屏 ID
