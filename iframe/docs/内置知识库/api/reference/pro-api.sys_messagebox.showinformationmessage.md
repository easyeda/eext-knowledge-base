---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [SYS\_MessageBox](./pro-api.sys_messagebox.md) &gt; [showInformationMessage](./pro-api.sys_messagebox.showinformationmessage.md)

# SYS\_MessageBox.showInformationMessage() method

> 警告：此 API 现已弃用。
>
> 请使用 [SYS\_Dialog.showInformationMessage()](./pro-api.sys_dialog.showinformationmessage.md) 替代

显示消息框

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

_（可选）_ 消息框标题

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

显示一个文字消息提示框
