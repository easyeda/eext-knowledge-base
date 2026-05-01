[Home](./pro-api.md) &gt; [ISYS\_HeaderMenuSub1MenuItem](./pro-api.isys_headermenusub1menuitem.md)

# ISYS\_HeaderMenuSub1MenuItem interface

顶部二级菜单项

## 签名

```typescript
interface ISYS_HeaderMenuSub1MenuItem
```

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

[icon?](./pro-api.isys_headermenusub1menuitem.icon.md)

</td><td>

</td><td>

string

</td><td>

_（可选）_ 菜单项图标

</td></tr>
<tr><td>

[id](./pro-api.isys_headermenusub1menuitem.id.md)

</td><td>

</td><td>

string

</td><td>

菜单项 ID，不可重复

</td></tr>
<tr><td>

[menuItems?](./pro-api.isys_headermenusub1menuitem.menuitems.md)

</td><td>

</td><td>

Array&lt;[ISYS\_HeaderMenuSub2MenuItem](./pro-api.isys_headermenusub2menuitem.md) \| null&gt;

</td><td>

_（可选）_ 子菜单项

</td></tr>
<tr><td>

[registerFn?](./pro-api.isys_headermenusub1menuitem.registerfn.md)

</td><td>

</td><td>

string

</td><td>

_（可选）_ 注册方法名称（需要在扩展入口文件导出该方法）

</td></tr>
<tr><td>

[title](./pro-api.isys_headermenusub1menuitem.title.md)

</td><td>

</td><td>

string

</td><td>

菜单项标题

</td></tr>
</tbody></table>
