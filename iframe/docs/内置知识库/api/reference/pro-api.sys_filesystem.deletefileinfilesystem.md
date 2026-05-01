---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [SYS\_FileSystem](./pro-api.sys_filesystem.md) &gt; [deleteFileInFileSystem](./pro-api.sys_filesystem.deletefileinfilesystem.md)

# SYS\_FileSystem.deleteFileInFileSystem() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

删除文件系统内的文件

## 签名

```typescript
deleteFileInFileSystem(uri: string, force?: boolean): Promise<boolean>;
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

uri

</td><td>

string

</td><td>

文件资源定位符

如若结尾为斜杠 `/`<!-- -->（Windows 为反斜杠 `\`<!-- -->），则识别为文件夹；

如若结尾非斜杠，则识别为完整文件名，此时 `fileName` 参数将被忽略

</td></tr>
<tr><td>

force

</td><td>

boolean

</td><td>

_（可选）_ 强制删除文件夹（当欲删除的是文件夹且文件夹内有文件时，是否强制删除该文件夹）

</td></tr>
</tbody></table>

## 返回值

Promise&lt;boolean&gt;

删除操作是否成功

## 备注

注意 1：本接口仅客户端有效，在浏览器环境内调用将始终 `throw Error`

注意 2：本接口需要使用者启用扩展的外部交互权限，如若未启用将始终 `throw Error`
