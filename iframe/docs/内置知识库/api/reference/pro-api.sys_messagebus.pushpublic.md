---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [SYS\_MessageBus](./pro-api.sys_messagebus.md) &gt; [pushPublic](./pro-api.sys_messagebus.pushpublic.md)

# SYS\_MessageBus.pushPublic() method

公共消息总线：推消息

## 签名

```typescript
pushPublic(topic: string, message: any): void;
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

每个消息只有一个 Puller 可以收到
