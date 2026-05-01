---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [SYS\_I18n](./pro-api.sys_i18n.md) &gt; [importMultilingualLanguage](./pro-api.sys_i18n.importmultilinguallanguage.md)

# SYS\_I18n.importMultilingualLanguage() method

导入多语言：指定命名空间和语言

## 签名

```typescript
importMultilingualLanguage(namespace: string, language: string, source: ISYS_LanguageKeyValuePairs): boolean;
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

namespace

</td><td>

string

</td><td>

命名空间

</td></tr>
<tr><td>

language

</td><td>

string

</td><td>

语言

</td></tr>
<tr><td>

source

</td><td>

[ISYS\_LanguageKeyValuePairs](./pro-api.isys_languagekeyvaluepairs.md)

</td><td>

欲导入的多语言数据对象

</td></tr>
</tbody></table>

## 返回值

boolean

导入是否成功
