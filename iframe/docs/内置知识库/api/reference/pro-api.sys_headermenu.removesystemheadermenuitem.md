---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [SYS\_HeaderMenu](./pro-api.sys_headermenu.md) &gt; [removeSystemHeaderMenuItem](./pro-api.sys_headermenu.removesystemheadermenuitem.md)

# SYS\_HeaderMenu.removeSystemHeaderMenuItem() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

移除系统顶部菜单项

## 签名

```typescript
removeSystemHeaderMenuItem(id: Array<string>, props?: {
        removeTheBeforeDivider?: boolean;
        removeTheAfterDivider?: boolean;
    }): Promise<boolean>;
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

id

</td><td>

Array&lt;string&gt;

</td><td>

菜单项 ID 树，将会按照数组顺序按层级匹配菜单项，并移除数组最后一位对应的菜单项

</td></tr>
<tr><td>

props

</td><td>

\{ removeTheBeforeDivider?: boolean; removeTheAfterDivider?: boolean; \}

</td><td>

_（可选）_ 其它参数，是否移除菜单项之前、之后的分隔线

</td></tr>
</tbody></table>

## 返回值

Promise&lt;boolean&gt;

移除操作是否成功，菜单已移除但分隔线未找到也会返回 `true` 的结果

## 备注

一旦菜单被移除，需要重启嘉立创 EDA 软件才可以恢复

本接口无法移除  接口导入的系统顶部菜单项

本接口无法移除第一级菜单，`id` 数组请至少传递 `2` 个值

本接口无法移除 \*\*高级\*\* 菜单下的任何子菜单

注意：本接口需要使用者启用扩展的外部交互权限，如若未启用将始终 `throw Error`

非公开接口使用提醒：本接口按原样提供，不提供参数的额外文档，参数可能在任何版本出现破坏性更改并不另行通知
