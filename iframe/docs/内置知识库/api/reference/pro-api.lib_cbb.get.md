---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [LIB\_Cbb](./pro-api.lib_cbb.md) &gt; [get](./pro-api.lib_cbb.get.md)

# LIB\_Cbb.get() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

获取复用模块的所有属性

## 签名

```typescript
get(cbbUuid: string, libraryUuid?: string): Promise<ILIB_CbbItem | undefined>;
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

cbbUuid

</td><td>

string

</td><td>

复用模块 UUID

</td></tr>
<tr><td>

libraryUuid

</td><td>

string

</td><td>

_（可选）_ 库 UUID，可以使用 [LIB\_LibrariesList](./pro-api.lib_librarieslist.md) 内的接口获取

</td></tr>
</tbody></table>

## 返回值

Promise&lt;[ILIB\_CbbItem](./pro-api.ilib_cbbitem.md) \| undefined&gt;

复用模块属性
