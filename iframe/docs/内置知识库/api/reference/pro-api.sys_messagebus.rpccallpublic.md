---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [SYS\_MessageBus](./pro-api.sys_messagebus.md) &gt; [rpcCallPublic](./pro-api.sys_messagebus.rpccallpublic.md)

# SYS\_MessageBus.rpcCallPublic() method

公共消息总线：调用 RPC 服务

## 签名

```typescript
rpcCallPublic(topic: string, message?: any, timeout?: number): Promise<any>;
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

_（可选）_ 消息

</td></tr>
<tr><td>

timeout

</td><td>

number

</td><td>

_（可选）_ 超时

</td></tr>
</tbody></table>

## 返回值

Promise&lt;any&gt;

RPC 服务返回
