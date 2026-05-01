---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [DMT\_Folder](./pro-api.dmt_folder.md) &gt; [deleteFolder](./pro-api.dmt_folder.deletefolder.md)

# DMT\_Folder.deleteFolder() method

删除文件夹

## 签名

```typescript
deleteFolder(teamUuid: string, folderUuid: string): Promise<boolean>;
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

Promise&lt;boolean&gt;

操作是否成功
