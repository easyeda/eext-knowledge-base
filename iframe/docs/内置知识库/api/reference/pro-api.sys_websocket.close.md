---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [SYS\_WebSocket](./pro-api.sys_websocket.md) &gt; [close](./pro-api.sys_websocket.close.md)

# SYS\_WebSocket.close() method

关闭 WebSocket 连接

## 签名

```typescript
close(id: string, code?: number, reason?: string, extensionUuid?: string): void;
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

自定义的 WebSocket ID

</td></tr>
<tr><td>

code

</td><td>

number

</td><td>

_（可选）_ 数字状态码，对应 [WebSocket.CloseEvent](https://developer.mozilla.org/docs/Web/API/CloseEvent/code) 内允许的状态码

</td></tr>
<tr><td>

reason

</td><td>

string

</td><td>

_（可选）_ 一个人类可读的字符串，解释连接关闭的原因

</td></tr>
<tr><td>

extensionUuid

</td><td>

string

</td><td>

_（可选）_ 扩展 UUID，一般不需要指定，仅当需要操作其它扩展建立的 WebSocket 连接时才需要指定为其它扩展的 UUID

</td></tr>
</tbody></table>

## 返回值

void

## 备注

注意：本接口需要使用者启用扩展的外部交互权限，如若未启用将始终 `throw Error`
