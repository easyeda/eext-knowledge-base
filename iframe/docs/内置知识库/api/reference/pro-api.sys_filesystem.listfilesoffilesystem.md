---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [SYS\_FileSystem](./pro-api.sys_filesystem.md) &gt; [listFilesOfFileSystem](./pro-api.sys_filesystem.listfilesoffilesystem.md)

# SYS\_FileSystem.listFilesOfFileSystem() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

查看文件系统路径下的文件列表

## 签名

```typescript
listFilesOfFileSystem(folderPath: string, recursive?: boolean): Promise<Array<ISYS_FileSystemFileList>>;
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

folderPath

</td><td>

string

</td><td>

目录路径

</td></tr>
<tr><td>

recursive

</td><td>

boolean

</td><td>

_（可选）_ 是否递归获取所有子文件

</td></tr>
</tbody></table>

## 返回值

Promise&lt;Array&lt;[ISYS\_FileSystemFileList](./pro-api.isys_filesystemfilelist.md)<!-- -->&gt;&gt;

当前目录下的文件列表

## 备注

注意 1：本接口仅客户端有效，在浏览器环境内调用将始终 `throw Error`

注意 2：本接口需要使用者启用扩展的外部交互权限，如若未启用将始终 `throw Error`
