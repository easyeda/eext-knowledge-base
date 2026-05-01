---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [PCB\_Event](./pro-api.pcb_event.md) &gt; [addMouseEventListener](./pro-api.pcb_event.addmouseeventlistener.md)

# PCB\_Event.addMouseEventListener() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

新增鼠标事件监听

## 签名

```typescript
addMouseEventListener(id: string, eventType: 'all' | EPCB_MouseEventType, callFn: (eventType: EPCB_MouseEventType, props: [
        {
            primitiveId: string;
            primitiveType: EPCB_PrimitiveType;
            net?: string;
            designator?: string;
            parentComponentPrimitiveId?: string;
            parentComponentDesignator?: string;
        }
    ]) => void | Promise<void>, onlyOnce?: boolean): void;
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

'all' \| EPCB\_MouseEventType

</td><td>

事件类型

</td></tr>
<tr><td>

callFn

</td><td>

(eventType: EPCB\_MouseEventType, props: \[ { primitiveId: string; primitiveType: [EPCB\_PrimitiveType](./pro-api.epcb_primitivetype.md)<!-- -->; net?: string; designator?: string; parentComponentPrimitiveId?: string; parentComponentDesignator?: string; } \]) =&gt; void \| Promise&lt;void&gt;

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
