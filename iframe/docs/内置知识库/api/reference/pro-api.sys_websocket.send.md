---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [SYS\_WebSocket](./pro-api.sys_websocket.md) &gt; [send](./pro-api.sys_websocket.send.md)

# SYS\_WebSocket.send() method

向 WebSocket 服务器发送数据

## 签名

```typescript
send(id: string, data: string | ArrayBuffer | Blob | ArrayBufferView, extensionUuid?: string): void;
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

data

</td><td>

string \| ArrayBuffer \| Blob \| ArrayBufferView

</td><td>

发送的数据

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
