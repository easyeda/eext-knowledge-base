---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [DMT\_Folder](./pro-api.dmt_folder.md) &gt; [createFolder](./pro-api.dmt_folder.createfolder.md)

# DMT\_Folder.createFolder() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

创建文件夹

## 签名

```typescript
createFolder(folderName: string, teamUuid: string, parentFolderUuid?: string, description?: string): Promise<string | undefined>;
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

folderName

</td><td>

string

</td><td>

文件夹名称

</td></tr>
<tr><td>

teamUuid

</td><td>

string

</td><td>

团队 UUID

</td></tr>
<tr><td>

parentFolderUuid

</td><td>

string

</td><td>

_（可选）_ 父文件夹 UUID，如若不指定，则为根文件夹

</td></tr>
<tr><td>

description

</td><td>

string

</td><td>

_（可选）_ 文件夹描述

</td></tr>
</tbody></table>

## 返回值

Promise&lt;string \| undefined&gt;

文件夹 UUID，如若为 `undefined` 则创建失败
