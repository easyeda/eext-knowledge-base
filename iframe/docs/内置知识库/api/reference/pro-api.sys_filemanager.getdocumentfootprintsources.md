---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [SYS\_FileManager](./pro-api.sys_filemanager.md) &gt; [getDocumentFootprintSources](./pro-api.sys_filemanager.getdocumentfootprintsources.md)

# SYS\_FileManager.getDocumentFootprintSources() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

获取文档封装源码

## 签名

```typescript
getDocumentFootprintSources(): Promise<Array<{
        footprintUuid: string;
        documentSource: string;
    }>>;
```

## 返回值

Promise&lt;Array&lt;{ footprintUuid: string; documentSource: string; }&gt;&gt;

文档封装源码数据，数据获取失败将返回空数组
