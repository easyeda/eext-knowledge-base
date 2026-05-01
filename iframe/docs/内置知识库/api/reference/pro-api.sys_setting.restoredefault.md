---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [SYS\_Setting](./pro-api.sys_setting.md) &gt; [restoreDefault](./pro-api.sys_setting.restoredefault.md)

# SYS\_Setting.restoreDefault() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

全局恢复默认设置

## 签名

```typescript
restoreDefault(): Promise<boolean>;
```

## 返回值

Promise&lt;boolean&gt;

操作是否成功

## 备注

将所有 EDA 设置恢复到默认状态，本操作将会丢失所有设置项，在调用时请特别注意
