---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [SYS\_ShortcutKey](./pro-api.sys_shortcutkey.md) &gt; [unregisterShortcutKey](./pro-api.sys_shortcutkey.unregistershortcutkey.md)

# SYS\_ShortcutKey.unregisterShortcutKey() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

反注册快捷键

## 签名

```typescript
unregisterShortcutKey(shortcutKey: TSYS_ShortcutKeys): Promise<boolean>;
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

快捷键，不区分传入的排列顺序，将自动排序并查询匹配的快捷键

</td></tr>
</tbody></table>

## 返回值

Promise&lt;boolean&gt;

反注册操作是否成功
