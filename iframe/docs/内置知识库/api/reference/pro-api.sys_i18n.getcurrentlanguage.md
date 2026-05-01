---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [SYS\_I18n](./pro-api.sys_i18n.md) &gt; [getCurrentLanguage](./pro-api.sys_i18n.getcurrentlanguage.md)

# SYS\_I18n.getCurrentLanguage() method

获取当前语言环境

## 签名

```typescript
getCurrentLanguage(): Promise<string>;
```

## 返回值

Promise&lt;string&gt;

语言

## 备注

能够获取到的语言受 EDA 当前支持语言限制，其它 API 支持的语言需要显式指定 `language` 参数才能使用
