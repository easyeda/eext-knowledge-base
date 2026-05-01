---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [DMT\_Folder](./pro-api.dmt_folder.md) &gt; [moveFolderToFolder](./pro-api.dmt_folder.movefoldertofolder.md)

# DMT\_Folder.moveFolderToFolder() method

移动文件夹

## 签名

```typescript
moveFolderToFolder(teamUuid: string, folderUuid: string, parentFolderUuid?: string): Promise<boolean>;
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

parentFolderUuid

</td><td>

string

</td><td>

_（可选）_ 父文件夹 UUID，如若不指定，则默认为根文件夹

</td></tr>
</tbody></table>

## 返回值

Promise&lt;boolean&gt;

是否移动成功
