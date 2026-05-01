---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [SYS\_MessageBus](./pro-api.sys_messagebus.md) &gt; [subscribe](./pro-api.sys_messagebus.subscribe.md)

# SYS\_MessageBus.subscribe() method

私有消息总线：订阅消息

## 签名

```typescript
subscribe(topic: string, callbackFn: (message: any) => void): ISYS_MessageBusTask;
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

接收到消息后的回调

</td></tr>
</tbody></table>

## 返回值

[ISYS\_MessageBusTask](./pro-api.isys_messagebustask.md)

消息总线任务

## 备注

持久性订阅消息
