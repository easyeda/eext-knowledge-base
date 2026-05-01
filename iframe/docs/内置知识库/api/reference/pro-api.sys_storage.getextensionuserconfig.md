---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [SYS\_Storage](./pro-api.sys_storage.md) &gt; [getExtensionUserConfig](./pro-api.sys_storage.getextensionuserconfig.md)

# SYS\_Storage.getExtensionUserConfig() method

获取扩展用户配置

## 签名

```typescript
getExtensionUserConfig(key: string): any | undefined;
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

key

</td><td>

string

</td><td>

配置项

</td></tr>
</tbody></table>

## 返回值

any \| undefined

配置项对应的值，不存在将返回 `undefined`

## 备注

注意：本接口仅扩展有效，在独立脚本环境内调用将始终 `throw Error`
