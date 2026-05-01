---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [SYS\_FileManager](./pro-api.sys_filemanager.md) &gt; [getCbbFileByCbbUuid](./pro-api.sys_filemanager.getcbbfilebycbbuuid.md)

# SYS\_FileManager.getCbbFileByCbbUuid() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

使用复用模块 UUID 获取复用模块文件

## 签名

```typescript
getCbbFileByCbbUuid(cbbUuid: string, libraryUuid?: string, props?: {
        fileName?: string;
        password?: string;
        fileType?: 'epro' | 'epro2';
        templateSchematicUuid?: string;
        templatePcbUuid?: string;
    }): Promise<File | undefined>;
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

cbbUuid

</td><td>

string

</td><td>

复用模块 UUID

</td></tr>
<tr><td>

libraryUuid

</td><td>

string

</td><td>

_（可选）_ 库 UUID，可以使用 [LIB\_LibrariesList](./pro-api.lib_librarieslist.md) 内的接口获取

</td></tr>
<tr><td>

props

</td><td>

{ fileName?: string; password?: string; fileType?: 'epro' \| 'epro2'; templateSchematicUuid?: string; templatePcbUuid?: string; }

</td><td>

_(Optional)_

</td></tr>
</tbody></table>

## 返回值

Promise&lt;File \| undefined&gt;

复用模块文件数据，`undefined` 表示数据获取失败

## 备注

可以使用 [SYS\_FileSystem.saveFile()](./pro-api.sys_filesystem.savefile.md) 接口将文件导出到本地文件系统

注意：本接口需要启用 \*\*团队模块 &gt; 下载模块\*\* 权限，没有权限调用将始终 `throw Error`
