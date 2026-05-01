[Home](./pro-api.md) &gt; [ISYS\_HeaderMenuTopMenuItem](./pro-api.isys_headermenutopmenuitem.md)

# ISYS\_HeaderMenuTopMenuItem interface

顶部一级菜单项

## 签名

```typescript
interface ISYS_HeaderMenuTopMenuItem
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

[id](./pro-api.isys_headermenutopmenuitem.id.md)

</td><td>

</td><td>

string

</td><td>

菜单项 ID，不可重复

</td></tr>
<tr><td>

[menuItems?](./pro-api.isys_headermenutopmenuitem.menuitems.md)

</td><td>

</td><td>

Array&lt;[ISYS\_HeaderMenuSub1MenuItem](./pro-api.isys_headermenusub1menuitem.md) \| null&gt;

</td><td>

_（可选）_ 子菜单项

</td></tr>
<tr><td>

[registerFn?](./pro-api.isys_headermenutopmenuitem.registerfn.md)

</td><td>

</td><td>

string

</td><td>

_（可选）_ 注册方法名称（需要在扩展入口文件导出该方法）

</td></tr>
<tr><td>

[title](./pro-api.isys_headermenutopmenuitem.title.md)

</td><td>

</td><td>

string

</td><td>

菜单项标题

</td></tr>
</tbody></table>
