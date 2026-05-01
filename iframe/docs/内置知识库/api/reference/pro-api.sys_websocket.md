[Home](./pro-api.md) &gt; [SYS\_WebSocket](./pro-api.sys_websocket.md)

# SYS\_WebSocket class

系统 / WebSocket 类

## 签名

```typescript
declare class SYS_WebSocket
```

## 备注

与 WebSocket 服务器交互

## 方法

<table><thead><tr><th>

方法名

</th><th>

修饰符

</th><th>

描述

</th></tr></thead>
<tbody><tr><td>

[close(id, code, reason, extensionUuid)](./pro-api.sys_websocket.close.md)

</td><td>

</td><td>

关闭 WebSocket 连接

</td></tr>
<tr><td>

[register(id, serviceUri, receiveMessageCallFn, connectedCallFn, protocols)](./pro-api.sys_websocket.register.md)

</td><td>

</td><td>

注册 WebSocket 连接

</td></tr>
<tr><td>

[send(id, data, extensionUuid)](./pro-api.sys_websocket.send.md)

</td><td>

</td><td>

向 WebSocket 服务器发送数据

</td></tr>
</tbody></table>
