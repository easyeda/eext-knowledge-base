---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [SYS\_FileManager](./pro-api.sys_filemanager.md) &gt; [getDocumentSource](./pro-api.sys_filemanager.getdocumentsource.md)

# SYS\_FileManager.getDocumentSource() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

获取文档源码

## 签名

```typescript
getDocumentSource(): Promise<string | undefined>;
```

## 返回值

Promise&lt;string \| undefined&gt;

文档源码数据，`undefined` 表示当前未打开文档或数据获取失败
