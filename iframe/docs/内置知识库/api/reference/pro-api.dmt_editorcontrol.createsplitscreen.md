---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [DMT\_EditorControl](./pro-api.dmt_editorcontrol.md) &gt; [createSplitScreen](./pro-api.dmt_editorcontrol.createsplitscreen.md)

# DMT\_EditorControl.createSplitScreen() method

创建分屏

## 签名

```typescript
createSplitScreen(splitScreenType: EDMT_EditorSplitScreenDirection, tabId: string): Promise<{
        sourceSplitScreenId: string;
        newSplitScreenId: string;
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

splitScreenType

</td><td>

[EDMT\_EditorSplitScreenDirection](./pro-api.edmt_editorsplitscreendirection.md)

</td><td>

分屏类型，`horizontal` 水平、`vertical` 垂直

</td></tr>
<tr><td>

tabId

</td><td>

string

</td><td>

标签页 ID，该标签页将会被移入新的分屏中

</td></tr>
</tbody></table>

## 返回值

Promise&lt;{ sourceSplitScreenId: string; newSplitScreenId: string; } \| undefined&gt;

分屏 ID，`sourceSplitScreenId` 代表源分屏，`newSplitScreenId` 代表新分屏

## 备注

请确认 [tabId](./pro-api.dmt_editorcontrol.createsplitscreen.md) 对应的分屏存在两个以上的标签页，否则分屏将不会执行，并返回 `undefined`
