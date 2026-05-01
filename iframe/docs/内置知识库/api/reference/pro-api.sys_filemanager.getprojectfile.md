---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [SYS\_FileManager](./pro-api.sys_filemanager.md) &gt; [getProjectFile](./pro-api.sys_filemanager.getprojectfile.md)

# SYS\_FileManager.getProjectFile() method

获取工程文件

## 签名

```typescript
getProjectFile(fileName?: string, password?: string, fileType?: 'epro' | 'epro2'): Promise<File | undefined>;
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

fileName

</td><td>

string

</td><td>

_（可选）_ 文件名

</td></tr>
<tr><td>

password

</td><td>

string

</td><td>

_（可选）_ 加密密码

</td></tr>
<tr><td>

fileType

</td><td>

'epro' \| 'epro2'

</td><td>

_（可选）_ 文件格式

</td></tr>
</tbody></table>

## 返回值

Promise&lt;File \| undefined&gt;

工程文件数据，`undefined` 表示当前未打开工程或数据获取失败

## 备注

可以使用 [SYS\_FileSystem.saveFile()](./pro-api.sys_filesystem.savefile.md) 接口将文件导出到本地文件系统

注意：本接口需要启用 \*\*工程管理 &gt; 下载工程\*\* 权限，没有权限调用将始终 `throw Error`
