---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [SYS\_Storage](./pro-api.sys_storage.md) &gt; [deleteExtensionUserConfig](./pro-api.sys_storage.deleteextensionuserconfig.md)

# SYS\_Storage.deleteExtensionUserConfig() method

删除扩展用户配置

## 签名

```typescript
deleteExtensionUserConfig(key: string): Promise<boolean>;
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

Promise&lt;boolean&gt;

操作是否成功

## 备注

注意：本接口仅扩展有效，在独立脚本环境内调用将始终 `throw Error`
