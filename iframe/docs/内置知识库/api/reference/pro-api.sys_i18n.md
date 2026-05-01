[Home](./pro-api.md) &gt; [SYS\_I18n](./pro-api.sys_i18n.md)

# SYS\_I18n class

系统 / 多语言类

## 签名

```typescript
declare class SYS_I18n
```

## 备注

使用多语言系统展示多语言文本

## 方法

<table><thead><tr><th>

方法名

</th><th>

修饰符

</th><th>

描述

</th></tr></thead>
<tbody><tr><td>

[addLanguageChangedEventListener(id, callFn, onlyOnce)](./pro-api.sys_i18n.addlanguagechangedeventlistener.md)

</td><td>

</td><td>

新增语言切换事件监听

</td></tr>
<tr><td>

[getAllSupportedLanguages()](./pro-api.sys_i18n.getallsupportedlanguages.md)

</td><td>

</td><td>

查询所有支持的语言

</td></tr>
<tr><td>

[getCurrentLanguage()](./pro-api.sys_i18n.getcurrentlanguage.md)

</td><td>

</td><td>

获取当前语言环境

</td></tr>
<tr><td>

[importMultilingual(language, source)](./pro-api.sys_i18n.importmultilingual.md)

</td><td>

</td><td>

导入多语言

</td></tr>
<tr><td>

[importMultilingualLanguage(namespace, language, source)](./pro-api.sys_i18n.importmultilinguallanguage.md)

</td><td>

</td><td>

导入多语言：指定命名空间和语言

</td></tr>
<tr><td>

[importMultilingualNamespace(namespace, source)](./pro-api.sys_i18n.importmultilingualnamespace.md)

</td><td>

</td><td>

导入多语言：指定命名空间

</td></tr>
<tr><td>

[isEventListenerAlreadyExist(id)](./pro-api.sys_i18n.iseventlisteneralreadyexist.md)

</td><td>

</td><td>

查询事件监听是否存在

</td></tr>
<tr><td>

[isLanguageSupported(language)](./pro-api.sys_i18n.islanguagesupported.md)

</td><td>

</td><td>

检查语言是否受支持

</td></tr>
<tr><td>

[removeEventListener(id)](./pro-api.sys_i18n.removeeventlistener.md)

</td><td>

</td><td>

移除事件监听

</td></tr>
<tr><td>

[text(tag, namespace, language, args)](./pro-api.sys_i18n.text.md)

</td><td>

</td><td>

输出语言文本

</td></tr>
</tbody></table>
