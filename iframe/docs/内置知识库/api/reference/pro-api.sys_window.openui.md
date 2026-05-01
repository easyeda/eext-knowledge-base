---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [SYS\_Window](./pro-api.sys_window.md) &gt; [openUI](./pro-api.sys_window.openui.md)

# SYS\_Window.openUI() method

打开 UI 窗口

## 签名

```typescript
openUI(uiName: string, args?: {
        [key: string]: any;
    }): Promise<void>;
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

uiName

</td><td>

string

</td><td>

UI 名称

</td></tr>
<tr><td>

args

</td><td>

\{ \[key: string\]: any; \}

</td><td>

_（可选）_ 可选参数对象

</td></tr>
</tbody></table>

## 返回值

Promise&lt;void&gt;

## 备注

非公开接口使用提醒：本接口按原样提供，不提供参数的额外文档，参数可能在任何版本出现破坏性更改并不另行通知
