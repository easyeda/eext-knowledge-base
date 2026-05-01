---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [SYS\_FileManager](./pro-api.sys_filemanager.md) &gt; [getFootprintFileByFootprintUuid](./pro-api.sys_filemanager.getfootprintfilebyfootprintuuid.md)

# SYS\_FileManager.getFootprintFileByFootprintUuid() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

使用封装 UUID 获取封装文件

## 签名

```typescript
getFootprintFileByFootprintUuid(footprintUuid: string | Array<string>, libraryUuid?: string, fileType?: 'elibz' | 'elibz2'): Promise<File | undefined>;
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

footprintUuid

</td><td>

string \| Array&lt;string&gt;

</td><td>

封装 UUID 或封装 UUID 列表

</td></tr>
<tr><td>

libraryUuid

</td><td>

string

</td><td>

_（可选）_ 库 UUID，可以使用 [LIB\_LibrariesList](./pro-api.lib_librarieslist.md) 内的接口获取

</td></tr>
<tr><td>

fileType

</td><td>

'elibz' \| 'elibz2'

</td><td>

_(Optional)_

</td></tr>
</tbody></table>

## 返回值

Promise&lt;File \| undefined&gt;

封装文件数据，`undefined` 表示数据获取失败

## 备注

可以使用 [SYS\_FileSystem.saveFile()](./pro-api.sys_filesystem.savefile.md) 接口将文件导出到本地文件系统

注意：本接口需要启用 \*\*团队库 &gt; 下载库\*\* 权限，没有权限调用将始终 `throw Error`
