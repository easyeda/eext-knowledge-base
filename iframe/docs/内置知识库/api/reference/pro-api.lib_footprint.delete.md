---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [LIB\_Footprint](./pro-api.lib_footprint.md) &gt; [delete](./pro-api.lib_footprint.delete.md)

# LIB\_Footprint.delete() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

删除封装

## 签名

```typescript
delete(footprintUuid: string, libraryUuid: string): Promise<boolean>;
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

footprintUuid

</td><td>

string

</td><td>

封装 UUID

</td></tr>
<tr><td>

libraryUuid

</td><td>

string

</td><td>

库 UUID，可以使用 [LIB\_LibrariesList](./pro-api.lib_librarieslist.md) 内的接口获取

</td></tr>
</tbody></table>

## 返回值

Promise&lt;boolean&gt;

操作是否成功
