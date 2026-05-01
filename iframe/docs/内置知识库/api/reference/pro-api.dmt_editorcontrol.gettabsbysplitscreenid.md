---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [DMT\_EditorControl](./pro-api.dmt_editorcontrol.md) &gt; [getTabsBySplitScreenId](./pro-api.dmt_editorcontrol.gettabsbysplitscreenid.md)

# DMT\_EditorControl.getTabsBySplitScreenId() method

获取指定分屏 ID 下的所有标签页

## 签名

```typescript
getTabsBySplitScreenId(splitScreenId: string): Promise<Array<IDMT_EditorTabItem>>;
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

splitScreenId

</td><td>

string

</td><td>

分屏 ID

</td></tr>
</tbody></table>

## 返回值

Promise&lt;Array&lt;[IDMT\_EditorTabItem](./pro-api.idmt_editortabitem.md)<!-- -->&gt;&gt;

标签页列表

## 备注

如果指定分屏下不存在直接标签页（即它属下还存在 [children](./pro-api.idmt_editorsplitscreenitem.children.md)<!-- -->），则返回空数组
