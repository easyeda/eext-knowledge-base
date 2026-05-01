---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [SYS\_IFrame](./pro-api.sys_iframe.md) &gt; [closeIFrame](./pro-api.sys_iframe.closeiframe.md)

# SYS\_IFrame.closeIFrame() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

关闭内联框架窗口

## 签名

```typescript
closeIFrame(id?: string): Promise<boolean>;
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

_（可选）_ 内联框架窗口 ID，如若传入 `undefined`<!-- -->，将关闭由本扩展打开的所有内联框架窗口

</td></tr>
</tbody></table>

## 返回值

Promise&lt;boolean&gt;

操作是否成功

## 备注

关闭指定 ID 的内联框架窗口

注意：本接口仅扩展有效，在独立脚本环境内调用将始终 `throw Error`
