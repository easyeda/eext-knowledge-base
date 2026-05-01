---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [SYS\_MessageBus](./pro-api.sys_messagebus.md) &gt; [rpcService](./pro-api.sys_messagebus.rpcservice.md)

# SYS\_MessageBus.rpcService() method

私有消息总线：注册 RPC 服务

## 签名

```typescript
rpcService(topic: string, callbackFn: (...args: Array<any>) => any | Promise<any>): void;
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

(...args: Array&lt;any&gt;) =&gt; any \| Promise&lt;any&gt;

</td><td>

接收到消息后的回调

</td></tr>
</tbody></table>

## 返回值

void
