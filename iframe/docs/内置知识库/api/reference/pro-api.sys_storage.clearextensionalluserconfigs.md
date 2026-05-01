---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [SYS\_Storage](./pro-api.sys_storage.md) &gt; [clearExtensionAllUserConfigs](./pro-api.sys_storage.clearextensionalluserconfigs.md)

# SYS\_Storage.clearExtensionAllUserConfigs() method

清除扩展所有用户配置

## 签名

```typescript
clearExtensionAllUserConfigs(): Promise<boolean>;
```

## 返回值

Promise&lt;boolean&gt;

操作是否成功

## 备注

此举会删除当前扩展的所有用户配置信息，请谨慎操作

注意：本接口仅扩展有效，在独立脚本环境内调用将始终 `throw Error`
