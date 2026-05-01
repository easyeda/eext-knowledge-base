---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [SYS\_Message](./pro-api.sys_message.md) &gt; [showFollowMouseTip](./pro-api.sys_message.showfollowmousetip.md)

# SYS\_Message.showFollowMouseTip() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

展示跟随鼠标的提示

## 签名

```typescript
showFollowMouseTip(tip: string, msTimeout?: number): Promise<void>;
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

提示内容

</td></tr>
<tr><td>

msTimeout

</td><td>

number

</td><td>

_（可选）_ 展示时间，以毫秒（ms）为单位，如若不传入则持续展示，直到调用 [removeFollowMouseTip](./pro-api.sys_message.removefollowmousetip.md) 或被其它提示覆盖

</td></tr>
</tbody></table>

## 返回值

Promise&lt;void&gt;

## 备注

同一时间只能展示一条提示，如果展示新的提示，则之前的提示将被自动移除
