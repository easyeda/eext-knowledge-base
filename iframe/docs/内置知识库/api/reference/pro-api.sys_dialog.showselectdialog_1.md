---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [SYS\_Dialog](./pro-api.sys_dialog.md) &gt; [showSelectDialog](./pro-api.sys_dialog.showselectdialog_1.md)

# SYS\_Dialog.showSelectDialog() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

弹出多选窗口

## 签名

```typescript
showSelectDialog(options: Array<string> | Array<{
        value: string;
        displayContent: string;
    }>, beforeContent?: string, afterContent?: string, title?: string, defaultOption?: Array<string>, multiple?: true, callbackFn?: (value: Array<string>) => void | Promise<void>): void;
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

options

</td><td>

Array&lt;string&gt; \| Array&lt;{ value: string; displayContent: string; }&gt;

</td><td>

选项列表，可以为字符串数组或对象数组，在未指定 `defaultOption` 时，默认值为列表的第一项；

如若为字符串数组，则选项的值和选项的展示内容将保持一致；

如若为对象数组，则 `value` 表示选项的值，`displayContent` 表示选项的展示内容

</td></tr>
<tr><td>

beforeContent

</td><td>

string

</td><td>

_（可选）_ 多选框上方文字

</td></tr>
<tr><td>

afterContent

</td><td>

string

</td><td>

_（可选）_ 多选框下方文字

</td></tr>
<tr><td>

title

</td><td>

string

</td><td>

_（可选）_ 多选框标题

</td></tr>
<tr><td>

defaultOption

</td><td>

Array&lt;string&gt;

</td><td>

_（可选）_ 默认选项数组，以选项的值作为匹配参数

</td></tr>
<tr><td>

multiple

</td><td>

true

</td><td>

_（可选）_ 是否支持多选

</td></tr>
<tr><td>

callbackFn

</td><td>

(value: Array&lt;string&gt;) =&gt; void \| Promise&lt;void&gt;

</td><td>

_（可选）_ 回调函数

</td></tr>
</tbody></table>

## 返回值

void

用户选择的值的集合数组，对应传入的 `options` 中的 `value` 字段
