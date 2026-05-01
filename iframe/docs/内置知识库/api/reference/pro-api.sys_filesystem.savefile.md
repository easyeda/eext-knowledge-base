---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [SYS\_FileSystem](./pro-api.sys_filesystem.md) &gt; [saveFile](./pro-api.sys_filesystem.savefile.md)

# SYS\_FileSystem.saveFile() method

保存文件

## 签名

```typescript
saveFile(fileData: File | Blob, fileName?: string): Promise<void>;
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

fileData

</td><td>

File \| Blob

</td><td>

文件数据

</td></tr>
<tr><td>

fileName

</td><td>

string

</td><td>

_（可选）_ 文件名称

</td></tr>
</tbody></table>

## 返回值

Promise&lt;void&gt;

## 备注

调用浏览器下载接口或 Electron 保存文件接口，将传入的文件流保存到本地
