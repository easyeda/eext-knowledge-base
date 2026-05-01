---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [SYS\_MessageBus](./pro-api.sys_messagebus.md) &gt; [publishPublic](./pro-api.sys_messagebus.publishpublic.md)

# SYS\_MessageBus.publishPublic() method

公共消息总线：发布消息

## 签名

```typescript
publishPublic(topic: string, message: any): void;
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

message

</td><td>

any

</td><td>

消息

</td></tr>
</tbody></table>

## 返回值

void

## 备注

将消息广播给每一个 Subscriber
