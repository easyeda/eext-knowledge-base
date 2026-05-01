---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [SYS\_I18n](./pro-api.sys_i18n.md) &gt; [addLanguageChangedEventListener](./pro-api.sys_i18n.addlanguagechangedeventlistener.md)

# SYS\_I18n.addLanguageChangedEventListener() method

新增语言切换事件监听

## 签名

```typescript
addLanguageChangedEventListener(id: string, callFn: (newLanguage: string, lastLanguage: string) => void | Promise<void>, onlyOnce: boolean): void;
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

id

</td><td>

string

</td><td>

事件 ID，用以防止重复注册事件

</td></tr>
<tr><td>

callFn

</td><td>

(newLanguage: string, lastLanguage: string) =&gt; void \| Promise&lt;void&gt;

</td><td>

事件触发时的回调函数

</td></tr>
<tr><td>

onlyOnce

</td><td>

boolean

</td><td>

</td></tr>
</tbody></table>

## 返回值

void
