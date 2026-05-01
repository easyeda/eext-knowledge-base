---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [SYS\_MessageBus](./pro-api.sys_messagebus.md) &gt; [createPrivateMessageBus](./pro-api.sys_messagebus.createprivatemessagebus.md)

# SYS\_MessageBus.createPrivateMessageBus() method

创建私有消息总线

## 签名

```typescript
createPrivateMessageBus(): void;
```

## 返回值

void

## 备注

一般无需调用该方法，在进行监听或发送消息时会自动创建私有消息总线
