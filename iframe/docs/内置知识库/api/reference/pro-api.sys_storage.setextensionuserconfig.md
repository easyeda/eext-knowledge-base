---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [SYS\_Storage](./pro-api.sys_storage.md) &gt; [setExtensionUserConfig](./pro-api.sys_storage.setextensionuserconfig.md)

# SYS\_Storage.setExtensionUserConfig() method

设置扩展用户配置

## 签名

```typescript
setExtensionUserConfig(key: string, value: any): Promise<boolean>;
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
<tr><td>

value

</td><td>

any

</td><td>

值

</td></tr>
</tbody></table>

## 返回值

Promise&lt;boolean&gt;

操作是否成功

## 备注

新建扩展用户配置也使用本接口，在设置时如果不存在将会自动新建

注意：本接口仅扩展有效，在独立脚本环境内调用将始终 `throw Error`
