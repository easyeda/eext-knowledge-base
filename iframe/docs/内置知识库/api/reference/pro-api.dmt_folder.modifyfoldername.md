---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [DMT\_Folder](./pro-api.dmt_folder.md) &gt; [modifyFolderName](./pro-api.dmt_folder.modifyfoldername.md)

# DMT\_Folder.modifyFolderName() method

修改文件夹名称

## 签名

```typescript
modifyFolderName(teamUuid: string, folderUuid: string, folderName: string): Promise<boolean>;
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

folderName

</td><td>

string

</td><td>

文件夹名称

</td></tr>
</tbody></table>

## 返回值

Promise&lt;boolean&gt;

是否修改成功
