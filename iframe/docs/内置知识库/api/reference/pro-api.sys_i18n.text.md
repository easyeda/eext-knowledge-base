---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [SYS\_I18n](./pro-api.sys_i18n.md) &gt; [text](./pro-api.sys_i18n.text.md)

# SYS\_I18n.text() method

输出语言文本

## 签名

```typescript
text(tag: string, namespace?: string, language?: string, ...args: Array<any>): string;
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

tag

</td><td>

string

</td><td>

文本标签，对应多语言文件键值对中的键

</td></tr>
<tr><td>

namespace

</td><td>

string

</td><td>

_（可选）_ 文本命名空间，在扩展运行环境内默认为扩展的 UUID，否则为系统默认命名空间

</td></tr>
<tr><td>

language

</td><td>

string

</td><td>

_（可选）_ 语言，`undefined` 为 EDA 当前的显示语言

</td></tr>
<tr><td>

args

</td><td>

Array&lt;any&gt;

</td><td>

语言文本中替换占位符的参数

</td></tr>
</tbody></table>

## 返回值

string

语言文本

## 备注

可以使用 `${1}` 格式的占位符表示参数；

语言优先级：当前显示语言 &gt; 系统默认语言 &gt; 数据集中第一个搜索到的包含该文本标签的语言 &gt; 文本标签(tag)
