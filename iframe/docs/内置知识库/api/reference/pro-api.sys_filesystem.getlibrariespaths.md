---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [SYS\_FileSystem](./pro-api.sys_filesystem.md) &gt; [getLibrariesPaths](./pro-api.sys_filesystem.getlibrariespaths.md)

# SYS\_FileSystem.getLibrariesPaths() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

获取库目录路径

## 签名

```typescript
getLibrariesPaths(): Promise<Array<string>>;
```

## 返回值

Promise&lt;Array&lt;string&gt;&gt;

库目录路径数组

## 备注

注意 1：本接口仅全离线客户端有效，在浏览器环境内调用将始终 `throw Error`

注意 2：本接口需要使用者启用扩展的外部交互权限，如若未启用将始终 `throw Error`
