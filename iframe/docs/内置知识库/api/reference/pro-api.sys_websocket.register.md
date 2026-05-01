---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [SYS\_WebSocket](./pro-api.sys_websocket.md) &gt; [register](./pro-api.sys_websocket.register.md)

# SYS\_WebSocket.register() method

注册 WebSocket 连接

## 签名

```typescript
register(id: string, serviceUri: string, receiveMessageCallFn?: (event: MessageEvent<any>) => void | Promise<void>, connectedCallFn?: () => void | Promise<void>, protocols?: string | Array<string>): void;
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

自定义 WebSocket ID

</td></tr>
<tr><td>

serviceUri

</td><td>

string

</td><td>

WebSocket 服务地址

</td></tr>
<tr><td>

receiveMessageCallFn

</td><td>

(event: MessageEvent&lt;any&gt;) =&gt; void \| Promise&lt;void&gt;

</td><td>

_（可选）_ 接收到消息时的回调函数

</td></tr>
<tr><td>

connectedCallFn

</td><td>

() =&gt; void \| Promise&lt;void&gt;

</td><td>

_（可选）_ 连接建立时的回调函数

</td></tr>
<tr><td>

protocols

</td><td>

string \| Array&lt;string&gt;

</td><td>

_（可选）_ 子协议

</td></tr>
</tbody></table>

## 返回值

void

## 备注

可以用来执行前检测 WebSocket 连接是否正常，但需要注意 \*\*不要尝试相同 ID 不同参数的连接\*\*，这会造成混乱： 如果存在指定 ID 且处于活跃状态中的 WebSocket 连接，那么其余参数的变更将不会被应用

注意：本接口需要使用者启用扩展的外部交互权限，如若未启用将始终 `throw Error`
