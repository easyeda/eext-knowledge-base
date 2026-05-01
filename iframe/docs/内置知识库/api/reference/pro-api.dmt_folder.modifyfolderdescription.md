---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [DMT\_Folder](./pro-api.dmt_folder.md) &gt; [modifyFolderDescription](./pro-api.dmt_folder.modifyfolderdescription.md)

# DMT\_Folder.modifyFolderDescription() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

修改文件夹描述

## 签名

```typescript
modifyFolderDescription(teamUuid: string, folderUuid: string, description?: string): Promise<boolean>;
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

teamUuid

</td><td>

string

</td><td>

团队 UUID

</td></tr>
<tr><td>

folderUuid

</td><td>

string

</td><td>

文件夹 UUID

</td></tr>
<tr><td>

description

</td><td>

string

</td><td>

_（可选）_ 文件夹描述，如若为 `undefined` 则清空工程现有描述

</td></tr>
</tbody></table>

## 返回值

Promise&lt;boolean&gt;

是否修改成功

## 备注

修改文件夹描述需要与工作区系统进行交互，修改操作存在延迟，需要短暂等待后才会呈现效果
