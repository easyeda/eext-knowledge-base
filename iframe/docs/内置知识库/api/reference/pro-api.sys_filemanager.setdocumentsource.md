---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [SYS\_FileManager](./pro-api.sys_filemanager.md) &gt; [setDocumentSource](./pro-api.sys_filemanager.setdocumentsource.md)

# SYS\_FileManager.setDocumentSource() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

修改文档源码

## 签名

```typescript
setDocumentSource(source: string): Promise<boolean>;
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

source

</td><td>

string

</td><td>

文档源码

</td></tr>
</tbody></table>

## 返回值

Promise&lt;boolean&gt;

是否修改成功，如果输入的文档源码格式错误，将返回 `false` 的结果
