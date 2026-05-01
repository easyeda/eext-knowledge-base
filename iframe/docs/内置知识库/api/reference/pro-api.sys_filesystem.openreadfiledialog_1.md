---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [SYS\_FileSystem](./pro-api.sys_filesystem.md) &gt; [openReadFileDialog](./pro-api.sys_filesystem.openreadfiledialog_1.md)

# SYS\_FileSystem.openReadFileDialog() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

打开读入文件窗口

## 签名

```typescript
openReadFileDialog(filenameExtensions?: string | Array<string>, multiFiles?: false): Promise<File | undefined>;
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

filenameExtensions

</td><td>

string \| Array&lt;string&gt;

</td><td>

_（可选）_ 文件扩展名

</td></tr>
<tr><td>

multiFiles

</td><td>

false

</td><td>

_（可选）_ 是否允许读取多文件

</td></tr>
</tbody></table>

## 返回值

Promise&lt;File \| undefined&gt;

File 格式文件
