[Home](./pro-api.md) &gt; [SYS\_MessageBus](./pro-api.sys_messagebus.md)

# SYS\_MessageBus class

系统 / 消息总线类

## 签名

```typescript
declare class SYS_MessageBus
```

## 备注

## 方法

<table><thead><tr><th>

方法名

</th><th>

修饰符

</th><th>

描述

</th></tr></thead>
<tbody><tr><td>

[createPrivateMessageBus()](./pro-api.sys_messagebus.createprivatemessagebus.md)

</td><td>

</td><td>

创建私有消息总线

</td></tr>
<tr><td>

[publish(topic, message)](./pro-api.sys_messagebus.publish.md)

</td><td>

</td><td>

私有消息总线：发布消息

</td></tr>
<tr><td>

[publishPublic(topic, message)](./pro-api.sys_messagebus.publishpublic.md)

</td><td>

</td><td>

公共消息总线：发布消息

</td></tr>
<tr><td>

[pull(topic, callbackFn)](./pro-api.sys_messagebus.pull.md)

</td><td>

</td><td>

私有消息总线：拉消息

</td></tr>
<tr><td>

[pullAsync(topic)](./pro-api.sys_messagebus.pullasync.md)

</td><td>

</td><td>

私有消息总线：拉消息 Promise 版本

</td></tr>
<tr><td>

[pullAsyncPublic(topic)](./pro-api.sys_messagebus.pullasyncpublic.md)

</td><td>

</td><td>

公共消息总线：拉消息 Promise 版本

</td></tr>
<tr><td>

[pullPublic(topic, callbackFn)](./pro-api.sys_messagebus.pullpublic.md)

</td><td>

</td><td>

公共消息总线：拉消息

</td></tr>
<tr><td>

[push(topic, message)](./pro-api.sys_messagebus.push.md)

</td><td>

</td><td>

私有消息总线：推消息

</td></tr>
<tr><td>

[pushPublic(topic, message)](./pro-api.sys_messagebus.pushpublic.md)

</td><td>

</td><td>

公共消息总线：推消息

</td></tr>
<tr><td>

[removePrivateMessageBus()](./pro-api.sys_messagebus.removeprivatemessagebus.md)

</td><td>

</td><td>

移除私有消息总线

</td></tr>
<tr><td>

[rpcCall(topic, message, timeout)](./pro-api.sys_messagebus.rpccall.md)

</td><td>

</td><td>

私有消息总线：调用 RPC 服务

</td></tr>
<tr><td>

[rpcCallPublic(topic, message, timeout)](./pro-api.sys_messagebus.rpccallpublic.md)

</td><td>

</td><td>

公共消息总线：调用 RPC 服务

</td></tr>
<tr><td>

[rpcService(topic, callbackFn)](./pro-api.sys_messagebus.rpcservice.md)

</td><td>

</td><td>

私有消息总线：注册 RPC 服务

</td></tr>
<tr><td>

[rpcServicePublic(topic, callbackFn)](./pro-api.sys_messagebus.rpcservicepublic.md)

</td><td>

</td><td>

公共消息总线：注册 RPC 服务

</td></tr>
<tr><td>

[subscribe(topic, callbackFn)](./pro-api.sys_messagebus.subscribe.md)

</td><td>

</td><td>

私有消息总线：订阅消息

</td></tr>
<tr><td>

[subscribeOnce(topic, callbackFn)](./pro-api.sys_messagebus.subscribeonce.md)

</td><td>

</td><td>

私有消息总线：订阅单次消息

</td></tr>
<tr><td>

[subscribeOncePublic(topic, callbackFn)](./pro-api.sys_messagebus.subscribeoncepublic.md)

</td><td>

</td><td>

公共消息总线：订阅单次消息

</td></tr>
<tr><td>

[subscribePublic(topic, callbackFn)](./pro-api.sys_messagebus.subscribepublic.md)

</td><td>

</td><td>

公共消息总线：订阅消息

</td></tr>
</tbody></table>
