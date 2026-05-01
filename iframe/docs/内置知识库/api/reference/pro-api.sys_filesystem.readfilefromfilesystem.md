---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [SYS\_FileSystem](./pro-api.sys_filesystem.md) &gt; [readFileFromFileSystem](./pro-api.sys_filesystem.readfilefromfilesystem.md)

# SYS\_FileSystem.readFileFromFileSystem() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

从文件系统读取文件

## 签名

```typescript
readFileFromFileSystem(uri: string): Promise<File | undefined>;
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

文件资源定位符，需要包含完整的文件名称的绝对路径

</td></tr>
</tbody></table>

## 返回值

Promise&lt;File \| undefined&gt;

File 格式文件

## 备注

注意 1：本接口仅客户端有效，在浏览器环境内调用将始终 `throw Error`

注意 2：本接口需要使用者启用扩展的外部交互权限，如若未启用将始终 `throw Error`
