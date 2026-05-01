---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [SYS\_ShortcutKey](./pro-api.sys_shortcutkey.md) &gt; [getShortcutKeys](./pro-api.sys_shortcutkey.getshortcutkeys.md)

# SYS\_ShortcutKey.getShortcutKeys() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

查询快捷键列表

## 签名

```typescript
getShortcutKeys(includeSystem?: boolean): Promise<Array<{
        shortcutKey: TSYS_ShortcutKeys;
        title: string;
        documentType: Array<ESYS_ShortcutKeyEffectiveEditorDocumentType>;
        scene: Array<ESYS_ShortcutKeyEffectiveEditorScene>;
    }>>;
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

includeSystem

</td><td>

boolean

</td><td>

_（可选）_ 是否包含系统快捷键

</td></tr>
</tbody></table>

## 返回值

Promise&lt;Array&lt;{ shortcutKey: [TSYS\_ShortcutKeys](./pro-api.tsys_shortcutkeys.md)<!-- -->; title: string; documentType: Array&lt;[ESYS\_ShortcutKeyEffectiveEditorDocumentType](./pro-api.esys_shortcutkeyeffectiveeditordocumenttype.md)<!-- -->&gt;; scene: Array&lt;[ESYS\_ShortcutKeyEffectiveEditorScene](./pro-api.esys_shortcutkeyeffectiveeditorscene.md)<!-- -->&gt;; }&gt;&gt;

快捷键列表
