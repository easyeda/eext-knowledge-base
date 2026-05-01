---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [SYS\_FileSystem](./pro-api.sys_filesystem.md) &gt; [getDocumentsPath](./pro-api.sys_filesystem.getdocumentspath.md)

# SYS\_FileSystem.getDocumentsPath() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

获取文档目录路径

## 签名

```typescript
getDocumentsPath(): Promise<string>;
```

## 返回值

Promise&lt;string&gt;

文档目录路径

## 备注

返回的路径中，结尾不包含斜杠 `/`<!-- -->（或反斜杠 `\`<!-- -->）

注意 1：本接口仅客户端有效，在浏览器环境内调用将始终 `throw Error`

注意 2：本接口需要使用者启用扩展的外部交互权限，如若未启用将始终 `throw Error`
