---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [LIB\_Cbb](./pro-api.lib_cbb.md) &gt; [openProjectInEditor](./pro-api.lib_cbb.openprojectineditor.md)

# LIB\_Cbb.openProjectInEditor() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

在编辑器打开复用模块工程

## 签名

```typescript
openProjectInEditor(cbbUuid: string, libraryUuid: string): Promise<boolean>;
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

库 UUID，可以使用 [LIB\_LibrariesList](./pro-api.lib_librarieslist.md) 内的接口获取

</td></tr>
</tbody></table>

## 返回值

Promise&lt;boolean&gt;

## 备注

本操作将会在 EDA 前端打开模块工程，如若原先已打开其它工程且有未保存的变更，执行本操作将直接丢失所有未保存的数据
