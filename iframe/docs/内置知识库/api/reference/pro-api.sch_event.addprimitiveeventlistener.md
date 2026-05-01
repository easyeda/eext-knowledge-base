---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [SCH\_Event](./pro-api.sch_event.md) &gt; [addPrimitiveEventListener](./pro-api.sch_event.addprimitiveeventlistener.md)

# SCH\_Event.addPrimitiveEventListener() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

新增图元事件监听

## 签名

```typescript
addPrimitiveEventListener(id: string, eventType: 'all' | ESCH_PrimitiveEventType, callFn: (eventType: ESCH_PrimitiveEventType, props: {
        primitiveIds: Array<string>;
    }) => void | Promise<void>, onlyOnce?: boolean): void;
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

事件 ID，用以防止重复注册事件

</td></tr>
<tr><td>

eventType

</td><td>

'all' \| [ESCH\_PrimitiveEventType](./pro-api.esch_primitiveeventtype.md)

</td><td>

事件类型

</td></tr>
<tr><td>

callFn

</td><td>

(eventType: [ESCH\_PrimitiveEventType](./pro-api.esch_primitiveeventtype.md)<!-- -->, props: { primitiveIds: Array&lt;string&gt;; }) =&gt; void \| Promise&lt;void&gt;

</td><td>

事件触发时的回调函数

</td></tr>
<tr><td>

onlyOnce

</td><td>

boolean

</td><td>

_（可选）_ 是否仅监听一次

</td></tr>
</tbody></table>

## 返回值

void

## 备注

注意：本接口仅扩展有效，在独立脚本环境内调用将始终 `throw Error`
