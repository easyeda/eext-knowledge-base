---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [SYS\_HeaderMenu](./pro-api.sys_headermenu.md) &gt; [replaceHeaderMenus](./pro-api.sys_headermenu.replaceheadermenus.md)

# SYS\_HeaderMenu.replaceHeaderMenus() method

替换顶部菜单数据

## 签名

```typescript
replaceHeaderMenus(headerMenus: ISYS_HeaderMenus): Promise<void>;
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

headerMenus

</td><td>

[ISYS\_HeaderMenus](./pro-api.isys_headermenus.md)

</td><td>

顶部菜单数据

</td></tr>
</tbody></table>

## 返回值

Promise&lt;void&gt;

## 备注

本接口相当于同时执行了 [移除](./pro-api.sys_headermenu.removeheadermenus.md) 和 [导入](./pro-api.sys_headermenu.insertheadermenus.md) 操作
