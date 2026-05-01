---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [SYS\_MessageBus](./pro-api.sys_messagebus.md) &gt; [pullAsyncPublic](./pro-api.sys_messagebus.pullasyncpublic.md)

# SYS\_MessageBus.pullAsyncPublic() method

公共消息总线：拉消息 Promise 版本

## 签名

```typescript
pullAsyncPublic(topic: string): Promise<any>;
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
</tbody></table>

## 返回值

Promise&lt;any&gt;

拉取到的消息

## 备注

每次只能拉一个消息，可以使用 `await` 等待消息拉取
