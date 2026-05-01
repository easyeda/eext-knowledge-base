---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [SYS\_Message](./pro-api.sys_message.md) &gt; [removeFollowMouseTip](./pro-api.sys_message.removefollowmousetip.md)

# SYS\_Message.removeFollowMouseTip() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

移除跟随鼠标的提示

## 签名

```typescript
removeFollowMouseTip(tip?: string): Promise<void>;
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

tip

</td><td>

string

</td><td>

_（可选）_ 提示内容，如若传入，则仅当当前提示为指定内容时才移除

</td></tr>
</tbody></table>

## 返回值

Promise&lt;void&gt;

## 备注

移除当前或指定的跟随鼠标的提示
