---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [SYS\_ShortcutKey](./pro-api.sys_shortcutkey.md) &gt; [registerShortcutKey](./pro-api.sys_shortcutkey.registershortcutkey.md)

# SYS\_ShortcutKey.registerShortcutKey() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

注册快捷键

## 签名

```typescript
registerShortcutKey(shortcutKey: TSYS_ShortcutKeys, title: string, callbackFn: (shortcutKey: TSYS_ShortcutKeys) => void | Promise<void>, documentType?: Array<ESYS_ShortcutKeyEffectiveEditorDocumentType>, scene?: Array<ESYS_ShortcutKeyEffectiveEditorScene>): Promise<boolean>;
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

shortcutKey

</td><td>

[TSYS\_ShortcutKeys](./pro-api.tsys_shortcutkeys.md)

</td><td>

快捷键，数组中包含多个元素则解析为组合快捷键，将按规则排序后存入缓存

</td></tr>
<tr><td>

title

</td><td>

string

</td><td>

快捷键标题，快捷键的友好名称

</td></tr>
<tr><td>

callbackFn

</td><td>

(shortcutKey: [TSYS\_ShortcutKeys](./pro-api.tsys_shortcutkeys.md)<!-- -->) =&gt; void \| Promise&lt;void&gt;

</td><td>

回调函数

</td></tr>
<tr><td>

documentType

</td><td>

Array&lt;[ESYS\_ShortcutKeyEffectiveEditorDocumentType](./pro-api.esys_shortcutkeyeffectiveeditordocumenttype.md)<!-- -->&gt;

</td><td>

_(Optional)_

</td></tr>
<tr><td>

scene

</td><td>

Array&lt;[ESYS\_ShortcutKeyEffectiveEditorScene](./pro-api.esys_shortcutkeyeffectiveeditorscene.md)<!-- -->&gt;

</td><td>

_(Optional)_

</td></tr>
</tbody></table>

## 返回值

Promise&lt;boolean&gt;

注册操作是否成功
