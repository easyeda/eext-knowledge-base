---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [SYS\_Storage](./pro-api.sys_storage.md) &gt; [getExtensionAllUserConfigs](./pro-api.sys_storage.getextensionalluserconfigs.md)

# SYS\_Storage.getExtensionAllUserConfigs() method

获取扩展所有用户配置

## 签名

```typescript
getExtensionAllUserConfigs(): {
        [key: string]: any;
    };
```

## 返回值

\{ \[key: string\]: any; \}

扩展所有用户配置信息

## 备注

注意：本接口仅扩展有效，在独立脚本环境内调用将始终 `throw Error`
