---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [SYS\_FileManager](./pro-api.sys_filemanager.md) &gt; [getDeviceFileByDeviceUuid](./pro-api.sys_filemanager.getdevicefilebydeviceuuid.md)

# SYS\_FileManager.getDeviceFileByDeviceUuid() method

使用器件 UUID 获取器件文件

## 签名

```typescript
getDeviceFileByDeviceUuid(deviceUuid: string | Array<string>, libraryUuid?: string, fileType?: 'elibz' | 'elibz2'): Promise<File | undefined>;
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

deviceUuid

</td><td>

string \| Array&lt;string&gt;

</td><td>

器件 UUID 或器件 UUID 列表

</td></tr>
<tr><td>

libraryUuid

</td><td>

string

</td><td>

_（可选）_ 库 UUID，可以使用 [LIB\_LibrariesList](./pro-api.lib_librarieslist.md) 内的接口获取，如若不传入，则为系统库

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

器件文件数据，`undefined` 表示数据获取失败

## 备注

可以使用 [SYS\_FileSystem.saveFile()](./pro-api.sys_filesystem.savefile.md) 接口将文件导出到本地文件系统

注意：本接口需要启用 \*\*团队库 &gt; 下载库\*\* 权限，没有权限调用将始终 `throw Error`
