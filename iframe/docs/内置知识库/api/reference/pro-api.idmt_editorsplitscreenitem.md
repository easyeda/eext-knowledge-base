[Home](./pro-api.md) &gt; [IDMT\_EditorSplitScreenItem](./pro-api.idmt_editorsplitscreenitem.md)

# IDMT\_EditorSplitScreenItem interface

编辑器分屏属性

## 签名

```typescript
interface IDMT_EditorSplitScreenItem
```

## 备注

[tabs](./pro-api.idmt_editorsplitscreenitem.tabs.md) 和 [children](./pro-api.idmt_editorsplitscreenitem.children.md) 并不同时存在，当 [tabs](./pro-api.idmt_editorsplitscreenitem.tabs.md) 存在时，代表不存在分屏，[children](./pro-api.idmt_editorsplitscreenitem.children.md) 将为 `undefined`

## 属性

<table><thead><tr><th>

属性名

</th><th>

修饰符

</th><th>

类型

</th><th>

描述

</th></tr></thead>
<tbody><tr><td>

[children?](./pro-api.idmt_editorsplitscreenitem.children.md)

</td><td>

</td><td>

Array&lt;[IDMT\_EditorSplitScreenItem](./pro-api.idmt_editorsplitscreenitem.md)<!-- -->&gt;

</td><td>

_（可选）_ 子分屏

</td></tr>
<tr><td>

[direction?](./pro-api.idmt_editorsplitscreenitem.direction.md)

</td><td>

</td><td>

[EDMT\_EditorSplitScreenDirection](./pro-api.edmt_editorsplitscreendirection.md)

</td><td>

_（可选）_ 分屏方向

</td></tr>
<tr><td>

[fatherId?](./pro-api.idmt_editorsplitscreenitem.fatherid.md)

</td><td>

</td><td>

string

</td><td>

_（可选）_ 父级分屏 ID

</td></tr>
<tr><td>

[id](./pro-api.idmt_editorsplitscreenitem.id.md)

</td><td>

</td><td>

string

</td><td>

分屏 ID

</td></tr>
<tr><td>

[tabs?](./pro-api.idmt_editorsplitscreenitem.tabs.md)

</td><td>

</td><td>

Array&lt;[IDMT\_EditorTabItem](./pro-api.idmt_editortabitem.md)<!-- -->&gt;

</td><td>

_（可选）_ 分屏内标签页

</td></tr>
</tbody></table>
