---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [SYS\_Dialog](./pro-api.sys_dialog.md) &gt; [showInputDialog](./pro-api.sys_dialog.showinputdialog.md)

# SYS\_Dialog.showInputDialog() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

弹出输入窗口

## 签名

```typescript
showInputDialog(beforeContent?: string, afterContent?: string, title?: string, type?: 'color' | 'date' | 'datetime-local' | 'email' | 'mouth' | 'number' | 'password' | 'tel' | 'text' | 'time' | 'url' | 'week', value?: string | number, otherProperty?: {
        max?: number;
        maxlength?: number;
        min?: number;
        minlength?: number;
        multiple?: boolean;
        pattern?: RegExp;
        placeholder?: string;
        readonly?: boolean;
        step?: number;
    }, callbackFn?: (value: any) => void): void;
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

beforeContent

</td><td>

string

</td><td>

_（可选）_ 输入框上方文字

</td></tr>
<tr><td>

afterContent

</td><td>

string

</td><td>

_（可选）_ 输入框下方文字

</td></tr>
<tr><td>

title

</td><td>

string

</td><td>

_（可选）_ 弹出窗口标题

</td></tr>
<tr><td>

type

</td><td>

'color' \| 'date' \| 'datetime-local' \| 'email' \| 'mouth' \| 'number' \| 'password' \| 'tel' \| 'text' \| 'time' \| 'url' \| 'week'

</td><td>

_（可选）_ 输入框类型

</td></tr>
<tr><td>

value

</td><td>

string \| number

</td><td>

_（可选）_ 输入框默认值

</td></tr>
<tr><td>

otherProperty

</td><td>

\{ max?: number; maxlength?: number; min?: number; minlength?: number; multiple?: boolean; pattern?: RegExp; placeholder?: string; readonly?: boolean; step?: number; \}

</td><td>

_（可选）_ 其它参数，可参考 [The HTML Input element](https://developer.mozilla.org/docs/Web/HTML/Element/input#attributes)

</td></tr>
<tr><td>

callbackFn

</td><td>

(value: any) =&gt; void

</td><td>

_（可选）_ 回调函数

</td></tr>
</tbody></table>

## 返回值

void

用户输入的值，始终为 `string` 类型，除非用户点击了 \*\*取消\*\* 按钮
