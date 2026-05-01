---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [DMT\_EditorControl](./pro-api.dmt_editorcontrol.md) &gt; [moveDocumentToSplitScreen](./pro-api.dmt_editorcontrol.movedocumenttosplitscreen.md)

# DMT\_EditorControl.moveDocumentToSplitScreen() method

将文档移动到指定分屏

## 签名

```typescript
moveDocumentToSplitScreen(tabId: string, splitScreenId: string): Promise<boolean>;
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

tabId

</td><td>

string

</td><td>

标签页 ID

</td></tr>
<tr><td>

splitScreenId

</td><td>

string

</td><td>

[分屏 ID](./pro-api.idmt_editorsplitscreenitem.id.md)

</td></tr>
</tbody></table>

## 返回值

Promise&lt;boolean&gt;

操作是否成功

## 备注

移动文档后，编辑器分屏属性树可能会出现变化
