---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [SYS\_Storage](./pro-api.sys_storage.md) &gt; [setExtensionAllUserConfigs](./pro-api.sys_storage.setextensionalluserconfigs.md)

# SYS\_Storage.setExtensionAllUserConfigs() method

设置扩展所有用户配置

## 签名

```typescript
setExtensionAllUserConfigs(configs: {
        [key: string]: any;
    }): Promise<boolean>;
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

configs

</td><td>

\{ \[key: string\]: any; \}

</td><td>

扩展所有用户配置

</td></tr>
</tbody></table>

## 返回值

Promise&lt;boolean&gt;

操作是否成功

## 备注

此举会覆盖当前扩展的所有用户配置信息，请谨慎操作

注意：本接口仅扩展有效，在独立脚本环境内调用将始终 `throw Error`
