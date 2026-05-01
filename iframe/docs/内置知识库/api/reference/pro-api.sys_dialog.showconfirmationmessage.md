---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [SYS\_Dialog](./pro-api.sys_dialog.md) &gt; [showConfirmationMessage](./pro-api.sys_dialog.showconfirmationmessage.md)

# SYS\_Dialog.showConfirmationMessage() method

弹出确认窗口

## 签名

```typescript
showConfirmationMessage(content: string, title?: string, mainButtonTitle?: string, buttonTitle?: string, callbackFn?: (mainButtonClicked: boolean) => void): void;
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

mainButtonTitle

</td><td>

string

</td><td>

_（可选）_ 主要按钮标题

</td></tr>
<tr><td>

buttonTitle

</td><td>

string

</td><td>

_（可选）_ 主要按钮标题

</td></tr>
<tr><td>

callbackFn

</td><td>

(mainButtonClicked: boolean) =&gt; void

</td><td>

_（可选）_ 回调函数

</td></tr>
</tbody></table>

## 返回值

void

## 备注

显示一个拥有确认和取消按钮的窗口
