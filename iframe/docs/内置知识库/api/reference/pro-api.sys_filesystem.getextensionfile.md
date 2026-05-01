---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [SYS\_FileSystem](./pro-api.sys_filesystem.md) &gt; [getExtensionFile](./pro-api.sys_filesystem.getextensionfile.md)

# SYS\_FileSystem.getExtensionFile() method

获取扩展内的文件

## 签名

```typescript
getExtensionFile(uri: string): Promise<File | undefined>;
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

文件路径

</td></tr>
</tbody></table>

## 返回值

Promise&lt;File \| undefined&gt;

File 格式文件
