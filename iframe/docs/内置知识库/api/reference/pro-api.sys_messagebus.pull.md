---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [SYS\_MessageBus](./pro-api.sys_messagebus.md) &gt; [pull](./pro-api.sys_messagebus.pull.md)

# SYS\_MessageBus.pull() method

私有消息总线：拉消息

## 签名

```typescript
pull(topic: string, callbackFn: (message: any) => void): ISYS_MessageBusTask;
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

topic

</td><td>

string

</td><td>

主题

</td></tr>
<tr><td>

callbackFn

</td><td>

(message: any) =&gt; void

</td><td>

拉到消息后的回调

</td></tr>
</tbody></table>

## 返回值

[ISYS\_MessageBusTask](./pro-api.isys_messagebustask.md)

消息总线任务

## 备注

每次只能拉一个消息
