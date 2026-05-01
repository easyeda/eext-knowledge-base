---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [SYS\_HeaderMenu](./pro-api.sys_headermenu.md) &gt; [insertSystemHeaderMenuItem](./pro-api.sys_headermenu.insertsystemheadermenuitem.md)

# SYS\_HeaderMenu.insertSystemHeaderMenuItem() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

在指定位置插入系统顶部菜单项

## 签名

```typescript
insertSystemHeaderMenuItem(env: ESYS_HeaderMenuEnvironment, id: Array<string>, props: {
        title: string;
        registerFn?: string;
        menuItems?: Array<ISYS_HeaderMenuSub1MenuItem | ISYS_HeaderMenuSub2MenuItem | null>;
        insertDividerBefore?: boolean;
        insertDividerAfter?: boolean;
        insertBefore?: string;
        crossDividerWhenInsert?: boolean;
    }): Promise<string | undefined>;
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

env

</td><td>

[ESYS\_HeaderMenuEnvironment](./pro-api.esys_headermenuenvironment.md)

</td><td>

环境

</td></tr>
<tr><td>

id

</td><td>

Array&lt;string&gt;

</td><td>

菜单项 ID 树，将会按照数组顺序按层级匹配菜单项，并将数组最后一位作为插入的菜单项的 ID

</td></tr>
<tr><td>

props

</td><td>

{ title: string; registerFn?: string; menuItems?: Array&lt;[ISYS\_HeaderMenuSub1MenuItem](./pro-api.isys_headermenusub1menuitem.md) \| [ISYS\_HeaderMenuSub2MenuItem](./pro-api.isys_headermenusub2menuitem.md) \| null&gt;; insertDividerBefore?: boolean; insertDividerAfter?: boolean; insertBefore?: string; crossDividerWhenInsert?: boolean; }

</td><td>

其它参数

</td></tr>
</tbody></table>

## 返回值

Promise&lt;string \| undefined&gt;

顶部菜单项的 ID 数组，分隔线是否插入并不会影响操作结果的返回值

## 备注

系统顶部菜单一旦新增无法有效删除，需要重启嘉立创 EDA 软件才可以恢复

本接口需要在系统已有的系统一级菜单下新增子菜单，无法新增和修改一级菜单，`id` 数组请至少传递 `2` 个值

本接口将会强制新建的系统顶部菜单的 ID 包含扩展 UUID，例如输入的 `id = 'example'`<!-- -->，将会被自动重写为 `e143d88179874e7f851cc890cd22fc71|example`<!-- -->，后续如需移除该菜单，请输入重写后的名称

本接口不能在 \*\*高级\*\* 菜单下新增任何子菜单

本接口新增的子菜单将默认排列在原菜单的结尾，除非指定了 `props.insertBefore` 参数

注意：本接口需要使用者启用扩展的外部交互权限，如若未启用将始终 `throw Error`

非公开接口使用提醒：本接口按原样提供，不提供参数的额外文档，参数可能在任何版本出现破坏性更改并不另行通知
