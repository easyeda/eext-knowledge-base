[Home](./pro-api.md) &gt; [ISYS\_MessageBusTask](./pro-api.isys_messagebustask.md)

# ISYS\_MessageBusTask interface

消息总线任务

## 签名

```typescript
interface ISYS_MessageBusTask
```

## 属性

<table><thead><tr><th>

属性名

</th><th>

修饰符

</th><th>

类型

</th><th>

描述

</th></tr></thead>
<tbody><tr><td>

[cancel](./pro-api.isys_messagebustask.cancel.md)

</td><td>

</td><td>

() =&gt; void

</td><td>

调用以取消任务

</td></tr>
<tr><td>

[execute](./pro-api.isys_messagebustask.execute.md)

</td><td>

</td><td>

(message: any) =&gt; Promise&lt;void&gt;

</td><td>

任务处理

</td></tr>
<tr><td>

[running](./pro-api.isys_messagebustask.running.md)

</td><td>

</td><td>

() =&gt; boolean

</td><td>

检查运行状态

</td></tr>
</tbody></table>
