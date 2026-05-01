---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [DMT\_Folder](./pro-api.dmt_folder.md) &gt; [getFolderInfo](./pro-api.dmt_folder.getfolderinfo.md)

# DMT\_Folder.getFolderInfo() method

获取文件夹详细属性

## 签名

```typescript
getFolderInfo(teamUuid: string, folderUuid: string): Promise<IDMT_FolderItem | undefined>;
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
</tbody></table>

## 返回值

Promise&lt;[IDMT\_FolderItem](./pro-api.idmt_folderitem.md) \| undefined&gt;

文件夹属性，如若为 `undefined` 则获取失败

## 备注

当 [parentFolderUuid](./pro-api.idmt_folderitem.parentfolderuuid.md) 等于 [teamUuid](./pro-api.idmt_folderitem.teamuuid.md) 时，代表当前文件夹为指定团队下的一级文件夹
