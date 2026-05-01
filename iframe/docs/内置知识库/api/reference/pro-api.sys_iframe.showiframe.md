---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [SYS\_IFrame](./pro-api.sys_iframe.md) &gt; [showIFrame](./pro-api.sys_iframe.showiframe.md)

# SYS\_IFrame.showIFrame() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

显示内联框架窗口

## 签名

```typescript
showIFrame(id?: string): Promise<boolean>;
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

_（可选）_ 内联框架窗口 ID

</td></tr>
</tbody></table>

## 返回值

Promise&lt;boolean&gt;

操作是否成功

## 备注

本接口为结果导向的： 如若未找到指定内联框架窗口，接口将会返回 `false`<!-- -->； 如若在执行操作前该内联框架窗口已处于显示状态，接口将会返回 `true`

注意：本接口仅扩展有效，在独立脚本环境内调用将始终 `throw Error`
