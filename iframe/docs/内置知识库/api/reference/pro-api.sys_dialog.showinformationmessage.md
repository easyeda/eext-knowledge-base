---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [SYS\_Dialog](./pro-api.sys_dialog.md) &gt; [showInformationMessage](./pro-api.sys_dialog.showinformationmessage.md)

# SYS\_Dialog.showInformationMessage() method

弹出消息窗口

## 签名

```typescript
showInformationMessage(content: string, title?: string, buttonTitle?: string): void;
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

content

</td><td>

string

</td><td>

消息文本，支持使用 `\n` 换行

</td></tr>
<tr><td>

title

</td><td>

string

</td><td>

_（可选）_ 弹出窗口标题

</td></tr>
<tr><td>

buttonTitle

</td><td>

string

</td><td>

_（可选）_ 按钮标题，为空则不显示按钮

</td></tr>
</tbody></table>

## 返回值

void

## 备注

显示一个文字消息窗口
